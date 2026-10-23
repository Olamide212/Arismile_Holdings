import { Container } from "@arismile/ui";
import Image from "next/image";
import Link from "next/link";
import { holdingsUrl, logo, subsidiary } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label={`${subsidiary.legalName} home`}>
          <Image src={logo.src} alt={subsidiary.legalName} width={logo.width} height={logo.height} priority className="h-14 w-auto" />
        </Link>
        <a href={holdingsUrl} className="text-sm font-semibold text-ink/70 hover:text-primary">
          An Arismile Holdings company
        </a>
      </Container>
    </header>
  );
}
