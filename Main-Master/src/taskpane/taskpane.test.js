var quotes = [
    " If you don't know where you're going, any road will get you there. -Lewis Carroll",
    " It's not what happens to you, but how you react to it that matters. -Epictetus ",
    " With pride, there are many curses. With humility, there come many blessings. -Ezra Taft Benson ",
    " We cannot become what we need to be by remaining what we are. -Max de Pree ",
    " Start with what is right rather than what is acceptable. -Franz Kafka ",
    " Beware of false knowledge; it is more dangerous than ignorance. -George Bernard Shaw ",
    " Knowing others is wisdom, knowing yourself is Enlightenment. -Lao Tzu ",
    " Wise sayings often fall on barren ground, but a kind word is never thrown away. -Arthur Helps ",
    " We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. -Carl Sagan ",
    " The characteristic of scientific progress is our knowing what we did not know. -Gaston Bachelard ",
    " Comedy is simply a funny way of being serious. -Peter Ustinov ",
    " A sense of humor... is needed armor. Joy in one's heart and some laughter on one's lips is a sign that the person down deep has a pretty good grasp of life. -Hugh Sidey ",
  ];

test('Add a signature to the signature list' , () => {
    const add = "test";
    quotes.push(add);
    expect(quotes[quotes.length - 1]).toEqual("test");
})

test('Test random number is giving valid values' , () => {
    const randomNum = Math.floor(Math.random() * (quotes.length));
    expect(randomNum).not.toEqual(null);
    expect(randomNum).toBeLessThanOrEqual(quotes.length);
})

test('Get a specific signature from the signature list' , () => {
    const add = "test";
    quotes.push(add);
    expect(quotes[quotes.length - 1]).toEqual("test");
})
