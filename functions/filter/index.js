function filter(arr, fn) {
  if (!Array.isArray(arr)) {
    return 'The first argument must be an array.'
  }

  if (!arr.length) {
    return []
  }

  return fn(arr.slice(0, 1))
    ? [arr[0]].concat(filter(arr.slice(1), fn))
    : filter(arr.slice(1), fn)
}

export default filter
