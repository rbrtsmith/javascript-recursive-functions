import quickSort from '../'

test('QuickSort', () => {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const actual = quickSort(input)
  expect(actual).toEqual(expected)
  expect(quickSort('hello')).toEqual('You must pass in an array.')
})
