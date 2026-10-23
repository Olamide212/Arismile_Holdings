import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { holdingsUrl, subsidiary } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {subsidiary.legalName}. A subsidiary of{" "}
          <a href={holdingsUrl} className="font-semibold text-white hover:text-accent">
            {group.name}
          </a>
          .
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-1">
          <a href={group.phone.href} className="hover:text-white">
            {group.phone.display}
          </a>
          <a href={`mailto:${group.email}`} className="hover:text-white">
            {group.email}
          </a>
        </p>
      </Container>
    </footer>
  );
}
