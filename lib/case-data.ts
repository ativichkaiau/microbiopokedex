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

  // ---------------- Bacteria (set 2) ----------------
  {
    id: "b-scarlet",
    section: "bacteria",
    prompt:
      "A 6-year-old with a sore throat develops a sandpaper-like rash, circumoral pallor, and a 'strawberry' tongue. ASO titer is rising.",
    answer: "streptococcus-pyogenes",
    distractors: [
      "staphylococcus-aureus",
      "corynebacterium-diphtheriae",
      "streptococcus-agalactiae",
    ],
    explanation:
      "Streptococcus pyogenes (Group A strep) — erythrogenic toxin causes scarlet fever; risk of rheumatic fever and PSGN.",
  },
  {
    id: "b-pneumococcus",
    section: "bacteria",
    prompt:
      "An older adult with abrupt fever, a single shaking rigor, and rust-colored sputum has lobar consolidation. Gram stain shows lancet-shaped gram-positive diplococci.",
    answer: "streptococcus-pneumoniae",
    distractors: [
      "klebsiella-pneumoniae",
      "haemophilus-influenzae",
      "mycoplasma-pneumoniae",
    ],
    explanation:
      "Streptococcus pneumoniae — the most common cause of typical community-acquired (lobar) pneumonia; rusty sputum, lancet diplococci.",
  },
  {
    id: "b-ecoli-uti",
    section: "bacteria",
    prompt:
      "A sexually active young woman has dysuria, frequency, and suprapubic pain. Urine culture grows a lactose-fermenting gram-negative rod that is indole positive.",
    answer: "escherichia-coli",
    distractors: [
      "staphylococcus-saprophyticus",
      "proteus-mirabilis",
      "klebsiella-pneumoniae",
    ],
    explanation:
      "Escherichia coli — the leading cause of uncomplicated cystitis; lactose-positive, indole-positive enteric rod.",
  },
  {
    id: "b-botulism",
    section: "bacteria",
    prompt:
      "A 4-month-old fed honey becomes constipated, floppy, and feeds poorly, with descending flaccid paralysis and ptosis.",
    answer: "clostridium-botulinum",
    distractors: [
      "clostridium-tetani",
      "clostridium-perfringens",
      "listeria-monocytogenes",
    ],
    explanation:
      "Clostridium botulinum — spores in honey produce toxin that blocks ACh release, causing infant botulism (descending paralysis).",
  },
  {
    id: "b-tetanus",
    section: "bacteria",
    prompt:
      "An unvaccinated farmer steps on a rusty nail and days later develops lockjaw, a fixed grimace (risus sardonicus), and painful muscle spasms.",
    answer: "clostridium-tetani",
    distractors: [
      "clostridium-botulinum",
      "clostridium-perfringens",
      "bacillus-anthracis",
    ],
    explanation:
      "Clostridium tetani — tetanospasmin blocks inhibitory neurotransmitters, causing spastic (rigid) paralysis.",
  },
  {
    id: "b-gonococcus",
    section: "bacteria",
    prompt:
      "A sexually active young adult has migratory polyarthralgia, tenosynovitis, and scattered pustular skin lesions. Synovial fluid shows gram-negative diplococci within neutrophils.",
    answer: "neisseria-gonorrhoeae",
    distractors: [
      "neisseria-meningitidis",
      "staphylococcus-aureus",
      "treponema-pallidum",
    ],
    explanation:
      "Neisseria gonorrhoeae — disseminated gonococcal infection: arthritis-dermatitis syndrome with intracellular gram-negative diplococci.",
  },
  {
    id: "b-epiglottitis",
    section: "bacteria",
    prompt:
      "An unvaccinated toddler is drooling, leaning forward in a tripod position with stridor and high fever. Lateral neck film shows a 'thumbprint' sign.",
    answer: "haemophilus-influenzae",
    distractors: [
      "streptococcus-pyogenes",
      "corynebacterium-diphtheriae",
      "bordetella-pertussis",
    ],
    explanation:
      "Haemophilus influenzae type b — classic cause of epiglottitis (thumbprint sign) before conjugate vaccination.",
  },
  {
    id: "b-typhoid",
    section: "bacteria",
    prompt:
      "A traveler returning from South Asia has a week of stepwise rising fever, abdominal pain, rose-colored spots on the trunk, and relative bradycardia.",
    answer: "salmonella-enterica",
    distractors: [
      "shigella-dysenteriae",
      "brucella-melitensis",
      "rickettsia-prowazekii",
    ],
    explanation:
      "Salmonella enterica serovar Typhi — enteric (typhoid) fever with rose spots and pulse-temperature dissociation.",
  },
  {
    id: "b-rmsf",
    section: "bacteria",
    prompt:
      "A child from North Carolina has high fever and headache, then a maculopapular rash that begins on the wrists and ankles and spreads to the palms, soles, and trunk after a tick bite.",
    answer: "rickettsia-rickettsii",
    distractors: [
      "rickettsia-prowazekii",
      "borrelia-burgdorferi",
      "ehrlichia-chaffeensis",
    ],
    explanation:
      "Rickettsia rickettsii — Rocky Mountain spotted fever; rash starts peripherally (wrists/ankles) and moves centrally.",
  },
  {
    id: "b-legionella",
    section: "bacteria",
    prompt:
      "An older smoker develops severe pneumonia with high fever, confusion, diarrhea, and hyponatremia after staying at a hotel with a contaminated cooling system. Sputum Gram stain shows neutrophils but no organisms.",
    answer: "legionella-pneumophila",
    distractors: [
      "streptococcus-pneumoniae",
      "mycoplasma-pneumoniae",
      "coxiella-burnetii",
    ],
    explanation:
      "Legionella pneumophila — atypical pneumonia with hyponatremia and diarrhea; poorly Gram-staining, needs silver stain/charcoal yeast agar.",
  },
  {
    id: "b-leprosy",
    section: "bacteria",
    prompt:
      "An immigrant has several hypopigmented, anesthetic skin patches and thickened peripheral nerves. The acid-fast organism cannot be grown in culture.",
    answer: "mycobacterium-leprae",
    distractors: [
      "mycobacterium-tuberculosis",
      "mycobacterium-avium",
      "mycobacterium-marinum",
    ],
    explanation:
      "Mycobacterium leprae — Hansen's disease; loss of sensation in skin lesions; uncultivable in vitro.",
  },

  // ---------------- Viruses (set 2) ----------------
  {
    id: "v-influenza",
    section: "viruses",
    prompt:
      "During a winter outbreak, an adult has abrupt high fever, severe myalgias, headache, and dry cough. A neuraminidase inhibitor started within 48 hours shortens the illness.",
    answer: "influenza-a-virus",
    distractors: [
      "respiratory-syncytial-virus",
      "parainfluenza-virus",
      "rhinovirus",
    ],
    explanation:
      "Influenza A — abrupt systemic flu; segmented genome undergoes drift/shift; treat early with oseltamivir.",
  },
  {
    id: "v-rotavirus",
    section: "viruses",
    prompt:
      "An unvaccinated infant in daycare has several days of vomiting and profuse watery, non-bloody diarrhea during the winter.",
    answer: "rotavirus",
    distractors: ["norovirus", "adenovirus", "astrovirus"],
    explanation:
      "Rotavirus — the leading cause of severe dehydrating gastroenteritis in young children (segmented dsRNA).",
  },
  {
    id: "v-norovirus",
    section: "viruses",
    prompt:
      "Dozens of passengers on a cruise ship develop explosive vomiting and watery diarrhea within a day of each other; it spreads rapidly with a very low infectious dose.",
    answer: "norovirus",
    distractors: ["rotavirus", "sapovirus", "hepatitis-a-virus"],
    explanation:
      "Norovirus — the dominant cause of epidemic non-bacterial gastroenteritis (cruise ships, institutions).",
  },
  {
    id: "v-hsv-encephalitis",
    section: "viruses",
    prompt:
      "An adult has fever, confusion, and seizures. MRI shows temporal-lobe edema and CSF has red blood cells (hemorrhagic).",
    answer: "herpes-simplex-virus-1",
    distractors: [
      "cytomegalovirus",
      "varicella-zoster-virus",
      "rabies-virus",
    ],
    explanation:
      "HSV-1 — the most common cause of sporadic fatal encephalitis, with hemorrhagic temporal-lobe involvement; treat with acyclovir.",
  },
  {
    id: "v-hbv",
    section: "viruses",
    prompt:
      "A healthcare worker has a needlestick and months later develops jaundice and elevated transaminases. Serology shows HBsAg and IgM anti-HBc; she is at long-term risk of hepatocellular carcinoma.",
    answer: "hepatitis-b-virus",
    distractors: [
      "hepatitis-a-virus",
      "hepatitis-c-virus",
      "cytomegalovirus",
    ],
    explanation:
      "Hepatitis B virus — bloodborne DNA virus; HBsAg positivity, chronic carriage, and HCC risk.",
  },
  {
    id: "v-dengue",
    section: "viruses",
    prompt:
      "A traveler from Southeast Asia has high fever, severe retro-orbital pain, intense myalgia ('breakbone'), and a rash, with thrombocytopenia. A second infection risks hemorrhagic shock.",
    answer: "dengue-virus",
    distractors: [
      "zika-virus",
      "yellow-fever-virus",
      "chikungunya-virus",
    ],
    explanation:
      "Dengue virus — breakbone fever; secondary infection with a different serotype can cause dengue hemorrhagic fever via antibody-dependent enhancement.",
  },
  {
    id: "v-mumps",
    section: "viruses",
    prompt:
      "An unvaccinated teenager develops bilateral painful parotid swelling, followed by testicular pain and swelling.",
    answer: "mumps-virus",
    distractors: [
      "epstein-barr-virus",
      "cytomegalovirus",
      "parainfluenza-virus",
    ],
    explanation:
      "Mumps virus — parotitis with orchitis, aseptic meningitis, and pancreatitis; MMR-preventable.",
  },
  {
    id: "v-hpv",
    section: "viruses",
    prompt:
      "A woman has an abnormal Pap smear; cytology shows koilocytes. The high-risk subtypes (16/18) integrate viral E6/E7 oncoproteins and drive cervical cancer.",
    answer: "human-papillomavirus",
    distractors: [
      "herpes-simplex-virus-2",
      "cytomegalovirus",
      "epstein-barr-virus",
    ],
    explanation:
      "Human papillomavirus — koilocytes; high-risk types cause cervical and oropharyngeal cancer; vaccine-preventable.",
  },

  // ---------------- Fungi (set 2) ----------------
  {
    id: "f-candida-vag",
    section: "fungi",
    prompt:
      "A woman with poorly controlled diabetes has vulvar itching and a thick, white, 'cottage cheese' vaginal discharge. KOH prep shows budding yeast with pseudohyphae.",
    answer: "candida-albicans",
    distractors: [
      "malassezia-furfur",
      "cryptococcus-neoformans",
      "aspergillus-fumigatus",
    ],
    explanation:
      "Candida albicans — vulvovaginal candidiasis; germ-tube-positive yeast forming pseudohyphae.",
  },
  {
    id: "f-blasto",
    section: "fungi",
    prompt:
      "A man from Wisconsin who works outdoors has pneumonia plus well-demarcated warty (verrucous) skin lesions. Biopsy shows broad-based budding yeast.",
    answer: "blastomyces-dermatitidis",
    distractors: [
      "histoplasma-capsulatum",
      "coccidioides-immitis",
      "paracoccidioides-brasiliensis",
    ],
    explanation:
      "Blastomyces dermatitidis — broad-based budding yeast; pulmonary plus skin/bone disease in the Great Lakes/Mississippi regions.",
  },
  {
    id: "f-versicolor",
    section: "fungi",
    prompt:
      "A young adult has hypo- and hyperpigmented scaly macules on the trunk that are more obvious after sun exposure. KOH shows yeast and short hyphae ('spaghetti and meatballs').",
    answer: "malassezia-furfur",
    distractors: [
      "trichophyton-rubrum",
      "candida-albicans",
      "sporothrix-schenckii",
    ],
    explanation:
      "Malassezia furfur — tinea (pityriasis) versicolor; lipophilic yeast with the classic spaghetti-and-meatballs appearance.",
  },
  {
    id: "f-tinea-pedis",
    section: "fungi",
    prompt:
      "A runner has itchy, scaly, macerated skin between the toes and thickened, discolored toenails. KOH of a scraping shows septate, branching hyphae.",
    answer: "trichophyton-rubrum",
    distractors: [
      "microsporum-canis",
      "epidermophyton-floccosum",
      "malassezia-furfur",
    ],
    explanation:
      "Trichophyton rubrum — the most common dermatophyte; athlete's foot and onychomycosis. Treat onychomycosis with oral terbinafine.",
  },
  {
    id: "f-cauris",
    section: "fungi",
    prompt:
      "An ICU has an outbreak of bloodstream infections from a yeast that persists on skin and surfaces, is frequently misidentified, and is resistant to fluconazole and often amphotericin.",
    answer: "candida-auris",
    distractors: [
      "candida-albicans",
      "candida-glabrata",
      "cryptococcus-neoformans",
    ],
    explanation:
      "Candida auris — emerging multidrug-resistant nosocomial yeast; echinocandins are first-line.",
  },

  // ---------------- Parasites (set 2) ----------------
  {
    id: "p-toxo",
    section: "parasites",
    prompt:
      "A patient with AIDS and a CD4 count of 50 has headache and focal weakness. MRI shows multiple ring-enhancing lesions in the basal ganglia.",
    answer: "toxoplasma-gondii",
    distractors: [
      "taenia-solium",
      "trypanosoma-cruzi",
      "entamoeba-histolytica",
    ],
    explanation:
      "Toxoplasma gondii — reactivation toxoplasmosis causes multiple ring-enhancing brain lesions in AIDS; treat with pyrimethamine-sulfadiazine.",
  },
  {
    id: "p-schisto-mansoni",
    section: "parasites",
    prompt:
      "A traveler who swam in an African lake develops hepatosplenomegaly and signs of portal hypertension. Stool shows eggs with a prominent lateral spine.",
    answer: "schistosoma-mansoni",
    distractors: [
      "schistosoma-haematobium",
      "clonorchis-sinensis",
      "fasciola-hepatica",
    ],
    explanation:
      "Schistosoma mansoni — mesenteric veins; lateral-spine eggs; hepatic granulomas and portal hypertension. Treat with praziquantel.",
  },
  {
    id: "p-schisto-haem",
    section: "parasites",
    prompt:
      "An Egyptian man has painless terminal hematuria. Cystoscopy shows bladder wall changes; eggs have a terminal spine, and he is at increased risk of squamous-cell bladder cancer.",
    answer: "schistosoma-haematobium",
    distractors: [
      "schistosoma-mansoni",
      "schistosoma-japonicum",
      "wuchereria-bancrofti",
    ],
    explanation:
      "Schistosoma haematobium — bladder venous plexus; terminal-spine eggs, hematuria, and squamous-cell bladder carcinoma risk.",
  },
  {
    id: "p-ascaris",
    section: "parasites",
    prompt:
      "A child in a low-resource area has abdominal discomfort and passes a large round worm in the stool; earlier he had a transient cough with eosinophilia (pulmonary phase).",
    answer: "ascaris-lumbricoides",
    distractors: [
      "necator-americanus",
      "enterobius-vermicularis",
      "trichuris-trichiura",
    ],
    explanation:
      "Ascaris lumbricoides — the largest intestinal roundworm; egg ingestion, larval lung migration (Löffler syndrome), can cause obstruction.",
  },
  {
    id: "p-onchocerca",
    section: "parasites",
    prompt:
      "A man in West Africa near fast-flowing rivers has intensely itchy skin, subcutaneous nodules, and progressive vision loss. He was bitten by blackflies.",
    answer: "onchocerca-volvulus",
    distractors: ["loa-loa", "wuchereria-bancrofti", "brugia-malayi"],
    explanation:
      "Onchocerca volvulus — blackfly-borne filaria causing river blindness; treat with ivermectin.",
  },
  {
    id: "p-filariasis",
    section: "parasites",
    prompt:
      "A man in the tropics develops massive lymphedema of the legs and scrotum (elephantiasis). Nocturnal blood smear shows sheathed microfilariae.",
    answer: "wuchereria-bancrofti",
    distractors: ["onchocerca-volvulus", "brugia-malayi", "loa-loa"],
    explanation:
      "Wuchereria bancrofti — mosquito-borne lymphatic filariasis causing elephantiasis; nocturnal microfilaremia.",
  },
  {
    id: "p-babesia",
    section: "parasites",
    prompt:
      "An asplenic patient from New England has fever, fatigue, and hemolytic anemia after a summer tick bite. Blood smear shows intraerythrocytic rings and a tetrad 'Maltese cross'.",
    answer: "babesia-microti",
    distractors: [
      "plasmodium-falciparum",
      "plasmodium-vivax",
      "trypanosoma-cruzi",
    ],
    explanation:
      "Babesia microti — Ixodes-borne; Maltese-cross tetrads and hemolysis, severe in asplenia.",
  },
  {
    id: "p-leishmania",
    section: "parasites",
    prompt:
      "A patient from the Indian subcontinent has months of fever, massive splenomegaly, weight loss, and pancytopenia. Marrow shows amastigotes within macrophages.",
    answer: "leishmania-donovani",
    distractors: [
      "trypanosoma-cruzi",
      "plasmodium-falciparum",
      "schistosoma-mansoni",
    ],
    explanation:
      "Leishmania donovani — visceral leishmaniasis (kala-azar); sandfly-borne amastigotes in macrophages with hepatosplenomegaly.",
  },
  {
    id: "p-scabies",
    section: "parasites",
    prompt:
      "A nursing-home resident and several staff have intensely itchy papules, worse at night, with thin serpiginous burrows in the finger web spaces and wrists.",
    answer: "sarcoptes-scabiei",
    distractors: [
      "pediculus-humanus-capitis",
      "demodex-folliculorum",
      "cimex-lectularius",
    ],
    explanation:
      "Sarcoptes scabiei — burrowing mite causing scabies; treat with permethrin (ivermectin for crusted/outbreak).",
  },

  // ---------------- Pharmacology (set 2) ----------------
  {
    id: "d-isoniazid",
    section: "pharmacology",
    prompt:
      "A patient with latent tuberculosis is started on monotherapy and co-prescribed pyridoxine (vitamin B6) to prevent peripheral neuropathy. Which drug?",
    answer: "isoniazid",
    distractors: ["rifampin", "ethambutol", "pyrazinamide"],
    explanation:
      "Isoniazid — latent TB monotherapy; depletes B6 (neuropathy) and can cause hepatotoxicity.",
  },
  {
    id: "d-amphotericin",
    section: "pharmacology",
    prompt:
      "A patient with severe cryptococcal meningitis is given an IV antifungal that binds ergosterol; infusion causes fever and rigors ('shake and bake'), and it is nephrotoxic with hypokalemia/hypomagnesemia.",
    answer: "amphotericin-b",
    distractors: ["fluconazole", "caspofungin", "terbinafine"],
    explanation:
      "Amphotericin B — polyene that forms membrane pores; infusion reactions and nephrotoxicity ('amphoterrible').",
  },
  {
    id: "d-acyclovir",
    section: "pharmacology",
    prompt:
      "A guanosine analog that must be monophosphorylated by viral thymidine kinase before it chain-terminates HSV/VZV DNA polymerase is started for herpes encephalitis. Which drug?",
    answer: "acyclovir",
    distractors: ["ganciclovir", "foscarnet", "ribavirin"],
    explanation:
      "Acyclovir — activated by HSV/VZV thymidine kinase; resistance arises from TK mutations (then use foscarnet).",
  },
  {
    id: "d-warfarin",
    section: "pharmacology",
    prompt:
      "A patient with a mechanical heart valve takes an oral anticoagulant requiring regular INR monitoring; it inhibits vitamin-K-dependent clotting factor synthesis and has many food/drug interactions.",
    answer: "warfarin",
    distractors: ["heparin", "apixaban", "aspirin"],
    explanation:
      "Warfarin — vitamin K epoxide reductase inhibitor; INR-monitored, reversed with vitamin K/PCC.",
  },
  {
    id: "d-furosemide",
    section: "pharmacology",
    prompt:
      "A patient in acute pulmonary edema is given an IV diuretic that blocks the Na-K-2Cl transporter in the thick ascending limb; watch for hypokalemia and ototoxicity.",
    answer: "furosemide",
    distractors: ["hydrochlorothiazide", "spironolactone", "mannitol"],
    explanation:
      "Furosemide — loop diuretic; rapid diuresis for volume overload, with hypokalemia and ototoxicity.",
  },
  {
    id: "d-digoxin",
    section: "pharmacology",
    prompt:
      "An elderly patient with heart failure and atrial fibrillation develops nausea, confusion, and yellow-green visual halos. The drug inhibits the Na/K-ATPase and has a narrow therapeutic window.",
    answer: "digoxin",
    distractors: ["amiodarone", "metoprolol", "diltiazem"],
    explanation:
      "Digoxin — cardiac glycoside; toxicity causes GI upset, visual halos, and arrhythmias, worsened by hypokalemia.",
  },
  {
    id: "d-lithium",
    section: "pharmacology",
    prompt:
      "A patient on long-term bipolar therapy develops a fine tremor, polyuria (nephrogenic DI), and hypothyroidism. The drug has a narrow therapeutic index and reduces suicide risk.",
    answer: "lithium",
    distractors: ["valproate", "lamotrigine", "haloperidol"],
    explanation:
      "Lithium — mood stabilizer; monitor levels, thyroid, and renal function (nephrogenic DI).",
  },
  {
    id: "d-levodopa",
    section: "pharmacology",
    prompt:
      "A patient with Parkinson disease improves on a dopamine precursor combined with a peripheral DOPA-decarboxylase inhibitor that reduces peripheral side effects.",
    answer: "levodopa-carbidopa",
    distractors: ["haloperidol", "donepezil", "gabapentin"],
    explanation:
      "Levodopa-carbidopa — replenishes CNS dopamine; carbidopa blocks peripheral conversion (less nausea/hypotension).",
  },
  {
    id: "d-albuterol",
    section: "pharmacology",
    prompt:
      "A patient in an acute asthma attack gets an inhaled short-acting bronchodilator that relaxes airway smooth muscle; side effects include tremor and tachycardia.",
    answer: "albuterol",
    distractors: ["ipratropium", "fluticasone", "montelukast"],
    explanation:
      "Albuterol — short-acting β2 agonist (SABA) for acute bronchospasm.",
  },
  {
    id: "d-metformin",
    section: "pharmacology",
    prompt:
      "A newly diagnosed type 2 diabetic is started on a first-line oral agent that lowers hepatic glucose output without causing hypoglycemia or weight gain; it is held before contrast due to lactic-acidosis risk.",
    answer: "metformin",
    distractors: ["glipizide", "insulin-glargine", "empagliflozin"],
    explanation:
      "Metformin — biguanide; first-line for T2DM, weight-neutral, no hypoglycemia, rare lactic acidosis.",
  },
  {
    id: "d-naloxone",
    section: "pharmacology",
    prompt:
      "A person found unresponsive with pinpoint pupils and a respiratory rate of 6 is given an antagonist that rapidly reverses the toxidrome.",
    answer: "naloxone",
    distractors: ["atropine", "acetylcysteine", "morphine"],
    explanation:
      "Naloxone — competitive μ-opioid antagonist that reverses opioid overdose.",
  },
  {
    id: "d-ceftriaxone",
    section: "pharmacology",
    prompt:
      "A third-generation cephalosporin is chosen empirically for adult bacterial meningitis and is also first-line (with azithromycin) for gonorrhea.",
    answer: "ceftriaxone",
    distractors: ["vancomycin", "penicillin-g", "azithromycin"],
    explanation:
      "Ceftriaxone — CNS-penetrant third-generation cephalosporin; meningitis, gonorrhea, pyelonephritis.",
  },
];
