import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { i as providers } from "./mock-data-D-mt9l6T.js";
import { i as LangSwitch, t as AppShell } from "./AppShell-DT3kzd9o.js";
import { t as Switch } from "./switch-CuIf_Wpj.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Heart, History, MapPin, Star } from "lucide-react";
//#region src/routes/profile.tsx?tsr-split=component
function ProfilePage() {
	const { t, lang } = useI18n();
	const [dark, setDark] = useState(false);
	const [notif, setNotif] = useState(true);
	const favs = providers.slice(0, 3);
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ jsx("img", {
				src: "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
				alt: "",
				width: 96,
				height: 96,
				className: "size-24 rounded-3xl object-cover"
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-extrabold tracking-tight",
						children: lang === "th" ? "อาทิตย์ ใจดี" : "Arthit Jaidee"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "arthit@example.com"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsx(MapPin, { className: "size-3.5" }), " Sukhumvit, Bangkok"]
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-6 grid gap-5 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ jsx(Card, {
					title: t("profile.addresses"),
					icon: /* @__PURE__ */ jsx(MapPin, { className: "size-4" }),
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-border bg-muted/40 p-3",
							children: "Home · 23 Sukhumvit 31, Bangkok"
						}), /* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-border bg-muted/40 p-3",
							children: "Office · 88 Asok Tower"
						})]
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					title: t("profile.history"),
					icon: /* @__PURE__ */ jsx(History, { className: "size-4" }),
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", { children: "Fix leaking sink" }), /* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: "฿700"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", { children: "Deep cleaning 2BR" }), /* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: "฿1,200"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", { children: "Replace breaker" }), /* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: "฿900"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					title: t("profile.favorites"),
					icon: /* @__PURE__ */ jsx(Heart, { className: "size-4" }),
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: favs.map((p) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-2xl border border-border bg-muted/40 p-2",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: p.avatar,
									alt: "",
									width: 36,
									height: 36,
									className: "size-9 rounded-xl object-cover"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("div", {
										className: "truncate text-sm font-semibold",
										children: lang === "th" ? p.nameTh : p.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: t(p.skillKey)
									})]
								}),
								/* @__PURE__ */ jsx(Heart, { className: "size-4 fill-rose-500 text-rose-500" })
							]
						}, p.id))
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					title: t("profile.reviews"),
					icon: /* @__PURE__ */ jsx(Star, { className: "size-4" }),
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-border bg-muted/40 p-3",
							children: "★★★★★ — \"Very fast and friendly.\""
						}), /* @__PURE__ */ jsx("div", {
							className: "rounded-2xl border border-border bg-muted/40 p-3",
							children: "★★★★☆ — \"Good job overall.\""
						})]
					})
				}),
				/* @__PURE__ */ jsx(Card, {
					title: t("profile.lang"),
					children: /* @__PURE__ */ jsx(LangSwitch, {})
				}),
				/* @__PURE__ */ jsx(Card, {
					title: "Preferences",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: /* @__PURE__ */ jsx(Row, {
							label: t("profile.notif"),
							children: /* @__PURE__ */ jsx(Switch, {
								checked: notif,
								onCheckedChange: setNotif
							})
						})
					})
				})
			]
		})]
	}) });
}
function Card({ title, icon, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-3xl border border-border bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex items-center gap-2 text-sm font-semibold",
			children: [icon, title]
		}), children]
	});
}
function Row({ label, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between text-sm",
		children: [/* @__PURE__ */ jsx("span", { children: label }), children]
	});
}
//#endregion
export { ProfilePage as component };
