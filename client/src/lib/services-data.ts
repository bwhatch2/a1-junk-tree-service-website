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
    slug: "tire-removal",
    title: "Tire Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["tire removal Omaha", "tire removal near me", "tire removal Omaha NE"],
    metaDescription: "Tire Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Specialized Tire Removal Omaha NE",
    shortDescription: "Old tires are difficult to dispose of and can become breeding grounds for pests if left in your yard. When looking for **tire removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **tire removal Omaha**, handling everything from passenger tires to heavy equipment rubber.",
    description: "Old tires are difficult to dispose of and can become breeding grounds for pests if left in your yard. When looking for **tire removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **tire removal Omaha**, handling everything from passenger tires to heavy equipment rubber. Our commitment to environmental safety has earned us **253+ five-star reviews**. We keep our prices **40-60% less than national companies**, serving residents in **La Vista** and **Ralston**. We ensure all tires are taken to local recycling facilities for proper processing.",
    richContent: [
      {
        heading: "What\'s Included in Our Service",
        bullets: [
          "Passenger Car Tires: Quick hauling of standard rubber.",
          "Truck & SUV Tires: Managing larger, heavier tire sets.",
          "Rims & Wheels: We can haul tires with or without the metal rims.",
          "Bulk Tire Loads: Cleaning out properties with large tire piles.",
          "Responsible Recycling: Ensuring tires don\'t end up in local landfills.",
        ],
      },
      {
        heading: "Backyard Clearing",
        body: "If your tire pile was hidden under overgrown brush, we can also provide **tree service** to clear the vegetation and restore your lawn once the rubber is gone. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["scrap-metal-removal", "yard-waste-removal", "residential-junk-removal"],
    photoNeeded: "Photo needed for tire removal"
  },
  {
    slug: "bulk-waste-removal",
    title: "Bulk Waste Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["bulk waste removal Omaha", "bulk waste removal near me", "bulk waste removal Omaha NE"],
    metaDescription: "Bulk Waste Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Reliable Bulk Waste Removal Omaha NE",
    shortDescription: "Large volumes of waste from a move or a cleanout can\'t wait for your weekly trash day. If you need **bulk waste removal near me**, A1 is ready to help. We provide specialized **bulk waste removal Omaha**, taking everything from piles of trash bags to large renovation debris.",
    description: "Large volumes of waste from a move or a cleanout can\'t wait for your weekly trash day. If you need **bulk waste removal near me**, A1 is ready to help. We provide specialized **bulk waste removal Omaha**, taking everything from piles of trash bags to large renovation debris. Our local, owner-operated business has earned **253+ five-star reviews** by being the most responsive hauling service in town. We are **40-60% less than national companies**, serving families in **La Vista** and **Gretna**. We show up, load the waste, and ensure the area is sweep-clean before we leave.",
    richContent: [
      {
        heading: "Waste We Remove",
        bullets: [
          "Renovation Debris: Drywall, lumber, and flooring.",
          "Household Overload: Piles of boxes, clothing, and general junk.",
          "Yard Waste Piles: Large stacks of branches, logs, and brush.",
          "Estate Waste: Clearing out properties for sale or rent.",
          "Scrap Metal: Hauling away heavy metal components for recycling.",
        ],
      },
      {
        heading: "Enhance Your Property",
        body: "Once the bulk waste is gone, why not focus on the trees? We offer **tree service** to prune back limbs and improve the natural beauty and safety of your home\'s landscape. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["full-service-junk-removal", "residential-junk-removal", "waste-management-services"],
    photoNeeded: "Photo needed for bulk waste removal"
  },
  {
    slug: "hauling-services",
    title: "Hauling Services Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["hauling services Omaha", "hauling services near me", "hauling services Omaha NE"],
    metaDescription: "Hauling Services Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Best Hauling Services Omaha NE",
    shortDescription: "When projects get big, you need professional **hauling services near me** to keep things moving. A1 provides the muscle and equipment to clear the way for your next project. We provide **hauling services Omaha**, taking away heavy debris, junk, and yard waste for residential and commercial clients.",
    description: "When projects get big, you need professional **hauling services near me** to keep things moving. A1 provides the muscle and equipment to clear the way for your next project. We provide **hauling services Omaha**, taking away heavy debris, junk, and yard waste for residential and commercial clients. Our **253+ five-star reviews** reflect our commitment to being the hardest workers in the industry. Our local prices are **40-60% less than national companies**, and we serve homeowners in **Elkhorn** and **Papillion**. We handle the heavy lifting so you don\'t have to spend your weekend at the landfill.",
    richContent: [
      {
        heading: "What We Haul",
        bullets: [
          "Junk & Debris: Household items and general clutter.",
          "Construction Materials: Lumber, metal, and masonry waste.",
          "Yard Waste: Heavy logs, brush piles, and branches.",
          "Heavy Equipment: Dismantled structures and machinery.",
          "Scrap Metal: Responsible hauling for recycling.",
        ],
      },
      {
        heading: "Post-Hauling Landscape Support",
        body: "Many hauling projects are the result of yard work. We also offer **tree service** and trimming to help you manage your trees and prevent future yard waste from piling up. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["full-service-junk-removal", "trash-hauling", "residential-junk-removal"],
    photoNeeded: "Photo needed for hauling services"
  },
  {
    slug: "hauling-company",
    title: "Hauling Company Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["hauling company Omaha", "hauling company near me", "hauling company Omaha NE"],
    metaDescription: "Hauling Company Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Top-Rated Hauling Company Omaha NE",
    shortDescription: "When you need a **hauling company near me**, you need one with the right equipment and a crew that isn\'t afraid of a hard day\'s work. **A1 Junk Removal and Tree Service** is the premier **hauling company Omaha**, providing fast and affordable transportation for junk, debris, and heavy items.",
    description: "When you need a **hauling company near me**, you need one with the right equipment and a crew that isn\'t afraid of a hard day\'s work. **A1 Junk Removal and Tree Service** is the premier **hauling company Omaha**, providing fast and affordable transportation for junk, debris, and heavy items. We take pride in our **253+ five-star reviews** and our 7-day-a-week operation. Because we are locally owned, we are **40-60% less than national companies**. We serve the entire metro area, including **La Vista** and **Elkhorn**, ensuring your items are moved safely and efficiently.",
    richContent: [
      {
        heading: "Our Hauling Expertise",
        bullets: [
          "Junk & Debris Hauling: From single items to full truckloads.",
          "Construction Hauling: Removing heavy materials from job sites.",
          "Heavy Item Hauling: Pianos, hot tubs, and appliances.",
          "Yard Waste Hauling: Moving logs, brush, and yard debris.",
          "Commercial Hauling: Reliable service for offices and retail.",
        ],
      },
      {
        heading: "Tree and Haul Combo",
        body: "Many of our hauling jobs involve yard cleanup. We offer professional **tree service** to trim back your canopy and can haul away all the resulting wood in the same visit. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["full-service-junk-removal", "hauling-services", "residential-junk-removal"],
    photoNeeded: "Photo needed for hauling company"
  },
  {
    slug: "waste-hauling",
    title: "Waste Hauling Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["waste hauling Omaha", "waste hauling near me", "waste hauling Omaha NE"],
    metaDescription: "Waste Hauling Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Waste Hauling Omaha NE",
    shortDescription: "When your project creates more waste than your standard trash can handle, you need professional help. If you need **waste hauling near me**, A1 provides the muscle and the trucks. We provide **waste hauling Omaha**, specializing in large-scale residential and commercial debris removal.",
    description: "When your project creates more waste than your standard trash can handle, you need professional help. If you need **waste hauling near me**, A1 provides the muscle and the trucks. We provide **waste hauling Omaha**, specializing in large-scale residential and commercial debris removal. Our **253+ five-star reviews** show that we are Omaha\'s choice for reliable service. We are **40-60% less than national companies**, serving clients in **Elkhorn** and **Papillion**. We handle the heavy loading, the transport, and the disposal fees, so you don\'t have to.",
    richContent: [
      {
        heading: "Our Hauling Services",
        bullets: [
          "Residential Waste: Furniture, appliances, and general clutter.",
          "Construction Hauling: Remodeling debris and demolition waste.",
          "Yard Waste: Logs, branches, and brush.",
          "Commercial Hauling: Office furniture and retail debris.",
          "Specialized Hauling: Pianos, hot tubs, and heavy equipment.",
        ],
      },
      {
        heading: "Yard and Tree Management",
        body: "Overgrown vegetation is a common type of waste we haul. We can provide a full **tree service** to prune back limbs and clear out brush, hauling away all the resulting waste in one trip. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["trash-hauling", "waste-management-services", "residential-junk-removal"],
    photoNeeded: "Photo needed for waste hauling"
  },
  {
    slug: "trash-removal-alternative",
    title: "Trash Removal Alternative Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["trash removal alternative Omaha", "trash removal alternative near me", "trash removal alternative Omaha NE"],
    metaDescription: "Trash Removal Alternative Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Best Trash Removal Alternative Omaha NE",
    shortDescription: "Are you tired of being told \"no\" by your weekly trash company? If you have bulk items, construction waste, or massive piles of junk, we are the best **trash removal alternative near me**. We provide full-service **trash removal alternative Omaha**, picking up the heavy and oversized items that standard garbage trucks leave behind.",
    description: "Are you tired of being told \"no\" by your weekly trash company? If you have bulk items, construction waste, or massive piles of junk, we are the best **trash removal alternative near me**. We provide full-service **trash removal alternative Omaha**, picking up the heavy and oversized items that standard garbage trucks leave behind. With **253+ five-star reviews**, we pride ourselves on being more flexible and affordable than national franchises. Our rates are **40-60% less than national companies**, serving families in **Gretna** and **Bennington**. You don\'t have to drag your junk to the curb—we go right into the garage or backyard to get it.",
    richContent: [
      {
        heading: "Why Choose Our Service?",
        bullets: [
          "No Item Limits: We take the heavy and bulky items others won\'t.",
          "Inside Pickup: You don\'t have to move anything; we do the heavy lifting.",
          "Same-Day Service: We work 7 days a week to clear your space.",
          "Responsible Disposal: We prioritize recycling over the landfill.",
          "Signature Cleanup: We sweep up the area once the trash is gone.",
        ],
      },
      {
        heading: "Total Property Care",
        body: "If your trash pile is hidden behind overgrown vegetation, we can provide a **tree service** to prune back limbs and clear the area while we have our trucks on-site. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["trash-hauling", "residential-junk-removal", "full-service-junk-removal"],
    photoNeeded: "Photo needed for trash removal alternative"
  },
  {
    slug: "local-trash-removal-service",
    title: "Local Trash Removal Service Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["local trash removal service Omaha", "local trash removal service near me", "local trash removal service Omaha NE"],
    metaDescription: "Local Trash Removal Service Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Top-Rated Local Trash Removal Service Omaha",
    shortDescription: "When you choose a **local trash removal service near me**, you get faster response times and better pricing. **A1 Junk Removal and Tree Service** is a locally owned and operated business providing expert **local trash removal service Omaha NE**. We handle everything from basement cleanouts to storm debris removal.",
    description: "When you choose a **local trash removal service near me**, you get faster response times and better pricing. **A1 Junk Removal and Tree Service** is a locally owned and operated business providing expert **local trash removal service Omaha NE**. We handle everything from basement cleanouts to storm debris removal. Being local is why we have **253+ five-star reviews** and can offer prices **40-60% less than national companies**. We serve our neighbors in **Ralston** and **Council Bluffs** with a level of care that big franchises can\'t match. We don\'t just haul; we help you reclaim your home.",
    richContent: [
      {
        heading: "What We Offer",
        bullets: [
          "Bulk Waste Pickup: Furniture, appliances, and oversized trash.",
          "Household Debris: Clearing out boxes, clothing, and general junk.",
          "Construction Cleanup: Managing waste from home DIY projects.",
          "Yard Waste Hauling: Removing brush, logs, and branches.",
          "Commercial Trash Hauling: Reliable service for local businesses.",
        ],
      },
      {
        heading: "Support Your Local Canopy",
        body: "Since we are local, we understand Omaha\'s trees. We offer professional **tree service** and trimming to keep your property safe from Nebraska\'s high winds and ice storms. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["trash-hauling", "residential-junk-removal", "waste-management-services"],
    photoNeeded: "Photo needed for local trash removal service"
  },
  {
    slug: "best-trash-hauling",
    title: "Best Trash Hauling Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["best trash hauling Omaha", "best trash hauling near me", "best trash hauling Omaha NE"],
    metaDescription: "Best Trash Hauling Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Best Trash Hauling Omaha NE",
    shortDescription: "If you are looking for the **best trash hauling near me**, look for the company with the most local experience. We provide the **best trash hauling Omaha**, specializing in the removal of heavy, awkward, and high-volume waste that other companies find too difficult to handle.",
    description: "If you are looking for the **best trash hauling near me**, look for the company with the most local experience. We provide the **best trash hauling Omaha**, specializing in the removal of heavy, awkward, and high-volume waste that other companies find too difficult to handle. Our **253+ five-star reviews** are a testament to our \"can-do\" attitude. Our local operation is **40-60% less than national companies**, serving residents in **Carter Lake** and **Elkhorn**. We show up on time, load the junk, and leave your property looking brand new.",
    richContent: [
      {
        heading: "Why We Are the Best",
        bullets: [
          "Owner-Operated: You deal directly with the professionals who care.",
          "7-Day Availability: We work when you are home and ready.",
          "Transparent Pricing: No hidden fees or \"franchise\" upcharges.",
          "Heavy Lifting: We handle the basements, attics, and backyard piles.",
          "Thorough Cleanup: Our signature sweep-clean finish on every job.",
        ],
      },
      {
        heading: "Complete Yard Refresh",
        body: "A clean property doesn\'t stop at the driveway. We offer **tree service** to trim back overgrown limbs and improve your curb appeal while we are hauling your trash. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["trash-hauling", "full-service-junk-removal", "residential-junk-removal"],
    photoNeeded: "Photo needed for best trash hauling"
  },
  {
    slug: "commercial-waste-removal",
    title: "Commercial Waste Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["commercial waste removal Omaha", "commercial waste removal near me", "commercial waste removal Omaha NE"],
    metaDescription: "Commercial Waste Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Affordable Commercial Waste Removal Omaha NE",
    shortDescription: "Omaha businesses need a waste partner that is both reliable and cost-effective. If you are looking for **commercial waste removal near me**, we have the equipment to haul it away. We provide expert **commercial waste removal Omaha**, taking office furniture, retail debris, and warehouse waste.",
    description: "Omaha businesses need a waste partner that is both reliable and cost-effective. If you are looking for **commercial waste removal near me**, we have the equipment to haul it away. We provide expert **commercial waste removal Omaha**, taking office furniture, retail debris, and warehouse waste. Join our happy customers behind **253+ five-star reviews**. Being local means we are **40-60% less than national companies** and can often offer faster service in **Ralston** and **Council Bluffs**. We do the heavy loading so you can focus on running your business.",
    richContent: [
      {
        heading: "What\'s Included",
        bullets: [
          "Office Furniture Removal: Desks, chairs, and filing cabinets.",
          "Retail Debris Hauling: Shelving, displays, and cardboard.",
          "Warehouse Cleanouts: Removing pallets and industrial scrap.",
          "Property Management Support: Fast cleanouts for new tenants.",
          "Responsible Recycling: Prioritizing eco-friendly disposal for all materials.",
        ],
      },
      {
        heading: "Complete Property Care",
        body: "If your commercial property has overgrown trees blocking signage, we also offer professional **tree service** and trimming to keep your business looking its best. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["commercial-waste-management", "full-service-junk-removal", "construction-debris-removal"],
    photoNeeded: "Photo needed for commercial waste removal"
  },
  {
    slug: "bulky-item-removal",
    title: "Bulky Item Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["bulky item removal Omaha", "bulky item removal near me", "bulky item removal Omaha NE"],
    metaDescription: "Bulky Item Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Bulky Item Removal Omaha",
    shortDescription: "Standard trash pickup services often refuse to take heavy or oversized items. If you are looking for **bulky item removal near me**, **A1 Junk Removal and Tree Service** is your local expert. We provide **bulky item removal Omaha NE**, focusing on the safe hauling of the \"un-movables\" like hot tubs, pianos, and large safes.",
    description: "Standard trash pickup services often refuse to take heavy or oversized items. If you are looking for **bulky item removal near me**, **A1 Junk Removal and Tree Service** is your local expert. We provide **bulky item removal Omaha NE**, focusing on the safe hauling of the \"un-movables\" like hot tubs, pianos, and large safes. With **253+ five-star reviews**, we are Omaha\'s trusted choice for specialty hauling. Our local rates are **40-60% less than national companies**, serving neighbors in **Papillion** and **Bellevue**. We have the specialized dollies and ramps needed to move heavy items without damaging your property.",
    richContent: [
      {
        heading: "Bulky Items We Haul",
        bullets: [
          "Large Appliances: Commercial fridges, washers, and dryers.",
          "Heavy Exercise Gear: Treadmills, ellipticals, and weight racks.",
          "Outdoor Structures: Dismantled sheds, gazebos, and swing sets.",
          "Large Furniture: Sectionals, armoires, and sleeper sofas.",
          "Musical Instruments: Pianos and heavy console organs.",
        ],
      },
      {
        heading: "Total Site Cleanup",
        body: "If your bulky item removal is part of a larger yard cleanup, remember we also offer **tree service**. We can trim back overgrown limbs or haul away heavy logs while we are on-site with our heavy-duty equipment. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["full-service-junk-removal", "furniture-removal", "residential-junk-removal"],
    photoNeeded: "Photo needed for bulky item removal"
  },
  {
    slug: "haul-away-service",
    title: "Haul Away Service Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["haul away service Omaha", "haul away service near me", "haul away service Omaha NE"],
    metaDescription: "Haul Away Service Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Haul Away Service Omaha NE",
    shortDescription: "Whether you have a single appliance or a full truckload of debris, you need a **haul away service near me** that is fast and affordable. We provide **haul away service Omaha**, removing unwanted items from homes, offices, and yards throughout the metro area.",
    description: "Whether you have a single appliance or a full truckload of debris, you need a **haul away service near me** that is fast and affordable. We provide **haul away service Omaha**, removing unwanted items from homes, offices, and yards throughout the metro area. We take pride in our **253+ five-star reviews** and our 7-day-a-week availability. Because we are locally owned, we are **40-60% less than national companies**. We serve the entire metro area, including **Bennington** and **Council Bluffs**, making it easy to say goodbye to your junk.",
    richContent: [
      {
        heading: "Haul Away Services Include",
        bullets: [
          "Furniture Hauling: Removing couches, tables, and beds.",
          "Appliance Hauling: Taking away fridges, stoves, and washers.",
          "Construction Hauling: Managing wood, tile, and drywall waste.",
          "Yard Waste Hauling: Removing branches, brush, and logs.",
          "Final Site Sweep: We ensure no small debris is left on your property.",
        ],
      },
      {
        heading: "Complete Exterior Refresh",
        body: "After your junk is hauled away, consider a **tree service** update. We can prune back overhanging limbs to give your home a cleaner look and better curb appeal. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["full-service-junk-removal", "trash-hauling", "residential-junk-removal"],
    photoNeeded: "Photo needed for haul away service"
  },

  {
    slug: "residential-junk-removal",
    title: "Residential Junk Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["residential junk removal Omaha", "home junk removal", "house junk hauling"],
    metaDescription: "Need junk removed from your home in Omaha? A1 Junk Removal handles everything from single items to full house cleanouts. Call (402) 612-2373 for a free estimate.",
    h1: "Reliable Residential Junk Removal Omaha NE",
    shortDescription: "Is clutter taking over your home? If you are searching for **residential junk removal near me**, **A1 Junk Removal and Tree Service** helps you reclaim your space. We provide professional **residential junk removal Omaha**, clearing out garages, basements, and living spaces of all unwanted items.",
    description: "Is clutter taking over your home? If you are searching for **residential junk removal near me**, **A1 Junk Removal and Tree Service** helps you reclaim your space. We provide professional **residential junk removal Omaha**, clearing out garages, basements, and living spaces of all unwanted items. With **253+ five-star reviews**, we are Omaha\'s trusted residential hauling partner. Our local prices are **40-60% less than national companies**, and we serve neighbors in **Council Bluffs** and **Bellevue**. We treat your home with respect and ensure every job ends with a thorough cleanup.",
    richContent: [
          {
            heading: "What We Clear Out",
            bullets: [
              "Garage Clutter: Tools, old toys, and storage boxes.",
              "Basement Junk: Old furniture, exercise gear, and appliances.",
              "Attic Debris: Forgotten items and old holiday decor.",
              "Yard Junk: Broken outdoor furniture and old play sets.",
              "Kitchen & Bath Waste: Debris from home remodeling projects.",
            ],
          },
          {
            heading: "Enhance Your Home\'s Value",
            body: "A clean home is only half the battle. We offer **tree service** to improve your home\'s curb appeal, making sure your trees are pruned and your yard is debris-free. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["full-service-junk-removal", "house-cleanout", "garage-cleanout", "basement-cleanout"],
    photoNeeded: "Crew removing furniture from a residential home"
  },
  {
    slug: "full-service-junk-removal",
    title: "Full Service Junk Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["full service junk removal Omaha", "complete junk removal", "junk hauling service"],
    metaDescription: "A1 Junk Removal offers full-service junk removal in Omaha. We load, haul, and dispose of everything. Call (402) 612-2373 for your free estimate today.",
    h1: "Best Full Service Junk Removal Omaha NE",
    shortDescription: "Why lift heavy junk yourself when you can hire a professional team? If you are looking for **full service junk removal near me**, A1 is the total solution. We provide **full service junk removal Omaha**, meaning we do all the carrying, loading, and disposal—you just point to the junk you want gone.",
    description: "Why lift heavy junk yourself when you can hire a professional team? If you are looking for **full service junk removal near me**, A1 is the total solution. We provide **full service junk removal Omaha**, meaning we do all the carrying, loading, and disposal—you just point to the junk you want gone. Our **253+ five-star reviews** prove that we are the best choice for a stress-free cleanup. Our local rates are **40-60% less than national companies**, serving homeowners in **Bennington** and **Gretna**. We handle everything from the basement to the backyard.",
    richContent: [
          {
            heading: "What \"Full Service\" Means",
            bullets: [
              "Point-and-Go: You don\'t have to move items to the curb.",
              "Two-Man Crew: We bring the muscle for the heaviest items.",
              "Inside Pickup: We safely navigate your home\'s stairs and hallways.",
              "Responsible Disposal: Sorting for recycling and donations.",
              "Final Sweep: We leave your home or yard clean and debris-free.",
            ],
          },
          {
            heading: "Complete Property Care",
            body: "A clutter-free home deserves a great view. We also offer **tree service** and trimming to ensure your property\'s exterior is as organized and clean as your interior. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["residential-junk-removal", "declutter-service", "waste-management-services"],
    photoNeeded: "Crew loading a full truck with mixed household junk"
  },
  {
    slug: "attic-junk-removal",
    title: "Attic Junk Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["attic junk removal Omaha", "attic cleanout", "attic cleanup service"],
    metaDescription: "Attic full of old junk? A1 Junk Removal clears out attics across Omaha. We do the climbing and heavy lifting. Call (402) 612-2373.",
    h1: "Thorough Attic Junk Removal Omaha NE",
    shortDescription: "Attics are difficult to clean—they are hot, cramped, and involve steep stairs. If you need attic junk removal near me, let A1 handle the climb. We provide professional attic junk removal Omaha, navigating the tight spots to clear out decades of unwanted items.",
    description: "Attics are difficult to clean—they are hot, cramped, and involve steep stairs. If you need attic junk removal near me, let A1 handle the climb. We provide professional attic junk removal Omaha, navigating the tight spots to clear out decades of unwanted items. Our 253+ five-star reviews are a testament to our hard work. We charge 40-60% less than national companies and serve residents from Bennington to Bellevue. We treat your home with respect, ensuring we don\'t track mess through your living spaces.",
    richContent: [
      {
        heading: "What\'s Included",
        bullets: [
          "Full Removal: Taking everything from old holiday decor to heavy furniture.",
          "Safe Navigation: Carefully moving items down stairs and hallways.",
          "Insulation Debris: Cleaning up loose scraps and old materials.",
          "Dust Cleanup: We perform a final sweep of the attic floor.",
          "Responsible Disposal: Sorting items for donation or recycling.",
        ],
      },
      {
        heading: "Reclaim Your Storage",
        body: "Once your attic is empty, you might realize you have more to get rid of. We also offer junk removal for garages and basements to help you achieve a completely clutter-free home. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
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
    title: "Trash Hauling Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["trash hauling Omaha", "trash removal service", "garbage hauling"],
    metaDescription: "Need trash hauled away in Omaha? A1 Junk Removal handles residential and commercial trash hauling. Call (402) 612-2373 for a free estimate.",
    h1: "Affordable Trash Hauling Omaha NE",
    shortDescription: "Don\'t let trash pile up on your property. If you’ve been looking for **trash hauling near me**, **A1 Junk Removal and Tree Service** is the owner-operated choice you can trust. We provide **trash hauling Omaha**, specializing in the quick removal of household and commercial waste.",
    description: "Don\'t let trash pile up on your property. If you’ve been looking for **trash hauling near me**, **A1 Junk Removal and Tree Service** is the owner-operated choice you can trust. We provide **trash hauling Omaha**, specializing in the quick removal of household and commercial waste. Our **253+ five-star reviews** are a testament to our commitment to a clean finish. We charge **40-60% less than national companies**, and we serve clients throughout **La Vista** and **Elkhorn**. We do all the loading, so you can just point to the pile and watch it go.",
    richContent: [
          {
            heading: "What We Haul",
            bullets: [
              "General Household Waste: Bags of trash, old toys, and clutter.",
              "Estate Debris: Clearing out entire homes after a move or sale.",
              "Commercial Trash: Hauling away retail or office waste.",
              "Outdoor Junk: Removing trash piles from backyards and alleys.",
              "Appliance Disposal: Hauling away old metal and machines.",
            ],
          },
          {
            heading: "One-Stop Cleanup",
            body: "Need more than just trash hauled? We also offer **tree service** and yard waste removal, allowing you to clean up your home and your lawn in one single appointment. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["waste-management-services", "residential-junk-removal", "construction-debris-removal"],
    photoNeeded: "Truck loaded with bags of trash and debris"
  },
  {
    slug: "waste-management-services",
    title: "Waste Management Services Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["waste management Omaha", "waste removal service", "junk disposal"],
    metaDescription: "A1 Junk Removal provides waste management services in Omaha for homes and businesses. Eco-friendly disposal. Call (402) 612-2373.",
    h1: "Affordable Waste Management Services Omaha",
    shortDescription: "Standard weekly trash pickup often isn\'t enough for large projects or bulk waste. If you are looking for **waste management services near me**, A1 provides the extra muscle you need. We provide specialized **waste management services Omaha NE**, focusing on bulk hauling, construction waste, and large-scale property cleanups.",
    description: "Standard weekly trash pickup often isn\'t enough for large projects or bulk waste. If you are looking for **waste management services near me**, A1 provides the extra muscle you need. We provide specialized **waste management services Omaha NE**, focusing on bulk hauling, construction waste, and large-scale property cleanups. Our local, owner-operated team has earned **253+ five-star reviews** by being more flexible and affordable than the \"big guys.\" We are **40-60% less than national companies**, serving families in **Papillion** and **Bellevue**. We handle the waste that your regular trash company won\'t touch.",
    richContent: [
          {
            heading: "Our Waste Services",
            bullets: [
              "Bulk Item Pickup: Hauling away furniture and appliances.",
              "Construction Waste: Managing debris from home renovations.",
              "Yard Waste Management: Clearing logs, branches, and brush.",
              "Property Cleanups: One-time intensive waste removal for homes and offices.",
              "Responsible Disposal: We prioritize recycling and donation whenever possible.",
            ],
          },
          {
            heading: "Complete Property Care",
            body: "Effective waste management often involves the yard. We offer **tree service** to manage overgrown vegetation, ensuring your entire property remains clean, safe, and organized. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["trash-hauling", "commercial-waste-management", "full-service-junk-removal"],
    photoNeeded: "Sorting and recycling at disposal facility"
  },
  {
    slug: "residential-waste-removal",
    title: "Residential Waste Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["residential waste removal Omaha", "home waste pickup", "household waste disposal"],
    metaDescription: "Residential waste removal in Omaha by A1 Junk Removal. We handle household waste your regular trash service won't. Call (402) 612-2373.",
    h1: "Professional Residential Waste Removal Omaha",
    shortDescription: "When your household waste exceeds the capacity of your regular trash bin, you need a professional backup. If you need **residential waste removal near me**, A1 is ready to load. We provide **residential waste removal Omaha NE**, focusing on bulk waste, seasonal cleanups, and remodeling debris.",
    description: "When your household waste exceeds the capacity of your regular trash bin, you need a professional backup. If you need **residential waste removal near me**, A1 is ready to load. We provide **residential waste removal Omaha NE**, focusing on bulk waste, seasonal cleanups, and remodeling debris. Our **253+ five-star reviews** are a testament to our commitment to being the hardest workers in **Elkhorn** and **Papillion**. Our local rates are **40-60% less than national companies**, and we work around your schedule 7 days a week. We do the heavy lifting so you don\'t have to.",
    richContent: [
          {
            heading: "Residential Waste We Handle",
            bullets: [
              "Bulky Household Waste: Mattresses, sofas, and large appliances.",
              "Renovation Debris: Drywall, tile, and flooring waste.",
              "Bulk Yard Waste: Heavy piles of logs and branches.",
              "Estate Debris: Full-home waste removal for moves or sales.",
              "Seasonal Waste: Spring and fall cleanup debris.",
            ],
          },
          {
            heading: "Total Property Maintenance",
            body: "While we are clearing your residential waste, we can provide a **tree service** to trim back any overgrown limbs that are touching your roof or blocking your view. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["residential-junk-removal", "trash-hauling", "waste-management-services"],
    photoNeeded: "Crew loading household waste into truck"
  },
  {
    slug: "trash-out-service",
    title: "Trash Out Service Omaha | A1 Junk Removal and Tree Service",
    category: "Junk Removal & Hauling",
    categorySlug: "junk-removal",
    keywords: ["trash out service Omaha", "property trash out", "foreclosure cleanout"],
    metaDescription: "Professional trash out services in Omaha for property managers and banks. A1 Junk Removal clears properties fast. Call (402) 612-2373.",
    h1: "Reliable Trash Out Service Omaha NE",
    shortDescription: "Property managers and realtors know that a messy property won\'t sell or rent. When you need a **trash out service near me**, **A1 Junk Removal and Tree Service** is the reliable choice. We provide professional **trash out service Omaha**, clearing entire homes, apartments, and commercial spaces of debris left behind by former tenants.",
    description: "Property managers and realtors know that a messy property won\'t sell or rent. When you need a **trash out service near me**, **A1 Junk Removal and Tree Service** is the reliable choice. We provide professional **trash out service Omaha**, clearing entire homes, apartments, and commercial spaces of debris left behind by former tenants. Our **253+ five-star reviews** come from our commitment to speed and thoroughness. We charge **40-60% less than national companies**, serving the entire metro area, including **Carter Lake** and **Elkhorn**. We make the property \"move-in ready\" by hauling every piece of trash and sweeping every room.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Complete Debris Removal: Clearing all loose trash and abandoned items.",
              "Furniture & Appliance Hauling: Removing heavy items left behind.",
              "Closet & Cabinet Clearing: Ensuring no small trash is missed.",
              "Exterior Cleanup: Picking up trash from the yard and porches.",
              "Final Deep Sweep: Leaving the floors clear and ready for cleaners.",
            ],
          },
          {
            heading: "Curb Appeal Boost",
            body: "A clean interior needs a clean exterior. We offer **tree service** to trim back overgrown bushes and limbs that may be blocking the view of the property, helping it show better to potential tenants. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["property-cleanouts", "house-cleanout", "apartment-cleanouts"],
    photoNeeded: "Clearing out a trashed rental property"
  },
];

const cleanouts: ServiceItem[] = [
  {
    slug: "estate-cleanout",
    title: "Estate Clean Out Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanout",
    keywords: ["estate cleanout Omaha", "estate cleanout near me", "estate cleanout Omaha NE"],
    metaDescription: "Estate Clean Out Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Estate Clean Out Omaha",
    shortDescription: "Clearing an estate is a massive project that requires a specialized touch. If you need **estate clean out near me**, **A1 Junk Removal and Tree Service** is your local partner. We provide **estate clean out Omaha NE**, loading and hauling away everything from old furniture to basement storage.",
    description: "Clearing an estate is a massive project that requires a specialized touch. If you need **estate clean out near me**, **A1 Junk Removal and Tree Service** is your local partner. We provide **estate clean out Omaha NE**, loading and hauling away everything from old furniture to basement storage. With **253+ five-star reviews**, we are the preferred choice for Omaha families during times of transition. Our rates are **40-60% less than national companies**, serving clients in **Bellevue** and **Council Bluffs**. We do the heavy loading and final sweep, so the property is ready for whatever comes next.",
    richContent: [
      {
        heading: "What We Handle",
        bullets: [
          "Furniture & Antiques: Respectful removal of all household goods.",
          "Household Items: Clearing out kitchens, closets, and bathrooms.",
          "Storage Cleanouts: Emptying attics, basements, and garages.",
          "Exterior Clearing: Hauling away patio furniture and yard debris.",
          "Donation & Recycling: Sorting items to minimize landfill waste.",
        ],
      },
      {
        heading: "Total Project Cleanup",
        body: "If the estate property has been neglected, we can provide a **tree service** to clear away branches that are interfering with the home’s exterior, ensuring it shows well for prospective buyers. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["house-cleanout", "hoarder-cleanout", "property-cleanouts", "cleanout-services"],
    photoNeeded: "Photo needed for estate cleanout"
  },
  {
    slug: "property-cleanup",
    title: "Property Cleanup Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanout",
    keywords: ["property cleanup Omaha", "property cleanup near me", "property cleanup Omaha NE"],
    metaDescription: "Property Cleanup Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Thorough Property Cleanup Omaha NE",
    shortDescription: "Whether you are preparing a house for the market or cleaning up after a storm, a total property refresh is a big job. If you are looking for a **property cleanup near me**, A1 is the total solution. We provide specialized **property cleanup Omaha**, removing junk from the house and debris from the yard in one seamless visit.",
    description: "Whether you are preparing a house for the market or cleaning up after a storm, a total property refresh is a big job. If you are looking for a **property cleanup near me**, A1 is the total solution. We provide specialized **property cleanup Omaha**, removing junk from the house and debris from the yard in one seamless visit. Our commitment to a \"sweep-clean\" finish has earned us **253+ five-star reviews**. We keep our prices **40-60% less than national companies**, serving residents in **Gretna** and **Bennington**. We do the hard work of clearing the clutter so your property can look its best.",
    richContent: [
      {
        heading: "What\'s Included",
        bullets: [
          "Interior Junk Removal: Clearing garages, basements, and attics.",
          "Yard Waste Hauling: Removing piles of brush, logs, and leaves.",
          "Bulk Item Removal: Taking away old furniture and appliances.",
          "Fence Line Clearing: Removing overgrowth and trash from perimeters.",
          "Final Site Sweep: Ensuring the entire property is debris-free.",
        ],
      },
      {
        heading: "Total Landscape Care",
        body: "A clean property needs healthy trees. We offer professional **tree service** to prune back limbs and improve the safety and appearance of your home\'s exterior during your cleanup. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["property-cleanouts", "yard-waste-removal", "backyard-cleanup"],
    photoNeeded: "Photo needed for property cleanup"
  },
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
    title: "House Cleanout Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["house cleanout Omaha", "whole house cleanout", "estate cleanout service"],
    metaDescription: "Full house cleanout services in Omaha. A1 Junk Removal handles estate cleanouts, move-outs, and more. Call (402) 612-2373.",
    h1: "Safe House Cleanout Omaha NE",
    shortDescription: "Whether you are moving, downsizing, or dealing with a rental property, clearing out a whole house is overwhelming. When you need a **house cleanout near me**, A1 provides the trucks and manpower to finish the job in a single day. We provide **house cleanout Omaha**, ensuring all junk and unwanted items are removed and handled responsibly.",
    description: "Whether you are moving, downsizing, or dealing with a rental property, clearing out a whole house is overwhelming. When you need a **house cleanout near me**, A1 provides the trucks and manpower to finish the job in a single day. We provide **house cleanout Omaha**, ensuring all junk and unwanted items are removed and handled responsibly. Our **253+ five-star reviews** reflect our commitment to the Omaha community. We charge **40-60% less than national companies**, serving the metro from **Carter Lake** to **Elkhorn**. We take the stress out of moving by handling all the heavy lifting for you.",
    richContent: [
          {
            heading: "Items We Clear Out",
            bullets: [
              "Furniture & Bedding: Couches, mattresses, and bed frames.",
              "Kitchen & Bath Waste: Old appliances and remodeling debris.",
              "Attic & Basement Junk: Boxes, holiday decor, and forgotten items.",
              "Electronic Waste: TVs, monitors, and old computers.",
              "General Household Trash: Everything from the closets to the crawlspace.",
            ],
          },
          {
            heading: "Clear the View",
            body: "Once the house is empty, make sure the yard looks just as good. We also offer **tree service** to trim back overgrown limbs that may be blocking the natural light from your windows. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["apartment-cleanouts", "property-cleanouts", "hoarder-cleanout"],
    photoNeeded: "Crew clearing furniture from a house"
  },
  {
    slug: "cleanout-services",
    title: "Estate Cleanout Service Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["cleanout services Omaha", "property cleanout", "junk cleanout"],
    metaDescription: "Professional cleanout services in Omaha. A1 Junk Removal handles homes, apartments, garages, basements, and commercial properties. Call (402) 612-2373.",
    h1: "Affordable Estate Cleanout Service Omaha NE",
    shortDescription: "Managing the estate of a loved one is a difficult time. If you are looking for an **estate cleanout service near me**, we have the experience to handle the task with care. We provide expert **estate cleanout service Omaha**, taking away furniture, household goods, and years of accumulation.",
    description: "Managing the estate of a loved one is a difficult time. If you are looking for an **estate cleanout service near me**, we have the experience to handle the task with care. We provide expert **estate cleanout service Omaha**, taking away furniture, household goods, and years of accumulation. Join our happy customers behind **253+ five-star reviews**. Being local means we are **40-60% less than national companies** and can often offer faster service in **Ralston** and **Council Bluffs**. We do the heavy loading so you can focus on more important family matters.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Whole-House Hauling: Removal of all unwanted items from every room.",
              "Sorting Support: We help identify items for donation or disposal.",
              "Attic & Basement Clearing: Taking away the \"hidden\" junk.",
              "Garage & Shed Cleanouts: Removing tools and outdoor equipment.",
              "Final Property Sweep: We raked the area to remove bark and wood chips.",
            ],
          },
          {
            heading: "Complete Home Care",
            body: "If you have other properties that need attention, we also offer professional **tree service** and trimming to keep the curb appeal high for a potential sale. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
    title: "Hoarder Cleanout Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["hoarder cleanout Omaha", "hoarding cleanup", "hoarder house cleanout"],
    metaDescription: "Compassionate hoarder cleanout services in Omaha. A1 Junk Removal handles sensitive situations with care. Call (402) 612-2373.",
    h1: "Professional Hoarder Cleanout Omaha NE",
    shortDescription: "Removing years of accumulation in a hoarding situation requires patience and a heavy-duty truck. When looking for **hoarder cleanout near me**, you need a team with experience in high-volume debris removal. We provide full-service **hoarder cleanout Omaha**, handling everything from the sorting to the final sweep.",
    description: "Removing years of accumulation in a hoarding situation requires patience and a heavy-duty truck. When looking for **hoarder cleanout near me**, you need a team with experience in high-volume debris removal. We provide full-service **hoarder cleanout Omaha**, handling everything from the sorting to the final sweep. We are proud of our **253+ five-star reviews** and our local pricing, which is **40-60% less than national companies**. We’ve cleared homes for families from **Papillion** to **Bennington**, ensuring a clean and safe environment for your loved ones.",
    richContent: [
          {
            heading: "Our Hoarder Cleanout Process",
            bullets: [
              "Dismantling: Breaking down large furniture and units for removal.",
              "Sorting & Hauling: Separating trash from potentially salvageable items.",
              "Biohazard Safety: We handle the \"dirty\" jobs that standard companies won\'t.",
              "Heavy Loading: We haul away everything, including the \"hidden\" junk.",
              "Final Sweep: We leave your home clean, clear, and ready for rehab.",
            ],
          },
          {
            heading: "Beyond the House",
            body: "If your hoarding situation extends to the backyard, we also offer **tree service** to trim back any branches that have overgrown the property. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["house-cleanout", "cleanout-services", "full-service-junk-removal"],
    photoNeeded: "Compassionate cleanout of a cluttered space"
  },
  {
    slug: "property-cleanouts",
    title: "Property Clean Outs Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["property cleanout Omaha", "rental property cleanout", "commercial property cleanout"],
    metaDescription: "Property cleanout services in Omaha for landlords, managers, and real estate agents. A1 Junk Removal gets properties ready fast. Call (402) 612-2373.",
    h1: "Thorough Property Clean Outs Omaha NE",
    shortDescription: "Whether you are a landlord dealing with a tenant move-out or a homeowner preparing a house for sale, a full-scale cleanup is a massive job. When you need **property clean outs near me**, A1 is the most efficient choice. We provide professional **property clean outs Omaha**, clearing entire homes, yards, and garages of all unwanted debris.",
    description: "Whether you are a landlord dealing with a tenant move-out or a homeowner preparing a house for sale, a full-scale cleanup is a massive job. When you need **property clean outs near me**, A1 is the most efficient choice. We provide professional **property clean outs Omaha**, clearing entire homes, yards, and garages of all unwanted debris. Our commitment to a \"sweep-clean\" finish has earned us **253+ five-star reviews**. Our local model means we are **40-60% less than national companies**, and we serve clients throughout **Bellevue** and **La Vista**. We make the entire property \"show-ready\" in a fraction of the time it would take to do it yourself.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Interior Junk Removal: Clearing every room, closet, and crawlspace.",
              "Appliance & Furniture Hauling: Removing the big items left behind.",
              "Exterior Cleanup: Picking up trash and junk from the lawn and porch.",
              "Outbuilding Clearing: Emptying sheds, barns, and detached garages.",
              "Final Deep Sweep: We ensure the floors are clear for the next tenant or owner.",
            ],
          },
          {
            heading: "Curb Appeal Services",
            body: "A clean house needs a clean yard to sell. We offer **tree service** and trimming to ensure your property\'s exterior looks as pristine as the interior we just cleared. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["apartment-cleanouts", "trash-out-service", "house-cleanout"],
    photoNeeded: "Empty, clean rental property after cleanout"
  },
  {
    slug: "storage-unit-cleanouts",
    title: "Storage Unit Clean Outs Omaha | A1 Junk Removal and Tree Service",
    category: "Cleanout Services",
    categorySlug: "cleanouts",
    keywords: ["storage unit cleanout Omaha", "storage locker cleanout", "storage unit junk removal"],
    metaDescription: "Storage unit cleanout services in Omaha. Stop paying rent on junk you don't need. A1 Junk Removal clears it out. Call (402) 612-2373.",
    h1: "Thorough Storage Unit Clean Outs Omaha NE",
    shortDescription: "Stop paying monthly rent for items you no longer need. If you need **storage unit clean outs near me**, A1 provides the fastest and most affordable solution. We provide **storage unit clean outs Omaha**, handling the entire process from the unit to the dump so you don\'t have to.",
    description: "Stop paying monthly rent for items you no longer need. If you need **storage unit clean outs near me**, A1 provides the fastest and most affordable solution. We provide **storage unit clean outs Omaha**, handling the entire process from the unit to the dump so you don\'t have to. With **253+ five-star reviews**, we are Omaha\'s trusted choice for decluttering. Our local rates are **40-60% less than national companies**, and we serve all metro facilities, including those in **Ralston** and **Bennington**. We show up, load the junk, and leave the unit sweep-clean for your final inspection.",
    richContent: [
          {
            heading: "What We Handle",
            bullets: [
              "Furniture & Boxes: Hauling away years of stored household items.",
              "Electronics & Appliances: Responsible disposal of old tech and machines.",
              "Mattresses & Bedding: Quick removal of old sleep sets.",
              "General Trash: Clearing out loose debris and unwanted waste.",
              "Final Sweep: We ensure the unit is empty and ready for move-out.",
            ],
          },
          {
            heading: "Downsizing Support",
            body: "If you are moving items from storage back to your home, remember we also offer **junk removal** for your garage or basement to ensure you have plenty of room for the things you actually want to keep. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["cleanout-services", "residential-junk-removal", "declutter-service"],
    photoNeeded: "Clearing out a packed storage unit"
  },
];

const construction: ServiceItem[] = [
  {
    slug: "carpet-haul-away",
    title: "Carpet Haul Away Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["carpet haul away Omaha", "carpet haul away near me", "carpet haul away Omaha NE"],
    metaDescription: "Carpet Haul Away Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Carpet Haul Away Omaha NE",
    shortDescription: "Tearing out old carpet is one thing—getting it to the dump is another. If you need **carpet haul away near me**, A1 provides the muscle you need. We specialize in **carpet haul away Omaha**, taking down old wood, chain link, and vinyl fencing quickly and safely.",
    description: "Tearing out old carpet is one thing—getting it to the dump is another. If you need **carpet haul away near me**, A1 provides the muscle you need. We specialize in **carpet haul away Omaha**, taking down old wood, chain link, and vinyl fencing quickly and safely. We are proud of our **253+ five-star reviews** and our ability to offer rates **40-60% less than national companies**. We serve the entire metro area, including **Bellevue** and **La Vista**, helping you get your home ready for its new flooring installation.",
    richContent: [
      {
        heading: "What We Handle",
        bullets: [
          "Rolled Carpet: We load and haul heavy, bulky rolls.",
          "Old Padding: Removing the dusty, foam underlayment.",
          "Tack Strips & Scraps: Cleaning up the small, sharp remnants.",
          "Area Rugs: Hauling away large, heavy area rugs.",
          "Final Subfloor Sweep: Ensuring the room is clear of debris.",
        ],
      },
      {
        heading: "Clear the Way",
        body: "If your flooring project is part of a bigger renovation, we can provide a **tree service** to clear the perimeter of your home while we are on-site hauling away your old carpet. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["carpet-removal", "building-material-removal", "construction-debris-removal"],
    photoNeeded: "Photo needed for carpet haul away"
  },
  {
    slug: "concrete-hauling",
    title: "Concrete Hauling Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["concrete hauling Omaha", "concrete hauling near me", "concrete hauling Omaha NE"],
    metaDescription: "Concrete Hauling Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Fast Concrete Hauling Omaha",
    shortDescription: "Broken concrete is heavy, dangerous, and requires a heavy-duty truck to move. If you need **concrete hauling near me**, A1 is the most affordable choice. We provide **concrete hauling Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble.",
    description: "Broken concrete is heavy, dangerous, and requires a heavy-duty truck to move. If you need **concrete hauling near me**, A1 is the most affordable choice. We provide **concrete hauling Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble. Our local crew has earned **253+ five-star reviews** for being the hardest workers in town. Our prices are **40-60% less than national companies**, serving clients in **Carter Lake** and **Elkhorn**. We take the heavy weight off your property so you can finish your project.",
    richContent: [
      {
        heading: "What We Remove",
        bullets: [
          "Patio & Driveway Debris: Large, heavy concrete sections.",
          "Sidewalk Chunks: Smaller, manageable masonry pieces.",
          "Brick & Block Rubble: We haul away all types of masonry.",
          "Reinforced Concrete: Handling pieces with rebar or wire mesh.",
          "Final Site Sweep: We make sure no small pebbles or dust are left behind.",
        ],
      },
      {
        heading: "Exterior Renovation Help",
        body: "After the concrete is gone, we can help with **landscaping** debris removal to help you prep the site for new grass, a deck, or a garden. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["concrete-removal", "broken-concrete-haul-away", "concrete-patio-removal"],
    photoNeeded: "Photo needed for concrete hauling"
  },
  {
    slug: "debris-removal-service",
    title: "Debris Removal Service Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["debris removal service Omaha", "debris removal service near me", "debris removal service Omaha NE"],
    metaDescription: "Debris Removal Service Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Expert Debris Removal Service Omaha NE",
    shortDescription: "Whether it\'s from a storm, a renovation, or years of accumulation, debris can ruin your property\'s look. When you need a **debris removal service near me**, let A1 handle the labor. We provide comprehensive **debris removal service Omaha**, removing both organic yard waste and man-made junk in one visit.",
    description: "Whether it\'s from a storm, a renovation, or years of accumulation, debris can ruin your property\'s look. When you need a **debris removal service near me**, let A1 handle the labor. We provide comprehensive **debris removal service Omaha**, removing both organic yard waste and man-made junk in one visit. With **253+ five-star reviews**, we are Omaha’s top choice for a \"sweep-clean\" property. Our local rates are **40-60% less than national companies**, serving families in **Bellevue** and **La Vista**. We have the trucks and tools to handle the heavy piles so you don\'t have to.",
    richContent: [
      {
        heading: "Debris We Remove",
        bullets: [
          "Storm Debris: Fallen limbs, branches, and wind-blown trash.",
          "Renovation Waste: Old flooring, drywall, and cabinetry.",
          "Yard Waste: Piles of brush, grass, and logs.",
          "General Junk: Broken furniture and outdoor equipment.",
          "Responsible Disposal: Sorting for recycling and local composting.",
        ],
      },
      {
        heading: "Enhance Your Curb Appeal",
        body: "Once the debris is cleared, we can provide **tree service** to prune back overgrown branches, ensuring your entire property looks professional and well-maintained. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["construction-debris-removal", "storm-debris-removal", "yard-waste-removal"],
    photoNeeded: "Photo needed for debris removal service"
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["construction debris removal Omaha", "construction waste hauling", "job site cleanup"],
    metaDescription: "Construction debris removal in Omaha. A1 Junk Removal hauls away lumber, drywall, concrete, and more from your job site. Call (402) 612-2373.",
    h1: "Professional Construction Debris Removal Omaha NE",
    shortDescription: "Post-construction cleanup is a massive task that requires more than just a standard trash bin. If you are searching for **construction debris removal near me**, **A1 Junk Removal and Tree Service** provides the heavy-duty hauling you need. We provide **construction debris removal Omaha**, clearing out lumber, drywall, and masonry from job sites of all sizes.",
    description: "Post-construction cleanup is a massive task that requires more than just a standard trash bin. If you are searching for **construction debris removal near me**, **A1 Junk Removal and Tree Service** provides the heavy-duty hauling you need. We provide **construction debris removal Omaha**, clearing out lumber, drywall, and masonry from job sites of all sizes. Our local, owner-operated team has earned **253+ five-star reviews** by being the most reliable crew in the metro. Because we are local, our rates are **40-60% less than national companies**. Whether you are in **Elkhorn** or **Papillion**, we do the heavy loading so your crew can focus on the build.",
    richContent: [
          {
            heading: "Materials We Haul Away",
            bullets: [
              "Wood & Lumber: Plywood, 2x4s, and pressure-treated scraps.",
              "Drywall & Insulation: Sheetrock remnants and batting.",
              "Masonry Debris: Bricks, blocks, and concrete chunks.",
              "Roofing Materials: Shingles, felt, and flashing.",
              "Final Site Sweep: We pick up nails, screws, and small scraps for a safe finish.",
            ],
          },
          {
            heading: "Total Site Preparation",
            body: "If you are starting a new build, you may need the lot cleared. We offer professional **tree service** to remove trees or limbs that are in the way of your construction footprint. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
    title: "Concrete Hauling Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["concrete removal Omaha", "concrete hauling", "broken concrete removal"],
    metaDescription: "Concrete removal and hauling in Omaha. A1 Junk Removal handles driveways, patios, foundations, and more. Call (402) 612-2373.",
    h1: "Fast Concrete Hauling Omaha",
    shortDescription: "Broken concrete is heavy, dangerous, and requires a heavy-duty truck to move. If you need **concrete hauling near me**, A1 is the most affordable choice. We provide **concrete hauling Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble.",
    description: "Broken concrete is heavy, dangerous, and requires a heavy-duty truck to move. If you need **concrete hauling near me**, A1 is the most affordable choice. We provide **concrete hauling Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble. Our local crew has earned **253+ five-star reviews** for being the hardest workers in town. Our prices are **40-60% less than national companies**, serving clients in **Carter Lake** and **Elkhorn**. We take the heavy weight off your property so you can finish your project.",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Patio & Driveway Debris: Large, heavy concrete sections.",
              "Sidewalk Chunks: Smaller, manageable masonry pieces.",
              "Brick & Block Rubble: We haul away all types of masonry.",
              "Reinforced Concrete: Handling pieces with rebar or wire mesh.",
              "Final Site Sweep: We make sure no small pebbles or dust are left behind.",
            ],
          },
          {
            heading: "Exterior Renovation Help",
            body: "After the concrete is gone, we can help with **landscaping** debris removal to help you prep the site for new grass, a deck, or a garden. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["concrete-patio-removal", "broken-concrete-haul-away", "brick-block-concrete-removal"],
    photoNeeded: "Breaking up and removing concrete driveway"
  },
  {
    slug: "concrete-patio-removal",
    title: "Concrete Patio Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["concrete patio removal Omaha", "patio demolition", "patio removal service"],
    metaDescription: "Concrete patio removal in Omaha. A1 Junk Removal demolishes and hauls away old patios. Call (402) 612-2373 for a free estimate.",
    h1: "Affordable Concrete Patio Removal Omaha",
    shortDescription: "Tearing out concrete is back-breaking work. If you are looking for concrete patio removal near me, let the heavy-lifters at A1 handle it. We provide concrete patio removal Omaha NE, using professional equipment to break up slabs, walkways, and small driveways into manageable pieces.",
    description: "Tearing out concrete is back-breaking work. If you are looking for concrete patio removal near me, let the heavy-lifters at A1 handle it. We provide concrete patio removal Omaha NE, using professional equipment to break up slabs, walkways, and small driveways into manageable pieces. With 253+ five-star reviews, we are Omaha\'s trusted choice for demolition. Our local operation allows us to charge 40-60% less than national companies. Whether you are in Ralston or Council Bluffs, we show up on time and leave your yard clean.",
    richContent: [
      {
        heading: "Our Concrete Removal Process",
        bullets: [
          "Breaking: We use specialized tools to crack and segment the concrete.",
          "Loading: We haul away every heavy chunk—no curb-side piles left behind.",
          "Recycling: Concrete is taken to local recycling centers whenever possible.",
          "Sub-base Clearing: We remove any underlying sand or rock as requested.",
          "Final Sweep: We ensure the area is clear of small debris and gravel.",
        ],
      },
      {
        heading: "Complete Exterior Renovation",
        body: "After we remove the concrete, we can help with landscaping cleanup to prepare the area for new sod, a deck, or a fresh patio installation. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["concrete-removal", "deck-removal", "brick-block-concrete-removal"],
    photoNeeded: "Demolishing a concrete patio"
  },
  {
    slug: "broken-concrete-haul-away",
    title: "Broken Concrete Haul Away Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["broken concrete haul away Omaha", "concrete disposal", "concrete hauling service"],
    metaDescription: "Need broken concrete hauled away in Omaha? A1 Junk Removal picks up and disposes of concrete debris. Call (402) 612-2373.",
    h1: "Fast Broken Concrete Haul Away Omaha",
    shortDescription: "Leaving a pile of broken concrete in your driveway or yard is an eyesore and a hazard. If you need **broken concrete haul away near me**, A1 is the most affordable choice. We provide **broken concrete haul away Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble.",
    description: "Leaving a pile of broken concrete in your driveway or yard is an eyesore and a hazard. If you need **broken concrete haul away near me**, A1 is the most affordable choice. We provide **broken concrete haul away Omaha NE**, loading and removing old sidewalk chunks, patio pieces, and rubble. Our local crew has earned **253+ five-star reviews** for being the hardest workers in town. Our prices are **40-60% less than national companies**, serving clients in **Carter Lake** and **Elkhorn**. We take the heavy weight off your shoulders (and your property).",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Sidewalk & Path Debris: Small to medium concrete chunks.",
              "Patio Rubble: Reinforced or standard concrete pieces.",
              "Curb & Gutter Scraps: Heavy demolition debris.",
              "Brick & Paver Piles: We haul away old masonry as well.",
              "Final Site Sweep: We make sure no small pebbles or dust are left behind.",
            ],
          },
          {
            heading: "Exterior Renovation Help",
            body: "After the concrete is gone, we can help with **landscaping** debris removal to help you prep the site for new grass, a deck, or a garden. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["concrete-removal", "construction-debris-removal", "brick-block-concrete-removal"],
    photoNeeded: "Loading broken concrete chunks into truck"
  },
  {
    slug: "brick-block-concrete-removal",
    title: "Brick Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["brick removal Omaha", "block removal", "masonry demolition"],
    metaDescription: "Brick, block, and concrete removal in Omaha. A1 Junk Removal handles masonry demolition and hauling. Call (402) 612-2373.",
    h1: "Specialized Brick Removal Omaha NE",
    shortDescription: "Piles of old bricks are incredibly heavy and notoriously difficult to move without professional equipment. When you need **brick removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **brick removal Omaha**, handling everything from old chimneys to garden path debris.",
    description: "Piles of old bricks are incredibly heavy and notoriously difficult to move without professional equipment. When you need **brick removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **brick removal Omaha**, handling everything from old chimneys to garden path debris. Our commitment to quality has earned us **253+ five-star reviews**. We keep our prices **40-60% less than national companies**, serving residents in **La Vista** and **Ralston**. We use heavy-duty trailers and loaders to ensure the brick is removed without leaving a mess on your lawn.",
    richContent: [
          {
            heading: "What\'s Included in Our Service",
            bullets: [
              "Loose Brick Hauling: Loading and removing piles of old masonry.",
              "Brick Wall Demolition: Safe teardown of non-structural garden walls.",
              "Chimney Debris Removal: Hauling away brick and mortar from demo jobs.",
              "Responsible Disposal: Recycling brick for use in road base or fill.",
              "Final Area Sweep: We ensure no shards or dust are left behind.",
            ],
          },
          {
            heading: "Complete Home Clearing",
            body: "If you are clearing out a property after a renovation, we can also handle **junk removal** for the rest of the site, including scrap lumber, old drywall, and general construction waste. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["concrete-removal", "demolition-contractor", "construction-debris-removal"],
    photoNeeded: "Demolishing brick or block structure"
  },
  {
    slug: "building-material-removal",
    title: "Building Material Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["building material removal Omaha", "leftover building materials", "construction material disposal"],
    metaDescription: "Building material removal in Omaha. A1 Junk Removal hauls away leftover lumber, drywall, and more. Call (402) 612-2373.",
    h1: "Professional Building Material Removal Omaha NE",
    shortDescription: "Leftover supplies from a completed project or debris from a demolition can quickly clutter your property. If you are looking for **building material removal near me**, **A1 Junk Removal and Tree Service** provides fast, efficient hauling. We provide **building material removal Omaha**, taking everything from surplus lumber to heavy masonry.",
    description: "Leftover supplies from a completed project or debris from a demolition can quickly clutter your property. If you are looking for **building material removal near me**, **A1 Junk Removal and Tree Service** provides fast, efficient hauling. We provide **building material removal Omaha**, taking everything from surplus lumber to heavy masonry. Our local, owner-operated team has earned **253+ five-star reviews** by being the hardest workers in the metro. Our rates are consistently **40-60% less than national companies**, and we serve neighbors from **Elkhorn** to **Papillion**. We do the heavy loading so you don\'t have to worry about multiple trips to the landfill.",
    richContent: [
          {
            heading: "Materials We Haul Away",
            bullets: [
              "Lumber & Wood: Plywood, 2x4s, pressure-treated scraps, and pallets.",
              "Masonry & Stone: Bricks, blocks, pavers, and loose stone.",
              "Roofing Supplies: Leftover shingles, felt paper, and flashing.",
              "Siding & Trim: Vinyl, wood, or metal siding panels and trim.",
              "Windows & Doors: Old glass, frames, and heavy entry doors.",
            ],
          },
          {
            heading: "Site Preparation",
            body: "If you are clearing building materials to make room for a new structure, remember we also offer **tree service**. We can prune back overhanging limbs to ensure your new build has the clearance it needs. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["construction-debris-removal", "construction-waste-removal", "drywall-removal"],
    photoNeeded: "Pile of leftover building materials"
  },
  {
    slug: "deck-removal",
    title: "Deck Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["deck removal Omaha", "deck demolition", "old deck tear down"],
    metaDescription: "Deck removal and demolition in Omaha. A1 Junk Removal tears down and hauls away old decks. Call (402) 612-2373.",
    h1: "Professional Deck Removal Omaha NE",
    shortDescription: "Is your old wooden deck rotting or structurally unsound? Don\'t risk a fall—get deck removal near me from the pros. We specialize in deck removal Omaha, safely dismantling wood or composite decks of all sizes without damaging the siding or foundation of your home.",
    description: "Is your old wooden deck rotting or structurally unsound? Don\'t risk a fall—get deck removal near me from the pros. We specialize in deck removal Omaha, safely dismantling wood or composite decks of all sizes without damaging the siding or foundation of your home. We take pride in our 253+ five-star reviews and our ability to offer prices 40-60% less than national companies. We serve the entire metro, including Papillion and Bellevue, providing fast turnaround so you can get started on your new outdoor living space.",
    richContent: [
      {
        heading: "What\'s Included",
        bullets: [
          "Structural Dismantling: Taking apart the deck boards, joists, and railings.",
          "Post Removal: Pulling out wooden or metal support posts.",
          "Stair and Ramp Removal: Demolition of all attached access points.",
          "Hardware Disposal: We pick up all the screws, nails, and brackets.",
          "Area Sweep: We leave the ground beneath the old deck clean and ready.",
        ],
      },
      {
        heading: "Clear the View",
        body: "If your deck was surrounded by overgrown shrubs or trees, we can perform a tree service to prune back limbs and open up your backyard space while we have our trucks on-site. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
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
    title: "Barn Demolition Omaha | A1 Junk Removal and Tree Service",
    category: "Construction & Demolition",
    categorySlug: "construction",
    keywords: ["barn removal Omaha", "barn demolition", "old barn tear down"],
    metaDescription: "Barn removal and demolition in Omaha. A1 Junk Removal tears down old barns and hauls away debris. Call (402) 612-2373.",
    h1: "Full-Service Barn Demolition Omaha NE",
    shortDescription: "An old barn that is leaning or rotting is more than an eyesore—it’s a danger. When you need barn demolition near me, you need a crew that understands structural teardowns. We provide comprehensive barn demolition Omaha, handling everything from the initial collapse to the final site sweep.",
    description: "An old barn that is leaning or rotting is more than an eyesore—it’s a danger. When you need barn demolition near me, you need a crew that understands structural teardowns. We provide comprehensive barn demolition Omaha, handling everything from the initial collapse to the final site sweep. Our local team works for 40-60% less than national companies, and our commitment to service is reflected in our 253+ five-star reviews. We’ve cleared old outbuildings for residents from Gretna to Bennington, ensuring every piece of wood and metal is hauled away responsibly.",
    richContent: [
      {
        heading: "What We Remove",
        bullets: [
          "Traditional Wooden Barns: Full teardown and wood hauling.",
          "Metal Pole Barns: Scrap metal removal and site clearing.",
          "Lean-tos and Sheds: Small outbuilding demolition.",
          "Foundations: Clearing of debris around the base.",
          "Interior Junk: We can empty the barn before we tear it down.",
        ],
      },
      {
        heading: "One-Stop Cleanup",
        body: "Once the barn is gone, you might notice overgrown trees around the old site. We can provide tree service to clear the perimeter and make your new open space truly usable. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
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
    slug: "mattress-removal",
    title: "Mattress Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["mattress removal Omaha", "mattress removal near me", "mattress removal Omaha NE"],
    metaDescription: "Mattress Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Mattress Removal Omaha NE",
    shortDescription: "Trying to dispose of an old mattress is a hassle—most trash services won\'t take them at the curb. If you are looking for **mattress removal near me**, let **A1 Junk Removal and Tree Service** handle the loading and hauling. We provide specialized **mattress removal Omaha**, taking away old mattresses, box springs, and bed frames of all sizes.",
    description: "Trying to dispose of an old mattress is a hassle—most trash services won\'t take them at the curb. If you are looking for **mattress removal near me**, let **A1 Junk Removal and Tree Service** handle the loading and hauling. We provide specialized **mattress removal Omaha**, taking away old mattresses, box springs, and bed frames of all sizes. With **253+ five-star reviews**, we are known for our fast, same-day service. Because we are locally owned, our rates are **40-60% less than national companies**. Whether you are in **Elkhorn** or **Papillion**, we’ll carry the heavy mattress out of your bedroom so you don\'t have to lift a finger.",
    richContent: [
      {
        heading: "Sleep Systems We Remove",
        bullets: [
          "Standard Mattresses: Twin, Full, Queen, and King sizes.",
          "Box Springs: Single and split box spring sets.",
          "Memory Foam & Hybrid Beds: We handle the extra weight of high-density foam.",
          "Bed Frames: Metal rails, wooden headboards, and slats.",
          "Crib Mattresses: Safe removal of nursery bedding.",
        ],
      },
      {
        heading: "Complete Bedroom Refresh",
        body: "Clearing out a bedroom? We also offer full **junk removal** for old dressers, nightstands, and carpets, helping you prepare the room for a fresh coat of paint or new furniture. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["furniture-removal", "sleeper-sofa-removal", "hide-a-bed-removal"],
    photoNeeded: "Photo needed for mattress removal"
  },
  {
    slug: "dresser-removal",
    title: "Dresser Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["dresser removal Omaha", "dresser removal near me", "dresser removal Omaha NE"],
    metaDescription: "Dresser Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Dresser Removal Omaha NE",
    shortDescription: "Large dressers and armoires are notoriously difficult to navigate through tight hallways and stairs. If you are searching for **dresser removal near me**, let **A1 Junk Removal and Tree Service** handle the heavy lifting. We provide expert **dresser removal Omaha**, removing heavy bedroom furniture from any floor of your home.",
    description: "Large dressers and armoires are notoriously difficult to navigate through tight hallways and stairs. If you are searching for **dresser removal near me**, let **A1 Junk Removal and Tree Service** handle the heavy lifting. We provide expert **dresser removal Omaha**, removing heavy bedroom furniture from any floor of your home. Our owner-operated team has earned **253+ five-star reviews** for being the most careful crew in the metro. Because we are local, our rates are **40-60% less than national companies**. Whether you are in **Elkhorn** or **Papillion**, we’ll carry the heavy furniture out so you don\'t have to worry about floor scratches or wall dings.",
    richContent: [
      {
        heading: "Bedroom Furniture We Haul",
        bullets: [
          "Heavy Armoires: Safe dismantling and removal of large units.",
          "Chest of Drawers: Hauling tall and bulky bedroom storage.",
          "Vanities & Nightstands: Quick removal of all matching sets.",
          "Mirrors: Careful handling of glass-attached furniture.",
          "Final Sweep: We ensure the area is clean once the furniture is gone.",
        ],
      },
      {
        heading: "Complete Room Refresh",
        body: "Clearing out a bedroom? We also offer full **junk removal** for old mattresses, bed frames, and carpets, helping you get the room ready for a fresh look or a new tenant. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["furniture-removal", "sectional-couch-removal", "residential-junk-removal"],
    photoNeeded: "Photo needed for dresser removal"
  },
  {
    slug: "desk-removal",
    title: "Desk Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["desk removal Omaha", "desk removal near me", "desk removal Omaha NE"],
    metaDescription: "Desk Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Reliable Desk Removal Omaha NE",
    shortDescription: "Modern executive desks and heavy wooden workspaces are far too heavy for one person to move. When you need **desk removal near me**, let A1 provide the muscle. We provide professional **desk removal Omaha**, dismantling and hauling away office furniture from homes and commercial buildings alike.",
    description: "Modern executive desks and heavy wooden workspaces are far too heavy for one person to move. When you need **desk removal near me**, let A1 provide the muscle. We provide professional **desk removal Omaha**, dismantling and hauling away office furniture from homes and commercial buildings alike. With **253+ five-star reviews**, we are Omaha’s top-rated choice for office decluttering. Our local rates are **40-60% less than national companies**, serving families in **Bellevue** and **La Vista**. We work quickly to clear your office space so you can stay productive.",
    richContent: [
      {
        heading: "Office Items We Haul",
        bullets: [
          "Executive Desks: Dismantling and hauling large wooden units.",
          "L-Shaped & Corner Desks: Separating sections for safe removal.",
          "Metal Desks: Responsible recycling of old steel furniture.",
          "Computer Cubicles: Tearing down and hauling commercial partitions.",
          "Office Chairs & Filing Cabinets: Clearing out all your old office gear.",
        ],
      },
      {
        heading: "Yard and Office Clearing",
        body: "If a low-hanging tree limb is blocking the natural light in your home office, we offer **tree service** to lift your canopy while we are on-site hauling away your old desk. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["furniture-removal", "full-service-junk-removal", "residential-junk-removal"],
    photoNeeded: "Photo needed for desk removal"
  },
  {
    slug: "sofa-removal",
    title: "Sofa Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["sofa removal Omaha", "sofa removal near me", "sofa removal Omaha NE"],
    metaDescription: "Sofa Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Fast Sofa Removal Omaha NE",
    shortDescription: "Getting a large sofa out of a house can be a nightmare without the right team. If you’ve been searching for a **sofa removal near me**, let A1 handle the heavy lifting. We provide professional **sofa removal Omaha**, dismantling and hauling away couches, loveseats, and heavy recliners.",
    description: "Getting a large sofa out of a house can be a nightmare without the right team. If you’ve been searching for a **sofa removal near me**, let A1 handle the heavy lifting. We provide professional **sofa removal Omaha**, dismantling and hauling away couches, loveseats, and heavy recliners. Our local, owner-operated team has earned **253+ five-star reviews** for our fast and friendly service. We are **40-60% less than national companies**, serving homeowners in **Gretna** and **Papillion**. Don\'t risk your floors or walls—let us carry it out for you.",
    richContent: [
      {
        heading: "What\'s Included",
        bullets: [
          "Two-Man Lift: We bring the strength needed for oversized sofas.",
          "Stair Navigation: Expertly moving furniture through tight hallways.",
          "Full Hauling: Every piece is loaded and taken to a recycler or landfill.",
          "Final Floor Sweep: We pick up any debris or dust from where the sofa sat.",
          "Responsible Disposal: Sorting units that can be donated to local charities.",
        ],
      },
      {
        heading: "Total Room Cleanup",
        body: "Need to clear more than just the sofa? We also offer **junk removal** for old coffee tables, end tables, and carpets to get your living room back in shape. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["sectional-couch-removal", "furniture-removal", "hide-a-bed-removal"],
    photoNeeded: "Photo needed for sofa removal"
  },
  {
    slug: "couch-removal",
    title: "Couch Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["couch removal Omaha", "couch removal near me", "couch removal Omaha NE"],
    metaDescription: "Couch Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional Couch Removal Omaha NE",
    shortDescription: "Couches are bulky, heavy, and impossible to fit in a standard car. If you need **couch removal near me**, let the heavy-lifters at A1 do the work. We provide **couch removal Omaha**, taking sofas, loveseats, and recliners from any room in your home.",
    description: "Couches are bulky, heavy, and impossible to fit in a standard car. If you need **couch removal near me**, let the heavy-lifters at A1 do the work. We provide **couch removal Omaha**, taking sofas, loveseats, and recliners from any room in your home. Our **253+ five-star reviews** prove that we are the best choice for furniture hauling. We keep our prices **40-60% less than national companies**, serving families in **Council Bluffs** and **Bellevue**. We carry the couch out, load it up, and sweep the floor before we leave.",
    richContent: [
      {
        heading: "Couches We Remove",
        bullets: [
          "Standard Sofas: 3-seat couches and loveseats.",
          "Reclining Couches: Heavy metal-frame sofas.",
          "Sectionals: Dismantling and hauling multi-piece units.",
          "Sleeper Sofas: Managing the extra weight of pull-out beds.",
          "Futons & Daybeds: Removing frames and mattresses.",
        ],
      },
      {
        heading: "Complete Home Declutter",
        body: "Getting a new couch? We also offer **junk removal** for old coffee tables, rugs, and TVs so you can have a completely fresh start in your living room. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["sectional-couch-removal", "furniture-removal", "sleeper-sofa-removal"],
    photoNeeded: "Photo needed for couch removal"
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["appliance removal Omaha", "old appliance pickup", "appliance disposal"],
    metaDescription: "Appliance removal in Omaha. A1 Junk Removal picks up and disposes of refrigerators, washers, dryers, and more. Call (402) 612-2373.",
    h1: "Professional Appliance Removal Omaha NE",
    shortDescription: "Upgrading your kitchen or laundry room is exciting, but getting rid of the old machines is a heavy, awkward chore. If you are looking for **appliance removal near me**, **A1 Junk Removal and Tree Service** is the most reliable choice in the metro. We provide full-service **appliance removal Omaha**, taking everything from refrigerators and stoves to washers and dryers.",
    description: "Upgrading your kitchen or laundry room is exciting, but getting rid of the old machines is a heavy, awkward chore. If you are looking for **appliance removal near me**, **A1 Junk Removal and Tree Service** is the most reliable choice in the metro. We provide full-service **appliance removal Omaha**, taking everything from refrigerators and stoves to washers and dryers. With **253+ five-star reviews**, we have built a reputation for punctuality and fair pricing. Our local, owner-operated model allows us to charge **40-60% less than national companies**. Whether you are in **La Vista** or **Ralston**, we handle the heavy lifting and ensure your old appliances are recycled or disposed of responsibly.",
    richContent: [
          {
            heading: "Appliances We Haul Away",
            bullets: [
              "Refrigerators & Freezers: Full-size units, chest freezers, and wine fridges.",
              "Washers & Dryers: Top-load, front-load, and stackable units.",
              "Stoves & Ovens: Gas or electric ranges and wall ovens.",
              "Dishwashers: Removal from under-counter installations.",
              "Microwaves & Small Appliances: Toasters, blenders, and countertop ovens.",
            ],
          },
          {
            heading: "Complete Kitchen Updates",
            body: "If your appliance upgrade is part of a larger remodel, remember that we also offer **construction debris removal**. We can haul away old cabinetry, flooring, and backsplash tile while we have the truck on-site for your appliances. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["hvac-removal", "air-conditioner-disposal", "furniture-removal"],
    photoNeeded: "Hauling old refrigerator out of a home"
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["furniture removal Omaha", "old furniture pickup", "couch removal"],
    metaDescription: "Furniture removal in Omaha. A1 Junk Removal hauls away couches, beds, tables, and more. Call (402) 612-2373 for a free estimate.",
    h1: "Reliable Furniture Removal Omaha NE",
    shortDescription: "Don\'t risk a back injury trying to move heavy furniture on your own. If you are looking for **furniture removal near me**, A1 provides the professional muscle you need. We provide **furniture removal Omaha**, taking everything from massive armoires to heavy sectional sofas from any floor of your home.",
    description: "Don\'t risk a back injury trying to move heavy furniture on your own. If you are looking for **furniture removal near me**, A1 provides the professional muscle you need. We provide **furniture removal Omaha**, taking everything from massive armoires to heavy sectional sofas from any floor of your home. Our commitment to quality service has earned us **253+ five-star reviews**. We keep our prices **40-60% less than national companies**, serving residents in **Gretna** and **Bennington**. We use floor protection and careful techniques to ensure your home isn\'t damaged during the move.",
    richContent: [
          {
            heading: "Furniture We Haul",
            bullets: [
              "Living Room Sets: Couches, recliners, and entertainment centers.",
              "Bedroom Furniture: Mattresses, box springs, and dressers.",
              "Dining Sets: Large tables, hutches, and chairs.",
              "Office Furniture: Desks, file cabinets, and heavy chairs.",
              "Final Area Sweep: We sweep the area once the furniture is gone.",
            ],
          },
          {
            heading: "Complete Home Refresh",
            body: "Getting new furniture? We also offer **junk removal** for old carpets and electronics so you can have a completely empty, clean room for your new setup. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["sectional-couch-removal", "sleeper-sofa-removal", "hide-a-bed-removal"],
    photoNeeded: "Carrying old couch out of a house"
  },
  {
    slug: "hot-tub-removal",
    title: "Hot Tub & Spa Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["hot tub removal Omaha", "spa removal", "jacuzzi removal service"],
    metaDescription: "Hot tub and jacuzzi removal in Omaha. A1 Junk Removal dismantles and hauls away hot tubs. Call (402) 612-2373.",
    h1: "Hot Tub & Spa Removal in Omaha",
    shortDescription: "We dismantle and haul away hot tubs, jacuzzis, and spas — reclaim your deck or patio today.",
    description: "Is an old, broken, or eyesore hot tub taking up valuable space in your Omaha backyard? A1 Junk Removal and Tree Service specializes in the safe demolition and removal of hot tubs, jacuzzis, and spas. Don\'t risk injury or property damage trying to move a heavy spa yourself. Our experienced crew has the specialized tools—including saws and dollies—to dismantle and haul away your unit from anywhere on your property.",
    richContent: [
      {
        heading: "Why Choose A1 for Your Spa Removal?",
        bullets: [
          "40-60% Lower Rates: Why pay national franchise prices? We are a local, owner-operated company with significantly lower overhead.",
          "Full-Service Demolition: If your hot tub is built into a deck or surrounded by a gazebo, we handle the light demolition required to get it out.",
          "We Sweep Up: We don\'t just haul the tub. We clean the debris, leaves, and dirt left underneath so your patio is ready for something new.",
          "Tree & Brush Clearing: If overgrown branches are blocking the path to your spa, our tree service team can trim them back to ensure a smooth removal.",
        ],
      },
      {
        heading: "What We Remove",
        bullets: [
          "Above-ground hot tubs and portable spas",
          "In-deck jacuzzis and soaking tubs",
          "Old spa covers, pumps, and electrical components",
          "Surrounding structures (sheds, gazebos, or privacy fencing)",
        ],
      },
      {
        heading: "Get a Fast Estimate",
        body: "We serve the entire Omaha metro area, including Elkhorn, Papillion, and Bellevue. Call or text (402) 612-2373 for a free, no-obligation quote. We are available 7 days a week to make your junk disappear!",
      },
    ],
    relatedSlugs: ["spa-removal", "jacuzzi-removal", "pool-table-removal"],
    photoNeeded: "Dismantling and removing a hot tub"
  },
  {
    slug: "piano-removal",
    title: "Piano Removal Service Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["piano removal Omaha", "piano hauling", "old piano disposal"],
    metaDescription: "Piano removal in Omaha. A1 Junk Removal safely removes and hauls away old pianos. Call (402) 612-2373.",
    h1: "Expert Piano Removal Service Omaha NE",
    shortDescription: "Moving a piano is one of the most difficult and dangerous hauling tasks a homeowner can face. If you’ve been searching for a **piano removal service near me**, let the heavy-lifters at A1 handle it. We provide professional **piano removal service Omaha**, ensuring that your heavy upright, spinet, or digital piano is removed safely from your home.",
    description: "Moving a piano is one of the most difficult and dangerous hauling tasks a homeowner can face. If you’ve been searching for a **piano removal service near me**, let the heavy-lifters at A1 handle it. We provide professional **piano removal service Omaha**, ensuring that your heavy upright, spinet, or digital piano is removed safely from your home. We have maintained **253+ five-star reviews** because we treat your property with respect. Our local rates are **40-60% less than national companies**, and we serve clients throughout **Bellevue** and **Papillion**. Don’t risk a back injury or floor damage—let us make that old piano disappear.",
    richContent: [
          {
            heading: "Pianos and Instruments We Handle",
            bullets: [
              "Upright Pianos: Safe extraction from any room in the house.",
              "Spinet Pianos: Efficient removal of smaller upright models.",
              "Baby Grand Pianos: Specialized dismantling and hauling.",
              "Digital Pianos & Organs: Removal of heavy electronic consoles.",
              "Old Keyboards & Accessories: Hauling of benches, sheet music, and pedals.",
            ],
          },
          {
            heading: "More Than Just Pianos",
            body: "Clearing out a music room? We also offer full **junk removal** for old furniture, bookshelves, and electronics so you can completely transform your space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["organ-removal", "furniture-removal", "gym-equipment-removal"],
    photoNeeded: "Moving a piano out of a home"
  },
  {
    slug: "carpet-removal",
    title: "Carpet Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["carpet removal Omaha", "old carpet disposal", "carpet tear out"],
    metaDescription: "Carpet removal and disposal in Omaha. A1 Junk Removal tears out and hauls away old carpet. Call (402) 612-2373.",
    h1: "Reliable Carpet Removal Omaha NE",
    shortDescription: "Pulling up old, dusty carpet is a messy job that can trigger allergies and ruin your day. When you need **carpet removal near me**, let A1 handle the labor. We provide comprehensive **carpet removal Omaha**, taking away old rolls, padding, and tack strips from residential and commercial properties.",
    description: "Pulling up old, dusty carpet is a messy job that can trigger allergies and ruin your day. When you need **carpet removal near me**, let A1 handle the labor. We provide comprehensive **carpet removal Omaha**, taking away old rolls, padding, and tack strips from residential and commercial properties. Our commitment to clean service has earned us **253+ five-star reviews** in **Bellevue** and **La Vista**. Because we are locally owned, our rates are **40-60% less than national companies**. We don\'t just haul the rolls; we sweep the subfloor to ensure your home is ready for its new flooring installation.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Carpet Roll Hauling: Loading and disposing of heavy, bulky carpet rolls.",
              "Padding Disposal: Removing the old foam or felt padding.",
              "Tack Strip Removal: Safely pulling and disposing of sharp tack strips.",
              "Area Sweep: A thorough cleaning of the subfloor after removal.",
              "Responsible Disposal: Ensuring materials are taken to the proper waste facility.",
            ],
          },
          {
            heading: "Complete Room Refresh",
            body: "Upgrading your flooring is the perfect time to clear out old furniture. We offer **junk removal** for old sofas, tables, and desks, so you can have a completely empty room for your flooring installers. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["remodeling-debris-removal", "bathroom-demolition", "drywall-removal"],
    photoNeeded: "Tearing out old carpet"
  },
  {
    slug: "bathtub-removal",
    title: "Bathtub Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["bathtub removal Omaha", "old tub removal", "bathtub disposal"],
    metaDescription: "Bathtub removal in Omaha. A1 Junk Removal disconnects and hauls away old bathtubs. Call (402) 612-2373.",
    h1: "Professional Bathtub Removal Omaha",
    shortDescription: "Replacing an old tub is a major part of any bathroom remodel, but the demolition is incredibly messy. If you need **bathtub removal near me**, let A1 do the dirty work. We provide **bathtub removal Omaha NE**, specializing in the removal of heavy cast iron tubs, fiberglass inserts, and old clawfoot models.",
    description: "Replacing an old tub is a major part of any bathroom remodel, but the demolition is incredibly messy. If you need **bathtub removal near me**, let A1 do the dirty work. We provide **bathtub removal Omaha NE**, specializing in the removal of heavy cast iron tubs, fiberglass inserts, and old clawfoot models. Our team has earned **253+ five-star reviews** by being the hardest workers in the metro. Because we are local, we are **40-60% less than national companies**. Whether you are in **Papillion** or **La Vista**, we’ll break down and haul out that old tub so your plumber can get to work.",
    richContent: [
          {
            heading: "Tubs We Handle",
            bullets: [
              "Cast Iron Tubs: We use specialized tools to break and haul these heavy units.",
              "Fiberglass Enclosures: Cutting and removing large tub and shower inserts.",
              "Clawfoot Tubs: Careful removal of vintage or damaged cast iron pieces.",
              "Whirlpool & Jetted Tubs: Dismantling the shell and the electric motors.",
              "Surrounding Tile & Debris: We can haul the drywall and tile as well!",
            ],
          },
          {
            heading: "Post-Demo Cleanup",
            body: "Renovations often reveal other issues. If you have **construction debris** from your bathroom gut-job, we can haul away the vanity, toilet, and flooring in the same trip. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
    title: "Gym Equipment Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["gym equipment removal Omaha", "treadmill removal", "exercise equipment disposal"],
    metaDescription: "Gym equipment removal in Omaha. A1 Junk Removal hauls away treadmills, weight machines, and more. Call (402) 612-2373.",
    h1: "Professional Gym Equipment Removal Omaha",
    shortDescription: "Whether it\'s a single weight bench or a full commercial gym setup, moving fitness gear is a heavy job. If you’re searching for **gym equipment removal near me**, **A1 Junk Removal and Tree Service** is ready to load. We provide **gym equipment removal Omaha NE**, handling everything from metal plates to motorized machines.",
    description: "Whether it\'s a single weight bench or a full commercial gym setup, moving fitness gear is a heavy job. If you’re searching for **gym equipment removal near me**, **A1 Junk Removal and Tree Service** is ready to load. We provide **gym equipment removal Omaha NE**, handling everything from metal plates to motorized machines. Our **253+ five-star reviews** prove that we are the best choice for heavy hauling in **Ralston** and **Bennington**. Our local rates are **40-60% less than national companies**, and we work around your schedule. We do the heavy lifting so you don\'t have to risk a gym injury at home!",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Free Weights & Dumbbells: We haul away those heavy iron plates.",
              "Squat Racks & Power Cages: Dismantling large metal frames.",
              "Rowing Machines: Safe removal of long-frame cardio gear.",
              "Yoga & Pilates Equipment: Mats, reformers, and accessories.",
              "Boxing Gear: Heavy bags, stands, and mats.",
            ],
          },
          {
            heading: "Complete Home Clearing",
            body: "If you’re clearing out a basement or garage gym, we can also provide **junk removal** for any other clutter, scrap metal, or trash in the area to give you a fresh start. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["treadmill-removal", "furniture-removal", "basement-cleanout"],
    photoNeeded: "Removing exercise equipment from basement"
  },
  {
    slug: "treadmill-removal",
    title: "Treadmill Removal Service Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["treadmill removal Omaha", "treadmill disposal", "treadmill hauling"],
    metaDescription: "Treadmill removal in Omaha. A1 Junk Removal picks up and hauls away old treadmills. Call (402) 612-2373.",
    h1: "Expert Treadmill Removal Service Omaha NE",
    shortDescription: "Treadmills are heavy, awkward, and often stuck in basements. If you are looking for a **treadmill removal service near me**, A1 provides the professional strength required. We provide **treadmill removal service Omaha**, dismantling and hauling away your old, broken, or unused gym equipment.",
    description: "Treadmills are heavy, awkward, and often stuck in basements. If you are looking for a **treadmill removal service near me**, A1 provides the professional strength required. We provide **treadmill removal service Omaha**, dismantling and hauling away your old, broken, or unused gym equipment. Join our happy customers who have left **253+ five-star reviews**. Being local means we charge **40-60% less than national companies** and can serve residents in **Elkhorn** and **Gretna** quickly. We make sure that old fitness goal doesn\'t weigh down your home anymore.",
    richContent: [
          {
            heading: "Gym Equipment We Haul",
            bullets: [
              "Standard Treadmills: Manual or motorized units.",
              "Elliptical Machines: Dismantling the arms and heavy frames.",
              "Exercise Bikes: Upright, recumbent, and spin bikes.",
              "Weight Benches & Racks: Metal frames and heavy weight plates.",
              "Home Gym Systems: Multi-station cable machines and benches.",
            ],
          },
          {
            heading: "Reclaim Your Spare Room",
            body: "Now that your gym equipment is gone, we can help with **landscaping** debris removal outside to make sure your home\'s exterior looks as spacious as your newly cleared room. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["gym-equipment-removal", "furniture-removal", "appliance-removal"],
    photoNeeded: "Moving a treadmill out of a home"
  },
  {
    slug: "pool-table-removal",
    title: "Pool Table Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["pool table removal Omaha", "billiard table removal", "pool table disposal"],
    metaDescription: "Pool table removal in Omaha. A1 Junk Removal disassembles and hauls away old pool tables. Call (402) 612-2373.",
    h1: "Professional Pool Table Removal Omaha",
    shortDescription: "Getting rid of an old pool table is a massive undertaking due to the heavy slate slabs and bulky frame. If you are looking for **pool table removal near me**, A1 provides the muscle and tools needed. We offer expert **pool table removal Omaha NE**, dismantling the table and hauling away every heavy piece.",
    description: "Getting rid of an old pool table is a massive undertaking due to the heavy slate slabs and bulky frame. If you are looking for **pool table removal near me**, A1 provides the muscle and tools needed. We offer expert **pool table removal Omaha NE**, dismantling the table and hauling away every heavy piece. With **253+ five-star reviews**, we are Omaha’s trusted choice for heavy item removal. Our local operation is **40-60% less than national companies**, and we serve all surrounding areas including **Council Bluffs** and **Carter Lake**. We make the \"impossible\" move look easy.",
    richContent: [
          {
            heading: "Our Pool Table Process",
            bullets: [
              "Felt & Rail Removal: Carefully stripping the table for teardown.",
              "Slate Dismantling: Breaking down and hauling the heavy stone slabs.",
              "Frame Demolition: Cutting or unscrewing the wooden or metal frame.",
              "Leg & Accessory Hauling: Removing the legs, balls, cues, and racks.",
              "Floor Cleanup: A final sweep to ensure no slate dust or screws remain.",
            ],
          },
          {
            heading: "Reclaim Your Basement",
            body: "Now that your game room is empty, we can help with **landscaping** debris removal outside to make sure the exterior of your home looks as good as your newly cleared interior. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["piano-removal", "furniture-removal", "basement-cleanout"],
    photoNeeded: "Disassembling a pool table"
  },
  {
    slug: "swing-set-removal",
    title: "Swing Set Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["swing set removal Omaha", "play set removal", "playground equipment removal"],
    metaDescription: "Swing set and play set removal in Omaha. A1 Junk Removal tears down and hauls away old playground equipment. Call (402) 612-2373.",
    h1: "Reliable Swing Set Removal Omaha NE",
    shortDescription: "Has your kids\' old play set become an eyesore or a rust-covered hazard? When you need **swing set removal near me**, we are ready to help. We provide full-service **swing set removal Omaha**, tearing down wooden, metal, and plastic playsets of all sizes.",
    description: "Has your kids\' old play set become an eyesore or a rust-covered hazard? When you need **swing set removal near me**, we are ready to help. We provide full-service **swing set removal Omaha**, tearing down wooden, metal, and plastic playsets of all sizes. Our customers have given us **253+ five-star reviews** because we leave yards looking better than we found them. Our prices are **40-60% less than national companies**, and we serve families in **Bennington** and **Elkhorn**. We handle the unscrewing, cutting, and heavy lifting so you don\'t have to.",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Wooden Playsets: Demolition of forts, towers, and swings.",
              "Metal Swing Sets: Cutting and hauling of rusted frames.",
              "Plastic Slides & Accessories: Quick removal of all play components.",
              "Rubber Mulch & Borders: Optional clearing of the play area base.",
              "Trampolines: We can dismantle and haul these as well!",
            ],
          },
          {
            heading: "Backyard Transformation",
            body: "Once the swing set is out, we can provide **tree service** to trim back any low-hanging limbs that were once touching the play structure, giving you a wide-open lawn. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["trampoline-removal", "basketball-hoop-removal", "backyard-cleanup"],
    photoNeeded: "Tearing down an old swing set"
  },
  {
    slug: "trampoline-removal",
    title: "Trampoline Removal Service Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["trampoline removal Omaha", "old trampoline disposal", "trampoline hauling"],
    metaDescription: "Trampoline removal in Omaha. A1 Junk Removal disassembles and hauls away old trampolines. Call (402) 612-2373.",
    h1: "Fast Trampoline Removal Service Omaha NE",
    shortDescription: "A broken or unused trampoline is a major safety risk in high-wind states like Nebraska. If you’ve been searching for a **trampoline removal service near me**, let A1 handle the dirty work. We provide professional **trampoline removal service Omaha**, dismantling the springs, mat, and heavy metal frame.",
    description: "A broken or unused trampoline is a major safety risk in high-wind states like Nebraska. If you’ve been searching for a **trampoline removal service near me**, let A1 handle the dirty work. We provide professional **trampoline removal service Omaha**, dismantling the springs, mat, and heavy metal frame. Our local, owner-operated team has earned **253+ five-star reviews** for our fast and friendly service. We are **40-60% less than national companies**, serving homeowners in **Gretna** and **Papillion**. Don\'t let your trampoline become a \"flying hazard\" in the next storm—call us today.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Safety Net Removal: Cutting away old nets and padding.",
              "Spring & Mat Dismantling: Safe removal of all tension components.",
              "Frame Cutting: We use specialized tools to break down the steel frame.",
              "Full Hauling: Every piece is loaded and taken to a recycler.",
              "Area Sweep: We pick up any dropped springs or hardware from your lawn.",
            ],
          },
          {
            heading: "Total Yard Cleanup",
            body: "Need to clear more than just the trampoline? We also offer **landscaping** waste removal for old brush, logs, and yard debris to get your backyard back in shape. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["swing-set-removal", "basketball-hoop-removal", "backyard-cleanup"],
    photoNeeded: "Disassembling an old trampoline"
  },
  {
    slug: "hvac-removal",
    title: "HVAC Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["HVAC removal Omaha", "old furnace removal", "AC unit disposal"],
    metaDescription: "HVAC removal in Omaha. A1 Junk Removal hauls away old furnaces, AC units, and HVAC equipment. Call (402) 612-2373.",
    h1: "Professional HVAC Removal Omaha NE",
    shortDescription: "Removing an old furnace, boiler, or A/C unit is a heavy and complex task. If you need **HVAC removal near me**, let A1 handle the heavy lifting. We provide specialized **HVAC removal Omaha**, taking away old heating and cooling systems from basements, attics, and outdoor pads.",
    description: "Removing an old furnace, boiler, or A/C unit is a heavy and complex task. If you need **HVAC removal near me**, let A1 handle the heavy lifting. We provide specialized **HVAC removal Omaha**, taking away old heating and cooling systems from basements, attics, and outdoor pads. We have maintained **253+ five-star reviews** because we treat your home with care. Our local rates are **40-60% less than national companies**, and we serve clients throughout **La Vista** and **Elkhorn**. We ensure that all heavy metal components are recycled properly, saving you the trip to the scrap yard.",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Furnaces & Boilers: Hauling away heavy indoor heating units.",
              "Central Air Units: Removing outdoor condensers and coils.",
              "Ductwork & Vents: Clearing out old metal or flexible ducting.",
              "Water Heaters: Removing old tanks from basements or closets.",
              "Thermostats & Controls: Responsible disposal of old electrical components.",
            ],
          },
          {
            heading: "Improve System Efficiency",
            body: "If your new outdoor unit is being crowded by trees, we can provide a **tree service** to clear a 3-foot radius around your HVAC system, ensuring it has the airflow it needs to run efficiently. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["air-conditioner-disposal", "appliance-removal", "scrap-metal-removal"],
    photoNeeded: "Removing old HVAC equipment"
  },
  {
    slug: "air-conditioner-disposal",
    title: "Air Conditioner Disposal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["air conditioner disposal Omaha", "AC removal", "window unit disposal"],
    metaDescription: "Air conditioner disposal in Omaha. A1 Junk Removal properly disposes of old AC units. Call (402) 612-2373.",
    h1: "Safe Air Conditioner Disposal Omaha NE",
    shortDescription: "Disposing of an old A/C unit requires care due to the refrigerants and heavy metal components. If you are looking for **air conditioner disposal near me**, **A1 Junk Removal and Tree Service** is the local expert. We provide **air conditioner disposal Omaha**, taking window units, portable units, and central air components.",
    description: "Disposing of an old A/C unit requires care due to the refrigerants and heavy metal components. If you are looking for **air conditioner disposal near me**, **A1 Junk Removal and Tree Service** is the local expert. We provide **air conditioner disposal Omaha**, taking window units, portable units, and central air components. With **253+ five-star reviews**, we are Omaha\'s choice for responsible hauling. Our local business model keeps us **40-60% less than national companies**. We serve all surrounding areas, including **Carter Lake** and **Elkhorn**, ensuring your old cooling units don\'t end up in a ditch.",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Window A/C Units: Safe removal from the window frame and hauling.",
              "Portable Air Conditioners: Taking the unit and the venting hoses.",
              "Central Air Condensers: Hauling away the heavy outdoor unit.",
              "Dehumidifiers: Removing smaller cooling and moisture-control units.",
              "HVAC Scrap: Hauling away old ducting and metal components.",
            ],
          },
          {
            heading: "Improve Your Home\'s Airflow",
            body: "If an overgrown tree is blocking your outdoor A/C unit\'s airflow, we can provide a **tree service** to trim back branches and help your new cooling system run more efficiently. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["hvac-removal", "appliance-removal", "scrap-metal-removal"],
    photoNeeded: "Removing an old AC unit"
  },
  {
    slug: "scrap-metal-removal",
    title: "Scrap Metal Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["scrap metal removal Omaha", "metal hauling", "scrap metal pickup"],
    metaDescription: "Scrap metal removal and hauling in Omaha. A1 Junk Removal picks up and recycles scrap metal. Call (402) 612-2373.",
    h1: "Professional Scrap Metal Removal Omaha",
    shortDescription: "Piles of old metal are heavy, sharp, and difficult to transport without a truck. If you are searching for **scrap metal removal near me**, A1 makes it easy. We provide **scrap metal removal Omaha NE**, hauling away everything from old appliances to aluminum siding and iron fencing.",
    description: "Piles of old metal are heavy, sharp, and difficult to transport without a truck. If you are searching for **scrap metal removal near me**, A1 makes it easy. We provide **scrap metal removal Omaha NE**, hauling away everything from old appliances to aluminum siding and iron fencing. We are proud of our **253+ five-star reviews** and our 7-day-a-week service. Our local prices are **40-60% less than national companies**, serving families from **Gretna** to **Council Bluffs**. We ensure all metal is taken to local recycling centers to help keep Omaha green.",
    richContent: [
          {
            heading: "Metals We Remove",
            bullets: [
              "Appliances: Stoves, washers, and dryers.",
              "Automotive Scraps: Old parts, rims, and frames.",
              "Fencing & Gates: Chain link, iron rails, and metal posts.",
              "Construction Metal: Gutters, flashing, and metal studs.",
              "Miscellaneous: Bicycles, lawnmowers, and metal shelving.",
            ],
          },
          {
            heading: "Reclaim Your Garage",
            body: "If your scrap metal pile is hidden under overgrown trees or bushes, we can provide a **tree service** to clear the area while we are on-site hauling away your metal. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["appliance-removal", "old-fencing-removal", "hvac-removal"],
    photoNeeded: "Loading scrap metal into truck"
  },
  {
    slug: "sectional-couch-removal",
    title: "Sectional Couch Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["sectional couch removal Omaha", "sectional sofa disposal", "large couch removal"],
    metaDescription: "Sectional couch removal in Omaha. A1 Junk Removal hauls away large sectional sofas. Call (402) 612-2373.",
    h1: "Professional Sectional Couch Removal Omaha",
    shortDescription: "Sectionals are great for seating but a nightmare to move or dispose of. If you are searching for **sectional couch removal near me**, A1 makes it easy. We provide **sectional couch removal Omaha NE**, dismantling the pieces and hauling them out of your home without you having to lift a finger.",
    description: "Sectionals are great for seating but a nightmare to move or dispose of. If you are searching for **sectional couch removal near me**, A1 makes it easy. We provide **sectional couch removal Omaha NE**, dismantling the pieces and hauling them out of your home without you having to lift a finger. We are proud of our **253+ five-star reviews** and our 7-day availability. Our local prices are **40-60% less than national companies**, serving families from **Elkhorn** to **Papillion**. Whether it\'s a 3-piece L-shape or a massive U-shaped unit with recliners, we’ll make it disappear.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Multi-Piece Dismantling: We separate the sections for safe removal.",
              "Heavy Recliner Removal: Hauling sectional pieces with heavy metal frames.",
              "Upstairs/Downstairs Extraction: Navigating tight hallways and stairs.",
              "Responsible Disposal: Taking the unit to a proper disposal or recycling site.",
              "Area Sweep: We sweep up the dust and loose change left behind!",
            ],
          },
          {
            heading: "Refresh Your Home",
            body: "Now that the old couch is gone, you might notice your yard needs a refresh too. We offer **tree service** and trimming to improve your home\'s curb appeal while we\'re in the neighborhood. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["sleeper-sofa-removal", "hide-a-bed-removal", "furniture-removal"],
    photoNeeded: "Moving a large sectional couch"
  },
  {
    slug: "sleeper-sofa-removal",
    title: "Sleeper Sofa Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["sleeper sofa removal Omaha", "pull out couch removal", "sofa bed disposal"],
    metaDescription: "Sleeper sofa removal in Omaha. A1 Junk Removal hauls away heavy pull-out couches. Call (402) 612-2373.",
    h1: "Heavy Sleeper Sofa Removal Omaha NE",
    shortDescription: "Sleeper sofas are notoriously heavy due to the hidden metal bed frame inside. If you need **sleeper sofa removal near me**, don\'t risk your back—call A1. We provide expert **sleeper-sofa removal Omaha**, handling these \"back-breakers\" with ease.",
    description: "Sleeper sofas are notoriously heavy due to the hidden metal bed frame inside. If you need **sleeper sofa removal near me**, don\'t risk your back—call A1. We provide expert **sleeper-sofa removal Omaha**, handling these \"back-breakers\" with ease. Our local crew has earned **253+ five-star reviews** for doing the hard work others won\'t. Our rates are **40-60% less than national companies**, and we serve clients in **Gretna** and **Bennington**. We have the strength and the equipment to move your hide-a-bed out safely and quickly.",
    richContent: [
          {
            heading: "Our Removal Process",
            bullets: [
              "Frame Securing: We ensure the bed frame is locked or tied so it doesn\'t spring open.",
              "Tight-Space Navigation: Carefully moving the heavy unit through doors.",
              "Full Loading: We handle the weight of the mattress and the frame.",
              "Responsible Disposal: Recycling the metal frame components whenever possible.",
              "Final Cleanup: A thorough sweep of the room where the sofa sat.",
            ],
          },
          {
            heading: "One-Stop Hauling",
            body: "Need more than just the sofa gone? We also offer **junk removal** for old mattresses, carpets, and TV stands to help you completely clear out your guest room or basement. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["sectional-couch-removal", "hide-a-bed-removal", "furniture-removal"],
    photoNeeded: "Hauling a sleeper sofa"
  },
  {
    slug: "hide-a-bed-removal",
    title: "Hide-a-Bed Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["hide a bed removal Omaha", "hide-a-bed disposal", "sofa bed removal"],
    metaDescription: "Hide-a-bed removal in Omaha. A1 Junk Removal hauls away old hide-a-beds and sofa beds. Call (402) 612-2373.",
    h1: "Heavy Hide-a-Bed Removal Omaha NE",
    shortDescription: "A hide-a-bed is one of the heaviest pieces of furniture you can own. If you’ve been searching for **hide-a-bed removal near me**, don\'t risk a back injury—call A1. We provide specialized **hide-a-bed removal Omaha**, handling the awkward weight and metal frames of these sleeper sofas with professional care.",
    description: "A hide-a-bed is one of the heaviest pieces of furniture you can own. If you’ve been searching for **hide-a-bed removal near me**, don\'t risk a back injury—call A1. We provide specialized **hide-a-bed removal Omaha**, handling the awkward weight and metal frames of these sleeper sofas with professional care. Our local crew has earned **253+ five-star reviews** by being the hardest workers in **Elkhorn** and **Papillion**. Our rates are **40-60% less than national companies**. We navigate your hallways and stairs safely, ensuring no damage to your home during the removal.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Two-Man Lift: We bring the strength needed for these heavy units.",
              "Safety Securing: We ensure the bed doesn\'t spring open during transport.",
              "Upstairs Removal: Expertly navigating stairs and tight corners.",
              "Metal Recycling: We prioritize recycling the heavy metal frames.",
              "Final Cleanup: We sweep up the dust and debris from under the sofa.",
            ],
          },
          {
            heading: "Fresh Space, Fresh Yard",
            body: "Once your guest room is clear, we can help with **tree service** outside to prune back any branches that are blocking the sunlight from your windows. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
    title: "Jacuzzi Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["jacuzzi removal Omaha", "jacuzzi disposal", "jacuzzi hauling"],
    metaDescription: "Jacuzzi removal in Omaha. A1 Junk Removal dismantles and hauls away old jacuzzis. Call (402) 612-2373.",
    h1: "Professional Jacuzzi Removal Omaha NE",
    shortDescription: "Removing a jacuzzi involves complex demolition, especially when they are built into custom surrounds or indoor spaces. When looking for **jacuzzi removal near me**, you need a team with experience in dismantling heavy fiberglass shells. We provide full-service **jacuzzi removal Omaha**, handling everything from the shell to the electrical components.",
    description: "Removing a jacuzzi involves complex demolition, especially when they are built into custom surrounds or indoor spaces. When looking for **jacuzzi removal near me**, you need a team with experience in dismantling heavy fiberglass shells. We provide full-service **jacuzzi removal Omaha**, handling everything from the shell to the electrical components. We are proud of our **253+ five-star reviews** and our local pricing, which is **40-60% less than national companies**. We’ve cleared spas for residents from **Papillion** to **Bennington**, ensuring a clean finish every time.",
    richContent: [
          {
            heading: "Our Jacuzzi Removal Process",
            bullets: [
              "Dismantling: Cutting the shell into manageable pieces for easy removal.",
              "Surround Demolition: Tearing out wooden decks or tile surrounds.",
              "Component Hauling: Removing the pumps, heaters, and blowers.",
              "Heavy Loading: We haul away the heavy spa cover and all debris.",
              "Final Sweep: We leave your patio or indoor room clean and ready.",
            ],
          },
          {
            heading: "Beyond the Spa",
            body: "If your jacuzzi was part of a larger backyard setup, we also offer **tree service** to trim back any branches that have overgrown your patio area. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["hot-tub-removal", "spa-removal", "bathtub-removal"],
    photoNeeded: "Dismantling a jacuzzi"
  },
  {
    slug: "organ-removal",
    title: "Organ Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["organ removal Omaha", "old organ disposal", "organ hauling"],
    metaDescription: "Organ removal in Omaha. A1 Junk Removal hauls away old organs and large musical instruments. Call (402) 612-2373.",
    h1: "Specialized Organ Removal Omaha NE",
    shortDescription: "Old electric organs are incredibly heavy and notoriously difficult to move. When you need **organ removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **organ removal Omaha**, handling everything from heavy church organs to home console models.",
    description: "Old electric organs are incredibly heavy and notoriously difficult to move. When you need **organ removal near me**, **A1 Junk Removal and Tree Service** is the team to call. We provide specialized **organ removal Omaha**, handling everything from heavy church organs to home console models. Our commitment to quality has earned us **253+ five-star reviews**. We keep our prices **40-60% less than national companies**, serving residents in **La Vista** and **Ralston**. We use specialized dollies and ramps to ensure the organ is removed without scratching your floors or damaging your doorframes.",
    richContent: [
          {
            heading: "What\'s Included in Our Service",
            bullets: [
              "Heavy Console Removal: We handle the massive weight of vintage organs.",
              "Pedalboard & Bench Disposal: Complete hauling of all components.",
              "Multi-Floor Extraction: Navigating stairs and tight corners safely.",
              "Responsible Disposal: Recycling metal and electronic parts.",
              "Final Area Sweep: We ensure no debris or dust is left behind.",
            ],
          },
          {
            heading: "Complete Home Clearing",
            body: "If you are clearing out a family member\'s estate, we can also handle **junk removal** for the rest of the house, including old furniture, clothing, and household waste. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["piano-removal", "furniture-removal", "residential-junk-removal"],
    photoNeeded: "Removing an old organ"
  },
  {
    slug: "projection-tv-removal",
    title: "Projection TV Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["projection TV removal Omaha", "old TV disposal", "big screen TV removal"],
    metaDescription: "Projection TV removal in Omaha. A1 Junk Removal hauls away old big-screen and projection TVs. Call (402) 612-2373.",
    h1: "Reliable Projection TV Removal Omaha NE",
    shortDescription: "Remember those massive \"Big Screen\" projection TVs from the 90s? They are incredibly heavy and full of hazardous glass and electronics. When you need **projection TV removal near me**, A1 is the only call you need to make. We provide professional **projection TV removal Omaha**, handling these bulky units with care.",
    description: "Remember those massive \"Big Screen\" projection TVs from the 90s? They are incredibly heavy and full of hazardous glass and electronics. When you need **projection TV removal near me**, A1 is the only call you need to make. We provide professional **projection TV removal Omaha**, handling these bulky units with care. We are proud of our **253+ five-star reviews** and our 7-day-a-week availability. Our local rates are **40-60% less than national companies**, serving homeowners in **Council Bluffs** and **Bellevue**. Don\'t hurt your back trying to move that 200lb box—let us handle it.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Two-Man Lift: We bring the muscle needed for these oversized units.",
              "Upstairs/Downstairs Removal: We navigate stairs and tight doorways.",
              "Hazardous Disposal: We ensure the internal components are recycled.",
              "Electronic Waste Hauling: We take the remote, speakers, and cables too.",
              "Final Area Sweep: We clean the dust bunnies from behind where the TV sat!",
            ],
          },
          {
            heading: "Clear the Home Theater",
            body: "Upgrading to a wall-mounted flat screen? We also offer **junk removal** for old entertainment centers, VHS tapes, and recliners to help you finish your theater renovation. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["appliance-removal", "furniture-removal", "residential-junk-removal"],
    photoNeeded: "Removing an old projection TV"
  },
  {
    slug: "gazebo-removal",
    title: "Gazebo Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Specialized Item Removal",
    categorySlug: "specialized",
    keywords: ["gazebo removal Omaha", "gazebo demolition", "old gazebo tear down"],
    metaDescription: "Gazebo removal in Omaha. A1 Junk Removal tears down and hauls away old gazebos. Call (402) 612-2373.",
    h1: "Expert Gazebo Removal Omaha NE",
    shortDescription: "Removing a gazebo is a complex demolition task involving heavy roofing materials and structural timber. If you’ve been searching for **gazebo removal near me**, let the heavy-lifters at A1 handle it. We provide professional **gazebo removal Omaha**, ensuring that your wooden or metal gazebo is dismantled safely without damaging your landscaping.",
    description: "Removing a gazebo is a complex demolition task involving heavy roofing materials and structural timber. If you’ve been searching for **gazebo removal near me**, let the heavy-lifters at A1 handle it. We provide professional **gazebo removal Omaha**, ensuring that your wooden or metal gazebo is dismantled safely without damaging your landscaping. We have maintained **253+ five-star reviews** because we treat your property with respect. Our local rates are **40-60% less than national companies**, and we serve clients throughout **Bellevue** and **Papillion**. Don’t risk a DIY accident—let us make that old structure disappear.",
    richContent: [
          {
            heading: "Structures We Handle",
            bullets: [
              "Wooden Gazebos: Dismantling of cedar or pressure-treated structures.",
              "Metal Pergolas: Safe cutting and hauling of steel or aluminum frames.",
              "Screened-In Enclosures: Removal of screens, doors, and roofing.",
              "Hot Tub Gazebos: Specialized removal for structures surrounding spas.",
              "Deck-Mounted Gazebos: Careful dismantling to protect the underlying deck.",
            ],
          },
          {
            heading: "More Than Just Gazebos",
            body: "Clearing out your backyard oasis? We also offer full **junk removal** for old patio furniture, fire pits, and grills so you can completely transform your outdoor living space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["deck-removal", "shed-removal", "backyard-cleanup"],
    photoNeeded: "Tearing down an old gazebo"
  },
];

const yardOutdoor: ServiceItem[] = [
  {
    slug: "bbq-grill-removal",
    title: "BBQ Grill Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor Removal",
    categorySlug: "yard-outdoor",
    keywords: ["bbq grill removal Omaha", "bbq grill removal near me", "bbq grill removal Omaha NE"],
    metaDescription: "BBQ Grill Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Professional BBQ Grill Removal Omaha",
    shortDescription: "Is your old, rusted grill taking up space on your patio? If you are looking for **BBQ grill removal near me**, A1 provides the muscle and tools needed. We offer expert **BBQ grill removal Omaha NE**, loading and hauling away heavy gas grills, charcoal smokers, and built-in units.",
    description: "Is your old, rusted grill taking up space on your patio? If you are looking for **BBQ grill removal near me**, A1 provides the muscle and tools needed. We offer expert **BBQ grill removal Omaha NE**, loading and hauling away heavy gas grills, charcoal smokers, and built-in units. With **253+ five-star reviews**, we are Omaha’s trusted choice for outdoor item removal. Our local operation is **40-60% less than national companies**, and we serve all surrounding areas including **Council Bluffs** and **Carter Lake**. We make that old eyesore disappear so you can enjoy your patio again.",
    richContent: [
      {
        heading: "Grills We Remove",
        bullets: [
          "Gas Grills: Including propane tanks (must be disconnected).",
          "Charcoal Grills: Safe removal of old kettles and smokers.",
          "Pellet Grills & Smokers: Handling the extra weight of electric units.",
          "Outdoor Kitchen Components: Removing built-in inserts and islands.",
          "Grill Accessories: Hauling away covers, tools, and old charcoal bags.",
        ],
      },
      {
        heading: "Reclaim Your Patio",
        body: "Now that the old grill is gone, we can help with **landscaping** debris removal to make sure the exterior of your home looks as good as new. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["yard-waste-removal", "backyard-cleanup", "deck-removal"],
    photoNeeded: "Photo needed for bbq grill removal"
  },
  {
    slug: "lawn-mower-removal",
    title: "Lawn Mower Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor Removal",
    categorySlug: "yard-outdoor",
    keywords: ["lawn mower removal Omaha", "lawn mower removal near me", "lawn mower removal Omaha NE"],
    metaDescription: "Lawn Mower Removal Omaha in Omaha. A1 Junk Removal handles it all. Call (402) 612-2373 for a free estimate.",
    h1: "Reliable Lawn Mower Removal Omaha NE",
    shortDescription: "Non-working lawn mowers are heavy and take up valuable space in your garage or shed. When you need **lawn mower removal near me**, we are ready to help. We provide full-service **lawn mower removal Omaha**, hauling away push mowers, riding mowers, and garden tractors.",
    description: "Non-working lawn mowers are heavy and take up valuable space in your garage or shed. When you need **lawn mower removal near me**, we are ready to help. We provide full-service **lawn mower removal Omaha**, hauling away push mowers, riding mowers, and garden tractors. Our customers have given us **253+ five-star reviews** because we make the process effortless. Our prices are **40-60% less than national companies**, and we serve families in **Bennington** and **Elkhorn**. We handle the loading and ensure the metal is recycled responsibly.",
    richContent: [
      {
        heading: "What We Remove",
        bullets: [
          "Push Mowers: Gas-powered or electric walk-behind units.",
          "Riding Mowers: Handling the size and weight of lawn tractors.",
          "Zero-Turn Mowers: Professional-grade equipment removal.",
          "Lawn Tools: Weed whackers, leaf blowers, and hedge trimmers.",
          "Scrap Metal Recycling: Prioritizing eco-friendly disposal for all machines.",
        ],
      },
      {
        heading: "Garage Transformation",
        body: "Once the mower is out, we can provide **tree service** to trim back any limbs that are blocking your garage or shed entrance, giving you more functional space. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["scrap-metal-removal", "shed-removal", "yard-waste-removal"],
    photoNeeded: "Photo needed for lawn mower removal"
  },
  {
    slug: "yard-waste-removal",
    title: "Yard Waste Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["yard waste removal Omaha", "yard debris cleanup", "yard waste hauling"],
    metaDescription: "Yard waste removal in Omaha. A1 Junk Removal hauls away branches, leaves, brush, and yard debris. Call (402) 612-2373.",
    h1: "Professional Yard Waste Removal Omaha NE",
    shortDescription: "Nebraska seasons can leave your lawn covered in debris, from spring cleanup to fall leaves. If you are searching for **yard waste removal near me**, **A1 Junk Removal and Tree Service** is your local solution. We provide comprehensive **yard waste removal Omaha**, hauling away everything from piles of grass clippings to heavy branches.",
    description: "Nebraska seasons can leave your lawn covered in debris, from spring cleanup to fall leaves. If you are searching for **yard waste removal near me**, **A1 Junk Removal and Tree Service** is your local solution. We provide comprehensive **yard waste removal Omaha**, hauling away everything from piles of grass clippings to heavy branches. Our local, owner-operated team has earned **253+ five-star reviews** by leaving every yard \"sweep-clean.\" Because we are local, our rates are **40-60% less than national companies**. Whether you are in **Elkhorn** or **Papillion**, we do the raking, loading, and hauling so you can simply enjoy your outdoor space.",
    richContent: [
          {
            heading: "What We Haul Away",
            bullets: [
              "Organic Debris: Grass clippings, leaves, and small twigs.",
              "Large Wood: Tree trunks, heavy logs, and stumps.",
              "Garden Waste: Old plants, hedge trimmings, and mulch.",
              "Storm Debris: Fallen limbs and wind-blown yard mess.",
              "Old Landscaping: Removal of old bushes and ornamental grasses.",
            ],
          },
          {
            heading: "Total Property Maintenance",
            body: "While we are clearing your yard waste, consider our **tree service** to prune back overhanging limbs. We can trim your trees and haul the resulting waste away in the same visit, saving you time and money. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["brush-yard-waste", "storm-debris-removal", "backyard-cleanup", "landscape-waste-removal"],
    photoNeeded: "Truck loaded with yard waste and branches"
  },
  {
    slug: "backyard-cleanup",
    title: "Backyard Cleanup Services Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["backyard cleanup Omaha", "yard cleanup service", "backyard junk removal"],
    metaDescription: "Backyard cleanup services in Omaha. A1 Junk Removal clears out junk, debris, and overgrowth. Call (402) 612-2373.",
    h1: "Thorough Backyard Cleanup Services Omaha NE",
    shortDescription: "Is your backyard disappearing under a mountain of brush, junk, and debris? If you need **backyard cleanup services near me**, A1 is the total solution. We provide **backyard cleanup services Omaha**, removing everything from fallen branches to old patio furniture and scrap piles.",
    description: "Is your backyard disappearing under a mountain of brush, junk, and debris? If you need **backyard cleanup services near me**, A1 is the total solution. We provide **backyard cleanup services Omaha**, removing everything from fallen branches to old patio furniture and scrap piles. With **253+ five-star reviews**, we are known for leaving properties \"sweep-clean.\" Our prices are **40-60% less than national companies**, and we serve homeowners in **Bellevue** and **La Vista**. We make the junk disappear so you can actually enjoy your outdoor space again.",
    richContent: [
          {
            heading: "What\'s Included in a Cleanup",
            bullets: [
              "Brush & Branch Hauling: Removing piles of wood and yard waste.",
              "Junk & Debris Removal: Clearing out old flower pots, toys, and scrap metal.",
              "Old Structure Removal: Hauling away broken gazebos or dog houses.",
              "Leaf & Twig Clearing: Raking and sweeping up the small stuff.",
              "Log & Stump Hauling: Removing heavy wood sections left behind.",
            ],
          },
          {
            heading: "Total Property Care",
            body: "A backyard cleanup is the perfect time for a **tree service**. We can trim back overgrown limbs or remove dead trees while we are on-site to give your yard a completely professional finish. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["yard-waste-removal", "swing-set-removal", "trampoline-removal", "old-fencing-removal"],
    photoNeeded: "Messy backyard being cleaned up"
  },
  {
    slug: "brush-yard-waste",
    title: "Brush Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["brush removal Omaha", "brush hauling", "yard waste pickup"],
    metaDescription: "Brush and yard waste removal in Omaha. A1 Junk Removal hauls away brush piles and yard debris. Call (402) 612-2373.",
    h1: "Expert Brush Removal Omaha NE",
    shortDescription: "Overgrown brush and thickets can quickly take over a fence line or backyard. If you’ve been looking for **brush removal near me**, let A1 handle the clearing. We provide specialized **brush removal Omaha**, cutting through the mess and hauling away every bit of tangled vegetation.",
    description: "Overgrown brush and thickets can quickly take over a fence line or backyard. If you’ve been looking for **brush removal near me**, let A1 handle the clearing. We provide specialized **brush removal Omaha**, cutting through the mess and hauling away every bit of tangled vegetation. With **253+ five-star reviews**, we are Omaha\'s trusted choice for land clearing. Our local rates are **40-60% less than national companies**, and we serve clients throughout **Bellevue** and **La Vista**. We have the tools to turn a wall of brush back into a usable lawn.",
    richContent: [
          {
            heading: "Our Brush Removal Process",
            bullets: [
              "Clearing & Cutting: Removing overgrown thickets and shrubs.",
              "Fence Line Cleaning: Clearing vegetation that is damaging your fencing.",
              "Loading & Hauling: We pile it, load it, and haul it away.",
              "Thorough Cleanup: We rake the area to remove small sticks and debris.",
              "Responsible Disposal: All organic brush is taken to local composting sites.",
            ],
          },
          {
            heading: "Enhance Your Canopy",
            body: "Once the brush is cleared at ground level, you might notice your trees need work too. We offer professional **tree service** to lift your tree canopy and remove deadwood, giving your entire property a professional look. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
    title: "Log Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["log removal Omaha", "log hauling", "fallen tree log removal"],
    metaDescription: "Log removal in Omaha. A1 Junk Removal hauls away logs and large wood debris. Call (402) 612-2373.",
    h1: "Affordable Log Removal Omaha NE",
    shortDescription: "Did you cut down a tree but find yourself stuck with the heavy logs? If you are looking for **log removal near me**, we have the equipment to haul them away. We provide expert **log removal Omaha**, taking heavy trunk sections, stumps, and large wood chunks off your property.",
    description: "Did you cut down a tree but find yourself stuck with the heavy logs? If you are looking for **log removal near me**, we have the equipment to haul them away. We provide expert **log removal Omaha**, taking heavy trunk sections, stumps, and large wood chunks off your property. Join our happy customers behind **253+ five-star reviews**. Being local means we are **40-60% less than national companies** and can often offer faster service in **Ralston** and **Council Bluffs**. We do the heavy loading so you can stop worrying about that pile of wood in your yard.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Heavy Trunk Hauling: Removal of large, solid log sections.",
              "Stump Removal: Hauling of pre-cut or pulled stumps.",
              "Firewood Clearing: Taking away old, rotten, or unwanted firewood piles.",
              "Debris Cleanup: We raked the area to remove bark and wood chips.",
              "Flexible Access: We can get our trucks close to the pile to minimize yard damage.",
            ],
          },
          {
            heading: "Complete Tree Care",
            body: "If you have other trees that need attention, we also offer professional **tree service** and trimming to keep your remaining canopy safe and healthy. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["tree-removal", "tree-branch-removal", "storm-debris-removal"],
    photoNeeded: "Loading large logs into truck"
  },
  {
    slug: "old-fencing-removal",
    title: "Fence Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["fence removal Omaha", "old fence disposal", "fence tear down"],
    metaDescription: "Old fencing removal in Omaha. A1 Junk Removal tears down and hauls away old fences. Call (402) 612-2373.",
    h1: "Professional Fence Removal Omaha NE",
    shortDescription: "Tearing out an old fence is exhausting work, especially when dealing with concrete footings and rusted wire. If you need **fence removal near me**, A1 provides the muscle you need. We specialize in **fence removal Omaha**, taking down old wood, chain link, and vinyl fencing quickly and safely.",
    description: "Tearing out an old fence is exhausting work, especially when dealing with concrete footings and rusted wire. If you need **fence removal near me**, A1 provides the muscle you need. We specialize in **fence removal Omaha**, taking down old wood, chain link, and vinyl fencing quickly and safely. We are proud of our **253+ five-star reviews** and our ability to offer rates **40-60% less than national companies**. We serve the entire metro area, including **Bellevue** and **La Vista**, helping you prepare your property line for a brand-new installation.",
    richContent: [
          {
            heading: "What We Handle",
            bullets: [
              "Wooden Privacy Fencing: Tearing down panels and pulling posts.",
              "Chain Link Removal: Rolling up wire and removing metal poles.",
              "Vinyl & Composite Fencing: Dismantling and hauling all sections.",
              "Post & Concrete Removal: Digging or pulling out the footings.",
              "Scrap Metal Hauling: Responsible recycling of all metal components.",
            ],
          },
          {
            heading: "Clear the Perimeter",
            body: "If your old fence was covered in overgrown vines or blocked by low-hanging limbs, we can provide a **tree service** to clear the fence line while we are on-site. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["backyard-cleanup", "deck-removal", "scrap-metal-removal"],
    photoNeeded: "Tearing down an old fence"
  },
  {
    slug: "shed-removal",
    title: "Shed Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["shed removal Omaha", "shed demolition", "old shed tear down"],
    metaDescription: "Shed removal and demolition in Omaha. A1 Junk Removal tears down and hauls away old sheds. Call (402) 612-2373.",
    h1: "Professional Shed Removal Omaha NE",
    shortDescription: "Is an old, decaying shed becoming a safety hazard or an eyesore in your backyard? When looking for **shed removal near me**, you need a team that can handle both the demolition and the heavy hauling. We provide expert **shed removal Omaha**, dismantling wooden garden sheds, metal storage buildings, and plastic resin structures from top to bottom.",
    description: "Is an old, decaying shed becoming a safety hazard or an eyesore in your backyard? When looking for **shed removal near me**, you need a team that can handle both the demolition and the heavy hauling. We provide expert **shed removal Omaha**, dismantling wooden garden sheds, metal storage buildings, and plastic resin structures from top to bottom. Our local, owner-operated crew has earned **253+ five-star reviews** by providing fast, reliable service. Because we don\'t pay franchise fees, we are consistently **40-60% less than national companies**. Whether you are in **Elkhorn** or **Gretna**, we show up with the right tools to tear it down and haul it away.",
    richContent: [
          {
            heading: "What We Remove",
            bullets: [
              "Wooden Garden Sheds: Full demolition and lumber hauling.",
              "Metal Storage Buildings: Safe dismantling and scrap metal recycling.",
              "Plastic/Resin Sheds: Quick breakdown and disposal.",
              "Shed Contents: We can haul away the old junk inside the shed too.",
              "Foundation Clearing: Removal of concrete blocks or wooden skids.",
            ],
          },
          {
            heading: "Total Backyard Clearing",
            body: "Once the shed is gone, you might notice overgrown branches that were hidden behind it. We can provide **tree service** to prune back limbs and open up that newly cleared space in your yard. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["barn-removal", "deck-removal", "gazebo-removal"],
    photoNeeded: "Demolishing an old shed"
  },
  {
    slug: "storm-debris-removal",
    title: "Storm Debris Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["storm debris removal Omaha", "storm cleanup", "storm damage cleanup"],
    metaDescription: "Storm debris removal in Omaha. A1 Junk Removal provides fast cleanup after severe weather. Call (402) 612-2373.",
    h1: "Emergency Storm Debris Removal Omaha",
    shortDescription: "Nebraska storms can leave your yard in shambles. When you need storm debris removal near me after high winds or ice, A1 is ready to respond. We provide storm debris removal Omaha NE, clearing fallen limbs, shattered trees, and wind-blown trash from your property.",
    description: "Nebraska storms can leave your yard in shambles. When you need storm debris removal near me after high winds or ice, A1 is ready to respond. We provide storm debris removal Omaha NE, clearing fallen limbs, shattered trees, and wind-blown trash from your property. We are proud of our 253+ five-star reviews and our 7-day availability. Our rates are 40-60% less than national companies, serving neighbors in Elkhorn and Papillion during their time of need. We work fast to make sure your driveways and roofs are clear of danger.",
    richContent: [
      {
        heading: "What We Clear",
        bullets: [
          "Fallen Tree Limbs: Cutting and hauling branches of all sizes.",
          "Uprooted Trees: Safe removal of trees that have tipped or leaned.",
          "Scattered Yard Waste: Gathering leaves, twigs, and organic debris.",
          "Fencing Damage: Removing sections of fence destroyed by the storm.",
          "Final Site Sweep: Ensuring your yard is safe for kids and pets again.",
        ],
      },
      {
        heading: "Tree Safety Check",
        body: "After a storm, your standing trees may have weakened limbs. We can perform a full tree service inspection and trim back any high-risk branches to prevent the next storm from causing more damage. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
      },
    ],
    relatedSlugs: ["emergency-tree-service", "tree-branch-removal", "yard-waste-removal"],
    photoNeeded: "Cleaning up storm debris in a yard"
  },
  {
    slug: "tree-branch-removal",
    title: "Tree Branch Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Yard & Outdoor",
    categorySlug: "yard-outdoor",
    keywords: ["tree branch removal Omaha", "branch hauling", "fallen branch cleanup"],
    metaDescription: "Tree branch removal in Omaha. A1 Junk Removal hauls away fallen and trimmed branches. Call (402) 612-2373.",
    h1: "Fast Tree Branch Removal Omaha NE",
    shortDescription: "Whether it’s from a storm or a DIY pruning project, piles of branches can be an eyesore and a fire hazard. If you are searching for **tree branch removal near me**, A1 is the fastest solution. We provide **tree branch removal Omaha**, loading and hauling away limbs of any size.",
    description: "Whether it’s from a storm or a DIY pruning project, piles of branches can be an eyesore and a fire hazard. If you are searching for **tree branch removal near me**, A1 is the fastest solution. We provide **tree branch removal Omaha**, loading and hauling away limbs of any size. We have maintained **253+ five-star reviews** because we treat your property with respect. Our local prices are **40-60% less than national companies**, serving residents in **Ralston** and **Council Bluffs**. We ensure every branch is hauled off and the area is raked clean.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Limb & Branch Loading: We do all the heavy lifting and stacking.",
              "Brush Pile Removal: Clearing out old, dried-out wood piles.",
              "Storm Damage Cleanup: Removing branches that have fallen on lawns.",
              "Final Site Raking: We pick up the small twigs and bark.",
              "Eco-Friendly Disposal: Branches are recycled into mulch or compost.",
            ],
          },
          {
            heading: "Preventive Tree Care",
            body: "Don\'t wait for branches to fall. We also offer **tree service** and trimming to remove weak or overhanging limbs before they become a problem during the next Omaha storm. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
    relatedSlugs: ["brush-yard-waste", "storm-debris-removal", "yard-waste-removal"],
    photoNeeded: "Loading tree branches into truck"
  },
];

const commercial: ServiceItem[] = [
  {
    slug: "commercial-waste-management",
    title: "Commercial Waste Removal Omaha | A1 Junk Removal and Tree Service",
    category: "Commercial Services",
    categorySlug: "commercial",
    keywords: ["commercial waste management Omaha", "business junk removal", "office cleanout"],
    metaDescription: "Commercial waste management in Omaha. A1 Junk Removal handles office cleanouts, warehouse clearing, and business junk removal. Call (402) 612-2373.",
    h1: "Affordable Commercial Waste Removal Omaha NE",
    shortDescription: "Omaha businesses need a waste partner that is both reliable and cost-effective. If you are looking for **commercial waste removal near me**, we have the equipment to haul it away. We provide expert **commercial waste removal Omaha**, taking office furniture, retail debris, and warehouse waste.",
    description: "Omaha businesses need a waste partner that is both reliable and cost-effective. If you are looking for **commercial waste removal near me**, we have the equipment to haul it away. We provide expert **commercial waste removal Omaha**, taking office furniture, retail debris, and warehouse waste. Join our happy customers behind **253+ five-star reviews**. Being local means we are **40-60% less than national companies** and can often offer faster service in **Ralston** and **Council Bluffs**. We do the heavy loading so you can focus on running your business.",
    richContent: [
          {
            heading: "What\'s Included",
            bullets: [
              "Office Furniture Removal: Desks, chairs, and filing cabinets.",
              "Retail Debris Hauling: Shelving, displays, and cardboard.",
              "Warehouse Cleanouts: Removing pallets and industrial scrap.",
              "Property Management Support: Fast cleanouts for new tenants.",
              "Responsible Recycling: Prioritizing eco-friendly disposal for all materials.",
            ],
          },
          {
            heading: "Complete Property Care",
            body: "If your commercial property has overgrown trees blocking signage, we also offer professional **tree service** and trimming to keep your business looking its best. Call or text (402) 612-2373 for a free, no-obligation quote. Available 7 days a week.",
          },
        ],
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
export const HERO_JUNK_IMG = PLACEHOLDER_IMG; // PLACEHOLDER — needs real photo of A1 crew loading junk into truck (no old Omaha Haulers branding)
export const HERO_TREE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/hero-tree-service-UmVmNRfuSZSPDEMszC6Erg.webp";
export const ABOUT_TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/about-team-5CnSb6BqC2amPdwBrsQpdy.webp";
export const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/before-after-cleanout-CjUUq8Gg5ChWibYyz2iKd3.webp";
export const CTA_BG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388590750/nrULRhtVaiGZzoZae5kn9U/cta-background-jLoTddUiPykVuECHJ26hmF.webp";
