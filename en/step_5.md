<h2 class="c-project-heading--task">Click to Stop Too</h2>

Add a mouse click so you can break the loop in two different ways.

### Step 1

The robot already stops with the keyboard. Now give the mouse the same job so you can use either input.

### Step 2

Go below `keyPressed()` in `main.js`, then add a new `mousePressed()` function. Make it check that the click is inside the canvas, then call `stopRunner()`.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: main.js
line_numbers: true
line_number_start: 37
line_highlights: 43-47
---
function keyPressed() {
  if (key === " ") {
    stopRunner();
  }
}

function mousePressed() { // Run when the mouse is clicked
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) { // Only react to clicks on the canvas
    stopRunner();
  }
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run the project twice and confirm that `SPACE` stops the robot in one run and clicking the picture stops it in another.

<div class="c-project-output">
  <img src="images/step_5_output.png" alt="Step 5 output showing the stopped message after clicking the picture.">
</div>
