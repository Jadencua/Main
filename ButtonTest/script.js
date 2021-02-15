var quotes =['The only true knowledge is knowing we know nothing','All we are is dust in the wind dude', 'Dust, wind, dude','Like sands in an hour glass, so are the days of our lives','Adams Rulz']

function newQuote(){
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function guardarNumeros(){
 var boxvalue = document.getElementById('box').value;
 quotes.push(boxvalue);  
 console.log(quotes);
 return false;
}