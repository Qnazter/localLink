import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const role = localStorage.getItem("role");

  const links = [
  { to: "/services", label: t("nav.services") },
  { to: "/assistant", label: t("nav.assistant") },
  { to: "/dashboard", label: t("nav.dashboard") },

  ...(role !== "provider"
    ? [
        { to: "/bookings", label: t("nav.bookings") },
        { to: "/messages", label: t("nav.messages") },
        { to: "/profile", label: t("nav.profile") },
      ]
    : [
        { to: "/provider", label: t("nav.provider") },
      ]),
];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-foreground bg-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LangSwitch /></div>
          <Link to="/auth" className="hidden md:inline-flex">
            <Button variant="ghost" className="rounded-full">{t("nav.login")}</Button>
          </Link>
          <Link to="/auth" className="hidden md:inline-flex">
            <Button className="rounded-full bg-gradient-primary text-white hover:opacity-90">{t("nav.signup")}</Button>
          </Link>
          <button
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="my-2 flex items-center justify-between gap-2">
              <LangSwitch />
              <Link to="/auth" onClick={() => setOpen(false)}>
                <Button className="rounded-full bg-gradient-primary text-white">{t("nav.signup")}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}