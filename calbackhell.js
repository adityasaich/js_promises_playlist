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
function errorcallback() {
  log("this is a error");
}

function todo(callback, errorcallback) {
  try {
    log("i am your todo function");
    callback();
    try {
      callback2();
    } catch {
      errorback2();
    }
  } catch {
    errorcallback();
  }
}
todo(callback, errorcallback);
