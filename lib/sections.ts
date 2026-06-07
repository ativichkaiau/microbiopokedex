import { BACTERIA } from "./bacteria-data";
import { VIRUSES } from "./virus-data";
import { FUNGI } from "./fungi-data";
import { PARASITES } from "./parasite-data";
import { DRUGS } from "./drug-data";
import {
  drugCategoryClasses,
  fungiMorphologyClasses,
  gramStainClasses,
  gramStainLabel,
  parasiteGroupClasses,
  titleCase,
  virusGenomeClasses,
} from "./labels";

export type SectionKey =
  | "bacteria"
  | "viruses"
  | "fungi"
  | "parasites"
  | "pharmacology";

export type FacetDef = { param: string; column: string; label: string };

export type GenericRecord = {
  id: number;
  slug: string;
  name: string;
  scientific_name: string;
  description: string;
  [key: string]: string | number;
};

export type SectionDef = {
  key: SectionKey;
  table: string;
  navLabel: string;
  /** Emoji that represents the whole section (nav, hero badge). */
  emoji: string;
  listPath: string;
  detailPath: string;
  eyebrow: string;
  searchPlaceholder: string;
  /** Non-id columns, in DDL/seed order. First four are always the base set. */
  columns: string[];
  facets: FacetDef[];
  rows: Record<string, string>[];
  primaryBadge: (r: GenericRecord) => { label: string; className: string };
  tags: (r: GenericRecord) => string[];
  /** Emoji for an individual entry, derived from its defining facet. */
  entryEmoji: (r: GenericRecord) => string;
};

function pick(map: Record<string, string>, key: string, fallback: string) {
  return map[key] ?? fallback;
}

const SECTION_LIST: SectionDef[] = [
  {
    key: "bacteria",
    table: "bacteria",
    navLabel: "Bacteria",
    emoji: "🦠",
    listPath: "/",
    detailPath: "/bacteria",
    eyebrow: "Gram & Morphology",
    searchPlaceholder: "Search bacteria…",
    columns: [
      "slug",
      "name",
      "scientific_name",
      "description",
      "gram_stain",
      "shape",
      "arrangement",
    ],
    facets: [
      { param: "gramStain", column: "gram_stain", label: "Gram stain" },
      { param: "shape", column: "shape", label: "Shape" },
      { param: "arrangement", column: "arrangement", label: "Arrangement" },
    ],
    rows: BACTERIA.map((b) => ({
      slug: b.slug,
      name: b.name,
      scientific_name: b.scientificName,
      description: b.description,
      gram_stain: b.gramStain,
      shape: b.shape,
      arrangement: b.arrangement,
    })),
    primaryBadge: (r) => ({
      label: gramStainLabel(String(r.gram_stain)),
      className: gramStainClasses(String(r.gram_stain)),
    }),
    tags: (r) => [String(r.shape), String(r.arrangement)],
    entryEmoji: (r) =>
      pick(
        {
          coccus: "🟣",
          bacillus: "🥖",
          coccobacillus: "🫘",
          vibrio: "🦐",
          spirillum: "🌀",
          spirochete: "🌀",
          pleomorphic: "✨",
        },
        String(r.shape),
        "🦠",
      ),
  },
  {
    key: "viruses",
    table: "viruses",
    navLabel: "Viruses",
    emoji: "🧬",
    listPath: "/viruses",
    detailPath: "/viruses",
    eyebrow: "Genome & Envelope",
    searchPlaceholder: "Search viruses…",
    columns: [
      "slug",
      "name",
      "scientific_name",
      "description",
      "genome",
      "envelope",
      "family",
    ],
    facets: [
      { param: "genome", column: "genome", label: "Genome" },
      { param: "envelope", column: "envelope", label: "Envelope" },
      { param: "family", column: "family", label: "Family" },
    ],
    rows: VIRUSES.map((v) => ({
      slug: v.slug,
      name: v.name,
      scientific_name: v.scientificName,
      description: v.description,
      genome: v.genome,
      envelope: v.envelope,
      family: v.family,
    })),
    primaryBadge: (r) => ({
      label: `${r.genome} virus`,
      className: virusGenomeClasses(String(r.genome)),
    }),
    tags: (r) => [String(r.envelope), String(r.family)],
    entryEmoji: (r) => (String(r.genome) === "DNA" ? "🧬" : "🧪"),
  },
  {
    key: "fungi",
    table: "fungi",
    navLabel: "Fungi",
    emoji: "🍄",
    listPath: "/fungi",
    detailPath: "/fungi",
    eyebrow: "Morphology & Group",
    searchPlaceholder: "Search fungi…",
    columns: [
      "slug",
      "name",
      "scientific_name",
      "description",
      "morphology",
      "grp",
    ],
    facets: [
      { param: "morphology", column: "morphology", label: "Morphology" },
      { param: "group", column: "grp", label: "Group" },
    ],
    rows: FUNGI.map((f) => ({
      slug: f.slug,
      name: f.name,
      scientific_name: f.scientificName,
      description: f.description,
      morphology: f.morphology,
      grp: f.group,
    })),
    primaryBadge: (r) => ({
      label: titleCase(String(r.morphology)),
      className: fungiMorphologyClasses(String(r.morphology)),
    }),
    tags: (r) => [String(r.grp)],
    entryEmoji: (r) =>
      pick(
        { yeast: "🫧", mold: "🟢", dimorphic: "🔄" },
        String(r.morphology),
        "🍄",
      ),
  },
  {
    key: "parasites",
    table: "parasites",
    navLabel: "Parasites",
    emoji: "🪱",
    listPath: "/parasites",
    detailPath: "/parasites",
    eyebrow: "Group & Transmission",
    searchPlaceholder: "Search parasites…",
    columns: [
      "slug",
      "name",
      "scientific_name",
      "description",
      "grp",
      "form",
      "transmission",
    ],
    facets: [
      { param: "group", column: "grp", label: "Group" },
      { param: "form", column: "form", label: "Form" },
      { param: "transmission", column: "transmission", label: "Transmission" },
    ],
    rows: PARASITES.map((p) => ({
      slug: p.slug,
      name: p.name,
      scientific_name: p.scientificName,
      description: p.description,
      grp: p.group,
      form: p.form,
      transmission: p.transmission,
    })),
    primaryBadge: (r) => ({
      label: String(r.grp),
      className: parasiteGroupClasses(String(r.grp)),
    }),
    tags: (r) => [String(r.form), String(r.transmission)],
    entryEmoji: (r) =>
      pick(
        { Protozoa: "🦠", Helminth: "🪱", Ectoparasite: "🕷️" },
        String(r.grp),
        "🪱",
      ),
  },
  {
    key: "pharmacology",
    table: "drugs",
    navLabel: "Pharmacology",
    emoji: "💊",
    listPath: "/pharmacology",
    detailPath: "/pharmacology",
    eyebrow: "Class & Target",
    searchPlaceholder: "Search drugs…",
    columns: [
      "slug",
      "name",
      "scientific_name",
      "description",
      "category",
      "drug_class",
      "target",
    ],
    facets: [
      { param: "category", column: "category", label: "Category" },
      { param: "class", column: "drug_class", label: "Class" },
      { param: "target", column: "target", label: "Target" },
    ],
    rows: DRUGS.map((d) => ({
      slug: d.slug,
      name: d.name,
      scientific_name: d.genericName,
      description: d.description,
      category: d.category,
      drug_class: d.drugClass,
      target: d.target,
    })),
    primaryBadge: (r) => ({
      label: String(r.category),
      className: drugCategoryClasses(String(r.category)),
    }),
    tags: (r) => [String(r.drug_class), String(r.target)],
    entryEmoji: (r) =>
      pick(
        {
          Antibacterial: "💊",
          Antiviral: "🧪",
          Antifungal: "🍄",
          Antiparasitic: "🪱",
        },
        String(r.category),
        "💊",
      ),
  },
];

export const SECTIONS: Record<SectionKey, SectionDef> = {
  bacteria: SECTION_LIST[0],
  viruses: SECTION_LIST[1],
  fungi: SECTION_LIST[2],
  parasites: SECTION_LIST[3],
  pharmacology: SECTION_LIST[4],
};

export const SECTION_ORDER: SectionKey[] = [
  "bacteria",
  "viruses",
  "fungi",
  "parasites",
  "pharmacology",
];
