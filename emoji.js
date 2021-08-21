const library = require('./library.json');
const toArray = require('lodash.toarray');

function emojiToPlain(string) {
  return toArray((string || '').trim())
    .map(value => library.emoji.hasOwnProperty(value) ? `:${library.emoji[value]}:` : value)
    .join('');
}

function emojiToRich(string) {
  return (string || '').trim().replace(/\n/g, ' \n').split(' ')
    .map(value => {
      if (value && value.length > 2 && value[0] === ':' && value[value.length - 1] === ':') {
        return value.split(':')
          .filter(val => Boolean(val))
          .map(val => library.alias.hasOwnProperty(val) ? library.alias[val] : `:${val}:`)
          .join('');
      } else {
        return value;
      }
    })
    .join(' ').replace(/ \n/g, '\n');
}

module.exports = {
  emojiToPlain,
  toPlain: emojiToPlain,
  emojiToRich,
  toRich: emojiToRich,
};
