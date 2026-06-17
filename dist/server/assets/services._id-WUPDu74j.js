import { n as findProvider } from "./mock-data-D-mt9l6T.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/services.$id.tsx
var $$splitNotFoundComponentImporter = () => import("./services._id-BbI22wAa.js");
var $$splitComponentImporter = () => import("./services._id-CmkP_GA4.js");
var Route = createFileRoute("/services/$id")({
	head: () => ({ meta: [{ title: "Provider — Local Link" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	loader: ({ params }) => {
		if (!findProvider(params.id)) throw notFound();
	}
});
//#endregion
export { Route as t };
