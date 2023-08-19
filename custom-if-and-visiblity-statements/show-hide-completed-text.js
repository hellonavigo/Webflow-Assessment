// Get references to the elements
const situationalAvgElement = document.getElementById('situational-avg');
const adaptabilityAvgElement = document.getElementById('adaptability-avg');
const efficacyAvgElement = document.getElementById('efficacy-avg');
const noResultsAlertElement = document.getElementById('no-results-alert');

// Check the values and update visibility
function updateVisibility() {
  const situationalAvgValue = parseFloat(situationalAvgElement.value);
  const adaptabilityAvgValue = parseFloat(adaptabilityAvgElement.value);
  const efficacyAvgValue = parseFloat(efficacyAvgElement.value);

  console.log("Situational Avg:", situationalAvgValue);
  console.log("Adaptability Avg:", adaptabilityAvgValue);
  console.log("Efficacy Avg:", efficacyAvgValue);

  if (
    isNaN(situationalAvgValue) || situationalAvgValue === 0.0 || situationalAvgElement.value === '' ||
    isNaN(adaptabilityAvgValue) || adaptabilityAvgValue === 0.0 || adaptabilityAvgElement.value === '' ||
    isNaN(efficacyAvgValue) || efficacyAvgValue === 0.0 || efficacyAvgElement.value === ''
  ) {
    console.log("Showing no-results-alert");
    noResultsAlertElement.style.display = 'block';
  } else {
    console.log("Hiding no-results-alert");
    noResultsAlertElement.style.display = 'none';
  }
}

// Attach the updateVisibility function to the input events of the elements
situationalAvgElement.addEventListener('input', updateVisibility);
adaptabilityAvgElement.addEventListener('input', updateVisibility);
efficacyAvgElement.addEventListener('input', updateVisibility);

// Initial visibility check
updateVisibility();
