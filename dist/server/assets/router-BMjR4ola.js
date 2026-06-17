import { t as I18nProvider } from "./i18n-BpUYNKcL.js";
import { t as Route$9 } from "./assistant-DnB1q7iq.js";
import { t as Route$10 } from "./services._id-WUPDu74j.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DhYGySz4.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Local Link — Connecting Local Skills, Empowering Communities" },
			{
				name: "description",
				content: "AI-powered marketplace connecting you with trusted local service providers — plumbers, electricians, cleaners and more. Available in Thai and English."
			},
			{
				name: "author",
				content: "Local Link"
			},
			{
				property: "og:title",
				content: "Local Link — Trusted local services, powered by AI"
			},
			{
				property: "og:description",
				content: "Describe your problem naturally. AI matches you with trusted local pros in your community."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.ico"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx(HeadContent, {}), /* @__PURE__ */ jsx("link", {
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.ico?v=2"
		})] }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
//#endregion
//#region src/routes/provider.tsx
var $$splitComponentImporter$7 = () => import("./provider-CzOADxoF.js");
var Route$7 = createFileRoute("/provider")({
	head: () => ({ meta: [{ title: "Provider hub — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/profile.tsx
var $$splitComponentImporter$6 = () => import("./profile-BtPf4Fjf.js");
var Route$6 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/messages.tsx
var $$splitComponentImporter$5 = () => import("./messages-CoX7oBd4.js");
var Route$5 = createFileRoute("/messages")({
	head: () => ({ meta: [{ title: "Messages — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$4 = () => import("./dashboard-CdBgyqvp.js");
var Route$4 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/bookings.tsx
var $$splitComponentImporter$3 = () => import("./bookings-CEnNGTEp.js");
var Route$3 = createFileRoute("/bookings")({
	head: () => ({ meta: [{ title: "My bookings — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$2 = () => import("./auth-JSYY3RHX.js");
var Route$2 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in or create an account — Local Link" }, {
		name: "description",
		content: "Log in or sign up to Local Link. Choose to find services or offer them as a provider."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-BxPtdqkX.js");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Local Link — Find Trusted Local Services Near You" },
		{
			name: "description",
			content: "Describe your problem naturally. Our AI matches you with trusted local professionals — plumbers, electricians, cleaners, and more."
		},
		{
			property: "og:title",
			content: "Local Link — Trusted local services, powered by AI"
		},
		{
			property: "og:description",
			content: "AI-powered marketplace connecting homeowners with trusted local pros. Bilingual TH/EN."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/services.index.tsx
var $$splitComponentImporter = () => import("./services.index-DCFhEwlg.js");
var Route = createFileRoute("/services/")({
	head: () => ({ meta: [{ title: "Browse services — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var ProviderRoute = Route$7.update({
	id: "/provider",
	path: "/provider",
	getParentRoute: () => Route$8
});
var ProfileRoute = Route$6.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$8
});
var MessagesRoute = Route$5.update({
	id: "/messages",
	path: "/messages",
	getParentRoute: () => Route$8
});
var DashboardRoute = Route$4.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$8
});
var BookingsRoute = Route$3.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => Route$8
});
var AuthRoute = Route$2.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$8
});
var AssistantRoute = Route$9.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ServicesIndexRoute = Route.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AssistantRoute,
	AuthRoute,
	BookingsRoute,
	DashboardRoute,
	MessagesRoute,
	ProfileRoute,
	ProviderRoute,
	ServicesIdRoute: Route$10.update({
		id: "/services/$id",
		path: "/services/$id",
		getParentRoute: () => Route$8
	}),
	ServicesIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
