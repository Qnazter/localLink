import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { i as providers, r as popularServices } from "./mock-data-D-mt9l6T.js";
import { t as AppShell } from "./AppShell-DT3kzd9o.js";
import { t as ProviderCard } from "./ProviderCard-BftJa2yl.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/services.index.tsx?tsr-split=component
function ServicesPage() {
	const { t } = useI18n();
	const [q, setQ] = useState("");
	const [cat, setCat] = useState(null);
	const [rating, setRating] = useState(0);
	const [today, setToday] = useState(false);
	const [maxPrice, setMaxPrice] = useState(700);
	const filtered = useMemo(() => {
		return providers.filter((p) => {
			if (cat && p.skillKey !== cat) return false;
			if (rating && p.rating < rating) return false;
			if (today && !p.availableToday) return false;
			if (p.pricePerHour > maxPrice) return false;
			if (q && !`${p.name} ${p.nameTh} ${p.skill}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
	}, [
		q,
		cat,
		rating,
		today,
		maxPrice
	]);
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-extrabold tracking-tight",
				children: t("svcpage.title")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-2 shadow-soft",
				children: [/* @__PURE__ */ jsx(Search, { className: "ml-3 size-5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: t("svcpage.search"),
					className: "w-full bg-transparent py-2 outline-none"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsx(Chip, {
					active: !cat,
					onClick: () => setCat(null),
					children: t("svcpage.all")
				}), popularServices.map((s) => /* @__PURE__ */ jsxs(Chip, {
					active: cat === s.key,
					onClick: () => setCat(s.key),
					children: [/* @__PURE__ */ jsx("span", {
						className: "mr-1",
						children: s.icon
					}), t(s.key)]
				}, s.key))]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft sm:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-1 text-xs font-semibold text-muted-foreground",
						children: [
							t("svcpage.filter.price"),
							" ฿",
							maxPrice
						]
					}), /* @__PURE__ */ jsx("input", {
						type: "range",
						min: 150,
						max: 1e3,
						step: 50,
						value: maxPrice,
						onChange: (e) => setMaxPrice(Number(e.target.value)),
						className: "w-full accent-primary"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "mb-1 text-xs font-semibold text-muted-foreground",
						children: t("svcpage.filter.rating")
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-1",
						children: [
							0,
							4,
							4.5,
							4.8
						].map((r) => /* @__PURE__ */ jsx(Chip, {
							active: rating === r,
							onClick: () => setRating(r),
							children: r === 0 ? "Any" : `${r}+`
						}, r))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "mb-1 text-xs font-semibold text-muted-foreground",
						children: t("svcpage.filter.availability")
					}), /* @__PURE__ */ jsx(Chip, {
						active: today,
						onClick: () => setToday((v) => !v),
						children: t("svcpage.today")
					})] })
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p) => /* @__PURE__ */ jsx(ProviderCard, { provider: p }, p.id))
			}),
			filtered.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "mt-10 rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground",
				children: "No providers match your filters yet."
			})
		]
	}) });
}
function Chip({ children, active, onClick }) {
	return /* @__PURE__ */ jsx("button", {
		onClick,
		className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:bg-accent"}`,
		children
	});
}
//#endregion
export { ServicesPage as component };
