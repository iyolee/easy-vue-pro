export function findLast(arr, fn) {
  if (!Array.isArray(arr)) {
    throw Error(
      "The first parameter of the function findLast is required to be an array and the length of the first parameter is not zero"
    );
  }
  if (typeof fn !== "function") {
    throw Error(
      "The second parameter of the function findLast is required to be a function"
    );
  }
  const result = [];
  arr.reverse().forEach(item => {
    const res = fn.call(null, item);
    if (res) {
      result.push(item);
    }
  });
  return result.length ? result : undefined;
}
