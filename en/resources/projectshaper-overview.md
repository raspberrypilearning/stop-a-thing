# Runaway Robot

## Project overview
Runaway Robot starts with a blank `main.js` in a p5.js project. Build the sketch step by step, load `robot.png`, place the canvas over the `backdrop.png` image in the page, make the robot move in the loop, then stop it with the keyboard or the mouse.

## Try these controls
- Watch the robot move in a loop
- Press **SPACE** to stop it
- Click the picture to stop it too

## Core learning goal
Build a p5.js sketch from a blank file and control a running loop:
- add the sketch logic in `main.js`
- use `preload()` to load `robot.png`
- place the canvas inside the page layout over the backdrop image
- use `clear()` so the HTML backdrop shows through
- move the robot in the loop
- stop the loop with a key press
- reuse the same idea with a mouse click
- update the page message when the loop stops

## File structure
- `en/code/runaway-robot-starter/index.html` - starter page with the title, status text, and sketch holder
- `en/code/runaway-robot-starter/style.css` - starter page styles
- `en/code/runaway-robot-starter/main.js` - blank starter file
- `en/code/runaway-robot-starter/backdrop.png` - backdrop image asset
- `en/code/runaway-robot-starter/robot.png` - robot image asset
- `en/code/runaway-robot-starter/project_config.yml` - starter build config
- `en/code/runaway-robot-complete/index.html` - finished page
- `en/code/runaway-robot-complete/style.css` - finished page styles
- `en/code/runaway-robot-complete/main.js` - finished sketch file
- `en/code/runaway-robot-complete/backdrop.png` - finished backdrop image asset
- `en/code/runaway-robot-complete/robot.png` - finished robot image asset
- `en/code/runaway-robot-complete/project_config.yml` - final build config
- `en/resources/projectshaper-waypoints.md` - teaching sequence with manual tests

## Design notes
- Keep the sketch logic in `main.js`
- Keep the page text and status message in `index.html`
- Keep the robot and backdrop image assets with the runnable code
- Keep the page simple so the canvas stays the focus
- Show the backdrop image in the page layout instead of loading it into the canvas
- Use p5.js drawing, image, and input functions, plus a simple DOM update for the status text
