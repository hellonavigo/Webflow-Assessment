<script>
function handleElementDisplay(buttonElement, completedElement, avgTextElement) {
    var isAvgZeroOrEmpty = avgTextElement.textContent === "0.0" || avgTextElement.textContent === "";

    // Set the display style of the button and completed elements based on the average value.
    buttonElement.style.display = isAvgZeroOrEmpty ? "flex" : "none";
    completedElement.style.display = isAvgZeroOrEmpty ? "none" : "flex";
}

// This event listener waits for the DOM content to be loaded before executing the code.
document.addEventListener("DOMContentLoaded", function() {
    // Get references to elements related to "Mental Acuity" section.
    var mentalAcuityButton = document.getElementById("mental-acuity-button");
    var mentalAcuityCompleted = document.getElementById("mental-acuity-completed");
    var situationalAvgText = document.getElementById("situational-avg");

    // Get references to elements related to "Grit" section.
    var gritButton = document.getElementById("grit-button");
    var gritCompleted = document.getElementById("grit-completed");
    var adaptabilityAvgText = document.getElementById("adaptability-avg");
    
    // Get references to elements related to "Drive" section.
    var driveButton = document.getElementById("drive-button");
    var driveCompleted = document.getElementById("drive-completed");
    var selfEfficacyAvgText = document.getElementById("efficacy-avg");

    // Call the handleElementDisplay function for each section to update element visibility.
    handleElementDisplay(mentalAcuityButton, mentalAcuityCompleted, situationalAvgText);
    handleElementDisplay(gritButton, gritCompleted, adaptabilityAvgText);
    handleElementDisplay(driveButton, driveCompleted, selfEfficacyAvgText);
});
</script>
