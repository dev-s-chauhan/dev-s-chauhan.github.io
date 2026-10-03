import { hero, links } from "@/content";
import ExplodedStack from "./ExplodedStack";

export default function Hero() {
  const { thesis, ctas } = hero;
  return (
    <header className="hero">
      <div className="hero-copy">
        <span className="mono" style={{ color: "var(--ink2)" }}>{hero.kicker}</span>
        <h1 className="disp"><span>{hero.firstName}</span><span className="outline">{hero.lastName}</span></h1>
        <p className="thesis">{thesis.before}<b>{thesis.emphasis}</b>{thesis.after}</p>
        <div className="ctas">
          <a className="btn solid" href="#work">
            {ctas.work}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 2v12M3 9l5 5 5-5" /></svg>
          </a>
          {links.resume && <a className="btn" href={links.resume}>{ctas.resume}</a>}
          {links.github && <a className="btn" href={links.github}>{ctas.github}</a>}
          {links.linkedin && <a className="btn" href={links.linkedin}>{ctas.linkedin}</a>}
        </div>
      </div>
      <ExplodedStack />
    </header>
  );
}
