![Love the Pixar Shorts](./image.gif)

[![NPM Version](https://badge.fury.io/js/emoji-shorts.svg)](https://www.npmjs.com/package/emoji-shorts)
[![CI](https://github.com/jdrydn/emoji-shorts/actions/workflows/ci.yml/badge.svg?branch=master&event=push)](https://github.com/jdrydn/emoji-shorts/actions/workflows/ci.yml)
<!-- [![Coverage](https://coveralls.io/repos/github/jdrydn/emoji-shorts/badge.svg)](https://coveralls.io/github/jdrydn/emoji-shorts) -->

Plenty of services love to use the emoji shortcodes in plain-text markup, so this library aims to simplify that process
for you, making 😎 become `:sunglasses:`, 💡 to `:bulb:`, etc. There's
[an amazing list of shortcodes here](http://www.webpagefx.com/tools/emoji-cheat-sheet/) if you want to explore them.

```js
var emoji = require('emoji-shorts');

console.log(emoji.toPlain('These violent delights have violent ends 😈'));
// These violent delights have violent ends :smiling_imp:

console.log(emoji.toRich('The most elegant parts of me weren\'t written by you :thinking:'));
// The most elegant parts of me weren't written by you 🤔
```

This module is built using [`lodash.toarray@4`](https://www.npmjs.com/package/lodash.toarray) and
[`github/gemoji`](https://github.com/github/gemoji) (a big 👏 to both teams for their excellent work on those). The
latter has had some post-processing done to make lookups more efficient.

Check out [`example.js`](./example.js) for more :tada:

----

- Originally [published](https://github.com/car-throttle/emoji-shorts) via [@car-throttle](https://github.com/car-throttle).
- Questions? Awesome! [Open an issue](https://github.com/jdrydn/emoji-shorts/issues/) to get started!
