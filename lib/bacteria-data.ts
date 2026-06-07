// Curated "pokedex" of medically notable bacteria.
// Categories focus on Gram stain & morphology: gram stain, cell shape, and
// cellular arrangement. Editing this list and reloading re-syncs the database.

export const GRAM_STAINS = ["positive", "negative", "variable"] as const;
export type GramStain = (typeof GRAM_STAINS)[number];

export const SHAPES = [
  "coccus",
  "bacillus",
  "coccobacillus",
  "vibrio",
  "spirillum",
  "spirochete",
  "pleomorphic",
] as const;
export type Shape = (typeof SHAPES)[number];

export const ARRANGEMENTS = [
  "single",
  "pairs",
  "chains",
  "clusters",
  "tetrads",
  "palisades",
  "filaments",
] as const;
export type Arrangement = (typeof ARRANGEMENTS)[number];

export type Bacterium = {
  slug: string;
  name: string;
  scientificName: string;
  gramStain: GramStain;
  shape: Shape;
  arrangement: Arrangement;
  description: string;
};

export const BACTERIA: Bacterium[] = [
  {
    slug: "staphylococcus-aureus",
    name: "Staph aureus",
    scientificName: "Staphylococcus aureus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Grape-like clusters of gram-positive cocci. Catalase- and coagulase-positive; causes skin infections, abscesses, endocarditis, and toxin-mediated disease. MRSA strains drive antibiotic-resistance concerns.",
  },
  {
    slug: "streptococcus-pyogenes",
    name: "Group A Strep",
    scientificName: "Streptococcus pyogenes",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Beta-hemolytic gram-positive cocci in chains. Causes pharyngitis, scarlet fever, necrotizing fasciitis, and post-infectious rheumatic fever. Reliably penicillin-sensitive.",
  },
  {
    slug: "streptococcus-pneumoniae",
    name: "Pneumococcus",
    scientificName: "Streptococcus pneumoniae",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Lancet-shaped gram-positive diplococci with a prominent polysaccharide capsule. Leading cause of community-acquired pneumonia, otitis media, and bacterial meningitis.",
  },
  {
    slug: "enterococcus-faecalis",
    name: "Enterococcus",
    scientificName: "Enterococcus faecalis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Hardy gut commensal gram-positive cocci in pairs and short chains. Causes UTIs, biliary, and nosocomial infections; vancomycin-resistant strains (VRE) are a major hospital threat.",
  },
  {
    slug: "bacillus-anthracis",
    name: "Anthrax bacillus",
    scientificName: "Bacillus anthracis",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Large boxcar-shaped gram-positive rods in chains; forms environmentally durable endospores. Causes cutaneous, inhalational, and gastrointestinal anthrax.",
  },
  {
    slug: "clostridioides-difficile",
    name: "C. diff",
    scientificName: "Clostridioides difficile",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Spore-forming anaerobic gram-positive rod. Overgrows after antibiotic disruption of gut flora, causing pseudomembranous colitis via toxins A and B.",
  },
  {
    slug: "clostridium-botulinum",
    name: "Botulism bacillus",
    scientificName: "Clostridium botulinum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic spore-forming gram-positive rod producing botulinum neurotoxin, the most potent biological toxin known; causes flaccid paralysis.",
  },
  {
    slug: "listeria-monocytogenes",
    name: "Listeria",
    scientificName: "Listeria monocytogenes",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Small motile gram-positive rod with characteristic tumbling motility. Grows at refrigeration temperatures; causes foodborne meningitis and fetal infection.",
  },
  {
    slug: "corynebacterium-diphtheriae",
    name: "Diphtheria bacillus",
    scientificName: "Corynebacterium diphtheriae",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "palisades",
    description:
      "Club-shaped gram-positive rods in palisades and V/L 'Chinese-letter' arrangements. Toxigenic strains produce diphtheria toxin causing a pseudomembranous pharyngitis.",
  },
  {
    slug: "mycobacterium-tuberculosis",
    name: "Tubercle bacillus",
    scientificName: "Mycobacterium tuberculosis",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "filaments",
    description:
      "Acid-fast rod with a waxy mycolic-acid wall that stains poorly by Gram; grows in serpentine cords. Causes tuberculosis and requires prolonged multidrug therapy.",
  },
  {
    slug: "escherichia-coli",
    name: "E. coli",
    scientificName: "Escherichia coli",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Workhorse gram-negative enteric rod. Commensal in the gut but pathogenic strains cause UTIs, neonatal meningitis, and Shiga-toxin hemolytic uremic syndrome.",
  },
  {
    slug: "salmonella-enterica",
    name: "Salmonella",
    scientificName: "Salmonella enterica",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Motile gram-negative enteric rod. Non-typhoidal serovars cause gastroenteritis; serovar Typhi causes enteric (typhoid) fever.",
  },
  {
    slug: "pseudomonas-aeruginosa",
    name: "Pseudomonas",
    scientificName: "Pseudomonas aeruginosa",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Aerobic gram-negative rod producing blue-green pyocyanin and a grape-like odor. Opportunistic; causes burn wound, cystic fibrosis, and ventilator infections with broad intrinsic resistance.",
  },
  {
    slug: "klebsiella-pneumoniae",
    name: "Klebsiella",
    scientificName: "Klebsiella pneumoniae",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Heavily encapsulated, non-motile gram-negative rod yielding mucoid colonies. Causes lobar pneumonia and nosocomial infections; carbapenemase producers (KPC) are critical-priority.",
  },
  {
    slug: "haemophilus-influenzae",
    name: "H. flu",
    scientificName: "Haemophilus influenzae",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Small fastidious gram-negative coccobacillus requiring factors X and V. Type b caused childhood epiglottitis and meningitis before conjugate vaccination.",
  },
  {
    slug: "neisseria-gonorrhoeae",
    name: "Gonococcus",
    scientificName: "Neisseria gonorrhoeae",
    gramStain: "negative",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Kidney-bean-shaped gram-negative diplococci, often seen intracellularly within neutrophils. Causes gonorrhea; antigenic variation prevents lasting immunity.",
  },
  {
    slug: "neisseria-meningitidis",
    name: "Meningococcus",
    scientificName: "Neisseria meningitidis",
    gramStain: "negative",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Encapsulated gram-negative diplococci. Causes rapidly progressive meningitis and Waterhouse-Friderichsen adrenal hemorrhage; spreads in crowded settings.",
  },
  {
    slug: "helicobacter-pylori",
    name: "H. pylori",
    scientificName: "Helicobacter pylori",
    gramStain: "negative",
    shape: "spirillum",
    arrangement: "single",
    description:
      "Helical motile gram-negative rod with potent urease that neutralizes gastric acid. Causes chronic gastritis, peptic ulcers, and gastric adenocarcinoma.",
  },
  {
    slug: "vibrio-cholerae",
    name: "Cholera vibrio",
    scientificName: "Vibrio cholerae",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Comma-shaped gram-negative rod with a single polar flagellum (darting motility). Cholera toxin drives massive secretory 'rice-water' diarrhea.",
  },
  {
    slug: "campylobacter-jejuni",
    name: "Campylobacter",
    scientificName: "Campylobacter jejuni",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Curved S-shaped or 'seagull-wing' gram-negative rod, microaerophilic. Leading bacterial cause of gastroenteritis and a trigger of Guillain-Barré syndrome.",
  },
  {
    slug: "treponema-pallidum",
    name: "Syphilis spirochete",
    scientificName: "Treponema pallidum",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Thin tightly-coiled spirochete too slender for Gram staining; visualized by darkfield. Causes the staged systemic disease syphilis.",
  },
  {
    slug: "borrelia-burgdorferi",
    name: "Lyme spirochete",
    scientificName: "Borrelia burgdorferi",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Large loosely-coiled spirochete transmitted by Ixodes ticks. Causes Lyme disease with erythema migrans, carditis, and arthritis.",
  },
  {
    slug: "mycoplasma-pneumoniae",
    name: "Mycoplasma",
    scientificName: "Mycoplasma pneumoniae",
    gramStain: "variable",
    shape: "pleomorphic",
    arrangement: "single",
    description:
      "Smallest free-living bacterium; lacks a cell wall so it is unstainable by Gram and intrinsically beta-lactam resistant. Causes 'walking' atypical pneumonia.",
  },
  {
    slug: "staphylococcus-epidermidis",
    name: "Staph epidermidis",
    scientificName: "Staphylococcus epidermidis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Coagulase-negative skin commensal in gram-positive clusters. Forms biofilms on prosthetic joints, catheters, and heart valves, causing device-associated infections.",
  },
  {
    slug: "streptococcus-agalactiae",
    name: "Group B Strep",
    scientificName: "Streptococcus agalactiae",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Beta-hemolytic gram-positive cocci in chains. Colonizes the vaginal tract and is a leading cause of neonatal sepsis and meningitis; screened for in pregnancy.",
  },
  {
    slug: "streptococcus-mutans",
    name: "S. mutans",
    scientificName: "Streptococcus mutans",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Gram-positive cocci in chains that ferment sucrose into adhesive glucans. The principal agent of dental caries via acidic biofilm (plaque) formation.",
  },
  {
    slug: "clostridium-tetani",
    name: "Tetanus bacillus",
    scientificName: "Clostridium tetani",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic gram-positive rod with a terminal spore giving a 'drumstick' look. Tetanospasmin blocks inhibitory neurotransmitters, causing spastic paralysis (lockjaw).",
  },
  {
    slug: "clostridium-perfringens",
    name: "C. perfringens",
    scientificName: "Clostridium perfringens",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Large non-motile anaerobic gram-positive rod. Alpha-toxin (lecithinase) drives rapidly spreading gas gangrene and a common form of food poisoning.",
  },
  {
    slug: "bacillus-cereus",
    name: "B. cereus",
    scientificName: "Bacillus cereus",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Spore-forming gram-positive rod in chains. Reheated-rice food poisoning: a heat-stable emetic toxin and a diarrheal enterotoxin.",
  },
  {
    slug: "nocardia-asteroides",
    name: "Nocardia",
    scientificName: "Nocardia asteroides",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "filaments",
    description:
      "Aerobic, weakly acid-fast gram-positive rod forming branching filaments. Causes pulmonary and CNS abscesses, especially in immunocompromised hosts.",
  },
  {
    slug: "actinomyces-israelii",
    name: "Actinomyces",
    scientificName: "Actinomyces israelii",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "filaments",
    description:
      "Anaerobic gram-positive rod forming branching filaments and 'sulfur granules'. Causes cervicofacial abscesses with draining sinus tracts.",
  },
  {
    slug: "shigella-dysenteriae",
    name: "Shigella",
    scientificName: "Shigella dysenteriae",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Non-motile gram-negative enteric rod. Shiga toxin and a very low infectious dose produce invasive bacillary dysentery with bloody stools.",
  },
  {
    slug: "yersinia-pestis",
    name: "Plague bacillus",
    scientificName: "Yersinia pestis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Gram-negative coccobacillus with bipolar 'safety-pin' staining. Flea-borne agent of bubonic and pneumonic plague.",
  },
  {
    slug: "proteus-mirabilis",
    name: "Proteus",
    scientificName: "Proteus mirabilis",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Highly motile gram-negative rod that swarms across agar. Urease raises urine pH, promoting struvite kidney stones and catheter-associated UTIs.",
  },
  {
    slug: "serratia-marcescens",
    name: "Serratia",
    scientificName: "Serratia marcescens",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Gram-negative rod that often produces a red prodigiosin pigment. Opportunistic cause of nosocomial pneumonia, UTIs, and bacteremia.",
  },
  {
    slug: "bordetella-pertussis",
    name: "Whooping cough bacillus",
    scientificName: "Bordetella pertussis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Fastidious gram-negative coccobacillus. Pertussis toxin and tracheal cytotoxin cause the paroxysmal 'whooping' cough of pertussis.",
  },
  {
    slug: "legionella-pneumophila",
    name: "Legionella",
    scientificName: "Legionella pneumophila",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Faintly gram-negative rod (best shown by silver stain) that lives in water systems and amoebae. Inhaled aerosols cause Legionnaires' pneumonia.",
  },
  {
    slug: "bacteroides-fragilis",
    name: "Bacteroides",
    scientificName: "Bacteroides fragilis",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Dominant anaerobic gram-negative rod of the colon. A capsule promotes intra-abdominal abscesses when the gut barrier is breached.",
  },
  {
    slug: "acinetobacter-baumannii",
    name: "Acinetobacter",
    scientificName: "Acinetobacter baumannii",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "pairs",
    description:
      "Hardy gram-negative coccobacillus, often in pairs. Survives on dry surfaces and is a critical-priority multidrug-resistant cause of ICU and wound infections.",
  },
  {
    slug: "moraxella-catarrhalis",
    name: "Moraxella",
    scientificName: "Moraxella catarrhalis",
    gramStain: "negative",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Gram-negative diplococci resembling Neisseria. Common cause of otitis media, sinusitis, and COPD exacerbations; usually beta-lactamase positive.",
  },
  {
    slug: "leptospira-interrogans",
    name: "Leptospira",
    scientificName: "Leptospira interrogans",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Thin spirochete with hooked ends, shed in animal urine. Causes leptospirosis, ranging from a flu-like illness to severe Weil's disease.",
  },
  {
    slug: "staphylococcus-saprophyticus",
    name: "Staph saprophyticus",
    scientificName: "Staphylococcus saprophyticus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Coagulase-negative, novobiocin-resistant gram-positive cocci in clusters. A common cause of uncomplicated UTIs in sexually active young women.",
  },
  {
    slug: "streptococcus-sanguinis",
    name: "Viridans Strep",
    scientificName: "Streptococcus sanguinis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Alpha-hemolytic viridans-group gram-positive cocci in chains, resident in dental plaque. Enters blood after dental work and seeds damaged valves (subacute endocarditis).",
  },
  {
    slug: "enterococcus-faecium",
    name: "Enterococcus faecium",
    scientificName: "Enterococcus faecium",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Hardy gut gram-positive cocci in pairs and short chains. The species most associated with vancomycin-resistant enterococcus (VRE) in hospitals.",
  },
  {
    slug: "cutibacterium-acnes",
    name: "C. acnes",
    scientificName: "Cutibacterium acnes",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic gram-positive rod of the sebaceous skin flora. Drives inflammatory acne and causes indolent prosthetic-joint and shoulder-surgery infections.",
  },
  {
    slug: "lactobacillus-acidophilus",
    name: "Lactobacillus",
    scientificName: "Lactobacillus acidophilus",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Acid-tolerant gram-positive rod in chains. Dominates the healthy vaginal flora, producing lactic acid and peroxide; widely used as a probiotic.",
  },
  {
    slug: "gardnerella-vaginalis",
    name: "Gardnerella",
    scientificName: "Gardnerella vaginalis",
    gramStain: "variable",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Gram-variable coccobacillus that coats epithelial 'clue cells' in bacterial vaginosis, producing a fishy-amine discharge with raised vaginal pH.",
  },
  {
    slug: "mycobacterium-leprae",
    name: "Leprosy bacillus",
    scientificName: "Mycobacterium leprae",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Acid-fast rod that cannot be cultured in vitro and grows in cool tissues (skin, nerves). Causes leprosy (Hansen's disease) with its tuberculoid and lepromatous forms.",
  },
  {
    slug: "mycobacterium-avium",
    name: "MAC",
    scientificName: "Mycobacterium avium",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Environmental acid-fast rod (Mycobacterium avium complex). Causes disseminated infection in advanced HIV and chronic lung disease in older adults.",
  },
  {
    slug: "rickettsia-rickettsii",
    name: "Spotted fever rickettsia",
    scientificName: "Rickettsia rickettsii",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus transmitted by ticks. Invades vascular endothelium, causing the vasculitic rash of Rocky Mountain spotted fever.",
  },
  {
    slug: "chlamydia-trachomatis",
    name: "Chlamydia",
    scientificName: "Chlamydia trachomatis",
    gramStain: "variable",
    shape: "pleomorphic",
    arrangement: "single",
    description:
      "Obligate intracellular bacterium with a biphasic elementary/reticulate-body cycle and no classic peptidoglycan, so it stains poorly by Gram. Leading cause of bacterial STI and trachoma blindness.",
  },
  {
    slug: "coxiella-burnetii",
    name: "Q fever agent",
    scientificName: "Coxiella burnetii",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Highly infectious intracellular gram-negative coccobacillus with a spore-like form. Inhaled from livestock aerosols, causing Q fever (atypical pneumonia, hepatitis).",
  },
  {
    slug: "bartonella-henselae",
    name: "Cat-scratch bacillus",
    scientificName: "Bartonella henselae",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Fastidious gram-negative rod transmitted by cat scratches/fleas. Causes cat-scratch disease and, in immunocompromised hosts, bacillary angiomatosis.",
  },
  {
    slug: "francisella-tularensis",
    name: "Tularemia bacillus",
    scientificName: "Francisella tularensis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Tiny, highly infectious intracellular gram-negative coccobacillus. Tick bites or handling rabbits cause tularemia; a very low inoculum can infect.",
  },
  {
    slug: "brucella-melitensis",
    name: "Brucella",
    scientificName: "Brucella melitensis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Intracellular gram-negative coccobacillus from unpasteurized dairy and livestock. Causes undulant fever (brucellosis) with relapsing temperatures and sweats.",
  },
  {
    slug: "vibrio-vulnificus",
    name: "V. vulnificus",
    scientificName: "Vibrio vulnificus",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Curved gram-negative marine rod. Raw oysters or seawater wound exposure cause fulminant sepsis and necrotizing fasciitis, especially in liver disease.",
  },
  {
    slug: "yersinia-enterocolitica",
    name: "Y. enterocolitica",
    scientificName: "Yersinia enterocolitica",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Cold-tolerant gram-negative coccobacillus from pork and contaminated milk. Causes enterocolitis and mesenteric adenitis mimicking appendicitis.",
  },
  {
    slug: "stenotrophomonas-maltophilia",
    name: "Stenotrophomonas",
    scientificName: "Stenotrophomonas maltophilia",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Aerobic gram-negative rod with broad intrinsic drug resistance. An opportunistic nosocomial pathogen of catheters and ventilated, immunocompromised patients.",
  },
  {
    slug: "pasteurella-multocida",
    name: "Pasteurella",
    scientificName: "Pasteurella multocida",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Bipolar-staining gram-negative coccobacillus in animal mouths. Rapidly inflamed cellulitis after cat and dog bites; classic within hours of the bite.",
  },
  {
    slug: "fusobacterium-nucleatum",
    name: "Fusobacterium",
    scientificName: "Fusobacterium nucleatum",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Spindle-shaped anaerobic gram-negative rod of the oral flora. Implicated in periodontal disease, Lemierre's syndrome, and colorectal tumors.",
  },
  {
    slug: "burkholderia-cepacia",
    name: "Burkholderia",
    scientificName: "Burkholderia cepacia",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Environmental gram-negative rod highly resistant to antibiotics and disinfectants. Causes rapidly declining lung infection in cystic fibrosis and contaminates hospital fluids.",
  },
  {
    slug: "micrococcus-luteus",
    name: "Micrococcus",
    scientificName: "Micrococcus luteus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "tetrads",
    description:
      "Aerobic gram-positive cocci in tetrads forming bright yellow colonies. A common skin and air commensal; rarely causes infection except in immunocompromised hosts.",
  },
  {
    slug: "streptococcus-gallolyticus",
    name: "S. gallolyticus",
    scientificName: "Streptococcus gallolyticus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Gram-positive cocci in chains (the former S. bovis). Bacteremia and endocarditis with this organism are strongly linked to colorectal carcinoma.",
  },
  {
    slug: "bacillus-subtilis",
    name: "B. subtilis",
    scientificName: "Bacillus subtilis",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Aerobic spore-forming gram-positive rod in chains. A ubiquitous soil saprophyte and a workhorse model organism; only an occasional opportunistic contaminant.",
  },
  {
    slug: "erysipelothrix-rhusiopathiae",
    name: "Erysipelothrix",
    scientificName: "Erysipelothrix rhusiopathiae",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Thin gram-positive rod from animals and fish. Causes erysipeloid, a painful violaceous hand cellulitis in butchers, fishermen, and veterinarians.",
  },
  {
    slug: "rhodococcus-equi",
    name: "Rhodococcus",
    scientificName: "Rhodococcus equi",
    gramStain: "positive",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Partially acid-fast, intracellular gram-positive coccobacillus from soil and horses. Causes cavitary pneumonia in immunocompromised, especially HIV, patients.",
  },
  {
    slug: "tropheryma-whipplei",
    name: "Whipple bacillus",
    scientificName: "Tropheryma whipplei",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Fastidious gram-positive rod that infects intestinal macrophages (PAS-positive). Causes Whipple's disease: malabsorption, weight loss, arthralgia, and CNS signs.",
  },
  {
    slug: "mycobacterium-abscessus",
    name: "M. abscessus",
    scientificName: "Mycobacterium abscessus",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Rapidly growing, highly drug-resistant acid-fast rod. Causes skin/soft-tissue infections after procedures and chronic lung disease in cystic fibrosis.",
  },
  {
    slug: "vibrio-parahaemolyticus",
    name: "V. parahaemolyticus",
    scientificName: "Vibrio parahaemolyticus",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Halophilic curved gram-negative marine rod. The leading cause of seafood-associated gastroenteritis from raw or undercooked shellfish.",
  },
  {
    slug: "aeromonas-hydrophila",
    name: "Aeromonas",
    scientificName: "Aeromonas hydrophila",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Freshwater gram-negative rod. Causes diarrhea and aggressive wound infections after freshwater exposure, including medicinal-leech-associated cellulitis.",
  },
  {
    slug: "citrobacter-freundii",
    name: "Citrobacter",
    scientificName: "Citrobacter freundii",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Enteric gram-negative rod with inducible AmpC beta-lactamase. An opportunistic cause of UTIs, neonatal meningitis, and nosocomial bacteremia.",
  },
  {
    slug: "enterobacter-cloacae",
    name: "Enterobacter",
    scientificName: "Enterobacter cloacae",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Motile enteric gram-negative rod. AmpC derepression drives resistance to broad-spectrum cephalosporins in ICU pneumonia, line, and wound infections.",
  },
  {
    slug: "morganella-morganii",
    name: "Morganella",
    scientificName: "Morganella morganii",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Urease-positive enteric gram-negative rod. Causes catheter-associated UTIs and post-operative wound infections, often multidrug resistant.",
  },
  {
    slug: "eikenella-corrodens",
    name: "Eikenella",
    scientificName: "Eikenella corrodens",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Slow-growing gram-negative rod (a HACEK organism) of the human mouth that pits agar. Classic in clenched-fist 'fight-bite' wound infections and endocarditis.",
  },
  {
    slug: "kingella-kingae",
    name: "Kingella",
    scientificName: "Kingella kingae",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "pairs",
    description:
      "Fastidious gram-negative coccobacillus in pairs (a HACEK organism). A leading cause of septic arthritis and osteomyelitis in young children.",
  },
  {
    slug: "capnocytophaga-canimorsus",
    name: "Capnocytophaga",
    scientificName: "Capnocytophaga canimorsus",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Slender gram-negative rod from dog and cat mouths. Dog-bite exposure causes fulminant sepsis, especially in asplenic or alcoholic patients.",
  },
  {
    slug: "porphyromonas-gingivalis",
    name: "Porphyromonas",
    scientificName: "Porphyromonas gingivalis",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Black-pigmented anaerobic gram-negative rod. A keystone pathogen of chronic periodontitis and a suspected contributor to systemic inflammatory disease.",
  },
  {
    slug: "anaplasma-phagocytophilum",
    name: "Anaplasma",
    scientificName: "Anaplasma phagocytophilum",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus that forms morulae inside neutrophils. Ixodes-tick-borne agent of human granulocytic anaplasmosis.",
  },
  {
    slug: "streptobacillus-moniliformis",
    name: "Rat-bite bacillus",
    scientificName: "Streptobacillus moniliformis",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "filaments",
    description:
      "Pleomorphic gram-negative rod forming beaded filaments. Transmitted by rat bites, causing rat-bite fever with migratory arthralgia and rash.",
  },
  {
    slug: "ureaplasma-urealyticum",
    name: "Ureaplasma",
    scientificName: "Ureaplasma urealyticum",
    gramStain: "variable",
    shape: "pleomorphic",
    arrangement: "single",
    description:
      "Tiny pleomorphic bacterium that lacks a cell wall (unstainable by Gram, beta-lactam resistant) and splits urea. Causes nongonococcal urethritis.",
  },
  {
    slug: "veillonella-parvula",
    name: "Veillonella",
    scientificName: "Veillonella parvula",
    gramStain: "negative",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Anaerobic gram-negative cocci in clusters, resident in the mouth and gut. A low-virulence commensal occasionally implicated in bites, sinusitis, and endocarditis.",
  },
  {
    slug: "staphylococcus-lugdunensis",
    name: "Staph lugdunensis",
    scientificName: "Staphylococcus lugdunensis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Coagulase-negative gram-positive cocci in clusters, but unusually aggressive — causes destructive native-valve endocarditis like S. aureus.",
  },
  {
    slug: "streptococcus-anginosus",
    name: "S. anginosus group",
    scientificName: "Streptococcus anginosus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Viridans-group gram-positive cocci in chains with a caramel odor. Notorious for forming deep-seated abscesses (brain, liver, thoracic).",
  },
  {
    slug: "streptococcus-suis",
    name: "S. suis",
    scientificName: "Streptococcus suis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Encapsulated gram-positive cocci of pigs. A zoonotic cause of meningitis and deafness in pork handlers and slaughterhouse workers.",
  },
  {
    slug: "abiotrophia-defectiva",
    name: "Nutritionally variant strep",
    scientificName: "Abiotrophia defectiva",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Pyridoxal-dependent 'nutritionally variant streptococcus' that needs supplemented media to grow. Causes culture-negative endocarditis.",
  },
  {
    slug: "rothia-mucilaginosa",
    name: "Rothia",
    scientificName: "Rothia mucilaginosa",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Mucoid gram-positive oral commensal coccus. An uncommon cause of endocarditis and bacteremia in neutropenic and intravenous-drug-use patients.",
  },
  {
    slug: "aerococcus-urinae",
    name: "Aerococcus",
    scientificName: "Aerococcus urinae",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "tetrads",
    description:
      "Gram-positive cocci in tetrads, easily mistaken for staphylococci or enterococci. Causes UTIs and occasional endocarditis in elderly men.",
  },
  {
    slug: "leuconostoc-mesenteroides",
    name: "Leuconostoc",
    scientificName: "Leuconostoc mesenteroides",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Gram-positive cocci in pairs and chains with intrinsic vancomycin resistance. A rare opportunist in catheter and gut-compromised patients.",
  },
  {
    slug: "arcanobacterium-haemolyticum",
    name: "Arcanobacterium",
    scientificName: "Arcanobacterium haemolyticum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Slender gram-positive rod causing pharyngitis with a scarlatiniform rash in adolescents and young adults, mimicking group A strep.",
  },
  {
    slug: "corynebacterium-jeikeium",
    name: "C. jeikeium",
    scientificName: "Corynebacterium jeikeium",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "palisades",
    description:
      "Lipophilic, multidrug-resistant gram-positive rod in palisades. Causes line sepsis and prosthetic infections in neutropenic patients.",
  },
  {
    slug: "bifidobacterium-bifidum",
    name: "Bifidobacterium",
    scientificName: "Bifidobacterium bifidum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Branched anaerobic gram-positive rod dominating the breast-fed infant gut. A keystone commensal and common probiotic; rarely pathogenic.",
  },
  {
    slug: "clostridium-sordellii",
    name: "C. sordellii",
    scientificName: "Paeniclostridium sordellii",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Spore-forming anaerobic gram-positive rod. Causes a fulminant toxic shock (afebrile, leukemoid, refractory shock) after childbirth or abortion.",
  },
  {
    slug: "brevibacterium-casei",
    name: "Brevibacterium",
    scientificName: "Brevibacterium casei",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Gram-positive rod of human skin responsible for foot and cheese odor. A rare cause of catheter-related bacteremia in immunocompromised hosts.",
  },
  {
    slug: "mobiluncus-curtisii",
    name: "Mobiluncus",
    scientificName: "Mobiluncus curtisii",
    gramStain: "variable",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Curved, motile gram-variable anaerobe of the vaginal flora. Found in bacterial vaginosis and seen as motile crescents on wet mount.",
  },
  {
    slug: "burkholderia-pseudomallei",
    name: "Melioidosis bacillus",
    scientificName: "Burkholderia pseudomallei",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Soil and water gram-negative rod with bipolar 'safety-pin' staining. Causes melioidosis: abscesses and sepsis in SE Asia and northern Australia.",
  },
  {
    slug: "haemophilus-ducreyi",
    name: "Chancroid bacillus",
    scientificName: "Haemophilus ducreyi",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "chains",
    description:
      "Fastidious gram-negative coccobacillus in 'school-of-fish' chains. Causes chancroid: painful genital ulcers with tender suppurative buboes.",
  },
  {
    slug: "aggregatibacter-actinomycetemcomitans",
    name: "Aggregatibacter",
    scientificName: "Aggregatibacter actinomycetemcomitans",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Fastidious gram-negative coccobacillus (a HACEK organism). Causes aggressive localized periodontitis and indolent endocarditis.",
  },
  {
    slug: "cardiobacterium-hominis",
    name: "Cardiobacterium",
    scientificName: "Cardiobacterium hominis",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Pleomorphic gram-negative rod of the throat flora (a HACEK organism). A classic cause of slow, culture-elusive native-valve endocarditis.",
  },
  {
    slug: "cronobacter-sakazakii",
    name: "Cronobacter",
    scientificName: "Cronobacter sakazakii",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Environmentally hardy gram-negative enteric rod. Contaminated powdered infant formula causes neonatal meningitis and necrotizing enterocolitis.",
  },
  {
    slug: "plesiomonas-shigelloides",
    name: "Plesiomonas",
    scientificName: "Plesiomonas shigelloides",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Motile gram-negative rod from freshwater and shellfish. Causes traveler's and seafood-associated gastroenteritis, occasionally invasive.",
  },
  {
    slug: "chromobacterium-violaceum",
    name: "Chromobacterium",
    scientificName: "Chromobacterium violaceum",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Soil and water gram-negative rod producing purple violacein pigment. Rare but causes fulminant sepsis with abscesses, often in chronic granulomatous disease.",
  },
  {
    slug: "rickettsia-prowazekii",
    name: "Epidemic typhus rickettsia",
    scientificName: "Rickettsia prowazekii",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus spread by the body louse. Causes epidemic typhus and recrudescent Brill-Zinsser disease.",
  },
  {
    slug: "orientia-tsutsugamushi",
    name: "Scrub typhus agent",
    scientificName: "Orientia tsutsugamushi",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular bacterium transmitted by chigger mites in Asia-Pacific. Causes scrub typhus with an eschar at the bite site.",
  },
  {
    slug: "borrelia-recurrentis",
    name: "Relapsing-fever spirochete",
    scientificName: "Borrelia recurrentis",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Loosely coiled spirochete transmitted by the body louse. Antigenic variation produces louse-borne relapsing fever's recurring fever spikes.",
  },
  {
    slug: "yersinia-pseudotuberculosis",
    name: "Y. pseudotuberculosis",
    scientificName: "Yersinia pseudotuberculosis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Zoonotic gram-negative coccobacillus. Causes mesenteric adenitis mimicking appendicitis and a scarlatiniform far-east fever.",
  },
  {
    slug: "shigella-sonnei",
    name: "Shigella sonnei",
    scientificName: "Shigella sonnei",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Non-motile gram-negative enteric rod. The predominant cause of bacillary dysentery (shigellosis) in industrialized countries.",
  },
  {
    slug: "klebsiella-oxytoca",
    name: "Klebsiella oxytoca",
    scientificName: "Klebsiella oxytoca",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Encapsulated gram-negative rod. A nosocomial pathogen and the cause of antibiotic-associated hemorrhagic colitis via cytotoxin production.",
  },
  {
    slug: "fusobacterium-necrophorum",
    name: "F. necrophorum",
    scientificName: "Fusobacterium necrophorum",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic gram-negative rod. Causes Lemierre's syndrome — pharyngitis progressing to septic internal jugular thrombophlebitis with emboli.",
  },
  {
    slug: "bilophila-wadsworthia",
    name: "Bilophila",
    scientificName: "Bilophila wadsworthia",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Bile-resistant anaerobic gram-negative rod of the gut. Recovered from gangrenous and perforated appendicitis and other intra-abdominal sepsis.",
  },
  {
    slug: "streptococcus-mitis",
    name: "S. mitis",
    scientificName: "Streptococcus mitis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Alpha-hemolytic viridans-group gram-positive cocci of the mouth. A leading cause of viridans-strep bacteremia and endocarditis after dental procedures.",
  },
  {
    slug: "streptococcus-salivarius",
    name: "S. salivarius",
    scientificName: "Streptococcus salivarius",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Gram-positive cocci in chains of the tongue and saliva. Causes rare endocarditis and post-lumbar-puncture meningitis from operator droplet contamination.",
  },
  {
    slug: "streptococcus-equi",
    name: "S. equi",
    scientificName: "Streptococcus equi",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Beta-hemolytic equine pathogen ('strangles'). Zoonotic infection in horse handlers can cause meningitis, endocarditis, and arthritis.",
  },
  {
    slug: "enterococcus-gallinarum",
    name: "E. gallinarum",
    scientificName: "Enterococcus gallinarum",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Motile gut enterococcus with intrinsic low-level vancomycin resistance (vanC). An uncommon cause of bacteremia and a confounder of VRE surveillance.",
  },
  {
    slug: "staphylococcus-haemolyticus",
    name: "S. haemolyticus",
    scientificName: "Staphylococcus haemolyticus",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Coagulase-negative gram-positive cocci with a high rate of methicillin and glycopeptide resistance. A nosocomial cause of catheter and prosthetic infection.",
  },
  {
    slug: "staphylococcus-pseudintermedius",
    name: "S. pseudintermedius",
    scientificName: "Staphylococcus pseudintermedius",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "clusters",
    description:
      "Coagulase-positive staphylococcus of dogs and cats. Causes wound and skin infections in pets and zoonotic infections in their owners.",
  },
  {
    slug: "granulicatella-adiacens",
    name: "Granulicatella",
    scientificName: "Granulicatella adiacens",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Pyridoxal-dependent 'nutritionally variant streptococcus' (with Abiotrophia). Causes culture-negative endocarditis and pleomorphic forms on routine media.",
  },
  {
    slug: "gemella-haemolysans",
    name: "Gemella",
    scientificName: "Gemella haemolysans",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Gram-positive cocci in pairs that decolorize easily and mimic Neisseria. An oral commensal occasionally causing endocarditis and meningitis.",
  },
  {
    slug: "lactococcus-lactis",
    name: "Lactococcus",
    scientificName: "Lactococcus lactis",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "pairs",
    description:
      "Dairy lactic-acid bacterium used in cheese starter cultures. Rare opportunistic endocarditis and bacteremia from unpasteurized dairy or fish exposure.",
  },
  {
    slug: "clostridium-septicum",
    name: "C. septicum",
    scientificName: "Clostridium septicum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Aerotolerant spore-forming anaerobic gram-positive rod. Causes spontaneous (atraumatic) gas gangrene strongly associated with colon cancer and neutropenia.",
  },
  {
    slug: "trueperella-pyogenes",
    name: "Trueperella",
    scientificName: "Trueperella pyogenes",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Pleomorphic gram-positive rod of livestock causing pyogenic infections in cattle. Rare zoonotic abscesses, endocarditis, and septic arthritis in humans.",
  },
  {
    slug: "eggerthella-lenta",
    name: "Eggerthella",
    scientificName: "Eggerthella lenta",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic gram-positive rod of the gut (formerly Eubacterium lentum). Causes bacteremia from intra-abdominal sources and inactivates digoxin in the gut.",
  },
  {
    slug: "lactobacillus-rhamnosus",
    name: "L. rhamnosus",
    scientificName: "Lacticaseibacillus rhamnosus",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Aero-tolerant gram-positive rod widely used as a probiotic (GG strain). Rarely causes endocarditis or fungemia-like bacteremia in compromised hosts.",
  },
  {
    slug: "faecalibacterium-prausnitzii",
    name: "Faecalibacterium",
    scientificName: "Faecalibacterium prausnitzii",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Abundant butyrate-producing anaerobic gram-positive rod of the colon. Reduced abundance is a marker of dysbiosis in inflammatory bowel disease.",
  },
  {
    slug: "mycobacterium-kansasii",
    name: "M. kansasii",
    scientificName: "Mycobacterium kansasii",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Slow-growing photochromogenic acid-fast rod from tap water. Causes a tuberculosis-like cavitary lung disease in COPD and immunocompromised patients.",
  },
  {
    slug: "mycobacterium-marinum",
    name: "M. marinum",
    scientificName: "Mycobacterium marinum",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Photochromogenic acid-fast rod of fresh and salt water. Causes 'fish-tank granuloma' — nodular skin infection along the lymphatics of the hand.",
  },
  {
    slug: "mycobacterium-chelonae",
    name: "M. chelonae",
    scientificName: "Mycobacterium chelonae",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Rapidly growing acid-fast rod. Causes post-procedural skin and soft-tissue infections (tattoos, injections, cosmetic surgery) and corneal infections.",
  },
  {
    slug: "mycobacterium-ulcerans",
    name: "M. ulcerans",
    scientificName: "Mycobacterium ulcerans",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Slow-growing acid-fast rod producing the necrotizing toxin mycolactone. Causes Buruli ulcer — painless skin ulcers in tropical wetlands.",
  },
  {
    slug: "mycobacterium-bovis",
    name: "M. bovis",
    scientificName: "Mycobacterium bovis",
    gramStain: "variable",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Acid-fast rod of cattle within the M. tuberculosis complex. Causes intestinal and disseminated TB from unpasteurized dairy; an attenuated strain is the BCG vaccine.",
  },
  {
    slug: "nocardia-brasiliensis",
    name: "Nocardia brasiliensis",
    scientificName: "Nocardia brasiliensis",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "filaments",
    description:
      "Aerobic weakly acid-fast gram-positive actinomycete with branching filaments. The leading cause of lymphocutaneous and actinomycotic mycetoma in the Americas.",
  },
  {
    slug: "vibrio-alginolyticus",
    name: "V. alginolyticus",
    scientificName: "Vibrio alginolyticus",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Halophilic curved gram-negative marine rod. Causes wound infection and otitis externa after exposure to warm seawater.",
  },
  {
    slug: "edwardsiella-tarda",
    name: "Edwardsiella",
    scientificName: "Edwardsiella tarda",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Enteric gram-negative rod of fish and reptiles. Causes gastroenteritis and aggressive wound and intra-abdominal infections after aquatic exposure.",
  },
  {
    slug: "providencia-stuartii",
    name: "Providencia",
    scientificName: "Providencia stuartii",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Urease-positive enteric gram-negative rod. The dominant Providencia species in long-term catheter-associated UTIs and nursing-home bacteriuria.",
  },
  {
    slug: "burkholderia-mallei",
    name: "Glanders bacillus",
    scientificName: "Burkholderia mallei",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Non-motile gram-negative rod of horses and donkeys. Causes glanders — cutaneous ulcers, pneumonia, and sepsis with high mortality without treatment.",
  },
  {
    slug: "bartonella-quintana",
    name: "Trench-fever bacillus",
    scientificName: "Bartonella quintana",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Fastidious gram-negative rod transmitted by the body louse. Causes urban trench fever, culture-negative endocarditis, and bacillary angiomatosis.",
  },
  {
    slug: "rickettsia-conorii",
    name: "Mediterranean spotted fever",
    scientificName: "Rickettsia conorii",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus carried by the brown dog tick. Causes Mediterranean spotted fever (boutonneuse fever) with a tache noire eschar.",
  },
  {
    slug: "rickettsia-typhi",
    name: "Murine typhus rickettsia",
    scientificName: "Rickettsia typhi",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus of rats spread by fleas. Causes endemic (murine) typhus with fever, headache, and a mild rash.",
  },
  {
    slug: "ehrlichia-chaffeensis",
    name: "Ehrlichia",
    scientificName: "Ehrlichia chaffeensis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular gram-negative coccobacillus that forms morulae inside monocytes. Lone-Star-tick-borne agent of human monocytic ehrlichiosis.",
  },
  {
    slug: "borrelia-hermsii",
    name: "B. hermsii",
    scientificName: "Borrelia hermsii",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Soft-tick-borne spirochete of western North America. Antigenic variation produces tick-borne relapsing fever's recurrent fever spikes.",
  },
  {
    slug: "treponema-denticola",
    name: "T. denticola",
    scientificName: "Treponema denticola",
    gramStain: "negative",
    shape: "spirochete",
    arrangement: "single",
    description:
      "Oral spirochete in the periodontal red complex. Implicated in chronic periodontitis and acute necrotizing ulcerative gingivitis ('trench mouth').",
  },
  {
    slug: "prevotella-melaninogenica",
    name: "Prevotella",
    scientificName: "Prevotella melaninogenica",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Black-pigmented anaerobic gram-negative rod of the mouth and vagina. Contributes to aspiration pneumonia, dental abscesses, and pelvic infections.",
  },
  {
    slug: "tannerella-forsythia",
    name: "Tannerella",
    scientificName: "Tannerella forsythia",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Fastidious anaerobic gram-negative rod of the periodontal red complex (with P. gingivalis and T. denticola). A key driver of severe periodontitis.",
  },
  {
    slug: "mycoplasma-genitalium",
    name: "M. genitalium",
    scientificName: "Mycoplasma genitalium",
    gramStain: "variable",
    shape: "pleomorphic",
    arrangement: "single",
    description:
      "Cell-wall-deficient bacterium unstainable by Gram and beta-lactam resistant. A growing cause of nongonococcal urethritis and cervicitis with rising macrolide resistance.",
  },
  {
    slug: "mycoplasma-hominis",
    name: "M. hominis",
    scientificName: "Mycoplasma hominis",
    gramStain: "variable",
    shape: "pleomorphic",
    arrangement: "single",
    description:
      "Cell-wall-deficient bacterium of the genitourinary tract. Causes pelvic inflammatory disease, post-partum fever, and neonatal infections.",
  },
  {
    slug: "helicobacter-cinaedi",
    name: "H. cinaedi",
    scientificName: "Helicobacter cinaedi",
    gramStain: "negative",
    shape: "spirillum",
    arrangement: "single",
    description:
      "Spiral gram-negative rod (an enterohepatic helicobacter). Causes recurrent bacteremia and cellulitis in immunocompromised and HIV-positive patients.",
  },
  {
    slug: "achromobacter-xylosoxidans",
    name: "Achromobacter",
    scientificName: "Achromobacter xylosoxidans",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Motile gram-negative rod with broad intrinsic resistance. Colonizes cystic-fibrosis airways and contaminates antiseptics and dialysis fluids.",
  },
  {
    slug: "elizabethkingia-meningoseptica",
    name: "Elizabethkingia",
    scientificName: "Elizabethkingia meningoseptica",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Environmental gram-negative rod resistant to most antibiotics including carbapenems. Causes neonatal meningitis and bacteremia in immunocompromised adults.",
  },
  {
    slug: "streptococcus-bovis",
    name: "S. bovis (gallolyticus)",
    scientificName: "Streptococcus bovis biotype I",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Gut gram-positive cocci in chains. Bacteremia and endocarditis carry a strong association with colon adenocarcinoma — find the colonoscopy.",
  },
  {
    slug: "peptostreptococcus-anaerobius",
    name: "Peptostreptococcus",
    scientificName: "Peptostreptococcus anaerobius",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "chains",
    description:
      "Anaerobic gram-positive cocci of the mouth, gut, and vagina. A frequent component of polymicrobial abscesses, aspiration pneumonia, and pelvic infections.",
  },
  {
    slug: "kocuria-rosea",
    name: "Kocuria",
    scientificName: "Kocuria rosea",
    gramStain: "positive",
    shape: "coccus",
    arrangement: "tetrads",
    description:
      "Pink-pigmented skin commensal gram-positive cocci in tetrads, related to Micrococcus. A rare cause of catheter-related bacteremia in cancer patients.",
  },
  {
    slug: "listeria-ivanovii",
    name: "Listeria ivanovii",
    scientificName: "Listeria ivanovii",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Motile gram-positive rod chiefly pathogenic to ruminants. Rare human gastroenteritis and bacteremia; aids the textbook distinction from L. monocytogenes.",
  },
  {
    slug: "clostridium-novyi",
    name: "Clostridium novyi",
    scientificName: "Clostridium novyi",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Spore-forming anaerobic gram-positive rod. Causes gas gangrene and outbreaks of severe soft-tissue infection among injection-drug users.",
  },
  {
    slug: "paenibacillus-larvae",
    name: "Paenibacillus",
    scientificName: "Paenibacillus larvae",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "chains",
    description:
      "Spore-forming gram-positive rod best known for honeybee American foulbrood. Rare opportunistic human bacteremia and wound infection.",
  },
  {
    slug: "corynebacterium-urealyticum",
    name: "C. urealyticum",
    scientificName: "Corynebacterium urealyticum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "palisades",
    description:
      "Slow-growing, urease-positive, multidrug-resistant gram-positive rod. Causes encrusted cystitis and pyelonephritis with alkaline struvite deposits.",
  },
  {
    slug: "cutibacterium-avidum",
    name: "Cutibacterium avidum",
    scientificName: "Cutibacterium avidum",
    gramStain: "positive",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Anaerobic gram-positive skin rod that favors moist folds. An emerging cause of prosthetic hip-joint and breast-implant infections.",
  },
  {
    slug: "atopobium-vaginae",
    name: "Atopobium",
    scientificName: "Fannyhessea vaginae",
    gramStain: "positive",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Fastidious anaerobic gram-positive coccobacillus. A key partner with Gardnerella in bacterial-vaginosis biofilms and a marker of metronidazole failure.",
  },
  {
    slug: "cardiobacterium-valvarum",
    name: "Cardiobacterium valvarum",
    scientificName: "Cardiobacterium valvarum",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Fastidious gram-negative rod of the throat flora (a HACEK organism). A rare cause of aortic-valve endocarditis with slow-growing cultures.",
  },
  {
    slug: "chryseobacterium-indologenes",
    name: "Chryseobacterium",
    scientificName: "Chryseobacterium indologenes",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Yellow-pigmented environmental gram-negative rod with broad intrinsic resistance. Causes device-related infections in hospitalized patients.",
  },
  {
    slug: "ralstonia-pickettii",
    name: "Ralstonia",
    scientificName: "Ralstonia pickettii",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Water-borne gram-negative rod that passes through 0.2-µm filters. Notorious for contaminating sterile solutions and causing pseudo-outbreaks.",
  },
  {
    slug: "cupriavidus-pauculus",
    name: "Cupriavidus",
    scientificName: "Cupriavidus pauculus",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Environmental gram-negative rod from water sources. A rare opportunist causing bacteremia linked to contaminated fluids and dialysis.",
  },
  {
    slug: "pandoraea-apista",
    name: "Pandoraea",
    scientificName: "Pandoraea apista",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Gram-negative rod resembling Burkholderia. Colonizes cystic-fibrosis airways and can cause progressive lung infection and bacteremia.",
  },
  {
    slug: "kingella-denitrificans",
    name: "Kingella denitrificans",
    scientificName: "Kingella denitrificans",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "pairs",
    description:
      "Fastidious gram-negative coccobacillus of the oropharynx. A rare HACEK-adjacent cause of endocarditis that mimics Neisseria on culture.",
  },
  {
    slug: "vibrio-fluvialis",
    name: "Vibrio fluvialis",
    scientificName: "Vibrio fluvialis",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Halophilic curved gram-negative marine rod. Causes cholera-like secretory diarrhea after seafood or brackish-water exposure.",
  },
  {
    slug: "grimontia-hollisae",
    name: "Grimontia (Vibrio hollisae)",
    scientificName: "Grimontia hollisae",
    gramStain: "negative",
    shape: "vibrio",
    arrangement: "single",
    description:
      "Curved gram-negative rod formerly classed in Vibrio. Causes gastroenteritis and occasional septicemia after raw-seafood ingestion.",
  },
  {
    slug: "shewanella-putrefaciens",
    name: "Shewanella",
    scientificName: "Shewanella putrefaciens",
    gramStain: "negative",
    shape: "bacillus",
    arrangement: "single",
    description:
      "Hydrogen-sulfide-producing marine gram-negative rod. Causes skin and soft-tissue infections and bacteremia after seawater wound exposure.",
  },
  {
    slug: "wolbachia-pipientis",
    name: "Wolbachia",
    scientificName: "Wolbachia pipientis",
    gramStain: "negative",
    shape: "coccobacillus",
    arrangement: "single",
    description:
      "Obligate intracellular alphaproteobacterium living inside filarial nematodes and arthropods. Targeting it with doxycycline sterilizes adult filariae.",
  },
  {
    slug: "spirillum-minus",
    name: "Spirillum minus",
    scientificName: "Spirillum minus",
    gramStain: "negative",
    shape: "spirillum",
    arrangement: "single",
    description:
      "Tightly coiled motile gram-negative spiral rod. Causes the spirillary form of rat-bite fever (sodoku) with relapsing fever and a regional eschar.",
  },
];
