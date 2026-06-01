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
];
