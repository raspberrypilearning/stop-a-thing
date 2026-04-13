const robotWidth = 108;
const robotHeight = 130;

let runnerX = 60;
let runnerY = 190;
let runnerSpeed = 4;
let keepRunning = true;
let robotImage;

function preload() {
  robotImage = loadImage("robot.png");
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
}

function draw() {
  clear();
  image(robotImage, runnerX, runnerY, robotWidth, robotHeight);

  if (keepRunning) {
    runnerX = runnerX + runnerSpeed;
    if (runnerX > width) {
      runnerX = -robotWidth;
    }
  }
}

function stopRunner() {
  keepRunning = false;
  document.getElementById("status-text").textContent =
    "Loop stopped! Run the project again to try another stop.";
}

function keyPressed() {
  if (key === " ") {
    stopRunner();
  }
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    stopRunner();
  }
}
