'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { registerByGoogle } from '@/api/auth';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { path } from '@/config/path';

export default function VerifyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const hasCalledApi = useRef(false);

    useEffect(() => {
        const code = searchParams.get('code');

        if (!code) {
            router.replace(path.SIGN_IN);
            return;
        }

        if (hasCalledApi.current) return;
        hasCalledApi.current = true;

        const handleCallback = async () => {
            try {
                const res = await registerByGoogle(code);
                if (res.success) {
                    localStorage.setItem('token', res.token);
                    toast.success("Đăng nhập bằng Google thành công!");
                    router.push(path.HOME);
                } else {
                    throw new Error(res.message || "Xác thực thất bại");
                }
            } catch (error) {
                let message = "Xác thực Google thất bại.";
                if (axios.isAxiosError(error)) {
                    message = error.response?.data?.message || message;
                }
                toast.error(message);
                router.replace(path.SIGN_IN);
            }
        };

        handleCallback();
    }, [searchParams, router]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <div className="text-center">
                <h2 className="text-xl font-semibold">Đang xác thực...</h2>
                <p className="text-sm text-muted-foreground">Vui lòng chờ trong giây lát trong khi chúng tôi hoàn tất đăng nhập.</p>
            </div>
        </div>
    );
}
