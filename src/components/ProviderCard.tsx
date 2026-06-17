import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import type { Provider } from "@/lib/mock-data";
import { Star, MapPin, BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProviderCard({ provider }: { provider: Provider }) {
  const { t, lang } = useI18n();
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start gap-3 p-4">
        <img src={provider.avatar} alt="" width={56} height={56} loading="lazy" className="size-14 shrink-0 rounded-2xl object-cover" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold">{lang === "th" ? provider.nameTh : provider.name}</h3>
            {provider.verified && <BadgeCheck className="size-4 text-primary" aria-label="verified" />}
          </div>
          <p className="text-sm text-muted-foreground">{t(provider.skillKey)}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-foreground">
              <Star className="size-3.5 fill-amber-400 text-amber-400" /> {provider.rating} <span className="text-muted-foreground">({provider.reviews})</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3.5" /> {provider.distanceKm} {t("svcpage.km")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/40 px-4 py-3">
        <div>
          <div className="text-xs text-muted-foreground">{t("svcpage.from")}</div>
          <div className="text-sm font-semibold">฿{provider.pricePerHour}<span className="font-normal text-muted-foreground">{t("common.perHour")}</span></div>
        </div>
        <div className="flex items-center gap-2">
          {provider.aiPick && (
            <span className="hidden items-center gap-1 rounded-full bg-secondary-soft px-2 py-1 text-[10px] font-semibold text-secondary sm:inline-flex">
              <Sparkles className="size-3" /> {t("svcpage.aiPick")}
            </span>
          )}
          <Link to="/services/$id" params={{ id: provider.id }}>
            <Button size="sm" className="rounded-full bg-gradient-primary text-white hover:opacity-90">{t("svcpage.book")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}