document.addEventListener('DOMContentLoaded', () => {
  const toggleEnabled = document.getElementById('toggle-enabled');
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  const shortcutKey = document.getElementById('shortcut-key');
  const btnShortcuts = document.getElementById('btn-shortcuts');

  // Atualiza a interface gráfica do status
  function updateUI(isEnabled) {
    toggleEnabled.checked = isEnabled;
    if (isEnabled) {
      statusDot.className = 'status-dot active';
      statusText.textContent = 'Ativado';
    } else {
      statusDot.className = 'status-dot';
      statusText.textContent = 'Desativado';
    }
  }

  // Carrega o estado atual de chrome.storage.sync
  chrome.storage.sync.get({ enabled: true }, (items) => {
    updateUI(items.enabled !== false);
  });

  // Salva a alteração quando o usuário clica no toggle
  toggleEnabled.addEventListener('change', () => {
    const isEnabled = toggleEnabled.checked;
    chrome.storage.sync.set({ enabled: isEnabled }, () => {
      updateUI(isEnabled);
    });
  });

  // Atualiza se houver alteração de armazenamento (ex: via atalho de teclado)
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.enabled !== undefined) {
      updateUI(changes.enabled.newValue);
    }
  });

  // Obtém o atalho configurado no navegador
  if (chrome.commands && chrome.commands.getAll) {
    chrome.commands.getAll((commands) => {
      const toggleCmd = commands.find((cmd) => cmd.name === 'toggle-extension');
      if (toggleCmd && toggleCmd.shortcut) {
        shortcutKey.textContent = toggleCmd.shortcut;
      } else {
        shortcutKey.textContent = 'Não configurado';
      }
    });
  }

  // Abre a tela de gerenciamento de atalhos do navegador
  btnShortcuts.addEventListener('click', (e) => {
    e.preventDefault();
    const isFirefox = navigator.userAgent.includes('Firefox');
    const shortcutUrl = isFirefox 
      ? 'about:addons' 
      : 'chrome://extensions/shortcuts';
      
    chrome.tabs.create({ url: shortcutUrl });
  });
});
