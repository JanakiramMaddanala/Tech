var work = new Promise((resolve, reject) => {
  console.log(`Working on promise....`);
  resolve("I am being resolved now");
});
debugger;
work
  .then(result => {
    console.log(work);
    console.log(result);
  })
  .then(null, reason => {
    console.log(reason);
  });
debugger;
console.log("I am first");
