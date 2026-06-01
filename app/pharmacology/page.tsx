import Explorer, { buildActive } from "@/app/_components/explorer";
import { getSectionFacets, listMicrobes } from "@/lib/db";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function PharmacologyPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const active = buildActive("pharmacology", sp);
  const [items, facets] = await Promise.all([
    listMicrobes("pharmacology", active),
    getSectionFacets("pharmacology"),
  ]);
  return (
    <Explorer
      sectionKey="pharmacology"
      active={active}
      items={items}
      facets={facets}
    />
  );
}
