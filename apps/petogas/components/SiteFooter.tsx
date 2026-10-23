import { group } from "@arismile/brand";
import { Container } from "@arismile/ui";
import { brand, holdingsUrl, nav, subsidiary } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-fg/10 bg-bg text-fg">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl font-semibold">{subsidiary.legalName}</p>
          <p className="mt-2 text-sm leading-relaxed opacity-70">{brand.footerLine}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold uppercase tracking-wide">
            {[...nav, { label: "Contact", href: "#contact" }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="opacity-75 hover:text-accent hover:opacity-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-fg/10">
        <Container className="flex flex-col gap-2 py-6 text-sm opacity-70 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {subsidiary.legalName}. A subsidiary of{" "}
            <a href={holdingsUrl} className="font-semibold underline-offset-4 hover:text-accent hover:underline">
              {group.name}
            </a>
            .
          </p>
          <p>
            <a href={`mailto:${group.email}`} className="hover:text-accent">
              {group.email}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
