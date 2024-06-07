// Spinner animation.

let revs = 2; // number of spins
let revCount = 0;
let delayTime = 100;
let spinner = {
  A: "\r|    ",
  B: "\r/    ",
  C: "\r-    ",
  D: "\r\\    ",
  E: "\r|    ",
};

while (revCount < revs) {
  // Makes the spinner spin twice in this example
  if (revCount === revs - 1) {
    // During the last spin it adds a character to the object
    spinner.F = "\n";
  }
  for (let frame in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[frame]);
    }, delayTime);
    delayTime += 200; // adds delay time
  }
  revCount++;
}
