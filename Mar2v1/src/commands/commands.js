var config;
var btnEvent;

Office.initialize = function (reason) {
    // The initialize function must be run each time a new page is loaded.
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

var quotes = [' If you don\'t know where you\'re going, any road will get you there. -Lewis Carroll' , ' It\'s not what happens to you, but how you react to it that matters. -Epictetus ',
    ' With pride, there are many curses. With humility, there come many blessings. -Ezra Taft Benson ', ' We cannot become what we need to be by remaining what we are. -Max de Pree ',
    ' Start with what is right rather than what is acceptable. -Franz Kafka ', ' Beware of false knowledge; it is more dangerous than ignorance. -George Bernard Shaw ',
    ' Knowing others is wisdom, knowing yourself is Enlightenment. -Lao Tzu ', ' Wise sayings often fall on barren ground, but a kind word is never thrown away. -Arthur Helps ',
    ' We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. -Carl Sagan ',
    ' The characteristic of scientific progress is our knowing what we did not know. -Gaston Bachelard ', ' Comedy is simply a funny way of being serious. -Peter Ustinov ',
    ' A sense of humor... is needed armor. Joy in one\'s heart and some laughter on one\'s lips is a sign that the person down deep has a pretty good grasp of life. -Hugh Sidey ']

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
