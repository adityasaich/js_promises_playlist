const startTime = Date.now();
const log = (msg) => {
  console.log("at " + (Date.now() - startTime) + " " + msg);
  return msg;
};

function callback() {
  for (let i = 0; i < 2; i += 1) {
    log("i am a callback function");
  }
}

function todo(callback) {
  log("i am your todo function");
  setTimeout(callback, 1000);
  callback();
}

todo();
log("i am done");
//callback();
