"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import Toastify from "@/components/toastify";

const environment = process.env.NODE_ENV;

export default function LayoutProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const queryClient = new QueryClient();

    return (
        <>
            <Toastify />
            <QueryClientProvider client={queryClient}>{children}
            </QueryClientProvider>
        </>
    );
}