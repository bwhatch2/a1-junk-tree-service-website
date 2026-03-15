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
import PoolRemoval from "./pages/junk-services/PoolRemoval";
import ApartmentCleanouts from "./pages/junk-services/ApartmentCleanouts";
import ApplianceRemoval from "./pages/junk-services/ApplianceRemoval";
import ConstructionDebris from "./pages/junk-services/ConstructionDebris";
import AtticCleanout from "./pages/junk-services/AtticCleanout";
import BasementCleanout from "./pages/junk-services/BasementCleanout";
import BulkTrashPickup from "./pages/junk-services/BulkTrashPickup";
import CommercialJunkRemoval from "./pages/junk-services/CommercialJunkRemoval";
import ConcreteRemoval from "./pages/junk-services/ConcreteRemoval";
import CouchSofaRemoval from "./pages/junk-services/CouchSofaRemoval";
import DeckRemoval from "./pages/junk-services/DeckRemoval";
import EWasteDisposal from "./pages/junk-services/EWasteDisposal";
import EstateCleanouts from "./pages/junk-services/EstateCleanouts";
import EvictionCleanouts from "./pages/junk-services/EvictionCleanouts";
import ExerciseEquipmentRemoval from "./pages/junk-services/ExerciseEquipmentRemoval";
import FenceRemoval from "./pages/junk-services/FenceRemoval";
import ForeclosureCleanouts from "./pages/junk-services/ForeclosureCleanouts";
import FurnitureRemoval from "./pages/junk-services/FurnitureRemoval";
import GarageCleanout from "./pages/junk-services/GarageCleanout";
import TrashHauling from "./pages/junk-services/TrashHauling";
import HoarderCleanup from "./pages/junk-services/HoarderCleanup";
import HotTubRemoval from "./pages/junk-services/HotTubRemoval";
import LightDemolition from "./pages/junk-services/LightDemolition";
import MattressDisposal from "./pages/junk-services/MattressDisposal";
import OfficeFurnitureRemoval from "./pages/junk-services/OfficeFurnitureRemoval";
import PianoRemoval from "./pages/junk-services/PianoRemoval";
import SwingSetRemoval from "./pages/junk-services/SwingSetRemoval";
import PropertyCleanouts from "./pages/junk-services/PropertyCleanouts";
import RefrigeratorRemoval from "./pages/junk-services/RefrigeratorRemoval";
import ResidentialJunkRemoval from "./pages/junk-services/ResidentialJunkRemoval";
import SameDayJunkPickup from "./pages/junk-services/SameDayJunkPickup";
import StorageUnitCleanout from "./pages/junk-services/StorageUnitCleanout";
import HouseCleanoutServices from "./pages/junk-services/HouseCleanoutServices";
import WarehouseCleanout from "./pages/junk-services/WarehouseCleanout";
import RetailCleanout from "./pages/junk-services/RetailCleanout";
import TVRemoval from "./pages/junk-services/TVRemoval";
import StormDebrisCleanup from "./pages/junk-services/StormDebrisCleanup";
import ShedRemoval from "./pages/junk-services/ShedRemoval";
import YardWasteRemoval from "./pages/junk-services/YardWasteRemoval";
import ScrapMetalRemoval from "./pages/junk-services/ScrapMetalRemoval";
import TireRemoval from "./pages/junk-services/TireRemoval";

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
        <Route path="/residential-junk-removal" component={ResidentialJunkRemoval} />
        <Route path="/commercial-junk-removal" component={CommercialJunkRemoval} />
        <Route path="/same-day-junk-pickup" component={SameDayJunkPickup} />
        <Route path="/bulk-trash-pickup" component={BulkTrashPickup} />
        <Route path="/trash-hauling" component={TrashHauling} />
        <Route path="/property-cleanouts" component={PropertyCleanouts} />
        <Route path="/estate-cleanouts" component={EstateCleanouts} />
        <Route path="/foreclosure-cleanouts" component={ForeclosureCleanouts} />
        <Route path="/hoarder-cleanup" component={HoarderCleanup} />
        <Route path="/garage-cleanout" component={GarageCleanout} />
        <Route path="/attic-cleanout" component={AtticCleanout} />
        <Route path="/basement-cleanout" component={BasementCleanout} />
        <Route path="/storage-unit-cleanout" component={StorageUnitCleanout} />
        <Route path="/apartment-cleanouts" component={ApartmentCleanouts} />
        <Route path="/eviction-cleanouts" component={EvictionCleanouts} />
        <Route path="/house-cleanout-services" component={HouseCleanoutServices} />
        <Route path="/office-furniture-removal" component={OfficeFurnitureRemoval} />
        <Route path="/warehouse-cleanout" component={WarehouseCleanout} />
        <Route path="/retail-cleanout" component={RetailCleanout} />
        <Route path="/appliance-removal" component={ApplianceRemoval} />
        <Route path="/refrigerator-removal" component={RefrigeratorRemoval} />
        <Route path="/furniture-removal" component={FurnitureRemoval} />
        <Route path="/couch-sofa-removal" component={CouchSofaRemoval} />
        <Route path="/mattress-disposal" component={MattressDisposal} />
        <Route path="/tv-removal" component={TVRemoval} />
        <Route path="/piano-removal" component={PianoRemoval} />
        <Route path="/exercise-equipment-removal" component={ExerciseEquipmentRemoval} />
        <Route path="/hot-tub-removal" component={HotTubRemoval} />
        <Route path="/e-waste-disposal" component={EWasteDisposal} />
        <Route path="/storm-debris-cleanup" component={StormDebrisCleanup} />
        <Route path="/light-demolition" component={LightDemolition} />
        <Route path="/shed-removal" component={ShedRemoval} />
        <Route path="/deck-removal" component={DeckRemoval} />
        <Route path="/fence-removal" component={FenceRemoval} />
        <Route path="/pool-removal" component={PoolRemoval} />
        <Route path="/swing-set-removal" component={SwingSetRemoval} />
        <Route path="/yard-waste-removal" component={YardWasteRemoval} />
        <Route path="/construction-debris" component={ConstructionDebris} />
        <Route path="/concrete-removal" component={ConcreteRemoval} />
        <Route path="/scrap-metal-removal" component={ScrapMetalRemoval} />
        <Route path="/tire-removal" component={TireRemoval} />
        
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
