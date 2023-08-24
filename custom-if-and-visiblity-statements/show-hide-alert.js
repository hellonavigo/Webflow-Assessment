// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
  // Function to check if an element is hidden
  function isHidden(element) {
    return window.getComputedStyle(element).display === "none";
  }

  // Function to show an element
  function showElement(element) {
    element.style.display = "block";
  }

  // Function to hide an element
  function hideElement(element) {
    element.style.display = "none";
  }

  // Get references to the elements
  var adaptabilityParent = document.getElementById("adaptability-parent");
  var situationalAwarenessParent = document.getElementById("situational-awareness-parent");
  var selfEfficacyParent = document.getElementById("self-efficacy-parent");
  var confidenceParent = document.getElementById("confidence-parent");
  var creativityParent = document.getElementById("creativity-parent");
  var socialParent = document.getElementById("social-parent");

  
  var noResultsAlert = document.getElementById("no-results-alert");

  // Check if both adaptabilityParent and situationalAwarenessParent are hidden
  if (isHidden(adaptabilityParent) && isHidden(situationalAwarenessParent) && isHidden(selfEfficacyParent) && isHidden(confidenceParent) && isHidden(creativityParent) && isHidden(socialParent)) {
    showElement(noResultsAlert);
    console.log("Showing no-results-alert");
  } else {
    hideElement(noResultsAlert);
    console.log("Hiding no-results-alert");
  }
});
