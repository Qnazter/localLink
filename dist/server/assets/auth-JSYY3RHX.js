import { n as useI18n } from "./i18n-BpUYNKcL.js";
import { n as Button, r as cn, t as AppShell } from "./AppShell-DT3kzd9o.js";
import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Apple, Camera, Mail } from "lucide-react";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const { t } = useI18n();
	const [tab, setTab] = useState("login");
	const [role, setRole] = useState("customer");
	return /* @__PURE__ */ jsx(AppShell, {
		hideFooter: true,
		children: /* @__PURE__ */ jsxs("section", {
			className: "mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-[2rem] bg-gradient-hero p-10 shadow-soft",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-extrabold tracking-tight",
							children: t("auth.welcome")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 max-w-md text-muted-foreground",
							children: t("auth.subtitle")
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: [
								"hero.trust",
								"ai.f3.title",
								"ai.f5.title"
							].map((k) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-foreground/80",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid size-6 place-items-center rounded-full bg-primary-soft text-primary",
									children: "✓"
								}), t(k)]
							}, k))
						})
					]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-card",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 rounded-full bg-muted p-1",
						children: ["login", "signup"].map((k) => /* @__PURE__ */ jsx("button", {
							onClick: () => setTab(k),
							className: `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${tab === k ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`,
							children: t(`auth.tab.${k}`)
						}, k))
					}),
					tab === "signup" && /* @__PURE__ */ jsxs("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "mb-2 block text-xs",
							children: t("auth.role")
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-2",
							children: ["customer", "provider"].map((r) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setRole(r),
								className: `rounded-2xl border p-3 text-left text-sm transition-colors ${role === r ? "border-primary bg-primary-soft" : "border-border hover:bg-accent"}`,
								children: /* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: t(`auth.role.${r}`)
								})
							}, r))
						})]
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "mt-5 space-y-4",
						onSubmit: (e) => {
							e.preventDefault();
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "email",
								className: "mb-1.5 block text-xs",
								children: t("auth.email")
							}), /* @__PURE__ */ jsx(Input, {
								id: "email",
								type: "email",
								placeholder: "you@example.com",
								required: true
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								className: "mb-1.5 block text-xs",
								children: t("auth.password")
							}), /* @__PURE__ */ jsx(Input, {
								id: "password",
								type: "password",
								placeholder: "••••••••",
								required: true
							})] }),
							tab === "signup" && role === "provider" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-4 rounded-2xl border border-dashed border-border bg-muted/40 p-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "grid size-14 place-items-center rounded-full bg-card text-muted-foreground",
											children: /* @__PURE__ */ jsx(Camera, { className: "size-5" })
										}), /* @__PURE__ */ jsx(Button, {
											type: "button",
											variant: "outline",
											className: "rounded-full",
											children: t("auth.provider.photo")
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										className: "mb-1.5 block text-xs",
										children: t("auth.provider.skills")
									}), /* @__PURE__ */ jsx(Input, { placeholder: "Plumbing, Electrical…" })] }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
											className: "mb-1.5 block text-xs",
											children: t("auth.provider.area")
										}), /* @__PURE__ */ jsx(Input, { placeholder: "Sukhumvit, Bangkok" })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
											className: "mb-1.5 block text-xs",
											children: t("auth.provider.phone")
										}), /* @__PURE__ */ jsx(Input, { placeholder: "+66 …" })] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
										className: "mb-1.5 block text-xs",
										children: t("auth.provider.intro")
									}), /* @__PURE__ */ jsx(Input, { placeholder: "A short bio…" })] })
								]
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/dashboard",
								className: "block",
								children: /* @__PURE__ */ jsxs(Button, {
									type: "button",
									className: "w-full rounded-full bg-gradient-primary text-white hover:opacity-90",
									onClick: () => {
										localStorage.setItem("role", role);
										window.location.href = "/dashboard";
									},
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "size-4" }),
										" ",
										t("auth.continue")
									]
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "my-5 flex items-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ jsx("span", { children: t("auth.or") }),
							/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							className: "w-full justify-center rounded-full",
							children: [
								/* @__PURE__ */ jsx(GoogleIcon, {}),
								" ",
								t("auth.google")
							]
						}), /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							className: "w-full justify-center rounded-full",
							children: [
								/* @__PURE__ */ jsx(Apple, { className: "size-4" }),
								" ",
								t("auth.apple")
							]
						})]
					})
				]
			})]
		})
	});
}
function GoogleIcon() {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", {
			fill: "#EA4335",
			d: "M12 10.2v3.9h5.5c-.2 1.4-1.6 4-5.5 4-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"
		})
	});
}
//#endregion
export { AuthPage as component };
