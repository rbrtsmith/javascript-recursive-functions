import reverseArray from '../'

test('reverseArray', () => {
  expect(reverseArray(['a','b','c','d'])).toEqual(['d', 'c', 'b', 'a'])
  expect(reverseArray('hello')).toEqual('You must pass in an array')
})
