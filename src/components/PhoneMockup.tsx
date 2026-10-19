import Icon from "./Icons";

const FIELDS = ["Título", "Data", "Hora", "Domínio", "Prioridade"];

export default function PhoneMockup() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-top"><span className="phone-dot"><Icon name="mic" size={16} /></span>Synapse</div>
        <p className="phone-title">O que você precisa lembrar?</p>
        <div className="phone-voice">
          <span className="phone-mic"><Icon name="mic" size={22} /></span>
          <div><b>Toque para falar</b><span>Dite sua tarefa em português</span></div>
        </div>
        <div className="phone-card">
          <p className="phone-label">Revise antes de salvar</p>
          <p className="phone-quote">“Me lembre de entregar o trabalho amanhã às 18h”</p>
          {FIELDS.map((f) => (
            <div className="phone-row" key={f}><span>{f}</span><i /></div>
          ))}
        </div>
        <div className="phone-save">Salvar lembrete</div>
      </div>
    </div>
  );
}
