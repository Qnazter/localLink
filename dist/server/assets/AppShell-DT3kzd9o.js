import { n as useI18n } from "./i18n-BpUYNKcL.js";
import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Languages, Menu, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/components/layout/Logo.tsx
function Logo({ to = "/" }) {
	return /* @__PURE__ */ jsxs(Link, {
		to,
		className: "group inline-flex items-center gap-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid size-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft transition-transform group-hover:scale-105",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 24 24",
				className: "size-5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [/* @__PURE__ */ jsx("path", { d: "M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" }), /* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "9",
					r: "2.5"
				})]
			})
		}), /* @__PURE__ */ jsx("span", {
			className: "text-lg font-bold tracking-tight",
			children: "Local Link"
		})]
	});
}
//#endregion
//#region src/components/layout/LangSwitch.tsx
function LangSwitch({ compact = false }) {
	const { lang, setLang } = useI18n();
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft",
		children: [
			!compact && /* @__PURE__ */ jsx(Languages, { className: "ml-2 size-4 text-muted-foreground" }),
			/* @__PURE__ */ jsx("button", {
				onClick: () => setLang("en"),
				className: `rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
				"aria-pressed": lang === "en",
				children: "EN"
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: () => setLang("th"),
				className: `rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === "th" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
				"aria-pressed": lang === "th",
				children: "ไทย"
			})
		]
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/layout/Navbar.tsx
function Navbar() {
	const { t } = useI18n();
	const [open, setOpen] = useState(false);
	const role = localStorage.getItem("role");
	const links = [
		{
			to: "/services",
			label: t("nav.services")
		},
		{
			to: "/assistant",
			label: t("nav.assistant")
		},
		{
			to: "/dashboard",
			label: t("nav.dashboard")
		},
		...role !== "provider" ? [
			{
				to: "/bookings",
				label: t("nav.bookings")
			},
			{
				to: "/messages",
				label: t("nav.messages")
			},
			{
				to: "/profile",
				label: t("nav.profile")
			}
		] : [{
			to: "/provider",
			label: t("nav.provider")
		}]
	];
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						activeProps: { className: "rounded-full px-4 py-2 text-sm font-semibold text-foreground bg-accent" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "hidden sm:block",
							children: /* @__PURE__ */ jsx(LangSwitch, {})
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/auth",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								className: "rounded-full",
								children: t("nav.login")
							})
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/auth",
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ jsx(Button, {
								className: "rounded-full bg-gradient-primary text-white hover:opacity-90",
								children: t("nav.signup")
							})
						}),
						/* @__PURE__ */ jsx("button", {
							className: "grid size-10 place-items-center rounded-full border border-border md:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": "menu",
							children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
				children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					className: "rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent",
					onClick: () => setOpen(false),
					children: l.label
				}, l.to)), /* @__PURE__ */ jsxs("div", {
					className: "my-2 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ jsx(LangSwitch, {}), /* @__PURE__ */ jsx(Link, {
						to: "/auth",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ jsx(Button, {
							className: "rounded-full bg-gradient-primary text-white",
							children: t("nav.signup")
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-sm text-sm text-muted-foreground",
						children: t("footer.tagline")
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "mb-3 text-sm font-semibold",
					children: t("footer.product")
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: t("nav.services") }),
						/* @__PURE__ */ jsx("li", { children: t("nav.assistant") }),
						/* @__PURE__ */ jsx("li", { children: t("nav.becomeProvider") })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "mb-3 text-sm font-semibold",
					children: t("footer.company")
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: "About" }),
						/* @__PURE__ */ jsx("li", { children: "Careers" }),
						/* @__PURE__ */ jsx("li", { children: "Contact" })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Local Link. ",
					t("footer.rights")
				]
			})
		})]
	});
}
//#endregion
//#region src/components/layout/AppShell.tsx
function AppShell({ children, hideFooter = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			!hideFooter && /* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { LangSwitch as i, Button as n, cn as r, AppShell as t };
