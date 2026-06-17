import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/assistant.tsx
var $$splitComponentImporter = () => import("./assistant-BeaLnoqs.js");
var Route = createFileRoute("/assistant")({
	head: () => ({ meta: [{ title: "AI Assistant — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: (s) => ({ q: typeof s.q === "string" ? s.q : void 0 })
});
//#endregion
export { Route as t };
