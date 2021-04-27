/*

 */

// Images references are in the manifest
import { get } from "local-storage";
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";



Office.onReady(info => {
  
  if (info.host === Office.HostType.Outlook) {

    document.getElementById("applyRandom").onclick = randomSig;
    document.getElementById("applySelected").onclick = applySig;
    document.getElementById("addSig").onclick = addQuote;
    document.getElementById("loadQuotes").onclick = getQuotes;
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
var option = '';

function randomSig() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));

  Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}

function applySig() {
  var selectedSignature = document.getElementById('signature').value;
    Office.context.mailbox.item.body.setSelectedDataAsync(selectedSignature);
}

function addQuote() {
  var boxValue = document.getElementById('newSig').value;
  quotes.push(boxValue);
  //var newSigList = document.getElementById('dropDownList');
  //var option = document.createElement('OPTION');
  //option.innerHTML = document.getElementById('newSig').value;
  //option.value = document.getElementById('newSig').value;
  //newSigList.add(option);
  document.getElementById('newSig').value = '';
}

function getQuotes() {
    for (let i = 0; i < quotes.length; i++) {
        option += '<option value="' + quotes[i] + '">'
        console.log(quotes[i]);
    }
    document.getElementById("signatures").innerHTML = option;

}

/*Prior:
 
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    //input.value = ''
})

data.forEach((item) => {
    liMaker(item)
})

button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

  */