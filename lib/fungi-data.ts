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
  {
    slug: "candida-glabrata",
    name: "Candida glabrata",
    scientificName: "Nakaseomyces glabratus",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Small budding yeast that does not form hyphae. A frequent cause of invasive candidiasis with reduced azole and echinocandin susceptibility.",
  },
  {
    slug: "candida-tropicalis",
    name: "Candida tropicalis",
    scientificName: "Candida tropicalis",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Pseudohyphae-forming yeast. A leading cause of candidemia in neutropenic and hematologic-malignancy patients, with a high dissemination rate.",
  },
  {
    slug: "candida-parapsilosis",
    name: "Candida parapsilosis",
    scientificName: "Candida parapsilosis",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Biofilm-forming yeast that thrives on plastics and parenteral nutrition. The classic cause of catheter-related and neonatal ICU candidemia.",
  },
  {
    slug: "candida-krusei",
    name: "Candida krusei",
    scientificName: "Pichia kudriavzevii",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Yeast with intrinsic fluconazole resistance. Emerges as a breakthrough pathogen in patients on azole prophylaxis.",
  },
  {
    slug: "cryptococcus-gattii",
    name: "Cryptococcus gattii",
    scientificName: "Cryptococcus gattii",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Encapsulated yeast linked to eucalyptus and temperate forests. Unlike C. neoformans, causes mass-like brain and lung disease in immunocompetent hosts.",
  },
  {
    slug: "trichosporon-asahii",
    name: "Trichosporon",
    scientificName: "Trichosporon asahii",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Yeast-like fungus producing arthroconidia. Causes white piedra and fatal disseminated trichosporonosis in neutropenic patients; cross-reacts with cryptococcal antigen.",
  },
  {
    slug: "rhodotorula-mucilaginosa",
    name: "Rhodotorula",
    scientificName: "Rhodotorula mucilaginosa",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Salmon-pink environmental yeast. An uncommon cause of central-line-associated fungemia in immunocompromised patients; intrinsically echinocandin resistant.",
  },
  {
    slug: "saccharomyces-cerevisiae",
    name: "Saccharomyces",
    scientificName: "Saccharomyces cerevisiae",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Baker's and brewer's yeast, also used as the probiotic S. boulardii. Rarely causes fungemia, notably from probiotic use in critically ill patients.",
  },
  {
    slug: "malassezia-globosa",
    name: "Malassezia globosa",
    scientificName: "Malassezia globosa",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Lipid-dependent skin yeast. The main driver of dandruff and seborrheic dermatitis and a contributor to pityriasis versicolor.",
  },
  {
    slug: "aspergillus-niger",
    name: "Aspergillus niger",
    scientificName: "Aspergillus niger",
    morphology: "mold",
    group: "Mold",
    description:
      "Black-spored septate mold. The classic cause of otomycosis (fungal ear infection) and a major industrial citric-acid producer.",
  },
  {
    slug: "aspergillus-terreus",
    name: "Aspergillus terreus",
    scientificName: "Aspergillus terreus",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold notable for intrinsic amphotericin B resistance, complicating treatment of invasive aspergillosis.",
  },
  {
    slug: "lichtheimia-corymbifera",
    name: "Lichtheimia",
    scientificName: "Lichtheimia corymbifera",
    morphology: "mold",
    group: "Mold",
    description:
      "Fast-growing aseptate mold of the Mucorales. Causes angioinvasive mucormycosis after trauma or in diabetic and immunocompromised patients.",
  },
  {
    slug: "cunninghamella-bertholletiae",
    name: "Cunninghamella",
    scientificName: "Cunninghamella bertholletiae",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold with single-spored sporangiola. Causes a particularly aggressive, high-mortality pulmonary mucormycosis.",
  },
  {
    slug: "scedosporium-apiospermum",
    name: "Scedosporium",
    scientificName: "Scedosporium apiospermum",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold of soil and stagnant water. Causes mycetoma and pneumonia/brain abscess after near-drowning; resistant to amphotericin B.",
  },
  {
    slug: "lomentospora-prolificans",
    name: "Lomentospora",
    scientificName: "Lomentospora prolificans",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Pan-antifungal-resistant septate mold. Causes disseminated infection with very high mortality in neutropenic and transplant patients.",
  },
  {
    slug: "penicillium-chrysogenum",
    name: "Penicillium",
    scientificName: "Penicillium chrysogenum",
    morphology: "mold",
    group: "Mold",
    description:
      "Blue-green brush-headed mold and the original source of penicillin. A common environmental allergen and rare opportunistic pathogen.",
  },
  {
    slug: "alternaria-alternata",
    name: "Alternaria",
    scientificName: "Alternaria alternata",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold with muriform conidia and a major aeroallergen. Causes cutaneous phaeohyphomycosis and sinusitis, often in immunosuppression.",
  },
  {
    slug: "cladophialophora-bantiana",
    name: "Cladophialophora",
    scientificName: "Cladophialophora bantiana",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Neurotropic dematiaceous mold. The leading cause of cerebral phaeohyphomycosis (brain abscess), even in immunocompetent hosts.",
  },
  {
    slug: "fonsecaea-pedrosoi",
    name: "Fonsecaea",
    scientificName: "Fonsecaea pedrosoi",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous soil mold. The major agent of chromoblastomycosis — chronic warty skin nodules with sclerotic 'copper-penny' bodies in tissue.",
  },
  {
    slug: "exophiala-dermatitidis",
    name: "Exophiala (black yeast)",
    scientificName: "Exophiala dermatitidis",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Thermotolerant dematiaceous 'black yeast'. Colonizes cystic-fibrosis airways and dishwashers; causes phaeohyphomycosis and rare CNS infection.",
  },
  {
    slug: "madurella-mycetomatis",
    name: "Madurella",
    scientificName: "Madurella mycetomatis",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold and the chief agent of eumycetoma (Madura foot): chronic swelling with sinuses discharging black fungal grains.",
  },
  {
    slug: "trichophyton-tonsurans",
    name: "Trichophyton tonsurans",
    scientificName: "Trichophyton tonsurans",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte and the dominant cause of tinea capitis in North America, producing endothrix 'black-dot' scalp infection.",
  },
  {
    slug: "trichophyton-mentagrophytes",
    name: "Trichophyton mentagrophytes",
    scientificName: "Trichophyton mentagrophytes",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Zoophilic dermatophyte with spiral hyphae and grape-like microconidia. Causes inflammatory tinea corporis and pedis from animal contact.",
  },
  {
    slug: "microsporum-gypseum",
    name: "Microsporum gypseum",
    scientificName: "Nannizzia gypsea",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Geophilic dermatophyte from soil with rough, thin-walled macroconidia. Causes sporadic inflammatory ringworm in gardeners and children.",
  },
  {
    slug: "emergomyces-africanus",
    name: "Emergomyces",
    scientificName: "Emergomyces africanus",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Emerging thermally dimorphic fungus of southern Africa. Causes disseminated skin and systemic disease in advanced HIV (emergomycosis).",
  },
  {
    slug: "histoplasma-duboisii",
    name: "African Histoplasma",
    scientificName: "Histoplasma capsulatum var. duboisii",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus of central Africa with large tissue yeast forms. Causes African histoplasmosis dominated by skin and bone lesions.",
  },
  {
    slug: "coccidioides-posadasii",
    name: "Coccidioides posadasii",
    scientificName: "Coccidioides posadasii",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Sister species to C. immitis (Texas, Mexico, South America). Inhaled arthroconidia form tissue spherules causing Valley fever.",
  },
  {
    slug: "candida-dubliniensis",
    name: "Candida dubliniensis",
    scientificName: "Candida dubliniensis",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Germ-tube-positive yeast nearly identical to C. albicans. Originally identified in HIV oral thrush; distinguished by inability to grow at 42°C.",
  },
  {
    slug: "candida-lusitaniae",
    name: "Candida lusitaniae",
    scientificName: "Clavispora lusitaniae",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Yeast that frequently develops amphotericin B resistance during therapy. Causes catheter-related fungemia in immunocompromised patients.",
  },
  {
    slug: "candida-haemulonii",
    name: "Candida haemulonii",
    scientificName: "Candida haemulonii",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Multidrug-resistant marine-associated yeast closely related to C. auris. An emerging cause of fungemia and wound infections.",
  },
  {
    slug: "geotrichum-candidum",
    name: "Geotrichum",
    scientificName: "Geotrichum candidum",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Yeast-like filamentous fungus with rectangular arthroconidia. Causes geotrichosis: pulmonary, oral, and disseminated disease in the immunocompromised.",
  },
  {
    slug: "hortaea-werneckii",
    name: "Hortaea",
    scientificName: "Hortaea werneckii",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Halotolerant black yeast from salty environments. Causes tinea nigra — painless brown-black palmar macules confused with melanoma.",
  },
  {
    slug: "piedraia-hortae",
    name: "Piedraia",
    scientificName: "Piedraia hortae",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Dematiaceous fungus forming hard black nodules along the scalp hair shaft. The cause of black piedra in tropical regions.",
  },
  {
    slug: "aspergillus-nidulans",
    name: "Aspergillus nidulans",
    scientificName: "Aspergillus nidulans",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold and a classical genetics model organism (Emericella nidulans). Causes invasive aspergillosis specifically in chronic granulomatous disease.",
  },
  {
    slug: "rhizopus-microsporus",
    name: "Rhizopus microsporus",
    scientificName: "Rhizopus microsporus",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold harboring symbiotic Burkholderia bacteria. Causes angioinvasive mucormycosis and contaminated-tempeh and -starch outbreaks.",
  },
  {
    slug: "mucor-circinelloides",
    name: "Mucor",
    scientificName: "Mucor circinelloides",
    morphology: "mold",
    group: "Mold",
    description:
      "Aseptate Mucorales mold with broad ribbon-like hyphae. Causes rhinocerebral and cutaneous mucormycosis in diabetic and immunocompromised hosts.",
  },
  {
    slug: "apophysomyces-elegans",
    name: "Apophysomyces",
    scientificName: "Apophysomyces elegans",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold from soil and decaying matter. Causes necrotizing cutaneous and soft-tissue mucormycosis in immunocompetent trauma patients.",
  },
  {
    slug: "saksenaea-vasiformis",
    name: "Saksenaea",
    scientificName: "Saksenaea vasiformis",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold with flask-shaped sporangia. Inoculated through skin trauma, causing aggressive cutaneous and soft-tissue mucormycosis.",
  },
  {
    slug: "syncephalastrum-racemosum",
    name: "Syncephalastrum",
    scientificName: "Syncephalastrum racemosum",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold with finger-like merosporangia resembling Aspergillus heads. A rare cause of cutaneous and disseminated mucormycosis.",
  },
  {
    slug: "acremonium-strictum",
    name: "Acremonium",
    scientificName: "Acremonium strictum",
    morphology: "mold",
    group: "Mold",
    description:
      "Slow-growing septate mold with delicate phialides. Causes mycetoma, keratitis, and onychomycosis, plus rare invasive infection in neutropenia.",
  },
  {
    slug: "purpureocillium-lilacinum",
    name: "Purpureocillium",
    scientificName: "Purpureocillium lilacinum",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Lavender-pigmented septate mold (formerly Paecilomyces lilacinus). Causes keratitis, cutaneous infection, and catheter-related disease.",
  },
  {
    slug: "curvularia-lunata",
    name: "Curvularia",
    scientificName: "Curvularia lunata",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold with curved multiseptate conidia. Causes allergic fungal sinusitis, keratitis, and rare invasive phaeohyphomycosis.",
  },
  {
    slug: "bipolaris-spicifera",
    name: "Bipolaris",
    scientificName: "Bipolaris spicifera",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold with bipolar-germinating conidia. A leading cause of allergic fungal sinusitis and occasional CNS phaeohyphomycosis.",
  },
  {
    slug: "exserohilum-rostratum",
    name: "Exserohilum",
    scientificName: "Exserohilum rostratum",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Dematiaceous plant mold. Caused the 2012 US fungal meningitis outbreak from contaminated injectable methylprednisolone.",
  },
  {
    slug: "stachybotrys-chartarum",
    name: "Stachybotrys (black mold)",
    scientificName: "Stachybotrys chartarum",
    morphology: "mold",
    group: "Mold",
    description:
      "Slimy black mold of water-damaged cellulose. Produces trichothecene mycotoxins; the 'toxic black mold' of indoor-air-quality concerns.",
  },
  {
    slug: "pseudallescheria-boydii",
    name: "Pseudallescheria",
    scientificName: "Pseudallescheria boydii",
    morphology: "mold",
    group: "Mold",
    description:
      "Sexual form of Scedosporium boydii. Causes white-grain mycetoma and severe pneumonia/brain abscess after near-drowning events.",
  },
  {
    slug: "phialophora-verrucosa",
    name: "Phialophora",
    scientificName: "Phialophora verrucosa",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold with flask-shaped phialides bearing collarettes. A classical agent of chromoblastomycosis with sclerotic-body tissue forms.",
  },
  {
    slug: "cladophialophora-carrionii",
    name: "Cladophialophora carrionii",
    scientificName: "Cladophialophora carrionii",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold of arid regions, transmitted via cactus and plant trauma. A major agent of chromoblastomycosis in dry climates.",
  },
  {
    slug: "basidiobolus-ranarum",
    name: "Basidiobolus",
    scientificName: "Basidiobolus ranarum",
    morphology: "mold",
    group: "Mold",
    description:
      "Entomophthoralean mold from soil and reptile guts. Causes chronic subcutaneous entomophthoramycosis of the limbs and trunk in tropical settings.",
  },
  {
    slug: "conidiobolus-coronatus",
    name: "Conidiobolus",
    scientificName: "Conidiobolus coronatus",
    morphology: "mold",
    group: "Mold",
    description:
      "Entomophthoralean mold causing chronic rhinofacial entomophthoramycosis — disfiguring midface swelling that spares blood vessels.",
  },
  {
    slug: "paracoccidioides-lutzii",
    name: "Paracoccidioides lutzii",
    scientificName: "Paracoccidioides lutzii",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Companion dimorphic species to P. brasiliensis, predominant in the central Brazilian Amazon. Causes paracoccidioidomycosis with multiple-budding yeast in tissue.",
  },
  {
    slug: "trichophyton-verrucosum",
    name: "Trichophyton verrucosum",
    scientificName: "Trichophyton verrucosum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Zoophilic dermatophyte of cattle. Causes intensely inflammatory tinea (kerion) in farmers and ringworm in children handling livestock.",
  },
  {
    slug: "microsporum-audouinii",
    name: "Microsporum audouinii",
    scientificName: "Microsporum audouinii",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte that drove mid-century epidemics of childhood tinea capitis. Fluoresces under Wood's lamp; rare now in temperate countries.",
  },
];
