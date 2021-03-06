import deepFreeze from 'deep-freeze'
import map from '../'

const fn = str => str.toUpperCase()

describe('Map', () => {
  it('takes an array and a function and returns a new array with items transformed by the function', () => {
    const input = deepFreeze(['h', 'e', 'l', 'l', 'o'])
    const actual = map(input, fn)
    const expected = ['H', 'E', 'L', 'L', 'O']
    expect(actual).toEqual(expected)
  })
  it('returns an error message if the first argument is not an array', () => {
    const input = 'hello'
    const actual = map(input, fn)
    const expected = 'The first argument must be an array.'
    expect(actual).toEqual(expected)
  })
})
