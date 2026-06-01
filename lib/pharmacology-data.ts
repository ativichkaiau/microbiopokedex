// Microbe → drug map. Keyed by section + organism slug. The drug strings are
// drug slugs from drug-data.ts (so they cross-link to /pharmacology/[slug]).
// Organisms not listed here render "Not characterized in this pokédex" on the
// detail page — the goal is honest coverage, not fake values for every entry.

import type { SectionKey } from "./sections";

export type MicrobePharmacology = {
  section: SectionKey;
  slug: string;
  resistance: string[];
  effective: string[];
};

export const MICROBE_PHARMACOLOGY: MicrobePharmacology[] = [
  // ---------- Bacteria ----------
  {
    section: "bacteria",
    slug: "staphylococcus-aureus",
    resistance: ["penicillin-g"],
    effective: [
      "nafcillin",
      "cefazolin",
      "vancomycin",
      "clindamycin",
      "tmp-smx",
      "doxycycline",
    ],
  },
  {
    section: "bacteria",
    slug: "staphylococcus-epidermidis",
    resistance: ["penicillin-g", "nafcillin", "cefazolin"],
    effective: ["vancomycin", "linezolid", "daptomycin"],
  },
  {
    section: "bacteria",
    slug: "streptococcus-pyogenes",
    resistance: [],
    effective: ["penicillin-g", "amoxicillin", "azithromycin", "cefazolin"],
  },
  {
    section: "bacteria",
    slug: "streptococcus-pneumoniae",
    resistance: ["penicillin-g"],
    effective: [
      "ceftriaxone",
      "amoxicillin",
      "azithromycin",
      "levofloxacin",
      "vancomycin",
    ],
  },
  {
    section: "bacteria",
    slug: "streptococcus-agalactiae",
    resistance: [],
    effective: ["penicillin-g", "ampicillin", "cefazolin"],
  },
  {
    section: "bacteria",
    slug: "enterococcus-faecalis",
    resistance: ["cefazolin", "ceftriaxone"],
    effective: ["ampicillin", "vancomycin", "linezolid"],
  },
  {
    section: "bacteria",
    slug: "enterococcus-faecium",
    resistance: ["ampicillin", "vancomycin"],
    effective: ["linezolid", "daptomycin"],
  },
  {
    section: "bacteria",
    slug: "clostridioides-difficile",
    resistance: ["ceftriaxone", "clindamycin"],
    effective: ["fidaxomicin", "vancomycin", "metronidazole"],
  },
  {
    section: "bacteria",
    slug: "clostridium-tetani",
    resistance: [],
    effective: ["metronidazole", "penicillin-g"],
  },
  {
    section: "bacteria",
    slug: "clostridium-perfringens",
    resistance: [],
    effective: ["penicillin-g", "clindamycin"],
  },
  {
    section: "bacteria",
    slug: "bacillus-anthracis",
    resistance: [],
    effective: ["ciprofloxacin", "doxycycline", "penicillin-g"],
  },
  {
    section: "bacteria",
    slug: "listeria-monocytogenes",
    resistance: ["ceftriaxone", "cefepime"],
    effective: ["ampicillin", "tmp-smx", "gentamicin"],
  },
  {
    section: "bacteria",
    slug: "corynebacterium-diphtheriae",
    resistance: [],
    effective: ["penicillin-g", "azithromycin"],
  },
  {
    section: "bacteria",
    slug: "mycobacterium-tuberculosis",
    resistance: ["penicillin-g", "ceftriaxone"],
    effective: ["isoniazid", "rifampin", "pyrazinamide", "ethambutol"],
  },
  {
    section: "bacteria",
    slug: "mycobacterium-leprae",
    resistance: [],
    effective: ["rifampin"],
  },
  {
    section: "bacteria",
    slug: "escherichia-coli",
    resistance: ["ampicillin"],
    effective: [
      "ceftriaxone",
      "meropenem",
      "piperacillin-tazobactam",
      "ciprofloxacin",
      "tmp-smx",
    ],
  },
  {
    section: "bacteria",
    slug: "salmonella-enterica",
    resistance: [],
    effective: ["ceftriaxone", "ciprofloxacin", "azithromycin"],
  },
  {
    section: "bacteria",
    slug: "shigella-dysenteriae",
    resistance: ["ampicillin"],
    effective: ["ciprofloxacin", "azithromycin", "ceftriaxone"],
  },
  {
    section: "bacteria",
    slug: "klebsiella-pneumoniae",
    resistance: ["ampicillin"],
    effective: [
      "ceftriaxone",
      "meropenem",
      "piperacillin-tazobactam",
      "tigecycline",
    ],
  },
  {
    section: "bacteria",
    slug: "pseudomonas-aeruginosa",
    resistance: ["ampicillin", "ceftriaxone", "ertapenem"],
    effective: [
      "piperacillin-tazobactam",
      "cefepime",
      "meropenem",
      "ciprofloxacin",
      "gentamicin",
      "colistin",
    ],
  },
  {
    section: "bacteria",
    slug: "acinetobacter-baumannii",
    resistance: ["ampicillin", "ceftriaxone"],
    effective: ["meropenem", "colistin", "tigecycline"],
  },
  {
    section: "bacteria",
    slug: "stenotrophomonas-maltophilia",
    resistance: ["meropenem", "piperacillin-tazobactam"],
    effective: ["tmp-smx", "levofloxacin"],
  },
  {
    section: "bacteria",
    slug: "haemophilus-influenzae",
    resistance: [],
    effective: ["ceftriaxone", "amoxicillin-clavulanate", "azithromycin"],
  },
  {
    section: "bacteria",
    slug: "neisseria-gonorrhoeae",
    resistance: ["penicillin-g", "ciprofloxacin", "tmp-smx"],
    effective: ["ceftriaxone", "azithromycin"],
  },
  {
    section: "bacteria",
    slug: "neisseria-meningitidis",
    resistance: [],
    effective: ["ceftriaxone", "penicillin-g", "rifampin"],
  },
  {
    section: "bacteria",
    slug: "helicobacter-pylori",
    resistance: [],
    effective: ["amoxicillin", "clarithromycin", "metronidazole", "tetracycline"],
  },
  {
    section: "bacteria",
    slug: "campylobacter-jejuni",
    resistance: [],
    effective: ["azithromycin", "ciprofloxacin"],
  },
  {
    section: "bacteria",
    slug: "vibrio-cholerae",
    resistance: [],
    effective: ["doxycycline", "azithromycin", "ciprofloxacin"],
  },
  {
    section: "bacteria",
    slug: "treponema-pallidum",
    resistance: [],
    effective: ["penicillin-g", "doxycycline"],
  },
  {
    section: "bacteria",
    slug: "borrelia-burgdorferi",
    resistance: [],
    effective: ["doxycycline", "ceftriaxone", "amoxicillin"],
  },
  {
    section: "bacteria",
    slug: "leptospira-interrogans",
    resistance: [],
    effective: ["doxycycline", "penicillin-g", "ceftriaxone"],
  },
  {
    section: "bacteria",
    slug: "legionella-pneumophila",
    resistance: ["penicillin-g", "ampicillin"],
    effective: ["azithromycin", "levofloxacin"],
  },
  {
    section: "bacteria",
    slug: "chlamydia-trachomatis",
    resistance: ["penicillin-g", "ceftriaxone"],
    effective: ["azithromycin", "doxycycline"],
  },
  {
    section: "bacteria",
    slug: "mycoplasma-pneumoniae",
    resistance: ["penicillin-g", "ampicillin", "ceftriaxone"],
    effective: ["azithromycin", "doxycycline", "levofloxacin"],
  },
  {
    section: "bacteria",
    slug: "bordetella-pertussis",
    resistance: [],
    effective: ["azithromycin", "clarithromycin"],
  },
  {
    section: "bacteria",
    slug: "bacteroides-fragilis",
    resistance: ["penicillin-g", "cefazolin"],
    effective: [
      "metronidazole",
      "piperacillin-tazobactam",
      "meropenem",
      "clindamycin",
    ],
  },
  {
    section: "bacteria",
    slug: "rickettsia-rickettsii",
    resistance: ["penicillin-g"],
    effective: ["doxycycline"],
  },
  {
    section: "bacteria",
    slug: "anaplasma-phagocytophilum",
    resistance: [],
    effective: ["doxycycline"],
  },
  {
    section: "bacteria",
    slug: "ehrlichia-chaffeensis",
    resistance: [],
    effective: ["doxycycline"],
  },
  {
    section: "bacteria",
    slug: "burkholderia-pseudomallei",
    resistance: ["penicillin-g", "ampicillin"],
    effective: ["ceftazidime", "meropenem", "tmp-smx"],
  },
  {
    section: "bacteria",
    slug: "nocardia-asteroides",
    resistance: [],
    effective: ["tmp-smx", "linezolid", "meropenem"],
  },
  {
    section: "bacteria",
    slug: "actinomyces-israelii",
    resistance: [],
    effective: ["penicillin-g", "amoxicillin"],
  },

  // ---------- Viruses ----------
  {
    section: "viruses",
    slug: "herpes-simplex-virus-1",
    resistance: [],
    effective: ["acyclovir", "valacyclovir"],
  },
  {
    section: "viruses",
    slug: "herpes-simplex-virus-2",
    resistance: [],
    effective: ["acyclovir", "valacyclovir"],
  },
  {
    section: "viruses",
    slug: "varicella-zoster-virus",
    resistance: [],
    effective: ["acyclovir", "valacyclovir"],
  },
  {
    section: "viruses",
    slug: "cytomegalovirus",
    resistance: [],
    effective: ["ganciclovir", "letermovir"],
  },
  {
    section: "viruses",
    slug: "epstein-barr-virus",
    resistance: [],
    effective: [],
  },
  {
    section: "viruses",
    slug: "influenza-a-virus",
    resistance: [],
    effective: ["oseltamivir", "baloxavir", "zanamivir"],
  },
  {
    section: "viruses",
    slug: "influenza-b-virus",
    resistance: [],
    effective: ["oseltamivir", "baloxavir", "zanamivir"],
  },
  {
    section: "viruses",
    slug: "sars-cov-2",
    resistance: [],
    effective: ["nirmatrelvir-ritonavir", "remdesivir"],
  },
  {
    section: "viruses",
    slug: "hiv-1",
    resistance: [],
    effective: ["dolutegravir", "bictegravir", "tenofovir", "emtricitabine"],
  },
  {
    section: "viruses",
    slug: "hepatitis-b-virus",
    resistance: [],
    effective: ["tenofovir", "entecavir"],
  },
  {
    section: "viruses",
    slug: "hepatitis-c-virus",
    resistance: [],
    effective: ["sofosbuvir", "glecaprevir-pibrentasvir"],
  },
  {
    section: "viruses",
    slug: "ebola-virus",
    resistance: [],
    effective: ["remdesivir"],
  },

  // ---------- Fungi ----------
  {
    section: "fungi",
    slug: "candida-albicans",
    resistance: [],
    effective: ["fluconazole", "caspofungin", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "candida-glabrata",
    resistance: ["fluconazole"],
    effective: ["caspofungin", "micafungin", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "candida-krusei",
    resistance: ["fluconazole"],
    effective: ["caspofungin", "voriconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "candida-auris",
    resistance: ["fluconazole", "amphotericin-b"],
    effective: ["caspofungin", "micafungin"],
  },
  {
    section: "fungi",
    slug: "cryptococcus-neoformans",
    resistance: ["caspofungin"],
    effective: ["amphotericin-b", "flucytosine", "fluconazole"],
  },
  {
    section: "fungi",
    slug: "aspergillus-fumigatus",
    resistance: ["fluconazole"],
    effective: ["voriconazole", "isavuconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "rhizopus-arrhizus",
    resistance: ["fluconazole", "voriconazole", "caspofungin"],
    effective: ["amphotericin-b", "posaconazole", "isavuconazole"],
  },
  {
    section: "fungi",
    slug: "histoplasma-capsulatum",
    resistance: [],
    effective: ["itraconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "blastomyces-dermatitidis",
    resistance: [],
    effective: ["itraconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "coccidioides-immitis",
    resistance: [],
    effective: ["fluconazole", "itraconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "sporothrix-schenckii",
    resistance: [],
    effective: ["itraconazole", "amphotericin-b"],
  },
  {
    section: "fungi",
    slug: "pneumocystis-jirovecii",
    resistance: ["caspofungin", "fluconazole"],
    effective: ["tmp-smx", "pentamidine", "atovaquone-proguanil"],
  },
  {
    section: "fungi",
    slug: "trichophyton-rubrum",
    resistance: [],
    effective: ["terbinafine", "itraconazole"],
  },
  {
    section: "fungi",
    slug: "microsporum-canis",
    resistance: [],
    effective: ["griseofulvin", "terbinafine"],
  },

  // ---------- Parasites ----------
  {
    section: "parasites",
    slug: "plasmodium-falciparum",
    resistance: ["chloroquine"],
    effective: ["artemether-lumefantrine", "atovaquone-proguanil"],
  },
  {
    section: "parasites",
    slug: "plasmodium-vivax",
    resistance: [],
    effective: ["chloroquine", "primaquine"],
  },
  {
    section: "parasites",
    slug: "plasmodium-ovale",
    resistance: [],
    effective: ["chloroquine", "primaquine"],
  },
  {
    section: "parasites",
    slug: "plasmodium-malariae",
    resistance: [],
    effective: ["chloroquine"],
  },
  {
    section: "parasites",
    slug: "toxoplasma-gondii",
    resistance: [],
    effective: ["pyrimethamine-sulfadiazine"],
  },
  {
    section: "parasites",
    slug: "cryptosporidium-parvum",
    resistance: [],
    effective: ["nitazoxanide"],
  },
  {
    section: "parasites",
    slug: "babesia-microti",
    resistance: [],
    effective: ["atovaquone-proguanil", "azithromycin"],
  },
  {
    section: "parasites",
    slug: "giardia-lamblia",
    resistance: [],
    effective: ["metronidazole", "tinidazole", "nitazoxanide"],
  },
  {
    section: "parasites",
    slug: "trichomonas-vaginalis",
    resistance: [],
    effective: ["metronidazole", "tinidazole"],
  },
  {
    section: "parasites",
    slug: "entamoeba-histolytica",
    resistance: [],
    effective: ["metronidazole", "tinidazole", "paromomycin"],
  },
  {
    section: "parasites",
    slug: "trypanosoma-cruzi",
    resistance: [],
    effective: ["benznidazole", "nifurtimox"],
  },
  {
    section: "parasites",
    slug: "trypanosoma-brucei",
    resistance: [],
    effective: ["pentamidine", "nifurtimox"],
  },
  {
    section: "parasites",
    slug: "leishmania-donovani",
    resistance: [],
    effective: ["amphotericin-b", "miltefosine", "paromomycin"],
  },
  {
    section: "parasites",
    slug: "naegleria-fowleri",
    resistance: [],
    effective: ["miltefosine", "amphotericin-b"],
  },
  {
    section: "parasites",
    slug: "ascaris-lumbricoides",
    resistance: [],
    effective: ["albendazole", "mebendazole", "ivermectin"],
  },
  {
    section: "parasites",
    slug: "enterobius-vermicularis",
    resistance: [],
    effective: ["mebendazole", "albendazole"],
  },
  {
    section: "parasites",
    slug: "strongyloides-stercoralis",
    resistance: [],
    effective: ["ivermectin", "albendazole"],
  },
  {
    section: "parasites",
    slug: "trichinella-spiralis",
    resistance: [],
    effective: ["albendazole", "mebendazole"],
  },
  {
    section: "parasites",
    slug: "necator-americanus",
    resistance: [],
    effective: ["albendazole", "mebendazole"],
  },
  {
    section: "parasites",
    slug: "wuchereria-bancrofti",
    resistance: [],
    effective: ["ivermectin", "albendazole"],
  },
  {
    section: "parasites",
    slug: "onchocerca-volvulus",
    resistance: [],
    effective: ["ivermectin"],
  },
  {
    section: "parasites",
    slug: "schistosoma-mansoni",
    resistance: [],
    effective: ["praziquantel"],
  },
  {
    section: "parasites",
    slug: "schistosoma-haematobium",
    resistance: [],
    effective: ["praziquantel"],
  },
  {
    section: "parasites",
    slug: "taenia-solium",
    resistance: [],
    effective: ["praziquantel", "albendazole"],
  },
  {
    section: "parasites",
    slug: "echinococcus-granulosus",
    resistance: [],
    effective: ["albendazole"],
  },
  {
    section: "parasites",
    slug: "sarcoptes-scabiei",
    resistance: [],
    effective: ["permethrin", "ivermectin"],
  },
  {
    section: "parasites",
    slug: "pediculus-humanus-capitis",
    resistance: [],
    effective: ["permethrin", "ivermectin"],
  },
];

export function getPharmacologyFor(
  section: SectionKey,
  slug: string,
): MicrobePharmacology | undefined {
  return MICROBE_PHARMACOLOGY.find(
    (m) => m.section === section && m.slug === slug,
  );
}

export function getMicrobesEffectiveFor(
  drugSlug: string,
): MicrobePharmacology[] {
  return MICROBE_PHARMACOLOGY.filter((m) => m.effective.includes(drugSlug));
}

export function getMicrobesResistantTo(
  drugSlug: string,
): MicrobePharmacology[] {
  return MICROBE_PHARMACOLOGY.filter((m) => m.resistance.includes(drugSlug));
}
