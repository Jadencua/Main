/*

 */

// Images references are in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("run").onclick = run;
    document.getElementById("applyRandom").onclick = random;
    document.getElementById("applySelected").onclick = apply;
    document.getElementById("quote").onclick = addQuote;
    document.getElementById("randomQuote").onclick = random;
  }
});

export async function run() {
  /**
   * Insert your Outlook code here
   */
}

var quotes = [' If you don\'t know where you\'re going, any road will get you there. -Lewis Carroll' , ' It\'s not what happens to you, but how you react to it that matters. -Epictetus ']

function random() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}

function newQuote() {
  var boxValue = document.getElementById('quoteEntry').value;
  quotes.push(boxValue);
  console.log(quotes);
  return false;
}

function apply() {
  var selectedSignature = document.querySelector('signature').value;
  Office.context.mailbox.item.body.setSelectedDataAsync(selectedSignature)
}

function addQuote() {
  var boxValue = document.getElementById('quote').value;
  quotes.push(boxValue);
  console.log(quotes);
  return false;
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