import { APP, isHttpUrl } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{APP.name}</strong>
          <p>Aplicativo Android de lembretes por voz, em versão beta.</p>
        </div>
        <ul className="footer-links">
          {isHttpUrl(APP.repoUrl) && <li><a href={APP.repoUrl} target="_blank" rel="noopener noreferrer">Repositório no GitHub</a></li>}
          {APP.contactEmail && <li><a href={`mailto:${APP.contactEmail}`}>Contato por e-mail</a></li>}
          {isHttpUrl(APP.privacyUrl) && <li><a href={APP.privacyUrl}>Política de privacidade</a></li>}
        </ul>
        <p className="small">© {new Date().getFullYear()} {APP.name} · Versão {APP.version}</p>
      </div>
    </footer>
  );
}
