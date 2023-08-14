
<script>
   window.onload = function() {
  // Helper function to enable/disable next button for each step
  
  function enableNextButtonForStep(stepDiv) {
    const buttonNext = stepDiv.querySelector('.button_next');
    const requiredFields = [...stepDiv.querySelectorAll('input[required]')];
    const tooltipButtonAlert = stepDiv.querySelector('.tooltipButtonAlert');

    function enableNextButton() {
      console.log(`Inside enableNextButton for ${stepDiv.classList}:`);
      const allFilled = requiredFields.every(field => {
        if (field.type === 'radio' && field.name !== 'Test-Button') {
          const radioGroupName = field.name;
          return stepDiv.querySelector(`input[name="${radioGroupName}"]:checked`);
        } else {
          return field.value.trim() !== '';
        }
      });

      if (allFilled) {
        buttonNext.classList.remove('submit-enabled');
        tooltipButtonAlert.style.display = 'none';
      } else {
        buttonNext.classList.add('submit-enabled');
        if (buttonNext.dataset.clicked === "true") {
          tooltipButtonAlert.style.display = 'block';
          console.log('Tooltip should be shown.');
        } else {
          tooltipButtonAlert.style.display = 'none';
          console.log('Tooltip should be hidden.');
        }
      }

      console.log(`enableNextButton for ${stepDiv.classList} - allFilled:`, allFilled);
    }

    requiredFields.forEach(field => {
      field.addEventListener('input', enableNextButton);
    });

    buttonNext.addEventListener('click', function(event) {
      if (buttonNext.classList.contains('submit-enabled')) {
        event.preventDefault();
        buttonNext.dataset.clicked = "true";
        tooltipButtonAlert.style.display = 'block';
        console.log('Button Next is clicked. Tooltip is shown.');
      }
    });

    // Initial check
    enableNextButton();
  }

  // Get all steps and initialize enableNextButton for each step
  const steps = document.querySelectorAll('.step_1, .step_2, .step_3, .step_4');
  steps.forEach(stepDiv => enableNextButtonForStep(stepDiv));
};

  </script>

<script>
  $(document).ready(function () {
    const steps = [".step_1", ".step_2", ".step_3", ".step_4"];
    const nextButtons = [".step_1 .button_next", ".step_2 .button_next", ".step_3 .button_next"];
    const prevButtons = [".step_2 .button_previous", ".step_3 .button_previous", ".step_4 .button_previous"];
    let currentStep = 0;

    function showStep() {
      steps.forEach((step, index) => {
        if (index === currentStep) {
          $(step).show();
        } else {
          $(step).hide();
        }
      });
    }

    function validateStep(step) {
      let isValid = true;
      $(step)
        .find("input[required]")
        .each(function () {
          const input = $(this);
          if (input.is(":radio")) {
            const radioGroupName = input.attr("name");
            if ($(`input[name="${radioGroupName}"]:checked`).length === 0) {
              isValid = false;
              const tooltip = $(`input[name="${radioGroupName}"]`).parent().next(".tooltip");
              if (tooltip.length === 0) {
                input.parent().after('<div class="tooltip">Please select an option</div>');
              } else {
                tooltip.show();
              }
            } else {
              const tooltip = input.parent().next(".tooltip");
              if (tooltip.length !== 0) {
                tooltip.hide();
              }
            }
          } else {
            if (input.val().trim() === "") {
              isValid = false;
              input.css("border", "1px solid red");
              const tooltip = input.next(".tooltip");
              if (tooltip.length === 0) {
                input.after('<div class="tooltip">This field is required</div>');
              } else {
                tooltip.show();
              }
            } else {
              input.css("border", "1px solid #f1f1f1");
              input.next(".tooltip").hide();
            }
          }
        });
      return isValid;
    }

    function init() {
      showStep();
      nextButtons.forEach((button, index) => {
        $(button).click(() => {
          if (validateStep(steps[index])) {
            currentStep++;
            showStep();
            scrollToTop();
          } else {
            console.log("Validation failed. Cannot proceed.");
          }
        });
      });

      prevButtons.forEach((button, index) => {
        $(button).click(() => {
          currentStep--;
          showStep();
          scrollToTop();
        });
      });

      $("input").focus(function () {
        $(this).css("border", "1px solid #f1f1f1");
        $(this).next(".tooltip").hide();
      });
    }

    function scrollToTop() {
      console.log("Scrolling to the top of the page...");
      $("html, body").animate({ scrollTop: 0 }, "slow", function() {
        console.log("Scrolling complete.");
      });
    }

    init();
  });
</script>



