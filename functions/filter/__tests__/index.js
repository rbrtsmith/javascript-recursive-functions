import deepFreeze from 'deep-freeze'
import filter from '../'

const predicate = n => n > 5

describe('Filter', () => {
  it('takes an array and a predicate function returning a new array filtered by the predicate', () => {
    const input = deepFreeze([1, 6, 10, 4, 5, 60])
    const actual = filter(input, predicate)
    const expected = [6, 10, 60]
    expect(actual).toEqual(expected)
  })

  it('returns an error message if the first argument is not an array', () => {
    const input = 'hello'
    const actual = filter(input, predicate)
    const expected = 'The first argument must be an array.'
    expect(actual).toEqual(expected)
  })
})
