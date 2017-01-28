import fizzBuzz from '../'

test('FizzBuzz', () => {
  const expected =
`0
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
`
  expect(fizzBuzz(15)).toEqual(expected)
  expect(fizzBuzz(20.5)).toEqual('input must be a whole number')
  expect(fizzBuzz('abc')).toEqual('input must be a whole number')
})
