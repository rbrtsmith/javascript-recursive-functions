import fibonacci from '../'

test('Fibonacci', () => {
  expect(fibonacci(10)).toEqual(55)
  expect(fibonacci(0)).toEqual('You must enter a positive number')
  expect(fibonacci(-5)).toEqual('You must enter a positive number')
  expect(fibonacci('abc')).toEqual('You must enter a positive number')
})
