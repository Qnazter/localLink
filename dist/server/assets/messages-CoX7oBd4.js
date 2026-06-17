import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { a as threads, n as findProvider } from "./mock-data-D-mt9l6T.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCheck, Image, Languages, Mic, Send } from "lucide-react";
//#region src/routes/messages.tsx?tsr-split=component
function MessagesPage() {
	const { t, lang } = useI18n();
	const [activeId, setActiveId] = useState(threads[0].id);
	const [translate, setTranslate] = useState(true);
	const [input, setInput] = useState("");
	const active = threads.find((th) => th.id === activeId);
	const pro = findProvider(active.providerId);
	return /* @__PURE__ */ jsx(AppShell, {
		hideFooter: true,
		children: /* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-extrabold tracking-tight",
				children: t("msg.title")
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-4 grid h-[70vh] gap-4 rounded-3xl border border-border bg-card shadow-soft md:grid-cols-[280px_1fr]",
				children: [/* @__PURE__ */ jsx("aside", {
					className: "border-r border-border p-3",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-1",
						children: threads.map((th) => {
							const p = findProvider(th.providerId);
							return /* @__PURE__ */ jsxs("button", {
								onClick: () => setActiveId(th.id),
								className: `flex w-full items-center gap-3 rounded-2xl p-2 text-left transition-colors ${th.id === activeId ? "bg-accent" : "hover:bg-accent/60"}`,
								children: [/* @__PURE__ */ jsx("img", {
									src: p.avatar,
									alt: "",
									width: 40,
									height: 40,
									className: "size-10 rounded-xl object-cover"
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("div", {
											className: "truncate text-sm font-semibold",
											children: lang === "th" ? p.nameTh : p.name
										}), th.unread > 0 && /* @__PURE__ */ jsx("span", {
											className: "rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground",
											children: th.unread
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "truncate text-xs text-muted-foreground",
										children: lang === "th" ? th.previewTh : th.preview
									})]
								})]
							}, th.id);
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-border p-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ jsx("img", {
									src: pro.avatar,
									alt: "",
									width: 40,
									height: 40,
									className: "size-10 rounded-xl object-cover"
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "truncate text-sm font-semibold",
										children: lang === "th" ? pro.nameTh : pro.name
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-xs text-emerald-600",
										children: ["● ", t("common.online")]
									})]
								})]
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => setTranslate((v) => !v),
								className: `inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${translate ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ jsx(Languages, { className: "size-3.5" }),
									" ",
									t("msg.translate")
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1 space-y-3 overflow-y-auto p-4",
							children: [active.messages.map((m) => {
								const mine = m.from === "me";
								const txt = translate ? lang === "th" ? m.textTh ?? m.text : m.text : m.text;
								return /* @__PURE__ */ jsx("div", {
									className: `flex ${mine ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ jsxs("div", {
										className: `max-w-[75%] rounded-3xl px-4 py-2 text-sm shadow-soft ${mine ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md border border-border bg-card"}`,
										children: [/* @__PURE__ */ jsx("div", { children: txt }), /* @__PURE__ */ jsxs("div", {
											className: `mt-1 flex items-center gap-1 text-[10px] ${mine ? "text-primary-foreground/70" : "text-muted-foreground"}`,
											children: [m.time, mine && m.read && /* @__PURE__ */ jsx(CheckCheck, { className: "size-3" })]
										})]
									})
								}, m.id);
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [lang === "th" ? `${pro.nameTh} ` : `${pro.name} `, t("msg.typing")]
							})]
						}),
						/* @__PURE__ */ jsxs("form", {
							className: "flex items-center gap-2 border-t border-border p-3",
							onSubmit: (e) => {
								e.preventDefault();
								setInput("");
							},
							children: [
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "rounded-full",
									children: /* @__PURE__ */ jsx(Image, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "rounded-full",
									children: /* @__PURE__ */ jsx(Mic, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx("input", {
									value: input,
									onChange: (e) => setInput(e.target.value),
									placeholder: t("msg.placeholder"),
									className: "flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "submit",
									size: "icon",
									className: "rounded-full bg-gradient-primary text-white",
									children: /* @__PURE__ */ jsx(Send, { className: "size-4" })
								})
							]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { MessagesPage as component };
