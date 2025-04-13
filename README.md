# 🛒 Szybki Zakup – Rozszerzenie do przeglądarki
Szybki Zakup to rozszerzenie do przeglądarki (Chrome/Opera), które automatyzuje proces zakupowy na stronie https://b2b.miglo.pl. Dzięki niemu możliwe jest błyskawiczne dodanie produktu do koszyka oraz przejście przez kolejne etapy zamówienia – aż do jego finalizacji.

## 🔧 Funkcje
- Dodanie opcji „Szybki zakup” do menu kontekstowego strony.

- Skrót klawiszowy Alt+Q do błyskawicznego rozpoczęcia zakupu.

- Automatyczne kliknięcie przycisku „Dodaj do koszyka”.

- Przeniesienie użytkownika na stronę zamówienia (/Checkout).

- Automatyczne:

    - Wybranie sposobu dostawy (np. Kurier),

    - Wybranie metody płatności (np. Przelew tradycyjny),

    - Zaznaczenie oświadczenia o zapoznaniu się z regulaminem.

## ⌨️ Skróty klawiszowe
- Alt+Q – uruchamia proces szybkiego zakupu na aktywnej stronie.


# 💰 Pokaż Goldy – Rozszerzenie do przeglądarki
Pokaż Goldy to rozszerzenie do przeglądarki zaprojektowane z myślą o użytkownikach platformy miglo.pl. Jego głównym zadaniem jest szybkie i przejrzyste wyświetlanie informacji o produktach, których nazwy lub parametry zawierają określone frazy.

## 🔧 Funkcje
- Automatyczne przeszukiwanie zawartości strony w poszukiwaniu produktów spełniających określone warunki.

- Wyróżnianie lub prezentowanie produktów zawierających słowa kluczowe.

- Działa automatycznie po wejściu na odpowiednią stronę platformy B2B.

- Wersja lekka – bez ingerencji w wygląd całej strony, szybkie działanie w tle.


# 🔄 Refresh – Rozszerzenie do przeglądarki
Refresh to rozszerzenie stworzone z myślą o platformie miglo.pl, którego zadaniem jest monitorowanie dostępności produktów w czasie rzeczywistym. Automatycznie odświeża stronę z listą produktów w regularnych odstępach, umożliwiając użytkownikowi szybkie wychwycenie nowo dodanych ofert.

## 🔧 Funkcje
- Cyklicznie przeładowuje stronę z listą produktów bez potrzeby interwencji użytkownika.

- Zapewnia stały dostęp do najnowszych informacji o dostępnych towarach.

- Idealne rozwiązanie do śledzenia ofert o dynamicznej dostępności.

- Lekka aplikacja działająca cicho w tle.



## 📦 Instalacja
1. Otwórz Chrome lub Operę i przejdź do chrome://extensions/.

2. łącz tryb deweloperski (Developer mode).

3. Kliknij „Wczytaj rozszerzenie bez pakietu” (Load unpacked).

4. Wskaż folder z plikami tego repozytorium.

## 📁 Struktura plików
- manifest.json – konfiguracja rozszerzenia.

- background.js – logika obsługi menu kontekstowego i skrótu klawiszowego.

- content.js – automatyzacja kliknięć i interakcji na stronie zakupu.

## 📋 Wymagania
- Przeglądarka oparta na Chromium (np. Chrome, Opera).

- Konto i dostęp do platformy b2b.miglo.pl.

ENG
# 🛒 Quick Purchase – Browser Extension
Quick Purchase is a browser extension (for Chrome/Opera) that automates the purchasing process on the https://b2b.miglo.pl website. It enables users to instantly add a product to the cart and proceed through all necessary checkout steps — all with a single click or keyboard shortcut.

## 🔧 Features
- Adds a “Quick Purchase” option to the page context menu.

- Alt+Q keyboard shortcut to instantly trigger the purchase process.

- Automatically clicks the “Add to Cart” button.

- Redirects the user to the /Checkout page.

- Automatically:

- Selects a delivery method (e.g., Courier),

- Selects a payment method (e.g., Traditional bank transfer),

- Confirms the declaration checkbox (agreement to terms).


# 💰 Show Golds – Browser Extension
Show Golds is a browser extension designed for users of the miglo.pl platform. Its main purpose is to quickly and clearly highlight or display information about products whose names or attributes contain specific keywords — commonly referred to as "golds."

## 🔧 Features
- Automatically scans the webpage for products that match defined criteria.

- Highlights or displays products containing specific keywords (e.g., "gold", "premium", etc.).

- Runs automatically when visiting supported pages on the B2B platform.

- Lightweight – runs silently in the background without interfering with the page layout.

# 🔄 Refresh – Browser Extension
Refresh is a browser extension developed for the miglo.pl platform, designed to monitor product availability in real time. It automatically refreshes the product listing page at regular intervals, helping users stay ahead and catch newly listed items as soon as they appear.

## 🔧 Features
- Periodically reloads the product list page without user interaction.

- Ensures the user always sees the most up-to-date offer set.

- Useful for tracking fast-changing inventory or restocked products.

- Lightweight and optimized to work quietly in the background.


## 📦 Installation
1. Open Chrome or Opera and go to chrome://extensions/.

2. Enable Developer mode.

3. Click Load unpacked.

4. Select the folder containing this repository's files.

## ⌨️ Keyboard Shortcut
Alt+Q – launches the quick purchase process on the active page.

## 📁 File Structure
manifest.json – extension configuration.

background.js – handles context menu and keyboard shortcut logic.

content.js – automates interactions with the checkout page.

## 📋 Requirements
A Chromium-based browser (e.g., Chrome, Opera).

An account with access to b2b.miglo.pl.