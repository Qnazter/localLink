import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { i as providers, n as findProvider } from "./mock-data-D-mt9l6T.js";
import { t as Route } from "./services._id-WUPDu74j.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { BadgeCheck, Calendar, MapPin, MessageCircle, Phone, Sparkles, Star } from "lucide-react";
//#region src/routes/services.$id.tsx?tsr-split=component
function ProviderDetail() {
	const { id } = Route.useParams();
	const { t, lang } = useI18n();
	const p = findProvider(id);
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft",
					children: [/* @__PURE__ */ jsx("img", {
						src: p.avatar,
						alt: "",
						width: 96,
						height: 96,
						className: "size-24 rounded-3xl object-cover"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ jsx("h1", {
										className: "text-2xl font-extrabold tracking-tight",
										children: lang === "th" ? p.nameTh : p.name
									}),
									p.verified && /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary",
										children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "size-3.5" }), t("svcpage.verified")]
									}),
									p.aiPick && /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-secondary-soft px-2 py-0.5 text-xs font-semibold text-secondary",
										children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5" }), t("svcpage.aiPick")]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-muted-foreground",
								children: t(p.skillKey)
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Star, { className: "size-4 fill-amber-400 text-amber-400" }),
											" ",
											p.rating,
											" ",
											/* @__PURE__ */ jsxs("span", {
												className: "text-muted-foreground",
												children: [
													"(",
													p.reviews,
													")"
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 text-muted-foreground",
										children: [
											/* @__PURE__ */ jsx(MapPin, { className: "size-4" }),
											" ",
											p.distanceKm,
											" ",
											t("svcpage.km")
										]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-muted-foreground",
										children: [
											p.experience,
											" ",
											t("detail.experience")
										]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Section, {
					title: t("detail.about"),
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground",
						children: lang === "th" ? p.bioTh : p.bio
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex flex-wrap gap-2 text-xs",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground",
							children: [t("detail.languages"), ":"]
						}), p.languages.map((l) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-accent px-2 py-0.5 font-semibold",
							children: l
						}, l))]
					})]
				}),
				/* @__PURE__ */ jsx(Section, {
					title: t("detail.gallery"),
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=70",
							"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70",
							"https://www.bondcleaningnewcastle.com.au/wp-content/uploads/2026/05/Professional-janitors-working-in-kitchen-cleaning-service.webp",
							"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=70"
						].map((g) => /* @__PURE__ */ jsx("img", {
							src: g,
							alt: "",
							loading: "lazy",
							className: "aspect-square w-full rounded-2xl object-cover"
						}, g))
					})
				}),
				/* @__PURE__ */ jsx(Section, {
					title: t("detail.availability"),
					children: /* @__PURE__ */ jsx(Calendar7, {})
				}),
				/* @__PURE__ */ jsx(Section, {
					title: t("detail.reviews"),
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							{
								n: "Anya",
								t: "Showed up on time, fixed the leak in 30 minutes. Highly recommend!",
								r: 5
							},
							{
								n: "ภูผา",
								t: "ทำงานเรียบร้อย ราคาเป็นมิตร",
								r: 5
							},
							{
								n: "Marc",
								t: "Polite and professional. Will book again.",
								r: 4
							}
						].map((r, i) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-semibold",
									children: r.n
								}), /* @__PURE__ */ jsx("div", {
									className: "flex",
									children: Array.from({ length: r.r }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-amber-400 text-amber-400" }, j))
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: r.t
							})]
						}, i))
					})
				})
			] }), /* @__PURE__ */ jsxs("aside", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-end justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: t("svcpage.from")
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-3xl font-extrabold",
								children: [
									"฿",
									p.pricePerHour,
									/* @__PURE__ */ jsx("span", {
										className: "text-base font-normal text-muted-foreground",
										children: t("common.perHour")
									})
								]
							})] }), /* @__PURE__ */ jsx(Calendar, { className: "size-5 text-muted-foreground" })]
						}),
						/* @__PURE__ */ jsx(Button, {
							className: "mt-5 w-full rounded-full bg-gradient-primary text-white hover:opacity-90",
							children: t("detail.book")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/messages",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									className: "w-full rounded-full",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), t("detail.chat")]
								})
							}), /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "w-full rounded-full",
								children: [/* @__PURE__ */ jsx(Phone, { className: "size-4" }), t("detail.call")]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-5 rounded-3xl border border-border bg-card p-5 shadow-soft",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-semibold",
						children: t("dash.nearby")
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 space-y-3",
						children: providers.filter((x) => x.id !== p.id).slice(0, 3).map((x) => /* @__PURE__ */ jsxs(Link, {
							to: "/services/$id",
							params: { id: x.id },
							className: "flex items-center gap-3 rounded-xl p-2 hover:bg-accent",
							children: [/* @__PURE__ */ jsx("img", {
								src: x.avatar,
								alt: "",
								width: 40,
								height: 40,
								className: "size-10 rounded-xl object-cover"
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "truncate text-sm font-semibold",
									children: lang === "th" ? x.nameTh : x.name
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground",
									children: [
										t(x.skillKey),
										" · ★ ",
										x.rating
									]
								})]
							})]
						}, x.id))
					})]
				})]
			})]
		})
	}) });
}
function Section({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-3 text-lg font-bold tracking-tight",
			children: title
		}), children]
	});
}
function Calendar7() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-7 gap-2",
		children: [
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat",
			"Sun"
		].map((d, i) => {
			const busy = i === 2 || i === 5;
			return /* @__PURE__ */ jsxs("div", {
				className: `rounded-xl border p-3 text-center text-xs ${busy ? "border-border bg-muted text-muted-foreground" : "border-primary/30 bg-primary-soft text-primary"}`,
				children: [/* @__PURE__ */ jsx("div", {
					className: "font-semibold",
					children: d
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1",
					children: busy ? "Busy" : "Free"
				})]
			}, d);
		})
	});
}
//#endregion
export { ProviderDetail as component };
