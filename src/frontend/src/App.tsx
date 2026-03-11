import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BurnsidePage from "./pages/suburbs/BurnsidePage";
import GlenelgPage from "./pages/suburbs/GlenelgPage";
import MarionPage from "./pages/suburbs/MarionPage";
import MawsonLakesPage from "./pages/suburbs/MawsonLakesPage";
import MitchamPage from "./pages/suburbs/MitchamPage";
import MorphettValePage from "./pages/suburbs/MorphettValePage";
import NorwoodPage from "./pages/suburbs/NorwoodPage";
import PortAdelaidePage from "./pages/suburbs/PortAdelaidePage";
import ProspectPage from "./pages/suburbs/ProspectPage";
import SalisburyPage from "./pages/suburbs/SalisburyPage";
import TeaTreeGullyPage from "./pages/suburbs/TeaTreeGullyPage";
import UnleyPage from "./pages/suburbs/UnleyPage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Suburb routes
const glenelgRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-glenelg",
  component: GlenelgPage,
});
const norwoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-norwood",
  component: NorwoodPage,
});
const mawsonLakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-mawson-lakes",
  component: MawsonLakesPage,
});
const prospectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-prospect",
  component: ProspectPage,
});
const unleyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-unley",
  component: UnleyPage,
});
const burnsideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-burnside",
  component: BurnsidePage,
});
const salisburyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-salisbury",
  component: SalisburyPage,
});
const morphettValeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-morphett-vale",
  component: MorphettValePage,
});
const mitchamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-mitcham",
  component: MitchamPage,
});
const portAdelaideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-port-adelaide",
  component: PortAdelaidePage,
});
const teaTreeGullyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-tea-tree-gully",
  component: TeaTreeGullyPage,
});
const marionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/end-of-lease-cleaning-marion",
  component: MarionPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  glenelgRoute,
  norwoodRoute,
  mawsonLakesRoute,
  prospectRoute,
  unleyRoute,
  burnsideRoute,
  salisburyRoute,
  morphettValeRoute,
  mitchamRoute,
  portAdelaideRoute,
  teaTreeGullyRoute,
  marionRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
