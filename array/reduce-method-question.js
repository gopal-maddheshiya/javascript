function getmin(arr) {
  let minimum = arr.reduce((minimum, el) => {
    if (minimum < el) {
      return minimum;
    } else {
      return el;
    }
  });
  return minimum;
}

let arr = [20, 40, 50, 30, 60, 70];


console.log(getmin(arr));