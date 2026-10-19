export type IconName = "mic" | "device" | "edit" | "bell";

export const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: "mic", title: "Voz em português", text: "Fale sua tarefa em português e utilize a transcrição de voz feita diretamente no aparelho." },
  { icon: "device", title: "Áudio fica no aparelho", text: "A gravação não é enviada ao servidor. Somente o texto confirmado pelo usuário é enviado ao salvar o lembrete." },
  { icon: "edit", title: "Revise antes de salvar", text: "Confira e corrija o texto transcrito antes de confirmar, respeitando o limite de 2.000 caracteres." },
  { icon: "bell", title: "Notificação no horário", text: "Quando o lembrete contém uma data e um horário futuros reconhecidos pelo aplicativo, é possível agendar uma notificação local no aparelho." },
];

export const STEPS: { title: string; text: string }[] = [
  { title: "Fale", text: "Dite a tarefa utilizando o recurso de voz do aparelho." },
  { title: "Revise", text: "Confira a transcrição e corrija qualquer informação necessária." },
  { title: "Salve", text: "Confirme o texto para enviá-lo ao serviço que interpreta os dados do lembrete." },
  { title: "Receba a notificação", text: "Se houver uma data e um horário futuros reconhecidos, o aplicativo agenda uma notificação local no aparelho." },
];

export const INSTALL_STEPS: string[] = [
  "Baixe o APK pelo site oficial do projeto.",
  "Abra o arquivo baixado no dispositivo Android.",
  "Caso o sistema solicite, autorize a instalação para essa origem nas configurações do aparelho.",
  "Confirme a instalação e abra o VOX.",
];

export const INSTALL_NOTE = "Os nomes das opções de instalação podem variar conforme a versão do Android.";

export const REQUIREMENTS: string[] = [
  "Dispositivo Android.",
  "Pacote de idioma português instalado no serviço de voz do aparelho.",
  "Conexão com a internet para salvar o lembrete.",
];

export const FAQ: { question: string; answer: string }[] = [
  { question: "O VOX é gratuito?", answer: "O VOX é distribuído em versão beta. Informações sobre preço serão divulgadas somente após confirmação." },
  { question: "O VOX está disponível para iPhone?", answer: "Atualmente, a versão descrita no projeto é para Android. A versão para iOS não possui data definida." },
  { question: "Preciso de internet para usar o VOX?", answer: "A transcrição de voz é feita no aparelho. É necessária conexão com a internet para salvar o lembrete, pois o texto confirmado é enviado ao servidor para interpretação." },
  { question: "O áudio da minha voz é enviado para algum servidor?", answer: "Não. O áudio permanece no aparelho. Somente o texto confirmado pelo usuário é enviado ao servidor quando ele salva o lembrete." },
  { question: "O que fazer se a transcrição de voz não começar?", answer: "Verifique se o recurso de reconhecimento de voz do aparelho está disponível e se o pacote de idioma português está instalado. Se o problema persistir, verifique as configurações do serviço de voz do dispositivo." },
  { question: "O VOX entende qualquer tipo de lembrete?", answer: "Não. A interpretação utiliza regras simples e possui limitações. Não há suporte confirmado para expressões como “daqui a duas horas”, tarefas recorrentes como “toda segunda-feira” ou períodos vagos como “às sete da noite”." },
];

export const TEAM: { name: string; user: string; role?: string }[] = [
  { name: "Augusto Santos Gomes Neres", user: "augustoneres" },
  { name: "José Victor Xavier Silva", user: "devZevitor" },
  { name: "Lucas", user: "lucas013csr" },
  { name: "Emily Sophia", user: "mmdoce" },
  { name: "Matheus Bertelli", user: "TheusBertelli" },
];

export const ABOUT_TEXT = "Somos a equipe que desenvolveu o VOX para tornar o registro de tarefas e lembretes mais prático no dia a dia.";

export const PERSONAS: { id: string; initials: string; name: string; profile: string; needs: string[]; help: string }[] = [
  {
    id: "a",
    initials: "MO",
    name: "Mariana Oliveira",
    profile: "Jovem com rotina corrida, que nem sempre consegue anotar uma tarefa no momento em que se lembra dela.",
    needs: ["Rotina movimentada", "Praticidade para registrar compromissos", "Registrar tarefas por voz", "Manter compromissos organizados"],
    help: "Ela fala a tarefa, revisa o texto reconhecido e salva. Se houver data e horário futuros reconhecidos, o aplicativo agenda uma notificação local.",
  },
  {
    id: "b",
    initials: "DM",
    name: "Dona Marta",
    profile: "Pessoa idosa que pode enfrentar esquecimentos e valoriza autonomia, simplicidade e clareza ao usar tecnologia.",
    needs: ["Interface simples", "Textos legíveis e botões fáceis de identificar", "Autonomia no dia a dia", "Registrar lembretes por voz"],
    help: "Uma forma clara de registrar lembretes por voz e, quando há data e horário futuros reconhecidos, receber uma notificação local no aparelho.",
  },
];

export const AUDIENCE_NOTE = "O VOX é uma ferramenta de apoio à rotina. Ele não substitui acompanhamento médico, cuidadores ou outros recursos de assistência, quando necessários.";
