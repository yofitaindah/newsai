"use client";

import { AppProvider } from "@/context/appContext";
import { AuthProvider } from "@/context/authContext";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

type TRootClientLayoutProps = {
    children: React.ReactNode;
};

export default function RootClientLayout({ children }: TRootClientLayoutProps) {
    return (
        <React.Fragment>
            <AppProvider>
                <AuthProvider>
                    <Suspense fallback={<div></div>}>{children}</Suspense>
                </AuthProvider>
            </AppProvider>
            <ToastContainer />
        </React.Fragment>
    );
}
