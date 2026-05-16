const button = document.getElementById("btn");
const quoteText = document.getElementById("quote");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.text();
    quoteText.textContent = data;
  } catch (error) {
    quoteText.textContent = "Error fetching quote";
  }
});
