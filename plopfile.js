// plopfile.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pageGenerator = require('./plop-templates/views/prompt');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const storeGenerator = require('./plop-templates/store/prompt');

// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('store', storeGenerator);
};
