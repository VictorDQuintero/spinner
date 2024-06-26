// Spinner animation.
// Every callback in each setTimeout prints a 'frame' of a spinning cursor

setTimeout(() => {
  process.stdout.write("\r|    ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/    ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-    ");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\    ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|    ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/    ");
}, 1200);

setTimeout(() => {
  process.stdout.write("\r-    ");
}, 1400);

setTimeout(() => {
  process.stdout.write("\r\\    ");
}, 1600);

setTimeout(() => {
  process.stdout.write("\r|    ");
}, 1800);

setTimeout(() => {
  process.stdout.write("\n");
}, 2000);
