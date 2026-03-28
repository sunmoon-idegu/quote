"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { apiFetch, waitForToken, type Quote } from "@/lib/api";
import { QuoteCard } from "@/components/quote-card";

export default function FeedPage() {
  const { getToken } = useAuth();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => { document.title = "Feed · Quote"; }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const quote = (e as CustomEvent).detail as Quote;
      setQuotes((qs) => [quote, ...qs]);
    };
    window.addEventListener("quote-added", handler);
    return () => window.removeEventListener("quote-added", handler);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const token = await waitForToken(getToken);
        const data = await apiFetch<Quote[]>("/quotes", token);
        setQuotes(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [getToken]);

  if (error) {
    return (
      <div className="text-center py-32 text-neutral-400">
        <p className="text-sm">Failed to load quotes. Please refresh.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="py-10 border-b border-neutral-100 dark:border-neutral-800 space-y-3 animate-pulse">
            <div className="h-6 bg-neutral-100 dark:bg-neutral-800 rounded w-4/5" />
            <div className="h-6 bg-neutral-100 dark:bg-neutral-800 rounded w-3/5" />
            <div className="h-4 bg-neutral-100 dark:bg-neutral-800 rounded w-1/4 mt-4" />
          </div>
        ))}
      </div>
    );
  }

  if (quotes.length === 0) {
    return (
      <div className="text-center py-32 text-neutral-400">
        <p className="text-sm">No quotes yet. Press ⌘N to add one.</p>
      </div>
    );
  }

  return (
    <div className="-my-8 h-[calc(100vh-56px)] overflow-y-scroll snap-y snap-mandatory">
      {quotes.map((q) => (
        <div key={q.id} className="h-[calc(100vh-56px)] snap-start flex items-center px-4">
          <div className="max-w-3xl mx-auto w-full">
            <QuoteCard
              quote={q}
              onDeleted={(id) => setQuotes((qs) => qs.filter((x) => x.id !== id))}
              onUpdated={(updated) => setQuotes((qs) => qs.map((x) => x.id === updated.id ? updated : x))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
