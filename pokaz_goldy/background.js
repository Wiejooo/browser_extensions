chrome.webRequest.onCompleted.addListener(
  (details) => {
      if (details.url.includes("/api/product/List")) {
          console.log("Przechwycono odpowiedź API:", details.url);

          chrome.tabs.sendMessage(details.tabId, { action: "fetchData" });
      }
  },
  { urls: ["https://b2b.miglo.pl/api/*"] }
);