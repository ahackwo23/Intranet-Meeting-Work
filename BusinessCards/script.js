document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('cards');
  let currentIndex = 0;
  const cardsPerPage = 4;

  function loadCards(data) {
    data.cards.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('card', 'layout-text-left-image-right', 'off-screen',); // Add necessary classes

      // Add layout class logic
      switch (item.templateDetails.layout.toLowerCase()) {
        case "text on left side, image on right side":
          card.classList.add('layout-text-left-image-right');
          break;
        case "text on right side, image on left side":
          card.classList.add('layout-text-right-image-left');
          break;
        case "text on bottom, image on top":
          card.classList.add('layout-text-bottom-image-top');
          break;
        default:
          card.classList.add('layout-text-bottom-image-top');
          break;
      }

      // Create and append image
      const cardImage = document.createElement('img');
      cardImage.src = item.imageUrl;
      cardImage.alt = item.employee;
      card.appendChild(cardImage);

      // Create and append card text container
      const cardText = document.createElement('div');
      cardText.classList.add('card-container-horizontal');

      const cardTitle = document.createElement('h2');
      cardTitle.innerHTML = `<div class='Items-Json'>${item.from}</div>`;
      cardText.appendChild(cardTitle);

      const cardTimestamp = document.createElement('p');
      cardText.appendChild(cardTimestamp);

      const cardAction = document.createElement('h2');
      cardAction.innerHTML = `<div class='Action-Card'>${item.action}</div>`;
      cardText.appendChild(cardAction);

      const cardOrigin = document.createElement('p');
      cardOrigin.innerHTML = `<div class='speech3 up3'> ${item.employee} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${item.timestamp}</div>`;
      cardText.appendChild(cardOrigin);

      const cardTYPE = document.createElement('h4');
      cardTYPE.textContent = item.cardtype;
      // Add background color class to h5 based on cardtype
      switch (item.cardtype.toLowerCase()) {
        case 'recognition':
          cardTYPE.classList.add('h5-recognition');
          break;
        case 'milestone':
          cardTYPE.classList.add('h5-milestone');
          break;
        case 'happy birthday':
          cardTYPE.classList.add('h5-happy-birthday');
          break;
        default:
          break;
      }
      cardText.appendChild(cardTYPE);

      const cardDescription = document.createElement('p');
      cardDescription.innerHTML = `<div class='speech up'> ${item.text} </div>`;
      cardText.appendChild(cardDescription);

      const cardCategory = document.createElement('h5');
      cardCategory.textContent = item.catergory;
      cardText.appendChild(cardCategory);

      card.appendChild(cardText);
      cardContainer.appendChild(card);
    });

    updateCardCount();
    updateCardVisibility();
  }

  function updateCardCount() {
    const cards = document.querySelectorAll('.card');
    cardCount = cards.length;
  }

  function updateCardVisibility() {
    const cards = document.querySelectorAll('.card');
    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage - 1;

    cards.forEach((card, index) => {
      if (index >= startIndex && index <= endIndex) {
        card.classList.remove('off-screen');
      } else {
        card.classList.add('off-screen');
      }
    });
  }

  function goToPage(pageIndex) {
    currentIndex = pageIndex;
    updateCardVisibility();
  }

  // Handle navigation arrows
  document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Math.ceil(cardCount / cardsPerPage)) % Math.ceil(cardCount / cardsPerPage);
    updateCardVisibility();
  });

  document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Math.ceil(cardCount / cardsPerPage);
    updateCardVisibility();
  });

  // Fetch data and load cards
  fetch('data.json')
    .then(response => response.json())
    .then(data => loadCards(data))
    .catch(error => console.error('Error fetching data:', error));

  // Initialize visibility
  updateCardVisibility();
});


