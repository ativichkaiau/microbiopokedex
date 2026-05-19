import Explorer, { buildActive } from "@/app/_components/explorer";
import { getSectionFacets, listMicrobes } from "@/lib/db";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function VirusesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const active = buildActive("viruses", sp);
  const [items, facets] = await Promise.all([
    listMicrobes("viruses", active),
    getSectionFacets("viruses"),
  ]);
  return (
    <Explorer
      sectionKey="viruses"
      active={active}
      items={items}
      facets={facets}
    />
  );
}
