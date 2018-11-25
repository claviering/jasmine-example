beforeEach(function () {
  jasmine.addMatchers({
    toBeCalc: function () {
      return {
        compare: function (actual, expected) {
          let result = {}
          result.pass = actual === expected
          if (result.pass) {
            result.message = `pass`
          } else {
            result.message = `actual is ${actual} but expected is ${expected}`
          }
          return result
        }
      };
    }
  });
});
