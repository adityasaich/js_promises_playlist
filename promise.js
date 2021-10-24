import fetch from "node-fetch";
const startTime = Date.now();
const log = (msg) => {
  console.log("at " + (Date.now() - startTime) + " " + msg);
  return msg;
};
function createpromise() {
  return new Promise((resolve, reject) => {
    log("inside promise");
    let a = 3;
    if (a === 4) {
      resolve("i know math");
    }
    reject("learn math");
  });
}

// createpromise()
//   .then((msg) => log("resolved " + msg))
//   .catch((msg) => log("reject " + msg));
fetch("https://api.github.com/users/1")
  .then((res) => {
    log("inside response");
    return res.json();
  })
  .then((data) => log(JSON.stringify(data)))
  .catch((msg) => log(msg));
log("i am done");
