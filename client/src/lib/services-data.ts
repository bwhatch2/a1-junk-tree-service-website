/*
  SERVICES DATA: Complete catalog of all A1 Junk Removal and Tree Service offerings.
  Each service has: slug, title, category, keywords, metaDescription, h1, description, and related services.
  Used by: mega-menu navigation, service page template, sitemap, internal linking.
*/

export interface ContentSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

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
  richContent?: ContentSection[];
  relatedSlugs: string[];
  photoNeeded: string;
  isRootLevel?: boolean;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string; // lucide icon name
  services: ServiceItem[];
}

// ─── NEW JUNK REMOVAL SERVICES (40 root-level pages) ───

export interface JunkServicePage {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
}

export const junkServicePages: JunkServicePage[] = [
  // General Junk Removal
  { slug: "residential-junk-removal", title: "Residential Junk Removal", category: "General Junk Removal", subcategory: "general" },
  { slug: "commercial-junk-removal", title: "Commercial Junk Removal", category: "General Junk Removal", subcategory: "general" },
  { slug: "same-day-junk-pickup", title: "Same-Day Junk Pickup", category: "General Junk Removal", subcategory: "general" },
  { slug: "bulk-trash-pickup", title: "Bulk Trash Pickup", category: "General Junk Removal", subcategory: "general" },
  { slug: "trash-hauling", title: "Garbage & Trash Hauling", category: "General Junk Removal", subcategory: "general" },

  // Cleanout Services
  { slug: "property-cleanouts", title: "Property Cleanout Services", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "estate-cleanouts", title: "Estate Cleanout Services", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "foreclosure-cleanouts", title: "Foreclosure Cleanouts", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "hoarder-cleanup", title: "Hoarder House Cleanup", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "garage-cleanout", title: "Garage Cleanout", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "attic-cleanout", title: "Attic Cleanout", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "basement-cleanout", title: "Basement Cleanout", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "storage-unit-cleanout", title: "Storage Unit Cleanout", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "apartment-cleanouts", title: "Apartment Complex Junk Removal", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "eviction-cleanouts", title: "Eviction Cleanouts", category: "Cleanout Services", subcategory: "cleanouts" },
  { slug: "house-cleanout-services", title: "House Cleanout Services", category: "Cleanout Services", subcategory: "cleanouts" },

  // Commercial Cleanouts
  { slug: "office-furniture-removal", title: "Office Furniture Removal", category: "Commercial Services", subcategory: "commercial" },
  { slug: "warehouse-cleanout", title: "Warehouse Cleanout", category: "Commercial Services", subcategory: "commercial" },
  { slug: "retail-cleanout", title: "Retail Space Cleanout", category: "Commercial Services", subcategory: "commercial" },

  // Item Removal
  { slug: "appliance-removal", title: "Appliance Removal", category: "Item Removal", subcategory: "items" },
  { slug: "refrigerator-removal", title: "Refrigerator Removal", category: "Item Removal", subcategory: "items" },
  { slug: "furniture-removal", title: "Furniture Removal", category: "Item Removal", subcategory: "items" },
  { slug: "couch-sofa-removal", title: "Couch & Sofa Removal", category: "Item Removal", subcategory: "items" },
  { slug: "mattress-disposal", title: "Mattress Disposal & Recycling", category: "Item Removal", subcategory: "items" },
  { slug: "tv-removal", title: "Television Removal", category: "Item Removal", subcategory: "items" },
  { slug: "piano-removal", title: "Piano Removal", category: "Item Removal", subcategory: "items" },
  { slug: "exercise-equipment-removal", title: "Exercise Equipment Removal", category: "Item Removal", subcategory: "items" },
  { slug: "hot-tub-removal", title: "Hot Tub Removal", category: "Item Removal", subcategory: "items" },
  { slug: "e-waste-disposal", title: "E-Waste Disposal & Recycling", category: "Item Removal", subcategory: "items" },

  // Demolition & Outdoor
  { slug: "storm-debris-cleanup", title: "Storm Debris & Emergency Cleanup", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "light-demolition", title: "Light Demolition Services", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "shed-removal", title: "Shed Demolition & Removal", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "deck-removal", title: "Deck Demolition & Removal", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "fence-removal", title: "Fence Removal", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "pool-removal", title: "Above Ground Pool Removal", category: "Demolition & Outdoor", subcategory: "demolition" },
  { slug: "swing-set-removal", title: "Playground & Swing Set Removal", category: "Demolition & Outdoor", subcategory: "demolition" },

  // Yard & Materials
  { slug: "yard-waste-removal", title: "Yard Waste Removal", category: "Yard & Materials", subcategory: "yard" },
  { slug: "construction-debris", title: "Construction Debris Removal", category: "Yard & Materials", subcategory: "yard" },
  { slug: "concrete-removal", title: "Concrete & Brick Removal", category: "Yard & Materials", subcategory: "yard" },
  { slug: "scrap-metal-removal", title: "Scrap Metal Removal", category: "Yard & Materials", subcategory: "yard" },
  { slug: "tire-removal", title: "Tire Removal & Disposal", category: "Yard & Materials", subcategory: "yard" },
];

// Helper to get junk service nav categories
export function getJunkNavCategories(): { name: string; services: JunkServicePage[] }[] {
  const catMap = new Map<string, JunkServicePage[]>();
  for (const svc of junkServicePages) {
    if (!catMap.has(svc.category)) catMap.set(svc.category, []);
    catMap.get(svc.category)!.push(svc);
  }
  return Array.from(catMap.entries()).map(([name, services]) => ({ name, services }));
}

// ─── LANDSCAPING SERVICES ───

const landscaping: ServiceItem[] = [
    {
    slug: "lawn-care-mowing",
    title: "Lawn Care & Mowing Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["lawn care Omaha", "lawn mowing service Omaha", "grass cutting near me"],
    metaDescription: "Reliable lawn care and mowing services in Omaha. A1 Junk Removal and Tree Service keeps your lawn looking sharp. Call (402) 612-2373 for a free quote.",
    h1: "Lawn Care & Mowing in Omaha",
    shortDescription: "Is your lawn getting a little out of control? **A1 Junk Removal and Tree Service** offers reliable **lawn care and mowing in Omaha** to keep your property looking its best. We handle the hard work so you can enjoy your weekends.",
    description: "Is your lawn getting a little out of control? **A1 Junk Removal and Tree Service** offers reliable **lawn care and mowing in Omaha** to keep your property looking its best. We handle the hard work so you can enjoy your weekends. We're proud to serve our neighbors in **Boys Town** and **Elkhorn**. With **253+ five-star reviews** and prices **40-60% less than national companies**, you can trust our local team to do the job right.",
    richContent: {
    section1: {
    heading: "What Our Lawn Care Service Includes",
    bullets: [
    {
    label: "Mowing:",
    description: "We cut your grass to the perfect height, promoting healthy growth."
    },
    {
    label: "Edging:",
    description: "We create clean, sharp lines along driveways, sidewalks, and flower beds."
    },
    {
    label: "Trimming:",
    description: "We trim around obstacles like trees, fences, and posts for a finished look."
    },
    {
    label: "Cleanup:",
    description: "We blow all grass clippings off hard surfaces, leaving your property spotless."
    },
    {
    label: "Flexible Scheduling:",
    description: "We offer weekly, bi-weekly, or one-time mows to fit your needs."
    }
    ]
    },
    section2: {
    heading: "Complete Yard Transformation",
    body: "A great-looking lawn is just the start. If your yard is cluttered with old playsets, fallen branches, or other debris, our junk removal team can haul it all away. We also offer complete tree services, from trimming and pruning to full removal, to keep your property safe and beautiful. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    },
    relatedSlugs: ["lawn-maintenance", "leaf-removal", "seasonal-cleanup", "weed-control"],
    photoNeeded: "Freshly mowed residential lawn"
  },
    {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["lawn maintenance Omaha", "lawn service Omaha NE", "yard maintenance near me", "lawn mowing Omaha"],
    metaDescription: "Full lawn maintenance in Omaha. A1 handles mowing, edging, fertilizing, and more. Call (402) 612-2373 for a free estimate.",
    h1: "Lawn Maintenance in Omaha",
    shortDescription: "Keeping your lawn looking its best is a lot of work. **A1 Junk Removal and Tree Service** offers complete **lawn maintenance Omaha** to handle the mowing, edging, fertilizing, and seasonal treatments that keep your yard healthy and green.",
    description: "Keeping your lawn looking its best is a lot of work. **A1 Junk Removal and Tree Service** offers complete **lawn maintenance Omaha** to handle the mowing, edging, fertilizing, and seasonal treatments that keep your yard healthy and green. We're proud to serve our neighbors in **Bellevue** and **Ralston**. With **253+ five-star reviews** and prices **40-60% less than national companies**, you can trust our local team to get the job done right. Your neighbors will wonder what your secret is.",
    richContent: {
    main: {
    heading: "Our Lawn Maintenance Services",
    bullets: [
    {
    label: "Mowing & Edging:",
    description: "We provide regular, professional mowing and crisp edging for a clean, manicured look."
    },
    {
    label: "Fertilizing:",
    description: "Our team applies the right nutrients at the right time to promote strong roots and vibrant color."
    },
    {
    label: "Aeration:",
    description: "We relieve soil compaction, allowing air, water, and nutrients to reach the grassroots."
    },
    {
    label: "Weed Control:",
    description: "Say goodbye to pesky weeds that compete with your grass for resources."
    },
    {
    label: "Seasonal Treatments:",
    description: "From spring prep to fall cleanup, we ensure your lawn is ready for every season."
    }
    ]
    },
    crossSell: {
    heading: "Need a Full Yard Makeover?",
    description: "A great lawn is just the beginning. If you have overgrown trees, unsightly stumps, or need a complete yard cleanup, our tree service and junk removal teams can help. We handle everything from tree trimming and removal to hauling away any yard debris, giving you a completely refreshed outdoor space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    },
    relatedSlugs: ["lawn-care-mowing", "weed-control", "seasonal-cleanup", "mulching"],
    photoNeeded: "Well-maintained green lawn with edging"
  },
    {
    slug: "mulching",
    title: "Mulching Services Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["mulching Omaha", "mulch installation near me", "mulch delivery Omaha"],
    metaDescription: "Fresh mulch delivery and installation in Omaha. A1 Junk Removal and Tree Service keeps your garden beds looking great. Call for a free quote!",
    h1: "Mulching Services in Omaha",
    shortDescription: "Tired of looking at faded, patchy mulch? **A1 Junk Removal and Tree Service** delivers and installs high-quality **mulching Omaha** to give your landscaping a fresh, clean look.",
    description: "Tired of looking at faded, patchy mulch? **A1 Junk Removal and Tree Service** delivers and installs high-quality **mulching Omaha** to give your landscaping a fresh, clean look. We’re proud to serve our neighbors in **Gretna** and **Ralston**. With **253+ five-star reviews**, you can trust our team to do the job right, and our prices are often **40-60% less than national companies**.",
    richContent: {
    headings: ["What Fresh Mulch Can Do For You", "Complete Yard Transformation"],
    sections: [
    {
    type: "bullets",
    content: [
    "Weed Control: A thick layer of mulch is a natural barrier, stopping weeds from sprouting.",
    "Moisture Retention: Mulch helps your soil hold onto water, so you don't have to water as often.",
    "Temperature Regulation: It keeps soil cooler in the summer and warmer in the winter, protecting plant roots.",
    "Improved Curb Appeal: Fresh mulch instantly makes your entire property look cleaner and more professional.",
    "Soil Health: As organic mulch breaks down, it adds valuable nutrients back into your soil."
    ]
    },
    {
    type: "paragraph",
    content: "Is an overgrown tree or unsightly stump ruining your otherwise beautiful yard? Beyond mulching, our team offers complete tree services, from trimming and pruning to full tree and stump removal. We can handle any tree, big or small, to get your entire property looking its best. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    ]
    },
    relatedSlugs: ["flower-bed-maintenance", "brush-chipping", "landscape-waste-removal"],
    photoNeeded: "Fresh mulch being spread in garden beds"
  },
    {
    slug: "sod-installation",
    title: "Sod Installation Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["sod installation Omaha", "sod installation near me", "lawn sodding Omaha"],
    metaDescription: "Fresh sod installation in the Omaha area. Get an instant green lawn. We handle soil prep, grading, and installation. Call for a free quote!",
    h1: "Sod Installation in Omaha",
    shortDescription: "Tired of waiting for grass seed to grow? **A1 Junk Removal and Tree Service** can give you a beautiful, green lawn right away by installing fresh, high-quality sod.",
    description: "Tired of waiting for grass seed to grow? **A1 Junk Removal and Tree Service** can give you a beautiful, green lawn right away by installing fresh, high-quality **sod installation Omaha**. Whether you're in **Papillion** or **Bellevue**, we've got your lawn covered. With **253+ five-star reviews**, you can trust our quality, and we're often **40-60% less than national companies**.",
    richContent: {
    section1: {
    heading: "Our Sod Installation Process",
    bullets: [
    {
    label: "Site Preparation:",
    description: "We start by clearing the area of old grass, weeds, and debris to create a clean slate."
    },
    {
    label: "Soil Grading:",
    description: "Our team will level and grade the soil to ensure proper drainage and a smooth surface for your new lawn."
    },
    {
    label: "Fresh Sod Delivery:",
    description: "We source high-quality, locally-grown sod that's ready to take root in your yard."
    },
    {
    label: "Professional Installation:",
    description: "We lay the sod carefully, ensuring tight seams and no gaps for a uniform, carpet-like appearance."
    },
    {
    label: "Initial Watering:",
    description: "We give your new lawn its first watering and provide instructions on how to care for it as it gets established."
    }
    ]
    },
    section2: {
    heading: "Complete Yard Transformation",
    body: "A perfect lawn is just the beginning. If your yard needs more work, like getting rid of old sheds, overgrown brush, or general junk, our junk removal service can clear it all out. We handle the heavy lifting so you can enjoy your entire outdoor space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    },
    relatedSlugs: ["lawn-care-mowing", "grading-leveling", "yard-cleanup-landscaping"],
    photoNeeded: "Laying fresh sod on a prepared lawn"
  },
    {
    slug: "leaf-removal",
    title: "Leaf Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["leaf removal Omaha", "leaf removal near me", "fall leaf cleanup Omaha"],
    metaDescription: "Tired of raking? A1 provides professional leaf removal services in Omaha. We clear and haul away fall leaves from your property. Call (402) 612-2373 for a free quote.",
    h1: "Leaf Removal in Omaha",
    shortDescription: "When your yard is buried in autumn leaves, it can feel like a never-ending chore. Instead of spending your weekends raking, let **A1 Junk Removal and Tree Service** handle the **leaf removal Omaha** so you can enjoy your fall.",
    description: "When your yard is buried in autumn leaves, it can feel like a never-ending chore. Instead of spending your weekends raking, let **A1 Junk Removal and Tree Service** handle the **leaf removal Omaha** so you can enjoy your fall. We offer fast and affordable leaf cleanup for our neighbors in **Elkhorn** and **Bennington**. With **253+ five-star reviews**, you can trust our team to do the job right. Best of all, our services are often **40-60% less than national companies**.",
    richContent: {
    section1: {
    heading: "Our Fall Leaf Cleanup Process",
    bullets: [
    {
    label: "Yard Assessment:",
    description: "We start by evaluating the size of your property and the amount of leaf cover to create an efficient cleanup plan."
    },
    {
    label: "Raking and Blowing:",
    description: "Our crew uses professional-grade blowers and rakes to gather all the leaves from your lawn, garden beds, and walkways into manageable piles."
    },
    {
    label: "Gutter Check:",
    description: "While we're there, we can also inspect and clear any leaves clogging your gutters to prevent water damage."
    },
    {
    label: "Bagging and Removal:",
    description: "We bag all the collected leaves and debris for you, leaving your yard looking pristine."
    },
    {
    label: "Hauling Away:",
    description: "Finally, we load up all the bags and haul them away, so you don't have to deal with overflowing yard waste bins."
    }
    ]
    },
    section2: {
    heading: "Complete Tree and Yard Care",
    body: "Leaf removal is just the beginning. If you have overgrown trees, unsightly stumps, or need a full yard overhaul, our tree service experts can help. From trimming and pruning to complete tree removal, we have the equipment and experience to handle any job safely and efficiently. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    },
    relatedSlugs: ["seasonal-cleanup", "yard-waste-removal", "gutter-cleaning"],
    photoNeeded: "Raking and bagging fall leaves"
  },
    {slug:"seasonal-cleanup",title:"Seasonal Yard Cleanup Omaha | A1 Junk Removal and Tree Service",category:"Landscaping",categorySlug:"landscaping",keywords:["seasonal cleanup Omaha","spring cleanup Omaha","fall yard cleanup","seasonal cleanup near me"],metaDescription:"Seasonal yard cleanup in Omaha. A1 handles spring and fall cleanups to keep your property looking great. Call (402) 612-2373.",h1:"Seasonal Yard Cleanup in Omaha",shortDescription:"Whether it's spring awakening or autumn shutdown, your yard needs a major reset. **A1 Junk Removal and Tree Service** handles the heavy lifting of **seasonal cleanup in Omaha**, clearing out debris and getting your property ready for the coming months.",description:"Whether it's spring awakening or autumn shutdown, your yard needs a major reset. **A1 Junk Removal and Tree Service** handles the heavy lifting of **seasonal cleanup in Omaha**, clearing out debris and getting your property ready for the coming months. We're proud to serve our neighbors in **Ralston** and **Gretna**. With **253+ five-star reviews**, you can trust our team to do the job right, and our prices are often **40-60% less than national companies**.",richContent:{section1:{heading:"What A Seasonal Cleanup Includes",bullets:[{label:"Leaf & Debris Removal",description:"We rake, bag, and haul away all the fallen leaves, twigs, and other yard debris."},{label:"Garden Bed Tidy-Up",description:"We'll clean out old annuals, cut back perennials, and remove weeds from your flower beds."},{label:"Overgrowth Pruning",description:"Trimming back overgrown shrubs and branches to promote healthy growth and a neat appearance."},{label:"Gutter Clearing",description:"We can clear out leaves and debris from your gutters to ensure proper drainage before the next season's rain."},{label:"Final Haul-Away",description:"All yard waste is loaded up and hauled away, leaving you with a perfectly clean and refreshed property."}]},section2:{heading:"Need More Than a Cleanup?",body:"A clean yard is just the start. Often, a big seasonal cleanup uncovers other things you need gone, like an old playset, a forgotten pile of wood, or just general junk that's been sitting around. Our junk removal service can take care of that for you, clearing out any unwanted items from your property at the same time. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."}},relatedSlugs:["leaf-removal","backyard-cleanup","yard-waste-removal","flower-bed-maintenance"],photoNeeded:"Spring yard cleanup in progress"},
    {slug:"weed-control",title:"Weed Control Omaha | A1 Junk Removal and Tree Service",category:"Landscaping",categorySlug:"landscaping",keywords:["weed control Omaha","weed removal service near me","weed treatment Omaha"],metaDescription:"Professional weed control services in Omaha, Papillion, and Gretna. A1 keeps your lawn and beds weed-free. Call (402) 612-2373 for a free quote.",h1:"Weed Control in Omaha",shortDescription:"Are weeds taking over your lawn and garden beds? **A1 Junk Removal and Tree Service** offers professional **weed control Omaha** to reclaim your yard.",description:"Are weeds taking over your lawn and garden beds? **A1 Junk Removal and Tree Service** offers professional **weed control Omaha** to reclaim your yard. We serve homeowners in **Papillion**, **Gretna**, and the surrounding areas. With **253+ five-star reviews**, you can trust our team to get the job done right, and our prices are often **40-60% less than national companies**.",richContent:{section1:{heading:"What Our Weed Control Service Includes",bullets:[{label:"Assessment",text:"We identify the types of weeds and the extent of the problem to create a targeted plan."},{label:"Targeted Treatment",text:"We use safe and effective treatments to eliminate weeds without harming your lawn or desirable plants."},{label:"Lawn Application",text:"We treat your entire lawn to prevent broadleaf weeds like dandelions from spreading."},{label:"Bed & Border Care",text:"We carefully clear weeds from your flower beds, walkways, and driveway cracks."},{label:"Preventative Advice",text:"We offer tips on proper mowing and watering to help keep weeds from coming back."}]},section2:{heading:"Complete Yard Maintenance",body:"A weed-free yard is just the beginning. A1 also offers comprehensive landscaping and tree services to keep your entire property looking its best, from regular lawn mowing and shrub trimming to complete tree removal. Let Bryan and the team handle all your yard care needs. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."}},relatedSlugs:["lawn-maintenance","flower-bed-maintenance","mulching"],photoNeeded:"Treating weeds in a lawn"},
    {
    slug: "grading-leveling",
    title: "Yard Grading & Leveling Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["yard grading Omaha", "yard leveling near me", "lawn grading service Omaha"],
    metaDescription: "Need expert yard grading and leveling in Omaha? A1 fixes drainage issues and creates a perfect, even lawn. Get a free quote today! Call (402) 612-2373.",
    h1: "Yard Grading & Leveling in Omaha",
    shortDescription: "Is your yard bumpy, uneven, or causing drainage headaches? A lumpy lawn isn't just ugly—it can lead to water pooling near your foundation. At **A1 Junk Removal and Tree Service**, we specialize in professional **yard grading Omaha** to create a smooth, level surface that's perfect for a healthy lawn.",
    description: "Is your yard bumpy, uneven, or causing drainage headaches? A lumpy lawn isn't just ugly—it can lead to water pooling near your foundation. At **A1 Junk Removal and Tree Service**, we specialize in professional **yard grading Omaha** to create a smooth, level surface that's perfect for a healthy lawn. We're proud to serve our neighbors in **Bellevue** and **Carter Lake**, helping them get the functional, beautiful yards they deserve. With **253+ five-star reviews** and prices often **40-60% less than national companies**, you can trust our local team to do the job right.",
    richContent: {
    sections: [
    {
    heading: "What We Fix With Grading",
    body: [
    {
    label: "Poor Drainage:",
    description: "We reshape your yard to ensure water flows away from your home's foundation."
    },
    {
    label: "Bumps and Hills:",
    description: "Our equipment smooths out uneven terrain for a flat, usable lawn."
    },
    {
    label: "Patchy Grass:",
    description: "Leveling creates an ideal seedbed for new sod or grass to grow evenly."
    },
    {
    label: "Mowing Difficulties:",
    description: "A smooth surface makes lawn mowing faster, safer, and more effective."
    },
    {
    label: "New Construction Prep:",
    description: "We prepare the ground for new landscaping, patios, or shed installations."
    }
    ]
    },
    {
    heading: "More Than Just Grading",
    body: "Once your yard is perfectly graded, why stop there? Our team can help with complete landscape transformations, from installing fresh sod to clearing out overgrown areas. We also offer full-service junk removal to haul away any debris from your project, leaving you with a clean, refreshed space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    ]
    },
    relatedSlugs: ["sod-installation", "land-clearing", "landscape-waste-removal"],
    photoNeeded: "Grading equipment leveling a yard"
  },
    {
    slug: "flower-bed-maintenance",
    title: "Flower Bed Maintenance Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["flower bed maintenance Omaha", "flower bed cleanup near me", "garden weeding service Omaha"],
    metaDescription: "Tired of weeding? A1 offers expert flower bed maintenance in Omaha, Bellevue, and Boys Town. Get a free quote on mulching, edging, and cleanup. Call (402) 612-2373.",
    h1: "Flower Bed Maintenance in Omaha",
    shortDescription: "Are your flower beds looking a little wild? Overgrown beds can make your whole property look messy. **A1 Junk Removal and Tree Service** offers professional **flower bed maintenance Omaha** to handle the weeding, edging, and mulching, keeping your landscaping looking sharp and clean.",
    description: "Are your flower beds looking a little wild? Overgrown beds can make your whole property look messy. **A1 Junk Removal and Tree Service** offers professional **flower bed maintenance Omaha** to handle the weeding, edging, and mulching, keeping your landscaping looking sharp and clean. We proudly serve customers in **Bellevue**, **Boys Town**, and the entire Omaha metro, backed by our **253+ five-star reviews**. As a local team, our services often cost **40-60% less than national companies**.",
    richContent: {
    section1: {
    heading: "What Our Flower Bed Service Includes",
    bullets: [
    {
    label: "Weeding & Cleanup:",
    description: "We'll pull all existing weeds and clear out any dead plants or debris."
    },
    {
    label: "Fresh Edging:",
    description: "We create clean, defined edges around your beds for a professional look."
    },
    {
    label: "New Mulch Application:",
    description: "We lay down a fresh layer of mulch to prevent future weeds and retain moisture."
    },
    {
    label: "Shrub & Plant Trimming:",
    description: "Light trimming of existing perennials and shrubs to encourage healthy growth."
    },
    {
    label: "Seasonal Refresh:",
    description: "We can remove old annuals and prepare beds for new seasonal plantings."
    }
    ]
    },
    section2: {
    heading: "Complete Yard Transformation",
    body: "Once your flower beds are looking pristine, you might notice other parts of your yard that need attention. Overgrown trees or unsightly stumps can detract from your beautiful landscaping. Our team also specializes in professional tree trimming, tree removal, and stump grinding to enhance your property's safety and curb appeal. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    },
    relatedSlugs: ["mulching", "weed-control", "seasonal-cleanup"],
    photoNeeded: "Well-maintained flower bed with fresh mulch"
  },
    {
    slug: "yard-cleanup-landscaping",
    title: "Yard Cleanup & Landscaping Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["yard cleanup Omaha", "landscaping cleanup near me", "yard waste removal Omaha"],
    metaDescription: "From overgrown yards to seasonal debris, A1 offers complete yard cleanup and landscaping services in Omaha, Ralston, and Bellevue. Call (402) 612-2373.",
    h1: "Yard Cleanup & Landscaping in Omaha",
    shortDescription: "Is your yard looking a little wild? Whether it's from a recent storm, a season of neglect, or just feeling overgrown, **A1 Junk Removal and Tree Service** is here to help you reclaim your outdoor space. We handle everything from basic tidying to full-scale **yard cleanup Omaha** to get your property looking its best.",
    description: "Is your yard looking a little wild? Whether it's from a recent storm, a season of neglect, or just feeling overgrown, **A1 Junk Removal and Tree Service** is here to help you reclaim your outdoor space. We handle everything from basic tidying to full-scale **yard cleanup Omaha** to get your property looking its best. We're proud to serve our neighbors in **Ralston** and **Bellevue**, offering the friendly, reliable service you can only get from a local team. With **253+ five-star reviews** and prices often **40-60% less than national companies**, you can trust us to do the job right without breaking the bank.",
    relatedSlugs: ["backyard-cleanup", "seasonal-cleanup", "lawn-maintenance", "shrub-hedge-trimming"],
    photoNeeded: "Before and after yard cleanup",
    richContent: {
    show: true,
    section1: {
    heading: "What Our Yard Cleanup Covers",
    bullets: [
    {
    label: "Overgrowth & Brush:",
    description: "We’ll tame the jungle, clearing out overgrown bushes, weeds, and tangled vines."
    },
    {
    label: "Fallen Branches & Debris:",
    description: "From small twigs to large limbs, we gather and haul away all storm and seasonal debris."
    },
    {
    label: "Leaf & Yard Waste:",
    description: "We can collect and remove piles of leaves, grass clippings, and other organic waste."
    },
    {
    label: "Basic Landscaping Tidying:",
    description: "This includes edging, trimming, and generally neatening up your garden and lawn areas."
    },
    {
    label: "General Junk & Clutter:",
    description: "If you've got old planters, broken furniture, or other junk cluttering your yard, we’ll take that too."
    }
    ]
    },
    section2: {
    heading: "Need More Than a Cleanup?",
    body: "If your yard needs a more significant overhaul, our tree service team can help. From professional tree trimming and pruning to complete tree and stump removal, we have the equipment and expertise to handle it safely and efficiently. Let us transform your entire outdoor space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    }
  },
    {slug: "gutter-cleaning",title: "Gutter Cleaning Omaha | A1 Junk Removal and Tree Service",category: "Landscaping",categorySlug: "landscaping",keywords: ["gutter cleaning Omaha", "gutter cleanout Omaha", "clogged gutters Omaha", "gutter cleaning near me"],metaDescription: "Fast and affordable gutter cleaning in the Omaha area. A1 Junk Removal and Tree Service clears clogged gutters and downspouts to protect your home. Call (402) 612-2373.",h1: "Gutter Cleaning Omaha",shortDescription: "Got clogged gutters full of leaves and gunk? Don't risk climbing a ladder yourself. The team at **A1 Junk Removal and Tree Service** provides fast and affordable **gutter cleaning in Omaha** to protect your home from water damage.",description: "Got clogged gutters full of leaves and gunk? Don't risk climbing a ladder yourself. The team at **A1 Junk Removal and Tree Service** provides fast and affordable **gutter cleaning in Omaha** to protect your home from water damage. We're a local Omaha business with **253+ five-star reviews**, and our prices are often **40-60% less than national companies**. Whether you're in **Carter Lake** or **Ralston**, we've got you covered.",richContent: [{heading: "The A1 Gutter Cleaning Process",bullets: ["Roof Debris Removal: We start by clearing any loose leaves and branches from your roof valleys.","Gutter Cleanout: We completely clear all debris from your gutters by hand to ensure they are totally empty.","Downspout Flush: We flush your downspouts to make sure there are no hidden clogs preventing proper drainage.","System Check: Our tech, Winston, will inspect the entire system for any obvious issues or potential problems.","Thorough Cleanup: We bag all the gutter debris and leave your property looking cleaner than when we arrived."]},{heading: "Your Local Yard Experts",body: "A clean yard goes beyond just clear gutters. From seasonal cleanups and leaf removal in the fall to mulching and trimming in the spring, we handle all the tough jobs to keep your property looking its best. Let us do the hard work so you can relax and enjoy your outdoor space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."}],relatedSlugs: ["leaf-removal", "seasonal-cleanup", "pressure-washing"],photoNeeded: "Cleaning debris from a gutter"},
    {
    slug: "pressure-washing",
    title: "Pressure Washing Omaha | A1 Junk Removal and Tree Service",
    category: "Landscaping",
    categorySlug: "landscaping",
    keywords: ["pressure washing Omaha", "pressure washing near me", "power washing Omaha"],
    metaDescription: "Affordable pressure washing in Omaha. A1 Junk Removal and Tree Service cleans driveways, sidewalks, decks, and siding. Call (402) 612-2373 for a free quote.",
    h1: "Pressure Washing in Omaha",
    shortDescription: "Is your driveway, sidewalk, or deck looking dull and dirty? **A1 Junk Removal and Tree Service** offers professional **pressure washing Omaha** to blast away the grime and restore your surfaces.",
    description: "Is your driveway, sidewalk, or deck looking dull and dirty? **A1 Junk Removal and Tree Service** offers professional **pressure washing Omaha** to blast away the grime and restore your surfaces. We're proud to serve customers in **Council Bluffs** and **Elkhorn**. With **253+ five-star reviews** and prices **40-60% less than national companies**, you can trust us to get the job done right.",
    richContent: [
    {
    heading: "What We Pressure Wash",
    bullets: [
    {
    label: "Driveways",
    description: "Remove oil stains, tire marks, and dirt buildup."
    },
    {
    label: "Sidewalks",
    description: "Brighten up your walkways and improve curb appeal."
    },
    {
    label: "Decks & Patios",
    description: "Safely clean wood and composite decking without causing damage."
    },
    {
    label: "Siding",
    description: "Wash away mold, mildew, and algae from vinyl, brick, or wood siding."
    },
    {
    label: "Fences",
    description: "Restore the look of your wood or vinyl fences."
    }
    ]
    },
    {
    heading: "Complete Yard Transformation",
    body: "Once your surfaces are sparkling clean, don't let unruly trees or stumps detract from your beautiful yard. A1 also offers professional tree trimming, tree removal, and stump grinding services to keep your entire property looking its best. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    ],
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
    h1: "Professional Tree Removal Omaha NE",
    shortDescription: "Dealing with a dead, diseased, or hazardous tree can be a major liability for your property. At A1 Junk Removal and Tree Service, we provide expert tree removal near me for homeowners and businesses alike. Our local, owner-operated team specializes in removing trees safely, especially in tight residential spaces where precision is required to protect your home and landscaping.",
    description: "Dealing with a dead, diseased, or hazardous tree can be a major liability for your property. At A1 Junk Removal and Tree Service, we provide expert tree removal near me for homeowners and businesses alike. Our local, owner-operated team specializes in removing trees safely, especially in tight residential spaces where precision is required to protect your home and landscaping. Because we are locally owned, our rates are consistently 40-60% less than national companies that have massive franchise fees and overhead. We are proud to have earned 253+ five-star reviews by providing honest, hard work and a clean finish on every job. Whether you are in Elkhorn or Papillion, we are ready to help you reclaim your yard today.",
    richContent: [
      {
        heading: "What\'s Included in Our Service",
        bullets: [
          "Full Tree Removal: Safe dismantling of trees of various sizes.",
          "Tight-Access Expertise: Removing trees near power lines, fences, or roofs.",
          "Complete Log Hauling: We don\'t leave heavy logs in your yard unless you want them.",
          "Debris Cleanup: We sweep the area clean of twigs and sawdust before leaving.",
          "Storm Damage Response: Fast removal of fallen or leaning trees.",
        ],
      },
      {
        heading: "Beyond Tree Care",
        body: "While we’re there to handle your trees, remember that we also offer full junk removal services. If you have an old shed or backyard clutter that needs to go along with the tree, we can handle it all in one trip! Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["stump-grinding", "emergency-tree-service", "tree-trimming", "log-removal"],
    photoNeeded: "Professional tree removal in progress"
  },
  {
    slug: "tree-trimming",
    title: "Tree Trimming Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["tree trimming Omaha", "tree pruning Omaha NE", "tree shaping service"],
    metaDescription: "Tree trimming and pruning in Omaha. A1 Tree Service keeps your trees healthy and looking great. Call (402) 612-2373.",
    h1: "Expert Tree Trimming Omaha",
    shortDescription: "Proper maintenance is the key to a long-lived tree and a safe property. If you’ve been searching for tree trimming near me, look no further than A1. We provide high-quality tree trimming Omaha NE that focuses on thinning the crown, removing deadwood, and lifting the canopy to improve your home’s curb appeal.",
    description: "Proper maintenance is the key to a long-lived tree and a safe property. If you’ve been searching for tree trimming near me, look no further than A1. We provide high-quality tree trimming Omaha NE that focuses on thinning the crown, removing deadwood, and lifting the canopy to improve your home’s curb appeal. Our professional approach is why we have 253+ five-star reviews from neighbors in Bellevue and La Vista. By keeping our operation local, we can keep our prices 40-60% less than national companies. Don\'t wait for a storm to break a heavy limb; let us trim it back safely now.",
    richContent: [
      {
        heading: "Benefits of Professional Trimming",
        bullets: [
          "Safety First: Removing dead or weak limbs before they fall on your roof.",
          "Tree Health: Pruning away diseased branches to prevent spread.",
          "View Clearance: Lifting limbs that block windows, sidewalks, or driveways.",
          "Storm Resistance: Thinning the canopy to allow wind to pass through safely.",
          "Cleanup Included: We haul away all brush and wood.",
        ],
      },
      {
        heading: "Total Yard Maintenance",
        body: "Need more than just the trees cleaned up? Our landscaping debris removal service can clear out old bushes and yard waste while we are on-site trimming your trees. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["tree-removal", "shrub-hedge-trimming", "emergency-tree-service"],
    photoNeeded: "Arborist trimming a large tree"
  },
    {
    slug: "stump-grinding",
    title: "Stump Grinding Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["stump grinding Omaha", "stump removal near me", "tree stump grinding Omaha"],
    metaDescription: "Stump grinding and removal in Omaha. A1 Junk Removal and Tree Service grinds stumps below grade. Call (402) 612-2373.",
    h1: "Stump Grinding in Omaha",
    shortDescription: "Left with an ugly tree stump after a removal? **A1 Junk Removal and Tree Service** can help! Our professional **stump grinding Omaha** service quickly and safely grinds stumps down below the surface, letting you reclaim your yard.",
    description: "Left with an ugly tree stump after a removal? **A1 Junk Removal and Tree Service** can help! Our professional **stump grinding Omaha** service quickly and safely grinds stumps down below the surface, letting you reclaim your yard. We're proud to serve customers in **Carter Lake**, **Boys Town**, and across the Omaha area, earning **253+ five-star reviews** along the way. Best of all, our pricing is typically **40-60% less than national companies**.",
    relatedSlugs: ["tree-removal", "land-clearing", "yard-waste-removal"],
    photoNeeded: "Stump grinder in action",
    richContent: {
    section1: {
    heading: "Our Stump Grinding Process",
    bullets: [
    {
    label: "Assessment",
    description: "We evaluate the stump's size, location, and any nearby obstacles."
    },
    {
    label: "Grinding",
    description: "Using our powerful equipment, we grind the stump down to 6-8 inches below grade."
    },
    {
    label: "Root Grinding",
    description: "We also chase and grind any large surface roots connected to the stump."
    },
    {
    label: "Cleanup",
    description: "The resulting wood chips are raked up and can be used as mulch or hauled away."
    },
    {
    label: "Flat Surface",
    description: "You're left with a level area, ready for topsoil, seed, or sod."
    }
    ]
    },
    section2: {
    heading: "More Than Just Stumps",
    body: "Once the stump is gone, you might notice other areas of your yard that need attention. From trimming overgrown branches to removing entire problem trees, our full tree service can handle it all. Winston and the team are equipped for any job, big or small, to keep your property safe and beautiful. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    }
  },
    {
    slug: "emergency-tree-service",
    title: "Emergency Tree Service Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["emergency tree service Omaha", "emergency tree service near me", "24/7 tree service Omaha"],
    metaDescription: "Fast, reliable emergency tree service in Omaha. A1 responds 24/7 to storm damage, fallen trees, and hazardous limbs. Call now for a free quote.",
    h1: "Emergency Tree Service in Omaha",
    shortDescription: "When a storm hits and you have a tree emergency, you need a team you can trust to be there fast. **A1 Junk Removal and Tree Service** offers rapid, reliable **emergency tree service Omaha** to make your property safe again.",
    description: "When a storm hits and you have a tree emergency, you need a team you can trust to be there fast. **A1 Junk Removal and Tree Service** offers rapid, reliable **emergency tree service Omaha** to make your property safe again. We're proud to serve our neighbors in **Papillion** and **Carter Lake**, and our **253+ five-star reviews** show our commitment to quality work. Plus, our services are often **40-60% less than national companies**, so you get the best value. When disaster strikes, call the local team that's ready to help.",
    richContent: [
    {
    heading: "Our Emergency Process",
    body: [
    "Immediate Dispatch: We send a crew as soon as you call, because we know emergencies can't wait.",
    "Safety First: Our first priority is to assess the situation and eliminate any immediate dangers, like branches on power lines or over your home.",
    "Efficient Removal: We use specialized equipment to handle fallen or hazardous trees and limbs quickly and safely.",
    "Damage Mitigation: We work carefully to prevent further damage to your property during the removal process.",
    "Thorough Cleanup: After the tree is removed, we clear all the related debris, leaving your yard clean and safe."
    ]
    },
    {
    heading: "Beyond the Emergency",
    body: "After a storm, you might be left with more than just a tree problem. Piles of branches, leaves, and other debris can clutter your yard. A1 also offers complete storm debris and junk removal services to get your entire property back to normal. We can haul away anything the storm left behind, so you don't have to worry about it. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    ],
    relatedSlugs: ["tree-removal", "storm-debris-removal", "tree-branch-removal"],
    photoNeeded: "Emergency tree removal after storm"
  },
    {slug: "land-clearing",title: "Land Clearing Omaha | A1 Junk Removal and Tree Service",category: "Tree Services",categorySlug: "tree-service",keywords: ["land clearing Omaha", "lot clearing near me", "brush clearing service Omaha"],metaDescription: "Professional land clearing in Omaha. A1 Junk Removal and Tree Service clears trees, brush, and debris for residential and commercial lots. Call (402) 612-2373.",h1: "Land Clearing in Omaha",shortDescription: "Got a piece of land that's more of a jungle than a future home or business? Whether you're a homeowner with big backyard dreams or a developer ready to break ground, **A1 Junk Removal and Tree Service** can help you reclaim your property. We specialize in **land clearing Omaha**, turning overgrown lots into clean, usable spaces.",description: "Got a piece of land that's more of a jungle than a future home or business? Whether you're a homeowner with big backyard dreams or a developer ready to break ground, **A1 Junk Removal and Tree Service** can help you reclaim your property. We specialize in **land clearing Omaha**, turning overgrown lots into clean, usable spaces. We're proud to serve our neighbors in **La Vista** and **Bennington**. With **253+ five-star reviews** and prices **40-60% less than national companies**, you can trust us to get the job done right and affordably.",richContent: {sections: [{heading: "What Our Land Clearing Service Includes",bullets: ["Tree Removal: We safely and efficiently remove trees of all sizes.","Brush & Undergrowth: Thick brush and tangled undergrowth are no match for our equipment.","Stump Grinding: We grind down stumps to below the surface, leaving you with level ground.","Debris Hauling: All cleared material, from logs to rocks, is hauled away, leaving your lot spotless.","Site Preparation: We prepare your land for its next phase, whether it's construction, landscaping, or sale."]},{heading: "Need More Than Just Land Clearing?",body: "Once your land is cleared, you might find yourself with a pile of leftover construction debris, old fencing, or other junk. Our junk removal service can take care of that for you. We handle everything from single-item pickups to full property cleanouts, making sure your new space is truly ready for its fresh start. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."}]},relatedSlugs: ["tree-removal", "stump-grinding", "brush-yard-waste"],photoNeeded: "Clearing a wooded lot"},
    {
    slug: "shrub-hedge-trimming",
    title: "Shrub & Hedge Trimming Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["shrub trimming Omaha", "hedge trimming near me", "bush trimming service Omaha"],
    metaDescription: "Professional shrub and hedge trimming in Omaha, NE. A1 Junk Removal and Tree Service keeps your property looking its best. Call us at (402) 612-2373 for a free quote.",
    h1: "Shrub & Hedge Trimming in Omaha",
    shortDescription: "Overgrown shrubs and hedges can make your whole property look messy and unkempt. **A1 Junk Removal and Tree Service** is here to help, shaping up your bushes and trimming them back to keep your yard looking sharp.",
    description: "Overgrown shrubs and hedges can make your whole property look messy and unkempt. **A1 Junk Removal and Tree Service** is here to help, shaping up your bushes and trimming them back to keep your yard looking sharp. We provide professional **shrub and hedge trimming Omaha** and the surrounding areas, including **Gretna** and **Papillion**. With **253+ five-star reviews**, you can trust our team to do the job right. Plus, our services are often **40-60% less than national companies**.",
    richContent: [
    {
    heading: "Our Trimming & Pruning Services",
    bullets: [
    {
    label: "Hedge Shaping:",
    description: "We create clean lines and a uniform look for your hedges."
    },
    {
    label: "Shrub Pruning:",
    description: "We selectively remove branches to improve plant health and appearance."
    },
    {
    label: "Overgrowth Removal:",
    description: "We tame out-of-control shrubs and bushes that are taking over."
    },
    {
    label: "Seasonal Maintenance:",
    description: "We provide regular trimming to keep your plants healthy year-round."
    },
    {
    label: "Cleanup Included:",
    description: "We haul away all the clippings, leaving your property spotless."
    }
    ]
    },
    {
    heading: "Need More Than a Trim?",
    body: "After we’ve perfected your hedges, you might notice other parts of your yard that need attention. From old sheds and playsets to piles of branches and leaves, our junk removal services can clear out any unwanted clutter. We handle all the heavy lifting and disposal, so you don't have to. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week."
    }
    ],
    relatedSlugs: ["tree-trimming", "backyard-cleanup", "yard-waste-removal"],
    photoNeeded: "Trimming hedges along a property"
  },
  {
    slug: "brush-chipping",
    title: "Brush Chipping Omaha | A1 Junk Removal and Tree Service",
    category: "Tree Services",
    categorySlug: "tree-service",
    keywords: ["brush chipping Omaha", "wood chipping service Omaha", "branch chipping near me"],
    metaDescription: "Brush chipping services in Omaha. A1 Junk Removal and Tree Service converts branches and brush into mulch on-site. Call (402) 612-2373.",
    h1: "Brush Chipping in Omaha",
    shortDescription: "Instead of paying to haul away huge piles of branches, we can chip them on-site and leave you with usable mulch for your garden beds. If you need **brush chipping Omaha**, **A1 Junk Removal and Tree Service** brings the chipper to your property and turns the mess into something useful.",
    description: "Instead of paying to haul away huge piles of branches, we can chip them on-site and leave you with usable mulch for your garden beds. If you need **brush chipping Omaha**, **A1 Junk Removal and Tree Service** brings the chipper to your property and turns the mess into something useful. It's efficient, eco-friendly, and saves you money on buying mulch separately. We chip brush for homeowners and contractors across **Carter Lake** and **Council Bluffs** after storm cleanups, tree trimming jobs, and land clearing projects. With **253+ five-star reviews** and rates **40-60% less than national companies**, we're the most affordable chipping crew in the metro.",
    richContent: [
      {
        heading: "What We Chip",
        bullets: [
          "Tree Branches: Limbs up to 6 inches in diameter fed right through the chipper.",
          "Storm Debris: Broken branches and windfall from severe weather.",
          "Hedge & Shrub Trimmings: Turning bulky green waste into fine mulch.",
          "Land Clearing Brush: Processing large volumes of brush from lot clearing projects.",
          "Mulch Placement: We can spread the fresh chips in your beds or pile them where you want.",
        ],
      },
      {
        heading: "Pair With Tree Trimming",
        body: "Most brush chipping jobs go hand-in-hand with **tree trimming** or storm cleanup. We can trim your trees and chip the branches in the same visit — no need to schedule two crews. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["brush-yard-waste", "tree-trimming", "yard-waste-removal"],
    photoNeeded: "Wood chipper processing branches"
  },
];

// ─── EXPORT ALL CATEGORIES ───
// Only Tree Service and Landscaping remain as category-based service pages.
// Junk Removal services are now root-level pages managed by junkServicePages above.

export const serviceCategories: ServiceCategory[] = [
  { name: "Landscaping", slug: "landscaping", icon: "Flower2", services: landscaping },
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
export const HERO_JUNK_IMG = PLACEHOLDER_IMG; // PLACEHOLDER — needs real photo of A1 crew loading junk into truck (no old Omaha Haulers branding)
export const HERO_TREE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/hero-tree-service-UmVmNRfuSZSPDEMszC6Erg.webp";
export const ABOUT_TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/about-team-5CnSb6BqC2amPdwBrsQpdy.webp";
export const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/before-after-cleanout-CjUUq8Gg5ChWibYyz2iKd3.webp";
export const CTA_BG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/cta-background-jLoTddUiPykVuECHJ26hmF.webp";
