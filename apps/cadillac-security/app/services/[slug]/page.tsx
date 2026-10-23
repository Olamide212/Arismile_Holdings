import { serviceMetadata, ServiceDetailPage, serviceStaticParams } from "@arismile/site-kit";
import { ui } from "@/components/ui";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceStaticParams(site);
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  return serviceMetadata(site, slug);
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  return <ServiceDetailPage site={site} ui={ui} slug={slug} />;
}
