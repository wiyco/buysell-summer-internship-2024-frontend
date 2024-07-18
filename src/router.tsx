import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import { FormParts } from "@/pages/FormParts";
import { ItemForm } from "@/pages/ItemForm";
import { ITEMS } from "./constants";

const rootRoute = createRootRoute();

const indexRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const formPartsRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/formParts",
  component: FormParts,
});

const itemFormRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/itemForm",
  component: () => <ItemForm items={ITEMS} />,
});

const routeTree = rootRoute.addChildren([
  indexRouter,
  formPartsRouter,
  itemFormRouter,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
