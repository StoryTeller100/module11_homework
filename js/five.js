const pow = (number, stepen) => {
  let res = number;
  for (i = 1; i < stepen; i++) {
    //console.log(`${i}) ${res} * ${number} = ${res * number}`);
    res *= number;
  }
  return res;
};

console.log(pow(2, 10));
