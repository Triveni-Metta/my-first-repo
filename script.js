const tips = [
  "Drink plenty of water to keep your skin hydrated.",
  "Always remove your makeup before sleeping.",
  "Use sunscreen daily, even on cloudy days.",
  "Exfoliate your skin once a week to remove dead cells.",
  "Get at least 7-8 hours of sleep for glowing skin.",
  "Use a silk pillowcase to prevent hair breakage.",
  "Moisturize right after showering to lock in moisture."
];

function showRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").textContent = tips[randomIndex];
}