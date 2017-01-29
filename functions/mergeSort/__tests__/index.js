import deepFreeze from 'deep-freeze'
import mergeSort from '../'

test('Merge Sort', () => {
  const input = [10, 5, 4, 8, 1, 9, 2, 7, 3, 6]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const actual = mergeSort(deepFreeze(input))
  expect(actual).toEqual(expected)
  expect(mergeSort('hello')).toEqual('You must pass in an array.')
})
