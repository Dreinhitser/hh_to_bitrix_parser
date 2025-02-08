document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
      chrome.runtime.sendMessage({ action: "create_contact" }, function(response) {
        console.log(response);
      });
    });
  });
  