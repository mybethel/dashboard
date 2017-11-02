const flatten = require('flat');

let variables = {
  font: {
    color: {
      dark: '#6B7A82',
      dim: '#95AAB5',
    },
  },
  brand: {
    dark: '#106982',
    normal: '#1591B5',
  },
};

module.exports = flatten(variables, { delimiter: '-', safe: true });
