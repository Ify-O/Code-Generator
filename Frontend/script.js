const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");

button.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "http://l1077u8ddys8rtiyxz2w0v83.178.105.39.91.sslip.io/",
    );
    const data = await response.text();
    quoteText.textContent = data;
  } catch (error) {
    quoteText.textContent = "Error fetching quote";
  }
});
