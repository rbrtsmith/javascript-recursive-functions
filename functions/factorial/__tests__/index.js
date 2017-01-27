import factorial from '../'

test('factorial', () => {
  expect(factorial(5)).toEqual(120)
  expect(factorial(8)).toEqual(40320)
  expect(factorial(1)).toEqual(1)
  expect(factorial(0)).toEqual(1)
  expect(factorial(-1)).toEqual('You must enter a positive number')
  expect(factorial('abc')).toEqual('You must enter a positive number')
})
