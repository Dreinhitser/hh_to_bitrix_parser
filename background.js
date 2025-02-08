const { create_contact } = require("./create_contact.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if (request.action == "create_contact") {
    create_contact(request.data).then((response) => {
    sendResponse(response);
    }).catch((error) => {
    console.error(error);
    });
} else {
    console.warn("Unknown action.");
}
});