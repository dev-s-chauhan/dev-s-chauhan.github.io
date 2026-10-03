import { upNext } from "@/content";

export default function UpNext() {
  return (
    <section className="sec">
      <div className="wrap wip">
        <div>
          <span className="eyebrow mono">{upNext.eyebrow}</span>
          <h2 className="disp">{upNext.title}</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <span className="badge mono"><span className="dot" aria-hidden="true" />{upNext.badge}</span>
          <p>{upNext.body}</p>
        </div>
      </div>
    </section>
  );
}
