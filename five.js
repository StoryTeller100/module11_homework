function pow(number, stepen) {
  for (i = 1; stepen > i; i++) {
    number *= number;
  }
  return number;
}
