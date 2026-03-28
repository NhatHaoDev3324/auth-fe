"use client";

import "@/style/globals.css";
import ColorBends from "@/components/customs/ColorBends";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { PATH } from "@/config/path";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";


export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <div className={`h-screen w-screen flex flex-col antialiased overflow-hidden `}>
            <main className="flex-1 overflow-auto flex relative">

                <div className="absolute top-8 left-4 md:left-8 z-20 flex items-center gap-2">
                    <Button onClick={() => router.push(PATH.HOME)} variant={"outline"} className="backdrop-blur-xl border bg-muted/20 text-foreground hover:bg-muted-foreground/20">
                        <ArrowLeft />
                        Quay lại trang chủ
                    </Button>
                    <Button size={"icon"} variant={"outline"} className="backdrop-blur-xl border bg-muted/20 text-foreground hover:bg-muted-foreground/20" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </Button>
                </div>

                <div className="absolute top-8 right-4 md:right-8 z-20 flex items-center gap-2">
                    <Button onClick={() => window.open("https://github.com/NhatHaoDev3324/auth-fe", "_blank")} className="bg-white text-black hover:bg-white/90">
                        <Image
                            src="/logo/business/github.svg"
                            alt="Github"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Github
                    </Button>
                </div>

                <div className="w-full absolute z-10 top-0 left-0 right-0 bottom-0 select-none md:mb-8">
                    {children}
                </div>

                <div className="w-full bg-background">
                    <ColorBends
                        colors={["#10D95E", "#f6465d", "#4faeff", "#d100e4"]}
                        rotation={0}
                        speed={0.4}
                        scale={0.8}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={0}
                        parallax={0.2}
                        noise={0.1}
                        transparent
                        autoRotate={1}
                    />
                </div>

                <div className="absolute bottom-0 h-12 w-full backdrop-blur-xl border bg-muted/20 text-foreground">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Design & Code by <a href="https://github.com/NhatHaoDev3324" target="_blank" className="text-foreground font-medium hover:underline cursor-pointer">NhatHao</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}
