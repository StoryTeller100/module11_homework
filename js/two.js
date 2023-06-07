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

let currentSlideIndex = 0;
let block = document.getElementById("root");
let nextSlideBtn = document.getElementById("next-slide");
let prevSlideBtn = document.getElementById("prev-slide");

let content = [
  `<h1> THIS IS h1 1 slide </h1>`,
  `<span>This is span 2 slide</span> `,
  `<h2>This is h2 3 slide</h2>`,
];

const showNextSlide = () => {
  if (currentSlideIndex + 1 >= content.length) {
    currentSlideIndex = 0;
    block.innerHTML = content[currentSlideIndex];
  } else {
    currentSlideIndex++;
    block.innerHTML = content[currentSlideIndex];
  }
};

const showPrevSlide = () => {
  if (currentSlideIndex - 1 < 0) {
    currentSlideIndex = content.length - 1;
    block.innerHTML = content[currentSlideIndex];
  } else {
    currentSlideIndex--;
    block.innerHTML = content[currentSlideIndex];
  }
};

nextSlideBtn.addEventListener("click", showNextSlide);

prevSlideBtn.addEventListener("click", showPrevSlide);

block.innerHTML = content[currentSlideIndex];

setInterval(() => {
  showNextSlide();
}, 2000);
