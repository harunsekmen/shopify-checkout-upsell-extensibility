const fs = require('fs');
const assert = require('assert');

const toml = fs.readFileSync(__dirname + '/../shopify.extension.toml', 'utf8');
assert(toml.includes('purchase.checkout.block.render'), 'Target hook must be defined');

const jsx = fs.readFileSync(__dirname + '/../src/Checkout.jsx', 'utf8');
assert(jsx.includes('reactExtension'), 'Must register reactExtension');
assert(jsx.includes('applyCartLinesChange'), 'Must support cart line addition');

const locale = JSON.parse(fs.readFileSync(__dirname + '/../locales/en.default.json', 'utf8'));
assert(locale.upsell.title, 'Locale strings must be defined');

console.log('PASS: shopify-checkout-upsell-extensibility verified.');
