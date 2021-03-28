const insertDefaultGist = require('./insertDefaultGist');

Test('Test that the random number gives a value within the expected range', () => {
  expect(insertDefaultGist.Office.context.mailbox.item.body.setSelectedDataAsync(quotes[1]).toBe('All we are is dust in the wind dude'))  
});