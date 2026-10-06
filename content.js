// Altura (em px) da faixa no topo da tela que chama a barra do YouTube
const ZONA_TOPO = 40;

const TEATRO = ':is(ytd-watch-flexy, ytd-watch-grid)[theater]:not([fullscreen])';

const CSS = `
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

ytd-page-manager:has(${TEATRO}) {
  margin-top: 0 !important;
}

ytd-app:has(${TEATRO}) #masthead-container {
  transform: translateY(-100%);
  transition: transform 0.2s ease;
}

html.yt-teatro-barra ytd-app:has(${TEATRO}) #masthead-container,
ytd-app:has(${TEATRO}) #masthead-container:focus-within {
  transform: translateY(0);
}
`;

// Coloca o CSS direto na página (uma única vez)
function injectStyle() {
  if (document.getElementById('yt-teatro-style')) return;
  const style = document.createElement('style');
  style.id = 'yt-teatro-style';
  style.textContent = CSS;
  (document.head || document.documentElement).appendChild(style);
}

// Faz o player recalcular o tamanho do vídeo
function refit() {
  window.dispatchEvent(new Event('resize'));
}

let observed = null;
let observer = null;

// Observa o elemento principal da página de vídeo (layout antigo ou novo)
function watchTheaterMode() {
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
  const w = observed || document.querySelector('ytd-watch-flexy, ytd-watch-grid');
  return !!w && w.hasAttribute('theater') && !w.hasAttribute('fullscreen');
}

const html = document.documentElement;

window.addEventListener('mousemove', (e) => {
  const barra = document.getElementById('masthead-container');
  const visivel = html.classList.contains('yt-teatro-barra');
  const limite = visivel ? (barra ? barra.offsetHeight : 56) : ZONA_TOPO;
  html.classList.toggle('yt-teatro-barra', noModoTeatro() && e.clientY <= limite);
}, true);

html.addEventListener('mouseleave', () => {
  html.classList.remove('yt-teatro-barra');
});

document.addEventListener('yt-navigate-finish', () => {
  injectStyle();
  watchTheaterMode();
  setTimeout(refit, 300);
});

injectStyle();
watchTheaterMode();
console.log('[YT Teatro] extensão ativa (v1.4)');
