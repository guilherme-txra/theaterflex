<p align="center">
  <img src="icons/icon128.png" width="96" height="96" alt="TheaterFlex Logo">
</p>

<h1 align="center">TheaterFlex</h1>

<p align="center">
  <strong>O Modo Teatro Imersivo definitivo para o YouTube: 100% da janela, navegação inteligente e zero distrações.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Manifest-V3-success.svg?style=flat-square" alt="Manifest V3">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="Licença MIT">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Browsers-Chrome%20%7C%20Brave%20%7C%20Edge%20%7C%20Firefox-orange?style=flat-square" alt="Navegadores Compatíveis">
  <img src="https://img.shields.io/badge/Version-1.1.0-red.svg?style=flat-square" alt="Versão 1.1.0">
</p>

---

## 🎬 Sobre o TheaterFlex

No YouTube tradicional, o **Modo Teatro** padrão mantém a barra superior fixa, cortando parte do vídeo e deixando bordas pretas indesejadas, enquanto a **Tela Cheia** esconde as abas do navegador e impede que você role a página para ler comentários ou ver vídeos recomendados.

O **TheaterFlex** resolve isso de forma elegante:

1. **Expansão Total (100vh):** O player de vídeo ocupa exatamente toda a altura visível da janela do navegador.
2. **Abas Preservadas:** Suas abas, barra de favoritos e janelas continuam acessíveis.
3. **Barra Superior Inteligente:** A barra de busca e navegação do YouTube fica oculta para imersão total e reaparece suavemente ao aproximar o mouse do topo ou ao focar no campo de busca.
4. **Rolagem Livre:** Role a página a qualquer momento para ler os comentários ou ver a descrição do vídeo sem sair do modo imersivo.

---

## ⚡ Antes vs Depois

| Modo Teatro Padrão do YouTube | Com o TheaterFlex |
| :--- | :--- |
| ❌ Barra superior ocupa espaço vertical fixo | ✅ Barra superior oculta automaticamente e surge sob demanda ao aproximar o mouse |
| ❌ Player com altura limitada e bordas pretas | ✅ Player ocupa **100% da altura da janela (`100vh`)** |
| ❌ Tela cheia bloqueia abas e rolagem | ✅ Experiência de tela cheia sem perder abas nem acesso aos comentários |

---

## ✨ Funcionalidades

- 🖥️ **Player 100vh:** Aproveitamento máximo da tela sem cortes.
- 🖱️ **Header Auto-Hide com Hover:** Ao mover o cursor para a parte superior da tela (zona de 40px), o cabeçalho do YouTube surge suavemente.
- 🎛️ **Menu Popup Rápido:** Ative ou desative a extensão a qualquer momento diretamente pelo ícone na barra de extensões.
- ⌨️ **Atalho de Teclado Global:** Alterne o modo instantaneamente pelo atalho padrão `Alt + Shift + T` (totalmente customizável).
- ☁️ **Sincronização na Nuvem:** Suas preferências são salvas e sincronizadas entre seus navegadores via `chrome.storage.sync`.
- ⚡ **Ultra Leve:** Desenvolvido em JavaScript Vanilla e CSS puro com seletores `:has()`, sem frameworks pesados e com impacto nulo no desempenho.
- 🔄 **Compatibilidade com SPA:** Totalmente integrado ao ciclo de vida do YouTube (`yt-navigate-finish`), funcionando perfeitamente em playlists e troca contínua de vídeos.

---

## 📦 Como Instalar (Modo Desenvolvedor)

### No Google Chrome / Brave / Microsoft Edge / Opera:
1. Clone este repositório ou baixe o arquivo ZIP e extraia-o em seu computador:
   ```bash
   git clone https://github.com/SEU-USUARIO/theaterflex.git
   ```
2. Abra seu navegador e acesse a página de extensões:
   - Chrome: `chrome://extensions`
   - Brave: `brave://extensions`
   - Edge: `edge://extensions`
   - Opera: `opera://extensions`
3. Ative a opção **"Modo do desenvolvedor"** (*Developer mode*) no canto superior direito.
4. Clique no botão **"Carregar sem compactação"** (*Load unpacked*).
5. Selecione a pasta onde os arquivos da extensão estão salvos.
6. Abra um vídeo no [YouTube](https://www.youtube.com) e aperte a tecla `T` (ou `Alt + Shift + T`) para aproveitar!

### No Mozilla Firefox:
1. Abra o Firefox e acesse `about:debugging#/runtime/this-firefox`.
2. Clique em **"Carregar extensão temporária..."** (*Load Temporary Add-on...*).
3. Selecione o arquivo `manifest.json` do projeto.

---

## ⌨️ Como Personalizar os Atalhos de Teclado

O atalho padrão para ativar/desativar é `Alt + Shift + T`. Caso queira alterá-lo:

1. Clique no ícone do **TheaterFlex** e depois no botão **"Configurar"** (ao lado de Atalho de Teclado), ou acesse diretamente:
   - **Chrome / Brave / Edge:** `chrome://extensions/shortcuts`
   - **Firefox:** `about:addons` > Ícone de engrenagem ⚙️ > *Gerenciar atalhos da extensão*
2. Defina a combinação de teclas de sua preferência.

---

## 🗺️ Roadmap de Ideias

Ideias e melhorias que a comunidade pode implementar:
- [x] Menu Popup com chave Liga/Desliga
- [x] Persistência via `chrome.storage.sync`
- [x] Atalho de teclado via `chrome.commands`
- [ ] Slider para ajuste fino da altura do player (ex: 90vh a 100vh)
- [ ] Ajuste da sensibilidade da zona do topo (px) no Popup
- [ ] Opção para modo teatro automático ao abrir qualquer vídeo (*Auto-Theater*)
- [ ] Otimização para layout de Chat em Transmissões ao Vivo (*Live Streams*)

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Seja corrigindo um bug, melhorando a documentação ou adicionando uma nova funcionalidade do Roadmap.

Confira nosso [Guia de Contribuição (CONTRIBUTING.md)](CONTRIBUTING.md) para detalhes sobre fluxo de branches, padrões de commit e boas práticas.

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
