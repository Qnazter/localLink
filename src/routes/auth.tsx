import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Apple, Camera, Mail } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in or create an account — Local Link" },
      { name: "description", content: "Log in or sign up to Local Link. Choose to find services or offer them as a provider." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<"customer" | "provider">("customer");

  return (
    <AppShell hideFooter>
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="hidden lg:block">
          <div className="rounded-[2rem] bg-gradient-hero p-10 shadow-soft">
            <h2 className="text-3xl font-extrabold tracking-tight">{t("auth.welcome")}</h2>
            <p className="mt-3 max-w-md text-muted-foreground">{t("auth.subtitle")}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["hero.trust", "ai.f3.title", "ai.f5.title"].map((k) => (
                <li key={k} className="flex items-center gap-2 text-foreground/80">
                  <span className="grid size-6 place-items-center rounded-full bg-primary-soft text-primary">✓</span>
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-card">
          <div className="grid grid-cols-2 rounded-full bg-muted p-1">
            {(["login", "signup"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${tab === k ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`}
              >
                {t(`auth.tab.${k}`)}
              </button>
            ))}
          </div>

          {tab === "signup" && (
            <div className="mt-5">
              <Label className="mb-2 block text-xs">{t("auth.role")}</Label>
              <div className="grid grid-cols-2 gap-2">
                {(["customer", "provider"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`rounded-2xl border p-3 text-left text-sm transition-colors ${role === r ? "border-primary bg-primary-soft" : "border-border hover:bg-accent"}`}
                  >
                    <div className="text-sm font-semibold">{t(`auth.role.${r}`)}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <Label htmlFor="email" className="mb-1.5 block text-xs">{t("auth.email")}</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="password" className="mb-1.5 block text-xs">{t("auth.password")}</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            {tab === "signup" && role === "provider" && (
              <div className="space-y-4 rounded-2xl border border-dashed border-border bg-muted/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-14 place-items-center rounded-full bg-card text-muted-foreground"><Camera className="size-5" /></div>
                  <Button type="button" variant="outline" className="rounded-full">{t("auth.provider.photo")}</Button>
                </div>
                <div>
                  <Label className="mb-1.5 block text-xs">{t("auth.provider.skills")}</Label>
                  <Input placeholder="Plumbing, Electrical…" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label className="mb-1.5 block text-xs">{t("auth.provider.area")}</Label>
                    <Input placeholder="Sukhumvit, Bangkok" />
                  </div>
                  <div>
                    <Label className="mb-1.5 block text-xs">{t("auth.provider.phone")}</Label>
                    <Input placeholder="+66 …" />
                  </div>
                </div>
                <div>
                  <Label className="mb-1.5 block text-xs">{t("auth.provider.intro")}</Label>
                  <Input placeholder="A short bio…" />
                </div>
              </div>
            )}

            <Link to="/dashboard" className="block">
              <Button
                type="button"
                className="w-full rounded-full bg-gradient-primary text-white hover:opacity-90"
                onClick={() => {
                  localStorage.setItem("role", role);
                  window.location.href = "/dashboard";
                }}
              >
                <Mail className="size-4" /> {t("auth.continue")}
              </Button>
            </Link>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            <span>{t("auth.or")}</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-2">
            <Button variant="outline" className="w-full justify-center rounded-full">
              <GoogleIcon /> {t("auth.google")}
            </Button>
            <Button variant="outline" className="w-full justify-center rounded-full">
              <Apple className="size-4" /> {t("auth.apple")}
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4-5.5 4-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"/>
    </svg>
  );
}