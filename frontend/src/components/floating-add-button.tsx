"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { AddQuoteModal } from "./add-quote-modal";

export function FloatingAddButton() {
  const [open, setOpen] = useState(false);
  const [prefillBookId, setPrefillBookId] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => setHidden((e as CustomEvent<boolean>).detail);
    window.addEventListener("gleaning:display-mode", handler);
    return () => window.removeEventListener("gleaning:display-mode", handler);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const bookId = (e as CustomEvent<{ bookId?: string }>).detail?.bookId ?? "";
      setPrefillBookId(bookId);
      setOpen(true);
    };
    window.addEventListener("open-add-quote", handler);
    return () => window.removeEventListener("open-add-quote", handler);
  }, []);

  if (hidden) return null;

  return (
    <>
      <button
        onClick={() => { setPrefillBookId(""); setOpen(true); }}
        aria-label="Add quote (⌘E)"
        title="Add quote (⌘E)"
        className="cursor-pointer fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
      >
        <Plus size={22} />
      </button>

      <AddQuoteModal
        open={open}
        prefillBookId={prefillBookId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
