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

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Junk Removal Services */}
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={ServiceDetail} />
        
        {/* Tree Services */}
        <Route path="/tree-service" component={TreeServiceHub} />
        <Route path="/tree-service/:slug" component={ServiceDetail} />
        
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
