"use client";

import "@/style/globals.css";
import ColorBends from "@/components/customs/ColorBends";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { PATH } from "@/config/path";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";


export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <div className={`h-screen w-screen flex flex-col antialiased overflow-hidden select-none`}>
            <main className="flex-1 overflow-auto flex relative">

                <Button onClick={() => router.push(PATH.HOME)} variant={"outline"} className="absolute top-8 left-4 md:left-8 z-20 backdrop-blur-xl border bg-muted/20 text-foreground hover:bg-muted-foreground/20">
                    <ArrowLeft />
                    Quay lại trang chủ
                </Button>
                <Button size={"icon"} variant={"outline"} className="absolute top-8 right-6 md:right-8 rounded-full z-20 backdrop-blur-xl border bg-muted/20 text-foreground hover:bg-muted-foreground/20" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun /> : <Moon />}
                </Button>
                <div className="w-full absolute z-10 top-0 left-0 right-0 bottom-0">
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
            </main>
        </div>
    );
}
