const tick = Date.now();
const log = (msg) => {
  console.log("at " + (Date.now() - tick) + " " + msg);
  return msg;
};
function time(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function job() {
  await time(500);
  await time(500);
  log("after some time");
  return "job done";
}
job().then((msg) => log(msg));
log("i am done");
