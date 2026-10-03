import { links, project } from "@/content";
import DecisionRecord from "./DecisionRecord";

export default function ProjectSheet() {
  const { desktop, phone } = project.shots;
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow mono">{project.eyebrow}</span>
            <h2 className="disp">{project.title[0]}<br />{project.title[1]}</h2>
          </div>
          <div className="ctas">
            {links.weddingPlanner && <a className="btn solid" href={links.weddingPlanner}>{project.liveLabel}</a>}
            {links.weddingPlannerRepo && <a className="btn" href={links.weddingPlannerRepo}>{project.repoLabel}</a>}
          </div>
        </div>

        <dl className="titleblock" style={{ margin: 0 }}>
          {project.titleBlock.map((row) => (
            <div key={row.label}>
              <dt className="mono">{row.label}</dt>
              {row.live ? (
                <dd className="live"><span className="dot" aria-hidden="true" />{row.value}</dd>
              ) : (
                <dd>{row.value}</dd>
              )}
            </div>
          ))}
        </dl>

        <div className="shots">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="shot" src={desktop.src} width={desktop.width} height={desktop.height} alt={desktop.alt} loading="lazy" decoding="async" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="shot phone" src={phone.src} width={phone.width} height={phone.height} alt={phone.alt} loading="lazy" decoding="async" />
        </div>

        <div id="decisions" className="sec-head" style={{ marginBottom: 32 }}>
          <div>
            <span className="eyebrow mono">{project.decisionsEyebrow}</span>
            <h2 className="cond" style={{ fontSize: "clamp(36px,4.6vw,64px)" }}>{project.decisionsTitle}</h2>
          </div>
        </div>

        <div className="adrs">
          {project.decisions.map((d) => <DecisionRecord key={d.id} {...d} />)}
        </div>
      </div>
    </section>
  );
}
