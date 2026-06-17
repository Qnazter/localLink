import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { popularServices, providers, bookings, findProvider } from "@/lib/mock-data";
import { ProviderCard } from "@/components/ProviderCard";
import { Sparkles, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Local Link" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { t, lang } = useI18n();
  const [q, setQ] = useState("");

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t("dash.greeting")}</h1>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = `/assistant?q=${encodeURIComponent(q)}`; }}
          className="mt-6 flex flex-col gap-3 rounded-3xl border border-border bg-card p-3 shadow-soft sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 items-center gap-3 px-3">
            <Search className="size-5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("dash.placeholder")}
              className="w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button type="submit" className="rounded-full bg-gradient-primary text-white hover:opacity-90">
            <Sparkles className="size-4" /> {t("dash.analyze")}
          </Button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionRow title={t("services.popular")} />
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {popularServices.map((s) => (
            <Link key={s.key} to="/services" className={`flex flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-to-br ${s.color} p-4 text-center transition-transform hover:-translate-y-0.5`}>
              <span className="text-2xl">{s.icon}</span>
              <span className="text-xs font-semibold">{t(s.key)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionRow title={t("dash.nearby")} to="/services" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.slice(0, 3).map((p) => <ProviderCard key={p.id} provider={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <SectionRow title={t("dash.recommended")} to="/assistant" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {providers.filter((p) => p.aiPick).slice(0, 3).map((p) => <ProviderCard key={p.id} provider={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <SectionRow title={t("dash.recent")} to="/bookings" />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {bookings.slice(0, 4).map((b) => {
            const pro = findProvider(b.providerId)!;
            return (
              <Link key={b.id} to="/bookings" className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex items-center gap-3">
                  <img src={pro.avatar} alt="" width={48} height={48} className="size-12 rounded-2xl object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{lang === "th" ? b.serviceTh : b.service}</div>
                    <div className="text-xs text-muted-foreground">{lang === "th" ? pro.nameTh : pro.name} · {b.date}</div>
                  </div>
                </div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{t(`book.${b.status}`)}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}

function SectionRow({ title, to }: { title: string; to?: string }) {
  const { t } = useI18n();
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      {to && <Link to={to} className="text-sm font-semibold text-primary hover:underline">{t("dash.viewAll")}</Link>}
    </div>
  );
}