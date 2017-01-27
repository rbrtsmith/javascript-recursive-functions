function reverseString(str) {
  if (typeof str !== 'string') {
    return 'you must pass in a string'
  }

  return str.length
    ? reverseString(str.slice(1)) + str[0]
    : ''
}

export default reverseString
