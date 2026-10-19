import { FAQ } from "../content";

export default function Faq() {
  return (
    <section className="section alt" id="faq" aria-labelledby="faq-titulo">
      <div className="container faq">
        <h2 id="faq-titulo">Dúvidas frequentes</h2>
        {FAQ.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
