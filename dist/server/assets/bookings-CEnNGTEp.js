import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { n as findProvider, t as bookings } from "./mock-data-D-mt9l6T.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
//#region src/routes/bookings.tsx?tsr-split=component
var STEPS = [
	"pending",
	"accepted",
	"onway",
	"working",
	"completed"
];
function BookingsPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-extrabold tracking-tight",
			children: t("book.title")
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 space-y-4",
			children: bookings.map((b) => {
				const pro = findProvider(b.providerId);
				const stepIdx = STEPS.indexOf(b.status);
				return /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("img", {
									src: pro.avatar,
									alt: "",
									width: 48,
									height: 48,
									className: "size-12 rounded-2xl object-cover"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-semibold",
									children: lang === "th" ? b.serviceTh : b.service
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground",
									children: [
										lang === "th" ? pro.nameTh : pro.name,
										" · ",
										b.date
									]
								})] })]
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-right",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "฿"
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-lg font-bold",
									children: ["฿", b.price]
								})]
							})]
						}),
						/* @__PURE__ */ jsx("ol", {
							className: "mt-5 grid grid-cols-5 gap-2",
							children: STEPS.map((s, i) => {
								const done = i <= stepIdx;
								return /* @__PURE__ */ jsxs("li", {
									className: "flex flex-col items-center text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: `grid size-8 place-items-center rounded-full text-xs font-bold ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
										children: done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4" }) : i + 1
									}), /* @__PURE__ */ jsx("div", {
										className: `mt-1.5 text-[10px] sm:text-xs ${done ? "font-semibold text-foreground" : "text-muted-foreground"}`,
										children: t(`book.${s}`)
									})]
								}, s);
							})
						}),
						b.status === "onway" && /* @__PURE__ */ jsxs("div", {
							className: "mt-5 grid gap-3 rounded-2xl border border-border bg-muted/40 p-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx(Clock, { className: "size-4 text-primary" }),
									" ",
									/* @__PURE__ */ jsxs("span", { children: [
										t("book.eta"),
										": ",
										/* @__PURE__ */ jsxs("strong", { children: [b.etaMin, " min"] })
									] })
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx(MapPin, { className: "size-4 text-primary" }),
									" ",
									/* @__PURE__ */ jsx("span", { children: t("book.live") })
								]
							})]
						}),
						b.status !== "completed" && /* @__PURE__ */ jsx("div", {
							className: "mt-4 flex justify-end",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								className: "rounded-full",
								children: t("book.cancel")
							})
						})
					]
				}, b.id);
			})
		})]
	}) });
}
//#endregion
export { BookingsPage as component };
