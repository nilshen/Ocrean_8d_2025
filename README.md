
# Ocean 8d(Aid)
## [Open the Live Link](https://nilshen.github.io/Ocean_8d/)

![Home Page](./assets/images/home%20screen.png)
![Game Page](./assets/images/game%20screen.png)


# Background 
Ocean 8d(Aid) is inspired by an article I read. During covid-19 there are tons of facemasks end up in the ocrean and a lot of animals are died from it. I want to build this fun and easy to play game to bring awareness of recycle garbages and make the world a better place! 

You only need to move your mouse and Spongebob will follow your lead to collect garbages and wastes that are throwed into the ocean, also leftclick to recycle 10 garbages to $100 to buy gifts for Patrick Star, Spongebob's best friend. At the mean time, stay away from and the sharks! 

Special thanks to Tom Li, Nikhil Kumar and Vera Ho for the help and inspiration for this project. 

## Functionality & MVPs
Player will be able to:
- start, pause, and exist the game
- control the music volumn on/off
- constrol the sound effect on/off
- choose theme, day/night vision 
In addition, this project will include
- a "how to play" drop down menu
- a contact dropdown menu with github and linkedin contact with font fantasy
- A production README

## bonus functions for future
- be able to choose easy/medium/difficult game levels
- be able to choose different characters like Patrick Star
- be able to choose theme / language 

### Technologies, Libraries, APIs 
<!-- will update as project goes): -->
- The Canvas API to render the game board
- Webpack to bundle and transpile the source JavaScript code
- npm to manage project dependencies

#### Timeline
- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Revisit Asteriod project and make sure understand the logic. Research on JavaScript and Canvas API. Get canvas to show up on the screen. Render the canvas/background in the website.

- Monday: Dedicate this day toward implementing the underlying logic of Ocean 8. Ensure that Spongebob can move folowing the mouse. Random garbages and sharks are generated with certain set of time pace. If time, make sure this is all rendered correctly on the canvas.

- Tuesday: Download 2D Assets for all the objects including Spongebob, garbages, and sharks. Make sure all the items render correctly including the face direction. Then, focus on user controls: start, stop, exist game, and audio volume control.

- Wednesday: Finish implementing user controls, and focus on styling, as well as implementing the color schemes and nav links. If time, start on bonuses.

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
    - [x] garbage x monster = lose 1 score (or maybe kill the monster?)

- [X] setting up the game view with sprite
- [X] setting up mouse move with the player to follow

`Tuesday` 
- [X] setting up the 2D assets & music volumn function
- [x] setting up start new game, go back to homepage
- [x] setting up pause game / resume game

`Wednesday` 
- [x] polish the html & css 
- [x] setting up the home page with how to play and contact
- [x] polish up including README, live demo testing etc 

`Thursday`
- [x] if have time, setting up additional function:
    - [x] setting up font awesome icon
    - [X] setting up mute function for background music
    - [X] setting up mute function for sound effect
    - [X] setting up additional game function: recycle 10 garbages for $100 dolloar

# Credits
2D sprites and animation assest from:
https://www.gamedeveloperstudio.com/graphics/viewgraphic.php?page-name=2d-fish-game-asset&item=1940953k9t2s2v4d3l

font awesome icons from: 
https://fontawesome.com/