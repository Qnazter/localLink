import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { n as Button } from "./AppShell-DT3kzd9o.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { BadgeCheck, MapPin, Sparkles, Star } from "lucide-react";
//#region src/components/ProviderCard.tsx
function ProviderCard({ provider }) {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ jsxs("div", {
		className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3 p-4",
			children: [/* @__PURE__ */ jsx("img", {
				src: provider.avatar,
				alt: "",
				width: 56,
				height: 56,
				loading: "lazy",
				className: "size-14 shrink-0 rounded-2xl object-cover"
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "truncate font-semibold",
							children: lang === "th" ? provider.nameTh : provider.name
						}), provider.verified && /* @__PURE__ */ jsx(BadgeCheck, {
							className: "size-4 text-primary",
							"aria-label": "verified"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t(provider.skillKey)
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1 text-foreground",
							children: [
								/* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-amber-400 text-amber-400" }),
								" ",
								provider.rating,
								" ",
								/* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [
										"(",
										provider.reviews,
										")"
									]
								})
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ jsx(MapPin, { className: "size-3.5" }),
								" ",
								provider.distanceKm,
								" ",
								t("svcpage.km")
							]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 border-t border-border bg-muted/40 px-4 py-3",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "text-xs text-muted-foreground",
				children: t("svcpage.from")
			}), /* @__PURE__ */ jsxs("div", {
				className: "text-sm font-semibold",
				children: [
					"฿",
					provider.pricePerHour,
					/* @__PURE__ */ jsx("span", {
						className: "font-normal text-muted-foreground",
						children: t("common.perHour")
					})
				]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [provider.aiPick && /* @__PURE__ */ jsxs("span", {
					className: "hidden items-center gap-1 rounded-full bg-secondary-soft px-2 py-1 text-[10px] font-semibold text-secondary sm:inline-flex",
					children: [
						/* @__PURE__ */ jsx(Sparkles, { className: "size-3" }),
						" ",
						t("svcpage.aiPick")
					]
				}), /* @__PURE__ */ jsx(Link, {
					to: "/services/$id",
					params: { id: provider.id },
					children: /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "rounded-full bg-gradient-primary text-white hover:opacity-90",
						children: t("svcpage.book")
					})
				})]
			})]
		})]
	});
}
//#endregion
export { ProviderCard as t };
