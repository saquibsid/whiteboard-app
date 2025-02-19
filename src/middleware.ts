import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const access_token_csai_id = req.cookies.get("access_token_csai_id")?.value;
    if (!access_token_csai_id) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_API_URL}/login`);
    }
    return NextResponse.next();
}

// Protect ALL routes except static assets
export const config = {
    matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};