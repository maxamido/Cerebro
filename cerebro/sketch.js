/***********************************************************************************
Cerebro
  by Max Amido

  Uses the p5.2DAdventure.js class 

***********************************************************************************/

// adventure manager global  
var adventureManager;

// p5.play
var playerSprite;
var playerAnimation;
var logoSprite;

// Clickables: the manager class
var clickablesManager;    // the manager class
var clickables;           // an array of clickable objects


// indexes into the clickable array (constants) 
const cl_enter = 0;
const cl_cont1 = 1;
const cl_cont2 = 2;
const cl_cont3 = 3;
const cl_chooseus = 4;
const cl_choosept = 5;
const cl_choosetsa = 6;
const cl_choosenone = 7;
const cl_ptstart = 8;
const cl_usstart = 9;
const cl_tsastart = 10;
const cl_ptq1yes = 11;
const cl_ptq1no = 12;
const cl_ptq2yes = 13;
const cl_ptq2no = 14;
const cl_ptendnext = 15;
const cl_usq1yes = 16;
const cl_usq1no = 17;
const cl_usq2yes = 18;
const cl_usq2no = 19;
const cl_usendnext = 20;
const cl_tsaq1yes = 21;
const cl_tsaq1no = 22;
const cl_tsaq2yes = 23;
const cl_tsaq2no = 24;
const cl_tsaendnext = 25;
const cl_noneend = 26;
const cl_restart = 27;
const cl_tsaq3yes = 28;
const cl_tsaq3no = 29;
const cl_ptq3yes = 30;
const cl_ptq3no = 31;
const cl_usq3yes = 32;
const cl_usq3no = 33;
const cl_ptusq1yes = 34;
const cl_ptusq1no = 35;
const cl_ptustsaq1yes = 36;
const cl_ptustsaq1no = 37;
const cl_ustsaq1yes = 38;
const cl_ustsaq1no = 39;
const cl_ustsaptq1yes = 40;
const cl_ustsaptq1no = 41;
const cl_tsaptq1yes = 42;
const cl_tsaptq1no = 43;
const cl_tsaptusq1yes = 44;
const cl_tsaptusq1no = 45;



// room indices - look at adventureManager
const Splash = 0;
const Intro = 1;
const IntroCont = 2;
const characters = 3;
const choose = 4;
const ptchoice = 5;
const tsachoice = 6;
const uschoice = 7;
const ptq1 = 8;
const ptq2 = 9;
const ptend = 10;
const usq1 = 11;
const usq2 = 12;
const usend = 13;
const tsaq1 = 14;
const tsaq2 = 15;
const tsaend = 16;
const usptq1 = 17;
const endgame = 18;
const nooneend = 19;
const ptq3 = 20;
const usq3 = 21;
const tsaq3 = 22;
const ptusq1 = 23;
const ptustsaq1 = 24;
const ustsaq1 = 25;
const ustsaptq1 = 26;
const tsaptq1 = 27;
const tsaptusq1 = 28;


let headlineFont;
let bodyFont;

// Allocate Adventure Manager with states table and interaction tables
function preload() {

  headlineFont = loadFont('fonts/FogCityGothic-Wide.otf');
  bodyFont = loadFont('fonts/FogCityGothic-Regular.otf');

  
  // allocateCharacters();

  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  adventureManager = new AdventureManager('data/adventureStates.csv', 'data/interactionTable.csv', 'data/clickableLayout.csv');
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // this is optional but will manage turning visibility of buttons on/off
  // based on the state name in the clickableLayout
  adventureManager.setClickableManager(clickablesManager);

  // This will load the images, go through state and interation tables, etc
  adventureManager.setup();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  fs = fullscreen();

  frameRate(20);
}

// Adventure manager handles it all!
function draw() {
  // draws background rooms and handles movement from one to another
  adventureManager.draw();

  
  // draw the p5.clickables, in front of the mazes but behind the sprites 
  clickablesManager.draw();
}

// pass to adventure manager, this do the draw / undraw events
function keyPressed() {
  // toggle fullscreen mode
  if( key === 'f') {
    fs = fullscreen();
    fullscreen(!fs);
    return;
  }

  // dispatch all keys to adventure manager
  adventureManager.keyPressed(key); 
}

function mouseReleased() {
  // dispatch all mouse events to adventure manager
  adventureManager.mouseReleased();
}


//-------------- CLICKABLE CODE  ---------------//

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;    
  }

  // we do specific callbacks for each clickable
  clickables[0].onPress = clickableButtonPressed;
  clickables[1].onPress = clickableButtonPressed;
  clickables[2].onPress = clickableButtonPressed;
  clickables[3].onPress = clickableButtonPressed;
  clickables[4].onPress = clickableButtonPressed;
  clickables[5].onPress = clickableButtonPressed;
  clickables[6].onPress = clickableButtonPressed;
  clickables[7].onPress = clickableButtonPressed;
  clickables[8].onPress = clickableButtonPressed;
  clickables[9].onPress = clickableButtonPressed;
  clickables[10].onPress = clickableButtonPressed;
  clickables[11].onPress = clickableButtonPressed;
  clickables[12].onPress = clickableButtonPressed;
  clickables[13].onPress = clickableButtonPressed;
  clickables[14].onPress = clickableButtonPressed;
  clickables[15].onPress = clickableButtonPressed;
  clickables[16].onPress = clickableButtonPressed;
  clickables[17].onPress = clickableButtonPressed;
  clickables[18].onPress = clickableButtonPressed;
  clickables[19].onPress = clickableButtonPressed;
  clickables[20].onPress = clickableButtonPressed;
  clickables[21].onPress = clickableButtonPressed;
  clickables[22].onPress = clickableButtonPressed;
  clickables[23].onPress = clickableButtonPressed;
  clickables[24].onPress = clickableButtonPressed;
  clickables[25].onPress = clickableButtonPressed;
  clickables[26].onPress = clickableButtonPressed;
  clickables[27].onPress = clickableButtonPressed;
  clickables[28].onPress = clickableButtonPressed;
  clickables[29].onPress = clickableButtonPressed;
  clickables[30].onPress = clickableButtonPressed;
  clickables[31].onPress = clickableButtonPressed;
  clickables[32].onPress = clickableButtonPressed;
  clickables[33].onPress = clickableButtonPressed;
  clickables[34].onPress = clickableButtonPressed;
  clickables[35].onPress = clickableButtonPressed;
  clickables[36].onPress = clickableButtonPressed;
  clickables[37].onPress = clickableButtonPressed;
  clickables[38].onPress = clickableButtonPressed;
  clickables[39].onPress = clickableButtonPressed;
  clickables[40].onPress = clickableButtonPressed;
  clickables[41].onPress = clickableButtonPressed;
  clickables[42].onPress = clickableButtonPressed;
  clickables[43].onPress = clickableButtonPressed;
  clickables[44].onPress = clickableButtonPressed;
  clickables[45].onPress = clickableButtonPressed;
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#636363";
  this.noTint = false;
  this.tint = "#FF0000";
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#AAAAAA";
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
}

clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
} 
