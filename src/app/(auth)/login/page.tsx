"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SocialButtons from "@/components/auth/SocialButtons";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async () => {
    // Only UI; wire actual API later
    await signIn();
  });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="h2-bold">Welcome back</h1>
        <p className="text-dark400_light500">Sign in to continue</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-dark400_light500">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <SocialButtons />

      <p className="text-center text-sm text-dark400_light500">
        Don&apos;t have an account?{" "}
        <Link className="text-primary-500" href="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}
