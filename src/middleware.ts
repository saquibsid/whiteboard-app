import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const access_token_csai_id = req.cookies.get("access_token_csai_id")?.value;
    console.log("access_token_csai_id", access_token_csai_id);
    // if (!access_token_csai_id) {
    //     return NextResponse.redirect('https://createstudio.app/login');
    // }
}

// Protect ALL routes except static assets
export const config = {
    matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};