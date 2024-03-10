/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;
  return {
    reset: function () {
      return (currentValue = init);
    },
    increment: function () {
      return ++currentValue;
    },
    decrement: function () {
      return --currentValue;
    },
  };
};
