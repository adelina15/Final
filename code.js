var r = 80;
var g = 50;
var b = 190;
var rectY=0;
var value = 0;
var emojis = [];
var emoji_x=[];
var emoji_y=[];


function setup() {
   createCanvas(600,600);
   //console.log(emojis);
}

function draw() {
    for (var i=0; i < 15; i++){
        noStroke();
        fill(r, g, b)
      rect(0, rectY, width, height/15);
      rectY += height/15;
      r += 14;
      b -= 10;

    }
    //draw emoji
    for (var i = 0; i < emojis.length; i++) {
        text(emojis[i], emoji_x[i], emoji_y[i])
    }
    
      fill(value);
      rect( 270, 500, 50,50); //button
}

function mouseClicked() {
    if( mouseX > 270 && mouseX < 320 && mouseY > 500 && mouseY < 550) {
      if (value === 300) {
        value = 150;
      } else {
        value = 300;
      }
    makeEmoji();

            
        
    }


}

function makeEmoji() {
        emojis = [];
        emoji_x =[];
        emoji_y=[];
        
        
            
        var choicetext = "";
            
        var choices = Math.floor(Math.random()*3)
        if (choices===1) {
            choicetext = 'panda'
        } else if ( choices===2) {
            choicetext = 'koala'
        } else { 
            choicetext = 'white bear'
        }
        
        for(var j=0; j<20; j++){
        
        emoji_x.push(Math.random() * 600);
        emoji_y.push(Math.random() * 600);
        emojis.push(choicetext);
    
}
}


   

