/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var config = require('../../index');

var structure = [
  'version',
  'parserOptions',
  'env',
  'globals',
  'plugins',
  'extends',
  'rules'
];

test('Testing Shareable Config  object:', (assert) => {
  assert.ok(bella.isObject(config), 'Shareable Config must be an object.');
  structure.every((k) => {
    assert.ok(bella.hasProperty(config, k), `Shareable Config must have the property "${k}"`);
    return k;
  });

  assert.equals(config.extends, 'eslint:all', `config.extends must be property "eslint:all"`);
  assert.end();
});
