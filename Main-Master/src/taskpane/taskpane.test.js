global.Office = () => ({});
global.Office.onReady = () => ({});

var addQuote = import("addQuote");
const taskpane = require("./taskpane");
const quotes = taskpane.quotes;
const starQuotes = taskpane.starQuotes;

test('Add a signature to the signature list' , () => {
    document.getElementById('newSig').value = "test";
    taskpane.addQuote();
    expect(quotes[quotes.length - 1]).toEqual("test");
})

test('Test random number is giving valid values' , () => {
    const randomNum = Math.floor(Math.random() * (quotes.length));
    expect(randomNum).not.toEqual(null);
    expect(randomNum).toBeLessThanOrEqual(quotes.length);
})