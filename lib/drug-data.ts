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
];
