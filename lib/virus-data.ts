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
];
