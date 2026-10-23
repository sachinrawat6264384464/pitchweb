export interface HangingGarmentCosting {
  fabricCost: number;
  artisanLaborCost: number;
  tailoringFusingCost: number;
  operationsPackaging: number;
  bigBrandRetailPrice: number;
  mayraDirectPrice: number;
  customerSavings: number;
}

export interface HangingGarment {
  id: string;
  name: string;
  category: string;
  badge: string;
  price: number;
  originalPrice: number;
  imageFront: string;
  fabric: string;
  lining: string;
  collarStyle: string;
  occasions: string[];
  sizes: string[];
  colors: string[];
  description: string;
  backDetails: {
    seamStyle: string;
    ventCut: string;
    liningNotes: string;
    tailoringHighlights: string;
  };
  costing: HangingGarmentCosting;
  wireOffsetPercent: number; // position along the hanging wire (0 to 100)
}

export const HANGING_GARMENTS: HangingGarment[] = [
  {
    id: "hang-1",
    name: "Barat Grand Zardozi Silk Sherwani",
    category: "Groom & Barat Special",
    badge: "Wedding Imperial",
    price: 4299,
    originalPrice: 11999,
    imageFront: "/images/hanging/sherwani-royal-groom.png",
    fabric: "Raw Silk Blend with Hand Zardozi Threadwork",
    lining: "Breathable Premium Satin Voile",
    collarStyle: "Imperial Mandarin Bandhgala Collar",
    occasions: ["Wedding Barat Entrance", "Groom Royal Look", "Main Reception"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: ["Off-White Royal", "Champagne Gold", "Antique Ivory"],
    description: "Regal knee-length sherwani crafted with artisanal hand-zardozi motifs along the imperial collar, front placket, and sleeve cuffs. Designed for grand wedding entrances.",
    backDetails: {
      seamStyle: "Triple-darted royal spine silhouette for athletic posture",
      ventCut: "Deep center overlap vent with hand-finished golden hem",
      liningNotes: "Full internal silk-satin fused lining for non-chafing sweat comfort",
      tailoringHighlights: "Free on-spot master tailor shoulder adjustments at Indore store",
    },
    costing: {
      fabricCost: 1650,
      artisanLaborCost: 1400,
      tailoringFusingCost: 850,
      operationsPackaging: 399,
      bigBrandRetailPrice: 11999,
      mayraDirectPrice: 4299,
      customerSavings: 7700,
    },
    wireOffsetPercent: 7,
  },
  {
    id: "hang-2",
    name: "Maharaja Onyx Bandhgala Jodhpuri Suit",
    category: "Royal Jodhpuri",
    badge: "Royal Pick",
    price: 3499,
    originalPrice: 7999,
    imageFront: "/images/hanging/suit-royal-black.png",
    fabric: "Rich Italian Matka Silk Blend Suiting",
    lining: "Double-Weave Soft Polyester Satin",
    collarStyle: "Rajputana Closed Bandhgala Collar",
    occasions: ["Brother's Wedding", "Cocktail Reception", "Grand Gala"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: ["Jet Black", "Midnight Onyx", "Deep Charcoal"],
    description: "Signature structured royal imperial suit with antique brass lion-crested buttons, sculpted shoulder pads, and clean side silhouette.",
    backDetails: {
      seamStyle: "Contoured back paneling offering sharp military posture",
      ventCut: "Dual Italian-style side vents for effortless seating comfort",
      liningNotes: "Crease-resistant full canvas interior with chest horsehair fusing",
      tailoringHighlights: "Lifetime free sleeve & waist alteration at Mahalaxmi Nagar",
    },
    costing: {
      fabricCost: 1450,
      artisanLaborCost: 480,
      tailoringFusingCost: 1120,
      operationsPackaging: 449,
      bigBrandRetailPrice: 7999,
      mayraDirectPrice: 3499,
      customerSavings: 4500,
    },
    wireOffsetPercent: 20,
  },
  {
    id: "hang-3",
    name: "Sunshine Haldi Handcrafted Chanderi Kurta",
    category: "Designer Kurtas",
    badge: "Haldi Special",
    price: 999,
    originalPrice: 2499,
    imageFront: "/images/hanging/kurta-yellow-chanderi.png",
    fabric: "Pure Chanderi Art Silk with Gold Threadwork",
    lining: "100% Breathable Pure Cotton Voile",
    collarStyle: "Classic Mandarin Button Placket",
    occasions: ["Haldi Ceremony", "Morning Puja", "Family Sangeet"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)", "46 (XXL)"],
    colors: ["Haldi Yellow", "Mustard Gold", "Sunset Ochre"],
    description: "Vibrant yellow festive kurta featuring delicate neck placket embroidery and pure cotton lining for all-day cool comfort during celebration rituals.",
    backDetails: {
      seamStyle: "Single yoke straight cut with relaxed comfort fit",
      ventCut: "Classic side hip slits allowing full mobility during sangeet dance",
      liningNotes: "Pre-shrunk cotton inner so fabric maintains drape after washing",
      tailoringHighlights: "Free on-spot length hem adjustment",
    },
    costing: {
      fabricCost: 420,
      artisanLaborCost: 310,
      tailoringFusingCost: 210,
      operationsPackaging: 59,
      bigBrandRetailPrice: 2499,
      mayraDirectPrice: 999,
      customerSavings: 1500,
    },
    wireOffsetPercent: 33,
  },
  {
    id: "hang-4",
    name: "German Velvet Brocade Nehru Jacket",
    category: "Nehru Jackets & Kotis",
    badge: "Trending",
    price: 1399,
    originalPrice: 3199,
    imageFront: "/images/hanging/jacket-velvet-dark.png",
    fabric: "Rich German Micro-Velvet with Golden Zari Piping",
    lining: "High-Density Japanese Satin",
    collarStyle: "Embossed Mandarin Nehru Collar",
    occasions: ["Sangeet Night", "Groomsmen Squad Theme", "Engagement"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)", "46 (XXL)"],
    colors: ["Forest Green", "Ruby Maroon", "Cobalt Blue"],
    description: "Specially tailored for the groom squad. Features crisp collar piping, front welt pockets, and a removable antique brass brooch included.",
    backDetails: {
      seamStyle: "Clean center back seam with subtle waist tapering",
      ventCut: "Straight low-profile hem that sits flush over any kurta",
      liningNotes: "Satin inner ensures smooth layering without clinging",
      tailoringHighlights: "Free on-spot armhole & chest sizing",
    },
    costing: {
      fabricCost: 580,
      artisanLaborCost: 360,
      tailoringFusingCost: 340,
      operationsPackaging: 119,
      bigBrandRetailPrice: 3199,
      mayraDirectPrice: 1399,
      customerSavings: 1800,
    },
    wireOffsetPercent: 46,
  },
  {
    id: "hang-5",
    name: "Imperial Midnight Blue Royal Jodhpuri",
    category: "Royal Jodhpuri",
    badge: "Bestseller",
    price: 2999,
    originalPrice: 6499,
    imageFront: "/images/hanging/suit-midnight-blue.png",
    fabric: "Poly-Viscose Matka Weave Suiting",
    lining: "Silk-Touch Poly Satin",
    collarStyle: "Imperial High Bandhgala",
    occasions: ["Reception Night", "Ring Ceremony", "Barat Feast"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: ["Midnight Blue", "Navy Sapphire", "Imperial Indigo"],
    description: "Modern reinterpretation of the Rajputana royal suit. Imposing sharp silhouette with hand-placed metallic buttons and comfort stretch.",
    backDetails: {
      seamStyle: "Tapered back panel with reinforced shoulder canvas",
      ventCut: "Dual back side vents for easy movement while seated",
      liningNotes: "Internal chest passport & phone pockets tailored inside",
      tailoringHighlights: "Free fitting adjustments by Indore store master tailor",
    },
    costing: {
      fabricCost: 1200,
      artisanLaborCost: 420,
      tailoringFusingCost: 980,
      operationsPackaging: 399,
      bigBrandRetailPrice: 6499,
      mayraDirectPrice: 2999,
      customerSavings: 3500,
    },
    wireOffsetPercent: 59,
  },
  {
    id: "hang-6",
    name: "Indo-Western Velvet Shawl Tuxedo Blazer",
    category: "Party Blazers & Tuxedos",
    badge: "Cocktail Pick",
    price: 2799,
    originalPrice: 5999,
    imageFront: "/images/hanging/suit-tuxedo-peak.png",
    fabric: "Plush Micro-Velvet with Contrast Satin Shawl Lapel",
    lining: "Tone-on-Tone Breathable Silk Satin",
    collarStyle: "Sleek Satin Shawl Lapel",
    occasions: ["Cocktail Party", "Red Carpet Reception", "After-Party"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: ["Royal Black", "Deep Burgundy", "Midnight Navy"],
    description: "Modern overlap tuxedo blazer with lustrous satin contrast trim. Crafted for evening glamor, cocktail parties, and western reception nights.",
    backDetails: {
      seamStyle: "Structured European cut with hourglass waist taper",
      ventCut: "Single center vent for clean tuxedo drape",
      liningNotes: "Lightweight inner construction for high-energy dancing comfort",
      tailoringHighlights: "Free sleeve length adjustments",
    },
    costing: {
      fabricCost: 1150,
      artisanLaborCost: 520,
      tailoringFusingCost: 820,
      operationsPackaging: 309,
      bigBrandRetailPrice: 5999,
      mayraDirectPrice: 2799,
      customerSavings: 3200,
    },
    wireOffsetPercent: 72,
  },
  {
    id: "hang-7",
    name: "Italian Tailored Double-Breasted Blazer",
    category: "Party Blazers & Tuxedos",
    badge: "Trending",
    price: 2499,
    originalPrice: 5499,
    imageFront: "/images/hanging/jacket-blazer-grey.png",
    fabric: "Wrinkle-Resistant Poly-Rayon Suiting Blend",
    lining: "Breathable Micro-Jacquard Weave",
    collarStyle: "Sharp Italian Peak Lapel",
    occasions: ["Family Sangeet Dinner", "Reception", "Formal Gathering"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: ["Charcoal Slate", "Silver Grey", "Onyx Black"],
    description: "Double-breasted sharp modern cut with six metallic crest buttons, structured shoulder construction, and athletic waist taper.",
    backDetails: {
      seamStyle: "Double-darted back structure for sharp posture",
      ventCut: "Dual side vents tailored for ease of pocket access",
      liningNotes: "Anti-static interior finish that glides over dress shirts",
      tailoringHighlights: "Free on-spot master tailor waist adjustment",
    },
    costing: {
      fabricCost: 980,
      artisanLaborCost: 420,
      tailoringFusingCost: 810,
      operationsPackaging: 289,
      bigBrandRetailPrice: 5499,
      mayraDirectPrice: 2499,
      customerSavings: 3000,
    },
    wireOffsetPercent: 85,
  },
  {
    id: "hang-8",
    name: "Gentleman's Single-Breasted Royal Coat",
    category: "Suits & Blazers",
    badge: "Heritage Classic",
    price: 2199,
    originalPrice: 4899,
    imageFront: "/images/hanging/suit-classic-formal.png",
    fabric: "Premium Poly-Viscose Fabric with Natural Sheen",
    lining: "Soft Touch Cotton-Poly Blend",
    collarStyle: "Classic Italian Notch Lapel",
    occasions: ["Engagement", "Reception Guest", "Diwali Festivities"],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)", "46 (XXL)"],
    colors: ["Classic Navy", "Charcoal Black", "Deep Wine"],
    description: "Timeless single-breasted two-button blazer with versatile day-to-night styling. Pairs seamlessly over both denim and formal trousers.",
    backDetails: {
      seamStyle: "Classic 4-piece tailored back structure",
      ventCut: "Dual back vents for flexible fit and mobility",
      liningNotes: "Reinforced armholes preventing seam tension",
      tailoringHighlights: "Free sleeve alteration on store visit",
    },
    costing: {
      fabricCost: 880,
      artisanLaborCost: 380,
      tailoringFusingCost: 690,
      operationsPackaging: 249,
      bigBrandRetailPrice: 4899,
      mayraDirectPrice: 2199,
      customerSavings: 2700,
    },
    wireOffsetPercent: 96,
  },
];
