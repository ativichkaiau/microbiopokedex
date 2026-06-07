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
  {
    slug: "candida-kefyr",
    name: "Candida kefyr",
    scientificName: "Kluyveromyces marxianus",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Dairy-associated lactose-fermenting yeast (anamorph of Kluyveromyces marxianus). A rare cause of fungemia and oral infection in immunocompromised hosts.",
  },
  {
    slug: "candida-guilliermondii",
    name: "Candida guilliermondii",
    scientificName: "Meyerozyma guilliermondii",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Environmental yeast with reduced echinocandin susceptibility. Causes catheter-related fungemia and onychomycosis in cancer patients.",
  },
  {
    slug: "candida-famata",
    name: "Candida famata",
    scientificName: "Debaryomyces hansenii",
    morphology: "yeast",
    group: "Yeast",
    description:
      "Salt-tolerant cheese-rind yeast that is rarely pathogenic. Occasional cause of catheter bloodstream infection and fungal keratitis.",
  },
  {
    slug: "candida-pelliculosa",
    name: "Candida pelliculosa",
    scientificName: "Wickerhamomyces anomalus",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Wickerhamomyces yeast linked to neonatal-ICU outbreaks via contaminated parenteral nutrition. Causes candidemia and meningitis in premature infants.",
  },
  {
    slug: "trichosporon-mucoides",
    name: "Trichosporon mucoides",
    scientificName: "Trichosporon mucoides",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Mucoid yeast-like fungus producing arthroconidia. Causes catheter-related fungemia and brain abscess in hematologic-malignancy patients.",
  },
  {
    slug: "trichosporon-inkin",
    name: "Trichosporon inkin",
    scientificName: "Trichosporon inkin",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Arthroconidial yeast that colonizes pubic and scalp hair. Causes white piedra and occasional invasive disease in neutropenic patients.",
  },
  {
    slug: "cryptococcus-laurentii",
    name: "Cryptococcus laurentii",
    scientificName: "Papiliotrema laurentii",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Environmental non-neoformans Cryptococcus. Causes rare catheter-related fungemia, keratitis, and skin infection in immunocompromised hosts.",
  },
  {
    slug: "yarrowia-lipolytica",
    name: "Yarrowia",
    scientificName: "Yarrowia lipolytica",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Lipid-degrading yeast used in food biotechnology. Rare cause of catheter-related fungemia, mostly in patients on parenteral lipid emulsions.",
  },
  {
    slug: "magnusiomyces-capitatus",
    name: "Magnusiomyces (Geotrichum capitatum)",
    scientificName: "Magnusiomyces capitatus",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Yeast-like fungus (formerly Geotrichum/Blastoschizomyces capitatus) with arthroconidia. Causes high-mortality disseminated infection in acute leukemia.",
  },
  {
    slug: "aureobasidium-pullulans",
    name: "Aureobasidium",
    scientificName: "Aureobasidium pullulans",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Ubiquitous dematiaceous 'black yeast' on plants and damp walls. An uncommon cause of phaeohyphomycosis, peritonitis, and keratitis.",
  },
  {
    slug: "aspergillus-versicolor",
    name: "Aspergillus versicolor",
    scientificName: "Aspergillus versicolor",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold of damp indoor environments producing sterigmatocystin. A common 'sick-building' aeroallergen and occasional onychomycosis agent.",
  },
  {
    slug: "aspergillus-glaucus",
    name: "Aspergillus glaucus group",
    scientificName: "Aspergillus glaucus",
    morphology: "mold",
    group: "Mold",
    description:
      "Xerophilic 'storage' molds that spoil dried foods. Rare cause of cutaneous and pulmonary aspergillosis in the severely immunocompromised.",
  },
  {
    slug: "penicillium-expansum",
    name: "Penicillium expansum",
    scientificName: "Penicillium expansum",
    morphology: "mold",
    group: "Mold",
    description:
      "Blue-mold rot of apples and pears that produces the mycotoxin patulin. Rarely infectious but a foodborne contamination concern.",
  },
  {
    slug: "penicillium-roqueforti",
    name: "Penicillium roqueforti",
    scientificName: "Penicillium roqueforti",
    morphology: "mold",
    group: "Mold",
    description:
      "Industrial mold used to ripen blue-veined cheeses (Roquefort, Stilton, Gorgonzola). Allergic but rarely invasive in humans.",
  },
  {
    slug: "cladosporium-herbarum",
    name: "Cladosporium herbarum",
    scientificName: "Cladosporium herbarum",
    morphology: "mold",
    group: "Mold",
    description:
      "Olive-green dematiaceous mold and the most abundant airborne fungal allergen. Triggers seasonal hay fever and asthma; rarely invasive.",
  },
  {
    slug: "cladosporium-sphaerospermum",
    name: "Cladosporium sphaerospermum",
    scientificName: "Cladosporium sphaerospermum",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous indoor mold growing on damp walls and bathrooms. A respiratory allergen and rare cause of cutaneous phaeohyphomycosis.",
  },
  {
    slug: "trichoderma-longibrachiatum",
    name: "Trichoderma",
    scientificName: "Trichoderma longibrachiatum",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Fast-growing soil mold and biocontrol agent. An emerging cause of peritonitis on CAPD and invasive infection in transplant patients.",
  },
  {
    slug: "scopulariopsis-brevicaulis",
    name: "Scopulariopsis",
    scientificName: "Scopulariopsis brevicaulis",
    morphology: "mold",
    group: "Mold",
    description:
      "Septate mold with rough lemon-shaped conidia. The classic non-dermatophyte cause of toenail onychomycosis, especially in older adults.",
  },
  {
    slug: "chaetomium-globosum",
    name: "Chaetomium",
    scientificName: "Chaetomium globosum",
    morphology: "mold",
    group: "Mold",
    description:
      "Cellulose-degrading dematiaceous mold of water-damaged buildings. Causes onychomycosis and rare disseminated infection in neutropenic patients.",
  },
  {
    slug: "exophiala-jeanselmei",
    name: "Exophiala jeanselmei",
    scientificName: "Exophiala jeanselmei",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Dematiaceous 'black yeast'-like fungus of soil and wood. Causes eumycetoma and subcutaneous phaeohyphomycotic cysts after splinter trauma.",
  },
  {
    slug: "pyrenochaeta-romeroi",
    name: "Pyrenochaeta",
    scientificName: "Trematosphaeria grisea",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold of tropical soils. A common agent of eumycetoma with black grains, presenting as a chronic foot swelling.",
  },
  {
    slug: "lichtheimia-ramosa",
    name: "Lichtheimia ramosa",
    scientificName: "Lichtheimia ramosa",
    morphology: "mold",
    group: "Mold",
    description:
      "Mucoralean mold of soil and decaying matter. Causes angioinvasive mucormycosis, especially of skin and soft tissue after burns or trauma.",
  },
  {
    slug: "lacazia-loboi",
    name: "Lacazia",
    scientificName: "Lacazia loboi",
    morphology: "yeast",
    group: "Dimorphic",
    description:
      "Uncultivable yeast-form fungus of Amazonian environments and dolphins. Causes lobomycosis — keloidal skin nodules that slowly disfigure.",
  },
  {
    slug: "sporothrix-brasiliensis",
    name: "Sporothrix brasiliensis",
    scientificName: "Sporothrix brasiliensis",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Cat-transmitted dimorphic fungus driving Brazil's zoonotic sporotrichosis epidemic. Cat scratches cause lymphocutaneous nodules in handlers.",
  },
  {
    slug: "emmonsia-parva",
    name: "Emmonsia",
    scientificName: "Emmonsia parva",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Soil-dwelling dimorphic fungus that forms massive non-replicating adiaspores in lungs. Causes pulmonary adiaspiromycosis in small mammals and humans.",
  },
  {
    slug: "fonsecaea-compacta",
    name: "Fonsecaea compacta",
    scientificName: "Fonsecaea compacta",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold related to F. pedrosoi. A less common agent of chromoblastomycosis with characteristic sclerotic 'copper-penny' bodies in tissue.",
  },
  {
    slug: "trichophyton-schoenleinii",
    name: "Trichophyton schoenleinii",
    scientificName: "Trichophyton schoenleinii",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte causing favus — scutula crusts and scarring alopecia. Now rare; historically endemic in Europe and the Middle East.",
  },
  {
    slug: "trichophyton-concentricum",
    name: "Trichophyton concentricum",
    scientificName: "Trichophyton concentricum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte of the Pacific and South America. Causes tinea imbricata: concentric overlapping rings of scaly skin.",
  },
  {
    slug: "trichophyton-violaceum",
    name: "Trichophyton violaceum",
    scientificName: "Trichophyton violaceum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte producing violet-purple colonies. A common cause of endothrix 'black-dot' tinea capitis in Africa and the Middle East.",
  },
  {
    slug: "trichophyton-interdigitale",
    name: "Trichophyton interdigitale",
    scientificName: "Trichophyton interdigitale",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Zoo-anthropophilic dermatophyte split from T. mentagrophytes. The leading cause of athlete's foot and interdigital tinea pedis.",
  },
  {
    slug: "microsporum-ferrugineum",
    name: "Microsporum ferrugineum",
    scientificName: "Microsporum ferrugineum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Rust-colored anthropophilic dermatophyte of Asia and Africa. Causes endemic tinea capitis with little inflammation.",
  },
  {
    slug: "microsporum-nanum",
    name: "Microsporum nanum",
    scientificName: "Microsporum nanum",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Zoophilic dermatophyte of pigs with tiny pear-shaped macroconidia. Causes occasional cutaneous infection in swine handlers.",
  },
  {
    slug: "candida-rugosa",
    name: "Candida rugosa",
    scientificName: "Diutina rugosa",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Emerging non-albicans yeast with reduced azole susceptibility. Linked to catheter-related fungemia outbreaks in burn and ICU units.",
  },
  {
    slug: "candida-lipolytica",
    name: "Candida lipolytica",
    scientificName: "Yarrowia lipolytica (Candida lipolytica)",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Lipid-assimilating yeast. A rare cause of catheter-associated fungemia in patients on parenteral lipid nutrition.",
  },
  {
    slug: "kodamaea-ohmeri",
    name: "Kodamaea",
    scientificName: "Kodamaea ohmeri",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Color-shifting yeast on CHROMagar. Causes fungemia, endocarditis, and cellulitis in immunocompromised and prosthetic-device patients.",
  },
  {
    slug: "pichia-kudriavzevii",
    name: "Pichia",
    scientificName: "Pichia kudriavzevii",
    morphology: "yeast",
    group: "Yeast",
    description:
      "The teleomorph of Candida krusei, used in fermentation. Intrinsically fluconazole-resistant; causes breakthrough fungemia on azole prophylaxis.",
  },
  {
    slug: "saprochaete-clavata",
    name: "Saprochaete",
    scientificName: "Saprochaete clavata",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Arthroconidial yeast-like fungus linked to hospital outbreaks. Causes high-mortality disseminated infection in acute leukemia.",
  },
  {
    slug: "cryptococcus-albidus",
    name: "Cryptococcus albidus",
    scientificName: "Naganishia albida",
    morphology: "yeast",
    group: "Opportunistic",
    description:
      "Encapsulated environmental non-neoformans Cryptococcus. Rare cause of meningitis, fungemia, and keratitis in immunocompromised hosts.",
  },
  {
    slug: "aspergillus-lentulus",
    name: "Aspergillus lentulus",
    scientificName: "Aspergillus lentulus",
    morphology: "mold",
    group: "Mold",
    description:
      "Cryptic species within the A. fumigatus complex with reduced antifungal susceptibility. Causes hard-to-treat invasive aspergillosis.",
  },
  {
    slug: "aspergillus-ustus",
    name: "Aspergillus ustus",
    scientificName: "Aspergillus ustus",
    morphology: "mold",
    group: "Mold",
    description:
      "Uncommon septate mold with poor triazole response. Causes invasive disease and onychomycosis in transplant recipients.",
  },
  {
    slug: "penicillium-marneffei-complex",
    name: "Talaromyces atroroseus",
    scientificName: "Talaromyces atroroseus",
    morphology: "mold",
    group: "Mold",
    description:
      "Red-pigment-producing Talaromyces species. Mainly an industrial mold; rare environmental contaminant of clinical specimens.",
  },
  {
    slug: "rasamsonia-argillacea",
    name: "Rasamsonia",
    scientificName: "Rasamsonia argillacea",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Thermotolerant Penicillium-like mold. An emerging cause of invasive infection in chronic granulomatous disease and cystic fibrosis.",
  },
  {
    slug: "paecilomyces-variotii",
    name: "Paecilomyces",
    scientificName: "Paecilomyces variotii",
    morphology: "mold",
    group: "Mold",
    description:
      "Heat-tolerant environmental mold. Causes peritonitis on dialysis, keratitis, and rare disseminated infection in the immunocompromised.",
  },
  {
    slug: "rhinocladiella-mackenziei",
    name: "Rhinocladiella",
    scientificName: "Rhinocladiella mackenziei",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Neurotropic dematiaceous mold of the arid Middle East. Causes lethal cerebral phaeohyphomycosis even in immunocompetent hosts.",
  },
  {
    slug: "verruconis-gallopava",
    name: "Verruconis",
    scientificName: "Verruconis gallopava",
    morphology: "mold",
    group: "Opportunistic",
    description:
      "Thermophilic dematiaceous mold of hot springs and poultry. Causes brain abscess and pneumonia in lung-transplant recipients.",
  },
  {
    slug: "scytalidium-dimidiatum",
    name: "Neoscytalidium",
    scientificName: "Neoscytalidium dimidiatum",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold of the tropics that mimics dermatophytes. Causes non-dermatophyte onychomycosis and skin infection resistant to usual antifungals.",
  },
  {
    slug: "phaeoacremonium-parasiticum",
    name: "Phaeoacremonium",
    scientificName: "Phaeoacremonium parasiticum",
    morphology: "mold",
    group: "Mold",
    description:
      "Dematiaceous mold of plants and soil. Causes subcutaneous phaeohyphomycosis and arthritis after thorn or splinter inoculation.",
  },
  {
    slug: "lacazia-loboi-marine",
    name: "Paracoccidioides ceti",
    scientificName: "Paracoccidioides ceti",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Dimorphic fungus causing lobomycosis-like disease (lacaziosis) in dolphins, with rare zoonotic skin nodules in handlers.",
  },
  {
    slug: "blastomyces-gilchristii",
    name: "Blastomyces gilchristii",
    scientificName: "Blastomyces gilchristii",
    morphology: "dimorphic",
    group: "Dimorphic",
    description:
      "Cryptic dimorphic species split from B. dermatitidis in the North American Midwest. Causes pulmonary and disseminated blastomycosis.",
  },
  {
    slug: "trichophyton-soudanense",
    name: "Trichophyton soudanense",
    scientificName: "Trichophyton soudanense",
    morphology: "mold",
    group: "Dermatophyte",
    description:
      "Anthropophilic dermatophyte of African origin. Causes endothrix tinea capitis spreading in migrant and adopted-child populations.",
  },
];
