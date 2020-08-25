// eslint-disable-next-line arrow-body-style
exports.notEmpty = (name) => {
  return (v) => {
    if ((/^[a-z]+$/).test(v)) { return true; }
    return `${name} 为英文`;
  };
};
