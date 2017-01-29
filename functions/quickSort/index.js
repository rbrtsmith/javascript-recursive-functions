function quickSort(arr) {
  if (!Array.isArray(arr)) {
    return 'You must pass in an array.'
  }

  if (arr.length < 1) {
    return arr
  }

  const pivot = arr.pop()
  const smaller = []
  const larger = []

  while (arr.length) {
    if (arr[0] < pivot) {
      smaller.push(arr.shift())
    } else {
      larger.push(arr.shift())
    }
  }

  return [
    ...quickSort(smaller),
    pivot,
    ...quickSort(larger),
  ]
}

export default quickSort
