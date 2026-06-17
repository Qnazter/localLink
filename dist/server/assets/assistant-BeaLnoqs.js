import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { t as Route } from "./assistant-DnB1q7iq.js";
import { i as providers, r as popularServices } from "./mock-data-D-mt9l6T.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, Send, Sparkles, Wallet, Wrench } from "lucide-react";
//#region src/routes/assistant.tsx?tsr-split=component
var rules = [
	{
		match: [/leak|sink|toilet|water|รั่ว|ชักโครก|ประปา/i],
		analysis: {
			service: "Plumbing",
			serviceKey: "svc.plumbing",
			urgency: "high",
			estimate: "฿500 – ฿1,200",
			recProviderIds: ["p1"]
		}
	},
	{
		match: [/air|aircon|cooling|wire|breaker|outlet|แอร์|ไฟ|ไฟฟ้า/i],
		analysis: {
			service: "Electrical",
			serviceKey: "svc.electrical",
			urgency: "medium",
			estimate: "฿700 – ฿2,000",
			recProviderIds: ["p2"]
		}
	},
	{
		match: [/clean|dust|ทำความสะอาด|กวาด/i],
		analysis: {
			service: "Cleaning",
			serviceKey: "svc.cleaning",
			urgency: "low",
			estimate: "฿600 – ฿1,500",
			recProviderIds: ["p3", "p8"]
		}
	},
	{
		match: [/garden|plant|lawn|สวน|ต้นไม้/i],
		analysis: {
			service: "Gardening",
			serviceKey: "svc.gardening",
			urgency: "low",
			estimate: "฿500 – ฿1,200",
			recProviderIds: ["p4"]
		}
	},
	{
		match: [/move|moving|truck|ขนย้าย|ย้ายบ้าน/i],
		analysis: {
			service: "Moving",
			serviceKey: "svc.moving",
			urgency: "medium",
			estimate: "฿1,500 – ฿4,000",
			recProviderIds: ["p6"]
		}
	},
	{
		match: [/wifi|internet|computer|router|smart|อินเทอร์เน็ต|คอม|เน็ต/i],
		analysis: {
			service: "Tech Support",
			serviceKey: "svc.tech",
			urgency: "medium",
			estimate: "฿500 – ฿1,500",
			recProviderIds: ["p7"]
		}
	},
	{
		match: [/fix|broken|assemble|mount|ซ่อม|ติด/i],
		analysis: {
			service: "Home Repair",
			serviceKey: "svc.repair",
			urgency: "medium",
			estimate: "฿400 – ฿1,500",
			recProviderIds: ["p5"]
		}
	}
];
function analyze(text) {
	for (const r of rules) if (r.match.some((re) => re.test(text))) return r.analysis;
	return {
		service: "Home Repair",
		serviceKey: "svc.repair",
		urgency: "low",
		estimate: "฿400 – ฿1,000",
		recProviderIds: ["p5", "p1"]
	};
}
function AssistantPage() {
	const { t, lang } = useI18n();
	const { q } = Route.useSearch();
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [thinking, setThinking] = useState(false);
	const endRef = useRef(null);
	useEffect(() => {
		if (q) ask(q);
	}, []);
	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, thinking]);
	function ask(text) {
		if (!text.trim()) return;
		setInput("");
		setMessages((m) => [...m, {
			role: "user",
			text
		}]);
		setThinking(true);
		setTimeout(() => {
			const a = analyze(text);
			setMessages((m) => [...m, {
				role: "ai",
				text: lang === "th" ? "ได้เลย นี่คือสิ่งที่ฉันแนะนำ" : "Got it — here's what I'd recommend.",
				analysis: a
			}]);
			setThinking(false);
		}, 900);
	}
	const examples = [
		t("assistant.ex1"),
		t("assistant.ex2"),
		t("assistant.ex3")
	];
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("section", {
		className: "mx-auto flex max-w-3xl flex-col px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid size-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "size-6" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-extrabold tracking-tight",
						children: t("assistant.title")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t("assistant.subtitle")
					})] })]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex-1 space-y-4",
				children: [
					messages.length === 0 && /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-dashed border-border bg-card/60 p-6 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: t("assistant.examples")
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-3 flex flex-wrap justify-center gap-2",
							children: examples.map((ex) => /* @__PURE__ */ jsxs("button", {
								onClick: () => ask(ex),
								className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-accent",
								children: [
									"\"",
									ex,
									"\""
								]
							}, ex))
						})]
					}),
					messages.map((m, i) => m.role === "user" ? /* @__PURE__ */ jsx("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ jsx("div", {
							className: "max-w-[80%] rounded-3xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground shadow-soft",
							children: m.text
						})
					}, i) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 animate-fade-up",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white",
								children: /* @__PURE__ */ jsx(Sparkles, { className: "size-4" })
							}), /* @__PURE__ */ jsx("div", {
								className: "rounded-3xl rounded-tl-md bg-card px-4 py-3 text-sm shadow-soft border border-border",
								children: m.text
							})]
						}), m.analysis && /* @__PURE__ */ jsx(AnalysisCard, { a: m.analysis })]
					}, i)),
					thinking && /* @__PURE__ */ jsxs("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white",
							children: /* @__PURE__ */ jsx(Sparkles, { className: "size-4" })
						}), /* @__PURE__ */ jsx("div", {
							className: "rounded-3xl rounded-tl-md border border-border bg-card px-4 py-3 text-sm shadow-soft text-muted-foreground",
							children: /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "size-2 animate-pulse rounded-full bg-primary" }), t("assistant.thinking")]
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", { ref: endRef })
				]
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: (e) => {
					e.preventDefault();
					ask(input);
				},
				className: "sticky bottom-4 mt-6 flex items-center gap-2 rounded-full border border-border bg-card p-2 shadow-card",
				children: [/* @__PURE__ */ jsx("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: t("assistant.placeholder"),
					className: "flex-1 bg-transparent px-4 py-2 outline-none"
				}), /* @__PURE__ */ jsxs(Button, {
					type: "submit",
					className: "rounded-full bg-gradient-primary text-white hover:opacity-90",
					children: [/* @__PURE__ */ jsx(Send, { className: "size-4" }), t("assistant.send")]
				})]
			})
		]
	}) });
}
function AnalysisCard({ a }) {
	const { t, lang } = useI18n();
	const icon = popularServices.find((s) => s.key === a.serviceKey)?.icon ?? "🛠";
	const recs = providers.filter((p) => a.recProviderIds.includes(p.id));
	const urgencyColor = a.urgency === "high" ? "bg-red-100 text-red-700" : a.urgency === "medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700";
	return /* @__PURE__ */ jsxs("div", {
		className: "ml-12 rounded-3xl border border-border bg-card p-5 shadow-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ jsx(Stat, {
					icon: /* @__PURE__ */ jsx(Wrench, { className: "size-4" }),
					label: t("assistant.detected"),
					value: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
						className: "mr-1",
						children: icon
					}), t(a.serviceKey)] })
				}),
				/* @__PURE__ */ jsx(Stat, {
					icon: /* @__PURE__ */ jsx(Clock, { className: "size-4" }),
					label: t("assistant.urgency"),
					value: /* @__PURE__ */ jsx("span", {
						className: `rounded-full px-2 py-0.5 text-xs font-semibold ${urgencyColor}`,
						children: a.urgency
					})
				}),
				/* @__PURE__ */ jsx(Stat, {
					icon: /* @__PURE__ */ jsx(Wallet, { className: "size-4" }),
					label: t("assistant.estimate"),
					value: a.estimate
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-5",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mb-2 text-xs font-semibold text-muted-foreground",
				children: t("assistant.recommend")
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: recs.map((p) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-2xl border border-border bg-muted/40 p-3",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: p.avatar,
							alt: "",
							className: "size-10 rounded-xl object-cover",
							width: 40,
							height: 40
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("div", {
								className: "truncate text-sm font-semibold",
								children: lang === "th" ? p.nameTh : p.name
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [
									"★ ",
									p.rating,
									" · ",
									p.distanceKm,
									" ",
									t("svcpage.km"),
									" · ฿",
									p.pricePerHour,
									t("common.perHour")
								]
							})]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/services/$id",
							params: { id: p.id },
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "rounded-full bg-gradient-primary text-white hover:opacity-90",
								children: t("assistant.bookNow")
							})
						})
					]
				}, p.id))
			})]
		})]
	});
}
function Stat({ icon, label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-muted/40 p-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: [icon, label]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 text-sm font-semibold",
			children: value
		})]
	});
}
//#endregion
export { AssistantPage as component };
