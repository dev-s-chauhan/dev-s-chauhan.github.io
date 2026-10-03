import { toolkit } from "@/content";

export default function Toolkit() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head"><div><span className="eyebrow mono">{toolkit.eyebrow}</span><h2 className="disp">{toolkit.title}</h2></div></div>
        <div className="layers">
          {toolkit.layers.map((layer) => (
            <div className="layer" key={layer.name}>
              <h3 className="cond"><i className="sw" style={{ background: layer.color }} />{layer.name}</h3>
              <ul>{layer.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
