import Explorer, { buildActive } from "@/app/_components/explorer";
import { getSectionFacets, listMicrobes } from "@/lib/db";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function ParasitesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const active = buildActive("parasites", sp);
  const [items, facets] = await Promise.all([
    listMicrobes("parasites", active),
    getSectionFacets("parasites"),
  ]);
  return (
    <Explorer
      sectionKey="parasites"
      active={active}
      items={items}
      facets={facets}
    />
  );
}
