import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { providers, popularServices } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Clock, Wallet, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant — Local Link" }] }),
  component: AssistantPage,
  validateSearch: (s: Record<string, unknown>) => ({ q: typeof s.q === "string" ? s.q : undefined }),
});

type Msg = { role: "user" | "ai"; text: string; analysis?: Analysis };
type Analysis = { service: string; serviceKey: string; urgency: "low" | "medium" | "high"; estimate: string; recProviderIds: string[] };

const rules: { match: RegExp[]; analysis: Analysis }[] = [
  { match: [/leak|sink|toilet|water|รั่ว|ชักโครก|ประปา/i], analysis: { service: "Plumbing", serviceKey: "svc.plumbing", urgency: "high", estimate: "฿500 – ฿1,200", recProviderIds: ["p1"] } },
  { match: [/air|aircon|cooling|wire|breaker|outlet|แอร์|ไฟ|ไฟฟ้า/i], analysis: { service: "Electrical", serviceKey: "svc.electrical", urgency: "medium", estimate: "฿700 – ฿2,000", recProviderIds: ["p2"] } },
  { match: [/clean|dust|ทำความสะอาด|กวาด/i], analysis: { service: "Cleaning", serviceKey: "svc.cleaning", urgency: "low", estimate: "฿600 – ฿1,500", recProviderIds: ["p3", "p8"] } },
  { match: [/garden|plant|lawn|สวน|ต้นไม้/i], analysis: { service: "Gardening", serviceKey: "svc.gardening", urgency: "low", estimate: "฿500 – ฿1,200", recProviderIds: ["p4"] } },
  { match: [/move|moving|truck|ขนย้าย|ย้ายบ้าน/i], analysis: { service: "Moving", serviceKey: "svc.moving", urgency: "medium", estimate: "฿1,500 – ฿4,000", recProviderIds: ["p6"] } },
  { match: [/wifi|internet|computer|router|smart|อินเทอร์เน็ต|คอม|เน็ต/i], analysis: { service: "Tech Support", serviceKey: "svc.tech", urgency: "medium", estimate: "฿500 – ฿1,500", recProviderIds: ["p7"] } },
  { match: [/fix|broken|assemble|mount|ซ่อม|ติด/i], analysis: { service: "Home Repair", serviceKey: "svc.repair", urgency: "medium", estimate: "฿400 – ฿1,500", recProviderIds: ["p5"] } },
];

function analyze(text: string): Analysis {
  for (const r of rules) if (r.match.some((re) => re.test(text))) return r.analysis;
  return { service: "Home Repair", serviceKey: "svc.repair", urgency: "low", estimate: "฿400 – ฿1,000", recProviderIds: ["p5", "p1"] };
}

function AssistantPage() {
  const { t, lang } = useI18n();
  const { q } = Route.useSearch();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (q) ask(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function ask(text: string) {
    if (!text.trim()) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setThinking(true);
    setTimeout(() => {
      const a = analyze(text);
      setMessages((m) => [...m, { role: "ai", text: lang === "th" ? "ได้เลย นี่คือสิ่งที่ฉันแนะนำ" : "Got it — here's what I'd recommend.", analysis: a }]);
      setThinking(false);
    }, 900);
  }

  const examples = [t("assistant.ex1"), t("assistant.ex2"), t("assistant.ex3")];

  return (
    <AppShell>
      <section className="mx-auto flex max-w-3xl flex-col px-4 py-10 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft">
              <Sparkles className="size-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">{t("assistant.title")}</h1>
              <p className="text-sm text-muted-foreground">{t("assistant.subtitle")}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex-1 space-y-4">
          {messages.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border bg-card/60 p-6 text-center">
              <p className="text-sm text-muted-foreground">{t("assistant.examples")}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {examples.map((ex) => (
                  <button key={ex} onClick={() => ask(ex)} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-accent">
                    "{ex}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[80%] rounded-3xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground shadow-soft">{m.text}</div>
            </div>
          ) : (
            <div key={i} className="space-y-3 animate-fade-up">
              <div className="flex gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white"><Sparkles className="size-4" /></div>
                <div className="rounded-3xl rounded-tl-md bg-card px-4 py-3 text-sm shadow-soft border border-border">{m.text}</div>
              </div>
              {m.analysis && <AnalysisCard a={m.analysis} />}
            </div>
          ))}

          {thinking && (
            <div className="flex gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white"><Sparkles className="size-4" /></div>
              <div className="rounded-3xl rounded-tl-md border border-border bg-card px-4 py-3 text-sm shadow-soft text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 animate-pulse rounded-full bg-primary" />
                  {t("assistant.thinking")}
                </span>
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="sticky bottom-4 mt-6 flex items-center gap-2 rounded-full border border-border bg-card p-2 shadow-card">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t("assistant.placeholder")} className="flex-1 bg-transparent px-4 py-2 outline-none" />
          <Button type="submit" className="rounded-full bg-gradient-primary text-white hover:opacity-90"><Send className="size-4" />{t("assistant.send")}</Button>
        </form>
      </section>
    </AppShell>
  );
}

function AnalysisCard({ a }: { a: Analysis }) {
  const { t, lang } = useI18n();
  const icon = popularServices.find((s) => s.key === a.serviceKey)?.icon ?? "🛠";
  const recs = providers.filter((p) => a.recProviderIds.includes(p.id));
  const urgencyColor = a.urgency === "high" ? "bg-red-100 text-red-700" : a.urgency === "medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700";

  return (
    <div className="ml-12 rounded-3xl border border-border bg-card p-5 shadow-card">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat icon={<Wrench className="size-4" />} label={t("assistant.detected")} value={<><span className="mr-1">{icon}</span>{t(a.serviceKey)}</>} />
        <Stat icon={<Clock className="size-4" />} label={t("assistant.urgency")} value={<span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${urgencyColor}`}>{a.urgency}</span>} />
        <Stat icon={<Wallet className="size-4" />} label={t("assistant.estimate")} value={a.estimate} />
      </div>
      <div className="mt-5">
        <div className="mb-2 text-xs font-semibold text-muted-foreground">{t("assistant.recommend")}</div>
        <div className="space-y-2">
          {recs.map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-2xl border border-border bg-muted/40 p-3">
              <img src={p.avatar} alt="" className="size-10 rounded-xl object-cover" width={40} height={40} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{lang === "th" ? p.nameTh : p.name}</div>
                <div className="text-xs text-muted-foreground">★ {p.rating} · {p.distanceKm} {t("svcpage.km")} · ฿{p.pricePerHour}{t("common.perHour")}</div>
              </div>
              <Link to="/services/$id" params={{ id: p.id }}>
                <Button size="sm" className="rounded-full bg-gradient-primary text-white hover:opacity-90">{t("assistant.bookNow")}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}