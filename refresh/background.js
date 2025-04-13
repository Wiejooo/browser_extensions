let isAutoClickEnabled = true;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    try {
        const url = new URL(tab.url);
        if (changeInfo.status === "complete" && url.href === "https://b2b.miglo.pl/#") {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["content.js"]
            });
        }
    } catch (e) {
        console.error("Błąd parsowania URL:", e);
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle_auto_click") {
        isAutoClickEnabled = !isAutoClickEnabled;
        chrome.storage.local.set({ isAutoClickEnabled });
        console.log("AutoClick status:", isAutoClickEnabled ? "ON" : "OFF");
        
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: showNotification,
                    args: [isAutoClickEnabled]
                });
            }
        });
    }
});

function showNotification(isEnabled) {
    const notification = document.createElement("div");
    notification.textContent = isEnabled ? "Auto Clicker ON" : "Auto Clicker OFF";
    notification.style.position = "fixed";
    notification.style.top = "10px";
    notification.style.right = "10px";
    notification.style.background = "rgba(0, 0, 0, 0.7)";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "10000";
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 1200);
}