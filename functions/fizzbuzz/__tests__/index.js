import fizzBuzz from '../'

test('FizzBuzz', () => {
  const expected =
`0
1
2
3 - fizz
4
5 - buzz
6 - fizz
7
8
9 - fizz
10 - buzz
11
12 - fizz
13
14
15 - fizzbuzz
`
  expect(fizzBuzz(15)).toEqual(expected)
  expect(fizzBuzz(20.5)).toEqual('input must be a whole number')
  expect(fizzBuzz('abc')).toEqual('input must be a whole number')
})
