<?php
/**
 * Pallavi Mishra — portfolio — headless WordPress setup.
 *
 * Copy the contents of this file into your active theme's functions.php,
 * or install it as a small must-use plugin (recommended: drop this file
 * into wp-content/mu-plugins/). It does four things:
 *
 *   1. Registers the `project` and `experience` custom post types.
 *   2. Exposes their ACF fields on the REST API response as `acf`.
 *   3. Adds CORS headers so the Next.js frontend can call the REST API.
 *   4. Pings Next.js's /api/revalidate route whenever a post is saved,
 *      so content changes go live immediately instead of waiting for
 *      the hourly ISR window.
 *
 * Requires the free Advanced Custom Fields (ACF) plugin.
 */

// --- 1. Custom post types -------------------------------------------------

add_action('init', function () {
    register_post_type('project', [
        'label' => 'Projects',
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'project',
        'supports' => ['title', 'thumbnail'],
        'menu_icon' => 'dashicons-portfolio',
        'has_archive' => true,
    ]);

    register_post_type('experience', [
        'label' => 'Experience',
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'experience',
        'supports' => ['title'],
        'menu_icon' => 'dashicons-businessman',
        'has_archive' => true,
    ]);
});

/**
 * Suggested ACF field groups (create these in ACF → Field Groups, or
 * import via ACF's JSON import using the shape below as a guide):
 *
 * Field group: "Project Details" — location: Post Type == project
 *   tagline      (Text)              — one-line description
 *   tech_stack   (Text)              — e.g. "React.js, Node.js, MongoDB"
 *   year         (Text)
 *   github_url   (URL)               — optional
 *   live_url     (URL)               — optional
 *   body         (Repeater of Textarea, or a single WYSIWYG split on
 *                 blank lines — lib/wordpress.ts handles either shape)
 *   highlights   (Repeater: single Text field per row)
 *
 * Field group: "Experience Details" — location: Post Type == experience
 *   role      (Text)     — e.g. "Software Engineer — Full-Stack"
 *   company   (Text)
 *   location  (Text)
 *   period    (Text)     — e.g. "Mar 2025 – Present"
 *   order     (Number)   — controls display order, lower = more recent
 *   bullets   (Repeater: single Text field per row)
 */

// --- 2. Expose ACF fields on REST responses -------------------------------

add_filter('acf/settings/rest_api_enabled', '__return_true');

// --- 3. CORS: allow the Next.js frontend to read the REST API ------------

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $allowed_origin = defined('NEXTJS_FRONTEND_ORIGIN')
            ? NEXTJS_FRONTEND_ORIGIN
            : 'https://your-nextjs-site.vercel.app';

        header('Access-Control-Allow-Origin: ' . $allowed_origin);
        header('Access-Control-Allow-Methods: GET');
        header('Access-Control-Allow-Credentials: false');
        return $value;
    });
}, 15);

// --- 4. On-demand revalidation webhook ------------------------------------

/**
 * Define these in wp-config.php:
 *   define('NEXTJS_REVALIDATE_URL', 'https://your-nextjs-site.vercel.app/api/revalidate');
 *   define('NEXTJS_REVALIDATE_SECRET', 'the same value as REVALIDATE_SECRET in .env');
 */
add_action('save_post', function ($post_id) {
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
        return;
    }
    if (!defined('NEXTJS_REVALIDATE_URL') || !defined('NEXTJS_REVALIDATE_SECRET')) {
        return;
    }

    $post_type = get_post_type($post_id);
    $tag = null;
    if ($post_type === 'project') $tag = 'projects';
    if ($post_type === 'experience') $tag = 'experience';
    if (!$tag) return;

    wp_remote_post(add_query_arg([
        'secret' => NEXTJS_REVALIDATE_SECRET,
        'tag' => $tag,
    ], NEXTJS_REVALIDATE_URL), [
        'timeout' => 5,
        'blocking' => false, // fire-and-forget, don't slow down the editor's save
    ]);

    // Also revalidate the specific project page, since it's cached
    // under its own tag as well (see getProject in lib/wordpress.ts).
    if ($post_type === 'project') {
        $slug = get_post_field('post_name', $post_id);
        wp_remote_post(add_query_arg([
            'secret' => NEXTJS_REVALIDATE_SECRET,
            'path' => "/projects/{$slug}",
        ], NEXTJS_REVALIDATE_URL), [
            'timeout' => 5,
            'blocking' => false,
        ]);
    }
});
