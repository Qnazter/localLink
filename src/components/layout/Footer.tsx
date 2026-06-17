import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">{t("footer.product")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{t("nav.services")}</li>
            <li>{t("nav.assistant")}</li>
            <li>{t("nav.becomeProvider")}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">{t("footer.company")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Local Link. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}