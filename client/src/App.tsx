import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import TreeServiceHub from "./pages/TreeService";
import ServiceDetail from "./pages/ServiceDetail";
import JunkServicePage from "./pages/JunkServicePage";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import FreeEstimate from "./pages/FreeEstimate";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceAreaDetail from "./pages/ServiceAreaDetail";
import HelpWanted from "./pages/HelpWanted";
import Contact from "./pages/Contact";
import SitemapPage from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Landscaping from "./pages/Landscaping";
import LandscapingDetail from "./pages/LandscapingDetail";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Junk Removal Hub (preserved) */}
        <Route path="/junk-removal" component={Services} />
        {/* Legacy /services path redirects handled by Netlify _redirects */}
        <Route path="/services" component={Services} />
        
        {/* New root-level junk removal service pages */}
        <Route path="/residential-junk-removal" component={JunkServicePage} />
        <Route path="/commercial-junk-removal" component={JunkServicePage} />
        <Route path="/same-day-junk-pickup" component={JunkServicePage} />
        <Route path="/bulk-trash-pickup" component={JunkServicePage} />
        <Route path="/trash-hauling" component={JunkServicePage} />
        <Route path="/property-cleanouts" component={JunkServicePage} />
        <Route path="/estate-cleanouts" component={JunkServicePage} />
        <Route path="/foreclosure-cleanouts" component={JunkServicePage} />
        <Route path="/hoarder-cleanup" component={JunkServicePage} />
        <Route path="/garage-cleanout" component={JunkServicePage} />
        <Route path="/attic-cleanout" component={JunkServicePage} />
        <Route path="/basement-cleanout" component={JunkServicePage} />
        <Route path="/storage-unit-cleanout" component={JunkServicePage} />
        <Route path="/apartment-cleanouts" component={JunkServicePage} />
        <Route path="/eviction-cleanouts" component={JunkServicePage} />
        <Route path="/house-cleanout-services" component={JunkServicePage} />
        <Route path="/office-furniture-removal" component={JunkServicePage} />
        <Route path="/warehouse-cleanout" component={JunkServicePage} />
        <Route path="/retail-cleanout" component={JunkServicePage} />
        <Route path="/appliance-removal" component={JunkServicePage} />
        <Route path="/refrigerator-removal" component={JunkServicePage} />
        <Route path="/furniture-removal" component={JunkServicePage} />
        <Route path="/couch-sofa-removal" component={JunkServicePage} />
        <Route path="/mattress-disposal" component={JunkServicePage} />
        <Route path="/tv-removal" component={JunkServicePage} />
        <Route path="/piano-removal" component={JunkServicePage} />
        <Route path="/exercise-equipment-removal" component={JunkServicePage} />
        <Route path="/hot-tub-removal" component={JunkServicePage} />
        <Route path="/e-waste-disposal" component={JunkServicePage} />
        <Route path="/storm-debris-cleanup" component={JunkServicePage} />
        <Route path="/light-demolition" component={JunkServicePage} />
        <Route path="/shed-removal" component={JunkServicePage} />
        <Route path="/deck-removal" component={JunkServicePage} />
        <Route path="/fence-removal" component={JunkServicePage} />
        <Route path="/pool-removal" component={JunkServicePage} />
        <Route path="/swing-set-removal" component={JunkServicePage} />
        <Route path="/yard-waste-removal" component={JunkServicePage} />
        <Route path="/construction-debris" component={JunkServicePage} />
        <Route path="/concrete-removal" component={JunkServicePage} />
        <Route path="/scrap-metal-removal" component={JunkServicePage} />
        <Route path="/tire-removal" component={JunkServicePage} />
        
        {/* Tree Services */}
        <Route path="/tree-service" component={TreeServiceHub} />
        <Route path="/tree-service/:slug" component={ServiceDetail} />
        
        {/* Landscaping */}
        <Route path="/landscaping" component={Landscaping} />
        <Route path="/landscaping/:slug" component={LandscapingDetail} />
        
        {/* Service Areas */}
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/service-areas/:slug" component={ServiceAreaDetail} />
        
        {/* Core Pages */}
        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={FAQ} />
        <Route path="/free-estimate" component={FreeEstimate} />
        <Route path="/contact" component={Contact} />
        <Route path="/help-wanted" component={HelpWanted} />
        
        {/* Legal & Utility */}
        <Route path="/sitemap" component={SitemapPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
