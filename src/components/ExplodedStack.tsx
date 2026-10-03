"use client";

import { useState, type MouseEvent } from "react";
import { hero } from "@/content";

export default function ExplodedStack() {
  const [sep, setSep] = useState(96);
  const [tilt, setTilt] = useState({ tx: 0, ty: 0 });
  const { data, access, ui } = hero.slabs;

  const onTilt = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ tx: x * 16, ty: y * 12 });
  };
  const onReset = () => setTilt({ tx: 0, ty: 0 });

  const stageT = `rotateX(${(56 - tilt.ty).toFixed(2)}deg) rotateZ(${(-40 + tilt.tx).toFixed(2)}deg)`;
  const guideH = sep * 2;

  return (
    <div className="stage-wrap">
      <div className="stage" onMouseMove={onTilt} onMouseLeave={onReset}>
        <div className="legend">
          {hero.legend.map((l) => (
            <div key={l.n}>
              <b>{l.n}</b>
              <span><i className="sw" style={{ background: l.color }} />{l.name}</span>
              <small>{l.detail}</small>
            </div>
          ))}
        </div>
        <div className="plane" style={{ transform: stageT }}>
          <div className="shadow" />
          {["g1", "g2", "g3", "g4"].map((g) => (
            <div key={g} className={`guide ${g}`} style={{ height: guideH }} />
          ))}

          <div className="slab s-db" style={{ transform: "translateZ(0px)" }}>
            <div className="edge" />
            <div className="face">
              <div className="tag">
                <span>{data.tag}</span>
                <span className="lock">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="7" width="10" height="7" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>
                  {data.badge}
                </span>
              </div>
              <div className="chips">{data.tables.map((t) => <span key={t}>{t}</span>)}</div>
              <p className="code" style={{ marginTop: "auto" }}>{data.code}</p>
            </div>
          </div>

          <div className="slab s-api" style={{ transform: `translateZ(${sep}px)` }}>
            <div className="edge" />
            <div className="face">
              <div className="tag"><span>{access.tag}</span><span>{access.badge}</span></div>
              <p className="code">
                {access.roles.map((r, i) => (
                  <span key={r.role}>
                    {i > 0 && <br />}
                    {r.role} {" ".repeat(r.pad)}<em>→</em> {r.grants}
                  </span>
                ))}
              </p>
              <p className="code" style={{ marginTop: "auto" }}>{access.code}</p>
            </div>
          </div>

          <div className="slab s-ui" style={{ transform: `translateZ(${sep * 2}px)` }}>
            <div className="edge" />
            <div className="face shot-face">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ui.image.src} width={ui.image.width} height={ui.image.height} alt={ui.image.alt} fetchPriority="high" />
              <div className="tag"><span>{ui.tag}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="control mono">
        <label htmlFor="sep">{hero.sliderLabel}</label>
        <input id="sep" type="range" min={0} max={150} value={sep} onChange={(e) => setSep(Number(e.target.value))} />
      </div>
    </div>
  );
}
