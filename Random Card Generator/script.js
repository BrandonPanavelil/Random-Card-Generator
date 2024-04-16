function generateRandomCard() {
    const suits = ['♦', '♥', '♠', '♣'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitsClasses = ['diamonds', 'hearts', 'spades', 'clubs']; // For CSS class names
  
    // Pick a random suit and value
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];
    const randomValue = values[Math.floor(Math.random() * values.length)];
  
    // Get the card div and set its class and content
    const cardDiv = document.getElementById('card');
    cardDiv.className = `card ${suitsClasses[randomSuitIndex]}`;
    cardDiv.innerHTML = `
      <div class="value">${randomValue}</div>
      <div class="suit top">${randomSuit}</div>
      <div class="suit bottom">${randomSuit}</div>`;
  }
  
  
  