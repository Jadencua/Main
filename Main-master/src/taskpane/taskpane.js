/*

 */

// Images references are in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";



Office.onReady(info => {
  
  if (info.host === Office.HostType.Outlook) {

    document.getElementById("applyRandom").onclick = randomSig;
    document.getElementById("applySelected").onclick = applySig;
    document.getElementById("addSig").onclick = addQuote;
      document.getElementById("loadQuotes").onclick = getQuotes;
      document.getElementById("loadStarQuotes").onclick = getStarQuotes;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */
}

var quotes = [' If you don\'t know where you\'re going, any road will get you there. -Lewis Carroll', ' It\'s not what happens to you, but how you react to it that matters. -Epictetus ',
    ' With pride, there are many curses. With humility, there come many blessings. -Ezra Taft Benson ', ' We cannot become what we need to be by remaining what we are. -Max de Pree ',
    ' Start with what is right rather than what is acceptable. -Franz Kafka ', ' Beware of false knowledge; it is more dangerous than ignorance. -George Bernard Shaw ',
    ' Knowing others is wisdom, knowing yourself is Enlightenment. -Lao Tzu ', ' Wise sayings often fall on barren ground, but a kind word is never thrown away. -Arthur Helps ',
    ' We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. -Carl Sagan ',
    ' The characteristic of scientific progress is our knowing what we did not know. -Gaston Bachelard ', ' Comedy is simply a funny way of being serious. -Peter Ustinov ',
    ' A sense of humor... is needed armor. Joy in one\'s heart and some laughter on one\'s lips is a sign that the person down deep has a pretty good grasp of life. -Hugh Sidey ']

var starQuotes = [' No, I am your father - Darth Vader',
    ' I got a bad feeling about this - Han Solo',
    'General Kenobi - General Grievous',
    ' I find your lack of faith disturbing - Darth Vader',
    ' Do or do not there is no try - Yoda',
    ' Hello there - Obi wan Kenobi',
    ' This is where the fun begins - Anakin',
    ' When gone am I the last jedi you will be - Yoda',
    ' 100,000 troops are ready with a million more well on the way - IDK',
    ' I have the high ground - Obi wan',
    ' I don\'t like sand. It\'s rough, course, irritating, and it gets everywhere - Anakin',
    ' Use the force, Luke - Obi Wan', ' Your focus determines your reality. -Qui Gin',
    ' Perhaps the archives are incomplete - Obi Wan',
    ' I Suggest A New Strategy, R2 - Let The Wookiee Win  - C3PO',
    ' Good luck -Ahsoka Tano',
    ' You where right about one thing master. The negotiations where short. - Obi wan',
    ' I am the Senate - Sheev Palpatine',
    ' What about the droid attack on the wookies? - Ki - Adi Mundi',
    ' Kenobiiiiiiiiiiah!!! - Darthmaul']
var option = '';

function randomSig() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));

  Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}

function applySig() {
  var selectedSignature = document.getElementById('signature').value;
  Office.context.mailbox.item.body.setSelectedDataAsync(selectedSignature);
  document.getElementById('signature').value = '';

}

function addQuote() {
  var boxValue = document.getElementById('newSig').value;
  quotes.push(boxValue);
  getQuotes();
  document.getElementById('newSig').value = '';

}

function getQuotes() {
    option = '';
    for (let i = 0; i < quotes.length; i++) {
        option += '<option value="' + quotes[i] + '">'
        console.log(quotes[i]);
    }
    document.getElementById("signatures").innerHTML = option;

}

function getStarQuotes() {
    option = '';
    for (let i = 0; i < starQuotes.length; i++) {
        option += '<option value="' + starQuotes[i] + '">'
        console.log(starQuotes[i]);
    }
    document.getElementById("signatures").innerHTML = option;

}