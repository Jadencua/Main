global.Office = () => ({});
global.Office.onReady = () => ({});

var addQuote = import("addQuote");
const taskpane = require("./taskpane");
const quotes = taskpane.quotes;
const starQuotes = taskpane.starQuotes;
document.getElementById('newSig').value = "test";
taskpane.addQuote();
expect(quotes[quotes.length - 1]).toEqual("test");