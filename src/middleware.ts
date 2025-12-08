import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const { nextUrl, cookies } = req;

    // ROTAS PROTEGIDAS
    if (!nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    // COOKIES
    const token = cookies.get("token")?.value;
    const tipo = cookies.get("tipo")?.value;

    // NÃO LOGADO
    if (!token || !tipo) {
        const url = new URL("/login", req.url);
        return NextResponse.redirect(url);
    }

    // NÃO É ADMIN
    if (tipo !== "admin") {
        const url = new URL("/login", req.url);
        return NextResponse.redirect(url);
    }

    // TUDO OK — LIBERA ACESSO
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
};
