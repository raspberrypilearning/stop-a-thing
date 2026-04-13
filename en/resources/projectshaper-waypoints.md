# Runaway Robot teaching waypoints

## Runtime note
- `index.html` already loads p5.js and `main.js`, and includes the page text, the backdrop image, and a `sketch-holder` div.
- Use `en/code/runaway-robot-starter/main.js` as the starter file.
- Use `en/code/runaway-robot-starter/backdrop.png` as the backdrop image asset.
- Use `en/code/runaway-robot-starter/robot.png` as the robot image asset.
- Use the matching files in `en/code/runaway-robot-complete/` as the finished reference.

## 1. Starting point: a blank main file and a ready page shell
**What to edit**
- Open `en/code/runaway-robot-starter/main.js` and confirm that it is blank.
- Open `en/code/runaway-robot-starter/index.html` and confirm that it already has the heading, status text, and `sketch-holder` div.
- Check that `en/code/runaway-robot-starter/backdrop.png` is already in the code folder.
- Check that `en/code/runaway-robot-starter/robot.png` is already in the code folder.

**Visible change**
- `main.js` starts empty.
- The page shell is ready to use.
- `backdrop.png` is ready to show in the page.
- `robot.png` is ready to load.

**Manual test**
- Open the files.
- Confirm that `main.js` has no code yet.
- Confirm that `index.html` contains the page text and the `sketch-holder` div.
- Confirm that `backdrop.png` is present in the same folder.
- Confirm that `robot.png` is present in the same folder.

---

## 2. Build the main sketch file
**What to edit**
- In `en/code/runaway-robot-starter/main.js`, add the starting variables, `preload()`, `setup()`, and an empty `draw()`.
- Use `preload()` to get `robot.png` ready before the sketch starts.
- Send the canvas into the `sketch-holder` div in `setup()`.

**Visible change**
- A `400` by `400` canvas opens below the page text.
- The canvas is still empty because `draw()` does not draw anything yet.

**Manual test**
- Run the project.
- Confirm that a `400` by `400` canvas appears below the page text.

---

## 3. Show the robot
**What to edit**
- Replace the empty `draw()` function with `clear()` so the canvas stays transparent.
- Add an `image()` call to draw `robotImage` in front of the HTML backdrop.

**Visible change**
- The robot appears on screen.
- The backdrop image shows through behind the canvas.
- The page text sits above the sketch instead of inside it.

**Manual test**
- Run the project.
- Confirm that you can see the field backdrop, the robot, and the page text.

---

## 4. Make the robot run
**What to edit**
- Update `runnerX` while `keepRunning` is `true`.
- Let the robot run off the right edge, then send it back offscreen on the left.

**Visible change**
- The robot runs off the right side of the picture.
- The robot appears again from the left and keeps running.

**Manual test**
- Run the project for a few seconds.
- Confirm that the robot moves and loops.

---

## 5. Stop the loop with the keyboard
**What to edit**
- Add a `stopRunner()` function below `draw()`.
- Make `stopRunner()` set `keepRunning` to `false` and update `status-text` in the HTML page.
- Add a new `keyPressed()` function below `stopRunner()`.
- Check for the `SPACE` key and call `stopRunner()`.

**Visible change**
- Pressing `SPACE` stops the robot where it is.
- The page message changes to `Loop stopped!`.

**Manual test**
- Run the project and press `SPACE`.
- Confirm that the robot stops moving straight away.
- Confirm that the page message updates.

---

## 6. Stop the loop with the mouse too
**What to edit**
- Add a new `mousePressed()` function below `keyPressed()`.
- Check that the click is inside the canvas, then call `stopRunner()`.

**Visible change**
- The robot can now stop in two ways.
- A key press or a mouse click both break the running loop.

**Manual test**
- Run the project once and press `SPACE`.
- Run it again and click the picture.
- Confirm that both inputs stop the robot.
