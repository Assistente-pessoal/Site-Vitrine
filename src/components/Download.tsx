import { APP, isHttpUrl } from "../config";
import { INSTALL_NOTE, INSTALL_STEPS, REQUIREMENTS } from "../content";

export default function Download() {
  return (
    <section className="section" id="baixar" aria-labelledby="baixar-titulo">
      <div className="container">
        <div className="download">
          <p className="eyebrow on-brand">Versão beta · {APP.version}</p>
          <h2 id="baixar-titulo">Seu próximo lembrete começa com a sua voz</h2>
          <p className="lead">Baixe o VOX para Android e experimente uma maneira mais prática de registrar suas tarefas por voz.</p>
          <div className="actions">
            {isHttpUrl(APP.apkUrl) ? (
              <a className="btn btn-light" href={APP.apkUrl} target="_blank" rel="noopener noreferrer">Baixar APK</a>
            ) : (
              <button className="btn btn-light" type="button" disabled>Baixar APK (link em breve)</button>
            )}
            {isHttpUrl(APP.playStoreUrl) && (
              <a className="btn btn-outline-light" href={APP.playStoreUrl} target="_blank" rel="noopener noreferrer">Google Play</a>
            )}
          </div>
          <p className="notice">iOS: em breve, sem data definida.</p>
          <div className="download-cols">
            <div>
              <h3>Como instalar</h3>
              <ol>{INSTALL_STEPS.map((s) => <li key={s}>{s}</li>)}</ol>
              <p className="small">{INSTALL_NOTE}</p>
            </div>
            <div>
              <h3>Requisitos</h3>
              <ul>{REQUIREMENTS.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
