// Case-based learning: clinical vignettes solved as multiple choice.
// Each case names a correct entry by slug plus three distractor slugs from
// the same section; the page resolves slugs to display names + detail links,
// so cases stay in sync with the datasets and deep-link to full entries.

import type { SectionKey } from "./sections";

export type Case = {
  id: string;
  section: SectionKey;
  prompt: string;
  answer: string;
  distractors: [string, string, string];
  explanation: string;
};

export const CASES: Case[] = [
  // ---------------- Bacteria ----------------
  {
    id: "b-meningococcus",
    section: "bacteria",
    prompt:
      "A 19-year-old college freshman in a dormitory develops fever, severe headache, neck stiffness, and a rapidly spreading petechial rash, then becomes hypotensive. Gram stain of CSF shows gram-negative diplococci.",
    answer: "neisseria-meningitidis",
    distractors: [
      "streptococcus-pneumoniae",
      "haemophilus-influenzae",
      "listeria-monocytogenes",
    ],
    explanation:
      "Neisseria meningitidis — gram-negative diplococci causing rapidly progressive meningococcemia with petechiae and Waterhouse-Friderichsen adrenal hemorrhage; classic in crowded dormitory settings.",
  },
  {
    id: "b-pseudomonas-burn",
    section: "bacteria",
    prompt:
      "A patient with extensive burns develops a wound with blue-green purulent drainage and a sweet, grape-like odor, plus black necrotic skin lesions (ecthyma gangrenosum).",
    answer: "pseudomonas-aeruginosa",
    distractors: [
      "staphylococcus-aureus",
      "klebsiella-pneumoniae",
      "escherichia-coli",
    ],
    explanation:
      "Pseudomonas aeruginosa produces blue-green pyocyanin and a grape-like odor, and causes ecthyma gangrenosum in burn and immunocompromised patients.",
  },
  {
    id: "b-cdiff",
    section: "bacteria",
    prompt:
      "A hospitalized patient on clindamycin develops profuse watery diarrhea, crampy abdominal pain, and fever. Colonoscopy shows yellow pseudomembranes.",
    answer: "clostridioides-difficile",
    distractors: [
      "salmonella-enterica",
      "shigella-dysenteriae",
      "campylobacter-jejuni",
    ],
    explanation:
      "Clostridioides difficile overgrows after antibiotic disruption of gut flora; toxins A/B cause pseudomembranous colitis.",
  },
  {
    id: "b-tb",
    section: "bacteria",
    prompt:
      "A recent immigrant presents with weeks of productive cough, hemoptysis, night sweats, and weight loss. Chest X-ray shows an apical cavitary lesion; sputum has acid-fast bacilli.",
    answer: "mycobacterium-tuberculosis",
    distractors: [
      "streptococcus-pneumoniae",
      "klebsiella-pneumoniae",
      "nocardia-asteroides",
    ],
    explanation:
      "Mycobacterium tuberculosis — acid-fast rod causing apical cavitary disease with constitutional symptoms; reactivation TB.",
  },
  {
    id: "b-cholera",
    section: "bacteria",
    prompt:
      "After drinking untreated water in an endemic area, a patient has voluminous painless 'rice-water' stools leading to profound dehydration. Stool darkfield shows darting comma-shaped rods.",
    answer: "vibrio-cholerae",
    distractors: [
      "escherichia-coli",
      "salmonella-enterica",
      "campylobacter-jejuni",
    ],
    explanation:
      "Vibrio cholerae — comma-shaped rod whose cholera toxin drives massive secretory rice-water diarrhea.",
  },
  {
    id: "b-pertussis",
    section: "bacteria",
    prompt:
      "An unvaccinated infant has paroxysms of coughing followed by an inspiratory 'whoop' and post-tussive vomiting, with marked lymphocytosis.",
    answer: "bordetella-pertussis",
    distractors: [
      "haemophilus-influenzae",
      "corynebacterium-diphtheriae",
      "streptococcus-pyogenes",
    ],
    explanation:
      "Bordetella pertussis — pertussis toxin causes the paroxysmal whooping cough and lymphocytosis of whooping cough.",
  },
  {
    id: "b-lyme",
    section: "bacteria",
    prompt:
      "After hiking in the northeastern US, a patient develops an expanding circular rash with central clearing (target lesion), fatigue, and arthralgias.",
    answer: "borrelia-burgdorferi",
    distractors: [
      "rickettsia-rickettsii",
      "treponema-pallidum",
      "leptospira-interrogans",
    ],
    explanation:
      "Borrelia burgdorferi — Ixodes-tick spirochete causing Lyme disease with erythema migrans.",
  },
  {
    id: "b-klebsiella",
    section: "bacteria",
    prompt:
      "An alcoholic man develops lobar pneumonia with thick, bloody 'currant jelly' sputum. Sputum shows a mucoid, heavily encapsulated gram-negative rod.",
    answer: "klebsiella-pneumoniae",
    distractors: [
      "streptococcus-pneumoniae",
      "pseudomonas-aeruginosa",
      "haemophilus-influenzae",
    ],
    explanation:
      "Klebsiella pneumoniae — encapsulated mucoid rod causing currant-jelly sputum pneumonia in alcoholics and diabetics.",
  },
  {
    id: "b-staph-tss",
    section: "bacteria",
    prompt:
      "A healthy young woman using superabsorbent tampons develops high fever, hypotension, a diffuse sunburn-like rash, and desquamation of the palms.",
    answer: "staphylococcus-aureus",
    distractors: [
      "streptococcus-pyogenes",
      "neisseria-meningitidis",
      "clostridium-perfringens",
    ],
    explanation:
      "Staphylococcus aureus TSST-1 acts as a superantigen causing toxic shock syndrome.",
  },
  {
    id: "b-syphilis",
    section: "bacteria",
    prompt:
      "A sexually active patient has a single painless genital ulcer with a clean indurated base. Darkfield microscopy shows motile spirochetes.",
    answer: "treponema-pallidum",
    distractors: [
      "haemophilus-influenzae",
      "chlamydia-trachomatis",
      "borrelia-burgdorferi",
    ],
    explanation:
      "Treponema pallidum — the painless chancre is primary syphilis; too thin to Gram stain, seen on darkfield.",
  },
  {
    id: "b-listeria",
    section: "bacteria",
    prompt:
      "An elderly patient develops meningitis after eating unpasteurized soft cheese. CSF Gram stain shows gram-positive rods with tumbling motility.",
    answer: "listeria-monocytogenes",
    distractors: [
      "streptococcus-pneumoniae",
      "neisseria-meningitidis",
      "corynebacterium-diphtheriae",
    ],
    explanation:
      "Listeria monocytogenes — motile gram-positive rod causing meningitis at the extremes of age and in pregnancy; grows at refrigeration temperatures.",
  },
  {
    id: "b-hpylori",
    section: "bacteria",
    prompt:
      "A patient with chronic epigastric pain relieved by eating undergoes endoscopy showing a duodenal ulcer. A urease (breath) test is positive; biopsy shows curved gram-negative rods.",
    answer: "helicobacter-pylori",
    distractors: [
      "campylobacter-jejuni",
      "vibrio-cholerae",
      "escherichia-coli",
    ],
    explanation:
      "Helicobacter pylori — urease-positive curved rod causing peptic ulcers and gastric cancer.",
  },

  // ---------------- Viruses ----------------
  {
    id: "v-ebv",
    section: "viruses",
    prompt:
      "A 17-year-old has weeks of fatigue, sore throat with exudative tonsillitis, posterior cervical lymphadenopathy, and splenomegaly. Heterophile antibody test is positive; smear shows atypical lymphocytes.",
    answer: "epstein-barr-virus",
    distractors: ["cytomegalovirus", "measles-virus", "mumps-virus"],
    explanation:
      "Epstein-Barr virus — infectious mononucleosis with positive Monospot and atypical (reactive) lymphocytes; avoid ampicillin (rash).",
  },
  {
    id: "v-rsv",
    section: "viruses",
    prompt:
      "A 6-month-old in winter has wheezing, tachypnea, and difficulty feeding after a few days of coryza. Nasal washing detects a virus that forms multinucleated syncytia.",
    answer: "respiratory-syncytial-virus",
    distractors: [
      "parainfluenza-virus",
      "influenza-a-virus",
      "human-metapneumovirus",
    ],
    explanation:
      "Respiratory syncytial virus — the leading cause of infant bronchiolitis; fuses cells into syncytia.",
  },
  {
    id: "v-measles",
    section: "viruses",
    prompt:
      "An unvaccinated child has high fever, cough, coryza, conjunctivitis, and blue-white spots on the buccal mucosa, followed by a descending maculopapular rash.",
    answer: "measles-virus",
    distractors: ["rubella-virus", "parvovirus-b19", "varicella-zoster-virus"],
    explanation:
      "Measles — the 3 C's (cough, coryza, conjunctivitis) plus Koplik spots preceding a cephalocaudal rash.",
  },
  {
    id: "v-cmv",
    section: "viruses",
    prompt:
      "A renal transplant recipient develops fever, pancytopenia, and colitis. Biopsy shows large cells with 'owl-eye' intranuclear inclusions.",
    answer: "cytomegalovirus",
    distractors: [
      "epstein-barr-virus",
      "herpes-simplex-virus-1",
      "varicella-zoster-virus",
    ],
    explanation:
      "Cytomegalovirus — owl-eye inclusions; major cause of disease in transplant and AIDS patients.",
  },
  {
    id: "v-rabies",
    section: "viruses",
    prompt:
      "Weeks after a bat exposure, a patient develops agitation, hydrophobia, and hypersalivation. Brain biopsy shows eosinophilic cytoplasmic inclusions in neurons.",
    answer: "rabies-virus",
    distractors: [
      "herpes-simplex-virus-1",
      "west-nile-virus",
      "poliovirus",
    ],
    explanation:
      "Rabies — bullet-shaped virus traveling retrograde along nerves; Negri bodies and hydrophobia.",
  },
  {
    id: "v-parvo",
    section: "viruses",
    prompt:
      "A child has a bright red 'slapped-cheek' facial rash followed by a lacy rash on the trunk. A pregnant contact is at risk of fetal hydrops.",
    answer: "parvovirus-b19",
    distractors: ["measles-virus", "rubella-virus", "human-herpesvirus-6"],
    explanation:
      "Parvovirus B19 — fifth disease (slapped cheek); targets erythroid precursors causing aplastic crisis and hydrops fetalis.",
  },
  {
    id: "v-vzv",
    section: "viruses",
    prompt:
      "An older adult develops a painful vesicular rash in a single dermatomal band that does not cross the midline.",
    answer: "varicella-zoster-virus",
    distractors: [
      "herpes-simplex-virus-1",
      "herpes-simplex-virus-2",
      "monkeypox-virus",
    ],
    explanation:
      "Varicella-zoster virus reactivates from dorsal root ganglia as dermatomal shingles.",
  },

  // ---------------- Fungi ----------------
  {
    id: "f-crypto",
    section: "fungi",
    prompt:
      "A patient with AIDS and a CD4 count of 40 has subacute headache and fever. CSF India ink shows encapsulated budding yeast; cryptococcal antigen is positive.",
    answer: "cryptococcus-neoformans",
    distractors: [
      "histoplasma-capsulatum",
      "candida-albicans",
      "coccidioides-immitis",
    ],
    explanation:
      "Cryptococcus neoformans — encapsulated yeast causing AIDS meningitis; India ink and antigen testing.",
  },
  {
    id: "f-mucor",
    section: "fungi",
    prompt:
      "A patient in diabetic ketoacidosis develops facial pain, black necrotic eschar on the palate, and proptosis. Biopsy shows broad, ribbon-like, non-septate hyphae with right-angle branching.",
    answer: "rhizopus-arrhizus",
    distractors: [
      "aspergillus-fumigatus",
      "candida-albicans",
      "fusarium-solani",
    ],
    explanation:
      "Rhizopus (mucormycosis) — broad aseptate hyphae causing angioinvasive rhino-orbital-cerebral disease in DKA.",
  },
  {
    id: "f-aspergillus",
    section: "fungi",
    prompt:
      "A neutropenic patient after chemotherapy develops fever and hemoptysis; CT shows a pulmonary nodule with a halo sign. Biopsy shows septate hyphae branching at acute (45°) angles.",
    answer: "aspergillus-fumigatus",
    distractors: [
      "rhizopus-arrhizus",
      "cryptococcus-neoformans",
      "pneumocystis-jirovecii",
    ],
    explanation:
      "Aspergillus fumigatus — acute-angle septate hyphae causing angioinvasive aspergillosis with the halo sign.",
  },
  {
    id: "f-histo",
    section: "fungi",
    prompt:
      "A spelunker from the Ohio River valley exposed to bat droppings develops fever and cough. Biopsy shows small intracellular yeast within macrophages.",
    answer: "histoplasma-capsulatum",
    distractors: [
      "blastomyces-dermatitidis",
      "coccidioides-immitis",
      "cryptococcus-neoformans",
    ],
    explanation:
      "Histoplasma capsulatum — intracellular yeast in macrophages; bird/bat droppings, Mississippi/Ohio valleys.",
  },
  {
    id: "f-pcp",
    section: "fungi",
    prompt:
      "A patient with untreated HIV (CD4 30) has dry cough, exertional dyspnea, and diffuse bilateral 'ground-glass' infiltrates. The organism cannot be cultured; silver stain shows cysts.",
    answer: "pneumocystis-jirovecii",
    distractors: [
      "cryptococcus-neoformans",
      "histoplasma-capsulatum",
      "candida-albicans",
    ],
    explanation:
      "Pneumocystis jirovecii pneumonia (PCP) — ground-glass infiltrates in advanced HIV; treat with TMP-SMX.",
  },
  {
    id: "f-sporo",
    section: "fungi",
    prompt:
      "A rose gardener pricked by a thorn develops an ulcer at the site followed by a chain of nodules ascending along the lymphatics of the arm.",
    answer: "sporothrix-schenckii",
    distractors: [
      "candida-albicans",
      "malassezia-furfur",
      "aspergillus-fumigatus",
    ],
    explanation:
      "Sporothrix schenckii — 'rose-gardener's disease' with nodular lymphocutaneous spread.",
  },
  {
    id: "f-valley",
    section: "fungi",
    prompt:
      "After a dust storm in Arizona, a construction worker develops fever, cough, and erythema nodosum. Biopsy shows large spherules filled with endospores.",
    answer: "coccidioides-immitis",
    distractors: [
      "histoplasma-capsulatum",
      "blastomyces-dermatitidis",
      "cryptococcus-neoformans",
    ],
    explanation:
      "Coccidioides immitis — 'Valley fever' of the arid Southwest; tissue spherules packed with endospores.",
  },

  // ---------------- Parasites ----------------
  {
    id: "p-malaria",
    section: "parasites",
    prompt:
      "A traveler returning from sub-Saharan Africa has cyclical fevers, chills, and headache. Thick/thin smears show ring forms and banana-shaped gametocytes in red cells.",
    answer: "plasmodium-falciparum",
    distractors: ["babesia-microti", "plasmodium-vivax", "toxoplasma-gondii"],
    explanation:
      "Plasmodium falciparum — the most lethal malaria; banana-shaped gametocytes and high parasitemia with cerebral malaria.",
  },
  {
    id: "p-entamoeba",
    section: "parasites",
    prompt:
      "A returning traveler has bloody diarrhea and right-upper-quadrant pain; imaging shows a liver abscess with 'anchovy-paste' contents. Colon biopsy shows flask-shaped ulcers.",
    answer: "entamoeba-histolytica",
    distractors: [
      "giardia-lamblia",
      "cryptosporidium-parvum",
      "balantidium-coli",
    ],
    explanation:
      "Entamoeba histolytica — invasive amebiasis with flask-shaped ulcers and anchovy-paste liver abscess.",
  },
  {
    id: "p-giardia",
    section: "parasites",
    prompt:
      "A hiker who drank from a mountain stream has weeks of foul-smelling, greasy, non-bloody diarrhea, bloating, and flatulence. Stool shows pear-shaped flagellated trophozoites.",
    answer: "giardia-lamblia",
    distractors: [
      "entamoeba-histolytica",
      "cryptosporidium-parvum",
      "trichomonas-vaginalis",
    ],
    explanation:
      "Giardia lamblia — fatty, foul-smelling diarrhea after fresh-water exposure; treat with metronidazole.",
  },
  {
    id: "p-pinworm",
    section: "parasites",
    prompt:
      "A 6-year-old has intense nocturnal perianal itching. A cellophane-tape test of the perianal skin reveals flattened ova.",
    answer: "enterobius-vermicularis",
    distractors: [
      "ascaris-lumbricoides",
      "necator-americanus",
      "trichuris-trichiura",
    ],
    explanation:
      "Enterobius vermicularis (pinworm) — nocturnal perianal pruritus diagnosed by the tape test.",
  },
  {
    id: "p-neurocysticercosis",
    section: "parasites",
    prompt:
      "An adult immigrant presents with new-onset seizures. Brain MRI shows multiple cystic lesions, some calcified. He reports eating undercooked pork.",
    answer: "taenia-solium",
    distractors: [
      "echinococcus-granulosus",
      "toxoplasma-gondii",
      "schistosoma-mansoni",
    ],
    explanation:
      "Taenia solium — ingested eggs cause cysticercosis; brain cysts (neurocysticercosis) are a top cause of adult-onset seizures worldwide.",
  },
  {
    id: "p-naegleria",
    section: "parasites",
    prompt:
      "A teenager who went swimming and diving in a warm freshwater lake develops fulminant meningoencephalitis within days. CSF wet mount shows motile amoebae.",
    answer: "naegleria-fowleri",
    distractors: [
      "acanthamoeba-castellanii",
      "entamoeba-histolytica",
      "balamuthia-mandrillaris",
    ],
    explanation:
      "Naegleria fowleri — warm freshwater amoeba ascending the cribriform plate to cause rapidly fatal primary amoebic meningoencephalitis.",
  },
  {
    id: "p-chagas",
    section: "parasites",
    prompt:
      "A patient from rural South America develops, years after a 'kissing bug' bite, dilated cardiomyopathy with conduction block and megacolon.",
    answer: "trypanosoma-cruzi",
    distractors: [
      "trypanosoma-brucei",
      "leishmania-donovani",
      "plasmodium-falciparum",
    ],
    explanation:
      "Trypanosoma cruzi — Chagas disease; chronic cardiomyopathy and megacolon/megaesophagus.",
  },
  {
    id: "p-strongy",
    section: "parasites",
    prompt:
      "A patient started on high-dose corticosteroids develops a serpiginous, rapidly migrating perianal rash, abdominal pain, and gram-negative sepsis with eosinophilia.",
    answer: "strongyloides-stercoralis",
    distractors: [
      "necator-americanus",
      "ascaris-lumbricoides",
      "ancylostoma-duodenale",
    ],
    explanation:
      "Strongyloides stercoralis — autoinfection causes larva currens and life-threatening hyperinfection with immunosuppression.",
  },

  // ---------------- Pharmacology ----------------
  {
    id: "d-mrsa",
    section: "pharmacology",
    prompt:
      "A patient has MRSA bacteremia from an infected central line. Which IV agent is the standard empiric choice?",
    answer: "vancomycin",
    distractors: ["nafcillin", "ceftriaxone", "azithromycin"],
    explanation:
      "Vancomycin — the empiric IV agent for MRSA; nafcillin/cefazolin only cover MSSA.",
  },
  {
    id: "d-anaphylaxis",
    section: "pharmacology",
    prompt:
      "Minutes after a bee sting, a patient develops stridor, wheezing, hypotension, and urticaria. What is the immediate first-line drug?",
    answer: "epinephrine",
    distractors: ["dexamethasone", "atropine", "albuterol"],
    explanation:
      "Epinephrine IM is first-line for anaphylaxis — α1 vasoconstriction, β2 bronchodilation, β1 inotropy.",
  },
  {
    id: "d-svt",
    section: "pharmacology",
    prompt:
      "A patient with a narrow-complex regular tachycardia at 180 bpm is stable. Which drug, given as a rapid IV push, transiently blocks the AV node to terminate it?",
    answer: "adenosine",
    distractors: ["amiodarone", "digoxin", "metoprolol"],
    explanation:
      "Adenosine — very short-acting AV-nodal blocker that terminates SVT; warns of transient asystole/flushing.",
  },
  {
    id: "d-rifampin",
    section: "pharmacology",
    prompt:
      "A patient on a four-drug tuberculosis regimen notices red-orange tears and urine, and his oral contraceptive fails due to enzyme induction. Which drug is responsible?",
    answer: "rifampin",
    distractors: ["isoniazid", "ethambutol", "pyrazinamide"],
    explanation:
      "Rifampin — red-orange body fluids and potent CYP450 induction (RNA-polymerase inhibitor).",
  },
  {
    id: "d-metronidazole",
    section: "pharmacology",
    prompt:
      "A patient treated for trichomoniasis is warned to avoid alcohol because of a disulfiram-like reaction with flushing and vomiting. Which drug was prescribed?",
    answer: "metronidazole",
    distractors: ["azithromycin", "doxycycline", "fluconazole"],
    explanation:
      "Metronidazole — disulfiram-like reaction with alcohol; covers anaerobes and protozoa (Trichomonas, Giardia, Entamoeba).",
  },
  {
    id: "d-acetaminophen",
    section: "pharmacology",
    prompt:
      "A patient presents 8 hours after a large acetaminophen overdose with a rising transaminase level. Which antidote replenishes glutathione?",
    answer: "acetylcysteine",
    distractors: ["naloxone", "atropine", "flumazenil"],
    explanation:
      "N-acetylcysteine — restores hepatic glutathione to detoxify NAPQI in acetaminophen poisoning.",
  },
  {
    id: "d-her2",
    section: "pharmacology",
    prompt:
      "A woman with HER2-overexpressing breast cancer is started on a monoclonal antibody; baseline and serial echocardiograms are obtained because of its cardiotoxicity. Which drug?",
    answer: "trastuzumab",
    distractors: ["tamoxifen", "doxorubicin", "imatinib"],
    explanation:
      "Trastuzumab — anti-HER2 monoclonal antibody with reversible cardiotoxicity (monitor ejection fraction).",
  },
  {
    id: "d-organophosphate",
    section: "pharmacology",
    prompt:
      "A farm worker presents with miosis, salivation, lacrimation, diarrhea, and bronchospasm after pesticide exposure. Which drug reverses the muscarinic toxidrome?",
    answer: "atropine",
    distractors: ["epinephrine", "neostigmine", "propranolol"],
    explanation:
      "Atropine — antimuscarinic antidote for organophosphate (cholinergic) poisoning; pair with pralidoxime.",
  },
];
