async function WorkAsync() {
  console.log(`Working on Asynchronous Task`);
  return 1;
}

async function getOuputAsync() {
  console.log(WorkAsync());
  let output = await WorkAsync();
  console.log(output);
}

getOuputAsync();

function syncFunction() {
  console.log("I may be first");
}

syncFunction();
