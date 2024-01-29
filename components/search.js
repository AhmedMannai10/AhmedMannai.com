import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div class="w-full flex-1 md:w-auto md:flex-none">
      <button
        type="button"
        class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
      >
        <span class="hidden lg:inline-flex">Search documentation...</span>
        <span class="inline-flex lg:hidden">Search...</span>
        <kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span class="text-xs">⌘</span>K
        </kbd>
      </button>
    </div>
  );
}
