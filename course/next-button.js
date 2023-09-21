document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".a-button-primary");

  const config = { attributes: true, attributeFilter: ["class"] };

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        let button = mutation.target;

        if (button.classList.contains("yes")) {
          button.textContent = "Mark as incomplete";
          button.style.backgroundColor = "black";

          // Show the 'showNextCourse' div
          document.getElementById("showNextCourse").style.display = "block";
        } else {
          button.textContent = "Complete lesson";
          button.style.backgroundColor = "";

          // Hide the 'showNextCourse' div
          document.getElementById("showNextCourse").style.display = "none";

          // Restore the saved scroll position
          window.scrollTo(0, currentScroll);
        }
      }
    }
  };

  buttons.forEach((button) => {
    const observer = new MutationObserver(callback);
    observer.observe(button, config);
  });
});
