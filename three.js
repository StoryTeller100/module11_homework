function summX(x) {
  return function summY(y) {
    return x + y;
  };
}
const sum7 = summX(7);
alert(sum7(18));
alert(sum7(22));
