import { AUDIENCE_NOTE, PERSONAS } from "../content";

export default function Audience() {
  return (
    <section className="section" id="publico-alvo" aria-labelledby="publico-titulo">
      <div className="container">
        <p className="eyebrow">Para quem é</p>
        <h2 id="publico-titulo">Nosso público-alvo</h2>
        <p className="lede">O VOX foi pensado para pessoas com necessidades diferentes de organização. Estes são dois exemplos.</p>
        <div className="personas">
          {PERSONAS.map((p) => (
            <article className={`card persona persona-${p.id}`} key={p.id}>
              <div className="persona-head">
                <span className="persona-art" aria-hidden="true">{p.initials}</span>
                <h3>{p.name}</h3>
              </div>
              <p>{p.profile}</p>
              <div>
                <h4>Principais necessidades</h4>
                <ul>{p.needs.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
              <div>
                <h4>Como o VOX ajuda</h4>
                <p>{p.help}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="disclaimer">{AUDIENCE_NOTE}</p>
      </div>
    </section>
  );
}
