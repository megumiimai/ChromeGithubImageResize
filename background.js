chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status !== "loading") return;
  if (!tab.url.match("https://github.com/(.+)/(.+)/issues|pull/(\\d+)")) return;

  executeScripts(null, [
    { file: "content.js" },
    { file: "lib/jquery-3.4.1.min.js" },
  ]);
});

function executeScripts(tabId, injectDetailsArray) {
  function createCallback(tabId, injectDetails, innerCallback) {
    return function () {
      chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
    };
  }

  let callback = null;
  for (let i = 0; i < injectDetailsArray.length; i++) {
    callback = createCallback(tabId, injectDetailsArray[i], callback);
  }

  if (callback !== null) callback();
}
