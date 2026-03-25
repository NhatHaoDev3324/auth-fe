"use client"
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import { path } from "@/config/path";
import { loginByEmail } from "@/api/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface SignInError {
    email?: string;
    password?: string;
}

export default function FormSignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPass, setShowPass] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<SignInError>({});

    const router = useRouter();

    async function handleSignIn() {
        if (loading) return;

        const newErrors: SignInError = {};
        if (!email) newErrors.email = "Email không được để trống";
        if (!password) newErrors.password = "Mật khẩu không được để trống";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true)

        try {
            const res = await loginByEmail(email, password);
            if (res.success) {
                const token = res.token;
                localStorage.setItem('token', token);

                toast.success("Đăng nhập thành công!");
                router.push('/');
            }
        } catch (error) {
            let message = "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.";
            if (axios.isAxiosError(error)) {
                message = error.response?.data?.message || message;
            }
            toast.error(message);
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleLogin = () => {
        if (loading) return;

        const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const options = {
            redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || 'http://localhost:3000/verify',
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
            access_type: 'offline',
            response_type: 'code',
            prompt: 'consent',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email',
            ].join(' '),
        };
        const qs = new URLSearchParams(options);
        window.location.href = `${rootUrl}?${qs.toString()}`;
    };

    return (
        <div className={`flex flex-col gap-4 min-w-sm`}>
            <div className={`flex flex-col gap-4 items-center text-center`}>
                <Image src={`/images/logo.svg`} alt={"Logo"} width={240} height={64} style={{ width: '64px', height: 'auto' }} />
                <p className="text-foreground text-sm max-w-xs">
                    Truy cập hệ thống VNSFintech để quản lý dữ liệu tài chính của bạn
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="grid">
                    <Label htmlFor="email" className={"mb-2"}>Email <span className="text-red-500">*</span></Label>
                    <Input
                        id="email"
                        type="text"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        onFocus={() => {
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={`w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none ${errors.email ? 'border-red-500 focus-visible:border-red-500' : 'focus-visible:border-input'}`}
                    />
                    <div className={"h-4"}>{errors.email && <small className="text-red-500">{errors.email}</small>}</div>
                </div>

                <div className="grid">
                    <div className="flex items-center mb-2">
                        <Label htmlFor="password" >Mật khẩu <span className="text-red-500">*</span></Label>
                        <Link href={path.FORGOT_PASSWORD} className="ml-auto text-sm underline-offset-2 hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className={"relative w-full"}>
                        <Input
                            id="password"
                            type={showPass ? "text" : "password"}
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                            }}
                            onFocus={() => {
                                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                            }}
                            className={`w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none ${errors.password ? 'border-red-500 focus-visible:border-red-500' : 'focus-visible:border-input'}`}
                        />
                        <button onClick={() => setShowPass((prev) => !prev)}
                            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground cursor-pointer">
                            {showPass ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>

                    <div className={"h-4"}>{errors.password && <small className="text-red-500">{errors.password}</small>}</div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    <Button size={"lg"} className="w-full" onClick={handleSignIn} disabled={loading}>
                        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Đăng nhập"}
                    </Button>

                    <div className="flex items-center gap-x-2">
                        <div className="flex-1 h-px bg-muted-foreground" />
                        <span className="text-sm text-foreground relative z-10 px-1">
                            Hoặc tiếp tục với
                        </span>
                        <div className="flex-1 h-px bg-muted-foreground" />
                    </div>

                    <Button size={"lg"} variant={"secondary"} className="w-full flex flex-row gap-2" onClick={handleGoogleLogin}>
                        <Image src={"/logo/business/google.svg"} alt={"Google Icon"} width={20} height={20} style={{ width: '20px', height: 'auto' }} />
                        <span>Đăng nhập với Google</span>
                    </Button>

                </div>
            </div>
            <div className={`text-center text-sm `}>
                Chưa có tài khoản?{" "}
                <Link href={path.SIGN_UP} className="underline underline-offset-4">
                    Đăng ký
                </Link>
            </div>
        </div>
    )
}