import type { Metadata } from "next";
import MicrobeDetail, { microbeMetadata } from "@/app/_components/microbe-detail";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return microbeMetadata("fungi", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <MicrobeDetail sectionKey="fungi" slug={slug} />;
}
