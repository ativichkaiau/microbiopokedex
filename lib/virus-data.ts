// Curated "pokédex" of medically notable viruses.
// Categories: nucleic acid (genome), envelope, and viral family.

export const GENOMES = ["DNA", "RNA"] as const;
export type Genome = (typeof GENOMES)[number];

export const ENVELOPES = ["enveloped", "non-enveloped"] as const;
export type Envelope = (typeof ENVELOPES)[number];

export type Virus = {
  slug: string;
  name: string;
  scientificName: string;
  genome: Genome;
  envelope: Envelope;
  family: string;
  description: string;
};

export const VIRUSES: Virus[] = [
  {
    slug: "influenza-a-virus",
    name: "Influenza A",
    scientificName: "Influenza A virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Segmented negative-sense RNA virus with hemagglutinin and neuraminidase spikes. Antigenic drift and shift drive seasonal flu and pandemics.",
  },
  {
    slug: "sars-cov-2",
    name: "SARS-CoV-2",
    scientificName: "Severe acute respiratory syndrome coronavirus 2",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Positive-sense RNA betacoronavirus with prominent spike proteins. Causes COVID-19, ranging from mild illness to severe pneumonia.",
  },
  {
    slug: "hiv-1",
    name: "HIV-1",
    scientificName: "Human immunodeficiency virus 1",
    genome: "RNA",
    envelope: "enveloped",
    family: "Retroviridae",
    description:
      "Diploid positive-sense RNA retrovirus that reverse-transcribes into host DNA and depletes CD4 T cells, causing AIDS.",
  },
  {
    slug: "hepatitis-b-virus",
    name: "Hepatitis B",
    scientificName: "Hepatitis B virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Hepadnaviridae",
    description:
      "Partially double-stranded DNA virus replicating via a reverse-transcribed RNA intermediate. Causes acute and chronic hepatitis and hepatocellular carcinoma.",
  },
  {
    slug: "hepatitis-c-virus",
    name: "Hepatitis C",
    scientificName: "Hepatitis C virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Positive-sense RNA virus with high mutation rate. Frequently establishes chronic infection leading to cirrhosis; now curable with direct-acting antivirals.",
  },
  {
    slug: "herpes-simplex-virus-1",
    name: "HSV-1",
    scientificName: "Herpes simplex virus 1",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Large double-stranded DNA virus establishing lifelong latency in sensory ganglia. Causes orolabial cold sores and, less often, encephalitis.",
  },
  {
    slug: "varicella-zoster-virus",
    name: "Varicella-zoster",
    scientificName: "Human alphaherpesvirus 3",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus. Primary infection causes chickenpox; reactivation from dorsal root ganglia causes dermatomal shingles.",
  },
  {
    slug: "epstein-barr-virus",
    name: "Epstein–Barr",
    scientificName: "Human gammaherpesvirus 4",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus infecting B cells. Causes infectious mononucleosis and is linked to Burkitt and nasopharyngeal cancers.",
  },
  {
    slug: "cytomegalovirus",
    name: "Cytomegalovirus",
    scientificName: "Human betaherpesvirus 5",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Large double-stranded DNA herpesvirus. Usually silent but a major cause of congenital infection and disease in transplant and HIV patients.",
  },
  {
    slug: "human-papillomavirus",
    name: "HPV",
    scientificName: "Human papillomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Papillomaviridae",
    description:
      "Small circular double-stranded DNA virus. Low-risk types cause warts; high-risk types (16/18) drive cervical and oropharyngeal cancers.",
  },
  {
    slug: "rotavirus",
    name: "Rotavirus",
    scientificName: "Rotavirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Reoviridae",
    description:
      "Segmented double-stranded RNA virus with a wheel-like capsid. The leading cause of severe dehydrating gastroenteritis in young children.",
  },
  {
    slug: "norovirus",
    name: "Norovirus",
    scientificName: "Norwalk virus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Caliciviridae",
    description:
      "Positive-sense RNA virus with a very low infectious dose. The dominant cause of epidemic non-bacterial gastroenteritis (cruise ships, institutions).",
  },
  {
    slug: "measles-virus",
    name: "Measles",
    scientificName: "Measles morbillivirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Negative-sense RNA virus and one of the most contagious pathogens. Causes fever, Koplik spots, rash, and rare late SSPE.",
  },
  {
    slug: "rabies-virus",
    name: "Rabies",
    scientificName: "Rabies lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "Bullet-shaped negative-sense RNA virus traveling along nerves to the CNS. Causes near-uniformly fatal encephalitis once symptomatic.",
  },
  {
    slug: "poliovirus",
    name: "Poliovirus",
    scientificName: "Enterovirus C (poliovirus)",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Small positive-sense RNA enterovirus spread fecal-orally. Invades anterior horn motor neurons causing flaccid paralytic poliomyelitis.",
  },
  {
    slug: "dengue-virus",
    name: "Dengue",
    scientificName: "Dengue virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne positive-sense RNA flavivirus with four serotypes. Secondary infection can progress to dengue hemorrhagic fever via antibody enhancement.",
  },
  {
    slug: "ebola-virus",
    name: "Ebola",
    scientificName: "Zaire ebolavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Filamentous negative-sense RNA virus. Causes severe viral hemorrhagic fever with high mortality and human-to-human transmission via body fluids.",
  },
  {
    slug: "adenovirus",
    name: "Adenovirus",
    scientificName: "Human adenovirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Adenoviridae",
    description:
      "Non-enveloped double-stranded DNA virus with fiber spikes. Causes pharyngoconjunctival fever, keratoconjunctivitis, and outbreaks of respiratory illness.",
  },
  {
    slug: "zika-virus",
    name: "Zika",
    scientificName: "Zika virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne positive-sense RNA flavivirus. Usually mild, but congenital infection causes microcephaly and severe fetal brain defects.",
  },
  {
    slug: "variola-virus",
    name: "Smallpox (Variola)",
    scientificName: "Variola virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Large brick-shaped double-stranded DNA virus that replicates in the cytoplasm. Caused smallpox; eradicated in 1980 by global vaccination.",
  },
  {
    slug: "herpes-simplex-virus-2",
    name: "HSV-2",
    scientificName: "Herpes simplex virus 2",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus latent in sacral ganglia. The usual cause of recurrent genital herpes and neonatal herpes from birth canal exposure.",
  },
  {
    slug: "human-herpesvirus-6",
    name: "HHV-6",
    scientificName: "Human betaherpesvirus 6",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus infecting T cells. Causes roseola infantum (exanthem subitum) and febrile seizures in young children.",
  },
  {
    slug: "kaposi-sarcoma-herpesvirus",
    name: "KSHV (HHV-8)",
    scientificName: "Human gammaherpesvirus 8",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus driving Kaposi sarcoma, primary effusion lymphoma, and multicentric Castleman disease, especially in AIDS.",
  },
  {
    slug: "monkeypox-virus",
    name: "Mpox",
    scientificName: "Monkeypox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Large double-stranded DNA orthopoxvirus. Causes mpox: fever and a deep-seated vesiculopustular rash; spreads by close contact.",
  },
  {
    slug: "molluscum-contagiosum-virus",
    name: "Molluscum",
    scientificName: "Molluscum contagiosum virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Poxvirus causing umbilicated flesh-colored skin papules, common in children and as an STI; extensive in immunocompromised hosts.",
  },
  {
    slug: "vaccinia-virus",
    name: "Vaccinia",
    scientificName: "Vaccinia virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Double-stranded DNA poxvirus used as the live smallpox vaccine and a vector platform; rare disseminated disease in immunocompromised vaccinees.",
  },
  {
    slug: "orf-virus",
    name: "Orf",
    scientificName: "Orf virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Parapoxvirus of sheep and goats. Direct contact causes a solitary nodular 'contagious ecthyma' lesion on the hands of farmers and vets.",
  },
  {
    slug: "cowpox-virus",
    name: "Cowpox",
    scientificName: "Cowpox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Orthopoxvirus with a wide host range. Causes localized pustular lesions in humans; historically the basis of Jenner's first vaccination.",
  },
  {
    slug: "parvovirus-b19",
    name: "Parvovirus B19",
    scientificName: "Primate erythroparvovirus 1",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Parvoviridae",
    description:
      "Tiny single-stranded DNA virus targeting erythroid progenitors. Causes fifth disease ('slapped cheek'), aplastic crisis, and hydrops fetalis.",
  },
  {
    slug: "bk-polyomavirus",
    name: "BK virus",
    scientificName: "BK polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Double-stranded DNA polyomavirus latent in the kidney. Reactivates in transplant patients causing nephropathy and hemorrhagic cystitis.",
  },
  {
    slug: "jc-polyomavirus",
    name: "JC virus",
    scientificName: "JC polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Double-stranded DNA polyomavirus that reactivates in severe immunosuppression to cause progressive multifocal leukoencephalopathy (PML).",
  },
  {
    slug: "merkel-cell-polyomavirus",
    name: "Merkel cell virus",
    scientificName: "Merkel cell polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Double-stranded DNA polyomavirus clonally integrated in most Merkel cell carcinomas, an aggressive neuroendocrine skin cancer.",
  },
  {
    slug: "hepatitis-a-virus",
    name: "Hepatitis A",
    scientificName: "Hepatovirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus spread fecal-orally. Causes acute self-limited hepatitis without a chronic carrier state; vaccine-preventable.",
  },
  {
    slug: "hepatitis-e-virus",
    name: "Hepatitis E",
    scientificName: "Paslahepevirus balayani",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Hepeviridae",
    description:
      "Positive-sense RNA virus from contaminated water or undercooked pork. Usually self-limited but has high mortality in pregnancy.",
  },
  {
    slug: "hepatitis-d-virus",
    name: "Hepatitis D (delta)",
    scientificName: "Hepatitis delta virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Kolmioviridae",
    description:
      "Defective circular RNA agent that borrows hepatitis B surface antigen for its envelope. Co- or super-infection worsens HBV liver disease.",
  },
  {
    slug: "coxsackievirus-a",
    name: "Coxsackie A",
    scientificName: "Enterovirus A (Coxsackie A)",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA enterovirus. Causes hand-foot-and-mouth disease and herpangina, mainly in young children.",
  },
  {
    slug: "coxsackievirus-b",
    name: "Coxsackie B",
    scientificName: "Enterovirus B (Coxsackie B)",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA enterovirus and a leading cause of viral myocarditis, pericarditis, and pleurodynia (Bornholm disease).",
  },
  {
    slug: "echovirus",
    name: "Echovirus",
    scientificName: "Enterovirus B (echovirus)",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA enterovirus and a frequent cause of aseptic (viral) meningitis and nonspecific febrile rashes in children.",
  },
  {
    slug: "enterovirus-d68",
    name: "Enterovirus D68",
    scientificName: "Enterovirus D68",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Respiratory enterovirus causing wheezing illness and outbreaks of polio-like acute flaccid myelitis in children.",
  },
  {
    slug: "rhinovirus",
    name: "Rhinovirus",
    scientificName: "Rhinovirus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus with over a hundred serotypes. The most common cause of the common cold and a trigger of asthma exacerbations.",
  },
  {
    slug: "yellow-fever-virus",
    name: "Yellow fever",
    scientificName: "Yellow fever virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne positive-sense RNA flavivirus. Causes hemorrhagic fever with jaundice and hepatic necrosis; a live vaccine is highly effective.",
  },
  {
    slug: "west-nile-virus",
    name: "West Nile",
    scientificName: "West Nile virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne flavivirus maintained in birds. Mostly subclinical, but causes neuroinvasive meningoencephalitis in older adults.",
  },
  {
    slug: "japanese-encephalitis-virus",
    name: "Japanese encephalitis",
    scientificName: "Japanese encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne flavivirus of rural Asia cycling in pigs and birds. The leading cause of vaccine-preventable viral encephalitis in the region.",
  },
  {
    slug: "tick-borne-encephalitis-virus",
    name: "Tick-borne encephalitis",
    scientificName: "Tick-borne encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Flavivirus transmitted by Ixodes ticks (and unpasteurized milk) across Europe and Asia. Causes a biphasic febrile then meningoencephalitic illness.",
  },
  {
    slug: "chikungunya-virus",
    name: "Chikungunya",
    scientificName: "Chikungunya virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Mosquito-borne alphavirus. Causes high fever and severe, often prolonged, symmetric polyarthralgia; rarely fatal.",
  },
  {
    slug: "rubella-virus",
    name: "Rubella",
    scientificName: "Rubella virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Matonaviridae",
    description:
      "Positive-sense RNA virus causing mild 'German measles'. First-trimester infection causes congenital rubella syndrome (deafness, cataracts, heart defects).",
  },
  {
    slug: "eastern-equine-encephalitis-virus",
    name: "EEE virus",
    scientificName: "Eastern equine encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Mosquito-borne alphavirus. Rare in humans but one of the most severe arboviral encephalitides, with high mortality and neurologic sequelae.",
  },
  {
    slug: "mumps-virus",
    name: "Mumps",
    scientificName: "Mumps orthorubulavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Negative-sense RNA paramyxovirus. Causes parotitis and can lead to orchitis, aseptic meningitis, and deafness; MMR-preventable.",
  },
  {
    slug: "parainfluenza-virus",
    name: "Parainfluenza",
    scientificName: "Human parainfluenza virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Negative-sense RNA paramyxovirus and the leading cause of croup (laryngotracheobronchitis), plus bronchiolitis and pneumonia in children.",
  },
  {
    slug: "respiratory-syncytial-virus",
    name: "RSV",
    scientificName: "Human respiratory syncytial virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Pneumoviridae",
    description:
      "Negative-sense RNA virus that fuses cells into syncytia. The top cause of infant bronchiolitis and pneumonia, and serious in the elderly.",
  },
  {
    slug: "human-metapneumovirus",
    name: "Metapneumovirus",
    scientificName: "Human metapneumovirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Pneumoviridae",
    description:
      "Negative-sense RNA virus causing RSV-like upper and lower respiratory infection in young children, the elderly, and immunocompromised patients.",
  },
  {
    slug: "nipah-virus",
    name: "Nipah",
    scientificName: "Nipah henipavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Bat-borne negative-sense RNA henipavirus. Causes outbreaks of severe encephalitis and respiratory disease with very high mortality.",
  },
  {
    slug: "hendra-virus",
    name: "Hendra",
    scientificName: "Hendra henipavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Bat-borne henipavirus transmitted via horses in Australia. Causes severe respiratory and neurologic disease with high case fatality.",
  },
  {
    slug: "influenza-b-virus",
    name: "Influenza B",
    scientificName: "Influenza B virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Segmented negative-sense RNA virus infecting mainly humans. Undergoes antigenic drift, contributing to seasonal epidemics (no pandemics).",
  },
  {
    slug: "lassa-virus",
    name: "Lassa",
    scientificName: "Lassa mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne segmented RNA arenavirus endemic to West Africa. Causes Lassa hemorrhagic fever, with sensorineural hearing loss as a sequela.",
  },
  {
    slug: "lymphocytic-choriomeningitis-virus",
    name: "LCMV",
    scientificName: "Lymphocytic choriomeningitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne arenavirus. Causes aseptic meningitis in adults and severe congenital infection (hydrocephalus, chorioretinitis).",
  },
  {
    slug: "sin-nombre-hantavirus",
    name: "Hantavirus",
    scientificName: "Sin Nombre orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "Rodent-borne segmented RNA virus inhaled from deer-mouse droppings. Causes hantavirus cardiopulmonary syndrome in the Americas.",
  },
  {
    slug: "crimean-congo-hemorrhagic-fever-virus",
    name: "CCHF virus",
    scientificName: "Crimean-Congo hemorrhagic fever virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Nairoviridae",
    description:
      "Tick-borne segmented RNA virus. Causes a severe hemorrhagic fever with high mortality and nosocomial spread via blood.",
  },
  {
    slug: "rift-valley-fever-virus",
    name: "Rift Valley fever",
    scientificName: "Rift Valley fever virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Mosquito-borne segmented RNA virus of African livestock. Human disease ranges from febrile illness to retinitis, encephalitis, and hemorrhagic fever.",
  },
  {
    slug: "marburg-virus",
    name: "Marburg",
    scientificName: "Marburg marburgvirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Filamentous negative-sense RNA filovirus linked to fruit bats and caves. Causes severe viral hemorrhagic fever with very high mortality.",
  },
  {
    slug: "htlv-1",
    name: "HTLV-1",
    scientificName: "Human T-lymphotropic virus 1",
    genome: "RNA",
    envelope: "enveloped",
    family: "Retroviridae",
    description:
      "Oncogenic retrovirus that integrates into T-cell DNA. Causes adult T-cell leukemia/lymphoma and HTLV-associated myelopathy after long latency.",
  },
  {
    slug: "mers-cov",
    name: "MERS-CoV",
    scientificName: "Middle East respiratory syndrome coronavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Positive-sense RNA betacoronavirus linked to dromedary camels. Causes severe respiratory disease with high case fatality and limited spread.",
  },
  {
    slug: "sars-cov",
    name: "SARS-CoV",
    scientificName: "Severe acute respiratory syndrome coronavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Positive-sense RNA betacoronavirus from the 2003 outbreak. Causes severe atypical pneumonia; contained by public-health measures.",
  },
  {
    slug: "human-coronavirus-oc43",
    name: "Common-cold CoV",
    scientificName: "Human coronavirus OC43",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Endemic positive-sense RNA betacoronavirus. One of several coronaviruses causing mild seasonal upper-respiratory common colds.",
  },
  {
    slug: "astrovirus",
    name: "Astrovirus",
    scientificName: "Human astrovirus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Astroviridae",
    description:
      "Star-shaped positive-sense RNA virus. A common cause of mild watery diarrhea in young children, the elderly, and immunocompromised patients.",
  },
  {
    slug: "sapovirus",
    name: "Sapovirus",
    scientificName: "Sapporo virus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Caliciviridae",
    description:
      "Positive-sense RNA calicivirus related to norovirus. Causes acute gastroenteritis outbreaks, especially in children and care settings.",
  },
  {
    slug: "mammalian-orthoreovirus",
    name: "Reovirus",
    scientificName: "Mammalian orthoreovirus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Reoviridae",
    description:
      "Double-stranded segmented RNA virus, nearly ubiquitous and usually asymptomatic. Studied as an oncolytic agent and a model of viral pathogenesis.",
  },
];
