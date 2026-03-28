import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import "@/style/globals.css";
import { Toaster } from "sonner";
import MountProvider from "@/provider/MountProvider";
import { ThemeProvider } from "@/provider/theme-provider";


const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin", "vietnamese"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-be-vietnam-pro",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

export const metadata: Metadata = {
    title: "Auth - NhatHao",
    description: "Hệ thống xác thực toàn diện, bảo mật và hiện đại được xây dựng bằng Next.js 15+, React 19 và Tailwind CSS 4. Dự án này cung cấp một quy trình xác thực người dùng hoàn chỉnh từ Đăng ký, OTP, Đăng nhập đến Quên mật khẩu với trải nghiệm người dùng cao cấp.",
    icons: {
        icon: [
            {
                url: "/logo/logo-dark.svg",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/logo/logo-light.svg",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: "/logo/logo-dark.svg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${beVietnamPro.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <MountProvider>
                        {children}
                        <Toaster />
                    </MountProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
