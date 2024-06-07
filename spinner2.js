// Spinner animation.
// Extreme refactor. Unable to control how many spins the spinner completes, to increase or decrease spins one must alter the array.

let delayTime = 100;
let spinner = [
  "\r|    ",
  "\r/    ",
  "\r-    ",
  "\r\\    ",
  "\r|    ",
  "\r|    ",
  "\r/    ",
  "\r-    ",
  "\r\\    ",
  "\r|    ",
  "\n",
];

for (let frame of spinner) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, delayTime);
  delayTime += 200;
}
