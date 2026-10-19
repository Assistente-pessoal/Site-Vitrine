import { useState } from "react";
import { ABOUT_TEXT, TEAM } from "../content";

const initials = (name: string) => name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();

function Avatar({ name, user }: { name: string; user: string }) {
  const [ok, setOk] = useState(true);
  return (
    <span className="avatar">
      <span aria-hidden="true">{initials(name)}</span>
      {ok && (
        <img src={`https://github.com/${user}.png?size=160`} alt={`Foto de perfil de ${name} no GitHub`} width={88} height={88} loading="lazy" onError={() => setOk(false)} />
      )}
    </span>
  );
}

export default function About() {
  return (
    <section className="section alt" id="sobre-nos" aria-labelledby="sobre-titulo">
      <div className="container">
        <p className="eyebrow">Equipe</p>
        <h2 id="sobre-titulo">Sobre nós</h2>
        <p className="lede">{ABOUT_TEXT}</p>
        <ul className="team" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {TEAM.map((m) => (
            <li key={m.user}>
              <a className="card member" href={`https://github.com/${m.user}`} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de ${m.name} no GitHub (@${m.user})`}>
                <Avatar name={m.name} user={m.user} />
                <h3>{m.name}</h3>
                <p className="user">@{m.user}</p>
                {m.role && <p className="role">{m.role}</p>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
