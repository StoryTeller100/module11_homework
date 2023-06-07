const isSimple = (num) => {
  if (num > 1000) return "данные неверны";
  if (num === 0 || num === 1) return `${num} ne prostoe`;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} ne prostoe`;
    }
  }
  return `${num} prostoe`;
};

console.log(isSimple(997));
console.log(isSimple(13));
console.log(isSimple(123));
console.log(isSimple(125));
console.log(isSimple(123));
