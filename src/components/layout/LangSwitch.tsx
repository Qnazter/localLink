import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft">
      {!compact && <Languages className="ml-2 size-4 text-muted-foreground" />}
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("th")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "th" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "th"}
      >
        ไทย
      </button>
    </div>
  );
}