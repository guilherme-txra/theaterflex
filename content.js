// Configurações e constantes
const ZONA_TOPO = 40;
const TEATRO = ':is(ytd-watch-flexy, ytd-watch-grid)[theater]:not([fullscreen])';

const CSS = `
/* 1) Player ocupa a altura inteira da janela */
${TEATRO} :is(
  #player-theater-container,
  #player-full-bleed-container,
  #full-bleed-container,
  #player-wide-container
) {
  height: 100vh !important;
  max-height: 100vh !important;
  min-height: 0 !important;
  background: #000 !important;
}

/* 2) Tira o espaço que o YouTube reserva no topo para a barra */
ytd-page-manager:has(${TEATRO}) {
  margin-top: 0 !important;
}

/* 3) Esconde a barra subindo ela para fora da tela */
ytd-app:has(${TEATRO}) #masthead-container {
  transform: translateY(-100%);
  transition: transform 0.2s ease;
}

/* 4) Mostra a barra quando o script marca o <html> com a classe
      yt-teatro-barra, ou enquanto você digita na busca */
html.yt-teatro-barra ytd-app:has(${TEATRO}) #masthead-container,
ytd-app:has(${TEATRO}) #masthead-container:focus-within {
  transform: translateY(0);
}
`;

let isEnabled = true;
let observed = null;
let observer = null;
const html = document.documentElement;

// Injeta o CSS direto na página
function injectStyle() {
  if (!isEnabled || document.getElementById('yt-teatro-style')) return;
  const style = document.createElement('style');
  style.id = 'yt-teatro-style';
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
}

// Remove o CSS da página
function removeStyle() {
  const style = document.getElementById('yt-teatro-style');
  if (style) style.remove();
  html.classList.remove('yt-teatro-barra');
}

// Faz o player recalcular o tamanho do vídeo
function refit() {
  window.dispatchEvent(new Event('resize'));
}

// Observa o elemento principal da página de vídeo (layout antigo ou novo)
function watchTheaterMode() {
  if (!isEnabled) return;
  const watch = document.querySelector('ytd-watch-flexy, ytd-watch-grid');
  if (!watch || watch === observed) return;

  if (observer) observer.disconnect();
  observed = watch;

  observer = new MutationObserver(() => setTimeout(refit, 100));
  observer.observe(watch, {
    attributes: true,
    attributeFilter: ['theater', 'fullscreen']
  });

  setTimeout(refit, 300);
}

// true se o vídeo está em modo teatro e fora da tela cheia
function noModoTeatro() {
  if (!isEnabled) return false;
  const w = observed || document.querySelector('ytd-watch-flexy, ytd-watch-grid');
  return !!w && w.hasAttribute('theater') && !w.hasAttribute('fullscreen');
}

// Gerencia o estado da extensão (ativado/desativado)
function setExtensionState(enabled) {
  isEnabled = enabled;
  if (isEnabled) {
    injectStyle();
    watchTheaterMode();
  } else {
    removeStyle();
    if (observer) {
      observer.disconnect();
      observed = null;
    }
  }
  setTimeout(refit, 150);
}

// Acompanha o mouse: perto do topo = barra visível; longe = escondida.
window.addEventListener('mousemove', (e) => {
  if (!isEnabled) return;
  const barra = document.getElementById('masthead-container');
  const visivel = html.classList.contains('yt-teatro-barra');
  const limite = visivel ? (barra ? barra.offsetHeight : 56) : ZONA_TOPO;
  html.classList.toggle('yt-teatro-barra', noModoTeatro() && e.clientY <= limite);
}, true);

// Mouse saiu da página (foi para as abas do navegador): esconde a barra
html.addEventListener('mouseleave', () => {
  if (isEnabled) {
    html.classList.remove('yt-teatro-barra');
  }
});

// O YouTube é uma SPA: este evento dispara a cada troca de vídeo/página
document.addEventListener('yt-navigate-finish', () => {
  if (isEnabled) {
    injectStyle();
    watchTheaterMode();
    setTimeout(refit, 300);
  }
});

// Inicialização: carrega preferência sincronizada e escuta mudanças em tempo real
if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
  chrome.storage.sync.get({ enabled: true }, (items) => {
    setExtensionState(items.enabled !== false);
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.enabled !== undefined) {
      setExtensionState(changes.enabled.newValue);
    }
  });
} else {
  // Fallback caso executado fora do contexto de extensão padrão
  setExtensionState(true);
}

console.log('[TheaterFlex] extensão ativa (v1.1)');
