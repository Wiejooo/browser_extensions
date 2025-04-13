let isAutoClickEnabled = true;

chrome.storage.local.get(["isAutoClickEnabled"], (result) => {
    if (result.isAutoClickEnabled !== undefined) {
        isAutoClickEnabled = result.isAutoClickEnabled;
    }
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.isAutoClickEnabled) {
        isAutoClickEnabled = changes.isAutoClickEnabled.newValue;
        console.log("AutoClick status updated:", isAutoClickEnabled ? "ON" : "OFF");
    }
});

function autoClick() {
    if (!isAutoClickEnabled || window.location.href !== "https://b2b.miglo.pl/#") {
        return;
    }
    
    const linkElement = document.querySelector("a[href='#'] img[alt='miglo-logo']");
    if (linkElement) {
        const parentLink = linkElement.closest("a");
        if (parentLink) {
            parentLink.click();
        }
    }
}

setInterval(autoClick, 5000);
