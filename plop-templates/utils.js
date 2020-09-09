// eslint-disable-next-line arrow-body-style
exports.notEmpty = (name) => {
  return (v) => {
    if ((/^\D+$/).test(v)) { return true; }
    return `${name} 为英文`;
  };
};
