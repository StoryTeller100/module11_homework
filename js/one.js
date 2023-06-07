let nums = [
  123,
  21,
  5,
  NaN,
  214,
  12,
  "hello",
  4,
  12,
  true,
  5,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  214,
  null,
  43,
  12,
  undefined,
  4,
];

function countOddAndEven(arr) {
  console.log(arr);
  let evenCount = 0;
  let oddCount = 0;
  let zeroCOunt = 0;

  arr.forEach((element) => {
    if (typeof element === "number" && !isNaN(element)) {
      if (element === 0) {
        zeroCOunt++;
        return;
      }

      if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });

  console.log(evenCount);
  console.log(oddCount);
  console.log(zeroCOunt);
}

countOddAndEven(nums);
