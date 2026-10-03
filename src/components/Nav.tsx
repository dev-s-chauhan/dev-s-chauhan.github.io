import { nav } from "@/content";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <span className="mono" style={{ fontWeight: 500 }}>{nav.mark}</span>
      <div className="nav-links mono">
        {nav.links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <span className="avail mono"><span className="dot" aria-hidden="true" />{nav.availability}</span>
    </nav>
  );
}
