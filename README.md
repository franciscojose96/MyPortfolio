# Portfólio · Franzé

Portfólio em React + Vite.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final em dist/
```

## Editar o conteúdo

O texto do site fica todo em `src/data/`. Para mudar o conteúdo, não é preciso mexer nos componentes.

| Arquivo | O que tem |
| --- | --- |
| `src/data/projects.js` | Produtos em destaque e trabalhos anteriores |
| `src/data/experience.js` | Experiência profissional |
| `src/data/skills.js` | Conhecimentos, por grupo |
| `src/data/profile.js` | Hero, sobre mim, IA e contato |
| `src/data/stages.js` | Estágios possíveis de um produto |

### Adicionar um produto

1. Abra `src/data/projects.js`.
2. Copie um dos objetos do array `projects` e cole onde quiser que ele apareça.
3. Ajuste os campos. O `stage` pode ser `production`, `launch` ou `development`.
4. Para mostrar uma tela real, coloque a imagem em `public/img/` e preencha `image: './img/nome.png'`.

O produto aparece automaticamente no hero e na seção de produtos.

## Publicação

O workflow em `.github/workflows/deploy.yml` publica no GitHub Pages a cada push na `main`.
No GitHub, em **Settings → Pages → Source**, selecione **GitHub Actions**.
