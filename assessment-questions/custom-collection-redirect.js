
function configureButton(buttonId, urlSuffix) {
  const memberData = JSON.parse(localStorage.getItem('_ms-mem') || '{}');
  console.log("Member data:", memberData);

  if (memberData && memberData.id) {
    console.log("User is logged in");

    const customFields = memberData.customFields;
    console.log("Custom fields:", customFields);

    if (customFields && customFields.hasOwnProperty('sa-results-1a-unique-link')) {
      console.log("Custom field 'sa-results-1a-unique-link' exists");

      let url = customFields['sa-results-1a-unique-link'];
      console.log("URL:", url);

      url += urlSuffix;
      console.log("Modified URL:", url);

      const button = document.getElementById(buttonId);
      
      if (button) {
        button.addEventListener('click', () => {
          window.location.href = url;
        });
      } else {
        console.warn(`Button with ID ${buttonId} not found.`);
      }
    }
  }
}

configureButton('button', '#next-assessment');
configureButton('link', '#content1');

