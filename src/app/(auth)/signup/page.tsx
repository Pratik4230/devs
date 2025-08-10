"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import SocialButtons from "@/components/auth/SocialButtons";

const schema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(24, "Username must be at most 24 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Only letters, numbers and underscore are allowed"
      ),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Must include at least one lowercase letter")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[0-9]/, "Must include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export default function SignupPage() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async () => {
    // Only UI; wire actual API later
  });

  return (
    <div className="space-y-2">
      <div className="text-center space-y-2">
        <h1 className="h2-bold">Create your account</h1>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-3">
          <SocialButtons />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-dark400_light500">
            or continue with email
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="dev_master"
            {...form.register("username")}
          />
          {form.formState.errors.username && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.username.message}
            </p>
          )}
        </div>

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

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            {...form.register("confirmPassword")}
          />
          {form.formState.errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>

      <p className="text-center text-sm text-dark400_light500">
        Already have an account?{" "}
        <Link className="text-primary-500" href="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}
