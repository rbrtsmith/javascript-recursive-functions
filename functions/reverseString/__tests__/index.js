import reverseString from '../'

test('ReverseString', () => {
  expect(reverseString('hello')).toEqual('olleh')
  expect(reverseString(123)).toEqual('you must pass in a string')
  expect(reverseString(['hello'])).toEqual('you must pass in a string')
})
