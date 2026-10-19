import { APP } from "../config";
import Icon from "./Icons";

const LINKS = [
  ["#recursos", "Recursos"],
  ["#como-funciona", "Como funciona"],
  ["#publico-alvo", "Público-alvo"],
  ["#sobre-nos", "Sobre nós"],
  ["#faq", "FAQ"],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${APP.name}, início`}>
          <Icon name="mic" size={22} /> {APP.name}
        </a>
        <nav aria-label="Principal" className="nav">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm" href="#baixar">Baixar</a>
      </div>
    </header>
  );
}
