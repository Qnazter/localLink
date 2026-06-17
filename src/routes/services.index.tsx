import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { ProviderCard } from "@/components/ProviderCard";
import { useI18n } from "@/lib/i18n";
import { popularServices, providers } from "@/lib/mock-data";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [{ title: "Browse services — Local Link" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [today, setToday] = useState(false);
  const [maxPrice, setMaxPrice] = useState(700);

  const filtered = useMemo(() => {
    return providers.filter((p) => {
      if (cat && p.skillKey !== cat) return false;
      if (rating && p.rating < rating) return false;
      if (today && !p.availableToday) return false;
      if (p.pricePerHour > maxPrice) return false;
      if (q && !(`${p.name} ${p.nameTh} ${p.skill}`.toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });
  }, [q, cat, rating, today, maxPrice]);

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight">{t("svcpage.title")}</h1>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-2 shadow-soft">
          <Search className="ml-3 size-5 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("svcpage.search")} className="w-full bg-transparent py-2 outline-none" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip active={!cat} onClick={() => setCat(null)}>{t("svcpage.all")}</Chip>
          {popularServices.map((s) => (
            <Chip key={s.key} active={cat === s.key} onClick={() => setCat(s.key)}>
              <span className="mr-1">{s.icon}</span>{t(s.key)}
            </Chip>
          ))}
        </div>

        <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft sm:grid-cols-3">
          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">{t("svcpage.filter.price")} ฿{maxPrice}</div>
            <input type="range" min={150} max={1000} step={50} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-primary" />
          </div>
          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">{t("svcpage.filter.rating")}</div>
            <div className="flex gap-1">
              {[0, 4, 4.5, 4.8].map((r) => (
                <Chip key={r} active={rating === r} onClick={() => setRating(r)}>{r === 0 ? "Any" : `${r}+`}</Chip>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1 text-xs font-semibold text-muted-foreground">{t("svcpage.filter.availability")}</div>
            <Chip active={today} onClick={() => setToday((v) => !v)}>{t("svcpage.today")}</Chip>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProviderCard key={p.id} provider={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            No providers match your filters yet.
          </div>
        )}
      </section>
    </AppShell>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:bg-accent"}`}>
      {children}
    </button>
  );
}