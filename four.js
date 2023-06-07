function getSeconds(start, end) {
  console.log("start", start);

  let stopSeconds = setInterval(() => {
    start++;
    If(start === 15);
    {
      clearInterval(stopSeconds);
    }
    console.log("startInterval", start);
  }, 1000);
  console.log("end", end);
}

getSeconds(5, 15);
