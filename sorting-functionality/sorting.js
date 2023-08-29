    document.addEventListener('DOMContentLoaded', function () {
        var cardContainer = document.querySelector('.content-cards');
        var cards = Array.from(cardContainer.querySelectorAll('.dashboard-home-card'));
        console.log('Total number of cards:', cards.length);

        var sortedCards = cards.slice().sort(function (a, b) {
            var scoreA = parseFloat(a.querySelector('.heading-content').textContent);
            var scoreB = parseFloat(b.querySelector('.heading-content').textContent);

            // Handle cases where parsing fails or content is not a valid number
            if (isNaN(scoreA)) {
                scoreA = 0; // Assign a default value or handle it as you see fit
            }
            if (isNaN(scoreB)) {
                scoreB = 0; // Assign a default value or handle it as you see fit
            }

            return scoreB - scoreA;
        });

        console.log('Sorted cards:', sortedCards);

        sortedCards.forEach(function (card) {
            cardContainer.appendChild(card);
        });

        var defaultSortOrder = 'asc';
        sortCards(defaultSortOrder);

        document.getElementById('sort-dropdown').addEventListener('change', function (event) {
            var sortOrder = event.target.value;
            console.log('Sort order changed to:', sortOrder);
            sortCards(sortOrder);
        });

        function sortCards(order) {
            console.log('Sorting cards in', order, 'order');
            var sortedCardsCopy = sortedCards.slice();
            sortedCardsCopy.sort(function (a, b) {
                var scoreA = parseFloat(a.querySelector('.heading-content').textContent);
                var scoreB = parseFloat(b.querySelector('.heading-content').textContent);

                // Handle cases where parsing fails or content is not a valid number
                if (isNaN(scoreA)) {
                    scoreA = 0; // Assign a default value or handle it as you see fit
                }
                if (isNaN(scoreB)) {
                    scoreB = 0; // Assign a default value or handle it as you see fit
                }

                if (order === 'asc') {
                    return scoreB - scoreA;
                } else {
                    return scoreA - scoreB;
                }
            });

            console.log('Sorted cards copy:', sortedCardsCopy);

            cardContainer.innerHTML = '';
            sortedCardsCopy.forEach(function (card) {
                cardContainer.appendChild(card);
            });
        }
    });
