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
];
