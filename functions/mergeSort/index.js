function merge(left, right, result) {
  if (left.length && right.length) {
    return left[0] <= right[0]
      ? merge(
          left.slice(1),
          right,
          result.concat(left.slice(0, 1)),
        )
      : merge(
          left,
          right.slice(1),
          result.concat(right.slice(0, 1)),
        )
  }

  return result.concat(left, right)
}

function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    return 'You must pass in an array.'
  }

  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  const center = Math.floor(length / 2)

  return merge(
    mergeSort(arr.slice(0, center)),
    mergeSort(arr.slice(center)),
    [],
  )
}

export default mergeSort
