// Curated "pokédex" of medically notable parasites.
// Categories: broad group, taxonomic form, and route of transmission.

export const GROUPS = ["Protozoa", "Helminth", "Ectoparasite"] as const;
export type ParasiteGroup = (typeof GROUPS)[number];

export const FORMS = [
  "Apicomplexan",
  "Flagellate",
  "Amoeba",
  "Ciliate",
  "Microsporidian",
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
  {
    slug: "plasmodium-vivax",
    name: "Vivax malaria",
    scientificName: "Plasmodium vivax",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Apicomplexan with dormant hepatic hypnozoites that cause relapsing malaria months later. Prefers Duffy-positive young red cells; mostly tertian fever.",
  },
  {
    slug: "plasmodium-ovale",
    name: "Ovale malaria",
    scientificName: "Plasmodium ovale",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "West African apicomplexan that also forms hypnozoites and relapses. Schueffner-dotted oval red cells on smear.",
  },
  {
    slug: "plasmodium-malariae",
    name: "Quartan malaria",
    scientificName: "Plasmodium malariae",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Slow-growing apicomplexan with a 72-hour quartan fever cycle. Chronic low-grade parasitemia can cause nephrotic syndrome.",
  },
  {
    slug: "plasmodium-knowlesi",
    name: "Knowlesi malaria",
    scientificName: "Plasmodium knowlesi",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Zoonotic SE-Asian apicomplexan of macaques. Rapid 24-hour cycle drives high parasitemia and severe disease in humans.",
  },
  {
    slug: "cyclospora-cayetanensis",
    name: "Cyclospora",
    scientificName: "Cyclospora cayetanensis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Foodborne",
    description:
      "Coccidian apicomplexan whose oocysts contaminate imported berries, basil, and lettuce. Causes prolonged watery diarrhea with marked fatigue.",
  },
  {
    slug: "cystoisospora-belli",
    name: "Cystoisospora",
    scientificName: "Cystoisospora belli",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Fecal-oral",
    description:
      "Coccidian (formerly Isospora) whose ellipsoidal oocysts cause chronic watery diarrhea in AIDS and other immunocompromised patients.",
  },
  {
    slug: "balantidium-coli",
    name: "Balantidium",
    scientificName: "Balantidium coli",
    group: "Protozoa",
    form: "Ciliate",
    transmission: "Fecal-oral",
    description:
      "The only ciliate that infects humans, acquired from pig feces. Trophozoites invade the colonic mucosa causing dysentery-like illness.",
  },
  {
    slug: "leishmania-braziliensis",
    name: "Mucocutaneous Leish",
    scientificName: "Leishmania braziliensis",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Sandfly-borne flagellate of the New World. Late metastatic mucosal destruction of the nose and palate (espundia) follows the primary skin lesion.",
  },
  {
    slug: "dientamoeba-fragilis",
    name: "Dientamoeba",
    scientificName: "Dientamoeba fragilis",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Fecal-oral",
    description:
      "Cyst-less trichomonad of the colon with characteristic binucleate trophozoites. Causes chronic abdominal pain, diarrhea, and eosinophilia.",
  },
  {
    slug: "enterocytozoon-bieneusi",
    name: "Microsporidia",
    scientificName: "Enterocytozoon bieneusi",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Fecal-oral",
    description:
      "Tiny obligate intracellular microsporidian (now considered a fungus) that infects enterocytes. Causes chronic diarrhea in advanced HIV/AIDS.",
  },
  {
    slug: "balamuthia-mandrillaris",
    name: "Balamuthia",
    scientificName: "Balamuthia mandrillaris",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Contact",
    description:
      "Free-living soil amoeba causing chronic granulomatous amoebic encephalitis and disfiguring centrofacial skin lesions in immunocompetent hosts.",
  },
  {
    slug: "ancylostoma-duodenale",
    name: "Old World hookworm",
    scientificName: "Ancylostoma duodenale",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Skin-penetrating hookworm of Eurasia and North Africa with cutting teeth that grip the duodenal wall. Causes chronic iron-deficiency anemia.",
  },
  {
    slug: "toxocara-canis",
    name: "Toxocara",
    scientificName: "Toxocara canis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Fecal-oral",
    description:
      "Dog ascarid whose eggs hatch in humans into wandering larvae. Causes visceral and ocular larva migrans, especially in children eating dirt.",
  },
  {
    slug: "anisakis-simplex",
    name: "Anisakis",
    scientificName: "Anisakis simplex",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Marine nematode acquired from raw or undercooked fish. Larvae burrow into gastric mucosa, causing acute epigastric pain hours after sushi.",
  },
  {
    slug: "dracunculus-medinensis",
    name: "Guinea worm",
    scientificName: "Dracunculus medinensis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Waterborne",
    description:
      "Long subcutaneous nematode acquired from copepod-infested drinking water. Gravid female emerges through a leg ulcer to release larvae.",
  },
  {
    slug: "loa-loa",
    name: "Eye worm",
    scientificName: "Loa loa",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Deer-fly-borne African filaria. Adult worms migrate through subcutaneous tissues — sometimes visibly across the conjunctiva — with Calabar swellings.",
  },
  {
    slug: "brugia-malayi",
    name: "Brugia",
    scientificName: "Brugia malayi",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Mosquito-borne lymphatic filaria of South and Southeast Asia. Causes lymphedema and elephantiasis, predominantly of the lower limbs.",
  },
  {
    slug: "trichuris-trichiura",
    name: "Whipworm",
    scientificName: "Trichuris trichiura",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Whip-shaped nematode that threads its anterior end into colonic mucosa. Heavy infection causes chronic diarrhea, anemia, and rectal prolapse in children.",
  },
  {
    slug: "baylisascaris-procyonis",
    name: "Raccoon roundworm",
    scientificName: "Baylisascaris procyonis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Fecal-oral",
    description:
      "Raccoon ascarid whose eggs ingested from contaminated soil cause aggressive ocular and neural larva migrans, sometimes fatal eosinophilic meningoencephalitis.",
  },
  {
    slug: "angiostrongylus-cantonensis",
    name: "Rat lungworm",
    scientificName: "Angiostrongylus cantonensis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Nematode acquired by eating raw snails, slugs, or contaminated produce. Larvae invade the CNS, causing eosinophilic meningitis.",
  },
  {
    slug: "gnathostoma-spinigerum",
    name: "Gnathostoma",
    scientificName: "Gnathostoma spinigerum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Larval nematode of Asia and Latin America acquired from raw fish or fowl. Causes migratory subcutaneous swellings and rare eosinophilic meningitis.",
  },
  {
    slug: "capillaria-philippinensis",
    name: "Capillaria",
    scientificName: "Capillaria philippinensis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Tiny intestinal nematode acquired from raw freshwater fish in SE Asia. Autoinfection drives a chronic protein-losing enteropathy with high mortality.",
  },
  {
    slug: "mansonella-perstans",
    name: "Mansonella",
    scientificName: "Mansonella perstans",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Midge-borne filaria of central Africa. Adults inhabit serous cavities; microfilariae circulate without sheath; many infections are minimally symptomatic.",
  },
  {
    slug: "schistosoma-haematobium",
    name: "Urinary schisto",
    scientificName: "Schistosoma haematobium",
    group: "Helminth",
    form: "Trematode",
    transmission: "Waterborne",
    description:
      "African snail-cycled trematode whose adults inhabit pelvic venules. Egg deposition in the bladder wall causes hematuria and squamous-cell bladder cancer.",
  },
  {
    slug: "schistosoma-japonicum",
    name: "Asian schisto",
    scientificName: "Schistosoma japonicum",
    group: "Helminth",
    form: "Trematode",
    transmission: "Waterborne",
    description:
      "East-Asian trematode with the heaviest egg output. Mesenteric-vein adults deposit eggs that drive severe hepatic granulomas and Katayama fever.",
  },
  {
    slug: "paragonimus-westermani",
    name: "Lung fluke",
    scientificName: "Paragonimus westermani",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Asian trematode acquired from raw freshwater crab or crayfish. Adults encyst in lung parenchyma, causing chronic cough with rusty hemoptysis.",
  },
  {
    slug: "opisthorchis-viverrini",
    name: "Opisthorchis",
    scientificName: "Opisthorchis viverrini",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "SE-Asian liver fluke acquired from raw freshwater fish. Chronic infection of the biliary tree is a major cause of cholangiocarcinoma.",
  },
  {
    slug: "fasciolopsis-buski",
    name: "Fasciolopsis",
    scientificName: "Fasciolopsis buski",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Giant intestinal fluke of Asia acquired from raw water plants such as water chestnut. Adult worms cause ulceration, malabsorption, and edema.",
  },
  {
    slug: "taenia-saginata",
    name: "Beef tapeworm",
    scientificName: "Taenia saginata",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Long beef tapeworm acquired from undercooked beef. Usually only mild GI symptoms; motile proglottids in stool tip off the diagnosis.",
  },
  {
    slug: "diphyllobothrium-latum",
    name: "Fish tapeworm",
    scientificName: "Diphyllobothrium latum",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Largest human tapeworm, acquired from raw freshwater fish. Voraciously consumes vitamin B12, causing megaloblastic anemia.",
  },
  {
    slug: "echinococcus-multilocularis",
    name: "Alveolar hydatid",
    scientificName: "Echinococcus multilocularis",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Fox/rodent-cycled cestode whose ingested eggs produce a slowly invasive, tumor-like alveolar hepatic mass — often inoperable.",
  },
  {
    slug: "hymenolepis-nana",
    name: "Dwarf tapeworm",
    scientificName: "Hymenolepis nana",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Tiny cestode capable of fecal-oral autoinfection without an intermediate host. The most common tapeworm of children worldwide.",
  },
  {
    slug: "dipylidium-caninum",
    name: "Dog tapeworm",
    scientificName: "Dipylidium caninum",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Cestode of dogs and cats acquired by accidentally swallowing infected fleas. Children pass pumpkin-seed-shaped proglottids in stool.",
  },
  {
    slug: "pediculus-humanus-corporis",
    name: "Body louse",
    scientificName: "Pediculus humanus corporis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Wingless biting louse of clothing seams. Vector for epidemic typhus (Rickettsia prowazekii), trench fever, and louse-borne relapsing fever.",
  },
  {
    slug: "phthirus-pubis",
    name: "Pubic louse",
    scientificName: "Phthirus pubis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Sexual",
    description:
      "Crab-shaped louse of coarse body hair, mostly transmitted sexually. Causes intense pruritus and blue-gray maculae cerulae at bite sites.",
  },
  {
    slug: "demodex-folliculorum",
    name: "Demodex",
    scientificName: "Demodex folliculorum",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Microscopic mite of facial hair follicles. Normally commensal but overgrowth contributes to rosacea and demodicidosis blepharitis.",
  },
  {
    slug: "cimex-lectularius",
    name: "Bedbug",
    scientificName: "Cimex lectularius",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Nocturnal blood-feeding insect of mattresses and luggage. Causes clusters of itchy bite papules; not known to transmit pathogens.",
  },
  {
    slug: "ctenocephalides-felis",
    name: "Cat flea",
    scientificName: "Ctenocephalides felis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Dominant flea on pets worldwide. Bites cause papular urticaria; transmits Bartonella henselae, Rickettsia typhi, and Dipylidium tapeworm cysts.",
  },
  {
    slug: "dermatobia-hominis",
    name: "Human botfly",
    scientificName: "Dermatobia hominis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Neotropical botfly whose mosquito-vectored larva burrows into skin to cause furuncular myiasis — a painful boil with a breathing pore.",
  },
  {
    slug: "cochliomyia-hominivorax",
    name: "Screwworm fly",
    scientificName: "Cochliomyia hominivorax",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Obligate parasitic fly whose larvae feed on living tissue at open wounds. Causes destructive wound myiasis if not removed.",
  },
  {
    slug: "tunga-penetrans",
    name: "Chigoe flea",
    scientificName: "Tunga penetrans",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Sand flea whose gravid female burrows into the skin of the feet (tungiasis). Painful pea-sized white lesions with a central dark dot.",
  },
  {
    slug: "dermatophagoides-pteronyssinus",
    name: "Dust mite",
    scientificName: "Dermatophagoides pteronyssinus",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Microscopic mite of bedding and upholstery feeding on skin scales. A leading driver of perennial allergic rhinitis and atopic asthma.",
  },
  {
    slug: "trombicula-akamushi",
    name: "Chigger mite",
    scientificName: "Leptotrombidium akamushi",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Trombiculid larva that feeds once on lymph at human skin. The Asian-Pacific vector of scrub typhus (Orientia tsutsugamushi).",
  },
  {
    slug: "plasmodium-falciparum-artemisinin-r",
    name: "Artemisinin-resistant P. falciparum",
    scientificName: "Plasmodium falciparum (PfKelch13)",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "PfKelch13-mutant parasite first reported on the Thai–Cambodian border. Delayed parasite clearance on artemisinins is now spreading into Africa.",
  },
  {
    slug: "cryptosporidium-hominis",
    name: "Cryptosporidium hominis",
    scientificName: "Cryptosporidium hominis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Waterborne",
    description:
      "Anthroponotic cryptosporidian shed only by humans. The leading cause of pediatric cryptosporidial diarrhea in low- and middle-income countries.",
  },
  {
    slug: "babesia-divergens",
    name: "Babesia divergens",
    scientificName: "Babesia divergens",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "European bovine babesia transmitted by Ixodes ricinus. Causes severe babesiosis in splenectomized patients, often progressing to multiorgan failure.",
  },
  {
    slug: "blastocystis-hominis",
    name: "Blastocystis",
    scientificName: "Blastocystis hominis",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Pleomorphic anaerobic stramenopile found in stool of healthy adults and patients with chronic diarrhea and IBS. Pathogenicity remains debated.",
  },
  {
    slug: "leishmania-tropica",
    name: "Leishmania tropica",
    scientificName: "Leishmania tropica",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Sandfly-borne Old-World flagellate. Causes anthroponotic urban cutaneous leishmaniasis with dry chronic ulcers ('Oriental sore').",
  },
  {
    slug: "leishmania-infantum",
    name: "Leishmania infantum",
    scientificName: "Leishmania infantum",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Mediterranean and Latin-American zoonotic flagellate cycling in dogs. Causes infantile visceral leishmaniasis and HIV-associated kala-azar.",
  },
  {
    slug: "trypanosoma-rangeli",
    name: "Trypanosoma rangeli",
    scientificName: "Trypanosoma rangeli",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Kissing-bug-borne flagellate cycling alongside T. cruzi. Apparently non-pathogenic but complicates Chagas serology.",
  },
  {
    slug: "iodamoeba-buetschlii",
    name: "Iodamoeba",
    scientificName: "Iodamoeba bütschlii",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Non-pathogenic intestinal amoeba with a large iodine-staining glycogen vacuole. A frequent benign finding that aids interpretation of stool ova-and-parasite exams.",
  },
  {
    slug: "entamoeba-dispar",
    name: "Entamoeba dispar",
    scientificName: "Entamoeba dispar",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Morphologically identical to E. histolytica but non-invasive. Distinguishing the two by antigen or PCR avoids unnecessary metronidazole therapy.",
  },
  {
    slug: "encephalitozoon-cuniculi",
    name: "Encephalitozoon cuniculi",
    scientificName: "Encephalitozoon cuniculi",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Fecal-oral",
    description:
      "Tiny obligate intracellular microsporidian of rabbits. Causes disseminated and CNS microsporidiosis in transplant and HIV patients.",
  },
  {
    slug: "encephalitozoon-intestinalis",
    name: "Encephalitozoon intestinalis",
    scientificName: "Encephalitozoon intestinalis",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Fecal-oral",
    description:
      "Microsporidian that infects intestinal epithelium and disseminates. Causes chronic diarrhea and biliary disease in AIDS.",
  },
  {
    slug: "trichuris-vulpis",
    name: "Trichuris vulpis (zoonotic whipworm)",
    scientificName: "Trichuris vulpis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Canine whipworm. Rare zoonotic human infection causes chronic colonic inflammation, mainly in children exposed to dog feces.",
  },
  {
    slug: "trichostrongylus",
    name: "Trichostrongylus",
    scientificName: "Trichostrongylus colubriformis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Goat/sheep parasite acquired from contaminated produce. Causes asymptomatic to mild eosinophilic enteritis in agricultural workers.",
  },
  {
    slug: "halicephalobus-gingivalis",
    name: "Halicephalobus",
    scientificName: "Halicephalobus gingivalis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Free-living soil nematode that can invade mammals. Causes rare but uniformly fatal eosinophilic meningoencephalitis after horse exposure.",
  },
  {
    slug: "anisakis-pegreffii",
    name: "Anisakis pegreffii",
    scientificName: "Anisakis pegreffii",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Mediterranean sibling of A. simplex. Causes anisakiasis after raw or undercooked fish; allergic IgE reactions can occur even after thorough cooking.",
  },
  {
    slug: "thelazia-callipaeda",
    name: "Thelazia (eye worm)",
    scientificName: "Thelazia callipaeda",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Fly-borne nematode that lives on the eye surface. Causes conjunctivitis with adult worms visible crawling under the eyelid in endemic Asia and Europe.",
  },
  {
    slug: "dracunculus-medinensis-aquatic",
    name: "Dracunculus medinensis (animal hosts)",
    scientificName: "Dracunculus medinensis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Waterborne",
    description:
      "Zoonotic reservoirs in dogs and fish complicate Guinea-worm eradication. The animal cycle keeps the parasite circulating despite near-zero human cases.",
  },
  {
    slug: "echinococcus-vogeli",
    name: "Echinococcus vogeli",
    scientificName: "Echinococcus vogeli",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "South-American cestode cycling between bush dogs and pacas. Causes polycystic hydatid disease of the liver and abdomen.",
  },
  {
    slug: "spirometra-mansonoides",
    name: "Spirometra",
    scientificName: "Spirometra mansonoides",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Pseudophyllidean cestode whose plerocercoid larva (sparganum) migrates through subcutaneous tissues, eye, or brain (sparganosis).",
  },
  {
    slug: "ornithodoros-moubata",
    name: "Soft tick",
    scientificName: "Ornithodoros moubata",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "African soft tick that feeds quickly and painlessly at night. The principal vector of louse-borne relapsing-fever Borrelia in cave and shelter settings.",
  },
  {
    slug: "amblyomma-americanum",
    name: "Lone-star tick",
    scientificName: "Amblyomma americanum",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Aggressive American tick whose female has a white dorsal spot. Vector for ehrlichiosis, tularemia, Heartland virus, and the alpha-gal red-meat allergy.",
  },
  {
    slug: "dermacentor-variabilis",
    name: "American dog tick",
    scientificName: "Dermacentor variabilis",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Hard tick of the eastern US. Vector for Rocky Mountain spotted fever, tularemia, and tick paralysis from neurotoxic saliva.",
  },
  {
    slug: "leptotrombidium-deliense",
    name: "Trombiculid chigger",
    scientificName: "Leptotrombidium deliense",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Asian-Pacific trombiculid larva. Bites cause an eschar and transmit Orientia tsutsugamushi (scrub typhus).",
  },
  {
    slug: "ornithonyssus-sylviarum",
    name: "Northern fowl mite",
    scientificName: "Ornithonyssus sylviarum",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Avian mite that bites humans handling poultry or pigeons. Causes pruritic papular dermatitis without persisting on human skin.",
  },
  {
    slug: "cheyletiella-blakei",
    name: "Cheyletiella (walking dandruff)",
    scientificName: "Cheyletiella blakei",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Surface-dwelling cat fur mite that appears as mobile dandruff. Causes intensely itchy papular rash on owners and groomers.",
  },
  {
    slug: "plasmodium-cynomolgi",
    name: "Plasmodium cynomolgi",
    scientificName: "Plasmodium cynomolgi",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Zoonotic macaque malaria parasite forming hypnozoites. Sporadic naturally acquired human cases in Southeast Asia confirmed by PCR.",
  },
  {
    slug: "cyclospora-acidiformis",
    name: "Cyclospora acidiformis",
    scientificName: "Cyclospora acidiformis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Foodborne",
    description:
      "Animal-associated cousin of C. cayetanensis. Rare reported human infections cause prolonged diarrhea similar to classic cyclosporiasis.",
  },
  {
    slug: "neospora-caninum",
    name: "Neospora caninum",
    scientificName: "Neospora caninum",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Fecal-oral",
    description:
      "Apicomplexan of dogs and cattle closely related to Toxoplasma. Rare opportunistic human encephalitis reported in HIV.",
  },
  {
    slug: "sarcocystis-suihominis",
    name: "Sarcocystis",
    scientificName: "Sarcocystis suihominis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Foodborne",
    description:
      "Coccidian acquired by eating raw pork. Forms muscle cysts and causes intestinal sarcocystosis with diarrhea and abdominal pain.",
  },
  {
    slug: "trichomonas-tenax",
    name: "Trichomonas tenax",
    scientificName: "Trichomonas tenax",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Contact",
    description:
      "Oral cavity flagellate of poor dental hygiene. Aspiration causes rare empyema and pulmonary infection in immunocompromised patients.",
  },
  {
    slug: "trichomonas-hominis",
    name: "Pentatrichomonas hominis",
    scientificName: "Pentatrichomonas hominis",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Fecal-oral",
    description:
      "Five-flagellated intestinal flagellate. Considered non-pathogenic but distinguishing it from T. vaginalis is useful in stool exams.",
  },
  {
    slug: "endolimax-nana",
    name: "Endolimax nana",
    scientificName: "Endolimax nana",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Tiny non-pathogenic intestinal amoeba with a small karyosomal nucleus. A common marker of fecal-oral exposure on stool exam.",
  },
  {
    slug: "entamoeba-coli",
    name: "Entamoeba coli (commensal)",
    scientificName: "Entamoeba coli",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Non-pathogenic intestinal amoeba with 8-nucleated cysts. Must be distinguished from E. histolytica to avoid unnecessary treatment.",
  },
  {
    slug: "vittaforma-corneae",
    name: "Vittaforma corneae",
    scientificName: "Vittaforma corneae",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Contact",
    description:
      "Microsporidian causing keratoconjunctivitis, especially in contact-lens wearers and AIDS patients.",
  },
  {
    slug: "ascaris-suum",
    name: "Ascaris suum (pig)",
    scientificName: "Ascaris suum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Pig roundworm. Zoonotic human infection causes visceral larva migrans and Löffler-like pulmonary syndrome.",
  },
  {
    slug: "toxocara-cati",
    name: "Toxocara cati",
    scientificName: "Toxocara cati",
    group: "Helminth",
    form: "Nematode",
    transmission: "Fecal-oral",
    description:
      "Cat roundworm whose ingested eggs cause visceral and ocular larva migrans in children playing in sandboxes contaminated with cat feces.",
  },
  {
    slug: "ancylostoma-braziliense",
    name: "Cutaneous larva migrans (Ancylostoma braziliense)",
    scientificName: "Ancylostoma braziliense",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Tropical hookworm of dogs and cats. Larvae penetrate skin and cause itchy serpiginous tracks ('creeping eruption') on the feet of beach-goers.",
  },
  {
    slug: "syngamus-laryngeus",
    name: "Mammomonogamus",
    scientificName: "Mammomonogamus laryngeus",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Y-shaped nematode parasite of ruminant airways. Causes chronic cough with adult worms found attached in the human larynx.",
  },
  {
    slug: "ternidens-deminutus",
    name: "Ternidens deminutus",
    scientificName: "Ternidens deminutus",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "False hookworm of African primates. Causes anemia and intestinal nodules in chronically infected human populations.",
  },
  {
    slug: "diphyllobothrium-pacificum",
    name: "Diphyllobothrium pacificum",
    scientificName: "Adenocephalus pacificus",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Marine fish tapeworm common along the Pacific coast of the Americas. Acquired from raw ceviche; usually mild GI symptoms.",
  },
  {
    slug: "echinococcus-oligarthrus",
    name: "Echinococcus oligarthrus",
    scientificName: "Echinococcus oligarthrus",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Neotropical felid cestode whose larva causes polycystic neotropical echinococcosis. Mainly hepatic and muscular cysts.",
  },
  {
    slug: "raillietina-celebensis",
    name: "Raillietina",
    scientificName: "Raillietina celebensis",
    group: "Helminth",
    form: "Cestode",
    transmission: "Fecal-oral",
    description:
      "Rodent cestode acquired by ingesting infected grain beetles. Causes mild abdominal symptoms in tropical children.",
  },
  {
    slug: "amblyomma-cajennense",
    name: "Cayenne tick",
    scientificName: "Amblyomma cajennense",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Neotropical hard tick. Major vector of Brazilian spotted fever (Rickettsia rickettsii) across Central and South America.",
  },
  {
    slug: "rhipicephalus-sanguineus",
    name: "Brown dog tick",
    scientificName: "Rhipicephalus sanguineus",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Cosmopolitan kennel-loving tick. Vector for Rocky Mountain spotted fever in the southwestern US and Mediterranean spotted fever in Europe.",
  },
  {
    slug: "androlaelaps-casalis",
    name: "Tropical fowl mite",
    scientificName: "Androlaelaps casalis",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Mite of poultry and rodents that bites humans, causing pruritic papular dermatitis in workers handling infested birds.",
  },

  // ===== Protozoa (batch) =====
  {
    slug: "leishmania-major",
    name: "Leishmania major",
    scientificName: "Leishmania major",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Sandfly-borne Old-World flagellate causing zoonotic 'wet' cutaneous leishmaniasis with rapidly ulcerating sores across the Middle East and Africa.",
  },
  {
    slug: "leishmania-mexicana",
    name: "Leishmania mexicana",
    scientificName: "Leishmania mexicana",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "New-World flagellate causing localized cutaneous leishmaniasis, including the ear-destroying 'chiclero ulcer' of forest workers.",
  },
  {
    slug: "trypanosoma-brucei-gambiense",
    name: "T. b. gambiense",
    scientificName: "Trypanosoma brucei gambiense",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Tsetse-borne West African flagellate causing the chronic, slowly progressive form of sleeping sickness; humans are the main reservoir.",
  },
  {
    slug: "trypanosoma-brucei-rhodesiense",
    name: "T. b. rhodesiense",
    scientificName: "Trypanosoma brucei rhodesiense",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "Tsetse-borne East African flagellate causing acute, rapidly fatal sleeping sickness; maintained in animal reservoirs.",
  },
  {
    slug: "babesia-duncani",
    name: "Babesia duncani",
    scientificName: "Babesia duncani",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "US Pacific-coast apicomplexan (the WA1 agent) that parasitizes red cells, causing a malaria-like babesiosis severe in asplenic patients.",
  },
  {
    slug: "sarcocystis-hominis",
    name: "Sarcocystis hominis",
    scientificName: "Sarcocystis hominis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Foodborne",
    description:
      "Apicomplexan acquired from undercooked beef. Humans are the definitive host, developing self-limited intestinal sarcocystosis.",
  },
  {
    slug: "entamoeba-gingivalis",
    name: "Entamoeba gingivalis",
    scientificName: "Entamoeba gingivalis",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Contact",
    description:
      "Oral amoeba found in periodontal pockets and tonsillar crypts. Generally commensal but enriched in periodontitis.",
  },
  {
    slug: "chilomastix-mesnili",
    name: "Chilomastix mesnili",
    scientificName: "Chilomastix mesnili",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Fecal-oral",
    description:
      "Non-pathogenic intestinal flagellate. Important mainly as a marker of fecal contamination and a mimic of pathogenic protozoa on stool exams.",
  },
  {
    slug: "encephalitozoon-hellem",
    name: "Encephalitozoon hellem",
    scientificName: "Encephalitozoon hellem",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Fecal-oral",
    description:
      "Microsporidian causing keratoconjunctivitis and disseminated infection of the eyes, sinuses, and urinary tract in advanced HIV.",
  },

  // ===== Helminths (batch) =====
  {
    slug: "ancylostoma-caninum",
    name: "Ancylostoma caninum",
    scientificName: "Ancylostoma caninum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Dog hookworm whose larvae penetrate human skin. Causes cutaneous larva migrans and, when it reaches the gut, eosinophilic enteritis.",
  },
  {
    slug: "dirofilaria-immitis",
    name: "Dog heartworm",
    scientificName: "Dirofilaria immitis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Mosquito-borne canine filaria. Dead-end human infection lodges in the lung as a benign coin lesion mimicking malignancy.",
  },
  {
    slug: "mansonella-ozzardi",
    name: "Mansonella ozzardi",
    scientificName: "Mansonella ozzardi",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Midge- and blackfly-borne filaria of the Americas. Usually mild, with arthralgia, pruritus, and circulating microfilariae.",
  },
  {
    slug: "angiostrongylus-costaricensis",
    name: "Angiostrongylus costaricensis",
    scientificName: "Angiostrongylus costaricensis",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Nematode of Latin America acquired from slug-contaminated produce. Larvae invade mesenteric arteries, causing abdominal angiostrongyliasis mimicking appendicitis.",
  },
  {
    slug: "oesophagostomum-bifurcum",
    name: "Oesophagostomum",
    scientificName: "Oesophagostomum bifurcum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Soil-transmitted",
    description:
      "Nodular nematode of West Africa. Larvae encyst in the bowel wall, producing the inflammatory abdominal 'Dapaong tumor'.",
  },
  {
    slug: "heterophyes-heterophyes",
    name: "Heterophyes",
    scientificName: "Heterophyes heterophyes",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Minute intestinal fluke acquired from raw brackish-water fish. Causes mild diarrhea; eggs can embolize to the heart or brain.",
  },
  {
    slug: "metagonimus-yokogawai",
    name: "Metagonimus",
    scientificName: "Metagonimus yokogawai",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "The smallest human fluke, acquired from raw freshwater fish in East Asia. Causes intestinal inflammation and diarrhea.",
  },
  {
    slug: "dicrocoelium-dendriticum",
    name: "Lancet liver fluke",
    scientificName: "Dicrocoelium dendriticum",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Lancet-shaped bile-duct fluke acquired by accidentally swallowing infected ants. Often a spurious finding from eating infected liver.",
  },
  {
    slug: "trichobilharzia-regenti",
    name: "Swimmer's-itch schistosome",
    scientificName: "Trichobilharzia regenti",
    group: "Helminth",
    form: "Trematode",
    transmission: "Waterborne",
    description:
      "Avian schistosome whose cercariae penetrate human skin in freshwater, causing the itchy papular rash of cercarial dermatitis (swimmer's itch).",
  },
  {
    slug: "hymenolepis-diminuta",
    name: "Rat tapeworm",
    scientificName: "Hymenolepis diminuta",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Rodent tapeworm transmitted by ingesting infected grain beetles. Causes rare, usually mild, human infection in children.",
  },

  // ===== Ectoparasites (batch) =====
  {
    slug: "xenopsylla-cheopis",
    name: "Oriental rat flea",
    scientificName: "Xenopsylla cheopis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "The classic plague flea. Transmits Yersinia pestis from rats to humans and is also a vector of murine typhus.",
  },
  {
    slug: "pulex-irritans",
    name: "Human flea",
    scientificName: "Pulex irritans",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Cosmopolitan flea biting humans and pigs. Causes papular urticaria and can transmit plague and tapeworm cysts.",
  },
  {
    slug: "triatoma-infestans",
    name: "Kissing bug",
    scientificName: "Triatoma infestans",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Blood-feeding reduviid bug that bites at night near the eyes and mouth. The principal vector of Chagas disease (Trypanosoma cruzi).",
  },
  {
    slug: "glossina-morsitans",
    name: "Tsetse fly",
    scientificName: "Glossina morsitans",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Large biting fly of sub-Saharan Africa and the vector of African trypanosomiasis (sleeping sickness).",
  },
  {
    slug: "phlebotomus-papatasi",
    name: "Sandfly",
    scientificName: "Phlebotomus papatasi",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Tiny blood-feeding fly that transmits Leishmania, sandfly fever, and bartonellosis in the Old World.",
  },
  {
    slug: "simulium-damnosum",
    name: "Blackfly",
    scientificName: "Simulium damnosum",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Painful biting fly breeding in fast rivers. The vector of Onchocerca volvulus (river blindness) in Africa.",
  },
  {
    slug: "cordylobia-anthropophaga",
    name: "Tumbu fly",
    scientificName: "Cordylobia anthropophaga",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "African fly whose larvae hatch from eggs laid on drying laundry and burrow into skin, causing furuncular myiasis.",
  },
  {
    slug: "oestrus-ovis",
    name: "Sheep botfly",
    scientificName: "Oestrus ovis",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Sheep nasal botfly that deposits larvae onto the human eye, causing external ophthalmomyiasis in shepherds.",
  },
  {
    slug: "dermacentor-andersoni",
    name: "Rocky Mountain wood tick",
    scientificName: "Dermacentor andersoni",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Western US hard tick. Vector of Rocky Mountain spotted fever, Colorado tick fever, and tularemia, and a cause of tick paralysis.",
  },
  {
    slug: "ixodes-pacificus",
    name: "Western black-legged tick",
    scientificName: "Ixodes pacificus",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Pacific-coast Ixodes tick and the western US vector of Lyme disease, anaplasmosis, and babesiosis.",
  },

  // ===== Protozoa (batch 2) =====
  {
    slug: "leishmania-aethiopica",
    name: "Leishmania aethiopica",
    scientificName: "Leishmania aethiopica",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "East African hyrax-reservoir flagellate. Causes localized and rare diffuse cutaneous leishmaniasis that resists treatment.",
  },
  {
    slug: "leishmania-guyanensis",
    name: "Leishmania guyanensis",
    scientificName: "Leishmania guyanensis",
    group: "Protozoa",
    form: "Flagellate",
    transmission: "Vector-borne",
    description:
      "South American flagellate ('pian bois') causing cutaneous leishmaniasis that can spread along lymphatics.",
  },
  {
    slug: "acanthamoeba-polyphaga",
    name: "Acanthamoeba polyphaga",
    scientificName: "Acanthamoeba polyphaga",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Waterborne",
    description:
      "Free-living amoeba and a leading cause of contact-lens keratitis; also causes granulomatous encephalitis in the immunocompromised.",
  },
  {
    slug: "sappinia-pedata",
    name: "Sappinia",
    scientificName: "Sappinia pedata",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Contact",
    description:
      "Free-living amoeba implicated in a rare case of amoebic encephalitis in an immunocompetent person.",
  },
  {
    slug: "entamoeba-polecki",
    name: "Entamoeba polecki",
    scientificName: "Entamoeba polecki",
    group: "Protozoa",
    form: "Amoeba",
    transmission: "Fecal-oral",
    description:
      "Intestinal amoeba of pigs and primates. Usually a mild or asymptomatic infection found on stool examination.",
  },
  {
    slug: "trachipleistophora-hominis",
    name: "Trachipleistophora",
    scientificName: "Trachipleistophora hominis",
    group: "Protozoa",
    form: "Microsporidian",
    transmission: "Contact",
    description:
      "Microsporidian causing disseminated myositis and keratoconjunctivitis in advanced HIV.",
  },
  {
    slug: "babesia-venatorum",
    name: "Babesia venatorum",
    scientificName: "Babesia venatorum",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Vector-borne",
    description:
      "Ixodes-tick-borne apicomplexan (the EU1 agent) of Europe and China causing babesiosis, mainly in splenectomized patients.",
  },
  {
    slug: "cryptosporidium-meleagridis",
    name: "Cryptosporidium meleagridis",
    scientificName: "Cryptosporidium meleagridis",
    group: "Protozoa",
    form: "Apicomplexan",
    transmission: "Fecal-oral",
    description:
      "Avian-origin cryptosporidian and the third most common Cryptosporidium in human diarrhea, especially in HIV.",
  },

  // ===== Helminths (batch 2) =====
  {
    slug: "pseudoterranova-decipiens",
    name: "Cod worm",
    scientificName: "Pseudoterranova decipiens",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Marine anisakid nematode acquired from raw cod and other fish. Larvae cause gastric anisakiasis, sometimes coughed up after a tingling throat.",
  },
  {
    slug: "gongylonema-pulchrum",
    name: "Gullet worm",
    scientificName: "Gongylonema pulchrum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "Nematode acquired by swallowing infected beetles or roaches. The worm migrates in the lining of the mouth, causing a creeping sensation.",
  },
  {
    slug: "dioctophyme-renale",
    name: "Giant kidney worm",
    scientificName: "Dioctophyme renale",
    group: "Helminth",
    form: "Nematode",
    transmission: "Foodborne",
    description:
      "The largest parasitic nematode, acquired from raw fish or frogs. Destroys the kidney, causing hematuria and flank pain.",
  },
  {
    slug: "brugia-timori",
    name: "Brugia timori",
    scientificName: "Brugia timori",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Mosquito-borne lymphatic filaria confined to the Lesser Sunda Islands of Indonesia, causing limb lymphedema.",
  },
  {
    slug: "onchocerca-lupi",
    name: "Onchocerca lupi",
    scientificName: "Onchocerca lupi",
    group: "Helminth",
    form: "Nematode",
    transmission: "Vector-borne",
    description:
      "Zoonotic filaria of dogs and cats. Emerging human cases present with ocular and cervical-spine nodules.",
  },
  {
    slug: "capillaria-hepatica",
    name: "Capillaria hepatica",
    scientificName: "Calodium hepaticum",
    group: "Helminth",
    form: "Nematode",
    transmission: "Fecal-oral",
    description:
      "Rodent nematode whose eggs, ingested from contaminated soil, lodge in the liver causing hepatic capillariasis and granulomas.",
  },
  {
    slug: "schistosoma-mekongi",
    name: "Schistosoma mekongi",
    scientificName: "Schistosoma mekongi",
    group: "Helminth",
    form: "Trematode",
    transmission: "Waterborne",
    description:
      "Mekong-basin blood fluke transmitted by Neotricula snails. Causes hepatosplenic schistosomiasis like S. japonicum.",
  },
  {
    slug: "opisthorchis-felineus",
    name: "Cat liver fluke",
    scientificName: "Opisthorchis felineus",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Eastern European and Russian liver fluke acquired from raw freshwater fish. Chronic biliary infection is linked to cholangiocarcinoma.",
  },
  {
    slug: "paragonimus-kellicotti",
    name: "Paragonimus kellicotti",
    scientificName: "Paragonimus kellicotti",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "North American lung fluke acquired from raw crayfish. Causes cough, eosinophilia, and pleural effusions.",
  },
  {
    slug: "echinostoma-ilocanum",
    name: "Echinostoma",
    scientificName: "Echinostoma ilocanum",
    group: "Helminth",
    form: "Trematode",
    transmission: "Foodborne",
    description:
      "Intestinal fluke acquired from raw snails and bivalves in Asia. Causes abdominal pain and diarrhea with eosinophilia.",
  },
  {
    slug: "taenia-asiatica",
    name: "Asian tapeworm",
    scientificName: "Taenia asiatica",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Tapeworm acquired from pig viscera (liver) rather than muscle. Causes intestinal taeniasis across Asia, resembling T. saginata.",
  },
  {
    slug: "bertiella-studeri",
    name: "Bertiella",
    scientificName: "Bertiella studeri",
    group: "Helminth",
    form: "Cestode",
    transmission: "Foodborne",
    description:
      "Primate tapeworm transmitted by ingesting infected oribatid mites. Causes rare human infection in those handling monkeys.",
  },

  // ===== Ectoparasites / vectors (batch 2) =====
  {
    slug: "amblyomma-maculatum",
    name: "Gulf Coast tick",
    scientificName: "Amblyomma maculatum",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Aggressive American tick and vector of Rickettsia parkeri spotted fever, producing an inoculation eschar.",
  },
  {
    slug: "hyalomma-marginatum",
    name: "Hyalomma tick",
    scientificName: "Hyalomma marginatum",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Fast-moving hunting tick of Eurasia and Africa. The principal vector of Crimean-Congo hemorrhagic fever virus.",
  },
  {
    slug: "haemaphysalis-longicornis",
    name: "Asian longhorned tick",
    scientificName: "Haemaphysalis longicornis",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Invasive parthenogenetic tick spreading in the US. Vector of SFTS/Heartland-like viruses and a heavy livestock pest.",
  },
  {
    slug: "ornithodoros-hermsi",
    name: "Relapsing-fever soft tick",
    scientificName: "Ornithodoros hermsi",
    group: "Ectoparasite",
    form: "Arachnid",
    transmission: "Contact",
    description:
      "Western North American soft tick that feeds quickly at night in rustic cabins, transmitting tick-borne relapsing-fever Borrelia.",
  },
  {
    slug: "liponyssoides-sanguineus",
    name: "House-mouse mite",
    scientificName: "Liponyssoides sanguineus",
    group: "Ectoparasite",
    form: "Mite",
    transmission: "Contact",
    description:
      "Mite of house mice and the vector of rickettsialpox (Rickettsia akari) in urban settings.",
  },
  {
    slug: "rhodnius-prolixus",
    name: "Rhodnius (kissing bug)",
    scientificName: "Rhodnius prolixus",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Blood-feeding triatomine bug of northern South America and a major vector of Chagas disease.",
  },
  {
    slug: "chrysomya-bezziana",
    name: "Old World screwworm",
    scientificName: "Chrysomya bezziana",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Obligate myiasis fly of Africa and Asia whose larvae feed on living tissue in wounds and body orifices.",
  },
  {
    slug: "anopheles-gambiae",
    name: "Anopheles mosquito",
    scientificName: "Anopheles gambiae",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "The dominant African malaria mosquito and the primary vector of Plasmodium falciparum; also transmits lymphatic filariasis.",
  },
  {
    slug: "aedes-aegypti",
    name: "Aedes mosquito",
    scientificName: "Aedes aegypti",
    group: "Ectoparasite",
    form: "Arthropod",
    transmission: "Contact",
    description:
      "Daytime-biting urban mosquito and the chief vector of dengue, Zika, chikungunya, and yellow fever.",
  },
];
