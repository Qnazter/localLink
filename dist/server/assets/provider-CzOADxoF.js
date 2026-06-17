import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { t as Switch } from "./switch-CuIf_Wpj.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Briefcase, CalendarDays, Sparkles, Star, TrendingUp, Wallet } from "lucide-react";
//#region src/routes/provider.tsx?tsr-split=component
function ProviderHub() {
	const { t } = useI18n();
	const [online, setOnline] = useState(true);
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-extrabold tracking-tight",
					children: t("provider.title")
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-soft",
					children: [
						/* @__PURE__ */ jsx("span", { className: `size-2 rounded-full ${online ? "bg-emerald-500" : "bg-muted-foreground"}` }),
						/* @__PURE__ */ jsx("span", {
							className: "text-sm font-semibold",
							children: online ? t("common.online") : t("common.offline")
						}),
						/* @__PURE__ */ jsx(Switch, {
							checked: online,
							onCheckedChange: setOnline
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsx(Stat, {
						icon: /* @__PURE__ */ jsx(Briefcase, { className: "size-4" }),
						label: t("provider.today"),
						value: "2"
					}),
					/* @__PURE__ */ jsx(Stat, {
						icon: /* @__PURE__ */ jsx(CalendarDays, { className: "size-4" }),
						label: t("provider.upcoming"),
						value: "6"
					}),
					/* @__PURE__ */ jsx(Stat, {
						icon: /* @__PURE__ */ jsx(Wallet, { className: "size-4" }),
						label: t("provider.income"),
						value: "฿32,450"
					}),
					/* @__PURE__ */ jsx(Stat, {
						icon: /* @__PURE__ */ jsx(Star, { className: "size-4" }),
						label: t("provider.rating"),
						value: "4.9 / 5"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ jsx(Card, {
						title: t("provider.today"),
						className: "lg:col-span-2",
						children: /* @__PURE__ */ jsx("div", {
							className: "space-y-2",
							children: [{
								title: "Fix leaking sink",
								time: "14:30",
								client: "Arthit",
								price: 700
							}, {
								title: "Wi-Fi mesh install",
								time: "17:00",
								client: "Lin",
								price: 1500
							}].map((j) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between rounded-2xl border border-border bg-muted/40 p-3",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: j.title
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground",
									children: [
										j.time,
										" · ",
										j.client
									]
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "text-sm font-bold",
									children: ["฿", j.price]
								})]
							}, j.title))
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						title: t("provider.suggested"),
						icon: /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-primary" }),
						children: /* @__PURE__ */ jsx("div", {
							className: "space-y-2",
							children: [{
								title: "Bathroom tap replacement",
								area: "Phrom Phong · 1.2 km",
								price: "฿600–900"
							}, {
								title: "AC quick service",
								area: "Ekkamai · 2.0 km",
								price: "฿900–1,500"
							}].map((s) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-muted/40 p-3",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-sm font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "text-xs text-muted-foreground",
										children: [
											s.area,
											" · ",
											s.price
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-2 flex gap-2",
										children: [/* @__PURE__ */ jsx(Button, {
											size: "sm",
											className: "flex-1 rounded-full bg-gradient-primary text-white hover:opacity-90",
											children: t("provider.accept")
										}), /* @__PURE__ */ jsx(Button, {
											size: "sm",
											variant: "outline",
											className: "rounded-full",
											children: t("provider.decline")
										})]
									})
								]
							}, s.title))
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						title: t("provider.portfolio"),
						className: "lg:col-span-2",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=60",
								"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=60",
								"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=60",
								"https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/aerotek/business-insights/plumbing_career_social-jpg.jpg?h=627&iar=0&w=1200&rev=d535c3705c67442fb68fe4404fae26d1&hash=F08087B1995CDF5F18566FE16998FFB6",
								"https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=60",
								"https://images.ctfassets.net/9wfm2v6d5j1f/4G9jrxO5FdxjUk0AA9HJ6f/8a4804f2ca1db647927c65772986dbc7/how-to-become-a-gardener.jpg"
							].map((g) => /* @__PURE__ */ jsx("img", {
								src: g,
								alt: "",
								loading: "lazy",
								className: "aspect-square w-full rounded-xl object-cover"
							}, g))
						})
					}),
					/* @__PURE__ */ jsx(Card, {
						title: t("provider.analytics"),
						icon: /* @__PURE__ */ jsx(TrendingUp, { className: "size-4 text-secondary" }),
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ jsx(Bar, {
									label: "Jobs completed",
									value: 84,
									max: 100
								}),
								/* @__PURE__ */ jsx(Bar, {
									label: "Response time",
									value: 72,
									max: 100,
									tint: "secondary"
								}),
								/* @__PURE__ */ jsx(Bar, {
									label: "Repeat customers",
									value: 56,
									max: 100
								})
							]
						})
					})
				]
			})
		]
	}) });
}
function Stat({ icon, label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: [icon, label]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-2 text-2xl font-extrabold tracking-tight",
			children: value
		})]
	});
}
function Card({ title, icon, children, className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `rounded-3xl border border-border bg-card p-5 shadow-soft ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex items-center gap-2 text-sm font-semibold",
			children: [icon, title]
		}), children]
	});
}
function Bar({ label, value, max, tint = "primary" }) {
	const pct = Math.min(100, value / max * 100);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-1 flex justify-between text-xs",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsxs("span", {
			className: "font-semibold",
			children: [value, "%"]
		})]
	}), /* @__PURE__ */ jsx("div", {
		className: "h-2 rounded-full bg-muted",
		children: /* @__PURE__ */ jsx("div", {
			className: `h-2 rounded-full ${tint === "primary" ? "bg-primary" : "bg-secondary"}`,
			style: { width: `${pct}%` }
		})
	})] });
}
//#endregion
export { ProviderHub as component };
