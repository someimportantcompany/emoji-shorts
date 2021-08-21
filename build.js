const assert = require('assert');
const axios = require('axios');
const fs = require('fs');
const os = require('os');
const path = require('path');

(async () => {
  /* eslint-disable no-console, no-process-exit */
  try {
    const { data } = await axios.get('https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json', {
      headers: {
        'User-Agent': `emoji-shorts ${os.hostname()}`,
      },
      responseType: 'json',
      timeout: 5000,
      validateStatus: status => status === 200,
    });

    assert(Array.isArray(data), 'Expected JSON endpoint to return an array');

    const library = data.reduce((list, emoji) => {
      emoji.aliases.forEach(alias => list.alias_map[alias] = emoji.emoji);
      list.emoji_map[emoji.emoji] = emoji.aliases.shift();
      return list;
    }, {
      alias_map: {},
      emoji_map: {},
      timestamp: (new Date()).toUTCString(),
    });

    fs.writeFileSync(path.join(__dirname, 'library.json'), JSON.stringify(library), 'utf8');

    console.log('Formatted %d emojis into %d aliases and %d emojis', ...[
      data.length, Object.keys(library.alias_map).length, Object.keys(library.emoji_map).length,
    ]);

    console.log('Created library.json');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
