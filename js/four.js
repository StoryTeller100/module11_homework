function getSeconds(start, limit) {
  setInterval(() => {
    console.log("start");
    for (let i = start; i <= limit; i++) {
      console.log(i);
    }
    console.log("end");
  }, 1000);
}

getSeconds(1, 3);
