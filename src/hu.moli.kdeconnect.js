chrome.browserAction.onClicked.addListener (function (tab) {
  if (tab.url.indexOf ('chrome://') !== 0) {
    chrome.runtime.connectNative ('hu.moli.kdeconnect').postMessage (tab.url);
  }
});
