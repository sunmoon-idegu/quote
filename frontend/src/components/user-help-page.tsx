import { Monitor, PlusSquare } from "lucide-react";

export function UserHelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Help</h1>
        <p className="mt-1 text-sm text-neutral-500">Tips for getting the most out of Gleaning.</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="mt-0.5 shrink-0 text-neutral-400">
            <Monitor size={18} />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Full display mode</p>
            <p className="mt-1 text-sm text-neutral-500">
              On the Feed, press <kbd className="px-1.5 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">F</kbd> to
              enter full display mode — the nav, counter, and date are hidden so the quote takes centre stage.
              Press <kbd className="px-1.5 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">F</kbd> or{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">Esc</kbd> to exit.
              On mobile, double-tap the quote instead.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-0.5 shrink-0 text-neutral-400">
            <PlusSquare size={18} />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Quick add</p>
            <p className="mt-1 text-sm text-neutral-500">
              Press{" "}
              <kbd className="px-1.5 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono">⌘E</kbd>{" "}
              anywhere to open the add-quote modal without leaving the current page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
