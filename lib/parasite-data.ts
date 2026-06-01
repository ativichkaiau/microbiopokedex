// Curated "pokédex" of medically notable parasites.
// Categories: broad group, taxonomic form, and route of transmission.

export const GROUPS = ["Protozoa", "Helminth", "Ectoparasite"] as const;
export type ParasiteGroup = (typeof GROUPS)[number];

export const FORMS = [
  "Apicomplexan",
  "Flagellate",
  "Amoeba",
  "Nematode",
  "Trematode",
  "Cestode",
  "Mite",
  "Arthropod",
  "Arachnid",
] as const;
export type ParasiteForm = (typeof FORMS)[number];

export const TRANSMISSIONS = [
  "Vector-borne",
  "Fecal-oral",
  "Foodborne",
  "Soil-transmitted",
  "Waterborne",
  "Sexual",
  "Contact",
] as const;
export type Transmission = (typeof TRANSMISSIONS)[number];

export type Parasite = {
  slug: string;
  name: string;
  scientificName: string;
  group: ParasiteGroup;
  form: ParasiteForm;
  transmission: Transmission;
  description: string;
};

export const PARASITES: Parasite[] = [
  {
    slug: "plasmodium-falciparum",
    name: "Malaria parasite",
    scientificName: "Plasmodium falciparum",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Anopheles-mosquito-borne apicomplexan that sequesters infected red cells in capillaries. The most lethal malaria species, causing cerebral malaria and severe anemia.",
  },
  {
    slug: "toxoplasma-gondii",
    name: "Toxoplasma",
    scientificName: "Toxoplasma gondii",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Foodborne",
    description:
      "Intracellular apicomplexan with cats as definitive host. Acquired by undercooked meat or cat feces; causes congenital infection and CNS reactivation in AIDS.",
  },
  {
    slug: "cryptosporidium-parvum",
    name: "Cryptosporidium",
    scientificName: "Cryptosporidium parvum",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Waterborne",
    description:
      "Chlorine-resistant apicomplexan oocyst spread through water. Causes profuse watery diarrhea, especially severe and chronic in AIDS.",
  },
  {
    slug: "babesia-microti",
    name: "Babesia",
    scientificName: "Babesia microti",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Ixodes-tick-borne apicomplexan that invades red cells. Causes a malaria-like febrile hemolytic illness, severe in asplenic patients.",
  },
  {
    slug: "giardia-lamblia",
    name: "Giardia",
    scientificName: "Giardia lamblia",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Waterborne",
    description:
      "Pear-shaped flagellate that adheres to the duodenum. Backpacker's and daycare diarrhea with foul-smelling, fatty, non-bloody stools.",
  },
  {
    slug: "trypanosoma-brucei",
    name: "African Tryp",
    scientificName: "Trypanosoma brucei",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Tsetse-fly-borne flagellate. Causes African sleeping sickness with progressive lymphadenopathy, fever, and CNS invasion if untreated.",
  },
  {
    slug: "trypanosoma-cruzi",
    name: "Chagas parasite",
    scientificName: "Trypanosoma cruzi",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Kissing-bug-borne flagellate of Latin America. Causes Chagas disease — acute Romaña sign, then chronic cardiomyopathy and megacolon decades later.",
  },
  {
    slug: "leishmania-donovani",
    name: "Visceral Leishmania",
    scientificName: "Leishmania donovani",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Sandfly-borne intracellular flagellate. Causes kala-azar with massive hepatosplenomegaly, pancytopenia, and darkened skin.",
  },
  {
    slug: "trichomonas-vaginalis",
    name: "Trichomonas",
    scientificName: "Trichomonas vaginalis",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Sexual",
    description:
      "Motile pear-shaped flagellate of the urogenital tract. Causes frothy yellow-green vaginitis and the colposcopic 'strawberry cervix'.",
  },
  {
    slug: "entamoeba-histolytica",
    name: "Entamoeba",
    scientificName: "Entamoeba histolytica",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Tissue-invasive amoeba. Causes flask-shaped colon ulcers, bloody dysentery, and metastatic 'anchovy-paste' liver abscesses.",
  },
  {
    slug: "naegleria-fowleri",
    name: "Brain-eating amoeba",
    scientificName: "Naegleria fowleri",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Waterborne",
    description:
      "Free-living amoeba of warm freshwater that ascends the nasal cribriform plate. Causes near-uniformly fatal primary amoebic meningoencephalitis.",
  },
  {
    slug: "acanthamoeba-castellanii",
    name: "Acanthamoeba",
    scientificName: "Acanthamoeba castellanii",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Waterborne",
    description:
      "Free-living amoeba with spiked acanthopodia. Causes contact-lens keratitis and granulomatous amoebic encephalitis in immunocompromised hosts.",
  },
  {
    slug: "ascaris-lumbricoides",
    name: "Giant roundworm",
    scientificName: "Ascaris lumbricoides",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "The largest human intestinal nematode. Eggs ingested from contaminated soil hatch in the gut; larvae migrate through lungs (Löffler) before maturing.",
  },
  {
    slug: "enterobius-vermicularis",
    name: "Pinworm",
    scientificName: "Enterobius vermicularis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Fecal-oral",
    description:
      "Small white nematode that lays sticky perianal eggs at night. Causes intensely itchy nocturnal pruritus ani; diagnosed by the cellophane-tape test.",
  },
  {
    slug: "strongyloides-stercoralis",
    name: "Strongyloides",
    scientificName: "Strongyloides stercoralis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Nematode whose larvae penetrate skin from soil and autoinfect. Causes serpiginous larva currens rash and life-threatening hyperinfection on steroids.",
  },
  {
    slug: "trichinella-spiralis",
    name: "Trichinella",
    scientificName: "Trichinella spiralis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Encysted larvae acquired from undercooked pork or game. Causes trichinellosis: fever, periorbital edema, myositis, and marked eosinophilia.",
  },
  {
    slug: "wuchereria-bancrofti",
    name: "Bancroft filaria",
    scientificName: "Wuchereria bancrofti",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Mosquito-borne filarial nematode that lodges in lymphatics. Chronic infection causes lymphedema and elephantiasis of the legs and scrotum.",
  },
  {
    slug: "onchocerca-volvulus",
    name: "River-blindness worm",
    scientificName: "Onchocerca volvulus",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Blackfly-borne filarial nematode. Subcutaneous nodules release microfilariae that invade the eye, causing river blindness in sub-Saharan Africa.",
  },
  {
    slug: "necator-americanus",
    name: "Hookworm",
    scientificName: "Necator americanus",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Skin-penetrating nematode of warm soils. Adult worms attach to the duodenum and bleed mucosa, causing chronic iron-deficiency anemia.",
  },
  {
    slug: "schistosoma-mansoni",
    name: "Mansoni fluke",
    scientificName: "Schistosoma mansoni",
    group: "Helminth",
    form: "Trematode",
    transmission: "Waterborne",
    description:
      "Snail-cycled trematode whose cercariae penetrate skin in freshwater. Adults live in mesenteric veins; eggs cause hepatic granulomas and portal hypertension.",
  },
  {
    slug: "fasciola-hepatica",
    name: "Liver fluke",
    scientificName: "Fasciola hepatica",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Large leaf-shaped liver fluke acquired from watercress containing encysted metacercariae. Migrating juveniles cause hepatomegaly and bile-duct obstruction.",
  },
  {
    slug: "clonorchis-sinensis",
    name: "Chinese liver fluke",
    scientificName: "Clonorchis sinensis",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Trematode of East Asia acquired from raw or pickled freshwater fish. Chronic biliary infection predisposes to cholangiocarcinoma.",
  },
  {
    slug: "taenia-solium",
    name: "Pork tapeworm",
    scientificName: "Taenia solium",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Cestode acquired from undercooked pork (intestinal taeniasis). Ingestion of eggs causes cysticercosis with brain cysts and seizures (neurocysticercosis).",
  },
  {
    slug: "echinococcus-granulosus",
    name: "Hydatid tapeworm",
    scientificName: "Echinococcus granulosus",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Tiny canid cestode whose eggs, ingested from dog feces, develop into large hepatic and pulmonary hydatid cysts that rupture catastrophically.",
  },
  {
    slug: "sarcoptes-scabiei",
    name: "Scabies mite",
    scientificName: "Sarcoptes scabiei",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Burrowing mite that tunnels in the stratum corneum. Causes intensely itchy interdigital papules and crusted (Norwegian) scabies in the immunocompromised.",
  },
  {
    slug: "pediculus-humanus-capitis",
    name: "Head louse",
    scientificName: "Pediculus humanus capitis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Wingless biting insect of the scalp transmitted by head-to-head contact. Causes pruritus and visible nits cemented to hair shafts.",
  },
  {
    slug: "ixodes-scapularis",
    name: "Black-legged tick",
    scientificName: "Ixodes scapularis",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Hard-bodied tick of the eastern US. Vector for Borrelia burgdorferi, Babesia microti, Anaplasma, and Powassan virus; bites are painless.",
  },
];
