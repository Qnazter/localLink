import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { providers } from "@/lib/mock-data";
import { Switch } from "@/components/ui/switch";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { Heart, History, MapPin, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Local Link" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { t, lang } = useI18n();
  const [dark, setDark] = useState(false);
  const [notif, setNotif] = useState(true);
  const favs = providers.slice(0, 3);

  return (
    <AppShell>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center">
          <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" width={96} height={96} className="size-24 rounded-3xl object-cover" />
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight">{lang === "th" ? "อาทิตย์ ใจดี" : "Arthit Jaidee"}</h1>
            <p className="text-sm text-muted-foreground">arthit@example.com</p>
            <div className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5" /> Sukhumvit, Bangkok</div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Card title={t("profile.addresses")} icon={<MapPin className="size-4" />}>
            <div className="space-y-2 text-sm">
              <div className="rounded-2xl border border-border bg-muted/40 p-3">Home · 23 Sukhumvit 31, Bangkok</div>
              <div className="rounded-2xl border border-border bg-muted/40 p-3">Office · 88 Asok Tower</div>
            </div>
          </Card>

          <Card title={t("profile.history")} icon={<History className="size-4" />}>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Fix leaking sink</span><span className="text-foreground">฿700</span></div>
              <div className="flex justify-between"><span>Deep cleaning 2BR</span><span className="text-foreground">฿1,200</span></div>
              <div className="flex justify-between"><span>Replace breaker</span><span className="text-foreground">฿900</span></div>
            </div>
          </Card>

          <Card title={t("profile.favorites")} icon={<Heart className="size-4" />}>
            <div className="space-y-2">
              {favs.map((p) => (
                <div key={p.id} className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 p-2">
                  <img src={p.avatar} alt="" width={36} height={36} className="size-9 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{lang === "th" ? p.nameTh : p.name}</div>
                    <div className="text-xs text-muted-foreground">{t(p.skillKey)}</div>
                  </div>
                  <Heart className="size-4 fill-rose-500 text-rose-500" />
                </div>
              ))}
            </div>
          </Card>

          <Card title={t("profile.reviews")} icon={<Star className="size-4" />}>
            <div className="space-y-2 text-sm">
              <div className="rounded-2xl border border-border bg-muted/40 p-3">★★★★★ — "Very fast and friendly."</div>
              <div className="rounded-2xl border border-border bg-muted/40 p-3">★★★★☆ — "Good job overall."</div>
            </div>
          </Card>

          <Card title={t("profile.lang")}>
            <LangSwitch />
          </Card>

          <Card title="Preferences">
            <div className="space-y-3">
              <Row label={t("profile.notif")}><Switch checked={notif} onCheckedChange={setNotif} /></Row>
            </div>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold">{icon}{title}</div>
      {children}
    </div>
  );
}
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex items-center justify-between text-sm"><span>{label}</span>{children}</div>;
}