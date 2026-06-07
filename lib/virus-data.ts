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
  {
    slug: "human-herpesvirus-7",
    name: "HHV-7",
    scientificName: "Human betaherpesvirus 7",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus that is near-universal and T-cell tropic. Causes some cases of roseola and febrile illness in young children.",
  },
  {
    slug: "herpes-b-virus",
    name: "Herpes B",
    scientificName: "Macacine alphaherpesvirus 1",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Macaque herpesvirus. Rare zoonotic monkey-bite exposure causes near-uniformly fatal ascending encephalomyelitis without prophylaxis.",
  },
  {
    slug: "human-bocavirus",
    name: "Bocavirus",
    scientificName: "Human bocavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Parvoviridae",
    description:
      "Small single-stranded DNA parvovirus. Detected in young children with wheezing, bronchiolitis, and gastroenteritis, often as a co-infection.",
  },
  {
    slug: "adeno-associated-virus",
    name: "AAV",
    scientificName: "Adeno-associated virus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Parvoviridae",
    description:
      "Replication-defective single-stranded DNA dependoparvovirus needing a helper virus. Non-pathogenic and the leading in-vivo gene-therapy vector.",
  },
  {
    slug: "ki-polyomavirus",
    name: "KI polyomavirus",
    scientificName: "KI polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Double-stranded DNA polyomavirus found in respiratory secretions. Of uncertain pathogenicity; usually an incidental co-detection.",
  },
  {
    slug: "torque-teno-virus",
    name: "Torque teno virus",
    scientificName: "Torque teno virus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Anelloviridae",
    description:
      "Tiny circular single-stranded DNA anellovirus carried by nearly everyone. Non-pathogenic; its load is studied as a marker of immune competence.",
  },
  {
    slug: "tanapox-virus",
    name: "Tanapox",
    scientificName: "Tanapox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "African yatapoxvirus from monkeys. Causes a febrile illness with one or a few large nodular skin lesions that resolve over weeks.",
  },
  {
    slug: "pseudocowpox-virus",
    name: "Pseudocowpox",
    scientificName: "Pseudocowpox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Parapoxvirus of cattle udders. Contact causes 'milker's nodule' — a solitary firm reddish nodule on the hands of dairy workers.",
  },
  {
    slug: "enterovirus-71",
    name: "Enterovirus 71",
    scientificName: "Enterovirus A71",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA enterovirus. Causes hand-foot-and-mouth disease with a tendency for severe brainstem encephalitis and large outbreaks in Asia.",
  },
  {
    slug: "human-parechovirus",
    name: "Parechovirus",
    scientificName: "Human parechovirus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus. A frequent cause of neonatal sepsis-like illness, meningoencephalitis, and rash in infants.",
  },
  {
    slug: "aichi-virus",
    name: "Aichi virus",
    scientificName: "Aichivirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA kobuvirus linked to shellfish. An uncommon cause of gastroenteritis and traveler's diarrhea worldwide.",
  },
  {
    slug: "saffold-virus",
    name: "Saffold virus",
    scientificName: "Saffold virus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA cardiovirus, the first human Theiler-like virus. Common in childhood; a possible contributor to enteric and respiratory illness.",
  },
  {
    slug: "saint-louis-encephalitis-virus",
    name: "St. Louis encephalitis",
    scientificName: "Saint Louis encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne flavivirus cycling in birds across the Americas. Mostly subclinical, but causes encephalitis with higher severity in the elderly.",
  },
  {
    slug: "powassan-virus",
    name: "Powassan",
    scientificName: "Powassan virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "North American tick-borne flavivirus transmitted within minutes of attachment. Causes severe encephalitis with frequent neurologic sequelae.",
  },
  {
    slug: "murray-valley-encephalitis-virus",
    name: "Murray Valley encephalitis",
    scientificName: "Murray Valley encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Australian mosquito-borne flavivirus maintained in water birds. Rare but causes severe encephalitis, especially in northern Australia.",
  },
  {
    slug: "kyasanur-forest-disease-virus",
    name: "Kyasanur Forest disease",
    scientificName: "Kyasanur Forest disease virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Tick-borne flavivirus of southern India. Causes a biphasic hemorrhagic fever with later neurologic involvement; linked to monkey die-offs.",
  },
  {
    slug: "gb-virus-c",
    name: "GB virus C",
    scientificName: "Human pegivirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Blood-borne pegivirus related to hepatitis C but apparently non-pathogenic. Persistent infection is associated with slower HIV progression.",
  },
  {
    slug: "western-equine-encephalitis-virus",
    name: "WEE virus",
    scientificName: "Western equine encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Mosquito-borne alphavirus of the western Americas. Causes encephalitis, generally milder than eastern equine but severe in infants.",
  },
  {
    slug: "venezuelan-equine-encephalitis-virus",
    name: "VEE virus",
    scientificName: "Venezuelan equine encephalitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Mosquito-borne alphavirus with explosive equine and human epizootics. Causes a flu-like illness and occasional encephalitis; highly infectious as an aerosol.",
  },
  {
    slug: "ross-river-virus",
    name: "Ross River",
    scientificName: "Ross River virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Australian mosquito-borne alphavirus. Causes epidemic polyarthritis with rash and prolonged, sometimes months-long, joint pain.",
  },
  {
    slug: "mayaro-virus",
    name: "Mayaro",
    scientificName: "Mayaro virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Neotropical mosquito-borne alphavirus of South America. Causes a chikungunya-like febrile illness with persistent arthralgia.",
  },
  {
    slug: "sindbis-virus",
    name: "Sindbis",
    scientificName: "Sindbis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Widely distributed mosquito-borne alphavirus and a key molecular-biology model. Human disease is a self-limited fever, rash, and arthralgia.",
  },
  {
    slug: "oropouche-virus",
    name: "Oropouche",
    scientificName: "Oropouche virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Midge-borne segmented RNA orthobunyavirus of the Americas. Causes large urban outbreaks of a dengue-like febrile illness, sometimes with meningitis.",
  },
  {
    slug: "la-crosse-virus",
    name: "La Crosse",
    scientificName: "La Crosse virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Mosquito-borne segmented RNA orthobunyavirus of the US Midwest. A leading cause of pediatric arboviral encephalitis and seizures.",
  },
  {
    slug: "toscana-virus",
    name: "Toscana",
    scientificName: "Toscana virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Sandfly-borne segmented RNA phlebovirus of the Mediterranean. A major summer cause of aseptic meningitis and meningoencephalitis.",
  },
  {
    slug: "sfts-virus",
    name: "SFTS virus",
    scientificName: "Dabie bandavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Tick-borne segmented RNA phlebovirus in East Asia. Causes severe fever with thrombocytopenia syndrome — high fever, low platelets, and multiorgan failure.",
  },
  {
    slug: "hantaan-virus",
    name: "Hantaan",
    scientificName: "Hantaan orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "Rodent-borne segmented RNA hantavirus of East Asia. The prototype cause of hemorrhagic fever with renal syndrome (Korean hemorrhagic fever).",
  },
  {
    slug: "andes-virus",
    name: "Andes",
    scientificName: "Andes orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "South American rodent-borne hantavirus causing hantavirus pulmonary syndrome, and the only hantavirus with documented person-to-person spread.",
  },
  {
    slug: "junin-virus",
    name: "Junín",
    scientificName: "Junín mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne segmented RNA arenavirus of the Argentine pampas. Causes Argentine hemorrhagic fever; preventable with the Candid#1 vaccine.",
  },
  {
    slug: "machupo-virus",
    name: "Machupo",
    scientificName: "Machupo mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne arenavirus of Bolivia. Causes Bolivian hemorrhagic fever with bleeding and neurologic signs and high mortality.",
  },
  {
    slug: "sudan-ebolavirus",
    name: "Sudan ebolavirus",
    scientificName: "Sudan ebolavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Filamentous negative-sense RNA filovirus distinct from Zaire ebolavirus. Causes recurrent Ebola virus disease outbreaks with no licensed vaccine.",
  },
  {
    slug: "vesicular-stomatitis-virus",
    name: "VSV",
    scientificName: "Vesicular stomatitis virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "Bullet-shaped negative-sense RNA rhabdovirus of livestock. Causes mild flu-like illness in handlers and is a key vaccine and oncolytic vector.",
  },
  {
    slug: "chandipura-virus",
    name: "Chandipura",
    scientificName: "Chandipura vesiculovirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "Sandfly-borne negative-sense RNA rhabdovirus of India. Causes rapidly progressive, often fatal pediatric encephalitis in outbreaks.",
  },
  {
    slug: "colorado-tick-fever-virus",
    name: "Colorado tick fever",
    scientificName: "Colorado tick fever virus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Reoviridae",
    description:
      "Double-stranded segmented RNA coltivirus from Rocky Mountain wood ticks. Causes a biphasic 'saddleback' fever; the virus persists in red cells.",
  },
  {
    slug: "influenza-c-virus",
    name: "Influenza C",
    scientificName: "Influenza C virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Segmented negative-sense RNA virus with only mild upper-respiratory illness, mostly in children. Does not cause epidemics or pandemics.",
  },
  {
    slug: "htlv-2",
    name: "HTLV-2",
    scientificName: "Human T-lymphotropic virus 2",
    genome: "RNA",
    envelope: "enveloped",
    family: "Retroviridae",
    description:
      "Retrovirus endemic in some indigenous and injection-drug-use populations. Largely non-pathogenic, with a weak link to neurologic disease.",
  },
  {
    slug: "newcastle-disease-virus",
    name: "Newcastle disease virus",
    scientificName: "Avian orthoavulavirus 1",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Negative-sense RNA avian paramyxovirus. Causes mild self-limited conjunctivitis in poultry workers and is studied as an oncolytic agent.",
  },
  {
    slug: "borna-disease-virus",
    name: "Borna disease virus",
    scientificName: "Borna disease virus 1",
    genome: "RNA",
    envelope: "enveloped",
    family: "Bornaviridae",
    description:
      "Negative-sense RNA virus that replicates in the nucleus and persists in neurons. Linked to rare, often fatal human encephalitis from infected mammals.",
  },
  {
    slug: "wu-polyomavirus",
    name: "WU polyomavirus",
    scientificName: "WU polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Double-stranded DNA polyomavirus first found in pediatric respiratory secretions. Pathogenicity is uncertain; most often a co-detection.",
  },
  {
    slug: "trichodysplasia-spinulosa-polyomavirus",
    name: "TS polyomavirus",
    scientificName: "Trichodysplasia spinulosa-associated polyomavirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Polyomaviridae",
    description:
      "Skin polyomavirus reactivating in heavy immunosuppression. Causes trichodysplasia spinulosa: facial keratin spicules and alopecia of the eyebrows.",
  },
  {
    slug: "camelpox-virus",
    name: "Camelpox",
    scientificName: "Camelpox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "Orthopoxvirus of dromedary camels, closely related to variola. Causes rare zoonotic pustular skin lesions in camel handlers.",
  },
  {
    slug: "human-coronavirus-229e",
    name: "HCoV-229E",
    scientificName: "Human coronavirus 229E",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Endemic alphacoronavirus circulating worldwide. One of several common-cold coronaviruses causing mild upper-respiratory illness.",
  },
  {
    slug: "human-coronavirus-nl63",
    name: "HCoV-NL63",
    scientificName: "Human coronavirus NL63",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Endemic alphacoronavirus that uses ACE2 like SARS-CoV-2. Causes upper-respiratory illness and is a notable cause of croup in children.",
  },
  {
    slug: "human-coronavirus-hku1",
    name: "HCoV-HKU1",
    scientificName: "Human coronavirus HKU1",
    genome: "RNA",
    envelope: "enveloped",
    family: "Coronaviridae",
    description:
      "Endemic betacoronavirus first identified in Hong Kong. Causes common-cold-like illness with occasional lower respiratory disease in the elderly.",
  },
  {
    slug: "hiv-2",
    name: "HIV-2",
    scientificName: "Human immunodeficiency virus 2",
    genome: "RNA",
    envelope: "enveloped",
    family: "Retroviridae",
    description:
      "Retrovirus of West African origin, less transmissible and slower-progressing than HIV-1. Intrinsically resistant to non-nucleoside reverse-transcriptase inhibitors.",
  },
  {
    slug: "puumala-virus",
    name: "Puumala",
    scientificName: "Puumala orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "European bank-vole-borne segmented RNA hantavirus. Causes nephropathia epidemica, a milder hemorrhagic fever with renal syndrome.",
  },
  {
    slug: "seoul-virus",
    name: "Seoul",
    scientificName: "Seoul orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "Rat-borne hantavirus distributed worldwide via shipping. Causes hemorrhagic fever with renal syndrome and outbreaks among pet-rat owners.",
  },
  {
    slug: "dobrava-belgrade-virus",
    name: "Dobrava-Belgrade",
    scientificName: "Dobrava-Belgrade orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "Yellow-necked-mouse-borne hantavirus of the Balkans. Causes the most severe European hemorrhagic fever with renal syndrome.",
  },
  {
    slug: "lujo-virus",
    name: "Lujo",
    scientificName: "Lujo mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Old World arenavirus first identified in a 2008 southern-African nosocomial outbreak. Causes Lujo hemorrhagic fever with very high mortality.",
  },
  {
    slug: "chapare-virus",
    name: "Chapare",
    scientificName: "Chapare mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne Bolivian arenavirus. Causes Chapare hemorrhagic fever with nosocomial transmission and high case fatality.",
  },
  {
    slug: "sabia-virus",
    name: "Sabiá",
    scientificName: "Sabiá mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Brazilian arenavirus. Causes severe Brazilian hemorrhagic fever; multiple laboratory infections highlighted its hazard.",
  },
  {
    slug: "heartland-virus",
    name: "Heartland",
    scientificName: "Heartland bandavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Lone-Star-tick-borne segmented RNA phlebovirus of the central US. Causes a febrile illness with leukopenia and thrombocytopenia resembling ehrlichiosis.",
  },
  {
    slug: "bourbon-virus",
    name: "Bourbon",
    scientificName: "Bourbon virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Tick-borne thogotovirus of the central US. Causes a rare febrile illness with leukopenia and thrombocytopenia, occasionally fatal.",
  },
  {
    slug: "jamestown-canyon-virus",
    name: "Jamestown Canyon",
    scientificName: "Jamestown Canyon virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "North American mosquito-borne orthobunyavirus. Causes febrile illness and meningoencephalitis, mostly in adults in the upper Midwest.",
  },
  {
    slug: "snowshoe-hare-virus",
    name: "Snowshoe hare virus",
    scientificName: "Snowshoe hare orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Canadian mosquito-borne orthobunyavirus in the California encephalitis serogroup. Causes pediatric meningoencephalitis at northern latitudes.",
  },
  {
    slug: "bunyamwera-virus",
    name: "Bunyamwera",
    scientificName: "Bunyamwera orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Type species of the Orthobunyavirus genus, mosquito-borne across Africa. Causes a mild self-limited febrile arthralgia with occasional rash.",
  },
  {
    slug: "bundibugyo-ebolavirus",
    name: "Bundibugyo ebolavirus",
    scientificName: "Bundibugyo ebolavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Filovirus first identified in Uganda in 2007. Causes Ebola virus disease with somewhat lower mortality than Zaire ebolavirus.",
  },
  {
    slug: "tai-forest-ebolavirus",
    name: "Taï Forest ebolavirus",
    scientificName: "Taï Forest ebolavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Côte d'Ivoire chimpanzee-associated filovirus. A single recognized human case, contracted while performing a chimpanzee autopsy.",
  },
  {
    slug: "reston-ebolavirus",
    name: "Reston ebolavirus",
    scientificName: "Reston ebolavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Filipino filovirus of macaques and pigs. Causes severe disease in non-human primates but only asymptomatic seroconversion in humans.",
  },
  {
    slug: "lloviu-virus",
    name: "Lloviu",
    scientificName: "Lloviu cuevavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Bat-borne filovirus (genus Cuevavirus) from Spanish and Hungarian caves. Linked to mass die-offs in Schreiber's bats; uncertain human pathogenicity.",
  },
  {
    slug: "mokola-virus",
    name: "Mokola",
    scientificName: "Mokola lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "African lyssavirus most often isolated from shrews and pets. Causes rabies-like encephalitis not reliably prevented by standard rabies vaccine.",
  },
  {
    slug: "australian-bat-lyssavirus",
    name: "Australian bat lyssavirus",
    scientificName: "Australian bat lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "Bat-borne lyssavirus closely related to rabies. Bites or scratches from Australian flying foxes cause fatal encephalitis; rabies vaccine cross-protects.",
  },
  {
    slug: "european-bat-lyssavirus",
    name: "European bat lyssavirus",
    scientificName: "European bat lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "Insectivorous-bat-borne lyssavirus in Europe. Rare human cases cause rabies-like fatal encephalitis after bat bites or scratches.",
  },
  {
    slug: "cosavirus",
    name: "Cosavirus",
    scientificName: "Cosavirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus shed in stool. Detected in children with acute flaccid paralysis and gastroenteritis; pathogenic role unclear.",
  },
  {
    slug: "salivirus",
    name: "Salivirus",
    scientificName: "Salivirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus first found in sewage and stool. Linked to outbreaks of acute gastroenteritis worldwide.",
  },
  {
    slug: "banna-virus",
    name: "Banna virus",
    scientificName: "Banna virus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Reoviridae",
    description:
      "Double-stranded segmented RNA seadornavirus in Asia. Tick- and mosquito-associated; isolated from patients with febrile illness and encephalitis.",
  },
  {
    slug: "influenza-d-virus",
    name: "Influenza D",
    scientificName: "Influenza D virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Segmented negative-sense RNA orthomyxovirus of cattle. Sporadic seroconversion in livestock workers; no established human disease.",
  },
  {
    slug: "cedar-henipavirus",
    name: "Cedar henipavirus",
    scientificName: "Cedar henipavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Australian fruit-bat henipavirus, a relative of Nipah and Hendra. Apparently non-pathogenic, used as a comparator for henipavirus research.",
  },
  {
    slug: "simian-foamy-virus",
    name: "Simian foamy virus",
    scientificName: "Simian foamy virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Retroviridae",
    description:
      "Spumaretrovirus of nonhuman primates. Zoonotic exposure causes persistent but apparently non-pathogenic infection in primate handlers.",
  },
  {
    slug: "human-herpesvirus-8",
    name: "HHV-8 (KSHV)",
    scientificName: "Human gammaherpesvirus 8",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Double-stranded DNA herpesvirus and the cause of Kaposi sarcoma, primary effusion lymphoma, and multicentric Castleman disease, especially in AIDS.",
  },
  {
    slug: "saimiriine-herpesvirus-2",
    name: "Herpesvirus saimiri",
    scientificName: "Saimiriine gammaherpesvirus 2",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Squirrel-monkey gammaherpesvirus that transforms T cells. Non-pathogenic in its host but a workhorse model of viral oncogenesis.",
  },
  {
    slug: "buffalopox-virus",
    name: "Buffalopox",
    scientificName: "Buffalopox virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "A vaccinia-derived orthopoxvirus of South Asian water buffalo. Causes zoonotic pustular hand and udder lesions in milkers during outbreaks.",
  },
  {
    slug: "yaba-monkey-tumor-virus",
    name: "Yaba monkey tumor virus",
    scientificName: "Yatapoxvirus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Poxviridae",
    description:
      "African yatapoxvirus of primates. Direct contact causes benign histiocytic skin tumors that regress spontaneously over weeks.",
  },
  {
    slug: "lymphocryptovirus-papio",
    name: "Baboon LCV",
    scientificName: "Papiine gammaherpesvirus 1",
    genome: "DNA",
    envelope: "enveloped",
    family: "Herpesviridae",
    description:
      "Baboon Epstein-Barr-like lymphocryptovirus. Used as an animal model of EBV-driven B-cell transformation and lymphoma.",
  },
  {
    slug: "saint-louis-aichivirus-b",
    name: "Aichivirus B",
    scientificName: "Aichivirus B",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA kobuvirus detected in stool and sewage worldwide. Of uncertain clinical significance in human gastroenteritis.",
  },
  {
    slug: "ljungan-virus",
    name: "Ljungan virus",
    scientificName: "Parechovirus B",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Rodent-borne parechovirus first found in Swedish bank voles. Investigated for possible links to human metabolic and fetal disease.",
  },
  {
    slug: "usutu-virus",
    name: "Usutu",
    scientificName: "Usutu virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne flavivirus cycling in birds across Europe and Africa. Causes occasional human febrile illness and neuroinvasive disease.",
  },
  {
    slug: "wesselsbron-virus",
    name: "Wesselsbron",
    scientificName: "Wesselsbron virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Mosquito-borne flavivirus of African livestock. Human infection causes a self-limited febrile illness with myalgia and rash.",
  },
  {
    slug: "ilheus-virus",
    name: "Ilhéus",
    scientificName: "Ilhéus virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Neotropical mosquito-borne flavivirus. Causes sporadic febrile illness and rare encephalitis across Central and South America.",
  },
  {
    slug: "barmah-forest-virus",
    name: "Barmah Forest",
    scientificName: "Barmah Forest virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "Australian mosquito-borne alphavirus. Causes polyarthritis, rash, and fever resembling Ross River virus disease.",
  },
  {
    slug: "onyong-nyong-virus",
    name: "O'nyong-nyong",
    scientificName: "O'nyong-nyong virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "African Anopheles-borne alphavirus closely related to chikungunya. Causes epidemic fever, rash, and severe joint pain.",
  },
  {
    slug: "semliki-forest-virus",
    name: "Semliki Forest virus",
    scientificName: "Semliki Forest virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Togaviridae",
    description:
      "African mosquito-borne alphavirus and a major molecular-biology model. Rare human febrile illness; one fatal laboratory encephalitis case.",
  },
  {
    slug: "guanarito-virus",
    name: "Guanarito",
    scientificName: "Guanarito mammarenavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Arenaviridae",
    description:
      "Rodent-borne arenavirus of Venezuela. Causes Venezuelan hemorrhagic fever with bleeding, neurologic signs, and high mortality.",
  },
  {
    slug: "tula-virus",
    name: "Tula",
    scientificName: "Tula orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "European vole-borne hantavirus. Usually subclinical but causes occasional mild hemorrhagic fever with renal syndrome.",
  },
  {
    slug: "thogoto-virus",
    name: "Thogoto",
    scientificName: "Thogoto virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Orthomyxoviridae",
    description:
      "Tick-borne orthomyxovirus of Africa and southern Europe. Rare human infection causes meningitis and febrile illness.",
  },
  {
    slug: "menangle-virus",
    name: "Menangle",
    scientificName: "Menangle pararubulavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Paramyxoviridae",
    description:
      "Bat-borne paramyxovirus that spread through Australian piggeries. Causes febrile illness with rash in exposed workers.",
  },
  {
    slug: "menglavirus",
    name: "Menglà virus",
    scientificName: "Mènglà dianlovirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "Bat-derived filovirus discovered in China, related to Ebola and Marburg. Uses the same NPC1 entry receptor; human risk is unknown.",
  },
  {
    slug: "lake-victoria-marburgvirus-ravn",
    name: "Ravn virus",
    scientificName: "Ravn virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Filoviridae",
    description:
      "A distinct member of the Marburg marburgvirus species. Causes Marburg hemorrhagic fever in African outbreaks with high mortality.",
  },
  {
    slug: "rosavirus",
    name: "Rosavirus",
    scientificName: "Rosavirus A",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus found in stool. Detected in children with diarrhea; its causal role remains under study.",
  },
  {
    slug: "kobuvirus",
    name: "Aichivirus / Kobuvirus",
    scientificName: "Aichivirus C",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Positive-sense RNA picornavirus shed in stool. Detected worldwide in pediatric diarrhea, often co-infecting with rotavirus or norovirus.",
  },
  {
    slug: "enterovirus-a71-bf",
    name: "Enterovirus A71 (severe HFMD)",
    scientificName: "Enterovirus A71",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Picornaviridae",
    description:
      "Drives large outbreaks of severe hand-foot-and-mouth disease in Asia, with brainstem encephalitis and cardiopulmonary collapse in young children.",
  },
  {
    slug: "human-cyclovirus",
    name: "Cyclovirus",
    scientificName: "Cyclovirus CyCV",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Circoviridae",
    description:
      "Tiny single-stranded DNA circovirus detected in CSF of patients with paralysis and encephalitis. Pathogenic role still being characterized.",
  },
  {
    slug: "human-anellovirus",
    name: "Anelloviruses (TTV family)",
    scientificName: "Anellovirus",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Anelloviridae",
    description:
      "Diverse single-stranded DNA viruses present in nearly everyone. Non-pathogenic; viral load is studied as a biomarker of immune competence.",
  },
  {
    slug: "duvenhage-virus",
    name: "Duvenhage virus",
    scientificName: "Duvenhage lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "African bat-borne lyssavirus. Rare human exposure causes rabies-like fatal encephalitis after bat bites.",
  },
  {
    slug: "lagos-bat-virus",
    name: "Lagos bat lyssavirus",
    scientificName: "Lagos bat lyssavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Rhabdoviridae",
    description:
      "African frugivorous bat lyssavirus. Has caused rabies-like encephalitis in cats and dogs; sporadic human exposure carries the same lethal risk.",
  },
  {
    slug: "kemerovo-virus",
    name: "Kemerovo virus",
    scientificName: "Kemerovo orbivirus",
    genome: "RNA",
    envelope: "non-enveloped",
    family: "Reoviridae",
    description:
      "Tick-borne double-stranded RNA orbivirus of Siberia and Central Europe. Causes febrile illness with occasional meningoencephalitis.",
  },
  {
    slug: "human-pegivirus-2",
    name: "Human pegivirus 2",
    scientificName: "Human pegivirus 2",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Blood-borne pegivirus related to GBV-C. Persistently infects up to 5% of donors; clinical significance is uncertain.",
  },
  {
    slug: "alkhurma-virus",
    name: "Alkhurma virus",
    scientificName: "Alkhurma hemorrhagic fever virus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Tick-borne flavivirus related to Kyasanur Forest virus, endemic to Saudi Arabia. Causes hemorrhagic fever with hepatitis and encephalitis.",
  },
  {
    slug: "rio-mamore-virus",
    name: "Rio Mamoré virus",
    scientificName: "Rio Mamoré orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "South-American rodent-borne hantavirus. Sporadic cause of hantavirus pulmonary syndrome in the Amazon basin.",
  },
  {
    slug: "monongahela-virus",
    name: "Monongahela virus",
    scientificName: "Monongahela orthohantavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Hantaviridae",
    description:
      "North-American hantavirus closely related to Sin Nombre. Causes hantavirus pulmonary syndrome along the Appalachian range.",
  },
  {
    slug: "ngari-virus",
    name: "Ngari virus",
    scientificName: "Ngari orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Reassortant bunyavirus of sub-Saharan Africa. Linked to outbreaks of hemorrhagic fever during Rift Valley fever epizootics.",
  },
  {
    slug: "tahyna-virus",
    name: "Tahyna virus",
    scientificName: "Tahyna orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "European mosquito-borne orthobunyavirus in the California encephalitis serogroup. Causes a flu-like illness with rare meningitis.",
  },
  {
    slug: "punta-toro-virus",
    name: "Punta Toro virus",
    scientificName: "Punta Toro phlebovirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Neotropical sandfly-borne phlebovirus of Panama. Causes a brief febrile illness with hepatitis-like enzyme rise.",
  },
  {
    slug: "sandfly-fever-naples",
    name: "Sandfly fever Naples virus",
    scientificName: "Sandfly fever Naples phlebovirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Phenuiviridae",
    description:
      "Sandfly-borne phlebovirus of the Mediterranean. Causes 'three-day fever' with severe headache, myalgia, and photophobia.",
  },
  {
    slug: "akabane-virus",
    name: "Akabane virus",
    scientificName: "Akabane orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "Midge-borne orthobunyavirus of cattle and sheep. Veterinary teratogen; no confirmed human disease but a frequent surveillance target.",
  },
  {
    slug: "schmallenberg-virus",
    name: "Schmallenberg virus",
    scientificName: "Schmallenberg orthobunyavirus",
    genome: "RNA",
    envelope: "enveloped",
    family: "Peribunyaviridae",
    description:
      "European midge-borne orthobunyavirus discovered in 2011. Causes ruminant congenital arthrogryposis; no proven human pathogenicity.",
  },
  {
    slug: "hepatitis-g-virus",
    name: "Hepatitis G virus (HGV)",
    scientificName: "Pegivirus C",
    genome: "RNA",
    envelope: "enveloped",
    family: "Flaviviridae",
    description:
      "Blood-borne pegivirus related to GBV-C. Persistently infects without confirmed disease; may slow HIV progression.",
  },
  {
    slug: "asfarvirus-african-swine-fever",
    name: "African swine fever virus",
    scientificName: "African swine fever virus",
    genome: "DNA",
    envelope: "enveloped",
    family: "Asfarviridae",
    description:
      "Tick-and-pig-borne double-stranded DNA virus causing devastating hemorrhagic fever in pigs. Not known to infect humans but tracked as a major agricultural threat.",
  },
  {
    slug: "circovirus-pcv2",
    name: "Porcine circovirus 2",
    scientificName: "Porcine circovirus 2",
    genome: "DNA",
    envelope: "non-enveloped",
    family: "Circoviridae",
    description:
      "Tiny single-stranded DNA circovirus causing post-weaning multisystemic wasting in pigs. A common contaminant of biologicals and rotavirus vaccines.",
  },
];
