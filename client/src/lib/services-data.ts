/*
  SERVICES DATA: Complete catalog of all A1 Junk Removal and Tree Service offerings.
  Each service has: slug, title, category, keywords, metaDescription, h1, description, and related services.
  Used by: mega-menu navigation, service page template, sitemap, internal linking.
*/

export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  keywords: string[];
  metaDescription: string;
  h1: string;
  shortDescription: string;
  description: string;
  relatedSlugs: string[];
  photoNeeded: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string; // lucide icon name
  services: ServiceItem[];
}

// ─── JUNK REMOVAL CATEGORIES ───

const junkHauling: ServiceItem[] = [
  {
    slug: "residential-junk-removal",
    title: "Residential Junk Removal Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["residential junk removal Omaha", "home junk removal", "house junk hauling"],
    metaDescription: "Need junk removed from your home in Omaha? A1 Junk Removal handles everything from single items to full house cleanouts. Call (402) 612-2373 for a free estimate.",
    h1: "Residential Junk Removal in Omaha",
    shortDescription: "Full-service junk removal for homes across the Omaha metro.",
    description: "Got junk piling up at home? We get it — life gets busy and stuff accumulates. Whether it's an old couch in the basement, boxes in the garage, or a whole room that needs clearing out, we handle it all. Our crew shows up on time, does the heavy lifting, and hauls everything away. No hassle, no hidden fees. We're 40-60% less than the big national companies because we're locally owned with no franchise overhead.",
    relatedSlugs: ["full-service-junk-removal", "house-cleanout", "garage-cleanout", "basement-cleanout"],
    photoNeeded: "Crew removing furniture from a residential home"
  },
  {
    slug: "full-service-junk-removal",
    title: "Full Service Junk Removal Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["full service junk removal Omaha", "complete junk removal", "junk hauling service"],
    metaDescription: "A1 Junk Removal offers full-service junk removal in Omaha. We load, haul, and dispose of everything. Call (402) 612-2373 for your free estimate today.",
    h1: "Full Service Junk Removal in Omaha",
    shortDescription: "We handle everything — loading, hauling, and responsible disposal.",
    description: "When we say full service, we mean it. You point at what needs to go, and we take care of the rest. Loading, hauling, disposal — all of it. We sort through items to donate what we can and recycle the rest. You don't lift a finger. That's how junk removal should work.",
    relatedSlugs: ["residential-junk-removal", "declutter-service", "waste-management-services"],
    photoNeeded: "Crew loading a full truck with mixed household junk"
  },
  {
    slug: "attic-junk-removal",
    title: "Attic Junk Removal Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["attic junk removal Omaha", "attic cleanout", "attic cleanup service"],
    metaDescription: "Attic full of old junk? A1 Junk Removal clears out attics across Omaha. We do the climbing and heavy lifting. Call (402) 612-2373.",
    h1: "Attic Junk Removal in Omaha",
    shortDescription: "We climb up and clear out your attic so you don't have to.",
    description: "Attics have a way of becoming the catch-all for everything you don't want to deal with. Old holiday decorations, broken furniture, boxes of who-knows-what. We'll climb up there, haul it all down, and take it away. You don't even have to go up the ladder.",
    relatedSlugs: ["basement-cleanout", "residential-junk-removal", "declutter-service"],
    photoNeeded: "Worker carrying boxes down from an attic"
  },
  {
    slug: "declutter-service",
    title: "Declutter Service Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["declutter service Omaha", "decluttering help", "home decluttering"],
    metaDescription: "Overwhelmed by clutter? A1 Junk Removal helps Omaha homeowners declutter fast. We haul away what you don't need. Call (402) 612-2373.",
    h1: "Declutter Service in Omaha",
    shortDescription: "Take back your space — we haul away the clutter.",
    description: "Sometimes you just need a fresh start. If your home is overflowing with stuff you no longer need, we can help. Walk us through your space, tell us what goes, and we'll have it out of there fast. It's amazing how much better a room feels when the junk is gone.",
    relatedSlugs: ["residential-junk-removal", "full-service-junk-removal", "house-cleanout"],
    photoNeeded: "Cluttered room being cleared out"
  },
  {
    slug: "trash-hauling",
    title: "Trash Hauling Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["trash hauling Omaha", "trash removal service", "garbage hauling"],
    metaDescription: "Need trash hauled away in Omaha? A1 Junk Removal handles residential and commercial trash hauling. Call (402) 612-2373 for a free estimate.",
    h1: "Trash Hauling Service in Omaha",
    shortDescription: "Residential and commercial trash hauling across the metro.",
    description: "Whether it's a pile of trash from a renovation, a big cleanup project, or just more garbage than your regular pickup can handle, we'll haul it away. We bring the truck, do the loading, and make sure everything is disposed of properly.",
    relatedSlugs: ["waste-management-services", "residential-junk-removal", "construction-debris-removal"],
    photoNeeded: "Truck loaded with bags of trash and debris"
  },
  {
    slug: "waste-management-services",
    title: "Waste Management Services Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["waste management Omaha", "waste removal service", "junk disposal"],
    metaDescription: "A1 Junk Removal provides waste management services in Omaha for homes and businesses. Eco-friendly disposal. Call (402) 612-2373.",
    h1: "Waste Management Services in Omaha",
    shortDescription: "Responsible waste removal for residential and commercial properties.",
    description: "We take waste management seriously. Everything we haul gets sorted — what can be donated goes to local charities, recyclables go to the right facilities, and the rest is disposed of responsibly. We're not just throwing your stuff in a landfill.",
    relatedSlugs: ["trash-hauling", "commercial-waste-management", "full-service-junk-removal"],
    photoNeeded: "Sorting and recycling at disposal facility"
  },
  {
    slug: "residential-waste-removal",
    title: "Residential Waste Removal Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["residential waste removal Omaha", "home waste pickup", "household waste disposal"],
    metaDescription: "Residential waste removal in Omaha by A1 Junk Removal. We handle household waste your regular trash service won't. Call (402) 612-2373.",
    h1: "Residential Waste Removal in Omaha",
    shortDescription: "We handle the household waste your regular trash service won't take.",
    description: "Your regular trash pickup has limits — we don't. When you've got waste that's too big, too heavy, or just too much for the curb, give us a call. We'll come out, load it up, and take it away. Simple as that.",
    relatedSlugs: ["residential-junk-removal", "trash-hauling", "waste-management-services"],
    photoNeeded: "Crew loading household waste into truck"
  },
  {
    slug: "trash-out-service",
    title: "Trash Out Service Omaha | A1 Junk Removal",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["trash out service Omaha", "property trash out", "foreclosure cleanout"],
    metaDescription: "Professional trash out services in Omaha for property managers and banks. A1 Junk Removal clears properties fast. Call (402) 612-2373.",
    h1: "Trash Out Service in Omaha",
    shortDescription: "Fast property cleanouts for managers, landlords, and banks.",
    description: "Property managers and banks call us when they need a place cleared out fast. Whether it's a foreclosure, an eviction, or a tenant who left a mess behind, we come in and get it done. We've seen it all and nothing fazes us. The property will be broom-clean when we're done.",
    relatedSlugs: ["property-cleanouts", "house-cleanout", "apartment-cleanouts"],
    photoNeeded: "Clearing out a trashed rental property"
  },
];

const cleanouts: ServiceItem[] = [
  {
    slug: "apartment-cleanouts",
    title: "Apartment Cleanout Service Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["apartment cleanout Omaha", "apartment junk removal", "apartment clean out service"],
    metaDescription: "Apartment cleanout services in Omaha. A1 Junk Removal clears out apartments for tenants, landlords, and property managers. Call (402) 612-2373.",
    h1: "Apartment Cleanout Service in Omaha",
    shortDescription: "Complete apartment cleanouts for tenants, landlords, and managers.",
    description: "Moving out of an apartment or managing a property that needs clearing? We handle complete apartment cleanouts — furniture, appliances, trash, everything. We work fast so you can get the unit turned around and ready for the next tenant.",
    relatedSlugs: ["house-cleanout", "property-cleanouts", "furniture-removal"],
    photoNeeded: "Empty apartment after cleanout"
  },
  {
    slug: "basement-cleanout",
    title: "Basement Cleanout Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["basement cleanout Omaha", "basement junk removal", "basement cleanup"],
    metaDescription: "Basement full of junk? A1 Junk Removal provides basement cleanout services across Omaha. We do the heavy lifting. Call (402) 612-2373.",
    h1: "Basement Cleanout in Omaha",
    shortDescription: "We clear out basements so you can reclaim your space.",
    description: "Basements are where stuff goes to be forgotten. Old exercise equipment, holiday decorations from 10 years ago, boxes you haven't opened since you moved in. We'll haul it all up and out. You'll be amazed at how much space you actually have down there.",
    relatedSlugs: ["attic-junk-removal", "garage-cleanout", "house-cleanout"],
    photoNeeded: "Cluttered basement being cleared"
  },
  {
    slug: "garage-cleanout",
    title: "Garage Cleanout Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["garage cleanout Omaha", "garage junk removal", "garage cleanup service"],
    metaDescription: "Garage cleanout services in Omaha. A1 Junk Removal clears out your garage so you can actually park in it. Call (402) 612-2373.",
    h1: "Garage Cleanout in Omaha",
    shortDescription: "Clear out the garage and actually park your car in it again.",
    description: "Can't park in your garage anymore? You're not alone. Garages become storage units real fast. We'll come out, clear the junk, and give you your garage back. Most garage cleanouts take us just a couple of hours.",
    relatedSlugs: ["basement-cleanout", "residential-junk-removal", "declutter-service"],
    photoNeeded: "Before/after of a garage cleanout"
  },
  {
    slug: "house-cleanout",
    title: "House Cleanout Service Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["house cleanout Omaha", "whole house cleanout", "estate cleanout service"],
    metaDescription: "Full house cleanout services in Omaha. A1 Junk Removal handles estate cleanouts, move-outs, and more. Call (402) 612-2373.",
    h1: "House Cleanout Service in Omaha",
    shortDescription: "Complete house cleanouts for estates, move-outs, and downsizing.",
    description: "Whether you're dealing with an estate after a loved one passes, downsizing, or just need a whole house cleared out, we handle it with care and efficiency. We understand these situations can be emotional, and we treat your property and belongings with respect.",
    relatedSlugs: ["apartment-cleanouts", "property-cleanouts", "hoarder-cleanout"],
    photoNeeded: "Crew clearing furniture from a house"
  },
  {
    slug: "cleanout-services",
    title: "Cleanout Services Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["cleanout services Omaha", "property cleanout", "junk cleanout"],
    metaDescription: "Professional cleanout services in Omaha. A1 Junk Removal handles homes, apartments, garages, basements, and commercial properties. Call (402) 612-2373.",
    h1: "Professional Cleanout Services in Omaha",
    shortDescription: "Homes, apartments, garages, basements — we clean them all out.",
    description: "We offer cleanout services for just about any space you can think of. Homes, apartments, garages, basements, storage units, offices — you name it. We bring the crew, the truck, and the muscle. You just tell us what goes.",
    relatedSlugs: ["house-cleanout", "garage-cleanout", "basement-cleanout", "storage-unit-cleanouts"],
    photoNeeded: "General cleanout in progress"
  },
  {
    slug: "fall-cleanouts",
    title: "Fall Cleanout Services Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["fall cleanout Omaha", "fall cleanup service", "seasonal cleanout"],
    metaDescription: "Get your property ready for winter with fall cleanout services from A1 Junk Removal in Omaha. Call (402) 612-2373.",
    h1: "Fall Cleanout Services in Omaha",
    shortDescription: "Get your property cleaned up before winter hits.",
    description: "Fall is the perfect time to clear out the junk before winter sets in. Yard debris, old patio furniture, that pile of stuff in the garage — let us haul it all away so you can button up your property for the cold months ahead.",
    relatedSlugs: ["yard-waste-removal", "garage-cleanout", "backyard-cleanup"],
    photoNeeded: "Fall yard cleanup with leaves and debris"
  },
  {
    slug: "hoarder-cleanout",
    title: "Hoarder Cleanout Service Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["hoarder cleanout Omaha", "hoarding cleanup", "hoarder house cleanout"],
    metaDescription: "Compassionate hoarder cleanout services in Omaha. A1 Junk Removal handles sensitive situations with care. Call (402) 612-2373.",
    h1: "Hoarder Cleanout Service in Omaha",
    shortDescription: "Compassionate, thorough cleanouts for hoarding situations.",
    description: "We understand that hoarding situations are sensitive. Our crew approaches every job with patience and respect. We work methodically through the space, sorting carefully to make sure nothing important gets thrown away. If you or a loved one needs help, we're here.",
    relatedSlugs: ["house-cleanout", "cleanout-services", "full-service-junk-removal"],
    photoNeeded: "Compassionate cleanout of a cluttered space"
  },
  {
    slug: "property-cleanouts",
    title: "Property Cleanout Service Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["property cleanout Omaha", "rental property cleanout", "commercial property cleanout"],
    metaDescription: "Property cleanout services in Omaha for landlords, managers, and real estate agents. A1 Junk Removal gets properties ready fast. Call (402) 612-2373.",
    h1: "Property Cleanout Service in Omaha",
    shortDescription: "Fast property cleanouts for landlords and real estate professionals.",
    description: "Landlords, property managers, and real estate agents rely on us to get properties cleared out and ready to show. We handle everything from tenant left-behinds to full estate cleanouts. Fast turnaround, fair pricing, and the property is broom-clean when we leave.",
    relatedSlugs: ["apartment-cleanouts", "trash-out-service", "house-cleanout"],
    photoNeeded: "Empty, clean rental property after cleanout"
  },
  {
    slug: "storage-unit-cleanouts",
    title: "Storage Unit Cleanout Omaha | A1 Junk Removal",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["storage unit cleanout Omaha", "storage locker cleanout", "storage unit junk removal"],
    metaDescription: "Storage unit cleanout services in Omaha. Stop paying rent on junk you don't need. A1 Junk Removal clears it out. Call (402) 612-2373.",
    h1: "Storage Unit Cleanout in Omaha",
    shortDescription: "Stop paying monthly rent on stuff you don't need.",
    description: "Paying $100+ a month to store stuff you haven't looked at in years? We'll clear out your storage unit so you can stop throwing money away. We'll haul everything to the truck and you can cancel that rental.",
    relatedSlugs: ["cleanout-services", "residential-junk-removal", "declutter-service"],
    photoNeeded: "Clearing out a packed storage unit"
  },
];

const construction: ServiceItem[] = [
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["construction debris removal Omaha", "construction waste hauling", "job site cleanup"],
    metaDescription: "Construction debris removal in Omaha. A1 Junk Removal hauls away lumber, drywall, concrete, and more from your job site. Call (402) 612-2373.",
    h1: "Construction Debris Removal in Omaha",
    shortDescription: "Job site cleanup — we haul away all types of construction waste.",
    description: "Contractors and homeowners call us when the job is done but the mess isn't. We haul away lumber, drywall, concrete, roofing materials, and everything else that piles up during a construction or renovation project. We keep your job site clean so you can focus on the work.",
    relatedSlugs: ["construction-waste-removal", "remodeling-debris-removal", "drywall-removal"],
    photoNeeded: "Construction debris pile being loaded into truck"
  },
  {
    slug: "construction-waste-removal",
    title: "Construction Waste Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["construction waste removal Omaha", "construction cleanup", "building waste disposal"],
    metaDescription: "Construction waste removal services in Omaha. A1 Junk Removal handles all construction waste. Call (402) 612-2373 for a free estimate.",
    h1: "Construction Waste Removal in Omaha",
    shortDescription: "Complete construction waste removal for contractors and homeowners.",
    description: "From small bathroom remodels to large commercial builds, construction creates a lot of waste. We handle all of it — wood, metal, concrete, drywall, insulation, you name it. We work with contractors on regular pickups or one-time cleanouts.",
    relatedSlugs: ["construction-debris-removal", "building-material-removal", "demolition-contractor"],
    photoNeeded: "Mixed construction waste in a pile"
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["concrete removal Omaha", "concrete hauling", "broken concrete removal"],
    metaDescription: "Concrete removal and hauling in Omaha. A1 Junk Removal handles driveways, patios, foundations, and more. Call (402) 612-2373.",
    h1: "Concrete Removal in Omaha",
    shortDescription: "We break it up and haul it away — driveways, patios, foundations.",
    description: "Concrete is heavy and a pain to deal with. That's what we're here for. Whether it's a crumbling driveway, an old patio, or a foundation that needs to go, we break it up, load it, and haul it away. We've got the equipment and the crew to handle it.",
    relatedSlugs: ["concrete-patio-removal", "broken-concrete-haul-away", "brick-block-concrete-removal"],
    photoNeeded: "Breaking up and removing concrete driveway"
  },
  {
    slug: "concrete-patio-removal",
    title: "Concrete Patio Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["concrete patio removal Omaha", "patio demolition", "patio removal service"],
    metaDescription: "Concrete patio removal in Omaha. A1 Junk Removal demolishes and hauls away old patios. Call (402) 612-2373 for a free estimate.",
    h1: "Concrete Patio Removal in Omaha",
    shortDescription: "Old patio needs to go? We demolish and haul it away.",
    description: "Ready for a new patio but the old concrete one is in the way? We'll break it up, load the pieces, and haul it all off so you can start fresh. Most patio removals are done in a single day.",
    relatedSlugs: ["concrete-removal", "deck-removal", "brick-block-concrete-removal"],
    photoNeeded: "Demolishing a concrete patio"
  },
  {
    slug: "broken-concrete-haul-away",
    title: "Broken Concrete Haul Away Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["broken concrete haul away Omaha", "concrete disposal", "concrete hauling service"],
    metaDescription: "Need broken concrete hauled away in Omaha? A1 Junk Removal picks up and disposes of concrete debris. Call (402) 612-2373.",
    h1: "Broken Concrete Haul Away in Omaha",
    shortDescription: "Already broken up? We'll load it and haul it away.",
    description: "If you've already done the demo work and just need someone to haul the broken concrete away, that's what we do. We'll load it into our truck and take it to the proper disposal facility. No minimum load required.",
    relatedSlugs: ["concrete-removal", "construction-debris-removal", "brick-block-concrete-removal"],
    photoNeeded: "Loading broken concrete chunks into truck"
  },
  {
    slug: "brick-block-concrete-removal",
    title: "Brick, Block & Concrete Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["brick removal Omaha", "block removal", "masonry demolition"],
    metaDescription: "Brick, block, and concrete removal in Omaha. A1 Junk Removal handles masonry demolition and hauling. Call (402) 612-2373.",
    h1: "Brick, Block & Concrete Removal in Omaha",
    shortDescription: "Masonry demolition and removal — brick, block, and concrete.",
    description: "Old brick walls, cinder block structures, concrete foundations — we tear them down and haul them away. Our crew has the tools and experience to handle heavy masonry work safely and efficiently.",
    relatedSlugs: ["concrete-removal", "demolition-contractor", "construction-debris-removal"],
    photoNeeded: "Demolishing brick or block structure"
  },
  {
    slug: "building-material-removal",
    title: "Building Material Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["building material removal Omaha", "leftover building materials", "construction material disposal"],
    metaDescription: "Building material removal in Omaha. A1 Junk Removal hauls away leftover lumber, drywall, and more. Call (402) 612-2373.",
    h1: "Building Material Removal in Omaha",
    shortDescription: "Leftover building materials? We'll haul them away.",
    description: "After a build or renovation, there's always leftover material — extra lumber, drywall scraps, unused tile, insulation. We'll come pick it all up so your property is clean and ready.",
    relatedSlugs: ["construction-debris-removal", "construction-waste-removal", "drywall-removal"],
    photoNeeded: "Pile of leftover building materials"
  },
  {
    slug: "deck-removal",
    title: "Deck Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["deck removal Omaha", "deck demolition", "old deck tear down"],
    metaDescription: "Deck removal and demolition in Omaha. A1 Junk Removal tears down and hauls away old decks. Call (402) 612-2373.",
    h1: "Deck Removal in Omaha",
    shortDescription: "We tear down old decks and haul away every piece.",
    description: "Old deck rotting away? We'll tear it down, pull up the posts, and haul everything off. Whether it's a small back porch or a large multi-level deck, we've got the crew and equipment to handle it.",
    relatedSlugs: ["shed-removal", "gazebo-removal", "concrete-patio-removal"],
    photoNeeded: "Tearing down an old wooden deck"
  },
  {
    slug: "demolition-contractor",
    title: "Demolition Contractor Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["demolition contractor Omaha", "light demolition", "interior demolition"],
    metaDescription: "Light demolition services in Omaha. A1 Junk Removal handles interior demo, structure removal, and debris hauling. Call (402) 612-2373.",
    h1: "Demolition Contractor in Omaha",
    shortDescription: "Light demolition for interiors, structures, and more.",
    description: "Need something torn down? We handle light demolition projects — interior walls, bathroom tear-outs, kitchen demo, sheds, barns, and more. We do the demo AND haul away all the debris, so you're not left with a pile of rubble.",
    relatedSlugs: ["bathroom-demolition", "barn-removal", "shed-removal"],
    photoNeeded: "Interior demolition in progress"
  },
  {
    slug: "bathroom-demolition",
    title: "Bathroom Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["bathroom demolition Omaha", "bathroom tear out", "bathroom remodel demo"],
    metaDescription: "Bathroom demolition services in Omaha. A1 Junk Removal handles tear-outs and debris removal for your remodel. Call (402) 612-2373.",
    h1: "Bathroom Demolition in Omaha",
    shortDescription: "Bathroom remodel? We handle the tear-out and debris removal.",
    description: "Remodeling your bathroom? We'll handle the demolition — tearing out the old tub, toilet, vanity, tile, and drywall. Then we haul all the debris away so your contractor can start fresh.",
    relatedSlugs: ["demolition-contractor", "bathtub-removal", "drywall-removal", "remodeling-debris-removal"],
    photoNeeded: "Bathroom being demolished for remodel"
  },
  {
    slug: "drywall-removal",
    title: "Drywall Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["drywall removal Omaha", "drywall disposal", "drywall demolition"],
    metaDescription: "Drywall removal and disposal in Omaha. A1 Junk Removal handles demo and hauling. Call (402) 612-2373.",
    h1: "Drywall Removal in Omaha",
    shortDescription: "Drywall demolition and disposal for remodels and renovations.",
    description: "Drywall creates a huge mess when it comes down. We'll tear it out, bag it up, and haul it away. Whether it's a single wall or a whole floor, we handle the dusty work so you don't have to.",
    relatedSlugs: ["bathroom-demolition", "remodeling-debris-removal", "construction-debris-removal"],
    photoNeeded: "Removing drywall during renovation"
  },
  {
    slug: "remodeling-debris-removal",
    title: "Remodeling Debris Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["remodeling debris removal Omaha", "renovation cleanup", "remodel junk removal"],
    metaDescription: "Remodeling debris removal in Omaha. A1 Junk Removal cleans up after your renovation. Call (402) 612-2373.",
    h1: "Remodeling Debris Removal in Omaha",
    shortDescription: "We clean up the mess your remodel leaves behind.",
    description: "Renovations are exciting until you're staring at a mountain of old cabinets, tile, drywall, and fixtures. We come in after the demo and haul everything away so the real work can begin.",
    relatedSlugs: ["construction-debris-removal", "bathroom-demolition", "drywall-removal"],
    photoNeeded: "Pile of remodeling debris"
  },
  {
    slug: "barn-removal",
    title: "Barn Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["barn removal Omaha", "barn demolition", "old barn tear down"],
    metaDescription: "Barn removal and demolition in Omaha. A1 Junk Removal tears down old barns and hauls away debris. Call (402) 612-2373.",
    h1: "Barn Removal in Omaha",
    shortDescription: "Old barn needs to come down? We demolish and haul it away.",
    description: "Old barns can be a safety hazard and an eyesore. We'll tear it down carefully, salvage what we can, and haul away all the debris. We've handled barns of all sizes across the Omaha metro.",
    relatedSlugs: ["shed-removal", "demolition-contractor", "land-clearing"],
    photoNeeded: "Old barn being demolished"
  },
  {
    slug: "kitchen-demolition",
    title: "Kitchen Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["kitchen demolition Omaha", "kitchen tear out", "kitchen remodel demo"],
    metaDescription: "Kitchen demolition services in Omaha. A1 Junk Removal handles tear-outs and debris removal for your kitchen remodel. Call (402) 612-2373.",
    h1: "Kitchen Demolition in Omaha",
    shortDescription: "Kitchen remodel? We handle the tear-out and haul away the debris.",
    description: "Remodeling your kitchen? We'll rip out the old cabinets, countertops, backsplash, flooring, and appliances. Then we haul all the debris away so your contractor can start with a clean space. We're careful around plumbing and electrical so nothing gets damaged that shouldn't.",
    relatedSlugs: ["bathroom-demolition", "demolition-contractor", "remodeling-debris-removal", "appliance-removal"],
    photoNeeded: "Kitchen being demolished for remodel"
  },
  {
    slug: "garage-demolition",
    title: "Garage Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["garage demolition Omaha", "garage tear down", "old garage removal"],
    metaDescription: "Garage demolition in Omaha. A1 Junk Removal tears down old garages and hauls away all debris. Call (402) 612-2373.",
    h1: "Garage Demolition in Omaha",
    shortDescription: "Old garage needs to come down? We demolish and haul it away.",
    description: "Whether it's a detached garage that's falling apart or you need to clear the space for a new build, we handle the full demolition. We tear it down, load up the debris, and leave you with a clean lot. Concrete slab removal available too.",
    relatedSlugs: ["demolition-contractor", "barn-removal", "shed-removal", "concrete-removal"],
    photoNeeded: "Demolishing an old garage"
  },
  {
    slug: "pool-demolition",
    title: "Pool Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["pool demolition Omaha", "pool removal", "swimming pool tear out"],
    metaDescription: "Pool demolition and removal in Omaha. A1 Junk Removal handles in-ground and above-ground pool removal. Call (402) 612-2373.",
    h1: "Pool Demolition in Omaha",
    shortDescription: "In-ground or above-ground pool removal and fill-in.",
    description: "Tired of maintaining that old pool? We handle both in-ground and above-ground pool demolition. We break up the concrete, remove the liner and equipment, fill in the hole, and haul away all the debris. Your backyard gets a fresh start.",
    relatedSlugs: ["hot-tub-removal", "demolition-contractor", "concrete-removal"],
    photoNeeded: "Pool being demolished and filled in"
  },
  {
    slug: "driveway-removal",
    title: "Driveway Removal Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["driveway removal Omaha", "driveway demolition", "concrete driveway removal"],
    metaDescription: "Driveway removal in Omaha. A1 Junk Removal breaks up and hauls away old concrete and asphalt driveways. Call (402) 612-2373.",
    h1: "Driveway Removal in Omaha",
    shortDescription: "We break up and haul away old driveways.",
    description: "Cracked, heaving, or just ugly — when your driveway needs to go, we handle the full job. We break up the concrete or asphalt, load it into our trucks, and haul it away. We leave you with a clean, level surface ready for a new pour.",
    relatedSlugs: ["concrete-removal", "concrete-patio-removal", "demolition-contractor"],
    photoNeeded: "Breaking up an old concrete driveway"
  },
  {
    slug: "interior-demolition",
    title: "Interior Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["interior demolition Omaha", "interior demo service", "gut renovation demo"],
    metaDescription: "Interior demolition in Omaha. A1 Junk Removal guts interiors for renovations and hauls away all debris. Call (402) 612-2373.",
    h1: "Interior Demolition in Omaha",
    shortDescription: "Full interior gut-outs for renovations and remodels.",
    description: "Planning a major renovation? We handle the interior demolition — tearing out walls, ceilings, flooring, cabinets, fixtures, and everything else that needs to go. We work carefully around structural elements and utilities, and we haul away every bit of debris.",
    relatedSlugs: ["demolition-contractor", "bathroom-demolition", "kitchen-demolition", "drywall-removal"],
    photoNeeded: "Interior of a building being gutted"
  },
  {
    slug: "small-structure-demolition",
    title: "Small Structure Demolition Omaha | A1 Junk Removal",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["small structure demolition Omaha", "outbuilding removal", "structure tear down"],
    metaDescription: "Small structure demolition in Omaha. A1 Junk Removal tears down sheds, carports, gazebos, and more. Call (402) 612-2373.",
    h1: "Small Structure Demolition in Omaha",
    shortDescription: "Sheds, carports, gazebos, and other small structures torn down and hauled away.",
    description: "Got an old carport, storage building, playhouse, or other small structure that needs to go? We tear it down and haul away every piece. No structure is too awkward or too old for our crew to handle.",
    relatedSlugs: ["shed-removal", "gazebo-removal", "barn-removal", "deck-removal"],
    photoNeeded: "Tearing down a small outbuilding"
  },
];

const specializedItems: ServiceItem[] = [
  {
    slug: "appliance-removal",
    title: "Appliance Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["appliance removal Omaha", "old appliance pickup", "appliance disposal"],
    metaDescription: "Appliance removal in Omaha. A1 Junk Removal picks up and disposes of refrigerators, washers, dryers, and more. Call (402) 612-2373.",
    h1: "Appliance Removal in Omaha",
    shortDescription: "We pick up and dispose of old appliances — fridges, washers, dryers, and more.",
    description: "Got an old fridge in the garage or a washer that finally gave out? We'll come pick it up, disconnect it if needed, and haul it away. We handle refrigerators, washers, dryers, dishwashers, stoves, and any other appliance you need gone.",
    relatedSlugs: ["hvac-removal", "air-conditioner-disposal", "furniture-removal"],
    photoNeeded: "Hauling old refrigerator out of a home"
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["furniture removal Omaha", "old furniture pickup", "couch removal"],
    metaDescription: "Furniture removal in Omaha. A1 Junk Removal hauls away couches, beds, tables, and more. Call (402) 612-2373 for a free estimate.",
    h1: "Furniture Removal in Omaha",
    shortDescription: "Old furniture? We'll haul it out — couches, beds, tables, anything.",
    description: "That old couch isn't going to carry itself out. Whether it's a single piece or a houseful of furniture, we do the heavy lifting. We'll navigate tight hallways, stairs, and doorways to get it out without damaging your home.",
    relatedSlugs: ["sectional-couch-removal", "sleeper-sofa-removal", "hide-a-bed-removal"],
    photoNeeded: "Carrying old couch out of a house"
  },
  {
    slug: "hot-tub-removal",
    title: "Hot Tub Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["hot tub removal Omaha", "spa removal", "jacuzzi removal service"],
    metaDescription: "Hot tub and jacuzzi removal in Omaha. A1 Junk Removal dismantles and hauls away hot tubs. Call (402) 612-2373.",
    h1: "Hot Tub Removal in Omaha",
    shortDescription: "We dismantle and haul away hot tubs and jacuzzis.",
    description: "Hot tubs are great until they're not. When it's time for the old one to go, we'll disconnect it, break it down, and haul it away. In-ground, above-ground, doesn't matter. We've removed hundreds of them.",
    relatedSlugs: ["spa-removal", "jacuzzi-removal", "pool-table-removal"],
    photoNeeded: "Dismantling and removing a hot tub"
  },
  {
    slug: "piano-removal",
    title: "Piano Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["piano removal Omaha", "piano hauling", "old piano disposal"],
    metaDescription: "Piano removal in Omaha. A1 Junk Removal safely removes and hauls away old pianos. Call (402) 612-2373.",
    h1: "Piano Removal in Omaha",
    shortDescription: "We safely remove and haul away old pianos.",
    description: "Pianos are beautiful instruments, but when they stop working or you just don't have room anymore, they're incredibly heavy and awkward to move. We have the experience and equipment to get them out safely without damaging your floors or walls.",
    relatedSlugs: ["organ-removal", "furniture-removal", "gym-equipment-removal"],
    photoNeeded: "Moving a piano out of a home"
  },
  {
    slug: "carpet-removal",
    title: "Carpet Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["carpet removal Omaha", "old carpet disposal", "carpet tear out"],
    metaDescription: "Carpet removal and disposal in Omaha. A1 Junk Removal tears out and hauls away old carpet. Call (402) 612-2373.",
    h1: "Carpet Removal in Omaha",
    shortDescription: "We tear out old carpet and haul it away.",
    description: "Old carpet is heavy, dusty, and a pain to deal with. We'll rip it up, roll it out, and haul it away. Padding and tack strips too. Ready for your new flooring to go in.",
    relatedSlugs: ["remodeling-debris-removal", "bathroom-demolition", "drywall-removal"],
    photoNeeded: "Tearing out old carpet"
  },
  {
    slug: "bathtub-removal",
    title: "Bathtub Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["bathtub removal Omaha", "old tub removal", "bathtub disposal"],
    metaDescription: "Bathtub removal in Omaha. A1 Junk Removal disconnects and hauls away old bathtubs. Call (402) 612-2373.",
    h1: "Bathtub Removal in Omaha",
    shortDescription: "Old bathtub needs to go? We remove and haul it away.",
    description: "Whether it's cast iron, fiberglass, or acrylic, we'll get that old tub out of your bathroom and into our truck. We work carefully to avoid damaging your home during removal.",
    relatedSlugs: ["bathroom-demolition", "appliance-removal", "remodeling-debris-removal"],
    photoNeeded: "Removing an old bathtub"
  },
  {
    slug: "basketball-hoop-removal",
    title: "Basketball Hoop Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["basketball hoop removal Omaha", "basketball goal removal", "in-ground hoop removal"],
    metaDescription: "Basketball hoop and goal removal in Omaha. A1 Junk Removal handles in-ground and portable hoops. Call (402) 612-2373.",
    h1: "Basketball Hoop Removal in Omaha",
    shortDescription: "In-ground or portable — we remove basketball hoops and goals.",
    description: "Kids grew up and nobody uses the hoop anymore? We'll take it down — even in-ground poles set in concrete. We dig them out, break down the backboard, and haul everything away.",
    relatedSlugs: ["swing-set-removal", "trampoline-removal", "gym-equipment-removal"],
    photoNeeded: "Removing a basketball hoop from driveway"
  },
  {
    slug: "gym-equipment-removal",
    title: "Gym Equipment Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["gym equipment removal Omaha", "treadmill removal", "exercise equipment disposal"],
    metaDescription: "Gym equipment removal in Omaha. A1 Junk Removal hauls away treadmills, weight machines, and more. Call (402) 612-2373.",
    h1: "Gym Equipment Removal in Omaha",
    shortDescription: "Treadmills, weight machines, ellipticals — we haul them all.",
    description: "That home gym that turned into a clothes rack? We'll disassemble it and haul it out. Treadmills, ellipticals, weight benches, Bowflex machines — we've moved them all.",
    relatedSlugs: ["treadmill-removal", "furniture-removal", "basement-cleanout"],
    photoNeeded: "Removing exercise equipment from basement"
  },
  {
    slug: "treadmill-removal",
    title: "Treadmill Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["treadmill removal Omaha", "treadmill disposal", "treadmill hauling"],
    metaDescription: "Treadmill removal in Omaha. A1 Junk Removal picks up and hauls away old treadmills. Call (402) 612-2373.",
    h1: "Treadmill Removal in Omaha",
    shortDescription: "We pick up and haul away old treadmills.",
    description: "Treadmills are heavy and awkward. Getting one down stairs or through a doorway is no joke. We do this all the time — we'll get it out of your house and into our truck without any damage.",
    relatedSlugs: ["gym-equipment-removal", "furniture-removal", "appliance-removal"],
    photoNeeded: "Moving a treadmill out of a home"
  },
  {
    slug: "pool-table-removal",
    title: "Pool Table Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["pool table removal Omaha", "billiard table removal", "pool table disposal"],
    metaDescription: "Pool table removal in Omaha. A1 Junk Removal disassembles and hauls away old pool tables. Call (402) 612-2373.",
    h1: "Pool Table Removal in Omaha",
    shortDescription: "We disassemble and haul away old pool tables.",
    description: "Pool tables are incredibly heavy — the slate alone can weigh hundreds of pounds. We'll carefully disassemble it and haul all the pieces away. No need to worry about getting it through doorways yourself.",
    relatedSlugs: ["piano-removal", "furniture-removal", "basement-cleanout"],
    photoNeeded: "Disassembling a pool table"
  },
  {
    slug: "swing-set-removal",
    title: "Swing Set & Play Set Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["swing set removal Omaha", "play set removal", "playground equipment removal"],
    metaDescription: "Swing set and play set removal in Omaha. A1 Junk Removal tears down and hauls away old playground equipment. Call (402) 612-2373.",
    h1: "Swing Set & Play Set Removal in Omaha",
    shortDescription: "Kids outgrew it? We tear down and haul away swing sets and play sets.",
    description: "Those backyard swing sets and play structures don't last forever. When the kids have outgrown it and it's falling apart, we'll tear it down and haul it all away. Bolts, wood, metal — everything goes.",
    relatedSlugs: ["trampoline-removal", "basketball-hoop-removal", "backyard-cleanup"],
    photoNeeded: "Tearing down an old swing set"
  },
  {
    slug: "trampoline-removal",
    title: "Trampoline Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["trampoline removal Omaha", "old trampoline disposal", "trampoline hauling"],
    metaDescription: "Trampoline removal in Omaha. A1 Junk Removal disassembles and hauls away old trampolines. Call (402) 612-2373.",
    h1: "Trampoline Removal in Omaha",
    shortDescription: "We disassemble and haul away old trampolines.",
    description: "Old trampolines with torn mats and rusty springs are an eyesore and a safety hazard. We'll take it apart and haul it off. Quick and easy.",
    relatedSlugs: ["swing-set-removal", "basketball-hoop-removal", "backyard-cleanup"],
    photoNeeded: "Disassembling an old trampoline"
  },
  {
    slug: "hvac-removal",
    title: "HVAC Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["HVAC removal Omaha", "old furnace removal", "AC unit disposal"],
    metaDescription: "HVAC removal in Omaha. A1 Junk Removal hauls away old furnaces, AC units, and HVAC equipment. Call (402) 612-2373.",
    h1: "HVAC Removal in Omaha",
    shortDescription: "Old furnaces, AC units, and HVAC equipment hauled away.",
    description: "When you upgrade your HVAC system, someone has to deal with the old one. We'll haul away old furnaces, air conditioning units, ductwork, and any other HVAC equipment that needs to go.",
    relatedSlugs: ["air-conditioner-disposal", "appliance-removal", "scrap-metal-removal"],
    photoNeeded: "Removing old HVAC equipment"
  },
  {
    slug: "air-conditioner-disposal",
    title: "Air Conditioner Disposal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["air conditioner disposal Omaha", "AC removal", "window unit disposal"],
    metaDescription: "Air conditioner disposal in Omaha. A1 Junk Removal properly disposes of old AC units. Call (402) 612-2373.",
    h1: "Air Conditioner Disposal in Omaha",
    shortDescription: "Proper disposal of old air conditioning units.",
    description: "AC units contain refrigerants that need to be handled properly. We make sure old air conditioners are disposed of in compliance with environmental regulations. Window units, central air, mini-splits — we handle them all.",
    relatedSlugs: ["hvac-removal", "appliance-removal", "scrap-metal-removal"],
    photoNeeded: "Removing an old AC unit"
  },
  {
    slug: "scrap-metal-removal",
    title: "Scrap Metal Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["scrap metal removal Omaha", "metal hauling", "scrap metal pickup"],
    metaDescription: "Scrap metal removal and hauling in Omaha. A1 Junk Removal picks up and recycles scrap metal. Call (402) 612-2373.",
    h1: "Scrap Metal Removal in Omaha",
    shortDescription: "We pick up and recycle scrap metal of all kinds.",
    description: "Got a pile of scrap metal in the yard or garage? Old fencing, car parts, appliances, pipes — we'll load it up and take it to the recycler. Metal recycling is one of the easiest ways to keep stuff out of the landfill.",
    relatedSlugs: ["appliance-removal", "old-fencing-removal", "hvac-removal"],
    photoNeeded: "Loading scrap metal into truck"
  },
  {
    slug: "sectional-couch-removal",
    title: "Sectional Couch Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["sectional couch removal Omaha", "sectional sofa disposal", "large couch removal"],
    metaDescription: "Sectional couch removal in Omaha. A1 Junk Removal hauls away large sectional sofas. Call (402) 612-2373.",
    h1: "Sectional Couch Removal in Omaha",
    shortDescription: "Big sectional that won't fit through the door? We've got it.",
    description: "Sectional couches are great until you try to move them. We know how to break them down, navigate tight spaces, and get them out without scratching your walls or floors.",
    relatedSlugs: ["sleeper-sofa-removal", "hide-a-bed-removal", "furniture-removal"],
    photoNeeded: "Moving a large sectional couch"
  },
  {
    slug: "sleeper-sofa-removal",
    title: "Sleeper Sofa Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["sleeper sofa removal Omaha", "pull out couch removal", "sofa bed disposal"],
    metaDescription: "Sleeper sofa removal in Omaha. A1 Junk Removal hauls away heavy pull-out couches. Call (402) 612-2373.",
    h1: "Sleeper Sofa Removal in Omaha",
    shortDescription: "Heavy sleeper sofas hauled away — we do the lifting.",
    description: "Sleeper sofas are deceptively heavy because of the metal frame inside. Don't throw your back out trying to move one. Call us and we'll get it out of there.",
    relatedSlugs: ["sectional-couch-removal", "hide-a-bed-removal", "furniture-removal"],
    photoNeeded: "Hauling a sleeper sofa"
  },
  {
    slug: "hide-a-bed-removal",
    title: "Hide-a-Bed Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["hide a bed removal Omaha", "hide-a-bed disposal", "sofa bed removal"],
    metaDescription: "Hide-a-bed removal in Omaha. A1 Junk Removal hauls away old hide-a-beds and sofa beds. Call (402) 612-2373.",
    h1: "Hide-a-Bed Removal in Omaha",
    shortDescription: "Old hide-a-bed? We'll haul it out for you.",
    description: "Hide-a-beds are some of the heaviest pieces of furniture in a home. The metal bed frame inside makes them incredibly awkward to move. We handle these all the time — we'll get it out safely.",
    relatedSlugs: ["sleeper-sofa-removal", "sectional-couch-removal", "furniture-removal"],
    photoNeeded: "Removing a hide-a-bed"
  },
  {
    slug: "spa-removal",
    title: "Spa Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["spa removal Omaha", "spa disposal", "spa hauling"],
    metaDescription: "Spa removal in Omaha. A1 Junk Removal dismantles and hauls away old spas. Call (402) 612-2373.",
    h1: "Spa Removal in Omaha",
    shortDescription: "We dismantle and haul away old spas.",
    description: "Spas and hot tubs take up a lot of space and are a pain to get rid of on your own. We'll cut it apart if needed, load it up, and haul it away. Your backyard will look a lot bigger without it.",
    relatedSlugs: ["hot-tub-removal", "jacuzzi-removal", "backyard-cleanup"],
    photoNeeded: "Removing an old spa"
  },
  {
    slug: "jacuzzi-removal",
    title: "Jacuzzi Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["jacuzzi removal Omaha", "jacuzzi disposal", "jacuzzi hauling"],
    metaDescription: "Jacuzzi removal in Omaha. A1 Junk Removal dismantles and hauls away old jacuzzis. Call (402) 612-2373.",
    h1: "Jacuzzi Removal in Omaha",
    shortDescription: "Old jacuzzi? We dismantle and haul it away.",
    description: "Whether it's an indoor jacuzzi tub or an outdoor unit, we'll get it out. We disconnect, dismantle, and haul away jacuzzis of all sizes.",
    relatedSlugs: ["hot-tub-removal", "spa-removal", "bathtub-removal"],
    photoNeeded: "Dismantling a jacuzzi"
  },
  {
    slug: "organ-removal",
    title: "Organ Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["organ removal Omaha", "old organ disposal", "organ hauling"],
    metaDescription: "Organ removal in Omaha. A1 Junk Removal hauls away old organs and large musical instruments. Call (402) 612-2373.",
    h1: "Organ Removal in Omaha",
    shortDescription: "Old organ taking up space? We'll haul it away.",
    description: "Organs are big, heavy, and awkward. When nobody wants the old church organ or the one grandma left behind, we'll come get it. We handle these carefully to avoid damage to your home.",
    relatedSlugs: ["piano-removal", "furniture-removal", "residential-junk-removal"],
    photoNeeded: "Removing an old organ"
  },
  {
    slug: "projection-tv-removal",
    title: "Projection TV Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["projection TV removal Omaha", "old TV disposal", "big screen TV removal"],
    metaDescription: "Projection TV removal in Omaha. A1 Junk Removal hauls away old big-screen and projection TVs. Call (402) 612-2373.",
    h1: "Projection TV Removal in Omaha",
    shortDescription: "Those old big-screen TVs are heavy — we'll haul them out.",
    description: "Remember those massive projection TVs from the 2000s? They weigh a ton and nobody wants them. We'll wrestle it out of your house and dispose of it properly. Electronics recycling included.",
    relatedSlugs: ["appliance-removal", "furniture-removal", "residential-junk-removal"],
    photoNeeded: "Removing an old projection TV"
  },
  {
    slug: "gazebo-removal",
    title: "Gazebo Removal Omaha | A1 Junk Removal",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["gazebo removal Omaha", "gazebo demolition", "old gazebo tear down"],
    metaDescription: "Gazebo removal in Omaha. A1 Junk Removal tears down and hauls away old gazebos. Call (402) 612-2373.",
    h1: "Gazebo Removal in Omaha",
    shortDescription: "Old gazebo falling apart? We tear it down and haul it away.",
    description: "When that backyard gazebo has seen better days, we'll take it down and haul away every piece. Wood, metal, roofing — all of it goes in our truck.",
    relatedSlugs: ["deck-removal", "shed-removal", "backyard-cleanup"],
    photoNeeded: "Tearing down an old gazebo"
  },
];

const yardOutdoor: ServiceItem[] = [
  {
    slug: "yard-waste-removal",
    title: "Yard Waste Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["yard waste removal Omaha", "yard debris cleanup", "yard waste hauling"],
    metaDescription: "Yard waste removal in Omaha. A1 Junk Removal hauls away branches, leaves, brush, and yard debris. Call (402) 612-2373.",
    h1: "Yard Waste Removal in Omaha",
    shortDescription: "Branches, leaves, brush — we haul away all yard waste.",
    description: "After a big storm or a weekend of yard work, you can end up with more debris than you know what to do with. We'll come pick it all up — branches, leaves, brush, grass clippings, whatever your yard throws at you.",
    relatedSlugs: ["brush-yard-waste", "storm-debris-removal", "backyard-cleanup", "landscape-waste-removal"],
    photoNeeded: "Truck loaded with yard waste and branches"
  },
  {
    slug: "backyard-cleanup",
    title: "Backyard Cleanup Services Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["backyard cleanup Omaha", "yard cleanup service", "backyard junk removal"],
    metaDescription: "Backyard cleanup services in Omaha. A1 Junk Removal clears out junk, debris, and overgrowth. Call (402) 612-2373.",
    h1: "Backyard Cleanup Services in Omaha",
    shortDescription: "We clear out the junk, debris, and mess from your backyard.",
    description: "Backyards can get out of hand — old furniture, broken play equipment, piles of branches, random junk. We'll come through and clear it all out so you can actually enjoy your outdoor space again.",
    relatedSlugs: ["yard-waste-removal", "swing-set-removal", "trampoline-removal", "old-fencing-removal"],
    photoNeeded: "Messy backyard being cleaned up"
  },
  {
    slug: "brush-yard-waste",
    title: "Brush & Yard Waste Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["brush removal Omaha", "brush hauling", "yard waste pickup"],
    metaDescription: "Brush and yard waste removal in Omaha. A1 Junk Removal hauls away brush piles and yard debris. Call (402) 612-2373.",
    h1: "Brush & Yard Waste Removal in Omaha",
    shortDescription: "Brush piles and yard debris hauled away fast.",
    description: "Got a pile of brush from trimming or a storm? We'll load it up and haul it off. No need to bag it or bundle it — just leave it in a pile and we'll take care of the rest.",
    relatedSlugs: ["yard-waste-removal", "tree-branch-removal", "storm-debris-removal"],
    photoNeeded: "Loading brush pile into truck"
  },
  {
    slug: "landscape-waste-removal",
    title: "Landscape Waste Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["landscape waste removal Omaha", "landscaping debris", "landscape cleanup"],
    metaDescription: "Landscape waste removal in Omaha. A1 Junk Removal hauls away landscaping debris and old materials. Call (402) 612-2373.",
    h1: "Landscape Waste Removal in Omaha",
    shortDescription: "Landscaping debris and old materials hauled away.",
    description: "Landscaping projects create a lot of waste — old mulch, sod, rocks, pavers, soil, and plant material. We haul it all away so your new landscape can shine.",
    relatedSlugs: ["yard-waste-removal", "backyard-cleanup", "concrete-patio-removal"],
    photoNeeded: "Pile of landscaping debris"
  },
  {
    slug: "log-removal",
    title: "Log Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["log removal Omaha", "log hauling", "fallen tree log removal"],
    metaDescription: "Log removal in Omaha. A1 Junk Removal hauls away logs and large wood debris. Call (402) 612-2373.",
    h1: "Log Removal in Omaha",
    shortDescription: "Logs and large wood debris hauled away.",
    description: "After a tree comes down, you're often left with logs that are too big and heavy to deal with on your own. We'll load them up and haul them off. No need to rent a chainsaw or a trailer.",
    relatedSlugs: ["tree-removal", "tree-branch-removal", "storm-debris-removal"],
    photoNeeded: "Loading large logs into truck"
  },
  {
    slug: "old-fencing-removal",
    title: "Old Fencing Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["fence removal Omaha", "old fence disposal", "fence tear down"],
    metaDescription: "Old fencing removal in Omaha. A1 Junk Removal tears down and hauls away old fences. Call (402) 612-2373.",
    h1: "Old Fencing Removal in Omaha",
    shortDescription: "We tear down old fences and haul away every piece.",
    description: "Old fences that are leaning, rotting, or just ugly — we'll pull them out, posts and all, and haul everything away. Wood, chain link, vinyl — we handle all types of fencing.",
    relatedSlugs: ["backyard-cleanup", "deck-removal", "scrap-metal-removal"],
    photoNeeded: "Tearing down an old fence"
  },
  {
    slug: "shed-removal",
    title: "Shed Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["shed removal Omaha", "shed demolition", "old shed tear down"],
    metaDescription: "Shed removal and demolition in Omaha. A1 Junk Removal tears down and hauls away old sheds. Call (402) 612-2373.",
    h1: "Shed Removal in Omaha",
    shortDescription: "Old shed needs to go? We demolish and haul it away.",
    description: "That old shed in the backyard that's falling apart? We'll tear it down and haul away every piece — wood, metal, roofing, foundation. Your yard will look a lot better without it.",
    relatedSlugs: ["barn-removal", "deck-removal", "gazebo-removal"],
    photoNeeded: "Demolishing an old shed"
  },
  {
    slug: "storm-debris-removal",
    title: "Storm Debris Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["storm debris removal Omaha", "storm cleanup", "storm damage cleanup"],
    metaDescription: "Storm debris removal in Omaha. A1 Junk Removal provides fast cleanup after severe weather. Call (402) 612-2373.",
    h1: "Storm Debris Removal in Omaha",
    shortDescription: "Fast storm cleanup — we clear debris after severe weather.",
    description: "Omaha storms can leave a real mess — downed branches, fallen trees, scattered debris. We respond fast to help you get your property cleaned up. We work with insurance companies too if needed.",
    relatedSlugs: ["emergency-tree-service", "tree-branch-removal", "yard-waste-removal"],
    photoNeeded: "Cleaning up storm debris in a yard"
  },
  {
    slug: "tree-branch-removal",
    title: "Tree Branch Removal Omaha | A1 Junk Removal",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["tree branch removal Omaha", "branch hauling", "fallen branch cleanup"],
    metaDescription: "Tree branch removal in Omaha. A1 Junk Removal hauls away fallen and trimmed branches. Call (402) 612-2373.",
    h1: "Tree Branch Removal in Omaha",
    shortDescription: "Fallen or trimmed branches hauled away fast.",
    description: "Whether branches came down in a storm or you just finished trimming, we'll come pick them up and haul them off. No need to cut them into small pieces or bundle them — just leave them and we'll handle it.",
    relatedSlugs: ["brush-yard-waste", "storm-debris-removal", "yard-waste-removal"],
    photoNeeded: "Loading tree branches into truck"
  },
];

const commercial: ServiceItem[] = [
  {
    slug: "commercial-waste-management",
    title: "Commercial Waste Management Omaha | A1 Junk Removal",
    category: "Commercial Services",
    categorySlug: "commercial",
    keywords: ["commercial waste management Omaha", "business junk removal", "office cleanout"],
    metaDescription: "Commercial waste management in Omaha. A1 Junk Removal handles office cleanouts, warehouse clearing, and business junk removal. Call (402) 612-2373.",
    h1: "Commercial Waste Management in Omaha",
    shortDescription: "Business junk removal, office cleanouts, and commercial waste services.",
    description: "We work with businesses across Omaha — offices, warehouses, retail stores, restaurants. Whether you need a one-time cleanout or regular waste removal, we've got you covered. We work around your schedule to minimize disruption.",
    relatedSlugs: ["property-cleanouts", "construction-debris-removal", "waste-management-services"],
    photoNeeded: "Commercial cleanout of an office space"
  },
];

// ─── LANDSCAPING SERVICES ───

const landscaping: ServiceItem[] = [
  {
    slug: "lawn-care-mowing",
    title: "Lawn Care & Mowing Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["lawn care Omaha", "lawn mowing service Omaha", "grass cutting Omaha"],
    metaDescription: "Lawn care and mowing services in Omaha. A1 Junk Removal and Tree Service keeps your lawn looking sharp. Call (402) 612-2373.",
    h1: "Lawn Care & Mowing in Omaha",
    shortDescription: "Regular lawn mowing and maintenance to keep your yard looking great.",
    description: "A well-maintained lawn makes your whole property look better. We offer regular mowing, edging, and trimming services for residential and commercial properties across Omaha. Whether you need weekly service or a one-time cleanup, we've got you covered.",
    relatedSlugs: ["lawn-maintenance", "leaf-removal", "seasonal-cleanup", "weed-control"],
    photoNeeded: "Freshly mowed residential lawn"
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["lawn maintenance Omaha", "lawn service Omaha NE", "yard maintenance"],
    metaDescription: "Full lawn maintenance in Omaha. A1 handles mowing, edging, fertilizing, and more. Call (402) 612-2373 for a free estimate.",
    h1: "Lawn Maintenance in Omaha",
    shortDescription: "Complete lawn maintenance — mowing, edging, fertilizing, and more.",
    description: "Keeping a lawn healthy takes more than just mowing. We handle the full picture — regular mowing, edging, fertilizing, aeration, and seasonal treatments. Your neighbors will wonder what your secret is.",
    relatedSlugs: ["lawn-care-mowing", "weed-control", "seasonal-cleanup", "mulching"],
    photoNeeded: "Well-maintained green lawn with edging"
  },
  {
    slug: "mulching",
    title: "Mulching Services Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["mulching Omaha", "mulch installation", "mulch delivery Omaha"],
    metaDescription: "Mulching services in Omaha. A1 delivers and installs fresh mulch for your garden beds. Call (402) 612-2373.",
    h1: "Mulching Services in Omaha",
    shortDescription: "Fresh mulch delivered and installed for your garden beds.",
    description: "Mulch does more than look good — it retains moisture, suppresses weeds, and protects your plants. We deliver and spread mulch across your garden beds, around trees, and along walkways. We also remove old mulch if needed.",
    relatedSlugs: ["flower-bed-maintenance", "brush-chipping", "landscape-waste-removal"],
    photoNeeded: "Fresh mulch being spread in garden beds"
  },
  {
    slug: "sod-installation",
    title: "Sod Installation Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["sod installation Omaha", "new sod laying", "sod replacement Omaha"],
    metaDescription: "Sod installation in Omaha. A1 Junk Removal and Tree Service installs fresh sod for a green lawn fast. Call (402) 612-2373.",
    h1: "Sod Installation in Omaha",
    shortDescription: "New sod installed for an instant green lawn.",
    description: "Want a green lawn without waiting months for seed to grow? We install fresh sod that gives you an instant, beautiful lawn. We prep the soil, lay the sod, and make sure it's watered and ready to root.",
    relatedSlugs: ["lawn-care-mowing", "grading-leveling", "yard-cleanup-landscaping"],
    photoNeeded: "Laying fresh sod on a prepared lawn"
  },
  {
    slug: "leaf-removal",
    title: "Leaf Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["leaf removal Omaha", "fall leaf cleanup", "leaf hauling Omaha"],
    metaDescription: "Leaf removal services in Omaha. A1 clears and hauls away fall leaves from your property. Call (402) 612-2373.",
    h1: "Leaf Removal in Omaha",
    shortDescription: "Fall leaf cleanup and hauling for residential properties.",
    description: "Omaha falls are beautiful, but the leaves pile up fast. We rake, blow, bag, and haul away leaves from your yard, gutters, and flower beds. Don't spend your weekends raking — let us handle it.",
    relatedSlugs: ["seasonal-cleanup", "yard-waste-removal", "gutter-cleaning"],
    photoNeeded: "Raking and bagging fall leaves"
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal Yard Cleanup Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["seasonal cleanup Omaha", "spring cleanup Omaha", "fall yard cleanup"],
    metaDescription: "Seasonal yard cleanup in Omaha. A1 handles spring and fall cleanups to keep your property looking great. Call (402) 612-2373.",
    h1: "Seasonal Yard Cleanup in Omaha",
    shortDescription: "Spring and fall cleanups to keep your property in top shape.",
    description: "Every spring and fall, your yard needs a thorough cleanup. We handle it all — clearing dead plants, raking leaves, trimming back overgrowth, cleaning out beds, and hauling away all the debris. Start each season with a clean slate.",
    relatedSlugs: ["leaf-removal", "backyard-cleanup", "yard-waste-removal", "flower-bed-maintenance"],
    photoNeeded: "Spring yard cleanup in progress"
  },
  {
    slug: "weed-control",
    title: "Weed Control Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["weed control Omaha", "weed removal service", "weed treatment Omaha"],
    metaDescription: "Weed control services in Omaha. A1 keeps your lawn and beds weed-free. Call (402) 612-2373.",
    h1: "Weed Control in Omaha",
    shortDescription: "Keep your lawn and garden beds weed-free.",
    description: "Weeds are relentless, but so are we. We provide weed control treatments for lawns, garden beds, driveways, and walkways. Whether it's dandelions taking over your lawn or weeds choking your flower beds, we'll get them under control.",
    relatedSlugs: ["lawn-maintenance", "flower-bed-maintenance", "mulching"],
    photoNeeded: "Treating weeds in a lawn"
  },
  {
    slug: "grading-leveling",
    title: "Yard Grading & Leveling Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["yard grading Omaha", "yard leveling", "lawn grading service"],
    metaDescription: "Yard grading and leveling in Omaha. A1 fixes drainage issues and levels your yard. Call (402) 612-2373.",
    h1: "Yard Grading & Leveling in Omaha",
    shortDescription: "Fix drainage issues and level your yard for a better lawn.",
    description: "Uneven yards cause drainage problems, standing water, and make mowing a pain. We grade and level your yard to fix these issues. Whether you need to redirect water away from your foundation or just want a flat, even lawn, we've got the equipment to do it right.",
    relatedSlugs: ["sod-installation", "land-clearing", "landscape-waste-removal"],
    photoNeeded: "Grading equipment leveling a yard"
  },
  {
    slug: "flower-bed-maintenance",
    title: "Flower Bed Maintenance Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["flower bed maintenance Omaha", "garden bed cleanup", "flower bed weeding"],
    metaDescription: "Flower bed maintenance in Omaha. A1 keeps your garden beds clean, mulched, and weed-free. Call (402) 612-2373.",
    h1: "Flower Bed Maintenance in Omaha",
    shortDescription: "Keep your garden beds clean, mulched, and looking beautiful.",
    description: "Flower beds need regular attention — weeding, mulching, edging, and seasonal planting. We keep your beds looking sharp so your landscaping investment pays off. We also remove old plants and refresh beds with new mulch.",
    relatedSlugs: ["mulching", "weed-control", "seasonal-cleanup"],
    photoNeeded: "Well-maintained flower bed with fresh mulch"
  },
  {
    slug: "yard-cleanup-landscaping",
    title: "Yard Cleanup & Landscaping Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["yard cleanup Omaha", "landscaping cleanup", "property cleanup service"],
    metaDescription: "Yard cleanup and landscaping services in Omaha. A1 clears, cleans, and improves your outdoor space. Call (402) 612-2373.",
    h1: "Yard Cleanup & Landscaping in Omaha",
    shortDescription: "Complete yard cleanup and basic landscaping services.",
    description: "Whether your yard has been neglected for a while or you just need a fresh start, we handle the full cleanup — clearing overgrowth, removing debris, trimming, and basic landscaping to get your outdoor space back in shape.",
    relatedSlugs: ["backyard-cleanup", "seasonal-cleanup", "lawn-maintenance", "shrub-hedge-trimming"],
    photoNeeded: "Before and after yard cleanup"
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["gutter cleaning Omaha", "gutter cleanout", "clogged gutters Omaha"],
    metaDescription: "Gutter cleaning in Omaha. A1 clears clogged gutters and downspouts. Call (402) 612-2373.",
    h1: "Gutter Cleaning in Omaha",
    shortDescription: "Clogged gutters? We clean them out so water flows properly.",
    description: "Clogged gutters cause water damage, foundation issues, and ice dams. We clean out leaves, debris, and buildup from your gutters and downspouts so water flows where it should. Regular gutter cleaning saves you from expensive repairs down the road.",
    relatedSlugs: ["leaf-removal", "seasonal-cleanup", "pressure-washing"],
    photoNeeded: "Cleaning debris from a gutter"
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["pressure washing Omaha", "power washing service", "driveway pressure washing"],
    metaDescription: "Pressure washing in Omaha. A1 cleans driveways, sidewalks, decks, and siding. Call (402) 612-2373.",
    h1: "Pressure Washing in Omaha",
    shortDescription: "Driveways, sidewalks, decks, and siding — we blast away the grime.",
    description: "Over time, dirt, mold, mildew, and algae build up on your driveway, sidewalks, deck, and siding. Pressure washing brings them back to life. We use commercial-grade equipment to clean surfaces without damaging them.",
    relatedSlugs: ["gutter-cleaning", "deck-removal", "seasonal-cleanup"],
    photoNeeded: "Pressure washing a driveway"
  },
];

// ─── TREE SERVICE CATEGORIES ───

const treeServices: ServiceItem[] = [
  {
    slug: "tree-removal",
    title: "Tree Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["tree removal Omaha", "tree cutting service", "tree removal near me"],
    metaDescription: "Professional tree removal in Omaha. A1 Junk Removal and Tree Service safely removes trees of all sizes. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Tree Removal in Omaha",
    shortDescription: "Safe, efficient tree removal for residential and commercial properties.",
    description: "When a tree needs to come down — whether it's dead, diseased, storm-damaged, or just in the way — we handle it safely and efficiently. We've got the equipment, the experience, and the insurance to do it right. We also clean up and haul away all the debris, so your yard is left clean.",
    relatedSlugs: ["stump-grinding", "emergency-tree-service", "tree-trimming", "log-removal"],
    photoNeeded: "Professional tree removal in progress"
  },
  {
    slug: "tree-trimming",
    title: "Tree Trimming & Pruning Omaha | A1 Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["tree trimming Omaha", "tree pruning Omaha NE", "tree shaping service"],
    metaDescription: "Tree trimming and pruning in Omaha. A1 Tree Service keeps your trees healthy and looking great. Call (402) 612-2373.",
    h1: "Tree Trimming & Pruning in Omaha",
    shortDescription: "Keep your trees healthy and your property looking sharp.",
    description: "Regular trimming keeps your trees healthy, improves their appearance, and prevents branches from becoming hazards. We trim trees of all sizes — from ornamental trees to large oaks and maples. We know how to make the right cuts to promote healthy growth.",
    relatedSlugs: ["tree-removal", "shrub-hedge-trimming", "emergency-tree-service"],
    photoNeeded: "Arborist trimming a large tree"
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["stump grinding Omaha", "stump removal Omaha", "tree stump grinding"],
    metaDescription: "Stump grinding and removal in Omaha. A1 Junk Removal and Tree Service grinds stumps below grade. Call (402) 612-2373.",
    h1: "Stump Grinding in Omaha",
    shortDescription: "We grind stumps below grade so you can reclaim your yard.",
    description: "After a tree comes down, the stump is an eyesore and a tripping hazard. We grind it down below grade so you can plant grass, lay sod, or just have a flat yard again. We clean up the chips too.",
    relatedSlugs: ["tree-removal", "land-clearing", "yard-waste-removal"],
    photoNeeded: "Stump grinder in action"
  },
  {
    slug: "emergency-tree-service",
    title: "Emergency Tree Service Omaha | A1 Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["emergency tree service Omaha", "storm tree removal", "24/7 tree service"],
    metaDescription: "Emergency tree service in Omaha. A1 Tree Service responds fast to storm damage and fallen trees. Call (402) 612-2373.",
    h1: "Emergency Tree Service in Omaha",
    shortDescription: "Fast response for storm damage and fallen trees.",
    description: "When a tree falls on your house, blocks your driveway, or is leaning dangerously after a storm, you need help fast. We respond quickly to emergency situations to make your property safe. Call us anytime — storms don't wait and neither do we.",
    relatedSlugs: ["tree-removal", "storm-debris-removal", "tree-branch-removal"],
    photoNeeded: "Emergency tree removal after storm"
  },
  {
    slug: "land-clearing",
    title: "Land Clearing Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["land clearing Omaha", "lot clearing", "brush clearing service"],
    metaDescription: "Land clearing services in Omaha. A1 Junk Removal and Tree Service clears lots for construction and landscaping. Call (402) 612-2373.",
    h1: "Land Clearing in Omaha",
    shortDescription: "Clearing lots for construction, landscaping, or new development.",
    description: "Need a lot cleared for a new build, a garden, or just to open up your property? We remove trees, brush, stumps, and debris to give you a clean slate. We work on residential lots and larger commercial properties.",
    relatedSlugs: ["tree-removal", "stump-grinding", "brush-yard-waste"],
    photoNeeded: "Clearing a wooded lot"
  },
  {
    slug: "shrub-hedge-trimming",
    title: "Shrub & Hedge Trimming Omaha | A1 Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["shrub trimming Omaha", "hedge trimming service", "bush trimming Omaha"],
    metaDescription: "Shrub and hedge trimming in Omaha. A1 Tree Service keeps your bushes and hedges looking neat. Call (402) 612-2373.",
    h1: "Shrub & Hedge Trimming in Omaha",
    shortDescription: "Keep your shrubs and hedges looking neat and healthy.",
    description: "Overgrown shrubs and hedges make your whole property look neglected. We shape them up, trim them back, and keep them looking clean. Regular maintenance keeps them healthy and your curb appeal high.",
    relatedSlugs: ["tree-trimming", "backyard-cleanup", "yard-waste-removal"],
    photoNeeded: "Trimming hedges along a property"
  },
  {
    slug: "brush-chipping",
    title: "Brush Chipping Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["brush chipping Omaha", "wood chipping service", "branch chipping"],
    metaDescription: "Brush chipping services in Omaha. A1 converts branches and brush into mulch. Call (402) 612-2373.",
    h1: "Brush Chipping in Omaha",
    shortDescription: "We chip branches and brush into mulch on-site.",
    description: "Instead of hauling away huge piles of branches, we can chip them on-site and leave you with usable mulch for your garden beds. It's efficient, eco-friendly, and saves you money on mulch.",
    relatedSlugs: ["brush-yard-waste", "tree-trimming", "yard-waste-removal"],
    photoNeeded: "Wood chipper processing branches"
  },
];

// ─── EXPORT ALL CATEGORIES ───

export const serviceCategories: ServiceCategory[] = [
  { name: "Junk Removal & Hauling", slug: "junk-removal", icon: "Truck", services: junkHauling },
  { name: "Cleanout Services", slug: "cleanouts", icon: "Home", services: cleanouts },
  { name: "Construction & Demolition", slug: "construction", icon: "HardHat", services: construction },
  { name: "Specialized Item Removal", slug: "specialized", icon: "Package", services: specializedItems },
  { name: "Yard & Outdoor", slug: "yard-outdoor", icon: "Trees", services: yardOutdoor },
  { name: "Landscaping", slug: "landscaping", icon: "Flower2", services: landscaping },
  { name: "Commercial Services", slug: "commercial", icon: "Building", services: commercial },
  { name: "Tree Services", slug: "tree-service", icon: "TreePine", services: treeServices },
];

export const allServices: ServiceItem[] = serviceCategories.flatMap(c => c.services);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs.map(s => getServiceBySlug(s)).filter(Boolean) as ServiceItem[];
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(c => c.slug === slug);
}

// ─── SERVICE AREAS ───

export interface ServiceArea {
  name: string;
  slug: string;
  state: string;
  metaDescription: string;
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  { name: "Omaha", slug: "omaha", state: "NE", metaDescription: "Junk removal and tree service in Omaha, NE. A1 Junk Removal serves all Omaha neighborhoods. Call (402) 612-2373.", description: "We serve every neighborhood in Omaha — from Dundee to Millard, Benson to Aksarben, and everywhere in between. As a locally owned business, we know this city inside and out." },
  { name: "Bellevue", slug: "bellevue", state: "NE", metaDescription: "Junk removal and tree service in Bellevue, NE. A1 Junk Removal serves Bellevue and Offutt AFB area. Call (402) 612-2373.", description: "Bellevue is right in our backyard. We serve the entire Bellevue area including neighborhoods near Offutt Air Force Base. Fast response times and fair pricing." },
  { name: "Papillion", slug: "papillion", state: "NE", metaDescription: "Junk removal and tree service in Papillion, NE. A1 Junk Removal serves Papillion and surrounding areas. Call (402) 612-2373.", description: "Papillion homeowners trust us for junk removal and tree service. We're just a short drive away and can usually get to you the same day you call." },
  { name: "La Vista", slug: "la-vista", state: "NE", metaDescription: "Junk removal and tree service in La Vista, NE. A1 Junk Removal serves La Vista residents and businesses. Call (402) 612-2373.", description: "La Vista is one of our most active service areas. Whether you need junk hauled from your home or trees trimmed in your yard, we've got you covered." },
  { name: "Ralston", slug: "ralston", state: "NE", metaDescription: "Junk removal and tree service in Ralston, NE. A1 Junk Removal serves Ralston and nearby communities. Call (402) 612-2373.", description: "Ralston may be small but we give it the same attention as any other area. Fast, affordable junk removal and tree service right in your neighborhood." },
  { name: "Elkhorn", slug: "elkhorn", state: "NE", metaDescription: "Junk removal and tree service in Elkhorn, NE. A1 Junk Removal serves Elkhorn and west Omaha. Call (402) 612-2373.", description: "Elkhorn has been growing fast, and so has the need for reliable junk removal and tree service. We serve all of Elkhorn and the surrounding west Omaha area." },
  { name: "Gretna", slug: "gretna", state: "NE", metaDescription: "Junk removal and tree service in Gretna, NE. A1 Junk Removal serves Gretna and the surrounding area. Call (402) 612-2373.", description: "Gretna is one of the fastest-growing communities in the metro, and we're proud to serve it. Junk removal, tree trimming, cleanouts — we do it all out here." },
  { name: "Bennington", slug: "bennington", state: "NE", metaDescription: "Junk removal and tree service in Bennington, NE. A1 Junk Removal serves Bennington and northwest Omaha. Call (402) 612-2373.", description: "Bennington residents count on us for junk removal and tree service. We serve the entire Bennington area with the same fast, friendly service we're known for." },
  { name: "Boys Town", slug: "boys-town", state: "NE", metaDescription: "Junk removal and tree service in Boys Town, NE. A1 Junk Removal serves Boys Town and west Omaha. Call (402) 612-2373.", description: "Boys Town and the surrounding west Omaha neighborhoods are part of our regular service area. We're always nearby and ready to help." },
  { name: "Council Bluffs", slug: "council-bluffs", state: "IA", metaDescription: "Junk removal and tree service in Council Bluffs, IA. A1 Junk Removal serves Council Bluffs and the Iowa side. Call (402) 612-2373.", description: "We cross the river to serve Council Bluffs too. Iowa-side customers get the same great service and pricing as our Nebraska customers." },
  { name: "Carter Lake", slug: "carter-lake", state: "IA", metaDescription: "Junk removal and tree service in Carter Lake, IA. A1 Junk Removal serves Carter Lake. Call (402) 612-2373.", description: "Carter Lake is right next door and we serve it regularly. Quick response times and the same affordable pricing you'd expect from A1." },
  { name: "Waterloo", slug: "waterloo", state: "NE", metaDescription: "Junk removal and tree service in Waterloo, NE. A1 Junk Removal serves Waterloo and northwest Douglas County. Call (402) 612-2373.", description: "Waterloo and the surrounding rural areas are within our service range. We handle everything from farm cleanups to residential junk removal." },
  { name: "Valley", slug: "valley", state: "NE", metaDescription: "Junk removal and tree service in Valley, NE. A1 Junk Removal serves Valley and western Douglas County. Call (402) 612-2373.", description: "Valley residents trust A1 for junk removal and tree service. We serve the entire Valley area with fast, reliable service." },
  { name: "Springfield", slug: "springfield", state: "NE", metaDescription: "Junk removal and tree service in Springfield, NE. A1 Junk Removal serves Springfield and southern Sarpy County. Call (402) 612-2373.", description: "Springfield and the southern Sarpy County area are part of our regular route. We provide the same great service here as we do everywhere else." },
  { name: "Plattsmouth", slug: "plattsmouth", state: "NE", metaDescription: "Junk removal and tree service in Plattsmouth, NE. A1 Junk Removal serves Plattsmouth and Cass County. Call (402) 612-2373.", description: "Plattsmouth is at the edge of our service area but we're happy to come out. Give us a call and we'll get you scheduled." },
];

// ─── CONSTANTS ───

export const PHONE = "(402) 612-2373";
export const PHONE_LINK = "tel:4026122373";
export const EMAIL = "bryan@A1JunkRemovalOfOmaha.com";
export const BUSINESS_NAME = "A1 Junk Removal and Tree Service";
export const FORMER_NAME = "formerly A1 Junk Removal of Omaha";
export const PLACEHOLDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/nopicture_ddd96ce4.jpg";
export const HERO_JUNK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/hero-junk-removal-ar9KXrmQiJmrdMb7dDvAJh.webp";
export const HERO_TREE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/hero-tree-service-UmVmNRfuSZSPDEMszC6Erg.webp";
export const ABOUT_TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/about-team-5CnSb6BqC2amPdwBrsQpdy.webp";
export const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/before-after-cleanout-CjUUq8Gg5ChWibYyz2iKd3.webp";
export const CTA_BG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/cta-background-jLoTddUiPykVuECHJ26hmF.webp";
