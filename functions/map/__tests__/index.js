import map from '../'

describe('Map', () => {
  it('Takes an array and a function and returns a new array with items transformed by the function', () => {
    const fn = str => str.toUpperCase()
    const input = ['h', 'e', 'l', 'l', 'o']
    const actual = map(input, fn)
    const expected = ['H', 'E', 'L', 'L', 'O']
    expect(actual).toEqual(expected)
  })
})
