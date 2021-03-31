//const insertDefaultGist = require('./insertDefaultGist');
var quotes = import("quotes");

//var quotes = ['The only true knowledge is knowing we know nothing', 'All we are is dust in the wind dude', 'Dust, wind, dude', 'Like sands in an hour glass, so are the days of our lives', 'Adams Rulz']

Test('Test that the number gives the expected quote', () => {
  expect(quotes[1]).toBe('All we are is dust in the wind dude') 
});