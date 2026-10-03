import { smallBuilds } from "@/content";

export default function SmallBuilds() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head"><div><span className="eyebrow mono">{smallBuilds.eyebrow}</span><h2 className="disp">{smallBuilds.title}</h2></div></div>
        <div className="small">
          {smallBuilds.items.map((item) => (
            <div className="card" key={item.name}>
              <span className="mono" style={{ color: "var(--ink2)" }}>{item.kind}</span>
              <h3 className="cond">{item.href ? <a href={item.href}>{item.name}</a> : item.name}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
