
document.addEventListener('DOMContentLoaded', function () {
    // Get the container for the cards
    var cardContainer = document.querySelector('.content-cards');

    // Get an array of card elements with class 'dashboard-home-card'
    var cards = Array.from(cardContainer.querySelectorAll('.dashboard-home-card'));

    // Sort the cards based on their scores in descending order
    var sortedCards = cards.sort(function (a, b) {
        var scoreA = parseFloat(a.querySelector('.heading-content').textContent);
        var scoreB = parseFloat(b.querySelector('.heading-content').textContent);
        return scoreB - scoreA; // Sort in descending order
    });

    // Append the sorted cards back to the container
    sortedCards.forEach(function (card) {
        cardContainer.appendChild(card);
    });

    // Set the default sorting order
    var defaultSortOrder = 'asc';
    sortCards(defaultSortOrder);

    // Add an event listener to the dropdown for sorting order changes
    document.getElementById('sort-dropdown').addEventListener('change', function (event) {
        var sortOrder = event.target.value;
        sortCards(sortOrder);
    });

    // Function to sort cards based on the provided order
    function sortCards(order) {
        // Create a copy of the sorted cards array
        var sortedCardsCopy = sortedCards.slice();
        // Sort the copied array based on the selected order
        sortedCardsCopy.sort(function (a, b) {
            var scoreA = parseFloat(a.querySelector('.heading-content').textContent);
            var scoreB = parseFloat(b.querySelector('.heading-content').textContent);

            if (order === 'asc') {
                return scoreB - scoreA;
            } else {
                return scoreA - scoreB;
            }
        });

        // Append the sorted cards back to the container
        sortedCardsCopy.forEach(function (card) {
            cardContainer.appendChild(card);
        });
    }
});
