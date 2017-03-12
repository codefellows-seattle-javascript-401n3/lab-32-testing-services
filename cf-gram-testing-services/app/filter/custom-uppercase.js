'use strict';

module.exports = function() {
  return function(string) {
    return string.toUppercase();
  };
};

//fuzzy search notes
function genReg(str) {
  let pattern = '.*' + str.split('').join('.*') + '.*';
  return new RegExp(pattern);
}
