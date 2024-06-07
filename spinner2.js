// Spinner animation.
// Every callback in each setTimeout prints a 'frame' of a spinning cursor
let rev = 0;
let delayTime = 100;
let cursorRev = {
  A: "\r|    ",
  B: "\r/    ",
  C: "\r-    ",
  D: "\r\\    ",
  E: "\r|    ",
};

while (rev < 2) {
  if (rev === 1) {
    cursorRev.F = "\n";
  }
  for (let frame in cursorRev) {
    delayTime += 200;

    setTimeout(() => {
      process.stdout.write(cursorRev[frame]);
    }, delayTime);
  }

  rev++;
}
