import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { useI18n } from "@/lib/i18n";
import { threads, findProvider } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Send, Image as ImageIcon, Mic, CheckCheck, Languages } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/messages")({
  head: () => ({ meta: [{ title: "Messages — Local Link" }] }),
  component: MessagesPage,
});

function MessagesPage() {
  const { t, lang } = useI18n();
  const [activeId, setActiveId] = useState(threads[0].id);
  const [translate, setTranslate] = useState(true);
  const [input, setInput] = useState("");
  const active = threads.find((th) => th.id === activeId)!;
  const pro = findProvider(active.providerId)!;

  return (
    <AppShell hideFooter>
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <h1 className="text-2xl font-extrabold tracking-tight">{t("msg.title")}</h1>
        <div className="mt-4 grid h-[70vh] gap-4 rounded-3xl border border-border bg-card shadow-soft md:grid-cols-[280px_1fr]">
          <aside className="border-r border-border p-3">
            <div className="space-y-1">
              {threads.map((th) => {
                const p = findProvider(th.providerId)!;
                const active = th.id === activeId;
                return (
                  <button key={th.id} onClick={() => setActiveId(th.id)} className={`flex w-full items-center gap-3 rounded-2xl p-2 text-left transition-colors ${active ? "bg-accent" : "hover:bg-accent/60"}`}>
                    <img src={p.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="truncate text-sm font-semibold">{lang === "th" ? p.nameTh : p.name}</div>
                        {th.unread > 0 && <span className="rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">{th.unread}</span>}
                      </div>
                      <div className="truncate text-xs text-muted-foreground">{lang === "th" ? th.previewTh : th.preview}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="flex min-h-0 flex-col">
            <div className="flex items-center justify-between border-b border-border p-3">
              <div className="flex items-center gap-3 min-w-0">
                <img src={pro.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{lang === "th" ? pro.nameTh : pro.name}</div>
                  <div className="text-xs text-emerald-600">● {t("common.online")}</div>
                </div>
              </div>
              <button onClick={() => setTranslate((v) => !v)} className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${translate ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"}`}>
                <Languages className="size-3.5" /> {t("msg.translate")}
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {active.messages.map((m) => {
                const mine = m.from === "me";
                const txt = translate ? (lang === "th" ? m.textTh ?? m.text : m.text) : m.text;
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] rounded-3xl px-4 py-2 text-sm shadow-soft ${mine ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md border border-border bg-card"}`}>
                      <div>{txt}</div>
                      <div className={`mt-1 flex items-center gap-1 text-[10px] ${mine ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {m.time}
                        {mine && m.read && <CheckCheck className="size-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-xs text-muted-foreground">{lang === "th" ? `${pro.nameTh} ` : `${pro.name} `}{t("msg.typing")}</div>
            </div>

            <form className="flex items-center gap-2 border-t border-border p-3" onSubmit={(e) => { e.preventDefault(); setInput(""); }}>
              <Button type="button" variant="ghost" size="icon" className="rounded-full"><ImageIcon className="size-4" /></Button>
              <Button type="button" variant="ghost" size="icon" className="rounded-full"><Mic className="size-4" /></Button>
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t("msg.placeholder")} className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary" />
              <Button type="submit" size="icon" className="rounded-full bg-gradient-primary text-white"><Send className="size-4" /></Button>
            </form>
          </div>
        </div>
      </section>
    </AppShell>
  );
}