import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Briefcase, CalendarDays, Sparkles, Star, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/provider")({
  head: () => ({ meta: [{ title: "Provider hub — Local Link" }] }),
  component: ProviderHub,
});

function ProviderHub() {
  const { t } = useI18n();
  const [online, setOnline] = useState(true);

  const today = [
    { title: "Fix leaking sink", time: "14:30", client: "Arthit", price: 700 },
    { title: "Wi-Fi mesh install", time: "17:00", client: "Lin", price: 1500 },
  ];
  const suggested = [
    { title: "Bathroom tap replacement", area: "Phrom Phong · 1.2 km", price: "฿600–900" },
    { title: "AC quick service", area: "Ekkamai · 2.0 km", price: "฿900–1,500" },
  ];

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight">{t("provider.title")}</h1>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
            <span className={`size-2 rounded-full ${online ? "bg-emerald-500" : "bg-muted-foreground"}`} />
            <span className="text-sm font-semibold">{online ? t("common.online") : t("common.offline")}</span>
            <Switch checked={online} onCheckedChange={setOnline} />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={<Briefcase className="size-4" />} label={t("provider.today")} value="2" />
          <Stat icon={<CalendarDays className="size-4" />} label={t("provider.upcoming")} value="6" />
          <Stat icon={<Wallet className="size-4" />} label={t("provider.income")} value="฿32,450" />
          <Stat icon={<Star className="size-4" />} label={t("provider.rating")} value="4.9 / 5" />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card title={t("provider.today")} className="lg:col-span-2">
            <div className="space-y-2">
              {today.map((j) => (
                <div key={j.title} className="flex items-center justify-between rounded-2xl border border-border bg-muted/40 p-3">
                  <div>
                    <div className="text-sm font-semibold">{j.title}</div>
                    <div className="text-xs text-muted-foreground">{j.time} · {j.client}</div>
                  </div>
                  <div className="text-sm font-bold">฿{j.price}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card title={t("provider.suggested")} icon={<Sparkles className="size-4 text-primary" />}>
            <div className="space-y-2">
              {suggested.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-muted/40 p-3">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs text-muted-foreground">{s.area} · {s.price}</div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" className="flex-1 rounded-full bg-gradient-primary text-white hover:opacity-90">{t("provider.accept")}</Button>
                    <Button size="sm" variant="outline" className="rounded-full">{t("provider.decline")}</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title={t("provider.portfolio")} className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-2">
              {["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=60",
                "https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/aerotek/business-insights/plumbing_career_social-jpg.jpg?h=627&iar=0&w=1200&rev=d535c3705c67442fb68fe4404fae26d1&hash=F08087B1995CDF5F18566FE16998FFB6",
                "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=60",
                "https://images.ctfassets.net/9wfm2v6d5j1f/4G9jrxO5FdxjUk0AA9HJ6f/8a4804f2ca1db647927c65772986dbc7/how-to-become-a-gardener.jpg",
              ].map((g) => <img key={g} src={g} alt="" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />)}
            </div>
          </Card>

          <Card title={t("provider.analytics")} icon={<TrendingUp className="size-4 text-secondary" />}>
            <div className="space-y-3">
              <Bar label="Jobs completed" value={84} max={100} />
              <Bar label="Response time" value={72} max={100} tint="secondary" />
              <Bar label="Repeat customers" value={56} max={100} />
            </div>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight">{value}</div>
    </div>
  );
}
function Card({ title, icon, children, className = "" }: { title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-5 shadow-soft ${className}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold">{icon}{title}</div>
      {children}
    </div>
  );
}
function Bar({ label, value, max, tint = "primary" }: { label: string; value: number; max: number; tint?: "primary" | "secondary" }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">{label}</span><span className="font-semibold">{value}%</span></div>
      <div className="h-2 rounded-full bg-muted"><div className={`h-2 rounded-full ${tint === "primary" ? "bg-primary" : "bg-secondary"}`} style={{ width: `${pct}%` }} /></div>
    </div>
  );
}