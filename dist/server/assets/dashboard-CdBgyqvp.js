import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { i as providers, n as findProvider, r as popularServices, t as bookings } from "./mock-data-D-mt9l6T.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { t as ProviderCard } from "./ProviderCard-BftJa2yl.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search, Sparkles } from "lucide-react";
//#region src/routes/dashboard.tsx?tsr-split=component
function DashboardPage() {
	const { t, lang } = useI18n();
	const [q, setQ] = useState("");
	return /* @__PURE__ */ jsxs(AppShell, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 pt-10 sm:px-6",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-extrabold tracking-tight sm:text-4xl",
				children: t("dash.greeting")
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: (e) => {
					e.preventDefault();
					window.location.href = `/assistant?q=${encodeURIComponent(q)}`;
				},
				className: "mt-6 flex flex-col gap-3 rounded-3xl border border-border bg-card p-3 shadow-soft sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 items-center gap-3 px-3",
					children: [/* @__PURE__ */ jsx(Search, { className: "size-5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("dash.placeholder"),
						className: "w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
					})]
				}), /* @__PURE__ */ jsxs(Button, {
					type: "submit",
					className: "rounded-full bg-gradient-primary text-white hover:opacity-90",
					children: [
						/* @__PURE__ */ jsx(Sparkles, { className: "size-4" }),
						" ",
						t("dash.analyze")
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionRow, { title: t("services.popular") }), /* @__PURE__ */ jsx("div", {
				className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7",
				children: popularServices.map((s) => /* @__PURE__ */ jsxs(Link, {
					to: "/services",
					className: `flex flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-to-br ${s.color} p-4 text-center transition-transform hover:-translate-y-0.5`,
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-2xl",
						children: s.icon
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold",
						children: t(s.key)
					})]
				}, s.key))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionRow, {
				title: t("dash.nearby"),
				to: "/services"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: providers.slice(0, 3).map((p) => /* @__PURE__ */ jsx(ProviderCard, { provider: p }, p.id))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionRow, {
				title: t("dash.recommended"),
				to: "/assistant"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: providers.filter((p) => p.aiPick).slice(0, 3).map((p) => /* @__PURE__ */ jsx(ProviderCard, { provider: p }, p.id))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionRow, {
				title: t("dash.recent"),
				to: "/bookings"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: bookings.slice(0, 4).map((b) => {
					const pro = findProvider(b.providerId);
					return /* @__PURE__ */ jsxs(Link, {
						to: "/bookings",
						className: "flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-card",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("img", {
								src: pro.avatar,
								alt: "",
								width: 48,
								height: 48,
								className: "size-12 rounded-2xl object-cover"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-semibold",
								children: lang === "th" ? b.serviceTh : b.service
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [
									lang === "th" ? pro.nameTh : pro.name,
									" · ",
									b.date
								]
							})] })]
						}), /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary",
							children: t(`book.${b.status}`)
						})]
					}, b.id);
				})
			})]
		})
	] });
}
function SectionRow({ title, to }) {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-xl font-bold tracking-tight",
			children: title
		}), to && /* @__PURE__ */ jsx(Link, {
			to,
			className: "text-sm font-semibold text-primary hover:underline",
			children: t("dash.viewAll")
		})]
	});
}
//#endregion
export { DashboardPage as component };
