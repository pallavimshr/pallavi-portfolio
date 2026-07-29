import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation endpoint, called by the WordPress webhook in
 * wordpress-setup/theme-functions.php whenever a project or experience
 * post is saved. This lets content changes go live immediately instead
 * of waiting for the hourly ISR window.
 *
 * WordPress calls:
 *   POST /api/revalidate?secret=<REVALIDATE_SECRET>&tag=projects
 *   POST /api/revalidate?secret=<REVALIDATE_SECRET>&path=/projects/my-slug
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");

  if (!tag && !path) {
    return NextResponse.json({ error: "Provide ?tag= or ?path=" }, { status: 400 });
  }

  if (tag) revalidateTag(tag);
  if (path) revalidatePath(path);

  return NextResponse.json({ revalidated: true, tag, path, now: Date.now() });
}
