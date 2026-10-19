import { STEPS } from "../content";

export default function HowItWorks() {
  return (
    <section className="section alt" id="como-funciona" aria-labelledby="como-titulo">
      <div className="container">
        <p className="eyebrow">Como funciona</p>
        <h2 id="como-titulo">Do que você fala ao lembrete salvo</h2>
        <ol className="grid steps">
          {STEPS.map((s) => (
            <li className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
