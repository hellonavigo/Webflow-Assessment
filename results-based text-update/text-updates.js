document.addEventListener('DOMContentLoaded', function() {
    // Select the card container and all cards
    var cardContainer = document.querySelector('.content-cards');
    var cards = Array.from(cardContainer.querySelectorAll('.dashboard-home-card'));

    // Function to update text and add class based on score
    function updateTextAndClass(score, cardElement, textElement) {
        if (score >= 6.0 && score <= 7.0) {
            textElement.textContent = 'High';
            cardElement.classList.add('green');
        } else if (score >= 5.0 && score <= 5.9) {
            textElement.textContent = 'Upper Medium';
            cardElement.classList.add('light-green');
        } else if (score >= 4.0 && score <= 4.9) {
            textElement.textContent = 'Lower Medium';
            cardElement.classList.add('yellow');
        } else if (score >= 1.0 && score <= 3.9) {
            textElement.textContent = 'Low';
            cardElement.classList.add('red');
        } else {
            textElement.textContent = 'Unknown'; // Default or fallback text
        }
    }

    // Update text and class on page load
    cards.forEach(function(card) {
        var score = parseFloat(card.querySelector('.heading-content').textContent);
        var textElement = card.querySelector('.a-h4-heading.bold.black');
        updateTextAndClass(score, card, textElement);
    });
});