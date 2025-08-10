"use client";

import React, { ReactNode } from "react";
import CodeBackdrop from "@/components/auth/CodeBackdrop";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden background-light850_dark100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.12] select-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 25% 10%, rgba(255,112,0,0.25), transparent 45%), radial-gradient(ellipse at 80% 30%, rgba(124,58,237,0.25), transparent 45%), radial-gradient(ellipse at 40% 75%, rgba(59,130,246,0.2), transparent 45%)",
        }}
      />
      <CodeBackdrop />
      <div className="absolute inset-0">
        <div className="mx-auto max-w-lg px-6 py-12 sm:py-16">
          <div className="rounded-xl border light-border-2 shadow-light100_darknone backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-dark-300/60">
            <div className="px-6 py-8 sm:px-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
