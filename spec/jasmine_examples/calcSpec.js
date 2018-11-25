const path = require('path')
const Calc = require(path.resolve('./src/calc.js'))
const random = require('random')

describe('calc', () => {
  it('should be able to calc', () => {
    for (let i = 0; i < 10; i++) {
      let a = random.int(0, 100)
      let b = random.int(0, 100)
      let result = Calc(a, b)
      console.log('a b result', a, b, result);
      expect(result).toBeCalc(a+b)
    }
  })
})