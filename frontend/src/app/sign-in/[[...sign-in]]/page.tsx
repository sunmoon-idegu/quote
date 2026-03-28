import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = { title: "Sign in · Gleaning" };

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
      <SignIn />
    </div>
  );
}
