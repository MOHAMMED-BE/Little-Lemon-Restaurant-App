const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 22; i++) {
    if (random() <= 1) {
      result.push(i + ":00");
    }
   
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
