import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { bookings, findProvider, type Booking } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/bookings")({
  head: () => ({ meta: [{ title: "My bookings — Local Link" }] }),
  component: BookingsPage,
});

const STEPS: Booking["status"][] = ["pending", "accepted", "onway", "working", "completed"];

function BookingsPage() {
  const { t, lang } = useI18n();

  return (
    <AppShell>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight">{t("book.title")}</h1>

        <div className="mt-6 space-y-4">
          {bookings.map((b) => {
            const pro = findProvider(b.providerId)!;
            const stepIdx = STEPS.indexOf(b.status);
            return (
              <div key={b.id} className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={pro.avatar} alt="" width={48} height={48} className="size-12 rounded-2xl object-cover" />
                    <div>
                      <div className="font-semibold">{lang === "th" ? b.serviceTh : b.service}</div>
                      <div className="text-xs text-muted-foreground">{lang === "th" ? pro.nameTh : pro.name} · {b.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">฿</div>
                    <div className="text-lg font-bold">฿{b.price}</div>
                  </div>
                </div>

                <ol className="mt-5 grid grid-cols-5 gap-2">
                  {STEPS.map((s, i) => {
                    const done = i <= stepIdx;
                    return (
                      <li key={s} className="flex flex-col items-center text-center">
                        <div className={`grid size-8 place-items-center rounded-full text-xs font-bold ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                          {done ? <CheckCircle2 className="size-4" /> : i + 1}
                        </div>
                        <div className={`mt-1.5 text-[10px] sm:text-xs ${done ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{t(`book.${s}`)}</div>
                      </li>
                    );
                  })}
                </ol>

                {b.status === "onway" && (
                  <div className="mt-5 grid gap-3 rounded-2xl border border-border bg-muted/40 p-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm"><Clock className="size-4 text-primary" /> <span>{t("book.eta")}: <strong>{b.etaMin} min</strong></span></div>
                    <div className="flex items-center gap-2 text-sm"><MapPin className="size-4 text-primary" /> <span>{t("book.live")}</span></div>
                  </div>
                )}

                {b.status !== "completed" && (
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="rounded-full">{t("book.cancel")}</Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}