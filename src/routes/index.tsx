import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { popularServices } from "@/lib/mock-data";
import { ArrowRight, Sparkles, MessageSquareText, MapPin, ShieldCheck, Wallet, Languages, BadgeCheck, Star } from "lucide-react";
import locallinkImg from "@/assets/locallink.jpg";  


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local Link — Find Trusted Local Services Near You" },
      { name: "description", content: "Describe your problem naturally. Our AI matches you with trusted local professionals — plumbers, electricians, cleaners, and more." },
      { property: "og:title", content: "Local Link — Trusted local services, powered by AI" },
      { property: "og:description", content: "AI-powered marketplace connecting homeowners with trusted local pros. Bilingual TH/EN." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <AppShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute -top-32 right-0 -z-10 size-120 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 -z-10 size-120 rounded-full bg-secondary/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="size-3.5 text-primary" />
              {t("hero.badge")}
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/assistant" search={{ q: undefined }}>
                <Button size="lg" className="rounded-full bg-gradient-primary px-6 text-white shadow-soft hover:opacity-90">
                  {t("hero.cta.find")}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="rounded-full px-6">
                  {t("hero.cta.provider")}
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{t("hero.trust")}</p>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <img src={locallinkImg} alt="Local Link community" width={1280} height={960} className="aspect-4/3 w-full object-cover" />
            </div>
            <FloatingCard className="-left-4 top-8 hidden sm:flex" icon={<BadgeCheck className="size-4 text-primary" />} label="Community verified" sub="184 reviews · Somchai" />
            <FloatingCard className="-bottom-6 right-2 hidden sm:flex" icon={<Star className="size-4 fill-amber-400 text-amber-400" />} label="4.9 average" sub="across 12,000 jobs" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading kicker="01" title={t("how.title")} subtitle={t("how.subtitle")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: <MessageSquareText className="size-6" />, title: t("how.s1.title"), desc: t("how.s1.desc") },
            { icon: <Sparkles className="size-6" />, title: t("how.s2.title"), desc: t("how.s2.desc") },
            { icon: <MapPin className="size-6" />, title: t("how.s3.title"), desc: t("how.s3.desc") },
          ].map((s, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card">
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">{s.icon}</div>
              <div className="text-xs font-semibold text-muted-foreground">STEP {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="bg-card/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading kicker="02" title={t("services.popular")} subtitle={t("services.popular.sub")} />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popularServices.map((s) => (
              <Link key={s.key} to="/services" className={`group flex flex-col items-start gap-3 rounded-2xl border border-border bg-linear-to-br ${s.color} p-5 transition-all hover:-translate-y-0.5 hover:shadow-card`}>
                <span className="text-3xl">{s.icon}</span>
                <span className="text-base font-semibold text-foreground">{t(s.key)}</span>
                <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Browse <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading kicker="03" title={t("ai.title")} subtitle={t("ai.subtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <MessageSquareText className="size-5" />, title: t("ai.f1.title"), desc: t("ai.f1.desc") },
            { icon: <Languages className="size-5" />, title: t("ai.f2.title"), desc: t("ai.f2.desc") },
            { icon: <MapPin className="size-5" />, title: t("ai.f3.title"), desc: t("ai.f3.desc") },
            { icon: <ShieldCheck className="size-5" />, title: t("ai.f4.title"), desc: t("ai.f4.desc") },
            { icon: <Wallet className="size-5" />, title: t("ai.f5.title"), desc: t("ai.f5.desc") },
          ].map((f, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
              <div className="mb-3 inline-grid size-10 place-items-center rounded-xl bg-secondary-soft text-secondary">{f.icon}</div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-white shadow-card md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t("cta.title")}</h2>
              <p className="mt-2 text-white/85">{t("cta.subtitle")}</p>
            </div>
            <Link to="/assistant" search={{ q: undefined }}>
              <Button size="lg" className="rounded-full bg-white px-6 text-primary hover:bg-white/90">
                {t("cta.button")} <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function SectionHeading({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-widest text-primary">{kicker}</div>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function FloatingCard({ className = "", icon, label, sub }: { className?: string; icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-card ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-primary-soft">{icon}</span>
      <div>
        <div className="text-xs font-semibold">{label}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
