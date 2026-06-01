// Curated catalog of antimicrobial drugs across the four microbial sections.
// Each entry has a slug used for cross-linking from the microbe pharmacology
// map. Descriptions include the spectrum / typical clinical use inline.

export const CATEGORIES = [
  "Antibacterial",
  "Antiviral",
  "Antifungal",
  "Antiparasitic",
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
];
