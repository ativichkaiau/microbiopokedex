// Curated drug catalog. Antimicrobial categories cross-link to the microbe
// sections via the pharmacology map; systemic categories (autonomic,
// cardiovascular, etc.) organize the rest of clinical pharmacology by system.
// Descriptions include the class / mechanism and typical clinical use inline.

export const CATEGORIES = [
  "Antibacterial",
  "Antiviral",
  "Antifungal",
  "Antiparasitic",
  "Autonomic",
  "Cardiovascular",
  "Diuretic",
  "Antineoplastic",
  "CNS",
  "Respiratory",
  "Gastrointestinal",
  "Endocrine",
] as const;
export type DrugCategory = (typeof CATEGORIES)[number];

export type Drug = {
  slug: string;
  name: string;
  genericName: string;
  category: DrugCategory;
  drugClass: string;
  target: string;
  description: string;
};

export const DRUGS: Drug[] = [
  // ----- Antibacterials -----
  {
    slug: "penicillin-g",
    name: "Penicillin G",
    genericName: "benzylpenicillin",
    category: "Antibacterial",
    drugClass: "Penicillin",
    target: "Cell wall",
    description:
      "The original beta-lactam. IV/IM only. Narrow Gram-positive spectrum: S. pyogenes, susceptible pneumococcus, Treponema pallidum.",
  },
  {
    slug: "amoxicillin",
    name: "Amoxicillin",
    genericName: "amoxicillin",
    category: "Antibacterial",
    drugClass: "Aminopenicillin",
    target: "Cell wall",
    description:
      "Oral aminopenicillin with extended Gram-negative reach (E. coli, H. influenzae). First-line for otitis media and step-down for endocarditis prophylaxis.",
  },
  {
    slug: "amoxicillin-clavulanate",
    name: "Amoxicillin–clavulanate",
    genericName: "amoxicillin + clavulanic acid",
    category: "Antibacterial",
    drugClass: "Aminopenicillin + BL inhibitor",
    target: "Cell wall",
    description:
      "Augmentin. Adds a beta-lactamase inhibitor for resistant H. influenzae, M. catarrhalis, bite wounds (Pasteurella), and sinusitis.",
  },
  {
    slug: "ampicillin",
    name: "Ampicillin",
    genericName: "ampicillin",
    category: "Antibacterial",
    drugClass: "Aminopenicillin",
    target: "Cell wall",
    description:
      "IV aminopenicillin. Empiric coverage for Listeria meningitis, enterococcal endocarditis, and ampicillin-susceptible enteric gram-negatives.",
  },
  {
    slug: "nafcillin",
    name: "Nafcillin",
    genericName: "nafcillin",
    category: "Antibacterial",
    drugClass: "Antistaphylococcal penicillin",
    target: "Cell wall",
    description:
      "Beta-lactamase-stable penicillin for MSSA bacteremia, endocarditis, and osteomyelitis. Inactive against MRSA and enterococci.",
  },
  {
    slug: "piperacillin-tazobactam",
    name: "Piperacillin–tazobactam",
    genericName: "piperacillin + tazobactam",
    category: "Antibacterial",
    drugClass: "Antipseudomonal penicillin + BL inhibitor",
    target: "Cell wall",
    description:
      "Zosyn. Broad-spectrum IV beta-lactam covering Pseudomonas, enteric Gram-negatives, anaerobes, and most streptococci.",
  },
  {
    slug: "cefazolin",
    name: "Cefazolin",
    genericName: "cefazolin",
    category: "Antibacterial",
    drugClass: "1st-gen cephalosporin",
    target: "Cell wall",
    description:
      "Workhorse IV first-generation cephalosporin for MSSA, skin and soft tissue, and surgical prophylaxis.",
  },
  {
    slug: "cefuroxime",
    name: "Cefuroxime",
    genericName: "cefuroxime",
    category: "Antibacterial",
    drugClass: "2nd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Oral/IV second-generation cephalosporin with respiratory coverage (S. pneumoniae, H. influenzae, M. catarrhalis).",
  },
  {
    slug: "ceftriaxone",
    name: "Ceftriaxone",
    genericName: "ceftriaxone",
    category: "Antibacterial",
    drugClass: "3rd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Long-half-life IV third-generation cephalosporin. CNS-penetrant; standard for adult bacterial meningitis, gonorrhea, and pyelonephritis.",
  },
  {
    slug: "ceftazidime",
    name: "Ceftazidime",
    genericName: "ceftazidime",
    category: "Antibacterial",
    drugClass: "3rd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Third-generation cephalosporin with strong anti-Pseudomonas activity but weaker Gram-positive coverage. Pillar of melioidosis therapy.",
  },
  {
    slug: "cefepime",
    name: "Cefepime",
    genericName: "cefepime",
    category: "Antibacterial",
    drugClass: "4th-gen cephalosporin",
    target: "Cell wall",
    description:
      "Fourth-generation cephalosporin with anti-pseudomonal activity. Common empiric agent in febrile neutropenia and hospital-acquired pneumonia.",
  },
  {
    slug: "ceftaroline",
    name: "Ceftaroline",
    genericName: "ceftaroline fosamil",
    category: "Antibacterial",
    drugClass: "Anti-MRSA cephalosporin",
    target: "Cell wall (PBP2a)",
    description:
      "Fifth-generation cephalosporin with affinity for PBP2a. Approved for MRSA pneumonia and skin/soft tissue infections.",
  },
  {
    slug: "meropenem",
    name: "Meropenem",
    genericName: "meropenem",
    category: "Antibacterial",
    drugClass: "Carbapenem",
    target: "Cell wall",
    description:
      "Broadest-spectrum beta-lactam covering Gram+/-, anaerobes, and Pseudomonas. Stable to AmpC and ESBL; reserved for serious infections.",
  },
  {
    slug: "ertapenem",
    name: "Ertapenem",
    genericName: "ertapenem",
    category: "Antibacterial",
    drugClass: "Carbapenem",
    target: "Cell wall",
    description:
      "Once-daily carbapenem without Pseudomonas activity. Convenient for outpatient parenteral therapy of ESBL urinary and intra-abdominal infections.",
  },
  {
    slug: "vancomycin",
    name: "Vancomycin",
    genericName: "vancomycin",
    category: "Antibacterial",
    drugClass: "Glycopeptide",
    target: "Cell wall (D-Ala-D-Ala)",
    description:
      "IV glycopeptide and the empiric agent for MRSA and ampicillin-resistant enterococci. Oral form is non-absorbed and used for C. difficile colitis.",
  },
  {
    slug: "daptomycin",
    name: "Daptomycin",
    genericName: "daptomycin",
    category: "Antibacterial",
    drugClass: "Lipopeptide",
    target: "Cell membrane",
    description:
      "Bactericidal IV lipopeptide for MRSA bacteremia and VRE. Inactivated by pulmonary surfactant — not for pneumonia.",
  },
  {
    slug: "linezolid",
    name: "Linezolid",
    genericName: "linezolid",
    category: "Antibacterial",
    drugClass: "Oxazolidinone",
    target: "Ribosome 50S",
    description:
      "Oral and IV oxazolidinone with excellent activity against MRSA, VRE, and MDR-TB. Risk of thrombocytopenia and serotonin syndrome on prolonged therapy.",
  },
  {
    slug: "azithromycin",
    name: "Azithromycin",
    genericName: "azithromycin",
    category: "Antibacterial",
    drugClass: "Macrolide",
    target: "Ribosome 50S",
    description:
      "Long-half-life macrolide for atypical pneumonia (Mycoplasma, Chlamydia, Legionella), pertussis, and uncomplicated gonorrhea adjunct.",
  },
  {
    slug: "clarithromycin",
    name: "Clarithromycin",
    genericName: "clarithromycin",
    category: "Antibacterial",
    drugClass: "Macrolide",
    target: "Ribosome 50S",
    description:
      "Macrolide with notable activity against H. pylori (triple therapy) and Mycobacterium avium complex.",
  },
  {
    slug: "clindamycin",
    name: "Clindamycin",
    genericName: "clindamycin",
    category: "Antibacterial",
    drugClass: "Lincosamide",
    target: "Ribosome 50S",
    description:
      "Anti-anaerobic above-the-diaphragm and toxin-suppressing in necrotizing strep/Staph infections. Notorious for triggering C. difficile colitis.",
  },
  {
    slug: "doxycycline",
    name: "Doxycycline",
    genericName: "doxycycline",
    category: "Antibacterial",
    drugClass: "Tetracycline",
    target: "Ribosome 30S",
    description:
      "Oral tetracycline with broad coverage: atypicals (Chlamydia, Mycoplasma), Rickettsia, Borrelia, MRSA skin infections, and acne.",
  },
  {
    slug: "tetracycline",
    name: "Tetracycline",
    genericName: "tetracycline",
    category: "Antibacterial",
    drugClass: "Tetracycline",
    target: "Ribosome 30S",
    description:
      "First-generation tetracycline used in H. pylori quadruple therapy and select rickettsial infections. Largely replaced by doxycycline.",
  },
  {
    slug: "tigecycline",
    name: "Tigecycline",
    genericName: "tigecycline",
    category: "Antibacterial",
    drugClass: "Glycylcycline",
    target: "Ribosome 30S",
    description:
      "Tetracycline analog active against MDR Acinetobacter, ESBL Enterobacterales, and Stenotrophomonas. No Pseudomonas or Proteus activity.",
  },
  {
    slug: "gentamicin",
    name: "Gentamicin",
    genericName: "gentamicin",
    category: "Antibacterial",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "IV aminoglycoside used as synergy for enterococcal endocarditis and empiric Gram-negative sepsis. Nephro- and oto-toxicity limit prolonged use.",
  },
  {
    slug: "streptomycin",
    name: "Streptomycin",
    genericName: "streptomycin",
    category: "Antibacterial",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "Historic aminoglycoside still used for tularemia, plague, and select MDR-TB regimens.",
  },
  {
    slug: "ciprofloxacin",
    name: "Ciprofloxacin",
    genericName: "ciprofloxacin",
    category: "Antibacterial",
    drugClass: "Fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Best Gram-negative fluoroquinolone with anti-Pseudomonal activity. Used for pyelonephritis, traveler's diarrhea, and inhalational anthrax prophylaxis.",
  },
  {
    slug: "levofloxacin",
    name: "Levofloxacin",
    genericName: "levofloxacin",
    category: "Antibacterial",
    drugClass: "Respiratory fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Respiratory fluoroquinolone covering S. pneumoniae and atypicals. First-line for community-acquired and aspiration pneumonia in beta-lactam allergy.",
  },
  {
    slug: "tmp-smx",
    name: "TMP–SMX",
    genericName: "trimethoprim–sulfamethoxazole",
    category: "Antibacterial",
    drugClass: "Folate antagonist",
    target: "Folate synthesis",
    description:
      "Bactrim. Broad-spectrum oral folate inhibitor — uncomplicated UTI, MRSA skin, Stenotrophomonas, Nocardia, and Pneumocystis prophylaxis and treatment.",
  },
  {
    slug: "metronidazole",
    name: "Metronidazole",
    genericName: "metronidazole",
    category: "Antibacterial",
    drugClass: "Nitroimidazole",
    target: "DNA damage",
    description:
      "Selectively activated under anaerobic conditions. Treats below-the-diaphragm anaerobes, C. difficile colitis (mild), and protozoa (Giardia, Trichomonas, Entamoeba).",
  },
  {
    slug: "rifampin",
    name: "Rifampin",
    genericName: "rifampicin",
    category: "Antibacterial",
    drugClass: "Rifamycin",
    target: "RNA polymerase",
    description:
      "Cornerstone of TB therapy; meningococcal prophylaxis; biofilm-active for prosthetic-joint Staph infections. Powerful CYP450 inducer.",
  },
  {
    slug: "isoniazid",
    name: "Isoniazid",
    genericName: "isoniazid",
    category: "Antibacterial",
    drugClass: "Antimycobacterial",
    target: "Mycolic acid synthesis",
    description:
      "Bactericidal anti-TB drug activated by mycobacterial KatG. Latent TB monotherapy; pair with pyridoxine to prevent peripheral neuropathy.",
  },
  {
    slug: "pyrazinamide",
    name: "Pyrazinamide",
    genericName: "pyrazinamide",
    category: "Antibacterial",
    drugClass: "Antimycobacterial",
    target: "Membrane / fatty acid synthesis",
    description:
      "Sterilizing anti-TB drug active in acidic phagolysosomes. Allows the standard 6-month regimen; causes hyperuricemia and hepatotoxicity.",
  },
  {
    slug: "ethambutol",
    name: "Ethambutol",
    genericName: "ethambutol",
    category: "Antibacterial",
    drugClass: "Antimycobacterial",
    target: "Arabinogalactan synthesis",
    description:
      "Bacteriostatic anti-TB drug added to prevent rifampin resistance. Dose-dependent optic neuritis — monitor color vision.",
  },
  {
    slug: "colistin",
    name: "Colistin",
    genericName: "colistimethate sodium",
    category: "Antibacterial",
    drugClass: "Polymyxin",
    target: "Outer membrane (LPS)",
    description:
      "Last-line cationic peptide for carbapenem-resistant Gram-negatives (CRE, Acinetobacter, Pseudomonas). Significant nephrotoxicity.",
  },
  {
    slug: "fidaxomicin",
    name: "Fidaxomicin",
    genericName: "fidaxomicin",
    category: "Antibacterial",
    drugClass: "Macrocyclic",
    target: "RNA polymerase",
    description:
      "Minimally absorbed oral antibiotic targeting C. difficile with low collateral damage to the microbiome and lower recurrence than vancomycin.",
  },

  // ----- Antivirals -----
  {
    slug: "acyclovir",
    name: "Acyclovir",
    genericName: "acyclovir",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "Activated by viral thymidine kinase to chain-terminate HSV and VZV DNA polymerase. Standard for genital herpes, encephalitis, and zoster.",
  },
  {
    slug: "valacyclovir",
    name: "Valacyclovir",
    genericName: "valacyclovir",
    category: "Antiviral",
    drugClass: "Nucleoside analog (prodrug)",
    target: "Viral DNA polymerase",
    description:
      "Oral prodrug of acyclovir with much better bioavailability. Convenient outpatient therapy and suppression for HSV and VZV.",
  },
  {
    slug: "ganciclovir",
    name: "Ganciclovir",
    genericName: "ganciclovir",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "Anti-CMV nucleoside activated by viral UL97 kinase. IV (or oral valganciclovir) for CMV retinitis, colitis, and transplant prophylaxis.",
  },
  {
    slug: "letermovir",
    name: "Letermovir",
    genericName: "letermovir",
    category: "Antiviral",
    drugClass: "Terminase inhibitor",
    target: "Viral terminase complex",
    description:
      "Prophylaxis for CMV reactivation in stem-cell transplant. Different mechanism than nucleoside analogs, with no myelotoxicity.",
  },
  {
    slug: "oseltamivir",
    name: "Oseltamivir",
    genericName: "oseltamivir",
    category: "Antiviral",
    drugClass: "Neuraminidase inhibitor",
    target: "Viral neuraminidase",
    description:
      "Tamiflu. Oral neuraminidase inhibitor reducing influenza A/B duration and complications when started within 48 hours.",
  },
  {
    slug: "zanamivir",
    name: "Zanamivir",
    genericName: "zanamivir",
    category: "Antiviral",
    drugClass: "Neuraminidase inhibitor",
    target: "Viral neuraminidase",
    description:
      "Inhaled neuraminidase inhibitor for influenza A/B. Avoid in reactive airway disease due to bronchospasm risk.",
  },
  {
    slug: "baloxavir",
    name: "Baloxavir",
    genericName: "baloxavir marboxil",
    category: "Antiviral",
    drugClass: "Cap-dependent endonuclease inhibitor",
    target: "Polymerase acidic (PA) endonuclease",
    description:
      "Single-dose oral anti-influenza agent that blocks cap-snatching. Active against oseltamivir-resistant strains.",
  },
  {
    slug: "remdesivir",
    name: "Remdesivir",
    genericName: "remdesivir",
    category: "Antiviral",
    drugClass: "Nucleotide analog",
    target: "RNA-dependent RNA polymerase",
    description:
      "IV adenosine analog that chain-terminates SARS-CoV-2 and other RNA virus polymerases. Used in hospitalized COVID-19 and Ebola.",
  },
  {
    slug: "nirmatrelvir-ritonavir",
    name: "Nirmatrelvir–ritonavir",
    genericName: "nirmatrelvir + ritonavir",
    category: "Antiviral",
    drugClass: "Main protease inhibitor",
    target: "SARS-CoV-2 3CL protease",
    description:
      "Paxlovid. Oral 5-day regimen for high-risk outpatient COVID-19. Ritonavir is a CYP3A4 booster causing many drug interactions.",
  },
  {
    slug: "tenofovir",
    name: "Tenofovir",
    genericName: "tenofovir",
    category: "Antiviral",
    drugClass: "NRTI",
    target: "Reverse transcriptase",
    description:
      "Nucleotide reverse-transcriptase inhibitor active against HIV-1 and HBV. Backbone of most modern HIV regimens; TAF is gentler on kidneys/bones.",
  },
  {
    slug: "emtricitabine",
    name: "Emtricitabine",
    genericName: "emtricitabine",
    category: "Antiviral",
    drugClass: "NRTI",
    target: "Reverse transcriptase",
    description:
      "Cytidine analog NRTI co-formulated with tenofovir as the backbone of most HIV regimens and PrEP.",
  },
  {
    slug: "lamivudine",
    name: "Lamivudine",
    genericName: "lamivudine",
    category: "Antiviral",
    drugClass: "NRTI",
    target: "Reverse transcriptase",
    description:
      "Cytidine analog NRTI used for HIV and HBV. Generally well tolerated; HBV resistance develops with monotherapy.",
  },
  {
    slug: "dolutegravir",
    name: "Dolutegravir",
    genericName: "dolutegravir",
    category: "Antiviral",
    drugClass: "Integrase inhibitor",
    target: "HIV integrase",
    description:
      "Potent INSTI with a high barrier to resistance. Anchor agent in modern HIV first-line regimens.",
  },
  {
    slug: "bictegravir",
    name: "Bictegravir",
    genericName: "bictegravir",
    category: "Antiviral",
    drugClass: "Integrase inhibitor",
    target: "HIV integrase",
    description:
      "INSTI co-formulated with tenofovir alafenamide and emtricitabine as a single-tablet HIV regimen.",
  },
  {
    slug: "sofosbuvir",
    name: "Sofosbuvir",
    genericName: "sofosbuvir",
    category: "Antiviral",
    drugClass: "NS5B polymerase inhibitor",
    target: "HCV NS5B polymerase",
    description:
      "Pan-genotypic anti-HCV nucleotide analog. Backbone of curative direct-acting antiviral regimens.",
  },
  {
    slug: "glecaprevir-pibrentasvir",
    name: "Glecaprevir–pibrentasvir",
    genericName: "glecaprevir + pibrentasvir",
    category: "Antiviral",
    drugClass: "NS3/4A + NS5A inhibitors",
    target: "HCV NS3/4A protease + NS5A",
    description:
      "Mavyret. Short, pan-genotypic oral HCV cure regimen; effective even in patients with prior treatment failure.",
  },
  {
    slug: "entecavir",
    name: "Entecavir",
    genericName: "entecavir",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "HBV reverse transcriptase",
    description:
      "High-barrier nucleoside analog for chronic HBV. Suppresses HBV DNA effectively in treatment-naive patients.",
  },

  // ----- Antifungals -----
  {
    slug: "amphotericin-b",
    name: "Amphotericin B",
    genericName: "amphotericin B (liposomal)",
    category: "Antifungal",
    drugClass: "Polyene",
    target: "Ergosterol",
    description:
      "Broadest-spectrum antifungal binding ergosterol to form membrane pores. Workhorse for severe Cryptococcus, mucormycosis, and visceral leishmaniasis.",
  },
  {
    slug: "fluconazole",
    name: "Fluconazole",
    genericName: "fluconazole",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis (14-α demethylase)",
    description:
      "Oral and IV triazole with excellent CNS penetration. Treats susceptible Candida, cryptococcal meningitis consolidation, and coccidioidomycosis.",
  },
  {
    slug: "itraconazole",
    name: "Itraconazole",
    genericName: "itraconazole",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis",
    description:
      "Triazole of choice for blastomycosis, histoplasmosis, and sporotrichosis. Variable absorption; many drug interactions.",
  },
  {
    slug: "voriconazole",
    name: "Voriconazole",
    genericName: "voriconazole",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis",
    description:
      "Broad triazole and first-line for invasive aspergillosis. Visual disturbance and CYP-mediated interactions are common.",
  },
  {
    slug: "posaconazole",
    name: "Posaconazole",
    genericName: "posaconazole",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis",
    description:
      "Broad triazole with activity against Mucorales. Prophylaxis in neutropenic and stem-cell-transplant patients.",
  },
  {
    slug: "isavuconazole",
    name: "Isavuconazole",
    genericName: "isavuconazonium sulfate",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis",
    description:
      "Newer triazole with predictable pharmacokinetics. Approved for invasive aspergillosis and mucormycosis.",
  },
  {
    slug: "caspofungin",
    name: "Caspofungin",
    genericName: "caspofungin",
    category: "Antifungal",
    drugClass: "Echinocandin",
    target: "β-1,3-glucan synthase",
    description:
      "IV echinocandin and first-line for invasive candidiasis. Inactive against Cryptococcus and most molds outside Aspergillus.",
  },
  {
    slug: "micafungin",
    name: "Micafungin",
    genericName: "micafungin",
    category: "Antifungal",
    drugClass: "Echinocandin",
    target: "β-1,3-glucan synthase",
    description:
      "Once-daily IV echinocandin for invasive Candida and prophylaxis in stem-cell transplant recipients.",
  },
  {
    slug: "terbinafine",
    name: "Terbinafine",
    genericName: "terbinafine",
    category: "Antifungal",
    drugClass: "Allylamine",
    target: "Squalene epoxidase",
    description:
      "Concentrates in keratin. Oral first-line for dermatophyte onychomycosis; topical for tinea pedis and corporis.",
  },
  {
    slug: "griseofulvin",
    name: "Griseofulvin",
    genericName: "griseofulvin",
    category: "Antifungal",
    drugClass: "Antimitotic",
    target: "Microtubules",
    description:
      "Older fungistatic agent that deposits in keratin. Still used for tinea capitis in children, especially Microsporum infections.",
  },
  {
    slug: "flucytosine",
    name: "Flucytosine",
    genericName: "5-flucytosine (5-FC)",
    category: "Antifungal",
    drugClass: "Pyrimidine analog",
    target: "DNA / RNA synthesis",
    description:
      "Adjunct to amphotericin B for cryptococcal meningitis induction. Monotherapy selects rapid resistance; monitor for marrow suppression.",
  },

  // ----- Antiparasitics -----
  {
    slug: "chloroquine",
    name: "Chloroquine",
    genericName: "chloroquine",
    category: "Antiparasitic",
    drugClass: "4-aminoquinoline",
    target: "Heme detoxification",
    description:
      "Traditional anti-malarial for chloroquine-sensitive P. vivax/ovale/malariae/knowlesi. Widespread P. falciparum resistance.",
  },
  {
    slug: "mefloquine",
    name: "Mefloquine",
    genericName: "mefloquine",
    category: "Antiparasitic",
    drugClass: "Quinoline",
    target: "Heme detoxification",
    description:
      "Weekly anti-malarial prophylaxis and treatment for chloroquine-resistant P. falciparum. Neuropsychiatric adverse effects limit use.",
  },
  {
    slug: "atovaquone-proguanil",
    name: "Atovaquone–proguanil",
    genericName: "atovaquone + proguanil",
    category: "Antiparasitic",
    drugClass: "Naphthoquinone + biguanide",
    target: "Cytochrome b / folate",
    description:
      "Malarone. Daily prophylaxis and treatment for chloroquine-resistant P. falciparum. Atovaquone alone is also active against Pneumocystis.",
  },
  {
    slug: "artemether-lumefantrine",
    name: "Artemether–lumefantrine",
    genericName: "artemether + lumefantrine",
    category: "Antiparasitic",
    drugClass: "Artemisinin combination therapy",
    target: "Heme / parasite membrane",
    description:
      "WHO-recommended ACT for uncomplicated P. falciparum malaria. Artemisinin rapidly clears parasites; the partner clears residual infection.",
  },
  {
    slug: "primaquine",
    name: "Primaquine",
    genericName: "primaquine",
    category: "Antiparasitic",
    drugClass: "8-aminoquinoline",
    target: "Hepatic hypnozoites",
    description:
      "Eradicates dormant P. vivax and P. ovale hypnozoites to prevent relapse. Check G6PD before use to avoid hemolysis.",
  },
  {
    slug: "albendazole",
    name: "Albendazole",
    genericName: "albendazole",
    category: "Antiparasitic",
    drugClass: "Benzimidazole",
    target: "β-tubulin",
    description:
      "Broad anti-helminthic for soil-transmitted nematodes, neurocysticercosis, hydatid disease, and microsporidia.",
  },
  {
    slug: "mebendazole",
    name: "Mebendazole",
    genericName: "mebendazole",
    category: "Antiparasitic",
    drugClass: "Benzimidazole",
    target: "β-tubulin",
    description:
      "Oral anti-helminthic; classic first-line for pinworm, whipworm, hookworm, and ascariasis.",
  },
  {
    slug: "ivermectin",
    name: "Ivermectin",
    genericName: "ivermectin",
    category: "Antiparasitic",
    drugClass: "Macrocyclic lactone",
    target: "Glutamate-gated chloride channels",
    description:
      "Treats strongyloidiasis, onchocerciasis, lymphatic filariasis, scabies, and head lice. Single oral dose for most indications.",
  },
  {
    slug: "praziquantel",
    name: "Praziquantel",
    genericName: "praziquantel",
    category: "Antiparasitic",
    drugClass: "Pyrazinoisoquinoline",
    target: "Tegument calcium channels",
    description:
      "Drug of choice for trematode (schistosomes, flukes) and cestode (tapeworm) infections.",
  },
  {
    slug: "nitazoxanide",
    name: "Nitazoxanide",
    genericName: "nitazoxanide",
    category: "Antiparasitic",
    drugClass: "Thiazolide",
    target: "Pyruvate–ferredoxin oxidoreductase",
    description:
      "Broad antiprotozoal active against Giardia, Cryptosporidium, and intestinal helminths.",
  },
  {
    slug: "tinidazole",
    name: "Tinidazole",
    genericName: "tinidazole",
    category: "Antiparasitic",
    drugClass: "Nitroimidazole",
    target: "DNA damage",
    description:
      "Single-dose alternative to metronidazole for trichomoniasis, giardiasis, and amoebiasis with fewer GI side effects.",
  },
  {
    slug: "paromomycin",
    name: "Paromomycin",
    genericName: "paromomycin",
    category: "Antiparasitic",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "Non-absorbed luminal aminoglycoside used for intestinal Entamoeba histolytica eradication after metronidazole and for visceral leishmaniasis.",
  },
  {
    slug: "pyrimethamine-sulfadiazine",
    name: "Pyrimethamine + sulfadiazine",
    genericName: "pyrimethamine + sulfadiazine + leucovorin",
    category: "Antiparasitic",
    drugClass: "Folate antagonist combo",
    target: "Folate synthesis",
    description:
      "Standard regimen for toxoplasmic encephalitis and congenital toxoplasmosis. Add leucovorin to avoid bone-marrow suppression.",
  },
  {
    slug: "miltefosine",
    name: "Miltefosine",
    genericName: "miltefosine",
    category: "Antiparasitic",
    drugClass: "Alkylphosphocholine",
    target: "Membrane / lipid metabolism",
    description:
      "Oral agent for visceral and mucocutaneous leishmaniasis and free-living amoeba (Naegleria, Balamuthia).",
  },
  {
    slug: "benznidazole",
    name: "Benznidazole",
    genericName: "benznidazole",
    category: "Antiparasitic",
    drugClass: "Nitroimidazole",
    target: "DNA / reactive metabolites",
    description:
      "First-line for acute and chronic Chagas disease (T. cruzi). Frequent GI and dermatologic adverse effects.",
  },
  {
    slug: "nifurtimox",
    name: "Nifurtimox",
    genericName: "nifurtimox",
    category: "Antiparasitic",
    drugClass: "Nitrofuran",
    target: "Reactive oxygen species",
    description:
      "Alternative to benznidazole for Chagas disease and combination therapy for African trypanosomiasis (sleeping sickness).",
  },
  {
    slug: "permethrin",
    name: "Permethrin",
    genericName: "permethrin (5% cream)",
    category: "Antiparasitic",
    drugClass: "Pyrethroid",
    target: "Sodium channels",
    description:
      "Topical insecticide of choice for scabies and head lice. Safe for use in infants ≥2 months.",
  },
  {
    slug: "pentamidine",
    name: "Pentamidine",
    genericName: "pentamidine isethionate",
    category: "Antiparasitic",
    drugClass: "Aromatic diamidine",
    target: "DNA / membrane",
    description:
      "Second-line for Pneumocystis pneumonia (inhaled prophylaxis or IV treatment), African trypanosomiasis, and visceral leishmaniasis.",
  },

  // ----- More Antibacterials -----
  {
    slug: "penicillin-v",
    name: "Penicillin V",
    genericName: "phenoxymethylpenicillin",
    category: "Antibacterial",
    drugClass: "Penicillin",
    target: "Cell wall",
    description:
      "Oral acid-stable penicillin. Mainstay for strep pharyngitis and rheumatic-fever prophylaxis.",
  },
  {
    slug: "dicloxacillin",
    name: "Dicloxacillin",
    genericName: "dicloxacillin",
    category: "Antibacterial",
    drugClass: "Antistaphylococcal penicillin",
    target: "Cell wall",
    description:
      "Oral beta-lactamase-stable penicillin for MSSA skin infections and step-down therapy from IV nafcillin.",
  },
  {
    slug: "cefoxitin",
    name: "Cefoxitin",
    genericName: "cefoxitin",
    category: "Antibacterial",
    drugClass: "Cephamycin",
    target: "Cell wall",
    description:
      "Second-generation cephamycin with anaerobic coverage (Bacteroides). Used for surgical prophylaxis and intra-abdominal infections.",
  },
  {
    slug: "aztreonam",
    name: "Aztreonam",
    genericName: "aztreonam",
    category: "Antibacterial",
    drugClass: "Monobactam",
    target: "Cell wall",
    description:
      "Only marketed monobactam. Gram-negative-only (including Pseudomonas); safe alternative for severe penicillin allergy.",
  },
  {
    slug: "imipenem-cilastatin",
    name: "Imipenem–cilastatin",
    genericName: "imipenem + cilastatin",
    category: "Antibacterial",
    drugClass: "Carbapenem",
    target: "Cell wall",
    description:
      "Broad carbapenem paired with cilastatin to block renal dehydropeptidase inactivation. Lower seizure threshold than meropenem.",
  },
  {
    slug: "ceftazidime-avibactam",
    name: "Ceftazidime–avibactam",
    genericName: "ceftazidime + avibactam",
    category: "Antibacterial",
    drugClass: "Cephalosporin + BL inhibitor",
    target: "Cell wall",
    description:
      "Salvage agent for KPC-producing carbapenem-resistant Enterobacterales and MDR Pseudomonas. Avibactam restores activity against many serine carbapenemases.",
  },
  {
    slug: "dalbavancin",
    name: "Dalbavancin",
    genericName: "dalbavancin",
    category: "Antibacterial",
    drugClass: "Lipoglycopeptide",
    target: "Cell wall (D-Ala-D-Ala)",
    description:
      "Long-half-life IV glycopeptide given once or twice over 1–2 weeks. Used for skin/soft-tissue infections and outpatient endocarditis bridges.",
  },
  {
    slug: "tedizolid",
    name: "Tedizolid",
    genericName: "tedizolid phosphate",
    category: "Antibacterial",
    drugClass: "Oxazolidinone",
    target: "Ribosome 50S",
    description:
      "Once-daily oxazolidinone with anti-MRSA activity, shorter therapy than linezolid, and less myelosuppression.",
  },
  {
    slug: "minocycline",
    name: "Minocycline",
    genericName: "minocycline",
    category: "Antibacterial",
    drugClass: "Tetracycline",
    target: "Ribosome 30S",
    description:
      "Lipophilic tetracycline with good CNS penetration. Used for MRSA skin infections, Stenotrophomonas, and Acinetobacter.",
  },
  {
    slug: "erythromycin",
    name: "Erythromycin",
    genericName: "erythromycin",
    category: "Antibacterial",
    drugClass: "Macrolide",
    target: "Ribosome 50S",
    description:
      "Original macrolide. Now mostly used as a prokinetic agent or for pertussis in patients who cannot take azithromycin.",
  },
  {
    slug: "tobramycin",
    name: "Tobramycin",
    genericName: "tobramycin",
    category: "Antibacterial",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "Aminoglycoside with slightly better Pseudomonas activity than gentamicin. Inhaled form is cornerstone of CF pulmonary care.",
  },
  {
    slug: "amikacin",
    name: "Amikacin",
    genericName: "amikacin",
    category: "Antibacterial",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "Amino-modified aminoglycoside that evades most aminoglycoside-modifying enzymes. Used for MDR Gram-negatives and non-TB mycobacteria.",
  },
  {
    slug: "moxifloxacin",
    name: "Moxifloxacin",
    genericName: "moxifloxacin",
    category: "Antibacterial",
    drugClass: "Respiratory fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Once-daily respiratory fluoroquinolone with anaerobic activity and a role in second-line tuberculosis. Avoid in UTI (no urinary excretion).",
  },
  {
    slug: "nitrofurantoin",
    name: "Nitrofurantoin",
    genericName: "nitrofurantoin",
    category: "Antibacterial",
    drugClass: "Nitrofuran",
    target: "Multiple bacterial enzymes",
    description:
      "Oral agent concentrated in urine. First-line for uncomplicated cystitis; not for pyelonephritis or CrCl below 30.",
  },
  {
    slug: "fosfomycin",
    name: "Fosfomycin",
    genericName: "fosfomycin trometamol",
    category: "Antibacterial",
    drugClass: "Epoxide",
    target: "MurA / cell wall",
    description:
      "Single oral dose for uncomplicated cystitis, including some MDR Enterobacterales. IV formulation in some countries.",
  },
  {
    slug: "mupirocin",
    name: "Mupirocin",
    genericName: "mupirocin",
    category: "Antibacterial",
    drugClass: "Topical antibiotic",
    target: "Isoleucyl-tRNA synthetase",
    description:
      "Topical agent for impetigo and intranasal MRSA decolonization before high-risk surgery.",
  },
  {
    slug: "chloramphenicol",
    name: "Chloramphenicol",
    genericName: "chloramphenicol",
    category: "Antibacterial",
    drugClass: "Phenicol",
    target: "Ribosome 50S",
    description:
      "Broad ribosomal inhibitor with CNS penetration. Rarely used due to aplastic anemia; reserved for resistant typhoid and meningitis in low-resource settings.",
  },
  {
    slug: "dapsone",
    name: "Dapsone",
    genericName: "dapsone",
    category: "Antibacterial",
    drugClass: "Sulfone",
    target: "Folate synthesis",
    description:
      "Component of multidrug therapy for leprosy and an alternative for Pneumocystis prophylaxis. Risk of hemolysis in G6PD deficiency.",
  },
  {
    slug: "clofazimine",
    name: "Clofazimine",
    genericName: "clofazimine",
    category: "Antibacterial",
    drugClass: "Riminophenazine",
    target: "Outer membrane / respiratory chain",
    description:
      "Red-pigmented agent for leprosy and MDR-TB. Long half-life; pinkish skin discoloration is common.",
  },
  {
    slug: "bedaquiline",
    name: "Bedaquiline",
    genericName: "bedaquiline",
    category: "Antibacterial",
    drugClass: "Diarylquinoline",
    target: "Mycobacterial ATP synthase",
    description:
      "Anchor agent for multidrug-resistant tuberculosis. Prolongs QT and has hepatic side effects.",
  },

  // ----- More Antivirals -----
  {
    slug: "famciclovir",
    name: "Famciclovir",
    genericName: "famciclovir",
    category: "Antiviral",
    drugClass: "Nucleoside analog (prodrug)",
    target: "Viral DNA polymerase",
    description:
      "Oral prodrug of penciclovir for HSV and VZV. Comparable efficacy to acyclovir/valacyclovir.",
  },
  {
    slug: "foscarnet",
    name: "Foscarnet",
    genericName: "foscarnet sodium",
    category: "Antiviral",
    drugClass: "Pyrophosphate analog",
    target: "Viral DNA polymerase",
    description:
      "IV non-nucleoside polymerase inhibitor for acyclovir-resistant HSV and ganciclovir-resistant CMV. Nephrotoxic and dyselectrolytemic.",
  },
  {
    slug: "cidofovir",
    name: "Cidofovir",
    genericName: "cidofovir",
    category: "Antiviral",
    drugClass: "Nucleotide analog",
    target: "Viral DNA polymerase",
    description:
      "Broad anti-DNA-virus agent (CMV, BK, JC, adenovirus, poxviruses). Significant nephrotoxicity; given with probenecid.",
  },
  {
    slug: "tecovirimat",
    name: "Tecovirimat",
    genericName: "tecovirimat",
    category: "Antiviral",
    drugClass: "Egress inhibitor",
    target: "Poxvirus VP37",
    description:
      "TPOXX. Oral agent that blocks orthopoxvirus envelope assembly. Used for smallpox/mpox under emergency-use protocols.",
  },
  {
    slug: "ribavirin",
    name: "Ribavirin",
    genericName: "ribavirin",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Multiple (IMPDH, polymerase)",
    description:
      "Broad antiviral used for hepatitis C combos, RSV in select infants, and viral hemorrhagic fevers (Lassa, hantavirus).",
  },
  {
    slug: "peramivir",
    name: "Peramivir",
    genericName: "peramivir",
    category: "Antiviral",
    drugClass: "Neuraminidase inhibitor",
    target: "Viral neuraminidase",
    description:
      "Single-dose IV neuraminidase inhibitor for influenza in patients who cannot tolerate oral oseltamivir.",
  },
  {
    slug: "raltegravir",
    name: "Raltegravir",
    genericName: "raltegravir",
    category: "Antiviral",
    drugClass: "Integrase inhibitor",
    target: "HIV integrase",
    description:
      "First-in-class INSTI. Used in HIV salvage regimens and as part of post-exposure prophylaxis cocktails.",
  },
  {
    slug: "efavirenz",
    name: "Efavirenz",
    genericName: "efavirenz",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "Once-daily NNRTI historically used in HIV first-line therapy. CNS side effects and resistance limit modern use.",
  },
  {
    slug: "nevirapine",
    name: "Nevirapine",
    genericName: "nevirapine",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "NNRTI most notable for single-dose prevention of mother-to-child HIV transmission in resource-limited settings.",
  },
  {
    slug: "darunavir",
    name: "Darunavir",
    genericName: "darunavir",
    category: "Antiviral",
    drugClass: "Protease inhibitor",
    target: "HIV protease",
    description:
      "Boosted protease inhibitor (with cobicistat or ritonavir) with a high barrier to resistance. Useful in salvage regimens.",
  },
  {
    slug: "zidovudine",
    name: "Zidovudine",
    genericName: "zidovudine (AZT)",
    category: "Antiviral",
    drugClass: "NRTI",
    target: "Reverse transcriptase",
    description:
      "First approved antiretroviral. Now mainly used to prevent perinatal HIV transmission; macrocytic anemia is a hallmark adverse effect.",
  },
  {
    slug: "molnupiravir",
    name: "Molnupiravir",
    genericName: "molnupiravir",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral RNA polymerase",
    description:
      "Oral 5-day regimen for COVID-19. Induces lethal mutagenesis in SARS-CoV-2; reserved for patients who cannot take Paxlovid.",
  },
  {
    slug: "sofosbuvir-velpatasvir",
    name: "Sofosbuvir–velpatasvir",
    genericName: "sofosbuvir + velpatasvir",
    category: "Antiviral",
    drugClass: "NS5B + NS5A inhibitors",
    target: "HCV NS5B + NS5A",
    description:
      "Epclusa. Once-daily pan-genotypic single-tablet cure for chronic hepatitis C, including compensated cirrhosis.",
  },

  // ----- More Antifungals -----
  {
    slug: "nystatin",
    name: "Nystatin",
    genericName: "nystatin",
    category: "Antifungal",
    drugClass: "Polyene",
    target: "Ergosterol",
    description:
      "Topical/oral non-absorbed polyene for oral thrush and cutaneous Candida. Not for systemic disease.",
  },
  {
    slug: "anidulafungin",
    name: "Anidulafungin",
    genericName: "anidulafungin",
    category: "Antifungal",
    drugClass: "Echinocandin",
    target: "β-1,3-glucan synthase",
    description:
      "IV echinocandin metabolized non-enzymatically — minimal hepatic or renal dose adjustment. Treats invasive candidiasis.",
  },
  {
    slug: "ketoconazole",
    name: "Ketoconazole",
    genericName: "ketoconazole",
    category: "Antifungal",
    drugClass: "Imidazole",
    target: "Ergosterol synthesis",
    description:
      "Older azole now used topically (shampoo, cream) for seborrheic dermatitis and tinea versicolor. Oral form discouraged due to hepatotoxicity.",
  },
  {
    slug: "ibrexafungerp",
    name: "Ibrexafungerp",
    genericName: "ibrexafungerp",
    category: "Antifungal",
    drugClass: "Triterpenoid",
    target: "β-1,3-glucan synthase",
    description:
      "First oral glucan-synthase inhibitor. Approved for vulvovaginal candidiasis, with activity against fluconazole-resistant Candida.",
  },
  {
    slug: "ciclopirox",
    name: "Ciclopirox",
    genericName: "ciclopirox olamine",
    category: "Antifungal",
    drugClass: "Hydroxypyridone",
    target: "Iron-dependent enzymes",
    description:
      "Broad topical antifungal used as nail lacquer for onychomycosis and cream for tinea and seborrheic dermatitis.",
  },
  {
    slug: "rezafungin",
    name: "Rezafungin",
    genericName: "rezafungin",
    category: "Antifungal",
    drugClass: "Echinocandin",
    target: "β-1,3-glucan synthase",
    description:
      "Long-half-life echinocandin dosed once weekly for invasive candidiasis. Convenient outpatient parenteral therapy.",
  },

  // ----- More Antiparasitics -----
  {
    slug: "quinine",
    name: "Quinine",
    genericName: "quinine sulfate",
    category: "Antiparasitic",
    drugClass: "Quinoline",
    target: "Heme detoxification",
    description:
      "Oral antimalarial used with doxycycline or clindamycin for chloroquine-resistant P. falciparum. Cinchonism is common.",
  },
  {
    slug: "hydroxychloroquine",
    name: "Hydroxychloroquine",
    genericName: "hydroxychloroquine",
    category: "Antiparasitic",
    drugClass: "4-aminoquinoline",
    target: "Heme detoxification",
    description:
      "Better-tolerated chloroquine analog for sensitive malaria and amebic liver abscess; widely used off-label for rheumatologic disease.",
  },
  {
    slug: "pyrantel-pamoate",
    name: "Pyrantel pamoate",
    genericName: "pyrantel pamoate",
    category: "Antiparasitic",
    drugClass: "Tetrahydropyrimidine",
    target: "Neuromuscular blockade",
    description:
      "Over-the-counter single-dose oral agent for pinworm (Enterobius), ascariasis, and hookworm.",
  },
  {
    slug: "diethylcarbamazine",
    name: "Diethylcarbamazine",
    genericName: "diethylcarbamazine (DEC)",
    category: "Antiparasitic",
    drugClass: "Piperazine derivative",
    target: "Microfilarial cuticle",
    description:
      "First-line for Wuchereria, Brugia, and Loa loa filariasis. Avoid in heavy Loa or Onchocerca infection due to severe Mazzotti-like reactions.",
  },
  {
    slug: "eflornithine",
    name: "Eflornithine",
    genericName: "eflornithine",
    category: "Antiparasitic",
    drugClass: "Ornithine decarboxylase inhibitor",
    target: "Polyamine synthesis",
    description:
      "Treats CNS-stage West African trypanosomiasis (T. b. gambiense). Often combined with nifurtimox in NECT regimens.",
  },
  {
    slug: "sodium-stibogluconate",
    name: "Sodium stibogluconate",
    genericName: "sodium stibogluconate",
    category: "Antiparasitic",
    drugClass: "Pentavalent antimonial",
    target: "Trypanothione metabolism",
    description:
      "Pentavalent antimonial for cutaneous and visceral leishmaniasis. Cardiotoxic; resistance is widespread in the Indian subcontinent.",
  },
  {
    slug: "triclabendazole",
    name: "Triclabendazole",
    genericName: "triclabendazole",
    category: "Antiparasitic",
    drugClass: "Benzimidazole",
    target: "β-tubulin",
    description:
      "Drug of choice for liver fluke (Fasciola hepatica) and lung fluke (Paragonimus) infections.",
  },
  {
    slug: "spiramycin",
    name: "Spiramycin",
    genericName: "spiramycin",
    category: "Antiparasitic",
    drugClass: "Macrolide",
    target: "Ribosome 50S",
    description:
      "Used in first-trimester maternal Toxoplasma infection to reduce vertical transmission, before switching to pyrimethamine–sulfadiazine.",
  },
  {
    slug: "tafenoquine",
    name: "Tafenoquine",
    genericName: "tafenoquine",
    category: "Antiparasitic",
    drugClass: "8-aminoquinoline",
    target: "Hepatic hypnozoites",
    description:
      "Single-dose alternative to primaquine for radical cure of P. vivax and P. ovale relapse. Requires G6PD screening.",
  },
  {
    slug: "atovaquone",
    name: "Atovaquone",
    genericName: "atovaquone",
    category: "Antiparasitic",
    drugClass: "Naphthoquinone",
    target: "Cytochrome bc1",
    description:
      "Solo formulation used for Pneumocystis prophylaxis and mild PCP, and toxoplasmic encephalitis salvage.",
  },
  {
    slug: "malathion",
    name: "Malathion",
    genericName: "malathion",
    category: "Antiparasitic",
    drugClass: "Organophosphate",
    target: "Acetylcholinesterase",
    description:
      "Topical lotion for head lice, including permethrin-resistant strains. Flammable and malodorous.",
  },

  // ----- More Antibacterials -----
  {
    slug: "cephalexin",
    name: "Cephalexin",
    genericName: "cephalexin",
    category: "Antibacterial",
    drugClass: "1st-gen cephalosporin",
    target: "Cell wall",
    description:
      "Oral first-generation cephalosporin for MSSA and streptococcal skin infections and uncomplicated UTIs.",
  },
  {
    slug: "cefdinir",
    name: "Cefdinir",
    genericName: "cefdinir",
    category: "Antibacterial",
    drugClass: "3rd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Oral third-generation cephalosporin for otitis media, sinusitis, and community respiratory infections.",
  },
  {
    slug: "ceftolozane-tazobactam",
    name: "Ceftolozane–tazobactam",
    genericName: "ceftolozane + tazobactam",
    category: "Antibacterial",
    drugClass: "Cephalosporin + BL inhibitor",
    target: "Cell wall",
    description:
      "Anti-pseudomonal combination for MDR Pseudomonas and complicated intra-abdominal and urinary infections.",
  },
  {
    slug: "meropenem-vaborbactam",
    name: "Meropenem–vaborbactam",
    genericName: "meropenem + vaborbactam",
    category: "Antibacterial",
    drugClass: "Carbapenem + BL inhibitor",
    target: "Cell wall",
    description:
      "Carbapenem paired with a boronate inhibitor to restore activity against KPC-producing carbapenem-resistant Enterobacterales.",
  },
  {
    slug: "telavancin",
    name: "Telavancin",
    genericName: "telavancin",
    category: "Antibacterial",
    drugClass: "Lipoglycopeptide",
    target: "Cell wall + membrane",
    description:
      "Dual-mechanism lipoglycopeptide for MRSA skin infections and hospital-acquired pneumonia. Nephrotoxicity and QT prolongation limit use.",
  },
  {
    slug: "oritavancin",
    name: "Oritavancin",
    genericName: "oritavancin",
    category: "Antibacterial",
    drugClass: "Lipoglycopeptide",
    target: "Cell wall",
    description:
      "Single-dose long-acting lipoglycopeptide for acute bacterial skin infections caused by MRSA and streptococci.",
  },
  {
    slug: "quinupristin-dalfopristin",
    name: "Quinupristin–dalfopristin",
    genericName: "quinupristin + dalfopristin",
    category: "Antibacterial",
    drugClass: "Streptogramin",
    target: "Ribosome 50S",
    description:
      "IV streptogramin combination for vancomycin-resistant Enterococcus faecium and complicated MRSA infections.",
  },
  {
    slug: "fusidic-acid",
    name: "Fusidic acid",
    genericName: "fusidic acid",
    category: "Antibacterial",
    drugClass: "Fusidane",
    target: "Elongation factor G",
    description:
      "Anti-staphylococcal agent used topically for skin infections and orally (outside the US) for bone and joint MSSA infection.",
  },
  {
    slug: "rifaximin",
    name: "Rifaximin",
    genericName: "rifaximin",
    category: "Antibacterial",
    drugClass: "Rifamycin",
    target: "RNA polymerase",
    description:
      "Non-absorbed gut-selective rifamycin for traveler's diarrhea, hepatic encephalopathy, and IBS with diarrhea.",
  },
  {
    slug: "delafloxacin",
    name: "Delafloxacin",
    genericName: "delafloxacin",
    category: "Antibacterial",
    drugClass: "Fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Broad fluoroquinolone uniquely active against MRSA, used for acute skin infections and community pneumonia.",
  },
  {
    slug: "cefiderocol",
    name: "Cefiderocol",
    genericName: "cefiderocol",
    category: "Antibacterial",
    drugClass: "Siderophore cephalosporin",
    target: "Cell wall",
    description:
      "Trojan-horse cephalosporin smuggled in via iron transporters. Last-line for carbapenem-resistant Gram-negatives including metallo-β-lactamase producers.",
  },
  {
    slug: "trimethoprim",
    name: "Trimethoprim",
    genericName: "trimethoprim",
    category: "Antibacterial",
    drugClass: "Folate antagonist",
    target: "Dihydrofolate reductase",
    description:
      "Folate inhibitor used alone for uncomplicated cystitis where sulfa is contraindicated.",
  },

  // ----- More Antivirals -----
  {
    slug: "penciclovir",
    name: "Penciclovir",
    genericName: "penciclovir",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "Topical agent for recurrent herpes labialis (cold sores); the active form of oral famciclovir.",
  },
  {
    slug: "maraviroc",
    name: "Maraviroc",
    genericName: "maraviroc",
    category: "Antiviral",
    drugClass: "CCR5 antagonist",
    target: "Host CCR5 co-receptor",
    description:
      "Entry inhibitor that blocks CCR5-tropic HIV from binding its co-receptor. Requires a tropism assay before use.",
  },
  {
    slug: "enfuvirtide",
    name: "Enfuvirtide",
    genericName: "enfuvirtide",
    category: "Antiviral",
    drugClass: "Fusion inhibitor",
    target: "HIV gp41",
    description:
      "Injectable peptide that blocks HIV membrane fusion. Reserved for multidrug-resistant HIV salvage regimens.",
  },
  {
    slug: "cabotegravir",
    name: "Cabotegravir",
    genericName: "cabotegravir",
    category: "Antiviral",
    drugClass: "Integrase inhibitor",
    target: "HIV integrase",
    description:
      "Long-acting injectable INSTI for HIV treatment (with rilpivirine) and every-two-month pre-exposure prophylaxis.",
  },
  {
    slug: "rilpivirine",
    name: "Rilpivirine",
    genericName: "rilpivirine",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "Second-generation NNRTI in oral and long-acting injectable HIV regimens. Needs an acidic stomach for absorption.",
  },
  {
    slug: "ledipasvir-sofosbuvir",
    name: "Ledipasvir–sofosbuvir",
    genericName: "ledipasvir + sofosbuvir",
    category: "Antiviral",
    drugClass: "NS5A + NS5B inhibitors",
    target: "HCV NS5A + NS5B",
    description:
      "Harvoni. Once-daily single-tablet cure for hepatitis C genotype 1, including in cirrhosis.",
  },
  {
    slug: "adefovir",
    name: "Adefovir",
    genericName: "adefovir dipivoxil",
    category: "Antiviral",
    drugClass: "Nucleotide analog",
    target: "HBV reverse transcriptase",
    description:
      "Older nucleotide analog for chronic hepatitis B. Largely supplanted by tenofovir and entecavir due to nephrotoxicity and resistance.",
  },
  {
    slug: "brincidofovir",
    name: "Brincidofovir",
    genericName: "brincidofovir",
    category: "Antiviral",
    drugClass: "Nucleotide analog (lipid conjugate)",
    target: "Viral DNA polymerase",
    description:
      "Oral lipid-conjugated cidofovir with less nephrotoxicity. Stockpiled for smallpox and used for resistant DNA-virus infections.",
  },

  // ----- More Antifungals -----
  {
    slug: "miconazole",
    name: "Miconazole",
    genericName: "miconazole",
    category: "Antifungal",
    drugClass: "Imidazole",
    target: "Ergosterol synthesis",
    description:
      "Topical and oral-gel imidazole for cutaneous candidiasis, tinea, and oral thrush.",
  },
  {
    slug: "clotrimazole",
    name: "Clotrimazole",
    genericName: "clotrimazole",
    category: "Antifungal",
    drugClass: "Imidazole",
    target: "Ergosterol synthesis",
    description:
      "Over-the-counter topical and troche imidazole for vaginal candidiasis, tinea, and oral thrush.",
  },
  {
    slug: "tavaborole",
    name: "Tavaborole",
    genericName: "tavaborole",
    category: "Antifungal",
    drugClass: "Oxaborole",
    target: "Leucyl-tRNA synthetase",
    description:
      "Topical boron-based solution for toenail onychomycosis; penetrates the nail plate better than older lacquers.",
  },
  {
    slug: "fosmanogepix",
    name: "Fosmanogepix",
    genericName: "fosmanogepix",
    category: "Antifungal",
    drugClass: "Gwt1 inhibitor",
    target: "GPI-anchor biosynthesis",
    description:
      "Investigational broad-spectrum antifungal with a novel target, active against Candida, Aspergillus, and many resistant molds.",
  },

  // ----- More Antiparasitics -----
  {
    slug: "fexinidazole",
    name: "Fexinidazole",
    genericName: "fexinidazole",
    category: "Antiparasitic",
    drugClass: "Nitroimidazole",
    target: "DNA / reactive metabolites",
    description:
      "First all-oral treatment for both stages of West African sleeping sickness (T. b. gambiense).",
  },
  {
    slug: "suramin",
    name: "Suramin",
    genericName: "suramin",
    category: "Antiparasitic",
    drugClass: "Polysulfonated naphthylurea",
    target: "Multiple parasite enzymes",
    description:
      "Century-old IV drug for early-stage East African trypanosomiasis and as an adjunct in onchocerciasis.",
  },
  {
    slug: "melarsoprol",
    name: "Melarsoprol",
    genericName: "melarsoprol",
    category: "Antiparasitic",
    drugClass: "Arsenical",
    target: "Trypanothione / pyruvate kinase",
    description:
      "Arsenic-based drug for CNS-stage African trypanosomiasis. Causes a fatal reactive encephalopathy in up to 10% — a last resort.",
  },
  {
    slug: "oxamniquine",
    name: "Oxamniquine",
    genericName: "oxamniquine",
    category: "Antiparasitic",
    drugClass: "Tetrahydroquinoline",
    target: "Parasite DNA",
    description:
      "Oral alternative to praziquantel specifically for Schistosoma mansoni infection, mainly used in South America.",
  },
  {
    slug: "diloxanide-furoate",
    name: "Diloxanide furoate",
    genericName: "diloxanide furoate",
    category: "Antiparasitic",
    drugClass: "Dichloroacetamide",
    target: "Luminal amoeba",
    description:
      "Luminal amebicide that clears intestinal Entamoeba histolytica cysts after tissue treatment with metronidazole.",
  },
  {
    slug: "fumagillin",
    name: "Fumagillin",
    genericName: "fumagillin",
    category: "Antiparasitic",
    drugClass: "Methionine aminopeptidase inhibitor",
    target: "MetAP2",
    description:
      "Used for microsporidial (Encephalitozoon, Enterocytozoon) infections, including intestinal and ocular disease in AIDS.",
  },
  {
    slug: "lindane",
    name: "Lindane",
    genericName: "lindane",
    category: "Antiparasitic",
    drugClass: "Organochlorine",
    target: "GABA-gated chloride channels",
    description:
      "Second-line topical scabicide and pediculicide. Neurotoxicity risk restricts it to treatment failures in adults.",
  },

  // ----- More Antibacterials -----
  {
    slug: "cefiderocol-novel",
    name: "Sulbactam–durlobactam",
    genericName: "sulbactam + durlobactam",
    category: "Antibacterial",
    drugClass: "BL inhibitor combo",
    target: "Cell wall (PBP1/3)",
    description:
      "Combination of two beta-lactamase-related agents for carbapenem-resistant Acinetobacter baumannii — a previously near-untreatable pathogen.",
  },
  {
    slug: "lefamulin",
    name: "Lefamulin",
    genericName: "lefamulin",
    category: "Antibacterial",
    drugClass: "Pleuromutilin",
    target: "Ribosome 50S",
    description:
      "Oral/IV pleuromutilin for community-acquired pneumonia. Covers atypicals, MRSA, and macrolide-resistant S. pneumoniae.",
  },
  {
    slug: "omadacycline",
    name: "Omadacycline",
    genericName: "omadacycline",
    category: "Antibacterial",
    drugClass: "Aminomethylcycline",
    target: "Ribosome 30S",
    description:
      "Tetracycline derivative bypassing common efflux pumps. Approved for community pneumonia and acute skin infections.",
  },
  {
    slug: "eravacycline",
    name: "Eravacycline",
    genericName: "eravacycline",
    category: "Antibacterial",
    drugClass: "Fluorocycline",
    target: "Ribosome 30S",
    description:
      "Broad fluorocycline for complicated intra-abdominal infections, including ESBL Enterobacterales and Acinetobacter.",
  },
  {
    slug: "plazomicin",
    name: "Plazomicin",
    genericName: "plazomicin",
    category: "Antibacterial",
    drugClass: "Aminoglycoside",
    target: "Ribosome 30S",
    description:
      "Neo-aminoglycoside stable to common aminoglycoside-modifying enzymes. Targets CRE in complicated UTI and bloodstream infections.",
  },
  {
    slug: "pretomanid",
    name: "Pretomanid",
    genericName: "pretomanid",
    category: "Antibacterial",
    drugClass: "Nitroimidazooxazine",
    target: "Mycolic acid + ETC",
    description:
      "Bicyclic nitroimidazole used in the BPaL regimen (bedaquiline + pretomanid + linezolid) for extensively drug-resistant tuberculosis.",
  },
  {
    slug: "delamanid",
    name: "Delamanid",
    genericName: "delamanid",
    category: "Antibacterial",
    drugClass: "Nitro-dihydroimidazooxazole",
    target: "Mycolic acid synthesis",
    description:
      "Anti-TB drug used in MDR-TB regimens. Inhibits mycolic-acid synthesis like pretomanid; QT prolongation requires monitoring.",
  },
  {
    slug: "ethionamide",
    name: "Ethionamide",
    genericName: "ethionamide",
    category: "Antibacterial",
    drugClass: "Antimycobacterial",
    target: "Mycolic acid synthesis",
    description:
      "Second-line anti-TB drug structurally related to INH. Limited by GI upset, hepatotoxicity, and reversible hypothyroidism.",
  },
  {
    slug: "cycloserine",
    name: "Cycloserine",
    genericName: "cycloserine",
    category: "Antibacterial",
    drugClass: "Cyclic amino-acid analog",
    target: "Cell wall (alanine racemase)",
    description:
      "Second-line anti-TB drug. Causes neuropsychiatric adverse effects ('cycloserine madness') and seizures at high concentrations.",
  },
  {
    slug: "spectinomycin",
    name: "Spectinomycin",
    genericName: "spectinomycin",
    category: "Antibacterial",
    drugClass: "Aminocyclitol",
    target: "Ribosome 30S",
    description:
      "Single IM dose alternative for uncomplicated gonococcal urethritis when ceftriaxone cannot be used. Limited global availability.",
  },
  {
    slug: "polymyxin-b",
    name: "Polymyxin B",
    genericName: "polymyxin B",
    category: "Antibacterial",
    drugClass: "Polymyxin",
    target: "Outer membrane (LPS)",
    description:
      "Cationic peptide closely related to colistin. Used for carbapenem-resistant Gram-negatives; also a topical ophthalmic and otic agent.",
  },
  {
    slug: "methenamine",
    name: "Methenamine",
    genericName: "methenamine hippurate",
    category: "Antibacterial",
    drugClass: "Urinary antiseptic",
    target: "Formaldehyde release",
    description:
      "Oral urinary antiseptic releasing formaldehyde in acidic urine. Used for recurrent uncomplicated cystitis prophylaxis.",
  },

  // ----- More Antivirals -----
  {
    slug: "maribavir",
    name: "Maribavir",
    genericName: "maribavir",
    category: "Antiviral",
    drugClass: "UL97 kinase inhibitor",
    target: "CMV UL97 protein kinase",
    description:
      "Oral anti-CMV agent for refractory or resistant CMV infection in transplant recipients, with less marrow toxicity than ganciclovir.",
  },
  {
    slug: "obeldesivir",
    name: "Obeldesivir",
    genericName: "obeldesivir",
    category: "Antiviral",
    drugClass: "Nucleotide analog",
    target: "RNA-dependent RNA polymerase",
    description:
      "Oral prodrug of remdesivir's parent nucleoside, investigated for Marburg, Ebola, and other RNA viruses.",
  },
  {
    slug: "lenacapavir",
    name: "Lenacapavir",
    genericName: "lenacapavir",
    category: "Antiviral",
    drugClass: "Capsid inhibitor",
    target: "HIV capsid",
    description:
      "First-in-class subcutaneous capsid inhibitor dosed every six months. For heavily treatment-experienced HIV and as long-acting PrEP.",
  },
  {
    slug: "fostemsavir",
    name: "Fostemsavir",
    genericName: "fostemsavir",
    category: "Antiviral",
    drugClass: "Attachment inhibitor",
    target: "HIV gp120",
    description:
      "Oral prodrug blocking HIV gp120 binding to CD4. Reserved for multidrug-resistant HIV salvage regimens.",
  },
  {
    slug: "ibalizumab",
    name: "Ibalizumab",
    genericName: "ibalizumab-uiyk",
    category: "Antiviral",
    drugClass: "Monoclonal antibody",
    target: "CD4 (post-attachment)",
    description:
      "IV monoclonal antibody preventing HIV entry after CD4 binding. Approved for multi-class-resistant HIV.",
  },
  {
    slug: "abacavir",
    name: "Abacavir",
    genericName: "abacavir",
    category: "Antiviral",
    drugClass: "NRTI",
    target: "Reverse transcriptase",
    description:
      "Guanosine analog NRTI for HIV. Requires HLA-B*5701 screening to avoid the hypersensitivity reaction.",
  },
  {
    slug: "doravirine",
    name: "Doravirine",
    genericName: "doravirine",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "Next-generation NNRTI retaining activity against common K103N resistance. Fewer CNS effects than efavirenz.",
  },

  // ----- More Antifungals -----
  {
    slug: "olorofim",
    name: "Olorofim",
    genericName: "olorofim",
    category: "Antifungal",
    drugClass: "Orotomide",
    target: "Dihydroorotate dehydrogenase",
    description:
      "First-in-class anti-mold drug active against azole-resistant Aspergillus, Scedosporium, and Lomentospora. Phase 3 investigational.",
  },
  {
    slug: "manogepix",
    name: "Manogepix",
    genericName: "manogepix",
    category: "Antifungal",
    drugClass: "Gwt1 inhibitor",
    target: "GPI-anchor biosynthesis",
    description:
      "The active form of fosmanogepix. Targets a fungal-specific cell-wall pathway and remains active against many resistant molds and yeasts.",
  },
  {
    slug: "tolnaftate",
    name: "Tolnaftate",
    genericName: "tolnaftate",
    category: "Antifungal",
    drugClass: "Thiocarbamate",
    target: "Squalene epoxidase",
    description:
      "Over-the-counter topical antifungal for tinea pedis, corporis, and cruris. Fungistatic; less effective for thick scaling.",
  },
  {
    slug: "naftifine",
    name: "Naftifine",
    genericName: "naftifine",
    category: "Antifungal",
    drugClass: "Allylamine",
    target: "Squalene epoxidase",
    description:
      "Topical allylamine for tinea pedis, corporis, and cruris. Fungicidal against dermatophytes with anti-inflammatory effect.",
  },
  {
    slug: "efinaconazole",
    name: "Efinaconazole",
    genericName: "efinaconazole",
    category: "Antifungal",
    drugClass: "Triazole",
    target: "Ergosterol synthesis",
    description:
      "Topical triazole solution for toenail onychomycosis. Penetrates the nail plate without requiring oral therapy.",
  },

  // ----- More Antiparasitics -----
  {
    slug: "amodiaquine",
    name: "Amodiaquine",
    genericName: "amodiaquine",
    category: "Antiparasitic",
    drugClass: "4-aminoquinoline",
    target: "Heme detoxification",
    description:
      "Aminoquinoline antimalarial paired with artesunate in WHO-recommended ACT regimens for uncomplicated falciparum malaria.",
  },
  {
    slug: "artesunate",
    name: "Artesunate",
    genericName: "artesunate",
    category: "Antiparasitic",
    drugClass: "Artemisinin",
    target: "Heme / parasite proteins",
    description:
      "IV/IM artemisinin derivative and the global standard for severe P. falciparum malaria, replacing quinine.",
  },
  {
    slug: "dihydroartemisinin-piperaquine",
    name: "DHA–piperaquine",
    genericName: "dihydroartemisinin + piperaquine",
    category: "Antiparasitic",
    drugClass: "Artemisinin combination therapy",
    target: "Heme / parasite proteins",
    description:
      "Long-acting ACT for uncomplicated falciparum malaria and intermittent preventive treatment in pregnancy.",
  },
  {
    slug: "pyronaridine-artesunate",
    name: "Pyronaridine–artesunate",
    genericName: "pyronaridine + artesunate",
    category: "Antiparasitic",
    drugClass: "Artemisinin combination therapy",
    target: "Heme / parasite proteins",
    description:
      "Newer ACT effective against both P. falciparum and chloroquine-resistant P. vivax. Used in African and South-East Asian programs.",
  },
  {
    slug: "moxidectin",
    name: "Moxidectin",
    genericName: "moxidectin",
    category: "Antiparasitic",
    drugClass: "Macrocyclic lactone",
    target: "Glutamate-gated chloride channels",
    description:
      "Long-acting ivermectin relative for onchocerciasis with stronger microfilaricidal effect. Single oral dose.",
  },
  {
    slug: "ozonide-oz439",
    name: "Artefenomel (OZ439)",
    genericName: "artefenomel",
    category: "Antiparasitic",
    drugClass: "Synthetic ozonide",
    target: "Heme / iron metabolism",
    description:
      "Investigational synthetic ozonide antimalarial designed for single-dose cure when combined with a partner drug.",
  },
  {
    slug: "tafenoquine-combo",
    name: "Tafenoquine + chloroquine",
    genericName: "tafenoquine + chloroquine",
    category: "Antiparasitic",
    drugClass: "Combination regimen",
    target: "Heme + hypnozoites",
    description:
      "Single-dose regimen for radical cure of P. vivax. Requires G6PD screening before use.",
  },
  {
    slug: "cefpodoxime",
    name: "Cefpodoxime",
    genericName: "cefpodoxime proxetil",
    category: "Antibacterial",
    drugClass: "3rd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Oral third-generation cephalosporin for community pneumonia, otitis media, and uncomplicated gonorrhea.",
  },
  {
    slug: "cefixime",
    name: "Cefixime",
    genericName: "cefixime",
    category: "Antibacterial",
    drugClass: "3rd-gen cephalosporin",
    target: "Cell wall",
    description:
      "Oral third-generation cephalosporin previously used for gonorrhea; now reserved for UTIs and typhoid.",
  },
  {
    slug: "imipenem-relebactam",
    name: "Imipenem–relebactam",
    genericName: "imipenem + cilastatin + relebactam",
    category: "Antibacterial",
    drugClass: "Carbapenem + BL inhibitor",
    target: "Cell wall",
    description:
      "Imipenem combined with a novel diazabicyclooctane to restore activity against KPC-producing carbapenem-resistant Enterobacterales and Pseudomonas.",
  },
  {
    slug: "ceftobiprole",
    name: "Ceftobiprole",
    genericName: "ceftobiprole medocaril",
    category: "Antibacterial",
    drugClass: "Anti-MRSA cephalosporin",
    target: "Cell wall (PBP2a)",
    description:
      "Broad cephalosporin with anti-MRSA and anti-Pseudomonas activity. Used for community and hospital pneumonia in some countries.",
  },
  {
    slug: "iclaprim",
    name: "Iclaprim",
    genericName: "iclaprim",
    category: "Antibacterial",
    drugClass: "Folate antagonist",
    target: "Dihydrofolate reductase",
    description:
      "Newer DHFR inhibitor with activity against MRSA. Investigated for acute bacterial skin infections.",
  },
  {
    slug: "novobiocin",
    name: "Novobiocin",
    genericName: "novobiocin",
    category: "Antibacterial",
    drugClass: "Aminocoumarin",
    target: "DNA gyrase (B subunit)",
    description:
      "Historical antibiotic targeting GyrB. Used in the laboratory to distinguish S. saprophyticus (resistant) from other coagulase-negative staph.",
  },
  {
    slug: "bacitracin",
    name: "Bacitracin",
    genericName: "bacitracin",
    category: "Antibacterial",
    drugClass: "Polypeptide",
    target: "Cell wall (lipid carrier)",
    description:
      "Topical antibiotic for skin infections. Laboratory disk used to identify Streptococcus pyogenes (susceptible) versus other beta-hemolytic strep.",
  },
  {
    slug: "optochin",
    name: "Optochin",
    genericName: "ethylhydrocupreine",
    category: "Antibacterial",
    drugClass: "Quinoline (lab marker)",
    target: "ATPase",
    description:
      "Historical antimalarial now only used in the lab to identify S. pneumoniae (optochin-sensitive) versus viridans streptococci.",
  },
  {
    slug: "sparfloxacin",
    name: "Sparfloxacin",
    genericName: "sparfloxacin",
    category: "Antibacterial",
    drugClass: "Fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Older fluoroquinolone with anti-pneumococcal activity. Limited by phototoxicity and QT prolongation; rarely used today.",
  },
  {
    slug: "trovafloxacin",
    name: "Trovafloxacin",
    genericName: "trovafloxacin",
    category: "Antibacterial",
    drugClass: "Fluoroquinolone",
    target: "DNA gyrase / topo IV",
    description:
      "Broad-spectrum quinolone withdrawn due to severe hepatotoxicity. A cautionary tale in antimicrobial pharmacovigilance.",
  },

  // ----- More Antivirals -----
  {
    slug: "rimantadine",
    name: "Rimantadine",
    genericName: "rimantadine",
    category: "Antiviral",
    drugClass: "M2 inhibitor",
    target: "Influenza A M2 channel",
    description:
      "Older adamantane antiviral active against influenza A only. Universal resistance has retired it from clinical use.",
  },
  {
    slug: "amantadine",
    name: "Amantadine",
    genericName: "amantadine",
    category: "Antiviral",
    drugClass: "M2 inhibitor",
    target: "Influenza A M2 channel",
    description:
      "First-generation M2 channel blocker. Now used mainly for Parkinson's disease and drug-induced extrapyramidal symptoms.",
  },
  {
    slug: "trifluridine",
    name: "Trifluridine",
    genericName: "trifluridine",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "Topical ophthalmic agent for herpetic keratoconjunctivitis. The thymidine analog disrupts viral DNA synthesis in the cornea.",
  },
  {
    slug: "idoxuridine",
    name: "Idoxuridine",
    genericName: "idoxuridine",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "First systemic antiviral developed (1959). Now used only topically for herpetic keratitis.",
  },
  {
    slug: "vidarabine",
    name: "Vidarabine",
    genericName: "vidarabine",
    category: "Antiviral",
    drugClass: "Nucleoside analog",
    target: "Viral DNA polymerase",
    description:
      "Adenosine analog historically used for HSV encephalitis and zoster. Largely replaced by acyclovir; some ophthalmic use remains.",
  },
  {
    slug: "saquinavir",
    name: "Saquinavir",
    genericName: "saquinavir",
    category: "Antiviral",
    drugClass: "Protease inhibitor",
    target: "HIV protease",
    description:
      "First approved HIV protease inhibitor (1995). Required boosting with ritonavir; pivotal historical agent.",
  },
  {
    slug: "indinavir",
    name: "Indinavir",
    genericName: "indinavir",
    category: "Antiviral",
    drugClass: "Protease inhibitor",
    target: "HIV protease",
    description:
      "Classic HIV protease inhibitor. Caused crystal nephropathy; required strict hydration.",
  },
  {
    slug: "delavirdine",
    name: "Delavirdine",
    genericName: "delavirdine",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "Early NNRTI now rarely used due to thrice-daily dosing and a low resistance barrier.",
  },
  {
    slug: "etravirine",
    name: "Etravirine",
    genericName: "etravirine",
    category: "Antiviral",
    drugClass: "NNRTI",
    target: "HIV reverse transcriptase",
    description:
      "Second-generation NNRTI with activity against many NNRTI-resistant viruses. Salvage option after first-line failure.",
  },
  {
    slug: "elvitegravir",
    name: "Elvitegravir",
    genericName: "elvitegravir",
    category: "Antiviral",
    drugClass: "Integrase inhibitor",
    target: "HIV integrase",
    description:
      "Once-daily INSTI requiring cobicistat boosting. Co-formulated with tenofovir + emtricitabine in earlier single-tablet HIV regimens.",
  },

  // ----- More Antifungals -----
  {
    slug: "butenafine",
    name: "Butenafine",
    genericName: "butenafine",
    category: "Antifungal",
    drugClass: "Benzylamine",
    target: "Squalene epoxidase",
    description:
      "Topical squalene-epoxidase inhibitor for tinea pedis, cruris, and corporis. Fungicidal against dermatophytes; once-daily.",
  },
  {
    slug: "amorolfine",
    name: "Amorolfine",
    genericName: "amorolfine",
    category: "Antifungal",
    drugClass: "Morpholine",
    target: "Ergosterol synthesis",
    description:
      "Topical nail-lacquer antifungal for mild onychomycosis. Inhibits two distinct ergosterol-synthesis steps.",
  },

  // ----- More Antiparasitics -----
  {
    slug: "tinidazole-malaria",
    name: "Tinidazole (luminal amoebicide)",
    genericName: "tinidazole",
    category: "Antiparasitic",
    drugClass: "Nitroimidazole",
    target: "DNA damage",
    description:
      "Used after metronidazole or tinidazole tissue therapy to clear remaining intestinal Entamoeba cysts (alongside paromomycin).",
  },
  {
    slug: "niclosamide",
    name: "Niclosamide",
    genericName: "niclosamide",
    category: "Antiparasitic",
    drugClass: "Salicylanilide",
    target: "Mitochondrial oxidative phosphorylation",
    description:
      "Oral non-absorbed agent for intestinal tapeworms (Taenia, Diphyllobothrium). Single dose; not effective for cysticercosis.",
  },
  {
    slug: "bithionol",
    name: "Bithionol",
    genericName: "bithionol",
    category: "Antiparasitic",
    drugClass: "Bisphenol",
    target: "Parasite oxidative phosphorylation",
    description:
      "Historical alternative for paragonimiasis (lung fluke) and fasciolisis. Mostly replaced by triclabendazole.",
  },
  {
    slug: "metrifonate",
    name: "Metrifonate",
    genericName: "metrifonate",
    category: "Antiparasitic",
    drugClass: "Organophosphate",
    target: "Acetylcholinesterase",
    description:
      "Older oral agent for Schistosoma haematobium. Mostly superseded by praziquantel but still used in some endemic regions.",
  },
  {
    slug: "carbarsone",
    name: "Carbarsone",
    genericName: "carbarsone",
    category: "Antiparasitic",
    drugClass: "Arsenical",
    target: "Sulfhydryl groups",
    description:
      "Older arsenic-based luminal amoebicide for E. histolytica. Largely replaced by safer paromomycin and diloxanide.",
  },
  {
    slug: "tafenoquine-prophylaxis",
    name: "Tafenoquine (prophylaxis)",
    genericName: "tafenoquine",
    category: "Antiparasitic",
    drugClass: "8-aminoquinoline",
    target: "Mitochondrial functions",
    description:
      "Weekly dosing for malaria prophylaxis after loading. Approved as Arakoda in addition to its single-dose Krintafel role.",
  },

  // ===== Autonomic — sympathomimetics =====
  {
    slug: "epinephrine",
    name: "Epinephrine",
    genericName: "epinephrine (adrenaline)",
    category: "Autonomic",
    drugClass: "Sympathomimetic (α/β agonist)",
    target: "α1, α2, β1, β2 adrenoceptors",
    description:
      "Nonselective adrenergic agonist and first-line for anaphylaxis and cardiac arrest. Raises blood pressure, opens airways, and supports the heart.",
  },
  {
    slug: "norepinephrine",
    name: "Norepinephrine",
    genericName: "norepinephrine (noradrenaline)",
    category: "Autonomic",
    drugClass: "Sympathomimetic (α>β agonist)",
    target: "α1, β1 adrenoceptors",
    description:
      "First-line vasopressor for septic shock. Potent α1 vasoconstriction with modest β1 inotropy.",
  },
  {
    slug: "phenylephrine",
    name: "Phenylephrine",
    genericName: "phenylephrine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (α1 agonist)",
    target: "α1 adrenoceptor",
    description:
      "Selective α1 agonist used as a nasal decongestant, pressor for hypotension, and mydriatic for eye exams.",
  },
  {
    slug: "dobutamine",
    name: "Dobutamine",
    genericName: "dobutamine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (β1 agonist)",
    target: "β1 adrenoceptor",
    description:
      "Selective β1 agonist that increases cardiac contractility. Used in acute decompensated heart failure and cardiogenic shock.",
  },
  {
    slug: "pseudoephedrine",
    name: "Pseudoephedrine",
    genericName: "pseudoephedrine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (mixed-acting)",
    target: "α/β adrenoceptors + NE release",
    description:
      "Oral decongestant that shrinks nasal mucosa. Behind-the-counter due to use in methamphetamine synthesis.",
  },
  {
    slug: "midodrine",
    name: "Midodrine",
    genericName: "midodrine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (α1 agonist)",
    target: "α1 adrenoceptor",
    description:
      "Oral α1 agonist for orthostatic hypotension and to support blood pressure in hepatorenal syndrome and dialysis.",
  },

  // ===== Autonomic — sympatholytics =====
  {
    slug: "clonidine",
    name: "Clonidine",
    genericName: "clonidine",
    category: "Autonomic",
    drugClass: "Sympatholytic (α2 agonist)",
    target: "Central α2 adrenoceptor",
    description:
      "Central α2 agonist that reduces sympathetic outflow. Used for hypertension, ADHD, and opioid-withdrawal symptoms.",
  },
  {
    slug: "prazosin",
    name: "Prazosin",
    genericName: "prazosin",
    category: "Autonomic",
    drugClass: "Sympatholytic (α1 blocker)",
    target: "α1 adrenoceptor",
    description:
      "Selective α1 antagonist for hypertension, BPH, and PTSD-related nightmares. First-dose orthostatic hypotension is characteristic.",
  },
  {
    slug: "tamsulosin",
    name: "Tamsulosin",
    genericName: "tamsulosin",
    category: "Autonomic",
    drugClass: "Sympatholytic (α1A blocker)",
    target: "α1A adrenoceptor",
    description:
      "Uroselective α1A blocker that relaxes prostatic smooth muscle in BPH and aids passage of ureteral stones.",
  },

  // ===== Autonomic — parasympathomimetics (cholinergics) =====
  {
    slug: "bethanechol",
    name: "Bethanechol",
    genericName: "bethanechol",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (muscarinic agonist)",
    target: "Muscarinic receptors",
    description:
      "Hydrolysis-resistant muscarinic agonist that stimulates the bladder and gut. Used for postoperative urinary retention and atony.",
  },
  {
    slug: "pilocarpine",
    name: "Pilocarpine",
    genericName: "pilocarpine",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (muscarinic agonist)",
    target: "Muscarinic receptors",
    description:
      "Muscarinic agonist that constricts the pupil and stimulates salivary glands. Treats glaucoma and dry mouth (Sjögren's, post-radiation).",
  },
  {
    slug: "neostigmine",
    name: "Neostigmine",
    genericName: "neostigmine",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (AChE inhibitor)",
    target: "Acetylcholinesterase",
    description:
      "Reversible cholinesterase inhibitor that boosts acetylcholine. Reverses neuromuscular blockade and treats myasthenia gravis and ileus.",
  },
  {
    slug: "pyridostigmine",
    name: "Pyridostigmine",
    genericName: "pyridostigmine",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (AChE inhibitor)",
    target: "Acetylcholinesterase",
    description:
      "Long-acting oral cholinesterase inhibitor and mainstay of chronic myasthenia gravis therapy; also a nerve-agent pretreatment.",
  },
  {
    slug: "physostigmine",
    name: "Physostigmine",
    genericName: "physostigmine",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (AChE inhibitor)",
    target: "Acetylcholinesterase (CNS)",
    description:
      "Lipophilic cholinesterase inhibitor that crosses into the CNS. Antidote for anticholinergic toxidrome.",
  },

  // ===== Autonomic — parasympatholytics (anticholinergics) =====
  {
    slug: "atropine",
    name: "Atropine",
    genericName: "atropine",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "Muscarinic receptors",
    description:
      "Muscarinic antagonist that raises heart rate and dries secretions. Treats symptomatic bradycardia and organophosphate poisoning.",
  },
  {
    slug: "scopolamine",
    name: "Scopolamine",
    genericName: "scopolamine (hyoscine)",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "Muscarinic receptors (CNS)",
    description:
      "Centrally acting antimuscarinic delivered by transdermal patch for motion sickness and postoperative nausea.",
  },
  {
    slug: "glycopyrrolate",
    name: "Glycopyrrolate",
    genericName: "glycopyrrolate",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "Muscarinic receptors",
    description:
      "Quaternary antimuscarinic that does not cross the blood-brain barrier. Dries secretions perioperatively and treats hyperhidrosis.",
  },
  {
    slug: "oxybutynin",
    name: "Oxybutynin",
    genericName: "oxybutynin",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "M3 muscarinic receptor",
    description:
      "Bladder-selective antimuscarinic for overactive bladder and urge incontinence. Dry mouth and constipation are common.",
  },

  // ===== Cardiovascular =====
  {
    slug: "lisinopril",
    name: "Lisinopril",
    genericName: "lisinopril",
    category: "Cardiovascular",
    drugClass: "ACE inhibitor",
    target: "Angiotensin-converting enzyme",
    description:
      "Blocks conversion of angiotensin I to II, lowering blood pressure and protecting kidneys in diabetes. Dry cough and angioedema are class effects.",
  },
  {
    slug: "losartan",
    name: "Losartan",
    genericName: "losartan",
    category: "Cardiovascular",
    drugClass: "Angiotensin receptor blocker",
    target: "AT1 receptor",
    description:
      "Blocks the angiotensin II receptor for hypertension and diabetic nephropathy. An ACE-inhibitor alternative without the cough.",
  },
  {
    slug: "amlodipine",
    name: "Amlodipine",
    genericName: "amlodipine",
    category: "Cardiovascular",
    drugClass: "Dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (vascular)",
    description:
      "Long-acting CCB that relaxes arterial smooth muscle. First-line for hypertension and angina; ankle edema is the common side effect.",
  },
  {
    slug: "diltiazem",
    name: "Diltiazem",
    genericName: "diltiazem",
    category: "Cardiovascular",
    drugClass: "Non-dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (cardiac)",
    description:
      "Rate-controlling CCB for atrial fibrillation and angina. Slows AV-node conduction and lowers heart rate.",
  },
  {
    slug: "metoprolol",
    name: "Metoprolol",
    genericName: "metoprolol",
    category: "Cardiovascular",
    drugClass: "β1-selective beta blocker",
    target: "β1 adrenoceptor",
    description:
      "Cardioselective beta blocker for heart failure, post-MI, and rate control. Reduces myocardial oxygen demand.",
  },
  {
    slug: "carvedilol",
    name: "Carvedilol",
    genericName: "carvedilol",
    category: "Cardiovascular",
    drugClass: "Nonselective α/β blocker",
    target: "α1, β1, β2 adrenoceptors",
    description:
      "Combined alpha/beta blocker proven to reduce mortality in heart failure with reduced ejection fraction.",
  },
  {
    slug: "digoxin",
    name: "Digoxin",
    genericName: "digoxin",
    category: "Cardiovascular",
    drugClass: "Cardiac glycoside",
    target: "Na+/K+-ATPase",
    description:
      "Inhibits the sodium pump to increase contractility and vagal tone. Narrow therapeutic window; toxicity causes arrhythmias and visual halos.",
  },
  {
    slug: "amiodarone",
    name: "Amiodarone",
    genericName: "amiodarone",
    category: "Cardiovascular",
    drugClass: "Class III antiarrhythmic",
    target: "K+ (and multi-channel)",
    description:
      "Broad antiarrhythmic for atrial and ventricular arrhythmias. Long half-life with thyroid, pulmonary, hepatic, and corneal toxicity.",
  },
  {
    slug: "nitroglycerin",
    name: "Nitroglycerin",
    genericName: "nitroglycerin",
    category: "Cardiovascular",
    drugClass: "Nitrate vasodilator",
    target: "Nitric oxide / guanylate cyclase",
    description:
      "Venodilator that relieves angina by reducing cardiac preload. Sublingual for acute attacks; tolerance develops with continuous use.",
  },
  {
    slug: "atorvastatin",
    name: "Atorvastatin",
    genericName: "atorvastatin",
    category: "Cardiovascular",
    drugClass: "HMG-CoA reductase inhibitor (statin)",
    target: "HMG-CoA reductase",
    description:
      "Lowers LDL cholesterol and cardiovascular risk by blocking hepatic cholesterol synthesis. Myalgia and transaminitis are watch-outs.",
  },
  {
    slug: "warfarin",
    name: "Warfarin",
    genericName: "warfarin",
    category: "Cardiovascular",
    drugClass: "Vitamin K antagonist",
    target: "Vitamin K epoxide reductase",
    description:
      "Oral anticoagulant requiring INR monitoring. Used for atrial fibrillation and mechanical valves; many food and drug interactions.",
  },
  {
    slug: "apixaban",
    name: "Apixaban",
    genericName: "apixaban",
    category: "Cardiovascular",
    drugClass: "Direct factor Xa inhibitor",
    target: "Factor Xa",
    description:
      "Direct oral anticoagulant for atrial fibrillation and venous thromboembolism. No routine monitoring; reversed by andexanet alfa.",
  },
  {
    slug: "clopidogrel",
    name: "Clopidogrel",
    genericName: "clopidogrel",
    category: "Cardiovascular",
    drugClass: "P2Y12 antiplatelet",
    target: "Platelet P2Y12 receptor",
    description:
      "Irreversibly blocks platelet ADP receptors. Used after stents and ACS, often with aspirin for dual antiplatelet therapy.",
  },
  {
    slug: "hydralazine",
    name: "Hydralazine",
    genericName: "hydralazine",
    category: "Cardiovascular",
    drugClass: "Arterial vasodilator",
    target: "Arteriolar smooth muscle",
    description:
      "Direct arteriolar dilator for resistant hypertension and (with nitrates) heart failure in Black patients. Can cause drug-induced lupus.",
  },

  // ===== Diuretics =====
  {
    slug: "furosemide",
    name: "Furosemide",
    genericName: "furosemide",
    category: "Diuretic",
    drugClass: "Loop diuretic",
    target: "Na-K-2Cl cotransporter (thick ascending limb)",
    description:
      "Powerful loop diuretic for pulmonary edema, heart failure, and volume overload. Risk of hypokalemia and ototoxicity.",
  },
  {
    slug: "bumetanide",
    name: "Bumetanide",
    genericName: "bumetanide",
    category: "Diuretic",
    drugClass: "Loop diuretic",
    target: "Na-K-2Cl cotransporter",
    description:
      "More potent and reliably absorbed loop diuretic. Useful when furosemide absorption is poor in gut edema.",
  },
  {
    slug: "hydrochlorothiazide",
    name: "Hydrochlorothiazide",
    genericName: "hydrochlorothiazide",
    category: "Diuretic",
    drugClass: "Thiazide diuretic",
    target: "Na-Cl cotransporter (distal tubule)",
    description:
      "First-line thiazide for hypertension and a preventer of calcium kidney stones. Causes hypokalemia, hyponatremia, and hyperglycemia.",
  },
  {
    slug: "chlorthalidone",
    name: "Chlorthalidone",
    genericName: "chlorthalidone",
    category: "Diuretic",
    drugClass: "Thiazide-like diuretic",
    target: "Na-Cl cotransporter",
    description:
      "Long-acting thiazide-like agent with the strongest outcome data for hypertension.",
  },
  {
    slug: "spironolactone",
    name: "Spironolactone",
    genericName: "spironolactone",
    category: "Diuretic",
    drugClass: "Potassium-sparing (aldosterone antagonist)",
    target: "Mineralocorticoid receptor",
    description:
      "Aldosterone antagonist for heart failure, resistant hypertension, ascites, and hyperaldosteronism. Causes hyperkalemia and gynecomastia.",
  },
  {
    slug: "eplerenone",
    name: "Eplerenone",
    genericName: "eplerenone",
    category: "Diuretic",
    drugClass: "Potassium-sparing (aldosterone antagonist)",
    target: "Mineralocorticoid receptor",
    description:
      "Selective aldosterone antagonist with less gynecomastia than spironolactone. Improves survival post-MI heart failure.",
  },
  {
    slug: "amiloride",
    name: "Amiloride",
    genericName: "amiloride",
    category: "Diuretic",
    drugClass: "Potassium-sparing (ENaC blocker)",
    target: "Epithelial sodium channel",
    description:
      "Blocks the collecting-duct sodium channel to spare potassium. Often paired with thiazides to offset potassium loss.",
  },
  {
    slug: "acetazolamide",
    name: "Acetazolamide",
    genericName: "acetazolamide",
    category: "Diuretic",
    drugClass: "Carbonic anhydrase inhibitor",
    target: "Carbonic anhydrase",
    description:
      "Causes bicarbonate diuresis. Used for glaucoma, altitude sickness, idiopathic intracranial hypertension, and metabolic alkalosis.",
  },
  {
    slug: "mannitol",
    name: "Mannitol",
    genericName: "mannitol",
    category: "Diuretic",
    drugClass: "Osmotic diuretic",
    target: "Tubular osmotic gradient",
    description:
      "Osmotically pulls water into the tubule and out of tissues. Reduces raised intracranial and intraocular pressure.",
  },

  // ===== Antineoplastics =====
  {
    slug: "methotrexate",
    name: "Methotrexate",
    genericName: "methotrexate",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (antifolate)",
    target: "Dihydrofolate reductase",
    description:
      "Blocks folate metabolism and DNA synthesis. Used in leukemia and lymphoma, and at low dose for rheumatoid arthritis and psoriasis.",
  },
  {
    slug: "fluorouracil",
    name: "5-Fluorouracil",
    genericName: "fluorouracil (5-FU)",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (pyrimidine analog)",
    target: "Thymidylate synthase",
    description:
      "Pyrimidine analog for colorectal, breast, and skin cancers. Topical form treats actinic keratoses; toxicity rises in DPD deficiency.",
  },
  {
    slug: "cytarabine",
    name: "Cytarabine",
    genericName: "cytarabine (Ara-C)",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (pyrimidine analog)",
    target: "DNA polymerase",
    description:
      "Backbone of acute myeloid leukemia induction. High-dose therapy can cause cerebellar toxicity and conjunctivitis.",
  },
  {
    slug: "cyclophosphamide",
    name: "Cyclophosphamide",
    genericName: "cyclophosphamide",
    category: "Antineoplastic",
    drugClass: "Alkylating agent",
    target: "DNA cross-linking",
    description:
      "Prodrug alkylator for lymphomas, breast cancer, and autoimmune disease. Hemorrhagic cystitis is prevented with mesna and hydration.",
  },
  {
    slug: "cisplatin",
    name: "Cisplatin",
    genericName: "cisplatin",
    category: "Antineoplastic",
    drugClass: "Platinum agent",
    target: "DNA cross-linking",
    description:
      "Platinum compound for testicular, ovarian, bladder, and lung cancers. Nephrotoxic, ototoxic, and intensely emetogenic.",
  },
  {
    slug: "doxorubicin",
    name: "Doxorubicin",
    genericName: "doxorubicin",
    category: "Antineoplastic",
    drugClass: "Anthracycline",
    target: "Topoisomerase II / DNA intercalation",
    description:
      "Broad anticancer anthracycline. Cumulative dose causes dilated cardiomyopathy; gives a harmless red urine.",
  },
  {
    slug: "vincristine",
    name: "Vincristine",
    genericName: "vincristine",
    category: "Antineoplastic",
    drugClass: "Vinca alkaloid",
    target: "Microtubules (depolymerization)",
    description:
      "Blocks mitotic spindle formation in leukemias and lymphomas. Dose-limiting peripheral neuropathy; fatal if given intrathecally.",
  },
  {
    slug: "paclitaxel",
    name: "Paclitaxel",
    genericName: "paclitaxel",
    category: "Antineoplastic",
    drugClass: "Taxane",
    target: "Microtubules (stabilization)",
    description:
      "Hyperstabilizes microtubules to arrest mitosis in breast, ovarian, and lung cancers. Causes neuropathy and hypersensitivity reactions.",
  },
  {
    slug: "etoposide",
    name: "Etoposide",
    genericName: "etoposide",
    category: "Antineoplastic",
    drugClass: "Topoisomerase II inhibitor",
    target: "Topoisomerase II",
    description:
      "Induces DNA strand breaks in testicular and small-cell lung cancers. Risk of secondary leukemia.",
  },
  {
    slug: "imatinib",
    name: "Imatinib",
    genericName: "imatinib",
    category: "Antineoplastic",
    drugClass: "Tyrosine kinase inhibitor",
    target: "BCR-ABL, c-KIT",
    description:
      "Targeted inhibitor that revolutionized chronic myeloid leukemia and GIST treatment by blocking the BCR-ABL fusion kinase.",
  },
  {
    slug: "rituximab",
    name: "Rituximab",
    genericName: "rituximab",
    category: "Antineoplastic",
    drugClass: "Anti-CD20 monoclonal antibody",
    target: "CD20 on B cells",
    description:
      "Depletes B cells in lymphomas, leukemias, and autoimmune disease. Watch for infusion reactions and hepatitis B reactivation.",
  },
  {
    slug: "trastuzumab",
    name: "Trastuzumab",
    genericName: "trastuzumab",
    category: "Antineoplastic",
    drugClass: "Anti-HER2 monoclonal antibody",
    target: "HER2/neu receptor",
    description:
      "Targets HER2-overexpressing breast and gastric cancers. Can cause reversible cardiotoxicity, especially with anthracyclines.",
  },
  {
    slug: "pembrolizumab",
    name: "Pembrolizumab",
    genericName: "pembrolizumab",
    category: "Antineoplastic",
    drugClass: "PD-1 checkpoint inhibitor",
    target: "PD-1 receptor",
    description:
      "Releases the brakes on T cells against many solid tumors. Immune-related adverse events can affect any organ.",
  },
  {
    slug: "tamoxifen",
    name: "Tamoxifen",
    genericName: "tamoxifen",
    category: "Antineoplastic",
    drugClass: "Selective estrogen receptor modulator",
    target: "Estrogen receptor",
    description:
      "Blocks estrogen receptors in hormone-receptor-positive breast cancer. Raises risk of endometrial cancer and venous thromboembolism.",
  },

  // ===== CNS / neuropsychiatric =====
  {
    slug: "diazepam",
    name: "Diazepam",
    genericName: "diazepam",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Enhances GABA-A chloride flux for anxiety, seizures, alcohol withdrawal, and muscle spasm. Dependence and respiratory depression with opioids.",
  },
  {
    slug: "lorazepam",
    name: "Lorazepam",
    genericName: "lorazepam",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Intermediate-acting benzodiazepine and first-line for status epilepticus and acute agitation. No active metabolites.",
  },
  {
    slug: "phenytoin",
    name: "Phenytoin",
    genericName: "phenytoin",
    category: "CNS",
    drugClass: "Antiepileptic (Na+ channel blocker)",
    target: "Voltage-gated sodium channel",
    description:
      "Classic anticonvulsant for focal and tonic-clonic seizures. Zero-order kinetics, gingival hyperplasia, and many interactions.",
  },
  {
    slug: "levetiracetam",
    name: "Levetiracetam",
    genericName: "levetiracetam",
    category: "CNS",
    drugClass: "Antiepileptic (SV2A modulator)",
    target: "Synaptic vesicle protein SV2A",
    description:
      "Broad-spectrum anticonvulsant with few drug interactions. Irritability and mood changes are common.",
  },
  {
    slug: "valproate",
    name: "Valproate",
    genericName: "valproic acid",
    category: "CNS",
    drugClass: "Antiepileptic / mood stabilizer",
    target: "Na+ channels, GABA metabolism",
    description:
      "Broad anticonvulsant and bipolar mood stabilizer. Hepatotoxic and highly teratogenic (neural tube defects).",
  },
  {
    slug: "levodopa-carbidopa",
    name: "Levodopa–carbidopa",
    genericName: "levodopa + carbidopa",
    category: "CNS",
    drugClass: "Dopamine precursor",
    target: "Dopaminergic neurons",
    description:
      "Replenishes brain dopamine in Parkinson disease; carbidopa blocks peripheral conversion to reduce side effects.",
  },
  {
    slug: "haloperidol",
    name: "Haloperidol",
    genericName: "haloperidol",
    category: "CNS",
    drugClass: "Typical antipsychotic",
    target: "D2 dopamine receptor",
    description:
      "High-potency D2 antagonist for psychosis and acute agitation/delirium. Extrapyramidal effects and QT prolongation are risks.",
  },
  {
    slug: "risperidone",
    name: "Risperidone",
    genericName: "risperidone",
    category: "CNS",
    drugClass: "Atypical antipsychotic",
    target: "D2 / 5-HT2A receptors",
    description:
      "Second-generation antipsychotic for schizophrenia and bipolar mania. Raises prolactin and causes metabolic effects.",
  },
  {
    slug: "fluoxetine",
    name: "Fluoxetine",
    genericName: "fluoxetine",
    category: "CNS",
    drugClass: "SSRI antidepressant",
    target: "Serotonin transporter",
    description:
      "Long-half-life SSRI for depression, OCD, and bulimia. Activating; lower discontinuation syndrome than short-acting SSRIs.",
  },
  {
    slug: "sertraline",
    name: "Sertraline",
    genericName: "sertraline",
    category: "CNS",
    drugClass: "SSRI antidepressant",
    target: "Serotonin transporter",
    description:
      "Well-tolerated first-line SSRI for depression and anxiety disorders, including in pregnancy.",
  },
  {
    slug: "amitriptyline",
    name: "Amitriptyline",
    genericName: "amitriptyline",
    category: "CNS",
    drugClass: "Tricyclic antidepressant",
    target: "Serotonin/norepinephrine reuptake",
    description:
      "TCA used more often for neuropathic pain, migraine prophylaxis, and insomnia than depression. Anticholinergic; lethal in overdose.",
  },
  {
    slug: "morphine",
    name: "Morphine",
    genericName: "morphine",
    category: "CNS",
    drugClass: "Opioid agonist",
    target: "μ-opioid receptor",
    description:
      "Prototype opioid for severe acute and cancer pain. Causes respiratory depression, constipation, and dependence; reversed by naloxone.",
  },
  {
    slug: "naloxone",
    name: "Naloxone",
    genericName: "naloxone",
    category: "CNS",
    drugClass: "Opioid antagonist",
    target: "μ-opioid receptor",
    description:
      "Competitive opioid antagonist that rapidly reverses overdose. Intranasal and IM forms enable community rescue.",
  },
  {
    slug: "gabapentin",
    name: "Gabapentin",
    genericName: "gabapentin",
    category: "CNS",
    drugClass: "Calcium channel α2δ ligand",
    target: "Voltage-gated calcium channel α2δ",
    description:
      "Used for neuropathic pain and as a seizure adjunct. Sedation and dose reduction in renal impairment.",
  },
  {
    slug: "donepezil",
    name: "Donepezil",
    genericName: "donepezil",
    category: "CNS",
    drugClass: "Central AChE inhibitor",
    target: "Acetylcholinesterase (CNS)",
    description:
      "Boosts cortical acetylcholine to modestly slow cognitive decline in Alzheimer disease.",
  },

  // ===== Respiratory =====
  {
    slug: "albuterol",
    name: "Albuterol",
    genericName: "albuterol (salbutamol)",
    category: "Respiratory",
    drugClass: "Short-acting β2 agonist (SABA)",
    target: "β2 adrenoceptor",
    description:
      "Inhaled bronchodilator for acute asthma and COPD attacks. Rapid relief of bronchospasm; tremor and tachycardia at high doses.",
  },
  {
    slug: "salmeterol",
    name: "Salmeterol",
    genericName: "salmeterol",
    category: "Respiratory",
    drugClass: "Long-acting β2 agonist (LABA)",
    target: "β2 adrenoceptor",
    description:
      "Twice-daily bronchodilator for maintenance asthma and COPD. Always combined with an inhaled steroid in asthma.",
  },
  {
    slug: "ipratropium",
    name: "Ipratropium",
    genericName: "ipratropium",
    category: "Respiratory",
    drugClass: "Short-acting muscarinic antagonist",
    target: "Muscarinic receptor (airway)",
    description:
      "Inhaled anticholinergic bronchodilator, especially useful in COPD exacerbations alongside albuterol.",
  },
  {
    slug: "tiotropium",
    name: "Tiotropium",
    genericName: "tiotropium",
    category: "Respiratory",
    drugClass: "Long-acting muscarinic antagonist",
    target: "Muscarinic receptor (airway)",
    description:
      "Once-daily inhaled anticholinergic maintenance therapy for COPD and severe asthma.",
  },
  {
    slug: "fluticasone",
    name: "Fluticasone",
    genericName: "fluticasone",
    category: "Respiratory",
    drugClass: "Inhaled corticosteroid",
    target: "Glucocorticoid receptor",
    description:
      "Inhaled steroid that controls airway inflammation in asthma and COPD. Rinse the mouth to prevent oral thrush.",
  },
  {
    slug: "montelukast",
    name: "Montelukast",
    genericName: "montelukast",
    category: "Respiratory",
    drugClass: "Leukotriene receptor antagonist",
    target: "CysLT1 receptor",
    description:
      "Oral controller for asthma and allergic rhinitis. Neuropsychiatric effects prompted a boxed warning.",
  },
  {
    slug: "theophylline",
    name: "Theophylline",
    genericName: "theophylline",
    category: "Respiratory",
    drugClass: "Methylxanthine",
    target: "Phosphodiesterase / adenosine receptors",
    description:
      "Older oral bronchodilator with a narrow therapeutic window. Toxicity causes arrhythmias and seizures.",
  },
  {
    slug: "dextromethorphan",
    name: "Dextromethorphan",
    genericName: "dextromethorphan",
    category: "Respiratory",
    drugClass: "Central antitussive",
    target: "NMDA / sigma receptors (cough center)",
    description:
      "Over-the-counter cough suppressant. Abuse at high doses produces dissociative effects.",
  },
  {
    slug: "guaifenesin",
    name: "Guaifenesin",
    genericName: "guaifenesin",
    category: "Respiratory",
    drugClass: "Expectorant",
    target: "Respiratory secretions",
    description:
      "Thins and loosens airway mucus to make coughs more productive. Common in combination cold products.",
  },

  // ===== Gastrointestinal =====
  {
    slug: "omeprazole",
    name: "Omeprazole",
    genericName: "omeprazole",
    category: "Gastrointestinal",
    drugClass: "Proton pump inhibitor",
    target: "H+/K+-ATPase",
    description:
      "Irreversibly blocks gastric acid secretion for GERD, ulcers, and H. pylori regimens. Long-term use risks B12 and magnesium deficiency.",
  },
  {
    slug: "pantoprazole",
    name: "Pantoprazole",
    genericName: "pantoprazole",
    category: "Gastrointestinal",
    drugClass: "Proton pump inhibitor",
    target: "H+/K+-ATPase",
    description:
      "IV-friendly PPI for GI bleeding and acid suppression with fewer drug interactions than omeprazole.",
  },
  {
    slug: "famotidine",
    name: "Famotidine",
    genericName: "famotidine",
    category: "Gastrointestinal",
    drugClass: "H2 receptor antagonist",
    target: "Histamine H2 receptor",
    description:
      "Reduces gastric acid for dyspepsia and mild GERD. Faster onset than PPIs but less potent acid suppression.",
  },
  {
    slug: "ondansetron",
    name: "Ondansetron",
    genericName: "ondansetron",
    category: "Gastrointestinal",
    drugClass: "5-HT3 antagonist (antiemetic)",
    target: "5-HT3 receptor",
    description:
      "Blocks serotonin-driven nausea from chemotherapy, surgery, and gastroenteritis. QT prolongation at high doses.",
  },
  {
    slug: "metoclopramide",
    name: "Metoclopramide",
    genericName: "metoclopramide",
    category: "Gastrointestinal",
    drugClass: "Prokinetic / D2 antagonist",
    target: "D2 dopamine receptor",
    description:
      "Speeds gastric emptying and relieves nausea in gastroparesis. Extrapyramidal effects and tardive dyskinesia limit duration.",
  },
  {
    slug: "loperamide",
    name: "Loperamide",
    genericName: "loperamide",
    category: "Gastrointestinal",
    drugClass: "Peripheral opioid agonist",
    target: "μ-opioid receptor (gut)",
    description:
      "Slows gut motility for non-infectious diarrhea without crossing into the CNS at normal doses.",
  },
  {
    slug: "sucralfate",
    name: "Sucralfate",
    genericName: "sucralfate",
    category: "Gastrointestinal",
    drugClass: "Mucosal protectant",
    target: "Ulcer base (physical barrier)",
    description:
      "Forms a protective gel over ulcers. Useful in stress-ulcer prophylaxis and when acid suppression is undesirable.",
  },
  {
    slug: "misoprostol",
    name: "Misoprostol",
    genericName: "misoprostol",
    category: "Gastrointestinal",
    drugClass: "Prostaglandin E1 analog",
    target: "Prostaglandin receptors",
    description:
      "Protects gastric mucosa against NSAID ulcers and is used in obstetrics. Contraindicated in pregnancy when used for ulcers.",
  },
  {
    slug: "mesalamine",
    name: "Mesalamine",
    genericName: "mesalamine (5-ASA)",
    category: "Gastrointestinal",
    drugClass: "Aminosalicylate",
    target: "Intestinal mucosal inflammation",
    description:
      "Topical anti-inflammatory delivered to the colon for ulcerative colitis induction and maintenance.",
  },
  {
    slug: "ursodeoxycholic-acid",
    name: "Ursodiol",
    genericName: "ursodeoxycholic acid",
    category: "Gastrointestinal",
    drugClass: "Bile acid",
    target: "Bile composition",
    description:
      "Reduces cholesterol saturation of bile to dissolve gallstones and treat primary biliary cholangitis.",
  },

  // ===== Endocrine =====
  {
    slug: "insulin-glargine",
    name: "Insulin glargine",
    genericName: "insulin glargine",
    category: "Endocrine",
    drugClass: "Long-acting insulin",
    target: "Insulin receptor",
    description:
      "Once-daily basal insulin providing flat 24-hour coverage in type 1 and type 2 diabetes.",
  },
  {
    slug: "insulin-regular",
    name: "Regular insulin",
    genericName: "insulin (regular)",
    category: "Endocrine",
    drugClass: "Short-acting insulin",
    target: "Insulin receptor",
    description:
      "Short-acting insulin given IV for diabetic ketoacidosis and hyperkalemia, or subcutaneously at meals.",
  },
  {
    slug: "metformin",
    name: "Metformin",
    genericName: "metformin",
    category: "Endocrine",
    drugClass: "Biguanide",
    target: "Hepatic gluconeogenesis / AMPK",
    description:
      "First-line oral agent for type 2 diabetes. Lowers hepatic glucose output without causing hypoglycemia; rare lactic acidosis.",
  },
  {
    slug: "glipizide",
    name: "Glipizide",
    genericName: "glipizide",
    category: "Endocrine",
    drugClass: "Sulfonylurea",
    target: "Pancreatic β-cell K-ATP channel",
    description:
      "Stimulates insulin release from beta cells in type 2 diabetes. Hypoglycemia and weight gain are the main downsides.",
  },
  {
    slug: "empagliflozin",
    name: "Empagliflozin",
    genericName: "empagliflozin",
    category: "Endocrine",
    drugClass: "SGLT2 inhibitor",
    target: "Renal SGLT2 cotransporter",
    description:
      "Promotes urinary glucose loss and provides cardiovascular and kidney protection in diabetes and heart failure.",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    genericName: "semaglutide",
    category: "Endocrine",
    drugClass: "GLP-1 receptor agonist",
    target: "GLP-1 receptor",
    description:
      "Weekly incretin mimetic for type 2 diabetes and obesity. Promotes satiety and weight loss; GI upset is common.",
  },
  {
    slug: "levothyroxine",
    name: "Levothyroxine",
    genericName: "levothyroxine (T4)",
    category: "Endocrine",
    drugClass: "Thyroid hormone",
    target: "Thyroid hormone receptor",
    description:
      "Synthetic T4 and the standard replacement for hypothyroidism. Taken on an empty stomach; dose titrated to TSH.",
  },
  {
    slug: "methimazole",
    name: "Methimazole",
    genericName: "methimazole",
    category: "Endocrine",
    drugClass: "Thionamide (antithyroid)",
    target: "Thyroid peroxidase",
    description:
      "Blocks thyroid hormone synthesis in hyperthyroidism (Graves disease). Rare agranulocytosis; avoid in first-trimester pregnancy.",
  },
  {
    slug: "prednisone",
    name: "Prednisone",
    genericName: "prednisone",
    category: "Endocrine",
    drugClass: "Glucocorticoid",
    target: "Glucocorticoid receptor",
    description:
      "Oral corticosteroid for inflammation, autoimmune disease, and immunosuppression. Long-term use causes Cushingoid effects and osteoporosis.",
  },
  {
    slug: "hydrocortisone",
    name: "Hydrocortisone",
    genericName: "hydrocortisone",
    category: "Endocrine",
    drugClass: "Glucocorticoid",
    target: "Glucocorticoid + mineralocorticoid receptors",
    description:
      "Physiologic steroid replacement for adrenal insufficiency and stress dosing; also a topical anti-inflammatory.",
  },
  {
    slug: "fludrocortisone",
    name: "Fludrocortisone",
    genericName: "fludrocortisone",
    category: "Endocrine",
    drugClass: "Mineralocorticoid",
    target: "Mineralocorticoid receptor",
    description:
      "Potent mineralocorticoid for Addison disease and orthostatic hypotension. Promotes sodium retention and potassium loss.",
  },
  {
    slug: "alendronate",
    name: "Alendronate",
    genericName: "alendronate",
    category: "Endocrine",
    drugClass: "Bisphosphonate",
    target: "Osteoclast farnesyl pyrophosphate synthase",
    description:
      "Inhibits bone resorption in osteoporosis. Take upright with water; risks esophagitis and rare jaw osteonecrosis.",
  },

  // ===== More Autonomic =====
  {
    slug: "dopamine",
    name: "Dopamine",
    genericName: "dopamine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (dose-dependent)",
    target: "Dopamine / β1 / α1 receptors",
    description:
      "Catecholamine vasopressor whose effects shift with dose: dopaminergic at low, β1 inotropic at moderate, α1 vasoconstrictive at high rates.",
  },
  {
    slug: "isoproterenol",
    name: "Isoproterenol",
    genericName: "isoproterenol",
    category: "Autonomic",
    drugClass: "Sympathomimetic (β1/β2 agonist)",
    target: "β1, β2 adrenoceptors",
    description:
      "Nonselective beta agonist that raises heart rate and dilates airways. Used for refractory bradycardia and electrophysiology testing.",
  },
  {
    slug: "ephedrine",
    name: "Ephedrine",
    genericName: "ephedrine",
    category: "Autonomic",
    drugClass: "Sympathomimetic (mixed-acting)",
    target: "α/β adrenoceptors + NE release",
    description:
      "Mixed-acting pressor used for intraoperative hypotension. Also a bronchodilator and decongestant; controlled due to stimulant misuse.",
  },
  {
    slug: "dexmedetomidine",
    name: "Dexmedetomidine",
    genericName: "dexmedetomidine",
    category: "Autonomic",
    drugClass: "Sympatholytic (α2 agonist)",
    target: "Central α2 adrenoceptor",
    description:
      "Central α2 agonist providing sedation without respiratory depression. Widely used for ICU and procedural sedation.",
  },
  {
    slug: "methyldopa",
    name: "Methyldopa",
    genericName: "methyldopa",
    category: "Autonomic",
    drugClass: "Sympatholytic (central α2 agonist)",
    target: "Central α2 adrenoceptor",
    description:
      "Centrally acting antihypertensive and the preferred agent in pregnancy. Can cause a positive Coombs test and hemolytic anemia.",
  },
  {
    slug: "doxazosin",
    name: "Doxazosin",
    genericName: "doxazosin",
    category: "Autonomic",
    drugClass: "Sympatholytic (α1 blocker)",
    target: "α1 adrenoceptor",
    description:
      "Long-acting α1 antagonist for BPH and hypertension. First-dose hypotension and a worse heart-failure outcome than thiazides.",
  },
  {
    slug: "phentolamine",
    name: "Phentolamine",
    genericName: "phentolamine",
    category: "Autonomic",
    drugClass: "Sympatholytic (nonselective α blocker)",
    target: "α1, α2 adrenoceptors",
    description:
      "Reversible alpha blocker for pheochromocytoma crises, extravasation of vasopressors, and cocaine-associated hypertension.",
  },
  {
    slug: "phenoxybenzamine",
    name: "Phenoxybenzamine",
    genericName: "phenoxybenzamine",
    category: "Autonomic",
    drugClass: "Sympatholytic (irreversible α blocker)",
    target: "α1, α2 adrenoceptors",
    description:
      "Irreversible alpha blocker used for preoperative blood-pressure control in pheochromocytoma.",
  },
  {
    slug: "carbachol",
    name: "Carbachol",
    genericName: "carbachol",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (cholinergic agonist)",
    target: "Muscarinic + nicotinic receptors",
    description:
      "Hydrolysis-resistant cholinergic agonist used intraocularly to constrict the pupil during surgery and to lower intraocular pressure.",
  },
  {
    slug: "edrophonium",
    name: "Edrophonium",
    genericName: "edrophonium",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (short AChE inhibitor)",
    target: "Acetylcholinesterase",
    description:
      "Ultra-short cholinesterase inhibitor historically used in the Tensilon test to diagnose myasthenia gravis.",
  },
  {
    slug: "tolterodine",
    name: "Tolterodine",
    genericName: "tolterodine",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "M2/M3 muscarinic receptors",
    description:
      "Antimuscarinic for overactive bladder with better bladder selectivity and fewer CNS effects than oxybutynin.",
  },
  {
    slug: "tropicamide",
    name: "Tropicamide",
    genericName: "tropicamide",
    category: "Autonomic",
    drugClass: "Parasympatholytic (muscarinic antagonist)",
    target: "Muscarinic receptors (eye)",
    description:
      "Short-acting topical antimuscarinic that dilates the pupil and paralyzes accommodation for eye examinations.",
  },
  {
    slug: "pralidoxime",
    name: "Pralidoxime",
    genericName: "pralidoxime (2-PAM)",
    category: "Autonomic",
    drugClass: "Cholinesterase reactivator",
    target: "Phosphorylated acetylcholinesterase",
    description:
      "Regenerates acetylcholinesterase inhibited by organophosphates. Given with atropine for nerve-agent and pesticide poisoning.",
  },

  // ===== More Cardiovascular =====
  {
    slug: "enalapril",
    name: "Enalapril",
    genericName: "enalapril",
    category: "Cardiovascular",
    drugClass: "ACE inhibitor",
    target: "Angiotensin-converting enzyme",
    description:
      "Prodrug ACE inhibitor for hypertension and heart failure. Shares the cough and angioedema class effects.",
  },
  {
    slug: "valsartan",
    name: "Valsartan",
    genericName: "valsartan",
    category: "Cardiovascular",
    drugClass: "Angiotensin receptor blocker",
    target: "AT1 receptor",
    description:
      "ARB for hypertension and heart failure; a component of the sacubitril–valsartan combination.",
  },
  {
    slug: "sacubitril-valsartan",
    name: "Sacubitril–valsartan",
    genericName: "sacubitril + valsartan",
    category: "Cardiovascular",
    drugClass: "ARNI",
    target: "Neprilysin + AT1 receptor",
    description:
      "Entresto. Combines a neprilysin inhibitor with an ARB and is superior to ACE inhibitors in heart failure with reduced EF.",
  },
  {
    slug: "nifedipine",
    name: "Nifedipine",
    genericName: "nifedipine",
    category: "Cardiovascular",
    drugClass: "Dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (vascular)",
    description:
      "Vasoselective CCB for hypertension and Raynaud phenomenon; also used as a tocolytic in preterm labor.",
  },
  {
    slug: "verapamil",
    name: "Verapamil",
    genericName: "verapamil",
    category: "Cardiovascular",
    drugClass: "Non-dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (cardiac)",
    description:
      "Rate-controlling CCB for SVT and atrial fibrillation; also used in cluster headache. Causes constipation and can worsen heart failure.",
  },
  {
    slug: "atenolol",
    name: "Atenolol",
    genericName: "atenolol",
    category: "Cardiovascular",
    drugClass: "β1-selective beta blocker",
    target: "β1 adrenoceptor",
    description:
      "Renally cleared cardioselective beta blocker for hypertension and angina.",
  },
  {
    slug: "propranolol",
    name: "Propranolol",
    genericName: "propranolol",
    category: "Cardiovascular",
    drugClass: "Nonselective beta blocker",
    target: "β1, β2 adrenoceptors",
    description:
      "Nonselective beta blocker for arrhythmia, performance anxiety, essential tremor, migraine prophylaxis, and thyrotoxicosis.",
  },
  {
    slug: "labetalol",
    name: "Labetalol",
    genericName: "labetalol",
    category: "Cardiovascular",
    drugClass: "Combined α/β blocker",
    target: "α1, β1, β2 adrenoceptors",
    description:
      "IV/oral alpha-beta blocker favored for hypertensive emergencies and hypertension in pregnancy.",
  },
  {
    slug: "isosorbide-dinitrate",
    name: "Isosorbide dinitrate",
    genericName: "isosorbide dinitrate",
    category: "Cardiovascular",
    drugClass: "Nitrate vasodilator",
    target: "Nitric oxide / guanylate cyclase",
    description:
      "Long-acting oral nitrate for chronic angina and, with hydralazine, for heart failure. Requires a nitrate-free interval.",
  },
  {
    slug: "rosuvastatin",
    name: "Rosuvastatin",
    genericName: "rosuvastatin",
    category: "Cardiovascular",
    drugClass: "HMG-CoA reductase inhibitor (statin)",
    target: "HMG-CoA reductase",
    description:
      "High-intensity statin producing large LDL reductions with a long half-life.",
  },
  {
    slug: "ezetimibe",
    name: "Ezetimibe",
    genericName: "ezetimibe",
    category: "Cardiovascular",
    drugClass: "Cholesterol absorption inhibitor",
    target: "NPC1L1 transporter",
    description:
      "Blocks intestinal cholesterol absorption. Added to statins for further LDL lowering.",
  },
  {
    slug: "evolocumab",
    name: "Evolocumab",
    genericName: "evolocumab",
    category: "Cardiovascular",
    drugClass: "PCSK9 inhibitor",
    target: "PCSK9",
    description:
      "Injectable monoclonal antibody that dramatically lowers LDL in familial hypercholesterolemia and high-risk patients.",
  },
  {
    slug: "fenofibrate",
    name: "Fenofibrate",
    genericName: "fenofibrate",
    category: "Cardiovascular",
    drugClass: "Fibrate",
    target: "PPAR-α",
    description:
      "Activates PPAR-α to lower triglycerides. Used for severe hypertriglyceridemia to prevent pancreatitis.",
  },
  {
    slug: "rivaroxaban",
    name: "Rivaroxaban",
    genericName: "rivaroxaban",
    category: "Cardiovascular",
    drugClass: "Direct factor Xa inhibitor",
    target: "Factor Xa",
    description:
      "Once-daily DOAC for atrial fibrillation and venous thromboembolism. Reversed by andexanet alfa.",
  },
  {
    slug: "dabigatran",
    name: "Dabigatran",
    genericName: "dabigatran",
    category: "Cardiovascular",
    drugClass: "Direct thrombin inhibitor",
    target: "Thrombin (factor IIa)",
    description:
      "Oral direct thrombin inhibitor for atrial fibrillation and VTE; rapidly reversed by idarucizumab.",
  },
  {
    slug: "enoxaparin",
    name: "Enoxaparin",
    genericName: "enoxaparin",
    category: "Cardiovascular",
    drugClass: "Low-molecular-weight heparin",
    target: "Factor Xa (via antithrombin)",
    description:
      "Subcutaneous LMWH for VTE prophylaxis and treatment and ACS. More predictable than unfractionated heparin.",
  },
  {
    slug: "heparin",
    name: "Heparin",
    genericName: "unfractionated heparin",
    category: "Cardiovascular",
    drugClass: "Anticoagulant (antithrombin activator)",
    target: "Antithrombin → factors IIa/Xa",
    description:
      "IV anticoagulant monitored by aPTT and reversed by protamine. Risk of heparin-induced thrombocytopenia.",
  },
  {
    slug: "ticagrelor",
    name: "Ticagrelor",
    genericName: "ticagrelor",
    category: "Cardiovascular",
    drugClass: "P2Y12 antiplatelet",
    target: "Platelet P2Y12 receptor",
    description:
      "Reversible antiplatelet for acute coronary syndromes, often more potent than clopidogrel. Causes dyspnea in some patients.",
  },
  {
    slug: "aspirin",
    name: "Aspirin",
    genericName: "acetylsalicylic acid",
    category: "Cardiovascular",
    drugClass: "COX inhibitor (antiplatelet)",
    target: "Cyclooxygenase-1",
    description:
      "Irreversibly inhibits platelet COX-1 at low dose for cardiovascular prevention; also analgesic and antipyretic at higher doses.",
  },
  {
    slug: "adenosine",
    name: "Adenosine",
    genericName: "adenosine",
    category: "Cardiovascular",
    drugClass: "Antiarrhythmic (nucleoside)",
    target: "A1 adenosine receptor (AV node)",
    description:
      "Transiently blocks AV-node conduction to terminate supraventricular tachycardia. Very short half-life with a brief sense of impending doom.",
  },
  {
    slug: "milrinone",
    name: "Milrinone",
    genericName: "milrinone",
    category: "Cardiovascular",
    drugClass: "Phosphodiesterase-3 inhibitor",
    target: "Phosphodiesterase 3",
    description:
      "Inodilator that increases contractility and dilates vessels in acute decompensated heart failure.",
  },
  {
    slug: "flecainide",
    name: "Flecainide",
    genericName: "flecainide",
    category: "Cardiovascular",
    drugClass: "Class Ic antiarrhythmic",
    target: "Cardiac sodium channel",
    description:
      "Maintains sinus rhythm in atrial fibrillation without structural heart disease. Pro-arrhythmic in ischemia or scarring.",
  },

  // ===== More Diuretics =====
  {
    slug: "torsemide",
    name: "Torsemide",
    genericName: "torsemide",
    category: "Diuretic",
    drugClass: "Loop diuretic",
    target: "Na-K-2Cl cotransporter",
    description:
      "Long-acting, reliably absorbed loop diuretic increasingly preferred in chronic heart failure.",
  },
  {
    slug: "ethacrynic-acid",
    name: "Ethacrynic acid",
    genericName: "ethacrynic acid",
    category: "Diuretic",
    drugClass: "Loop diuretic (non-sulfonamide)",
    target: "Na-K-2Cl cotransporter",
    description:
      "The only non-sulfonamide loop diuretic, used when patients have a true sulfa allergy. More ototoxic than furosemide.",
  },
  {
    slug: "metolazone",
    name: "Metolazone",
    genericName: "metolazone",
    category: "Diuretic",
    drugClass: "Thiazide-like diuretic",
    target: "Na-Cl cotransporter",
    description:
      "Thiazide-like agent that retains effect in renal impairment and synergizes with loop diuretics in resistant edema.",
  },
  {
    slug: "indapamide",
    name: "Indapamide",
    genericName: "indapamide",
    category: "Diuretic",
    drugClass: "Thiazide-like diuretic",
    target: "Na-Cl cotransporter",
    description:
      "Thiazide-like diuretic for hypertension with relatively favorable metabolic effects.",
  },
  {
    slug: "triamterene",
    name: "Triamterene",
    genericName: "triamterene",
    category: "Diuretic",
    drugClass: "Potassium-sparing (ENaC blocker)",
    target: "Epithelial sodium channel",
    description:
      "Blocks the collecting-duct sodium channel; combined with hydrochlorothiazide to limit potassium loss.",
  },
  {
    slug: "tolvaptan",
    name: "Tolvaptan",
    genericName: "tolvaptan",
    category: "Diuretic",
    drugClass: "Vasopressin V2 antagonist (vaptan)",
    target: "V2 receptor (collecting duct)",
    description:
      "Promotes free-water excretion in hypervolemic and euvolemic hyponatremia and slows polycystic kidney disease. Hepatotoxicity is a concern.",
  },

  // ===== More Antineoplastics =====
  {
    slug: "carboplatin",
    name: "Carboplatin",
    genericName: "carboplatin",
    category: "Antineoplastic",
    drugClass: "Platinum agent",
    target: "DNA cross-linking",
    description:
      "Better-tolerated platinum than cisplatin with myelosuppression rather than nephrotoxicity. Dosed by renal-function AUC.",
  },
  {
    slug: "oxaliplatin",
    name: "Oxaliplatin",
    genericName: "oxaliplatin",
    category: "Antineoplastic",
    drugClass: "Platinum agent",
    target: "DNA cross-linking",
    description:
      "Platinum agent central to colorectal-cancer regimens (FOLFOX). Causes a distinctive cold-triggered peripheral neuropathy.",
  },
  {
    slug: "gemcitabine",
    name: "Gemcitabine",
    genericName: "gemcitabine",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (nucleoside analog)",
    target: "DNA synthesis / ribonucleotide reductase",
    description:
      "Pyrimidine analog for pancreatic, lung, and bladder cancers.",
  },
  {
    slug: "capecitabine",
    name: "Capecitabine",
    genericName: "capecitabine",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (5-FU prodrug)",
    target: "Thymidylate synthase",
    description:
      "Oral prodrug converted to 5-FU in tumor tissue. Used in colorectal and breast cancer; causes hand-foot syndrome.",
  },
  {
    slug: "mercaptopurine",
    name: "6-Mercaptopurine",
    genericName: "mercaptopurine (6-MP)",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (purine analog)",
    target: "Purine synthesis",
    description:
      "Maintenance therapy in acute lymphoblastic leukemia and for IBD. Toxicity rises with TPMT deficiency and allopurinol.",
  },
  {
    slug: "bleomycin",
    name: "Bleomycin",
    genericName: "bleomycin",
    category: "Antineoplastic",
    drugClass: "Antitumor antibiotic",
    target: "DNA strand breaks (free radicals)",
    description:
      "Glycopeptide used in lymphoma and germ-cell tumors. Dose-limiting pulmonary fibrosis; minimal myelosuppression.",
  },
  {
    slug: "vinblastine",
    name: "Vinblastine",
    genericName: "vinblastine",
    category: "Antineoplastic",
    drugClass: "Vinca alkaloid",
    target: "Microtubules (depolymerization)",
    description:
      "Vinca alkaloid in Hodgkin lymphoma and testicular cancer. More myelosuppressive and less neurotoxic than vincristine.",
  },
  {
    slug: "docetaxel",
    name: "Docetaxel",
    genericName: "docetaxel",
    category: "Antineoplastic",
    drugClass: "Taxane",
    target: "Microtubules (stabilization)",
    description:
      "Taxane for breast, prostate, and lung cancers. Causes neutropenia and fluid retention.",
  },
  {
    slug: "irinotecan",
    name: "Irinotecan",
    genericName: "irinotecan",
    category: "Antineoplastic",
    drugClass: "Topoisomerase I inhibitor",
    target: "Topoisomerase I",
    description:
      "Colorectal-cancer agent (FOLFIRI). Acute cholinergic diarrhea and delayed diarrhea are dose-limiting.",
  },
  {
    slug: "temozolomide",
    name: "Temozolomide",
    genericName: "temozolomide",
    category: "Antineoplastic",
    drugClass: "Alkylating agent",
    target: "DNA methylation (O6-guanine)",
    description:
      "Oral alkylator that crosses the blood-brain barrier; standard for glioblastoma with radiation.",
  },
  {
    slug: "ifosfamide",
    name: "Ifosfamide",
    genericName: "ifosfamide",
    category: "Antineoplastic",
    drugClass: "Alkylating agent",
    target: "DNA cross-linking",
    description:
      "Alkylator for sarcomas and germ-cell tumors. Hemorrhagic cystitis (give mesna) and neurotoxic encephalopathy.",
  },
  {
    slug: "erlotinib",
    name: "Erlotinib",
    genericName: "erlotinib",
    category: "Antineoplastic",
    drugClass: "EGFR tyrosine kinase inhibitor",
    target: "EGFR",
    description:
      "Targets EGFR-mutant non-small-cell lung cancer. An acneiform rash often correlates with response.",
  },
  {
    slug: "bevacizumab",
    name: "Bevacizumab",
    genericName: "bevacizumab",
    category: "Antineoplastic",
    drugClass: "Anti-VEGF monoclonal antibody",
    target: "VEGF-A",
    description:
      "Blocks tumor angiogenesis across several solid tumors. Impairs wound healing and raises bleeding and hypertension risk.",
  },
  {
    slug: "nivolumab",
    name: "Nivolumab",
    genericName: "nivolumab",
    category: "Antineoplastic",
    drugClass: "PD-1 checkpoint inhibitor",
    target: "PD-1 receptor",
    description:
      "Checkpoint inhibitor for melanoma, lung, renal, and other cancers. Immune-related adverse events affect many organs.",
  },
  {
    slug: "venetoclax",
    name: "Venetoclax",
    genericName: "venetoclax",
    category: "Antineoplastic",
    drugClass: "BCL-2 inhibitor",
    target: "BCL-2",
    description:
      "Pro-apoptotic agent for CLL and AML. Rapid cell kill can trigger dangerous tumor lysis syndrome.",
  },
  {
    slug: "anastrozole",
    name: "Anastrozole",
    genericName: "anastrozole",
    category: "Antineoplastic",
    drugClass: "Aromatase inhibitor",
    target: "Aromatase",
    description:
      "Blocks peripheral estrogen synthesis in postmenopausal hormone-receptor-positive breast cancer. Causes arthralgia and bone loss.",
  },
  {
    slug: "leuprolide",
    name: "Leuprolide",
    genericName: "leuprolide",
    category: "Antineoplastic",
    drugClass: "GnRH agonist",
    target: "GnRH receptor",
    description:
      "Continuous GnRH agonism suppresses sex hormones in prostate cancer and endometriosis after an initial flare.",
  },
  {
    slug: "hydroxyurea",
    name: "Hydroxyurea",
    genericName: "hydroxyurea",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (ribonucleotide reductase inhibitor)",
    target: "Ribonucleotide reductase",
    description:
      "Cytoreductive in myeloproliferative disorders; raises fetal hemoglobin to reduce sickle-cell crises.",
  },

  // ===== More CNS / neuropsychiatric =====
  {
    slug: "midazolam",
    name: "Midazolam",
    genericName: "midazolam",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Short-acting benzodiazepine for procedural sedation, induction, and status epilepticus (including intranasal/IM).",
  },
  {
    slug: "alprazolam",
    name: "Alprazolam",
    genericName: "alprazolam",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Short-acting benzodiazepine for panic and anxiety. High abuse and dependence potential with difficult withdrawal.",
  },
  {
    slug: "zolpidem",
    name: "Zolpidem",
    genericName: "zolpidem",
    category: "CNS",
    drugClass: "Non-benzodiazepine hypnotic (Z-drug)",
    target: "GABA-A (α1 subunit)",
    description:
      "Selective hypnotic for insomnia with less anxiolytic effect than benzodiazepines. Complex sleep behaviors can occur.",
  },
  {
    slug: "carbamazepine",
    name: "Carbamazepine",
    genericName: "carbamazepine",
    category: "CNS",
    drugClass: "Antiepileptic (Na+ channel blocker)",
    target: "Voltage-gated sodium channel",
    description:
      "First-line for focal seizures and trigeminal neuralgia. Induces CYP enzymes; risks SJS (HLA-B*1502) and hyponatremia.",
  },
  {
    slug: "lamotrigine",
    name: "Lamotrigine",
    genericName: "lamotrigine",
    category: "CNS",
    drugClass: "Antiepileptic / mood stabilizer",
    target: "Voltage-gated sodium channel",
    description:
      "Broad anticonvulsant and bipolar maintenance agent. Slow titration is required to avoid Stevens-Johnson syndrome.",
  },
  {
    slug: "topiramate",
    name: "Topiramate",
    genericName: "topiramate",
    category: "CNS",
    drugClass: "Antiepileptic (multi-mechanism)",
    target: "Na+ channels / GABA / AMPA",
    description:
      "Anticonvulsant also used for migraine prophylaxis and weight loss. Causes paresthesias, cognitive slowing, and kidney stones.",
  },
  {
    slug: "phenobarbital",
    name: "Phenobarbital",
    genericName: "phenobarbital",
    category: "CNS",
    drugClass: "Barbiturate",
    target: "GABA-A receptor",
    description:
      "Long-acting barbiturate anticonvulsant, still important in neonatal seizures and resource-limited settings. Potent enzyme inducer.",
  },
  {
    slug: "lithium",
    name: "Lithium",
    genericName: "lithium carbonate",
    category: "CNS",
    drugClass: "Mood stabilizer",
    target: "Inositol / GSK-3 signaling",
    description:
      "Gold-standard bipolar mood stabilizer that reduces suicide risk. Narrow therapeutic index with renal and thyroid effects.",
  },
  {
    slug: "olanzapine",
    name: "Olanzapine",
    genericName: "olanzapine",
    category: "CNS",
    drugClass: "Atypical antipsychotic",
    target: "D2 / 5-HT2A receptors",
    description:
      "Effective antipsychotic and antiemetic with significant weight gain and metabolic syndrome risk.",
  },
  {
    slug: "quetiapine",
    name: "Quetiapine",
    genericName: "quetiapine",
    category: "CNS",
    drugClass: "Atypical antipsychotic",
    target: "D2 / 5-HT2A / H1 receptors",
    description:
      "Sedating antipsychotic used in schizophrenia, bipolar disorder, and as adjunct in depression.",
  },
  {
    slug: "clozapine",
    name: "Clozapine",
    genericName: "clozapine",
    category: "CNS",
    drugClass: "Atypical antipsychotic",
    target: "D4 / 5-HT2A receptors",
    description:
      "Most effective drug for treatment-resistant schizophrenia and reduces suicidality, but requires ANC monitoring for agranulocytosis.",
  },
  {
    slug: "escitalopram",
    name: "Escitalopram",
    genericName: "escitalopram",
    category: "CNS",
    drugClass: "SSRI antidepressant",
    target: "Serotonin transporter",
    description:
      "Well-tolerated SSRI for depression and generalized anxiety with few drug interactions.",
  },
  {
    slug: "venlafaxine",
    name: "Venlafaxine",
    genericName: "venlafaxine",
    category: "CNS",
    drugClass: "SNRI antidepressant",
    target: "Serotonin/norepinephrine reuptake",
    description:
      "SNRI for depression and anxiety; raises blood pressure at higher doses and has a notable discontinuation syndrome.",
  },
  {
    slug: "duloxetine",
    name: "Duloxetine",
    genericName: "duloxetine",
    category: "CNS",
    drugClass: "SNRI antidepressant",
    target: "Serotonin/norepinephrine reuptake",
    description:
      "SNRI used for depression plus neuropathic pain, fibromyalgia, and stress incontinence.",
  },
  {
    slug: "bupropion",
    name: "Bupropion",
    genericName: "bupropion",
    category: "CNS",
    drugClass: "NDRI antidepressant",
    target: "Norepinephrine/dopamine reuptake",
    description:
      "Activating antidepressant and smoking-cessation aid without sexual side effects. Lowers the seizure threshold.",
  },
  {
    slug: "fentanyl",
    name: "Fentanyl",
    genericName: "fentanyl",
    category: "CNS",
    drugClass: "Opioid agonist",
    target: "μ-opioid receptor",
    description:
      "Potent short-acting synthetic opioid for anesthesia and severe pain. A leading driver of overdose deaths from illicit supply.",
  },
  {
    slug: "oxycodone",
    name: "Oxycodone",
    genericName: "oxycodone",
    category: "CNS",
    drugClass: "Opioid agonist",
    target: "μ-opioid receptor",
    description:
      "Oral opioid for moderate-to-severe pain with high abuse liability.",
  },
  {
    slug: "buprenorphine",
    name: "Buprenorphine",
    genericName: "buprenorphine",
    category: "CNS",
    drugClass: "Partial opioid agonist",
    target: "μ-opioid receptor (partial)",
    description:
      "Partial agonist with a ceiling on respiratory depression. Cornerstone of opioid-use-disorder treatment, often with naloxone.",
  },
  {
    slug: "memantine",
    name: "Memantine",
    genericName: "memantine",
    category: "CNS",
    drugClass: "NMDA receptor antagonist",
    target: "NMDA receptor",
    description:
      "Modulates glutamate excitotoxicity in moderate-to-severe Alzheimer disease, often added to a cholinesterase inhibitor.",
  },
  {
    slug: "sumatriptan",
    name: "Sumatriptan",
    genericName: "sumatriptan",
    category: "CNS",
    drugClass: "Triptan (5-HT1B/1D agonist)",
    target: "5-HT1B/1D receptors",
    description:
      "Aborts acute migraine by constricting cranial vessels and inhibiting neuropeptide release. Avoid in coronary disease.",
  },
  {
    slug: "propofol",
    name: "Propofol",
    genericName: "propofol",
    category: "CNS",
    drugClass: "General anesthetic",
    target: "GABA-A receptor",
    description:
      "Rapid-onset IV anesthetic for induction and ICU sedation. Causes hypotension and rare propofol infusion syndrome.",
  },
  {
    slug: "ketamine",
    name: "Ketamine",
    genericName: "ketamine",
    category: "CNS",
    drugClass: "Dissociative anesthetic",
    target: "NMDA receptor",
    description:
      "Dissociative anesthetic preserving airway reflexes; also used for refractory depression and analgesia.",
  },
  {
    slug: "lidocaine",
    name: "Lidocaine",
    genericName: "lidocaine",
    category: "CNS",
    drugClass: "Local anesthetic / class Ib antiarrhythmic",
    target: "Voltage-gated sodium channel",
    description:
      "Amide local anesthetic for infiltration and nerve blocks; also treats ventricular arrhythmias.",
  },

  // ===== More Respiratory =====
  {
    slug: "formoterol",
    name: "Formoterol",
    genericName: "formoterol",
    category: "Respiratory",
    drugClass: "Long-acting β2 agonist (LABA)",
    target: "β2 adrenoceptor",
    description:
      "Fast-onset LABA used in combination inhalers for asthma and COPD maintenance.",
  },
  {
    slug: "budesonide",
    name: "Budesonide",
    genericName: "budesonide",
    category: "Respiratory",
    drugClass: "Inhaled corticosteroid",
    target: "Glucocorticoid receptor",
    description:
      "Inhaled steroid for asthma and COPD; an oral form targets the gut in Crohn disease.",
  },
  {
    slug: "roflumilast",
    name: "Roflumilast",
    genericName: "roflumilast",
    category: "Respiratory",
    drugClass: "Phosphodiesterase-4 inhibitor",
    target: "Phosphodiesterase 4",
    description:
      "Oral anti-inflammatory that reduces exacerbations in severe COPD with chronic bronchitis. Causes weight loss and GI upset.",
  },
  {
    slug: "omalizumab",
    name: "Omalizumab",
    genericName: "omalizumab",
    category: "Respiratory",
    drugClass: "Anti-IgE monoclonal antibody",
    target: "IgE",
    description:
      "Injectable biologic for severe allergic asthma and chronic urticaria; lowers free IgE.",
  },
  {
    slug: "cromolyn",
    name: "Cromolyn sodium",
    genericName: "cromolyn",
    category: "Respiratory",
    drugClass: "Mast cell stabilizer",
    target: "Mast cell degranulation",
    description:
      "Prophylactic mast-cell stabilizer for asthma and allergic rhinitis; no role in acute attacks.",
  },
  {
    slug: "benzonatate",
    name: "Benzonatate",
    genericName: "benzonatate",
    category: "Respiratory",
    drugClass: "Peripheral antitussive",
    target: "Pulmonary stretch receptors",
    description:
      "Numbs airway stretch receptors to suppress cough. Dangerous if chewed (oropharyngeal anesthesia) and toxic in overdose.",
  },
  {
    slug: "acetylcysteine",
    name: "Acetylcysteine",
    genericName: "N-acetylcysteine",
    category: "Respiratory",
    drugClass: "Mucolytic / antidote",
    target: "Mucus disulfide bonds / glutathione",
    description:
      "Breaks up thick mucus and is the antidote for acetaminophen overdose by replenishing glutathione.",
  },
  {
    slug: "pirfenidone",
    name: "Pirfenidone",
    genericName: "pirfenidone",
    category: "Respiratory",
    drugClass: "Antifibrotic",
    target: "TGF-β signaling",
    description:
      "Slows the decline in lung function in idiopathic pulmonary fibrosis. Causes photosensitivity and GI upset.",
  },
  {
    slug: "dornase-alfa",
    name: "Dornase alfa",
    genericName: "dornase alfa",
    category: "Respiratory",
    drugClass: "Recombinant DNase",
    target: "Extracellular DNA in sputum",
    description:
      "Inhaled enzyme that cleaves neutrophil DNA to thin cystic-fibrosis mucus and improve lung function.",
  },

  // ===== More Gastrointestinal =====
  {
    slug: "esomeprazole",
    name: "Esomeprazole",
    genericName: "esomeprazole",
    category: "Gastrointestinal",
    drugClass: "Proton pump inhibitor",
    target: "H+/K+-ATPase",
    description:
      "S-enantiomer of omeprazole for GERD and erosive esophagitis.",
  },
  {
    slug: "lansoprazole",
    name: "Lansoprazole",
    genericName: "lansoprazole",
    category: "Gastrointestinal",
    drugClass: "Proton pump inhibitor",
    target: "H+/K+-ATPase",
    description:
      "PPI for peptic ulcer disease, GERD, and as part of H. pylori eradication.",
  },
  {
    slug: "cimetidine",
    name: "Cimetidine",
    genericName: "cimetidine",
    category: "Gastrointestinal",
    drugClass: "H2 receptor antagonist",
    target: "Histamine H2 receptor",
    description:
      "Older H2 blocker notable for inhibiting CYP450 and causing gynecomastia; many drug interactions.",
  },
  {
    slug: "bismuth-subsalicylate",
    name: "Bismuth subsalicylate",
    genericName: "bismuth subsalicylate",
    category: "Gastrointestinal",
    drugClass: "Antidiarrheal / mucosal agent",
    target: "GI mucosa / bacterial coating",
    description:
      "Pepto-Bismol. Treats dyspepsia and traveler's diarrhea and is part of quadruple H. pylori therapy; harmlessly blackens the tongue and stool.",
  },
  {
    slug: "polyethylene-glycol",
    name: "Polyethylene glycol",
    genericName: "polyethylene glycol 3350",
    category: "Gastrointestinal",
    drugClass: "Osmotic laxative",
    target: "Intraluminal osmotic gradient",
    description:
      "Non-absorbed osmotic laxative for constipation and a component of colonoscopy bowel prep.",
  },
  {
    slug: "lactulose",
    name: "Lactulose",
    genericName: "lactulose",
    category: "Gastrointestinal",
    drugClass: "Osmotic laxative",
    target: "Colonic osmotic gradient / ammonia trapping",
    description:
      "Osmotic laxative that also lowers blood ammonia in hepatic encephalopathy by trapping it as ammonium in the colon.",
  },
  {
    slug: "bisacodyl",
    name: "Bisacodyl",
    genericName: "bisacodyl",
    category: "Gastrointestinal",
    drugClass: "Stimulant laxative",
    target: "Enteric nerves / colonic motility",
    description:
      "Stimulant laxative for constipation and bowel prep that increases colonic peristalsis.",
  },
  {
    slug: "promethazine",
    name: "Promethazine",
    genericName: "promethazine",
    category: "Gastrointestinal",
    drugClass: "Antiemetic (H1 antihistamine)",
    target: "H1 / D2 receptors",
    description:
      "Sedating antiemetic for nausea and motion sickness. Tissue-necrotic if extravasated IV.",
  },
  {
    slug: "aprepitant",
    name: "Aprepitant",
    genericName: "aprepitant",
    category: "Gastrointestinal",
    drugClass: "NK1 receptor antagonist",
    target: "Neurokinin-1 receptor",
    description:
      "Prevents delayed chemotherapy-induced nausea, added to a 5-HT3 antagonist and dexamethasone.",
  },
  {
    slug: "dicyclomine",
    name: "Dicyclomine",
    genericName: "dicyclomine",
    category: "Gastrointestinal",
    drugClass: "Antispasmodic (antimuscarinic)",
    target: "Muscarinic receptors (gut)",
    description:
      "Antispasmodic that relaxes intestinal smooth muscle in irritable bowel syndrome.",
  },
  {
    slug: "octreotide",
    name: "Octreotide",
    genericName: "octreotide",
    category: "Gastrointestinal",
    drugClass: "Somatostatin analog",
    target: "Somatostatin receptors",
    description:
      "Reduces splanchnic blood flow and secretions; used for variceal bleeding, secretory diarrhea, and acromegaly.",
  },
  {
    slug: "sulfasalazine",
    name: "Sulfasalazine",
    genericName: "sulfasalazine",
    category: "Gastrointestinal",
    drugClass: "Aminosalicylate",
    target: "Intestinal mucosal inflammation",
    description:
      "5-ASA linked to a sulfa carrier for ulcerative colitis and rheumatoid arthritis. Reversible oligospermia and folate interference.",
  },
  {
    slug: "infliximab",
    name: "Infliximab",
    genericName: "infliximab",
    category: "Gastrointestinal",
    drugClass: "Anti-TNF monoclonal antibody",
    target: "Tumor necrosis factor-α",
    description:
      "Biologic for moderate-to-severe Crohn disease and ulcerative colitis (and other autoimmune disease). Screen for latent TB first.",
  },
  {
    slug: "granisetron",
    name: "Granisetron",
    genericName: "granisetron",
    category: "Gastrointestinal",
    drugClass: "5-HT3 antagonist (antiemetic)",
    target: "5-HT3 receptor",
    description:
      "Long-acting serotonin antagonist for chemotherapy- and radiation-induced nausea, available as a transdermal patch.",
  },

  // ===== More Endocrine =====
  {
    slug: "insulin-lispro",
    name: "Insulin lispro",
    genericName: "insulin lispro",
    category: "Endocrine",
    drugClass: "Rapid-acting insulin",
    target: "Insulin receptor",
    description:
      "Rapid-acting mealtime insulin analog with quick onset and short duration for prandial coverage and pumps.",
  },
  {
    slug: "glyburide",
    name: "Glyburide",
    genericName: "glyburide",
    category: "Endocrine",
    drugClass: "Sulfonylurea",
    target: "Pancreatic β-cell K-ATP channel",
    description:
      "Longer-acting sulfonylurea with higher hypoglycemia risk, especially in the elderly and renal impairment.",
  },
  {
    slug: "glimepiride",
    name: "Glimepiride",
    genericName: "glimepiride",
    category: "Endocrine",
    drugClass: "Sulfonylurea",
    target: "Pancreatic β-cell K-ATP channel",
    description:
      "Once-daily sulfonylurea for type 2 diabetes that stimulates insulin secretion.",
  },
  {
    slug: "pioglitazone",
    name: "Pioglitazone",
    genericName: "pioglitazone",
    category: "Endocrine",
    drugClass: "Thiazolidinedione",
    target: "PPAR-γ",
    description:
      "Insulin sensitizer for type 2 diabetes. Causes fluid retention and weight gain; avoid in heart failure.",
  },
  {
    slug: "sitagliptin",
    name: "Sitagliptin",
    genericName: "sitagliptin",
    category: "Endocrine",
    drugClass: "DPP-4 inhibitor",
    target: "Dipeptidyl peptidase-4",
    description:
      "Oral incretin enhancer for type 2 diabetes that is weight-neutral with low hypoglycemia risk.",
  },
  {
    slug: "canagliflozin",
    name: "Canagliflozin",
    genericName: "canagliflozin",
    category: "Endocrine",
    drugClass: "SGLT2 inhibitor",
    target: "Renal SGLT2 cotransporter",
    description:
      "Promotes urinary glucose excretion with cardiorenal benefit; raises genital infection and ketoacidosis risk.",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    genericName: "tirzepatide",
    category: "Endocrine",
    drugClass: "GIP/GLP-1 receptor agonist",
    target: "GIP + GLP-1 receptors",
    description:
      "Dual incretin agonist with marked glucose lowering and weight loss in type 2 diabetes and obesity.",
  },
  {
    slug: "acarbose",
    name: "Acarbose",
    genericName: "acarbose",
    category: "Endocrine",
    drugClass: "α-glucosidase inhibitor",
    target: "Intestinal α-glucosidase",
    description:
      "Slows carbohydrate absorption to blunt postprandial glucose spikes. Flatulence limits adherence.",
  },
  {
    slug: "glucagon",
    name: "Glucagon",
    genericName: "glucagon",
    category: "Endocrine",
    drugClass: "Counter-regulatory hormone",
    target: "Glucagon receptor",
    description:
      "Raises blood glucose for severe hypoglycemia rescue; also reverses beta-blocker overdose.",
  },
  {
    slug: "propylthiouracil",
    name: "Propylthiouracil",
    genericName: "propylthiouracil (PTU)",
    category: "Endocrine",
    drugClass: "Thionamide (antithyroid)",
    target: "Thyroid peroxidase + peripheral deiodinase",
    description:
      "Antithyroid drug preferred in the first trimester and thyroid storm. Rare but serious hepatotoxicity.",
  },
  {
    slug: "liothyronine",
    name: "Liothyronine",
    genericName: "liothyronine (T3)",
    category: "Endocrine",
    drugClass: "Thyroid hormone",
    target: "Thyroid hormone receptor",
    description:
      "Synthetic T3 used in myxedema coma and select hypothyroid cases needing rapid onset.",
  },
  {
    slug: "dexamethasone",
    name: "Dexamethasone",
    genericName: "dexamethasone",
    category: "Endocrine",
    drugClass: "Glucocorticoid",
    target: "Glucocorticoid receptor",
    description:
      "Long-acting, highly potent steroid for cerebral edema, croup, COVID-19, and chemotherapy nausea; minimal mineralocorticoid effect.",
  },
  {
    slug: "desmopressin",
    name: "Desmopressin",
    genericName: "desmopressin (DDAVP)",
    category: "Endocrine",
    drugClass: "Vasopressin analog",
    target: "V2 receptor",
    description:
      "ADH analog for central diabetes insipidus, nocturnal enuresis, and mild hemophilia A / von Willebrand disease.",
  },
  {
    slug: "cabergoline",
    name: "Cabergoline",
    genericName: "cabergoline",
    category: "Endocrine",
    drugClass: "Dopamine agonist",
    target: "D2 receptor (pituitary)",
    description:
      "Suppresses prolactin in prolactinomas and hyperprolactinemia; also used to stop lactation.",
  },
  {
    slug: "somatropin",
    name: "Somatropin",
    genericName: "somatropin",
    category: "Endocrine",
    drugClass: "Recombinant growth hormone",
    target: "Growth hormone receptor",
    description:
      "Recombinant GH for childhood growth-hormone deficiency and certain growth disorders.",
  },
  {
    slug: "teriparatide",
    name: "Teriparatide",
    genericName: "teriparatide",
    category: "Endocrine",
    drugClass: "Recombinant PTH analog",
    target: "PTH receptor",
    description:
      "Intermittent PTH that stimulates new bone formation in severe osteoporosis — anabolic rather than antiresorptive.",
  },
  {
    slug: "denosumab",
    name: "Denosumab",
    genericName: "denosumab",
    category: "Endocrine",
    drugClass: "RANKL inhibitor (monoclonal antibody)",
    target: "RANKL",
    description:
      "Subcutaneous antibody that blocks osteoclast formation in osteoporosis and bone metastases. Rebound fractures if stopped abruptly.",
  },
  {
    slug: "finasteride",
    name: "Finasteride",
    genericName: "finasteride",
    category: "Endocrine",
    drugClass: "5-α reductase inhibitor",
    target: "5-α reductase",
    description:
      "Blocks conversion of testosterone to dihydrotestosterone for BPH and male-pattern hair loss.",
  },

  // ===== Autonomic (batch 3) =====
  {
    slug: "terbutaline",
    name: "Terbutaline",
    genericName: "terbutaline",
    category: "Autonomic",
    drugClass: "Sympathomimetic (β2 agonist)",
    target: "β2 adrenoceptor",
    description:
      "Beta-2 agonist used as a bronchodilator and as a short-term tocolytic to relax the uterus in preterm labor.",
  },
  {
    slug: "mirabegron",
    name: "Mirabegron",
    genericName: "mirabegron",
    category: "Autonomic",
    drugClass: "Sympathomimetic (β3 agonist)",
    target: "β3 adrenoceptor (bladder)",
    description:
      "Relaxes the detrusor via β3 receptors for overactive bladder, avoiding the dry mouth of antimuscarinics.",
  },
  {
    slug: "guanfacine",
    name: "Guanfacine",
    genericName: "guanfacine",
    category: "Autonomic",
    drugClass: "Sympatholytic (α2 agonist)",
    target: "Central α2A adrenoceptor",
    description:
      "Central α2 agonist for ADHD and hypertension, with less sedation than clonidine.",
  },
  {
    slug: "reserpine",
    name: "Reserpine",
    genericName: "reserpine",
    category: "Autonomic",
    drugClass: "Sympatholytic (VMAT inhibitor)",
    target: "Vesicular monoamine transporter",
    description:
      "Depletes stored catecholamines and serotonin. A historic antihypertensive; causes depression and sedation.",
  },
  {
    slug: "terazosin",
    name: "Terazosin",
    genericName: "terazosin",
    category: "Autonomic",
    drugClass: "Sympatholytic (α1 blocker)",
    target: "α1 adrenoceptor",
    description:
      "Long-acting α1 antagonist for BPH and hypertension. First-dose orthostatic hypotension is typical.",
  },
  {
    slug: "silodosin",
    name: "Silodosin",
    genericName: "silodosin",
    category: "Autonomic",
    drugClass: "Sympatholytic (α1A blocker)",
    target: "α1A adrenoceptor",
    description:
      "Highly uroselective α1A blocker for BPH with minimal blood-pressure effect but frequent retrograde ejaculation.",
  },
  {
    slug: "yohimbine",
    name: "Yohimbine",
    genericName: "yohimbine",
    category: "Autonomic",
    drugClass: "Sympatholytic (α2 antagonist)",
    target: "α2 adrenoceptor",
    description:
      "Alpha-2 antagonist that increases sympathetic outflow; historically used for erectile dysfunction.",
  },
  {
    slug: "methacholine",
    name: "Methacholine",
    genericName: "methacholine",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (muscarinic agonist)",
    target: "Muscarinic receptors",
    description:
      "Inhaled muscarinic agonist used in bronchoprovocation testing to diagnose asthma by triggering airway hyperreactivity.",
  },
  {
    slug: "cevimeline",
    name: "Cevimeline",
    genericName: "cevimeline",
    category: "Autonomic",
    drugClass: "Parasympathomimetic (muscarinic agonist)",
    target: "M3 muscarinic receptor",
    description:
      "Muscarinic agonist that stimulates salivary and lacrimal glands in Sjögren's-associated dry mouth.",
  },
  {
    slug: "solifenacin",
    name: "Solifenacin",
    genericName: "solifenacin",
    category: "Autonomic",
    drugClass: "Parasympatholytic (M3 antagonist)",
    target: "M3 muscarinic receptor",
    description:
      "Bladder-selective antimuscarinic for overactive bladder with once-daily dosing.",
  },
  {
    slug: "darifenacin",
    name: "Darifenacin",
    genericName: "darifenacin",
    category: "Autonomic",
    drugClass: "Parasympatholytic (M3 antagonist)",
    target: "M3 muscarinic receptor",
    description:
      "M3-selective antimuscarinic for overactive bladder, designed to spare central M1 cognitive effects.",
  },

  // ===== Cardiovascular (batch 3) =====
  {
    slug: "captopril",
    name: "Captopril",
    genericName: "captopril",
    category: "Cardiovascular",
    drugClass: "ACE inhibitor",
    target: "Angiotensin-converting enzyme",
    description:
      "Short-acting sulfhydryl ACE inhibitor, the prototype of the class. Dosed multiple times daily.",
  },
  {
    slug: "ramipril",
    name: "Ramipril",
    genericName: "ramipril",
    category: "Cardiovascular",
    drugClass: "ACE inhibitor",
    target: "Angiotensin-converting enzyme",
    description:
      "Long-acting ACE inhibitor with strong outcome data for reducing cardiovascular events.",
  },
  {
    slug: "candesartan",
    name: "Candesartan",
    genericName: "candesartan",
    category: "Cardiovascular",
    drugClass: "Angiotensin receptor blocker",
    target: "AT1 receptor",
    description:
      "Long-acting ARB for hypertension and heart failure; also studied for migraine prophylaxis.",
  },
  {
    slug: "telmisartan",
    name: "Telmisartan",
    genericName: "telmisartan",
    category: "Cardiovascular",
    drugClass: "Angiotensin receptor blocker",
    target: "AT1 receptor",
    description:
      "Longest-acting ARB with partial PPAR-γ activity, offering 24-hour blood-pressure control.",
  },
  {
    slug: "nicardipine",
    name: "Nicardipine",
    genericName: "nicardipine",
    category: "Cardiovascular",
    drugClass: "Dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (vascular)",
    description:
      "IV dihydropyridine titratable for hypertensive emergencies and cerebral vasospasm.",
  },
  {
    slug: "nimodipine",
    name: "Nimodipine",
    genericName: "nimodipine",
    category: "Cardiovascular",
    drugClass: "Dihydropyridine calcium channel blocker",
    target: "L-type calcium channel (cerebral)",
    description:
      "CNS-selective dihydropyridine that reduces vasospasm and improves outcomes after subarachnoid hemorrhage.",
  },
  {
    slug: "bisoprolol",
    name: "Bisoprolol",
    genericName: "bisoprolol",
    category: "Cardiovascular",
    drugClass: "β1-selective beta blocker",
    target: "β1 adrenoceptor",
    description:
      "Highly cardioselective beta blocker proven to reduce mortality in chronic heart failure.",
  },
  {
    slug: "esmolol",
    name: "Esmolol",
    genericName: "esmolol",
    category: "Cardiovascular",
    drugClass: "Ultra-short β1 blocker",
    target: "β1 adrenoceptor",
    description:
      "IV beta blocker with a 9-minute half-life for rapid, titratable rate control in tachyarrhythmia and thyroid storm.",
  },
  {
    slug: "sotalol",
    name: "Sotalol",
    genericName: "sotalol",
    category: "Cardiovascular",
    drugClass: "Class III antiarrhythmic / β blocker",
    target: "K+ channel + β adrenoceptor",
    description:
      "Combines beta blockade with potassium-channel blockade for atrial and ventricular arrhythmias. Monitor QT.",
  },
  {
    slug: "dofetilide",
    name: "Dofetilide",
    genericName: "dofetilide",
    category: "Cardiovascular",
    drugClass: "Class III antiarrhythmic",
    target: "Rapid delayed-rectifier K+ channel",
    description:
      "Pure potassium-channel blocker for atrial fibrillation requiring in-hospital initiation due to torsades risk.",
  },
  {
    slug: "procainamide",
    name: "Procainamide",
    genericName: "procainamide",
    category: "Cardiovascular",
    drugClass: "Class Ia antiarrhythmic",
    target: "Cardiac sodium channel",
    description:
      "Sodium-channel blocker for stable wide-complex tachycardia and WPW. Long-term use causes drug-induced lupus.",
  },
  {
    slug: "quinidine",
    name: "Quinidine",
    genericName: "quinidine",
    category: "Cardiovascular",
    drugClass: "Class Ia antiarrhythmic",
    target: "Cardiac sodium / potassium channels",
    description:
      "Oldest antiarrhythmic, now niche (Brugada, short-QT). Causes cinchonism and QT prolongation.",
  },
  {
    slug: "mexiletine",
    name: "Mexiletine",
    genericName: "mexiletine",
    category: "Cardiovascular",
    drugClass: "Class Ib antiarrhythmic",
    target: "Cardiac sodium channel",
    description:
      "Oral lidocaine analog for ventricular arrhythmias and as a treatment for myotonia.",
  },
  {
    slug: "ivabradine",
    name: "Ivabradine",
    genericName: "ivabradine",
    category: "Cardiovascular",
    drugClass: "Funny-current (If) inhibitor",
    target: "SA-node HCN channel",
    description:
      "Slows the sinus node without affecting contractility or blood pressure in heart failure and stable angina.",
  },
  {
    slug: "ranolazine",
    name: "Ranolazine",
    genericName: "ranolazine",
    category: "Cardiovascular",
    drugClass: "Late sodium-current inhibitor",
    target: "Late cardiac sodium current",
    description:
      "Anti-anginal that reduces ischemia without lowering heart rate or blood pressure.",
  },
  {
    slug: "nitroprusside",
    name: "Sodium nitroprusside",
    genericName: "sodium nitroprusside",
    category: "Cardiovascular",
    drugClass: "Arterial + venous vasodilator",
    target: "Nitric oxide donor",
    description:
      "Rapidly titratable IV vasodilator for hypertensive emergencies. Prolonged use risks cyanide accumulation.",
  },
  {
    slug: "simvastatin",
    name: "Simvastatin",
    genericName: "simvastatin",
    category: "Cardiovascular",
    drugClass: "HMG-CoA reductase inhibitor (statin)",
    target: "HMG-CoA reductase",
    description:
      "Moderate-intensity statin with notable drug interactions (CYP3A4) raising myopathy risk.",
  },
  {
    slug: "gemfibrozil",
    name: "Gemfibrozil",
    genericName: "gemfibrozil",
    category: "Cardiovascular",
    drugClass: "Fibrate",
    target: "PPAR-α",
    description:
      "Lowers triglycerides via PPAR-α. Avoid combining with statins due to markedly increased myopathy risk.",
  },
  {
    slug: "cholestyramine",
    name: "Cholestyramine",
    genericName: "cholestyramine",
    category: "Cardiovascular",
    drugClass: "Bile acid sequestrant",
    target: "Intestinal bile acids",
    description:
      "Binds bile acids to lower LDL and relieve cholestatic pruritus and bile-acid diarrhea. Impairs absorption of other drugs.",
  },
  {
    slug: "prasugrel",
    name: "Prasugrel",
    genericName: "prasugrel",
    category: "Cardiovascular",
    drugClass: "P2Y12 antiplatelet",
    target: "Platelet P2Y12 receptor",
    description:
      "More potent, irreversible antiplatelet than clopidogrel after coronary stenting. Higher bleeding risk; avoid after stroke.",
  },
  {
    slug: "cilostazol",
    name: "Cilostazol",
    genericName: "cilostazol",
    category: "Cardiovascular",
    drugClass: "Phosphodiesterase-3 inhibitor",
    target: "Phosphodiesterase 3 (platelets/vessels)",
    description:
      "Vasodilator and antiplatelet that improves walking distance in intermittent claudication. Contraindicated in heart failure.",
  },
  {
    slug: "alteplase",
    name: "Alteplase",
    genericName: "alteplase (tPA)",
    category: "Cardiovascular",
    drugClass: "Thrombolytic",
    target: "Plasminogen → plasmin",
    description:
      "Recombinant tissue plasminogen activator that dissolves clots in acute ischemic stroke, massive PE, and STEMI.",
  },
  {
    slug: "vasopressin",
    name: "Vasopressin",
    genericName: "vasopressin (ADH)",
    category: "Cardiovascular",
    drugClass: "Vasopressor (V1 agonist)",
    target: "V1 vascular receptor",
    description:
      "Adjunct vasopressor in septic shock and a cardiac-arrest option; also used for variceal bleeding.",
  },

  // ===== Diuretics (batch 3) =====
  {
    slug: "chlorothiazide",
    name: "Chlorothiazide",
    genericName: "chlorothiazide",
    category: "Diuretic",
    drugClass: "Thiazide diuretic",
    target: "Na-Cl cotransporter",
    description:
      "The original thiazide and the only one available IV, used to augment loop diuresis in resistant edema.",
  },
  {
    slug: "bendroflumethiazide",
    name: "Bendroflumethiazide",
    genericName: "bendroflumethiazide",
    category: "Diuretic",
    drugClass: "Thiazide diuretic",
    target: "Na-Cl cotransporter",
    description:
      "Thiazide used for hypertension, common in UK practice.",
  },
  {
    slug: "methazolamide",
    name: "Methazolamide",
    genericName: "methazolamide",
    category: "Diuretic",
    drugClass: "Carbonic anhydrase inhibitor",
    target: "Carbonic anhydrase",
    description:
      "Longer-acting carbonic anhydrase inhibitor for glaucoma with better CNS penetration than acetazolamide.",
  },
  {
    slug: "conivaptan",
    name: "Conivaptan",
    genericName: "conivaptan",
    category: "Diuretic",
    drugClass: "Vasopressin V1a/V2 antagonist (vaptan)",
    target: "V1a + V2 receptors",
    description:
      "IV vaptan promoting free-water excretion in euvolemic and hypervolemic hyponatremia.",
  },
  {
    slug: "hydroflumethiazide",
    name: "Hydroflumethiazide",
    genericName: "hydroflumethiazide",
    category: "Diuretic",
    drugClass: "Thiazide diuretic",
    target: "Na-Cl cotransporter",
    description:
      "Thiazide diuretic for edema and hypertension, sharing the class metabolic effects.",
  },

  // ===== Antineoplastics (batch 3) =====
  {
    slug: "dacarbazine",
    name: "Dacarbazine",
    genericName: "dacarbazine",
    category: "Antineoplastic",
    drugClass: "Alkylating agent",
    target: "DNA methylation",
    description:
      "Alkylating agent in Hodgkin lymphoma (ABVD) and melanoma. Strongly emetogenic.",
  },
  {
    slug: "busulfan",
    name: "Busulfan",
    genericName: "busulfan",
    category: "Antineoplastic",
    drugClass: "Alkylating agent",
    target: "DNA cross-linking",
    description:
      "Alkylator used in stem-cell transplant conditioning. Risks pulmonary fibrosis and veno-occlusive disease.",
  },
  {
    slug: "chlorambucil",
    name: "Chlorambucil",
    genericName: "chlorambucil",
    category: "Antineoplastic",
    drugClass: "Alkylating agent (nitrogen mustard)",
    target: "DNA cross-linking",
    description:
      "Oral, well-tolerated alkylator for chronic lymphocytic leukemia in frail patients.",
  },
  {
    slug: "carmustine",
    name: "Carmustine (BCNU)",
    genericName: "carmustine",
    category: "Antineoplastic",
    drugClass: "Nitrosourea alkylating agent",
    target: "DNA cross-linking",
    description:
      "Lipophilic nitrosourea that crosses the blood-brain barrier for brain tumors; delivered as implantable wafers.",
  },
  {
    slug: "daunorubicin",
    name: "Daunorubicin",
    genericName: "daunorubicin",
    category: "Antineoplastic",
    drugClass: "Anthracycline",
    target: "Topoisomerase II / DNA intercalation",
    description:
      "Anthracycline central to acute leukemia induction. Cumulative cardiotoxicity like doxorubicin.",
  },
  {
    slug: "mitoxantrone",
    name: "Mitoxantrone",
    genericName: "mitoxantrone",
    category: "Antineoplastic",
    drugClass: "Anthracenedione",
    target: "Topoisomerase II",
    description:
      "Anthracycline-like agent for leukemia and prostate cancer; also used in aggressive multiple sclerosis.",
  },
  {
    slug: "topotecan",
    name: "Topotecan",
    genericName: "topotecan",
    category: "Antineoplastic",
    drugClass: "Topoisomerase I inhibitor",
    target: "Topoisomerase I",
    description:
      "Camptothecin analog for ovarian and small-cell lung cancer.",
  },
  {
    slug: "vinorelbine",
    name: "Vinorelbine",
    genericName: "vinorelbine",
    category: "Antineoplastic",
    drugClass: "Vinca alkaloid",
    target: "Microtubules (depolymerization)",
    description:
      "Semisynthetic vinca alkaloid for non-small-cell lung and breast cancer.",
  },
  {
    slug: "pemetrexed",
    name: "Pemetrexed",
    genericName: "pemetrexed",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (multitargeted antifolate)",
    target: "Thymidylate synthase / DHFR",
    description:
      "Antifolate for non-squamous lung cancer and mesothelioma. Folate and B12 supplementation reduces toxicity.",
  },
  {
    slug: "azacitidine",
    name: "Azacitidine",
    genericName: "azacitidine",
    category: "Antineoplastic",
    drugClass: "Hypomethylating agent",
    target: "DNA methyltransferase",
    description:
      "Reactivates silenced genes in myelodysplastic syndrome and acute myeloid leukemia.",
  },
  {
    slug: "fludarabine",
    name: "Fludarabine",
    genericName: "fludarabine",
    category: "Antineoplastic",
    drugClass: "Antimetabolite (purine analog)",
    target: "DNA polymerase / ribonucleotide reductase",
    description:
      "Purine analog for chronic lymphocytic leukemia and as transplant conditioning. Profoundly immunosuppressive.",
  },
  {
    slug: "dasatinib",
    name: "Dasatinib",
    genericName: "dasatinib",
    category: "Antineoplastic",
    drugClass: "Tyrosine kinase inhibitor",
    target: "BCR-ABL, SRC kinases",
    description:
      "Second-generation BCR-ABL inhibitor for CML, including some imatinib-resistant mutations. Risk of pleural effusions.",
  },
  {
    slug: "osimertinib",
    name: "Osimertinib",
    genericName: "osimertinib",
    category: "Antineoplastic",
    drugClass: "EGFR tyrosine kinase inhibitor",
    target: "EGFR T790M",
    description:
      "Third-generation EGFR inhibitor for T790M-resistant and front-line EGFR-mutant lung cancer with good CNS penetration.",
  },
  {
    slug: "sorafenib",
    name: "Sorafenib",
    genericName: "sorafenib",
    category: "Antineoplastic",
    drugClass: "Multikinase inhibitor",
    target: "RAF, VEGFR, PDGFR",
    description:
      "Oral multikinase inhibitor for hepatocellular, renal, and thyroid cancers. Hand-foot skin reaction is common.",
  },
  {
    slug: "ibrutinib",
    name: "Ibrutinib",
    genericName: "ibrutinib",
    category: "Antineoplastic",
    drugClass: "Bruton tyrosine kinase inhibitor",
    target: "BTK",
    description:
      "Oral BTK inhibitor for CLL, mantle-cell lymphoma, and Waldenström. Raises atrial fibrillation and bleeding risk.",
  },
  {
    slug: "olaparib",
    name: "Olaparib",
    genericName: "olaparib",
    category: "Antineoplastic",
    drugClass: "PARP inhibitor",
    target: "PARP enzymes",
    description:
      "Exploits synthetic lethality in BRCA-mutant ovarian, breast, and prostate cancers.",
  },
  {
    slug: "cetuximab",
    name: "Cetuximab",
    genericName: "cetuximab",
    category: "Antineoplastic",
    drugClass: "Anti-EGFR monoclonal antibody",
    target: "EGFR",
    description:
      "Monoclonal antibody for RAS-wild-type colorectal and head-and-neck cancer. Acneiform rash predicts response.",
  },
  {
    slug: "bortezomib",
    name: "Bortezomib",
    genericName: "bortezomib",
    category: "Antineoplastic",
    drugClass: "Proteasome inhibitor",
    target: "26S proteasome",
    description:
      "Backbone of multiple-myeloma therapy. Dose-limiting peripheral neuropathy; reactivates herpes zoster.",
  },
  {
    slug: "lenalidomide",
    name: "Lenalidomide",
    genericName: "lenalidomide",
    category: "Antineoplastic",
    drugClass: "Immunomodulatory agent",
    target: "Cereblon E3 ligase",
    description:
      "Thalidomide analog for multiple myeloma and del(5q) myelodysplasia. Teratogenic and thrombogenic.",
  },
  {
    slug: "all-trans-retinoic-acid",
    name: "ATRA (tretinoin)",
    genericName: "all-trans-retinoic acid",
    category: "Antineoplastic",
    drugClass: "Retinoid differentiating agent",
    target: "Retinoic acid receptor-α",
    description:
      "Drives malignant promyelocyte differentiation to cure acute promyelocytic leukemia. Watch for differentiation syndrome.",
  },
  {
    slug: "letrozole",
    name: "Letrozole",
    genericName: "letrozole",
    category: "Antineoplastic",
    drugClass: "Aromatase inhibitor",
    target: "Aromatase",
    description:
      "Aromatase inhibitor for postmenopausal hormone-receptor-positive breast cancer; also induces ovulation.",
  },
  {
    slug: "bicalutamide",
    name: "Bicalutamide",
    genericName: "bicalutamide",
    category: "Antineoplastic",
    drugClass: "Antiandrogen",
    target: "Androgen receptor",
    description:
      "Nonsteroidal antiandrogen for prostate cancer, often paired with a GnRH agonist to block the testosterone flare.",
  },
  {
    slug: "asparaginase",
    name: "Asparaginase",
    genericName: "asparaginase",
    category: "Antineoplastic",
    drugClass: "Enzyme",
    target: "Plasma asparagine",
    description:
      "Depletes asparagine that leukemic cells cannot synthesize. Used in ALL; causes pancreatitis and clotting abnormalities.",
  },

  // ===== CNS (batch 3) =====
  {
    slug: "clonazepam",
    name: "Clonazepam",
    genericName: "clonazepam",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Long-acting benzodiazepine for seizures, panic disorder, and myoclonus.",
  },
  {
    slug: "chlordiazepoxide",
    name: "Chlordiazepoxide",
    genericName: "chlordiazepoxide",
    category: "CNS",
    drugClass: "Benzodiazepine",
    target: "GABA-A receptor",
    description:
      "Long-acting benzodiazepine, a mainstay of alcohol-withdrawal regimens.",
  },
  {
    slug: "flumazenil",
    name: "Flumazenil",
    genericName: "flumazenil",
    category: "CNS",
    drugClass: "Benzodiazepine antagonist",
    target: "GABA-A receptor",
    description:
      "Reverses benzodiazepine sedation; used cautiously since it can precipitate seizures in dependent patients.",
  },
  {
    slug: "eszopiclone",
    name: "Eszopiclone",
    genericName: "eszopiclone",
    category: "CNS",
    drugClass: "Non-benzodiazepine hypnotic (Z-drug)",
    target: "GABA-A receptor",
    description:
      "Longer-acting Z-drug hypnotic for sleep maintenance insomnia.",
  },
  {
    slug: "ramelteon",
    name: "Ramelteon",
    genericName: "ramelteon",
    category: "CNS",
    drugClass: "Melatonin receptor agonist",
    target: "MT1 / MT2 receptors",
    description:
      "Non-controlled hypnotic for sleep-onset insomnia with no dependence potential.",
  },
  {
    slug: "ethosuximide",
    name: "Ethosuximide",
    genericName: "ethosuximide",
    category: "CNS",
    drugClass: "Antiepileptic (T-type Ca channel blocker)",
    target: "Thalamic T-type calcium channel",
    description:
      "First-line for childhood absence seizures.",
  },
  {
    slug: "oxcarbazepine",
    name: "Oxcarbazepine",
    genericName: "oxcarbazepine",
    category: "CNS",
    drugClass: "Antiepileptic (Na+ channel blocker)",
    target: "Voltage-gated sodium channel",
    description:
      "Carbamazepine analog for focal seizures with fewer interactions but more hyponatremia.",
  },
  {
    slug: "pregabalin",
    name: "Pregabalin",
    genericName: "pregabalin",
    category: "CNS",
    drugClass: "Calcium channel α2δ ligand",
    target: "Voltage-gated calcium channel α2δ",
    description:
      "Treats neuropathic pain, fibromyalgia, and partial seizures. A controlled substance due to misuse potential.",
  },
  {
    slug: "citalopram",
    name: "Citalopram",
    genericName: "citalopram",
    category: "CNS",
    drugClass: "SSRI antidepressant",
    target: "Serotonin transporter",
    description:
      "SSRI for depression with a dose-dependent QT-prolongation caution.",
  },
  {
    slug: "paroxetine",
    name: "Paroxetine",
    genericName: "paroxetine",
    category: "CNS",
    drugClass: "SSRI antidepressant",
    target: "Serotonin transporter",
    description:
      "Sedating, anticholinergic SSRI with the most pronounced discontinuation syndrome; avoid in pregnancy.",
  },
  {
    slug: "nortriptyline",
    name: "Nortriptyline",
    genericName: "nortriptyline",
    category: "CNS",
    drugClass: "Tricyclic antidepressant",
    target: "Norepinephrine/serotonin reuptake",
    description:
      "Better-tolerated secondary-amine TCA for depression and neuropathic pain.",
  },
  {
    slug: "phenelzine",
    name: "Phenelzine",
    genericName: "phenelzine",
    category: "CNS",
    drugClass: "MAO inhibitor",
    target: "Monoamine oxidase A/B",
    description:
      "Nonselective MAOI for refractory and atypical depression. Requires a tyramine-restricted diet to avoid hypertensive crisis.",
  },
  {
    slug: "selegiline",
    name: "Selegiline",
    genericName: "selegiline",
    category: "CNS",
    drugClass: "MAO-B inhibitor",
    target: "Monoamine oxidase B",
    description:
      "Selective MAO-B inhibitor for Parkinson disease; a transdermal form treats depression.",
  },
  {
    slug: "mirtazapine",
    name: "Mirtazapine",
    genericName: "mirtazapine",
    category: "CNS",
    drugClass: "Atypical antidepressant (α2 antagonist)",
    target: "α2 / 5-HT2 / H1 receptors",
    description:
      "Antidepressant that boosts appetite and sleep, useful in cachectic or insomniac patients.",
  },
  {
    slug: "trazodone",
    name: "Trazodone",
    genericName: "trazodone",
    category: "CNS",
    drugClass: "Serotonin antagonist/reuptake inhibitor",
    target: "5-HT2A / serotonin transporter",
    description:
      "Most often used at low dose as a sleep aid. Rare priapism is a notable adverse effect.",
  },
  {
    slug: "aripiprazole",
    name: "Aripiprazole",
    genericName: "aripiprazole",
    category: "CNS",
    drugClass: "Atypical antipsychotic (D2 partial agonist)",
    target: "D2 / 5-HT1A receptors",
    description:
      "Partial dopamine agonist with low metabolic and prolactin effects; used in schizophrenia, bipolar, and as antidepressant adjunct.",
  },
  {
    slug: "chlorpromazine",
    name: "Chlorpromazine",
    genericName: "chlorpromazine",
    category: "CNS",
    drugClass: "Typical antipsychotic (low-potency)",
    target: "D2 dopamine receptor",
    description:
      "Prototype phenothiazine antipsychotic, also used for intractable hiccups. Sedating with anticholinergic effects.",
  },
  {
    slug: "methylphenidate",
    name: "Methylphenidate",
    genericName: "methylphenidate",
    category: "CNS",
    drugClass: "CNS stimulant",
    target: "Dopamine/norepinephrine reuptake",
    description:
      "First-line stimulant for ADHD and narcolepsy. Controlled substance with appetite and sleep effects.",
  },
  {
    slug: "atomoxetine",
    name: "Atomoxetine",
    genericName: "atomoxetine",
    category: "CNS",
    drugClass: "Selective norepinephrine reuptake inhibitor",
    target: "Norepinephrine transporter",
    description:
      "Non-stimulant ADHD option without abuse potential; takes weeks for full effect.",
  },
  {
    slug: "modafinil",
    name: "Modafinil",
    genericName: "modafinil",
    category: "CNS",
    drugClass: "Wakefulness-promoting agent",
    target: "Dopamine transporter (weak)",
    description:
      "Promotes wakefulness in narcolepsy and shift-work sleep disorder with low abuse potential.",
  },
  {
    slug: "entacapone",
    name: "Entacapone",
    genericName: "entacapone",
    category: "CNS",
    drugClass: "COMT inhibitor",
    target: "Catechol-O-methyltransferase",
    description:
      "Extends levodopa's effect by blocking its peripheral breakdown, reducing Parkinson 'wearing-off'.",
  },
  {
    slug: "rivastigmine",
    name: "Rivastigmine",
    genericName: "rivastigmine",
    category: "CNS",
    drugClass: "Cholinesterase inhibitor",
    target: "Acetylcholinesterase + butyrylcholinesterase",
    description:
      "Cholinesterase inhibitor (oral or patch) for Alzheimer and Parkinson dementia.",
  },
  {
    slug: "tizanidine",
    name: "Tizanidine",
    genericName: "tizanidine",
    category: "CNS",
    drugClass: "Central α2 agonist (muscle relaxant)",
    target: "Central α2 adrenoceptor",
    description:
      "Reduces spasticity in MS and spinal injury; causes sedation, dry mouth, and hypotension.",
  },
  {
    slug: "cyclobenzaprine",
    name: "Cyclobenzaprine",
    genericName: "cyclobenzaprine",
    category: "CNS",
    drugClass: "Skeletal muscle relaxant",
    target: "Brainstem motor pathways",
    description:
      "TCA-related muscle relaxant for acute musculoskeletal spasm; anticholinergic and sedating.",
  },
  {
    slug: "dantrolene",
    name: "Dantrolene",
    genericName: "dantrolene",
    category: "CNS",
    drugClass: "Direct muscle relaxant",
    target: "Ryanodine receptor (RyR1)",
    description:
      "Blocks calcium release from the sarcoplasmic reticulum; the antidote for malignant hyperthermia and neuroleptic malignant syndrome.",
  },
  {
    slug: "succinylcholine",
    name: "Succinylcholine",
    genericName: "succinylcholine",
    category: "CNS",
    drugClass: "Depolarizing neuromuscular blocker",
    target: "Nicotinic ACh receptor (NMJ)",
    description:
      "Ultra-fast paralytic for rapid-sequence intubation. Risk of hyperkalemia and malignant hyperthermia.",
  },
  {
    slug: "rocuronium",
    name: "Rocuronium",
    genericName: "rocuronium",
    category: "CNS",
    drugClass: "Nondepolarizing neuromuscular blocker",
    target: "Nicotinic ACh receptor (NMJ)",
    description:
      "Rapid-onset nondepolarizing paralytic for intubation and surgery; reversed by sugammadex.",
  },
  {
    slug: "methadone",
    name: "Methadone",
    genericName: "methadone",
    category: "CNS",
    drugClass: "Opioid agonist",
    target: "μ-opioid + NMDA receptors",
    description:
      "Long-acting opioid for opioid-use-disorder maintenance and chronic pain. QT prolongation and complex kinetics.",
  },
  {
    slug: "tramadol",
    name: "Tramadol",
    genericName: "tramadol",
    category: "CNS",
    drugClass: "Opioid agonist / SNRI",
    target: "μ-opioid receptor + monoamine reuptake",
    description:
      "Weak opioid with serotonergic activity for moderate pain. Lowers seizure threshold and risks serotonin syndrome.",
  },
  {
    slug: "naltrexone",
    name: "Naltrexone",
    genericName: "naltrexone",
    category: "CNS",
    drugClass: "Opioid antagonist",
    target: "μ-opioid receptor",
    description:
      "Long-acting opioid antagonist for opioid- and alcohol-use disorder; an injectable monthly form aids adherence.",
  },
  {
    slug: "acetaminophen",
    name: "Acetaminophen",
    genericName: "acetaminophen (paracetamol)",
    category: "CNS",
    drugClass: "Analgesic / antipyretic",
    target: "Central COX / TRPV1 (uncertain)",
    description:
      "First-line analgesic and antipyretic without anti-inflammatory effect. Overdose causes hepatotoxicity treated with acetylcysteine.",
  },
  {
    slug: "bupivacaine",
    name: "Bupivacaine",
    genericName: "bupivacaine",
    category: "CNS",
    drugClass: "Local anesthetic (amide)",
    target: "Voltage-gated sodium channel",
    description:
      "Long-acting local anesthetic for epidural and regional blocks. Cardiotoxic if injected intravascularly.",
  },
  {
    slug: "sevoflurane",
    name: "Sevoflurane",
    genericName: "sevoflurane",
    category: "CNS",
    drugClass: "Inhaled general anesthetic",
    target: "GABA-A / multiple channels",
    description:
      "Sweet-smelling volatile anesthetic ideal for inhalational induction in children. Can trigger malignant hyperthermia.",
  },
  {
    slug: "riluzole",
    name: "Riluzole",
    genericName: "riluzole",
    category: "CNS",
    drugClass: "Glutamate modulator",
    target: "Glutamate release / Na+ channels",
    description:
      "Modestly prolongs survival in amyotrophic lateral sclerosis by reducing glutamate excitotoxicity.",
  },

  // ===== Respiratory (batch 3) =====
  {
    slug: "vilanterol",
    name: "Vilanterol",
    genericName: "vilanterol",
    category: "Respiratory",
    drugClass: "Long-acting β2 agonist (LABA)",
    target: "β2 adrenoceptor",
    description:
      "Once-daily LABA in combination inhalers for asthma and COPD.",
  },
  {
    slug: "umeclidinium",
    name: "Umeclidinium",
    genericName: "umeclidinium",
    category: "Respiratory",
    drugClass: "Long-acting muscarinic antagonist",
    target: "Muscarinic receptor (airway)",
    description:
      "Once-daily inhaled anticholinergic for COPD maintenance, often in triple therapy.",
  },
  {
    slug: "aclidinium",
    name: "Aclidinium",
    genericName: "aclidinium",
    category: "Respiratory",
    drugClass: "Long-acting muscarinic antagonist",
    target: "Muscarinic receptor (airway)",
    description:
      "Twice-daily inhaled LAMA for COPD maintenance bronchodilation.",
  },
  {
    slug: "mometasone-inhaled",
    name: "Mometasone",
    genericName: "mometasone",
    category: "Respiratory",
    drugClass: "Inhaled corticosteroid",
    target: "Glucocorticoid receptor",
    description:
      "Inhaled and intranasal corticosteroid for asthma control and allergic rhinitis.",
  },
  {
    slug: "beclomethasone",
    name: "Beclomethasone",
    genericName: "beclomethasone",
    category: "Respiratory",
    drugClass: "Inhaled corticosteroid",
    target: "Glucocorticoid receptor",
    description:
      "Inhaled steroid for asthma maintenance and a nasal spray for allergic rhinitis.",
  },
  {
    slug: "zafirlukast",
    name: "Zafirlukast",
    genericName: "zafirlukast",
    category: "Respiratory",
    drugClass: "Leukotriene receptor antagonist",
    target: "CysLT1 receptor",
    description:
      "Oral leukotriene antagonist for asthma maintenance; hepatotoxicity warrants monitoring.",
  },
  {
    slug: "zileuton",
    name: "Zileuton",
    genericName: "zileuton",
    category: "Respiratory",
    drugClass: "5-lipoxygenase inhibitor",
    target: "5-lipoxygenase",
    description:
      "Blocks leukotriene synthesis for asthma. Requires liver-enzyme monitoring.",
  },
  {
    slug: "mepolizumab",
    name: "Mepolizumab",
    genericName: "mepolizumab",
    category: "Respiratory",
    drugClass: "Anti-IL-5 monoclonal antibody",
    target: "Interleukin-5",
    description:
      "Biologic that lowers eosinophils in severe eosinophilic asthma and eosinophilic granulomatosis.",
  },
  {
    slug: "dupilumab",
    name: "Dupilumab",
    genericName: "dupilumab",
    category: "Respiratory",
    drugClass: "Anti-IL-4Rα monoclonal antibody",
    target: "IL-4 receptor alpha",
    description:
      "Blocks type-2 inflammation in severe asthma, atopic dermatitis, and chronic rhinosinusitis with polyps.",
  },
  {
    slug: "ivacaftor",
    name: "Ivacaftor",
    genericName: "ivacaftor",
    category: "Respiratory",
    drugClass: "CFTR potentiator",
    target: "CFTR chloride channel",
    description:
      "Improves CFTR channel gating in cystic fibrosis patients with specific mutations; a component of Trikafta.",
  },
  {
    slug: "nintedanib",
    name: "Nintedanib",
    genericName: "nintedanib",
    category: "Respiratory",
    drugClass: "Antifibrotic (multikinase inhibitor)",
    target: "VEGFR / FGFR / PDGFR",
    description:
      "Slows lung-function decline in idiopathic pulmonary fibrosis; also an oncology agent.",
  },
  {
    slug: "bosentan",
    name: "Bosentan",
    genericName: "bosentan",
    category: "Respiratory",
    drugClass: "Endothelin receptor antagonist",
    target: "Endothelin-1 receptors",
    description:
      "Oral vasodilator for pulmonary arterial hypertension. Hepatotoxic and teratogenic; requires monitoring.",
  },
  {
    slug: "sildenafil",
    name: "Sildenafil",
    genericName: "sildenafil",
    category: "Respiratory",
    drugClass: "Phosphodiesterase-5 inhibitor",
    target: "Phosphodiesterase 5",
    description:
      "Vasodilator for pulmonary arterial hypertension (and erectile dysfunction). Contraindicated with nitrates.",
  },

  // ===== Gastrointestinal (batch 3) =====
  {
    slug: "rabeprazole",
    name: "Rabeprazole",
    genericName: "rabeprazole",
    category: "Gastrointestinal",
    drugClass: "Proton pump inhibitor",
    target: "H+/K+-ATPase",
    description:
      "PPI for GERD and ulcers with rapid onset of acid suppression.",
  },
  {
    slug: "nizatidine",
    name: "Nizatidine",
    genericName: "nizatidine",
    category: "Gastrointestinal",
    drugClass: "H2 receptor antagonist",
    target: "Histamine H2 receptor",
    description:
      "H2 blocker for dyspepsia and GERD with minimal drug interactions.",
  },
  {
    slug: "calcium-carbonate",
    name: "Calcium carbonate",
    genericName: "calcium carbonate",
    category: "Gastrointestinal",
    drugClass: "Antacid",
    target: "Gastric acid (neutralization)",
    description:
      "Rapid-acting antacid and calcium supplement; excess can cause milk-alkali syndrome and constipation.",
  },
  {
    slug: "magnesium-hydroxide",
    name: "Magnesium hydroxide",
    genericName: "magnesium hydroxide",
    category: "Gastrointestinal",
    drugClass: "Antacid / osmotic laxative",
    target: "Gastric acid / colonic osmosis",
    description:
      "Milk of magnesia: neutralizes acid and acts as an osmotic laxative; accumulates in renal failure.",
  },
  {
    slug: "diphenoxylate-atropine",
    name: "Diphenoxylate–atropine",
    genericName: "diphenoxylate + atropine",
    category: "Gastrointestinal",
    drugClass: "Opioid antidiarrheal",
    target: "μ-opioid receptor (gut)",
    description:
      "Lomotil. Opioid antidiarrheal with subtherapeutic atropine added to deter misuse.",
  },
  {
    slug: "lubiprostone",
    name: "Lubiprostone",
    genericName: "lubiprostone",
    category: "Gastrointestinal",
    drugClass: "Chloride channel activator",
    target: "ClC-2 chloride channel",
    description:
      "Increases intestinal fluid secretion for chronic idiopathic constipation and IBS-C.",
  },
  {
    slug: "linaclotide",
    name: "Linaclotide",
    genericName: "linaclotide",
    category: "Gastrointestinal",
    drugClass: "Guanylate cyclase-C agonist",
    target: "Guanylate cyclase-C",
    description:
      "Boosts intestinal secretion and transit for IBS-C and chronic constipation.",
  },
  {
    slug: "prucalopride",
    name: "Prucalopride",
    genericName: "prucalopride",
    category: "Gastrointestinal",
    drugClass: "5-HT4 agonist (prokinetic)",
    target: "5-HT4 receptor",
    description:
      "Selective prokinetic that accelerates colonic transit in chronic constipation.",
  },
  {
    slug: "domperidone",
    name: "Domperidone",
    genericName: "domperidone",
    category: "Gastrointestinal",
    drugClass: "Prokinetic / D2 antagonist",
    target: "D2 receptor (peripheral)",
    description:
      "Peripheral dopamine antagonist for gastroparesis and nausea that largely spares the CNS. QT-prolongation caution.",
  },
  {
    slug: "vedolizumab",
    name: "Vedolizumab",
    genericName: "vedolizumab",
    category: "Gastrointestinal",
    drugClass: "Anti-integrin monoclonal antibody",
    target: "α4β7 integrin",
    description:
      "Gut-selective biologic for ulcerative colitis and Crohn disease with a favorable infection profile.",
  },
  {
    slug: "ustekinumab",
    name: "Ustekinumab",
    genericName: "ustekinumab",
    category: "Gastrointestinal",
    drugClass: "Anti-IL-12/23 monoclonal antibody",
    target: "IL-12 / IL-23 p40 subunit",
    description:
      "Biologic for Crohn disease, ulcerative colitis, and psoriasis.",
  },
  {
    slug: "pancrelipase",
    name: "Pancrelipase",
    genericName: "pancrelipase",
    category: "Gastrointestinal",
    drugClass: "Pancreatic enzyme replacement",
    target: "Dietary fat/protein/starch",
    description:
      "Lipase/protease/amylase replacement for pancreatic insufficiency in cystic fibrosis and chronic pancreatitis.",
  },
  {
    slug: "senna",
    name: "Senna",
    genericName: "sennosides",
    category: "Gastrointestinal",
    drugClass: "Stimulant laxative",
    target: "Colonic myenteric plexus",
    description:
      "Anthraquinone stimulant laxative for constipation, including opioid-induced constipation.",
  },
  {
    slug: "methylnaltrexone",
    name: "Methylnaltrexone",
    genericName: "methylnaltrexone",
    category: "Gastrointestinal",
    drugClass: "Peripheral opioid antagonist",
    target: "μ-opioid receptor (gut)",
    description:
      "Blocks gut opioid receptors to relieve opioid-induced constipation without reversing analgesia.",
  },

  // ===== Endocrine (batch 3) =====
  {
    slug: "insulin-aspart",
    name: "Insulin aspart",
    genericName: "insulin aspart",
    category: "Endocrine",
    drugClass: "Rapid-acting insulin",
    target: "Insulin receptor",
    description:
      "Rapid-acting mealtime insulin analog for prandial coverage and insulin pumps.",
  },
  {
    slug: "insulin-degludec",
    name: "Insulin degludec",
    genericName: "insulin degludec",
    category: "Endocrine",
    drugClass: "Ultra-long-acting insulin",
    target: "Insulin receptor",
    description:
      "Basal insulin with a flat profile lasting over 42 hours, allowing flexible dosing times.",
  },
  {
    slug: "nph-insulin",
    name: "NPH insulin",
    genericName: "insulin isophane (NPH)",
    category: "Endocrine",
    drugClass: "Intermediate-acting insulin",
    target: "Insulin receptor",
    description:
      "Cloudy intermediate-acting basal insulin with a pronounced peak requiring careful timing.",
  },
  {
    slug: "repaglinide",
    name: "Repaglinide",
    genericName: "repaglinide",
    category: "Endocrine",
    drugClass: "Meglitinide",
    target: "Pancreatic β-cell K-ATP channel",
    description:
      "Short-acting mealtime insulin secretagogue useful in irregular eating patterns and mild renal disease.",
  },
  {
    slug: "dulaglutide",
    name: "Dulaglutide",
    genericName: "dulaglutide",
    category: "Endocrine",
    drugClass: "GLP-1 receptor agonist",
    target: "GLP-1 receptor",
    description:
      "Weekly injectable incretin for type 2 diabetes with cardiovascular benefit.",
  },
  {
    slug: "exenatide",
    name: "Exenatide",
    genericName: "exenatide",
    category: "Endocrine",
    drugClass: "GLP-1 receptor agonist",
    target: "GLP-1 receptor",
    description:
      "Incretin mimetic derived from Gila monster venom for type 2 diabetes; avoid in severe renal impairment.",
  },
  {
    slug: "liraglutide",
    name: "Liraglutide",
    genericName: "liraglutide",
    category: "Endocrine",
    drugClass: "GLP-1 receptor agonist",
    target: "GLP-1 receptor",
    description:
      "Daily GLP-1 agonist for type 2 diabetes and obesity, with cardiovascular risk reduction.",
  },
  {
    slug: "dapagliflozin",
    name: "Dapagliflozin",
    genericName: "dapagliflozin",
    category: "Endocrine",
    drugClass: "SGLT2 inhibitor",
    target: "Renal SGLT2 cotransporter",
    description:
      "Promotes glucosuria with proven benefit in heart failure and chronic kidney disease, even without diabetes.",
  },
  {
    slug: "linagliptin",
    name: "Linagliptin",
    genericName: "linagliptin",
    category: "Endocrine",
    drugClass: "DPP-4 inhibitor",
    target: "Dipeptidyl peptidase-4",
    description:
      "DPP-4 inhibitor uniquely cleared by the gut, requiring no renal dose adjustment.",
  },
  {
    slug: "pramlintide",
    name: "Pramlintide",
    genericName: "pramlintide",
    category: "Endocrine",
    drugClass: "Amylin analog",
    target: "Amylin receptor",
    description:
      "Mealtime injectable that slows gastric emptying and curbs glucagon, used alongside insulin.",
  },
  {
    slug: "methylprednisolone",
    name: "Methylprednisolone",
    genericName: "methylprednisolone",
    category: "Endocrine",
    drugClass: "Glucocorticoid",
    target: "Glucocorticoid receptor",
    description:
      "Intermediate-acting steroid for flares of autoimmune and inflammatory disease; IV pulses for severe relapses.",
  },
  {
    slug: "triamcinolone",
    name: "Triamcinolone",
    genericName: "triamcinolone",
    category: "Endocrine",
    drugClass: "Glucocorticoid",
    target: "Glucocorticoid receptor",
    description:
      "Versatile steroid used intra-articularly, topically, and intranasally for localized inflammation.",
  },
  {
    slug: "estradiol",
    name: "Estradiol",
    genericName: "estradiol",
    category: "Endocrine",
    drugClass: "Estrogen",
    target: "Estrogen receptor",
    description:
      "Estrogen replacement for menopausal symptoms and hypogonadism; raises thromboembolic risk.",
  },
  {
    slug: "medroxyprogesterone",
    name: "Medroxyprogesterone",
    genericName: "medroxyprogesterone acetate",
    category: "Endocrine",
    drugClass: "Progestin",
    target: "Progesterone receptor",
    description:
      "Progestin for contraception (depot injection), abnormal uterine bleeding, and endometrial protection.",
  },
  {
    slug: "testosterone",
    name: "Testosterone",
    genericName: "testosterone",
    category: "Endocrine",
    drugClass: "Androgen",
    target: "Androgen receptor",
    description:
      "Replacement therapy for male hypogonadism. Suppresses spermatogenesis and raises hematocrit.",
  },
  {
    slug: "raloxifene",
    name: "Raloxifene",
    genericName: "raloxifene",
    category: "Endocrine",
    drugClass: "Selective estrogen receptor modulator",
    target: "Estrogen receptor",
    description:
      "SERM that builds bone and lowers breast-cancer risk while sparing the endometrium; raises clot risk.",
  },
  {
    slug: "cinacalcet",
    name: "Cinacalcet",
    genericName: "cinacalcet",
    category: "Endocrine",
    drugClass: "Calcimimetic",
    target: "Parathyroid calcium-sensing receptor",
    description:
      "Lowers PTH in secondary hyperparathyroidism of dialysis and in parathyroid carcinoma.",
  },
  {
    slug: "zoledronic-acid",
    name: "Zoledronic acid",
    genericName: "zoledronic acid",
    category: "Endocrine",
    drugClass: "Bisphosphonate",
    target: "Osteoclast farnesyl pyrophosphate synthase",
    description:
      "Potent IV bisphosphonate dosed yearly for osteoporosis and for hypercalcemia of malignancy and bone metastases.",
  },
  {
    slug: "calcitriol",
    name: "Calcitriol",
    genericName: "calcitriol",
    category: "Endocrine",
    drugClass: "Active vitamin D",
    target: "Vitamin D receptor",
    description:
      "Active 1,25-dihydroxy vitamin D for renal osteodystrophy and hypoparathyroidism.",
  },
];
