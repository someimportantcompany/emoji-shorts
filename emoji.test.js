var assert = require('assert');

describe('emoji-shorts', () => {
  const emoji = require('emoji-shorts');

  describe('emojiToPlain', () => {
    before(() => {
      assert(typeof emoji.emojiToPlain === 'function', 'Expected emoji.emojiToPlain to be a function');
      assert(typeof emoji.toPlain === 'function', 'Expected emoji.toPlain to be a function');
    });

    it('should pass through falsey strings correctly', () => {
      var res = emoji.toPlain(null);
      assert.strictEqual(res, '');
    });

    it('should pass through strings correctly', () => {
      var res = emoji.toPlain('We come on the Sloop John B');
      assert.equal(res, 'We come on the Sloop John B');
    });

    it('should simplify strings correctly', () => {
      var res = emoji.toPlain('We come on the Sloop John B 🚢');
      assert.equal(res, 'We come on the Sloop John B :ship:');
    });

    it('should ignore pre-simplified strings correctly', () => {
      var res = emoji.toPlain('We come on the Sloop John B :ship:');
      assert.equal(res, 'We come on the Sloop John B :ship:');
    });
  });

  describe('emojiToRich', () => {
    before(() => {
      assert(typeof emoji.emojiToRich === 'function', 'Expected emoji.emojiToRich to be a function');
      assert(typeof emoji.toRich === 'function', 'Expected emoji.toRich to be a function');
    });

    it('should pass through falsey strings correctly', () => {
      var res = emoji.toRich(null);
      assert.strictEqual(res, '');
    });

    it('should pass through strings correctly', () => {
      var res = emoji.toRich('We come on the Sloop John B');
      assert.equal(res, 'We come on the Sloop John B');
    });

    it('should simplify strings correctly', () => {
      var res = emoji.toRich('We come on the Sloop John B :ship:');
      assert.equal(res, 'We come on the Sloop John B 🚢');
    });

    it('should ignore pre-rendered strings correctly', () => {
      var res = emoji.toRich('We come on the Sloop John B 🚢');
      assert.equal(res, 'We come on the Sloop John B 🚢');
    });

    it('should ignore invalid short-codes correctly', () => {
      var res = emoji.toRich('We come on the Sloop John B :beach-boys:');
      assert.equal(res, 'We come on the Sloop John B :beach-boys:');
    });
  });
});
