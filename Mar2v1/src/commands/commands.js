var config;
var btnEvent;

// The initialize function must be run each time a new page is loaded.
Office.initialize = function (reason) {
};

// Add any UI-less function here.
function showError(error) {
    Office.context.mailbox.item.notificationMessages.replaceAsync('github-error', {
        type: 'errorMessage',
        message: error
    }, function (result) {
    });
}

var settingsDialog;

var quotes = ['The only true knowledge is knowing we know nothing', 'All we are is dust in the wind dude', 'Dust, wind, dude', 'Like sands in an hour glass, so are the days of our lives', 'Adams Rulz']



function insertDefaultGist(event) {

    var randomNumber = Math.floor(Math.random() * (quotes.length));

    // Check if the add-in has been configured.
    Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber],
        { coercionType: Office.CoercionType.Html }, function (result) {
            event.completed();
        });


    }




function dialogClosed(message) {
    settingsDialog = null;
    btnEvent.completed();
    btnEvent = null;
}

function getGlobal() {
    return (typeof self !== "undefined") ? self :
        (typeof window !== "undefined") ? window :
            (typeof global !== "undefined") ? global :
                undefined;
}

var g = getGlobal();

// The add-in command functions need to be available in global scope.
g.insertDefaultGist = insertDefaultGist;
module.exports = {
    insertDefaultGist: insertDefaultGist,
    quotes : quotes
}