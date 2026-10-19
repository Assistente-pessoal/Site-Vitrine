# VOX — site-vitrine

React + Vite + TypeScript + CSS puro. Página estática, sem backend.

## Comandos
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # tsc + build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Manutenção
- Dados reais (versão, URLs, e-mail): `src/config.ts`.
- Textos (recursos, etapas, instalação, FAQ): `src/content.ts`.
- Estilos e temas: `src/index.css` (tema segue `prefers-color-scheme`).
- Fatos sobre o app: `CONTEXTO.md`.

## Placeholders a substituir (em `src/config.ts`)
| Campo | Estado | Efeito enquanto `null` |
|---|---|---|
| `version` | `"PENDENTE"` | Aparece como "Versão PENDENTE" |
| `apkUrl` | `null` | Botão "Baixar APK" desabilitado |
| `playStoreUrl` | `null` | Botão não é renderizado |
| `repoUrl` | `null` | Link do rodapé oculto |
| `contactEmail` | `null` | Link do rodapé oculto |
| `privacyUrl` | `null` | Link do rodapé oculto |

Outros pendentes:
- `public/og.png` (1200 × 630 px) e URLs absolutas de `og:image` após definir o domínio.
- Confirmar se o app é gratuito antes de afirmar isso (o site hoje diz apenas "versão beta").
- Testar o download do APK em um Android real.

## Publicação
Vercel, Netlify ou GitHub Pages: comando `npm run build`, pasta de saída `dist`.

## Equipe e público-alvo
- Integrantes e personas: `TEAM` e `PERSONAS` em `src/content.ts`. Para exibir a função de alguém, preencha `role`.
- As fotos vêm de `https://github.com/<usuário>.png`; se não carregarem, aparecem as iniciais.
