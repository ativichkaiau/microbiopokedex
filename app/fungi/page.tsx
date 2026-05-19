import Explorer, { buildActive } from "@/app/_components/explorer";
import { getSectionFacets, listMicrobes } from "@/lib/db";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function FungiPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const active = buildActive("fungi", sp);
  const [items, facets] = await Promise.all([
    listMicrobes("fungi", active),
    getSectionFacets("fungi"),
  ]);
  return (
    <Explorer sectionKey="fungi" active={active} items={items} facets={facets} />
  );
}
