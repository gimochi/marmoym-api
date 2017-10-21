export function _appendIfNotPresent(arr, elem, key) {
  if (arr.indexOf(elem[key]) == -1) {
    arr.push(elem[key]);
  }
  return arr;
}