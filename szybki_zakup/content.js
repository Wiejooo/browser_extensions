function kliknijPrzycisk(tekst) {
    const przycisk = [...document.querySelectorAll("button")].find(el => el.innerText.trim() === tekst);
    if (przycisk) {
        przycisk.click();
    } else {
        console.log(`Nie znaleziono przycisku: ${tekst}`);
    }
}

function czekajNaElement(selektor, tekst) {
    return new Promise((resolve, reject) => {
        const sprawdzElement = () => {
            const element = [...document.querySelectorAll(selektor)]
                .find(el => el.innerText.includes(tekst));

            if (element) {
                resolve(element);
                return true;
            }
            return false;
        };

        if (sprawdzElement()) return;

        const observer = new MutationObserver(() => {
            if (sprawdzElement()) observer.disconnect();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setTimeout(() => {
            observer.disconnect();
            reject(`Nie znaleziono elementu ${selektor} zawierającego tekst "${tekst}"`);
        }, 10000);
    });
}

function kliknijDiv(tekst) {
    const div = [...document.querySelectorAll("div")].find(el => el.innerText.trim() === tekst);
    if (div) {
        div.click();
    } else {
        console.log(`Nie znaleziono div z tekstem: ${tekst}`);
    }
}
function czekajNaElementTekst(selektor, oczekiwanyTekst, callback) {
    const sprawdzElement = () => {
        const element = [...document.querySelectorAll(selektor)]
            .find(el => el.innerText.trim() === oczekiwanyTekst);

        if (element) {
            callback(element);
            return true;
        }
        return false;
    };

    if (sprawdzElement()) return;
    const observer = new MutationObserver(() => {
        if (sprawdzElement()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}
function czekajNaPrzyciskTekstowy(tekst, callback) {
    const observer = new MutationObserver(() => {
        const przycisk = [...document.querySelectorAll("button")]
            .find(el => el.innerText.trim() === tekst);
        if (przycisk) {
            observer.disconnect();
            callback(przycisk);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
async function kliknijOswiadczenie() {
    try {
        let labelOswiadczenie = await czekajNaElement("label", "Oświadczam, że zapoznałem/am się z");
        labelOswiadczenie.click();
    } catch (error) {
        console.log(`Błąd: ${error}`);
    }
}


async function wykonajFlow() {
    if (!sessionStorage.getItem("kontynuujPoPrzejściu")) return;
    sessionStorage.removeItem("kontynuujPoPrzejściu");
    try {
        let przyciskSposobDostawy = await czekajNaElement("button", "3. Sposób dostawy");
        console.log("Klikam w '3. Sposób dostawy'");
        przyciskSposobDostawy.click();

        await new Promise(resolve => setTimeout(resolve, 100));
        let opcjaKurier = await czekajNaElement("div.title", "Kurier");
        console.log("Klikam w 'Kurier'");
        opcjaKurier.click();

        await new Promise(resolve => setTimeout(resolve, 100));
        let przyciskMetodaPlatnosci = await czekajNaElement("button", "4. Metoda płatności");
        console.log("Klikam w '4. Metoda płatności'");
        przyciskMetodaPlatnosci.click();

        await new Promise(resolve => setTimeout(resolve, 100));
        let opcjaPrzelew = await czekajNaElement("div.title", "Przelew tradycyjny");
        console.log("Klikam w 'Przelew tradycyjny'");
        opcjaPrzelew.click();

        await new Promise(resolve => setTimeout(resolve, 100));
        await kliknijOswiadczenie();

    } catch (error) {
        console.log(`Błąd: ${error}`);
    }
}

wykonajFlow();



