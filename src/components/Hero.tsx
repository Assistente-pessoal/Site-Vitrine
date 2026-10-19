import { APP } from "../config";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Aplicativo de lembretes por voz</p>
          <h1>Suas tarefas, mais fáceis de organizar.</h1>
          <p className="lead">
            Fale o que precisa fazer, revise as informações e deixe seus lembretes organizados em poucos passos.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#baixar">Baixar para Android</a>
            <a className="btn btn-ghost" href="#recursos">Conhecer o aplicativo</a>
          </div>
          <p className="meta">Android · Versão beta · Versão {APP.version}</p>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
