import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { findProvider, providers } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Calendar, MapPin, MessageCircle, Phone, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/services/$id")({
  head: () => ({ meta: [{ title: "Provider — Local Link" }] }),
  component: ProviderDetail,
  notFoundComponent: () => (
    <AppShell><div className="mx-auto max-w-2xl p-10 text-center"><p className="text-muted-foreground">Provider not found.</p></div></AppShell>
  ),
  loader: ({ params }) => {
    if (!findProvider(params.id)) throw notFound();
  },
});

function ProviderDetail() {
  const { id } = Route.useParams();
  const { t, lang } = useI18n();
  const p = findProvider(id)!;

  const gallery = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=70",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70",
    "https://www.bondcleaningnewcastle.com.au/wp-content/uploads/2026/05/Professional-janitors-working-in-kitchen-cleaning-service.webp",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=70",
  ];

  return (
    <AppShell>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <img src={p.avatar} alt="" width={96} height={96} className="size-24 rounded-3xl object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-extrabold tracking-tight">{lang === "th" ? p.nameTh : p.name}</h1>
                  {p.verified && <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary"><BadgeCheck className="size-3.5" />{t("svcpage.verified")}</span>}
                  {p.aiPick && <span className="inline-flex items-center gap-1 rounded-full bg-secondary-soft px-2 py-0.5 text-xs font-semibold text-secondary"><Sparkles className="size-3.5" />{t("svcpage.aiPick")}</span>}
                </div>
                <p className="mt-1 text-muted-foreground">{t(p.skillKey)}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="inline-flex items-center gap-1"><Star className="size-4 fill-amber-400 text-amber-400" /> {p.rating} <span className="text-muted-foreground">({p.reviews})</span></span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-4" /> {p.distanceKm} {t("svcpage.km")}</span>
                  <span className="text-muted-foreground">{p.experience} {t("detail.experience")}</span>
                </div>
              </div>
            </div>

            <Section title={t("detail.about")}>
              <p className="text-muted-foreground">{lang === "th" ? p.bioTh : p.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="text-muted-foreground">{t("detail.languages")}:</span>
                {p.languages.map((l) => <span key={l} className="rounded-full bg-accent px-2 py-0.5 font-semibold">{l}</span>)}
              </div>
            </Section>

            <Section title={t("detail.gallery")}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {gallery.map((g) => (
                  <img key={g} src={g} alt="" loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
                ))}
              </div>
            </Section>

            <Section title={t("detail.availability")}>
              <Calendar7 />
            </Section>

            <Section title={t("detail.reviews")}>
              <div className="space-y-3">
                {[
                  { n: "Anya", t: "Showed up on time, fixed the leak in 30 minutes. Highly recommend!", r: 5 },
                  { n: "ภูผา", t: "ทำงานเรียบร้อย ราคาเป็นมิตร", r: 5 },
                  { n: "Marc", t: "Polite and professional. Will book again.", r: 4 },
                ].map((r, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{r.n}</div>
                      <div className="flex">{Array.from({ length: r.r }).map((_, j) => <Star key={j} className="size-3.5 fill-amber-400 text-amber-400" />)}</div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.t}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">{t("svcpage.from")}</div>
                  <div className="text-3xl font-extrabold">฿{p.pricePerHour}<span className="text-base font-normal text-muted-foreground">{t("common.perHour")}</span></div>
                </div>
                <Calendar className="size-5 text-muted-foreground" />
              </div>
              <Button className="mt-5 w-full rounded-full bg-gradient-primary text-white hover:opacity-90">{t("detail.book")}</Button>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link to="/messages"><Button variant="outline" className="w-full rounded-full"><MessageCircle className="size-4" />{t("detail.chat")}</Button></Link>
                <Button variant="outline" className="w-full rounded-full"><Phone className="size-4" />{t("detail.call")}</Button>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-sm font-semibold">{t("dash.nearby")}</h3>
              <div className="mt-3 space-y-3">
                {providers.filter((x) => x.id !== p.id).slice(0, 3).map((x) => (
                  <Link key={x.id} to="/services/$id" params={{ id: x.id }} className="flex items-center gap-3 rounded-xl p-2 hover:bg-accent">
                    <img src={x.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{lang === "th" ? x.nameTh : x.name}</div>
                      <div className="text-xs text-muted-foreground">{t(x.skillKey)} · ★ {x.rating}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h2 className="mb-3 text-lg font-bold tracking-tight">{title}</h2>
      {children}
    </div>
  );
}

function Calendar7() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((d, i) => {
        const busy = i === 2 || i === 5;
        return (
          <div key={d} className={`rounded-xl border p-3 text-center text-xs ${busy ? "border-border bg-muted text-muted-foreground" : "border-primary/30 bg-primary-soft text-primary"}`}>
            <div className="font-semibold">{d}</div>
            <div className="mt-1">{busy ? "Busy" : "Free"}</div>
          </div>
        );
      })}
    </div>
  );
}