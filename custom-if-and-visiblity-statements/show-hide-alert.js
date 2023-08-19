document.addEventListener('DOMContentLoaded', function() {
  // Get references to the elements
  var adaptabilityParent = document.getElementById('adaptability-parent');
  var noResultsAlert = document.getElementById('no-results-alert');

  // Check if adaptabilityParent is hidden
  if (adaptabilityParent.style.display === 'none') {
    // Show noResultsAlert
    noResultsAlert.style.display = 'block';
    console.log('Showing no-results-alert');
  } else {
    // Hide noResultsAlert
    noResultsAlert.style.display = 'none';
    console.log('Hiding no-results-alert');
  }
});
