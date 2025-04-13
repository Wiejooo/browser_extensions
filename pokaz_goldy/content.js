async function getProducts() {
  try {
      const response = await fetch("https://sklepapi.miglo.pl/api/product/List", {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json; charset=utf-8",
              "Accept": "*/*"
          },
          body: JSON.stringify({
              "CategoryId": null,
              "Category": null,
              "ItemsOnPage": 21,
              "Page": 1,
              "CustomerId": null,
              "OnlyPromotions": false,
              "SearchText": null,
              "RandomList": false,
              "ValueMin": null,
              "ValueMax": null,
              "WeightMin": null,
              "WeightMax": null
          })
      });

      const data = await response.json();
      return data['data']['products'].slice(0, 5);

  } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
      return [];
  }
}

async function getProductSpecification(productId) {
  try {
      const url = `https://sklepapi.miglo.pl/api/product/Specification/${productId}`;
      const response = await fetch(url, {
          headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
              "Accept": "application/json",
              "accept-language": "pl"
          }
      });

      if (!response.ok) {
          console.error(`Błąd pobierania specyfikacji dla ${productId}: ${response.status}`);
          return null;
      }

      const data = await response.json();
      return data['data'];

  } catch (error) {
      console.error(`Błąd podczas pobierania specyfikacji produktu ${productId}:`, error);
      return null;
  }
}

// Lista słów kluczowych do sprawdzania
let keywords = ["golarka", 'ekran'];

function analyzeProductData(productCode, jsonData) {
  let productResults = {};

  jsonData.forEach(product => {
      let productName = product.name.toLowerCase();
      let quantity = product.quantity || 0;

      keywords.forEach(keyword => {
          if (productName.includes(keyword.toLowerCase())) {
              if (!productResults[keyword]) {
                  productResults[keyword] = { word: keyword, quantity: 0 };
              }
              productResults[keyword].quantity += quantity;
          }
      });
  });

  return Object.keys(productResults).length > 0 ? productResults : null;
}

(async () => {
  let products = await getProducts();
  let results = {};

  for (let product of products) {
      let productId = product.id;
      let productCode = product.productCode;
      let jsonData = await getProductSpecification(productId);

      if (jsonData) {
          let productAnalysis = analyzeProductData(productCode, jsonData);

          if (productAnalysis) {
              results[productCode] = productAnalysis;
          }
      }
  }
  window.productDictionary = results;
  highlightMatchingRows(results);
})();

function highlightMatchingRows(results) {
  document.querySelectorAll("tr").forEach(row => {
      let productCodeTd = null;

      row.querySelectorAll("td.align-middle").forEach(cell => {
          let text = cell.textContent.trim();
          if (/^[A-Za-z]+\d+$/.test(text)) {
              productCodeTd = cell;
          }
      });

      if (productCodeTd) {
          let productCode = productCodeTd.textContent.trim();
          if (results[productCode]) {
              row.style.backgroundColor = "green";
              row.style.color = "white";
              row.style.fontWeight = "bold";

              let keywordData = Object.values(results[productCode])
                  .map(entry => `${entry.word}: ${entry.quantity}`)
                  .join(", ");

              productCodeTd.textContent = productCode + ` (${keywordData})`;
          }
      }
  });
}
let observer = new MutationObserver(() => {
  highlightMatchingRows(window.productDictionary);
});
observer.observe(document.body, { childList: true, subtree: true });
setTimeout(() => highlightMatchingRows(window.productDictionary), 500);
