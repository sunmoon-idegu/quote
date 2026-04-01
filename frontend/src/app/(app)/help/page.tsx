import { ChevronDown } from "lucide-react";

export const metadata = { title: "Help · Gleaning" };

const shortcuts = [
  { keys: ["⌘", "E"], description: "Quick add", detail: "Open the add-quote modal from anywhere" },
  { keys: ["⌘", "K"], description: "Search", detail: "Search across all quotes and books" },
  { keys: ["F"], description: "Full display mode", detail: "Feed only — hides nav, counter, and date" },
  { keys: ["Space"], description: "Next quote", detail: "Feed only" },
];

const faqs = [
  {
    q: "What is full display mode?",
    a: "Full display mode hides the navigation bar, quote counter, and date so the quote fills the screen. It's useful for reading aloud, presenting, or simply focusing on a single quote without distraction.",
  },
  {
    q: "How do I enter and exit full display mode?",
    a: "On desktop, press F while on the Feed page. On mobile, double-tap the quote card. Press F again to exit, or double-tap again on mobile.",
  },
  {
    q: "What does ⌘E do?",
    a: "⌘E (Ctrl+E on Windows/Linux) opens the add-quote modal from anywhere in the app — no need to navigate to a specific page first. Just press the shortcut, fill in the quote, and it lands at the top of your feed.",
  },
  {
    q: "Can I add a quote without a book?",
    a: "Yes. The only required field is the quote text. You can pick a source type — Book, Video, Live, or Unknown — but all source details are optional. If you leave the source blank the quote is saved without one.",
  },
  {
    q: "How do I organise my quotes?",
    a: "The Shelf groups your books by language. Click any book to see all its quotes. Within a book's page you can also add a new quote directly with that book pre-selected.",
  },
  {
    q: "How do I edit or delete a quote?",
    a: "Hover over any quote card to reveal a pencil and a trash icon in the top-right corner. The pencil opens a quick editor for the text and tags. For full editing — including changing the source type, page number, or speaker — use the dedicated edit page accessible from that same icon.",
  },
];

export default function HelpPage() {
  return (
    <div className="max-w-2xl space-y-12">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Help</h1>
        <p className="mt-2 text-sm text-neutral-500">How Gleaning works and answers to common questions.</p>
      </div>

      {/* Keyboard shortcuts */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Keyboard shortcuts</h2>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {shortcuts.map(({ keys, description, detail }) => (
            <div key={description} className="flex items-center justify-between gap-4 px-4 py-3">
              <div>
                <span className="text-sm text-neutral-900 dark:text-neutral-100">{description}</span>
                <span className="ml-2 text-sm text-neutral-400">{detail}</span>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">FAQ</h2>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-neutral-900 dark:text-neutral-100 list-none">
                {q}
                <ChevronDown size={14} className="shrink-0 text-neutral-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-3 pb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Contact</h2>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Have a feature request or need assistance? We'd love to hear from you.
        </p>
        <a
          href="mailto:sunmoon.idegu@gmail.com"
          className="inline-block text-sm text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          sunmoon.idegu@gmail.com
        </a>
      </section>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="px-1.5 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">
      {children}
    </kbd>
  );
}
