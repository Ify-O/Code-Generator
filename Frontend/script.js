const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const authorInput = document.getElementById("author");

const form = document.getElementById("quote-form");
const newQuoteInput = document.getElementById("new-quote");
const message = document.getElementById("message");

const API_URL = "http://l1077u8ddys8rtiyxz2w0v83.178.105.39.91.sslip.io/";

button.addEventListener("click", async () => {
  try {
    const response = await fetch(API_URL);

    const data = await response.text();

    quoteText.textContent = data;
  } catch (error) {
    quoteText.textContent = "Error fetching quote";
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newQuote = newQuoteInput.value.trim();
  const author = authorInput.value.trim();

  // Validation
  if (newQuote === "" || author === "") {
    message.textContent = "Quote and author cannot be empty";
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        quote: newQuote,
        author: author,
      }),
    });

    if (response.ok) {
      message.textContent = "Quote added successfully!";

      // Clear inputs
      newQuoteInput.value = "";
      authorInput.value = "";
    } else {
      const errorText = await response.text();
      message.textContent = errorText;
    }
  } catch (error) {
    message.textContent = "Could not connect to server. Is backend running?";
  }
});
