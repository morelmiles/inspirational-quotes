const arr = require("./data/data.json");

const quote = {};

randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports.getRandomQuote = function() {
  const index = randomInt(0, 324);
  return arr[index].text;
};

module.exports.getQuote = function(name) {
  const index = randomInt(0, 324);
  quote.text = arr[index].text;
  quote.author = arr[index].from;
  return quote;
};
