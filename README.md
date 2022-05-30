# Background 
Ocean 8 is a fun and easy to play game. You only need to move your mouse and Spongebob will follow your lead to collect garbages and wastes that are throwed into the ocean. At the mean time, stay away from jellyfish and sharks! You might also find treasures like "The Heart of The Ocean" dimand if you got lucky. 

## Functionality & MVPs
Player will be able to:
- Start, pause, and reset the game
- control the music volumn on/off/lower/higher
- choose theme, day/night vision 
In addition, this project will include
- An "About" drop down menu to show a list of points for different items
- A production README

## bonus functions for future
- be able to choose easy/medium/difficult game levels
- be able to choose different characters like Patrick Star
- TBD

### Technologies, Libraries, APIs 
<!-- will update as project goes): -->
- The Canvas API to render the game board
- Webpack to bundle and transpile the source JavaScript code
- npm to manage project dependencies

#### Timeline
- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Revisit Asteriod project and make sure understand the logic. Research on JavaScript and Canvas API. Get canvas to show up on the screen. Render the canvas/background in the website.

- Monday: Dedicate this day toward implementing the underlying logic of Ocean 8. Ensure that Spongebob can move folowing the mouse. Random garbages, jelly fish, and sharks are generated with certain set of time pace. If time, make sure this is all rendered correctly on the canvas.

- Tuesday: Download 2D Assets for all the objects including Spongebob, garbages, jelly fish, sharks, and diamond. Make sure all the items render correctly when I advance a generation. Then, focus on user controls: start, stop, reset, and music volume.

- Wednesday: Finish implementing user controls, and focus on styling, as well as implementing the different color schemes and nav links. If time, start on bonuses.

- Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

##### wireFrame (to be added) 


### To do list

`Friday afternoon & weekend`
- [x] setting up the canvas game board
- [x] create moving objects:
    - [x] player: follow the mouse direction
    - [x] garbages: falling down randomly from the ceiling
    - [x] monsters: showed up randomly (not from the ceiling)

- [x] setting up collision 
- [x] setting up collision function 
    - [x] player x garbage = score 
    - [x] player x monster = lose 1 life
    - [x] garbage x monster = nothing (or maybe kill the monster?)

- [ ] setting up the game view
- [ ] choose the characters: Spongebob/Patrick Star
- [ ] setting up mouse move with bubble effect to follow

`Tuesday` 
- [ ] setting up the 2D assets & music volumn function
- [ ] setting up the theme function: day/night version

`Wednesday` 
- [ ] add the list of score function for different items
- [ ] polish the html & css 
- [ ] polish up including README, live demo testing etc 

`Thursday`
- [ ] if have time, setting up additional function:
    - [ ] choose difficulty function
    - [ ] choose the mouse effect