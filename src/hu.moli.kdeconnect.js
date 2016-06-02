chrome.browserAction.onClicked.addListener (function (tab) {
  if (tab.url.indexOf ("chrome://") !== 0) {
    chrome.runtime.connectNative ("hu.moli.kdeconnect").postMessage (tab.url);
  }
});
chrome.contextMenus.create({
  "id": "kdeconnectUrlContext",
  "title": "KDE Connect",
  "contexts": ["page", "frame", "link", "image", "video", "audio"],
});
chrome.contextMenus.onClicked.addListener (function(info, tab) {
  if (info.menuItemId === "kdeconnectUrlContext") {
    chrome.runtime.connectNative ("hu.moli.kdeconnect").postMessage (info.linkUrl || info.srcUrl || info.frameUrl || info.pageUrl);
  }
});
