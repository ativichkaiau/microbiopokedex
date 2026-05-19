// Curated "pokédex" of medically notable fungi.
// Categories: morphology (yeast / mold / dimorphic) and clinical group.

export const MORPHOLOGIES = ["yeast", "mold", "dimorphic"] as const;
export type Morphology = (typeof MORPHOLOGIES)[number];

export const GROUPS = [
  "Yeast",
  "Mold",
  "Dimorphic",
  "Dermatophyte",
  "Opportunistic",
] as const;
export type Group = (typeof GROUPS)[number];

export type Fungus = {
  slug: string;
  name: string;
  scientificName: string;
  morphology: Morphology;
  group: Group;
  description: string;
};

export const FUNGI: Fungus[] = [
  {
    slug: "candida-albicans",
    name: "Candida albicans",
    scientificName: "Candida albicans",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Budding yeast that forms pseudohyphae and germ tubes. Causes thrush, vulvovaginitis, and, in immunocompromised hosts, invasive candidemia.",
  },
  {
    slug: "candida-auris",
    name: "Candida auris",
    scientificName: "Candida auris",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Emerging multidrug-resistant yeast that persists on surfaces and skin. Causes hard-to-control healthcare-associated outbreaks and bloodstream infections.",
  },
  {
    slug: "cryptococcus-neoformans",
    name: "Cryptococcus",
    scientificName: "Cryptococcus neoformans",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Encapsulated budding yeast acquired from pigeon droppings. Causes subacute meningitis in AIDS; seen with India ink and a positive antigen test.",
  },
  {
    slug: "malassezia-furfur",
    name: "Malassezia",
    scientificName: "Malassezia furfur",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Lipophilic skin yeast with 'spaghetti and meatballs' microscopy. Causes tinea versicolor pigment changes and seborrheic dermatitis.",
  },
  {
    slug: "pneumocystis-jirovecii",
    name: "Pneumocystis",
    scientificName: "Pneumocystis jirovecii",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Atypical yeast-like fungus that cannot be cultured. Causes diffuse interstitial pneumonia (PCP) in AIDS and other immunocompromised patients.",
  },
  {
    slug: "aspergillus-fumigatus",
    name: "Aspergillus fumigatus",
    scientificName: "Aspergillus fumigatus",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold with acute-angle branching hyphae. Causes invasive pulmonary aspergillosis, aspergilloma, and allergic bronchopulmonary disease.",
  },
  {
    slug: "aspergillus-flavus",
    name: "Aspergillus flavus",
    scientificName: "Aspergillus flavus",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold that produces carcinogenic aflatoxin on stored crops. Also causes sinusitis, keratitis, and invasive disease in the immunocompromised.",
  },
  {
    slug: "rhizopus-arrhizus",
    name: "Rhizopus (Mucor)",
    scientificName: "Rhizopus arrhizus",
    morphology: "mold",
    group: "Mold",
    description:
      "Fast-growing mold with broad, ribbon-like, mostly aseptate hyphae. Causes angioinvasive mucormycosis in diabetic ketoacidosis and neutropenia.",
  },
  {
    slug: "fusarium-solani",
    name: "Fusarium",
    scientificName: "Fusarium solani",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate environmental mold producing banana-shaped macroconidia. Causes contact-lens keratitis and disseminated infection in neutropenic patients.",
  },
  {
    slug: "histoplasma-capsulatum",
    name: "Histoplasma",
    scientificName: "Histoplasma capsulatum",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus from bird/bat droppings; intracellular yeast in macrophages at body temperature. Causes pulmonary and disseminated histoplasmosis.",
  },
  {
    slug: "blastomyces-dermatitidis",
    name: "Blastomyces",
    scientificName: "Blastomyces dermatitidis",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus of moist soil with broad-based budding yeast in tissue. Causes pulmonary, skin, and bone blastomycosis in the Mississippi region.",
  },
  {
    slug: "coccidioides-immitis",
    name: "Coccidioides",
    scientificName: "Coccidioides immitis",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Soil mold of the arid Southwest forming tissue spherules packed with endospores. Inhaled arthroconidia cause 'Valley fever'.",
  },
  {
    slug: "paracoccidioides-brasiliensis",
    name: "Paracoccidioides",
    scientificName: "Paracoccidioides brasiliensis",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus of Latin America with a 'captain's wheel' multiple-budding yeast. Causes chronic pulmonary and mucocutaneous paracoccidioidomycosis.",
  },
  {
    slug: "sporothrix-schenckii",
    name: "Sporothrix",
    scientificName: "Sporothrix schenckii",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus on plants and soil ('rose-gardener's disease'). Thorn inoculation causes a chain of nodular lymphocutaneous lesions.",
  },
  {
    slug: "talaromyces-marneffei",
    name: "Talaromyces",
    scientificName: "Talaromyces marneffei",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus of Southeast Asia that divides by fission yeast in tissue. Causes disseminated infection with skin papules in advanced HIV.",
  },
  {
    slug: "trichophyton-rubrum",
    name: "Trichophyton",
    scientificName: "Trichophyton rubrum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "The most common dermatophyte mold. Digests keratin to cause athlete's foot, jock itch, ringworm of the body, and chronic onychomycosis.",
  },
  {
    slug: "microsporum-canis",
    name: "Microsporum",
    scientificName: "Microsporum canis",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Zoophilic dermatophyte from cats and dogs with spindle-shaped macroconidia. Causes tinea capitis and corporis that fluoresces under Wood's lamp.",
  },
  {
    slug: "epidermophyton-floccosum",
    name: "Epidermophyton",
    scientificName: "Epidermophyton floccosum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Dermatophyte infecting skin and nails (never hair) with club-shaped macroconidia. A common cause of tinea cruris and tinea pedis.",
  },
];
