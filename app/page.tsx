'use client';

import { useState } from 'react';

export default function Home() {
    const [token] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("token");
        }
        return null;
    });

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Authentication Token:</span>
                <code className="bg-muted p-2 rounded break-all max-w-md text-sm border">
                    {token ? token : "No token found (Not logged in)"}
                </code>
            </div>
        </div>
    );
}
