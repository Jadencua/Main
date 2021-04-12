/*
 * Copyright (c) AdamRulz Corporation. All rights reserved. 
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office */


var quotes = [' If you don\'t know where you\'re going, any road will get you there. -Lewis Carroll' , ' It\'s not what happens to you, but how you react to it that matters. -Epictetus ',
    ' With pride, there are many curses. With humility, there come many blessings. -Ezra Taft Benson ', ' We cannot become what we need to be by remaining what we are. -Max de Pree ',
    ' Start with what is right rather than what is acceptable. -Franz Kafka ', ' Beware of false knowledge; it is more dangerous than ignorance. -George Bernard Shaw ',
    ' Knowing others is wisdom, knowing yourself is Enlightenment. -Lao Tzu ', ' Wise sayings often fall on barren ground, but a kind word is never thrown away. -Arthur Helps ',
    ' We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. -Carl Sagan ',
    ' The characteristic of scientific progress is our knowing what we did not know. -Gaston Bachelard ', ' Comedy is simply a funny way of being serious. -Peter Ustinov ',
    ' A sense of humor... is needed armor. Joy in one\'s heart and some laughter on one\'s lips is a sign that the person down deep has a pretty good grasp of life. -Hugh Sidey ']


Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {

      document.getElementById("run").onclick = run;
      document.getElementById("testFunction").onclick = testFunction;
      document.getElementById("testFunctionTwo").onclick = testFunctionTwo;
  }
});



export async function run() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}

function testFunction() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var string = "\n"

    //document.getElementById('alternateQuoteDisplay').innerHTML = quotes[randomNumber];
    Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
    Office.body.setSelectedDataAsync()
}

function testFunctionTwo() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    
    document.getElementById('alternateQuoteDisplayTwo').innerHTML = quotes[randomNumber];
    Office.context.mailbox.item.body.setSelectedDataAsync(quotes[randomNumber])
}

function newQuote() {
    
}

module.exports = {
  insertDefaultGist: insertDefaultGist,
  quotes : quotes
}