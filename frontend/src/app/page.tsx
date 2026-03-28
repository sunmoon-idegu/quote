"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GleaningIcon } from "@/components/gleaning-icon";

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/feed");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || isSignedIn) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <GleaningIcon size={32} />
          <h1 className="text-3xl font-semibold tracking-tight">Gleaning</h1>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          Quotes. Keep the best. Nothing else.
        </p>
        <Link
          href="/sign-in"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
