# 🤝 Guia de Contribuição — TheaterFlex

Obrigado por se interessar em contribuir com o **TheaterFlex**! 🎉 Este é um projeto de código aberto mantido pela comunidade com o objetivo de entregar a melhor experiência de Modo Teatro no YouTube, com foco em imersão, leveza, performance e zero dependências pesadas.

---

## 🛠️ Como Começar Localmente

A extensão é construída com tecnologias web nativas (JavaScript vanilla, CSS moderno e WebExtensions Manifest V3). **Não é necessário instalar ferramentas complexas ou executáveis pesados para começar.**

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/theaterflex.git
cd theaterflex
```

### 2. Carregar no Navegador

#### No Google Chrome / Brave / Microsoft Edge / Opera:
1. Abra o navegador e acesse `chrome://extensions` (ou `edge://extensions`, `brave://extensions`).
2. Ative a chave **"Modo do desenvolvedor"** (*Developer mode*) no canto superior direito.
3. Clique no botão **"Carregar sem compactação"** (*Load unpacked*).
4. Selecione a pasta raiz deste projeto.
5. Pronto! Acesse qualquer vídeo no YouTube para testar suas alterações. Ao editar arquivos, basta clicar no ícone de **Recarregar (🔄)** no card da extensão.

#### No Mozilla Firefox:
1. Abra o Firefox e acesse `about:debugging#/runtime/this-firefox`.
2. Clique em **"Carregar extensão temporária..."** (*Load Temporary Add-on...*).
3. Selecione o arquivo `manifest.json` na pasta do projeto.

---

## 🌿 Fluxo de Trabalho com Git

1. **Crie uma branch para sua modificação:**
   ```bash
   git checkout -b feature/nome-da-sua-feature
   # ou para correções:
   git checkout -b fix/descricao-do-bug
   ```

2. **Escreva commits claros seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/):**
   - `feat: adiciona controle de opacidade no popup`
   - `fix: corrige posicionamento da barra superior em telas 4K`
   - `docs: atualiza instruções de atalhos no README`
   - `style: refatora espaçamentos no popup.css`
   - `refactor: otimiza MutationObserver no content.js`

3. **Faça push para o seu fork:**
   ```bash
   git push origin feature/nome-da-sua-feature
   ```

4. **Abra um Pull Request (PR):**
   - Preencha o template do PR explicando o que foi feito e como testar.

---

## 💡 Princípios de Design do Projeto

Ao propor novas alterações, lembre-se das diretrizes centrais do projeto:

- **Ultra-leveza & Performance:** Evite adicionar bibliotecas ou frameworks pesados (jQuery, React, etc.) no `content.js`. Preferimos JavaScript vanilla limpo e seletores CSS eficientes.
- **Não ser intrusivo:** Não quebrar recursos nativos do YouTube (SPA navigation, atalhos do player, modo tela cheia padrão).
- **Multi-navegador:** Garantir que as alterações funcionem perfeitamente tanto no ecossistema Chromium (Chrome, Edge, Brave, Opera) quanto no Firefox.

---

## 💬 Dúvidas ou Sugestões?

Sinta-se à vontade para abrir uma [Issue](https://github.com/SEU-USUARIO/theaterflex/issues) para discutir ideias antes de começar a codificar!
