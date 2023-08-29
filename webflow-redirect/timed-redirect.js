
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    // Parse member data from local storage
    const memberData = JSON.parse(localStorage.getItem('_ms-mem') || '{}');
    console.log("Member data:", memberData);

    // Check if the user is logged in
    if (memberData && memberData.id) {
      console.log("User is logged in");

      // Get custom fields
      const customFields = memberData.customFields;
      console.log("Custom fields:", customFields);

      // Check if the custom field 'tf-poc-1as-url' exists
      if (customFields.hasOwnProperty('tf-poc-1as-url')) {
        console.log("Custom field 'tf-poc-1as-url' exists");

        // Get the URL from the custom field
        let url = customFields['tf-poc-1as-url'];
        console.log("URL:", url);

        // Retry mechanism if URL is empty
        const retryInterval = 10000; // 10 seconds in milliseconds
        if (url.trim() === '') {
          console.log("URL is empty, retrying in 10 seconds...");

          // Retry after 10 seconds
          setTimeout(() => {
            // Get the updated URL
            url = customFields['tf-poc-1as-url'];

            // If the URL is still empty, redirect to /
            if (url.trim() === '') {
              console.log("URL is still empty, redirecting to /");
              window.location.href = '/';
            } else {
              // Retry succeeded, proceed with redirection
              redirectToUrl(url);
            }
          }, retryInterval);
        } else {
          // URL is not empty, proceed with redirection
          redirectToUrl(url);
        }
      } else {
        console.log("Custom field 'tf-poc-1as-url' does not exist, redirecting to /");
        window.location.href = '/';
      }
    } else {
      console.log("User is not logged in, redirecting to /");
      window.location.href = '/';
    }
  });

  function redirectToUrl(url) {
    // Check if the link has a protocol, if not, add https://
    let link = url;
    if (!/^https?:\/\//i.test(link)) {
      link = 'https://' + link;
    }

    console.log("Final link:", link);

    // Wait for 20 seconds and then redirect to the URL
    setTimeout(() => {
      console.log("Redirecting to:", link);
      window.location.href = link;
    }, 20000); // 20 seconds in milliseconds
  }
