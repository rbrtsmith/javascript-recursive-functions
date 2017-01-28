function map(arr, fn) {
  if (!Array.isArray(arr)) {
    return 'The first argument must be an array.'
  }

  return arr.length
    ? [fn(arr[0])].concat(map(arr.slice(1), fn))
    : []
}

export default map
