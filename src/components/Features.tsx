import { FEATURES } from "../content";
import Icon from "./Icons";

export default function Features() {
  return (
    <section className="section" id="recursos" aria-labelledby="recursos-titulo">
      <div className="container">
        <p className="eyebrow">Recursos</p>
        <h2 id="recursos-titulo">Simples por fora, cuidadoso por dentro</h2>
        <div className="grid">
          {FEATURES.map((f) => (
            <article className="card" key={f.title}>
              <span className="icon-badge"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
