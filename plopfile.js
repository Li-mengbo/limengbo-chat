// plopfile.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pageGenerator = require('./plop-templates/page/prompt');

// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator('page', pageGenerator);
};
