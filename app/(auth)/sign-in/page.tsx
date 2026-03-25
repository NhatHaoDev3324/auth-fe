'use client'
import FormSignIn from '@/components/forms/FormSignIn';
import { Suspense } from 'react';

export default function SignInPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center px-4 pb-8 md:px-8 rounded-xl backdrop-blur-3xl border bg-muted/20 pt-8 relative">
                <Suspense fallback={<div>Loading...</div>}>
                    <FormSignIn />
                </Suspense>
            </div>
        </div>
    );
}

