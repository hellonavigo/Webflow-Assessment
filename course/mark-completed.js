
//SCRIPT ONE STARTS HERE

  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.a-button-primary');

    const config = { attributes: true, attributeFilter: ['class'] };

    const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          let button = mutation.target;

          if (button.classList.contains('yes')) {
            button.textContent = "Mark as incomplete";
            button.style.backgroundColor = "black";

            // Show the 'showNextCourse' div
            document.getElementById("showNextCourse").style.display = "block";
          } else {
            button.textContent = "Complete lesson";
            button.style.backgroundColor = "";

            // Hide the 'showNextCourse' div
            document.getElementById("showNextCourse").style.display = "none";
          }
        }
      }
    };

    buttons.forEach(button => {
      const observer = new MutationObserver(callback);
      observer.observe(button, config);
    });
  


//SCRIPT TWO STARTS HERE



  // Get the Memberstack DOM object
  const memberstack = window.$memberstackDom;

  // Function to mark a module as complete in the member's JSON data
  async function markModuleComplete(moduleKey) {
    // Retrieve the member's JSON data
    const member = await memberstack.getMemberJSON();

    // Split the moduleKey into JSON group and module number
    const [jsonGroup, moduleNumber] = moduleKey.split('-');

    // Initialize JSON data if it does not exist
    if (!member.data) {
      member.data = {};
    }
    if (!member.data[jsonGroup]) {
      member.data[jsonGroup] = {};
    }

    // Mark the module as complete in the member's JSON data
    member.data[jsonGroup][moduleNumber] = true;

    // Update the member's JSON data in Memberstack
    await memberstack.updateMemberJSON({
      json: member.data
    });

    // Log the completion of the module
    console.log(`Module ${moduleKey} marked as completed`);

    // Find all elements associated with this moduleKey and add the "yes" class
    const moduleElements = document.querySelectorAll(`[ms-code-mark-complete="${moduleKey}"]`);
    if (moduleElements) {
      moduleElements.forEach(moduleElement => {
        moduleElement.classList.add("yes");
      });
    }
  }

  // Function to mark a module as incomplete in the member's JSON data
  async function markModuleIncomplete(moduleKey) {
    // Retrieve the member's JSON data
    const member = await memberstack.getMemberJSON();

    // Split the moduleKey into JSON group and module number
    const [jsonGroup, moduleNumber] = moduleKey.split('-');

    // Check if the module is marked as complete in the JSON data
    if (member.data && member.data[jsonGroup] && member.data[jsonGroup][moduleNumber]) {
      // Mark the module as incomplete by deleting the entry in the JSON data
      delete member.data[jsonGroup][moduleNumber];

      // Update the member's JSON data in Memberstack
      await memberstack.updateMemberJSON({
        json: member.data
      });

      // Log the module marked as incomplete
      console.log(`Module ${moduleKey} marked as incomplete`);
    }

    // Find all elements associated with this moduleKey and remove the "yes" class
    const moduleElements = document.querySelectorAll(`[ms-code-mark-complete="${moduleKey}"]`);
    if (moduleElements) {
      moduleElements.forEach(moduleElement => {
        moduleElement.classList.remove("yes");
      });
    }
  }

  // Function to update the page based on the member's JSON data for a specific JSON group
  async function updatePageFromMemberJSON(jsonGroup) {
    // Retrieve the member's JSON data
    const member = await memberstack.getMemberJSON();

    // Check if the JSON group exists and contains module numbers
    if (member.data && member.data[jsonGroup]) {
      // Loop through each module number in the JSON group
      Object.keys(member.data[jsonGroup]).forEach(moduleNumber => {
        // Create the moduleKey using the JSON group and module number
        const moduleKey = `${jsonGroup}-${moduleNumber}`;

        // Find all elements associated with this moduleKey and add the "yes" class
        const moduleElements = document.querySelectorAll(`[ms-code-mark-complete="${moduleKey}"]`);
        if (moduleElements) {
          moduleElements.forEach(moduleElement => {
            moduleElement.classList.add("yes");
          });
        }
      });
    }
  }

  // Event listener for click events within the document
  document.addEventListener("click", async function(event) {
    const target = event.target;
    const completeElement = target.closest('[ms-code-mark-complete]');
    if (completeElement) {
      event.preventDefault();

      // Get the moduleKey associated with the clicked element
      const moduleKey = completeElement.getAttribute('ms-code-mark-complete');

      // Check if the module is marked as complete or not and perform the appropriate action
      if (completeElement.classList.contains('yes')) {
        await markModuleIncomplete(moduleKey);
      } else {
        completeElement.classList.add('yes');
        await markModuleComplete(moduleKey);
      }

      // If the clicked element is an anchor (a) tag and has a valid href, navigate to that link
      if (completeElement.tagName.toLowerCase() === 'a' && completeElement.href) {
       console.log('success on updating');
      }
    }
  });

  // Find all elements with the "ms-code-mark-complete" attribute and update the page based on the member's JSON data
  const checklistGroups = document.querySelectorAll('[ms-code-mark-complete]');
  if (checklistGroups) {
    checklistGroups.forEach(groupElement => {
      const moduleKey = groupElement.getAttribute('ms-code-mark-complete');
      const [jsonGroup] = moduleKey.split('-');
      updatePageFromMemberJSON(jsonGroup);
    });
  }
});