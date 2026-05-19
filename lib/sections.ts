import { BACTERIA } from "./bacteria-data";
import { VIRUSES } from "./virus-data";
import { FUNGI } from "./fungi-data";
import {
  fungiMorphologyClasses,
  gramStainClasses,
  gramStainLabel,
  titleCase,
  virusGenomeClasses,
} from "./labels";

export type SectionKey = "bacteria" | "viruses" | "fungi";

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
};

const SECTION_LIST: SectionDef[] = [
  {
    key: "bacteria",
    table: "bacteria",
    navLabel: "Bacteria",
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
  },
  {
    key: "viruses",
    table: "viruses",
    navLabel: "Viruses",
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
  },
  {
    key: "fungi",
    table: "fungi",
    navLabel: "Fungi",
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
  },
];

export const SECTIONS: Record<SectionKey, SectionDef> = {
  bacteria: SECTION_LIST[0],
  viruses: SECTION_LIST[1],
  fungi: SECTION_LIST[2],
};

export const SECTION_ORDER: SectionKey[] = ["bacteria", "viruses", "fungi"];
