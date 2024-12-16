// Select all offer cards
const offerCards = document.querySelectorAll('.offer-card');

// Add click event listener to each offer card
offerCards.forEach(card => {
  card.addEventListener('click', function() {
    // Toggle active class on clicked card
    offerCards.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    // Toggle expanded class to show/hide dropdowns
    this.classList.toggle('expanded');
  });
});
