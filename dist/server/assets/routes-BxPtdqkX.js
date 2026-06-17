import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { r as popularServices } from "./mock-data-D-mt9l6T.js";
import { n as Button, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BadgeCheck, Languages, MapPin, MessageSquareText, ShieldCheck, Sparkles, Star, Wallet } from "lucide-react";
//#region src/assets/locallink.jpg
var locallink_default = "/assets/locallink-DoRcK-F-.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs(AppShell, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -top-32 right-0 -z-10 size-120 rounded-full bg-primary/10 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 left-0 -z-10 size-120 rounded-full bg-secondary/10 blur-3xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:py-28",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "animate-fade-up",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-primary" }), t("hero.badge")]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
								children: t("hero.title")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg",
								children: t("hero.subtitle")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/assistant",
									search: { q: void 0 },
									children: /* @__PURE__ */ jsxs(Button, {
										size: "lg",
										className: "rounded-full bg-gradient-primary px-6 text-white shadow-soft hover:opacity-90",
										children: [t("hero.cta.find"), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ jsx(Link, {
									to: "/auth",
									children: /* @__PURE__ */ jsx(Button, {
										size: "lg",
										variant: "outline",
										className: "rounded-full px-6",
										children: t("hero.cta.provider")
									})
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: t("hero.trust")
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative animate-fade-up [animation-delay:120ms]",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card",
								children: /* @__PURE__ */ jsx("img", {
									src: locallink_default,
									alt: "Local Link community",
									width: 1280,
									height: 960,
									className: "aspect-4/3 w-full object-cover"
								})
							}),
							/* @__PURE__ */ jsx(FloatingCard, {
								className: "-left-4 top-8 hidden sm:flex",
								icon: /* @__PURE__ */ jsx(BadgeCheck, { className: "size-4 text-primary" }),
								label: "Community verified",
								sub: "184 reviews · Somchai"
							}),
							/* @__PURE__ */ jsx(FloatingCard, {
								className: "-bottom-6 right-2 hidden sm:flex",
								icon: /* @__PURE__ */ jsx(Star, { className: "size-4 fill-amber-400 text-amber-400" }),
								label: "4.9 average",
								sub: "across 12,000 jobs"
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				kicker: "01",
				title: t("how.title"),
				subtitle: t("how.subtitle")
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: [
					{
						icon: /* @__PURE__ */ jsx(MessageSquareText, { className: "size-6" }),
						title: t("how.s1.title"),
						desc: t("how.s1.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(Sparkles, { className: "size-6" }),
						title: t("how.s2.title"),
						desc: t("how.s2.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(MapPin, { className: "size-6" }),
						title: t("how.s3.title"),
						desc: t("how.s3.desc")
					}
				].map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-4 grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary",
							children: s.icon
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-xs font-semibold text-muted-foreground",
							children: ["STEP ", i + 1]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 text-lg font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-card/60",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					kicker: "02",
					title: t("services.popular"),
					subtitle: t("services.popular.sub")
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
					children: popularServices.map((s) => /* @__PURE__ */ jsxs(Link, {
						to: "/services",
						className: `group flex flex-col items-start gap-3 rounded-2xl border border-border bg-linear-to-br ${s.color} p-5 transition-all hover:-translate-y-0.5 hover:shadow-card`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-3xl",
								children: s.icon
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-base font-semibold text-foreground",
								children: t(s.key)
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100",
								children: ["Browse ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3" })]
							})
						]
					}, s.key))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				kicker: "03",
				title: t("ai.title"),
				subtitle: t("ai.subtitle")
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: /* @__PURE__ */ jsx(MessageSquareText, { className: "size-5" }),
						title: t("ai.f1.title"),
						desc: t("ai.f1.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(Languages, { className: "size-5" }),
						title: t("ai.f2.title"),
						desc: t("ai.f2.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(MapPin, { className: "size-5" }),
						title: t("ai.f3.title"),
						desc: t("ai.f3.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "size-5" }),
						title: t("ai.f4.title"),
						desc: t("ai.f4.desc")
					},
					{
						icon: /* @__PURE__ */ jsx(Wallet, { className: "size-5" }),
						title: t("ai.f5.title"),
						desc: t("ai.f5.desc")
					}
				].map((f, i) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-3 inline-grid size-10 place-items-center rounded-xl bg-secondary-soft text-secondary",
							children: f.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-base font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: f.desc
						})
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-4 pb-20 sm:px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-white shadow-card md:p-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-extrabold tracking-tight md:text-4xl",
							children: t("cta.title")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-white/85",
							children: t("cta.subtitle")
						})]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/assistant",
						search: { q: void 0 },
						children: /* @__PURE__ */ jsxs(Button, {
							size: "lg",
							className: "rounded-full bg-white px-6 text-primary hover:bg-white/90",
							children: [
								t("cta.button"),
								" ",
								/* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
							]
						})
					})]
				})
			})
		})
	] });
}
function SectionHeading({ kicker, title, subtitle }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-xs font-semibold tracking-widest text-primary",
				children: kicker
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function FloatingCard({ className = "", icon, label, sub }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `absolute z-10 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-card ${className}`,
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid size-9 place-items-center rounded-xl bg-primary-soft",
			children: icon
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-semibold",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "text-[11px] text-muted-foreground",
			children: sub
		})] })]
	});
}
//#endregion
export { Index as component };
