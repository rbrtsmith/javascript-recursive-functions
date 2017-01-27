function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return 'You must pass in an array'
  }
  return arr.length
    ? reverseArray(arr.slice(1)).concat(arr[0])
    : []
}

export default reverseArray
