chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "szybkiZakup",
        title: "Szybki zakup",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "szybkiZakup") {
        wykonajSzybkiZakup(tab.id);
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "start_quick_purchase") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                return;
            }
            wykonajSzybkiZakup(tabs[0].id);
        });
    }
});

function wykonajSzybkiZakup(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: szybkiZakup
    });
}

function szybkiZakup() {
    sessionStorage.setItem("kontynuujPoPrzejściu", "true");
    kliknijPrzycisk("Dodaj do koszyka");
    window.location.href = "https://b2b.miglo.pl/Checkout";
}
