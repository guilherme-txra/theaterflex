// Inicializa as configurações padrão ao instalar ou atualizar
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['enabled'], (result) => {
    if (result.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true });
    }
  });
});

// Ouve atalhos de teclado configurados no manifest.json ou em chrome://extensions/shortcuts
chrome.commands.onCommand.addListener((command) => {
  if (command === 'toggle-extension') {
    chrome.storage.sync.get({ enabled: true }, (items) => {
      const newState = !items.enabled;
      chrome.storage.sync.set({ enabled: newState });
    });
  }
});
