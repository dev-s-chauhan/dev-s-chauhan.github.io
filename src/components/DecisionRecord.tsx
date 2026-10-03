type Props = {
  id: string;
  layer: string;
  layerColor: string;
  title: string;
  context: string;
  decision: string;
  cost: string;
};

export default function DecisionRecord({ id, layer, layerColor, title, context, decision, cost }: Props) {
  return (
    <article className="adr">
      <div className="adr-top mono">
        <span className="id">{id}</span>
        <span className="st"><span className="sw" style={{ background: layerColor, margin: 0 }} />{layer}</span>
      </div>
      <h3 className="cond">{title}</h3>
      <dl>
        <div><dt className="mono">Context</dt><dd>{context}</dd></div>
        <div><dt className="mono">Decision</dt><dd>{decision}</dd></div>
        <div className="costrow"><dt className="mono">Cost</dt><dd>{cost}</dd></div>
      </dl>
    </article>
  );
}
