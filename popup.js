document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('colorize-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const restrictedDomains = ['chrome://', 'chrome.google.com/webstore'];

      // Check if the URL is restricted
      const isRestricted = restrictedDomains.some(domain => tab.url.includes(domain));

      if (!isRestricted) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        }).then(() => {
          console.log('Content script executed');
        }).catch((error) => {
          console.error('Error executing content script:', error);
        });
      } else {
        console.error('Cannot access restricted URL:', tab.url);
      }
    });
  });
});
