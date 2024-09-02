var currentScene;
    currentScene = 0;
// The Arcade Maniac 
background(3, 10, 54);

fill(255, 255, 255);
textSize(32);
text("The Arcade Maniac", 63,106, 443, 100);
textSize(15);
text("(if the menus' text appears red, restart the program.)", 23,320, 443, 18);
textSize(17);

text("[Click To Continue]", 133,222, 1048, 552);
fill(255, 0, 0);
text("(warning: gore)", 275,381, 1048, 552);


var drawScene1 = function () {
    currentScene = 1;

//scene 1
background(255, 255, 255);


background(3, 10, 54);
noStroke();

// moon and clouds
fill(232, 232, 232);
ellipse(41,27,197,197);

     fill(135, 135, 135,70);
    ellipse(77,3,80,80);
    
         fill(135, 135, 135,90);
        ellipse(41,89,66,66);
        
    fill(255, 255, 255, 15);
ellipse(140, 135, 165, 58);
    ellipse(186, 113, 112, 58);
        ellipse(249, 6, 112, 58);
            ellipse(299, 37, 112, 58);
                ellipse(349, 10, 116, 88);
                    ellipse(161, 155, 167, 62);
                        ellipse(378, 154, 116, 62);
                            ellipse(384, 117, 209, 62);
                                ellipse(118, 25, 98, 37);
                                    ellipse(58, -3, 152, 77);
                                        ellipse(72, 47, 156, 60);

// terrain

image(getImage("cute/GrassBlock"), -3, 323, 102, 80);
    image(getImage("cute/GrassBlock"), 96, 323, 102, 80);
        image(getImage("cute/GrassBlock"), 194, 323, 102, 80);
            image(getImage("cute/GrassBlock"), 293, 323, 102, 80);
                image(getImage("cute/GrassBlock"), 392, 323, 102, 80);
                    image(getImage("cute/GrassBlock"), -3, 323, 102, 80);
                        image(getImage("cute/GrassBlock"), -3, 323, 102, 80);

// the maniac 

image(getImage("avatars/leafers-seedling"), -20+183, 193, 201, 163);

// details
// knife 
fill(181, 181, 181);
 rect(-20+235,289,-8,41,41);

// hands
fill(106, 150, 98);
 ellipse(-20+312, 307, 15, 15);
  ellipse(-20+230, 318, 15, 15);

// bag
fill(69, 53, 54);
    ellipse(-20+365,321,100,50);
     ellipse(-20+317,319,19,19);

// blood
fill(255, 0, 0, 75);
    ellipse(-20+830,346,985,18);
     ellipse(-20+372,336,57,33);
      ellipse(-20+386,323,57,33);
       ellipse(-20+348,329,57,33);
        ellipse(-20+228,301,7,33);
         ellipse(-20+231,292,13,17);
          ellipse(-20+231,302,-6,17);
          
//text explaining
    textSize(15);
 fill(255, 255, 255);
text("You had a long day at work, so you head home...", 188, 69, 192, 100); 
 
 
};


var drawScene2 = function () {
    currentScene = 2;
//Night sky
//scene 2
background(0, 6, 59);
    fill(232, 232, 232);
     noStroke();
      ellipse(200,2,200,200);

        fill(135, 135, 135,70);
         ellipse(262,3,80,80);
    
          fill(135, 135, 135,90);
           ellipse(200,58,66,66);
            
            fill(135, 135, 135,90);
             ellipse(133,-17,66,66);

//Ground
    fill(16, 82, 5);
     noStroke();
      rect(0,258,400,200);
       
//Tree
    stroke(61, 41, 12);
     strokeWeight(24);
      line(40,314,40,90);
       strokeWeight(10);
        line(41,289,8,321);
         line(41,289,73,321);
          stroke(16,82,5);
           strokeWeight(15);
            line(40,79,0,122);
             line(40,79,82,123);
              line(40,159,109,230);
               line(40,159,0,202);

//Maniacs House
    noStroke();
     fill(84, 54, 12);
      rect(91,280,221,31,65);
       rect(91,219,221,31,65);
        rect(91,249,221,31,65);
         rect(91,189,221,31,65);
          triangle(103,189,204,118,309,189);
           stroke(145, 18, 18);
            strokeWeight(19);
             line(75,195,204,118);
              line(204,118,329,195);
               noStroke();
                fill(48, 25, 11);
                 ellipse(204,168,40,40);
                  stroke(84,54,12);
                   strokeWeight(5);
                    line(204,233,204,140);
                     line(164,168,247,168);
                      noStroke();
                       rect(179,210,50,100);

//Maniac With Shovel
    fill(61,41,5);
     image(getImage("avatars/leafers-seedling"), -20+224, 223, 201, 163);
      arc(213,387,71,50,-180,0);
        ellipse(176,379,15,15);
            ellipse(244,380,15,15);
                ellipse(188,369,15,15);
                    ellipse(206,365,20,20);
                        ellipse(227,371,31,31);
            stroke(89, 89, 89);
                line(229,267,225,361);
                stroke(3, 3, 3);
                    line(231,263,237,250);
                        line(228,263,225,248);
                            line(239,247,223,245);
                            
//text explaining
    textSize(15);
 fill(255, 255, 255);
text("You arive home and bury your treasure", 188, 166, 192, 100); 

};



var drawScene3 = function() {
    currentScene = 3;
//scene 3
fill(255, 255, 255);
background(59, 43, 28);
textSize(24);
text("You feel tired so you go home and fall asleep.", 101, 51, 304, 100);

// window
fill(3, 10, 54);
strokeWeight(7);
rect(100,144,100,100,1);

// boards
strokeWeight(2);

fill(38, 28, 19);
rect(83,146,140,23,1);//board 1
//nail set 1
    fill(99, 79, 58);
     ellipse(89,153,7,7);
      ellipse(86,164,7,7);
       ellipse(213,154,7,7);
      ellipse(216,164,7,7);
      
fill(38, 28, 19);
rect(83,182,140,23,1);//board 2
//nail set 2
    fill(99, 79, 58);
     ellipse(89,199,7,7);
      ellipse(86,185,7,7);
       ellipse(213,200,7,7);
      ellipse(216,187,7,7);
      
fill(38, 28, 19);
rect(83,217,140,23,1);//board 3
//nail set 3
    fill(99, 79, 58);
     ellipse(89,236,7,7);
      ellipse(86,226,7,7);
       ellipse(213,235,7,7);
      ellipse(216,224,7,7);

// floor
image(getImage("cute/WoodBlock"), -12, 339, 118, 80);
    image(getImage("cute/WoodBlock"), 94, 339, 118, 80);
        image(getImage("cute/WoodBlock"), 202, 339, 118, 80);
            image(getImage("cute/WoodBlock"), 310, 339, 118, 80);
    noStroke();
    fill(28, 21, 12,70);
      rect(-113,362,724,188);

// bed

fill(179, 22, 22);
    rect(58,337,180,38,1);
ellipse(76,342,98,39);    
        fill(255, 255, 255);
                    
// pillow
            rect(-113,336,180,38,1);
 ellipse(18,342,98,39);
 
// maniac (asleep)
image(getImage("avatars/leafers-seedling"), 11, 251, 114, 101);

 //blanket effect
 fill(179, 22, 22);
ellipse(115,341,98,39);  

};
//scene 5 ------------------
var drawScene5 = function () {
	currentScene = 5;
background(0, 83, 125);

//Arcade
    stroke(7, 60, 87);
     strokeWeight(7);
      line(154,39,0,0);
       line(154,145,0,261);
        line(326,36,400,7);
         line(326,145,400,227);

//Main Entrance
    fill(26, 232, 235);
     noStroke();
      rect(155,36,172,110);
       stroke(145, 145, 145);
        strokeWeight(5);
         line(154,39,154,145);
          line(155,36,326,36);
           line(326,36,326,145);
//Outside
    fill(13, 219, 33);
     strokeWeight(3);
      stroke(0,0,0);
       arc(155,146,178,101,-88,0);
        arc(239,146,168,101,-179,0);

//maniac
image(getImage("avatars/leafers-seedling"), 180, 87, 100, 80);

//claw machine
noStroke();

fill(255, 145, 0);
    rect(-16,373,304,53,31);
        rect(-77,357,304,31,31);
    fill(255, 255, 255);
    
textSize(18);
text("Yeeters Claw", 37,361,177,196);

//text explaining idk

text("You enter the arcade and head towards the claw machine, maybe you're bored.", 211,197,177,196);

};

var drawScene4 = function () {
    currentScene = 4;
background(26, 232, 235);
//scene 4
//Day Sky
    fill(255, 251, 0);
     noStroke();
      ellipse(56,26,150,150);

//Clouds
    fill(255, 255, 255);
     ellipse(280,50,100,40);
      ellipse(213,65,100,40);
      
//Ground
    fill(99, 99, 99);
     rect(0,280,400,200);
      fill(0, 0, 0);
       rect(0,314,400,200);
        stroke(255, 251, 0);
        strokeWeight(10);
         line(30,361,100,361);
          line(158,361,229,361);
           line(286,361,357,361);
           
//Yeeters Arcade
    fill(36, 36, 36);
     noStroke();
      rect(86,146,227,134);
       triangle(86,146,203,91,312,146);
        rect(47,180,100,100);
         rect(254,180,100,100);
          fill(0, 83, 125);
           rect(155,224,93,56);
            stroke(145, 145, 145);
             strokeWeight(3);
              line(155,224,155,278);
               line(250,224,249,280);
                line(250,224,156,223);
                 fill(201, 201, 201);
                  noStroke();
                   rect(137,124,106,20);
                    rect(193,145,90,16);
                     rect(175,181,64,20);
                      stroke(255, 81, 0);
                       strokeWeight(15);
                        point(204,173);
                         stroke(255, 0, 0);
                          point(178,173);
                           stroke(255, 244, 41);
                            point(231,173);
                             stroke(123, 0, 255);
                              point(204,209);
                               stroke(234, 0, 255);
                                point(178,209);
                                 stroke(0, 174, 255);
                                  point(231,209);
                                   stroke(72,201,7);
                                    point(255,192);
                                     stroke(31, 53, 219);
                                      point(156,192);
                                       textSize(20); 
                                        fill(255, 0, 0);
                                         text("Y",137,142);
                                          fill(255, 81, 0);
                                           text("E",150,142);
                                            fill(255, 244, 41);
                                             text("E",165,142);
                                          fill(72,201,7);
                                           text("T",180,142);
                                            fill(0, 174, 255);
                                             text("E",193,142);
                                              fill(123, 0, 255);
                                               text("R",207,142);
                                                fill(234, 0, 255);
                                                 text("'",223,138);
                                                  fill(31, 53, 219);
                                                   text("S",228,142);
                                                    fill(255, 0, 0);
                                                     text("A",197,159);
                                                      fill(255, 81, 0);
                                                       text("R",211,159);
                                                        fill(255, 244, 41);
                                                         text("C",225,159);
                                                          fill(72,201,7);
                                                           text("A",240,159);
                                                            fill(0, 174, 255);
                                                             text("D",253,159);
                                                              fill(123, 0, 255);
                                                               text("E",266,159);
                                                                fill(255, 0, 0);
                                                                 text("OPEN",177,198);
                                                                 

//Maniac
    image(getImage("avatars/leafers-seedling"), 164, 177, 118, 112);

    
//text explaining

fill(255, 255, 255);
text("Morning comes by and you head to the arcade", 267, 245, 100, 216);
};


var drawScene5 = function () {
    currentScene = 5;

//scene 5

background(0, 83, 125);

//Arcade
    stroke(7, 60, 87);
     strokeWeight(7);
      line(154,39,0,0);
       line(154,145,0,261);
        line(326,36,400,7);
         line(326,145,400,227);
         
//Yeeters Claw Machine
noStroke();
fill(255, 145, 0);
    rect(-16,373,304,53,31);
        rect(-77,357,304,31,31);
    fill(255, 255, 255);
    
textSize(18);
text("Yeeters Claw", 37,361,177,196);


//Main Entrance
    fill(26, 232, 235);
     noStroke();
      rect(155,36,172,110);
       stroke(145, 145, 145);
        strokeWeight(5);
         line(154,39,154,145);
          line(155,36,326,36);
           line(326,36,326,145);

//Outside
    fill(13, 219, 33);
     stroke(0, 0, 0);
      strokeWeight(2);
       arc(155,146,178,101,-88,0);
        arc(239,146,168,101,-179,0);
//Sun
         noStroke();
          fill(255, 251, 0);
           ellipse(292,68,35,35);

//Maniac 
image(getImage("avatars/leafers-seedling"), 178, 87, 126, 126);

//Text Explaining
textSize(21);
    fill(255, 255, 255);

text("You enter and you see a claw machine and head towards it. Maybe you are bored.", 13, 172, 196, 384);

};

var drawScene6 = function () {
    currentScene = 6;
//scene 6

background(0, 83, 125);
noStroke();
//claw machine
fill(255, 145, 0);

 rect(0,339,407,167,1);
  rect(0,89,407,29,1);
   rect(23,69,354,29,16);

fill(120, 120, 120);
 rect(310,276,90,63,1);
fill(0, 0, 0);
    ellipse(329,289,15,15);
        ellipse(358,289,15,15);
            ellipse(386,289,15,15);
                ellipse(373,312,15,15);
                    ellipse(342,312,15,15);
                        ellipse(329,289,15,15);
                            ellipse(358,289,15,15);
                                 ellipse(386,289,15,15);

fill(255, 255, 255);
textSize(33);

text("Yeeter's Claw", 93,82,244,114);
//claw grabber thingy
stroke(255, 255, 255);
strokeWeight(7);
    line(203, 168, 135, 252);
     line(208, 168, 269, 252);
      line(203, 174, 203, 252);
strokeWeight(21);
 line(203, 124, 203, 166);

//plushies

image(getImage("avatars/aqualine-seedling"), 13, 263, 95, 80);
image(getImage("avatars/duskpin-seedling"), 175, 264, 95, 80);
image(getImage("avatars/piceratops-seedling"), 127, 267, 95, 80);
image(getImage("avatars/primosaur-seedling"), 82, 266, 95, 80);
image(getImage("avatars/piceratops-tree"), 239, 265, 95, 80);

// maniac
image(getImage("avatars/leafers-seedling"), 301, 177, 118, 112);

// text explaining
textSize(20);
text("You instead go inside the claw machine..?", 86,20,315,171);

};



var drawScene7 = function () {
    currentScene = 7;
//scene 7

background(0, 83, 125);
noStroke();
//claw machine
fill(255, 145, 0);

 rect(0,339,407,167,1);
  rect(0,89,407,29,1);
   rect(23,69,354,29,16);

fill(120, 120, 120);
 rect(310,276,90,63,1);
fill(0, 0, 0);
    ellipse(329,289,15,15);
        ellipse(358,289,15,15);
            ellipse(386,289,15,15);
                ellipse(373,312,15,15);
                    ellipse(342,312,15,15);
                        ellipse(329,289,15,15);
                            ellipse(358,289,15,15);
                                 ellipse(386,289,15,15);

fill(255, 255, 255);
textSize(33);

text("Yeeter's Claw", 93,82,244,114);
//claw grabber thingy
stroke(255, 255, 255);
strokeWeight(7);
    line(203, 168, 135, 252);
     line(208, 168, 269, 252);
      line(203, 174, 203, 252);
strokeWeight(21);
 line(203, 124, 203, 166);

//plushies

image(getImage("avatars/aqualine-seedling"), 39, 229, 95+40, 80+40);

image(getImage("avatars/primosaur-seedling"), 88, 245, 95+20, 80+20);

// maniac
image(getImage("avatars/leafers-seedling"), -29, 206, 118+40, 112+40);

// text explaining
textSize(20);
text("You noticed people entering the arcade so you decide to hop into the crowd of plushies to blend in.", 40,3,315,171);

// scene crossover

fill(0, 83, 125);
    strokeWeight(3);

triangle(-4, 495, 404, -8, 621, 559);

strokeWeight(3);
    fill(26, 232, 235);
//Door
triangle(929, -680, 291, 136, 448, 139);

//Outside
    fill(13, 219, 33);
     stroke(0, 0, 0);
      strokeWeight(2);
        arc(427,134,168,101,-179,0);
    fill(38, 38, 38);

//Shadow
noStroke();
fill(13, 13, 13, 75);
ellipse(347,246,66,125);
    ellipse(283,297,66,125);


//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(168+175,207,56,111);

// head
    fill(161, 102, 8);
      ellipse(168+175, 137, 50, 50);

//eyes
    noStroke();
     fill(0, 0, 0);
      ellipse(158+175,129,10,10);
       ellipse(178+175,129,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(168+175,144,20,20,0,180);
      
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(156+175,259,155+175,301);
       line(181+175,259,182+175,301);
        stroke(161, 102, 8);
         line(194+175,174,215+175,241);
          line(143+175,174,123+175,241);
       
     
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(253+29,275,43,85);
// head
    fill(161, 102, 8);
      ellipse(253+29, 220, 40, 40);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(245+29,214,10,10);
      ellipse(261+29,214,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(253+29,228,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(253+29,198,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(239+29,310,239+29,345);
       line(266+29,310,267+29,345);
        stroke(161, 102, 8);
         line(231+29,250,211+29,290);
          line(274+29,250,296+29,290);
};


var drawScene8 = function () {
    currentScene = 8;

//scene 8
background(0, 83, 125);

//Arcade
    stroke(7, 60, 87);
     strokeWeight(7);
      line(154,39,0,0);
       line(154,145,0,261);
        line(326,36,400,7);
         line(326,145,400,227);
         
//Yeeters Claw Machine
noStroke();
fill(255, 145, 0);
    rect(-16,373,304,53,31);
        rect(-77,357,304,31,31);
    fill(255, 255, 255);
    
textSize(18);
text("Yeeters Claw", 37,361,177,196);


//Main Entrance
    fill(26, 232, 235);
     noStroke();
      rect(155,36,172,110);
       stroke(145, 145, 145);
        strokeWeight(5);
         line(154,39,154,145);
          line(155,36,326,36);
           line(326,36,326,145);

//Outside
    fill(13, 219, 33);
     stroke(0, 0, 0);
      strokeWeight(2);
       arc(155,146,178,101,-88,0);
        arc(239,146,168,101,-179,0);
//Sun
         noStroke();
          fill(255, 251, 0);
           ellipse(292,68,35,35);

//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(168,207,56,111);

// head
    fill(161, 102, 8);
      ellipse(168, 137, 50, 50);

//eyes
    noStroke();
     fill(0, 0, 0);
      ellipse(158,129,10,10);
       ellipse(178,129,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(168,144,20,20,0,180);
      
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(156,259,155,301);
       line(181,259,182,301);
        stroke(161, 102, 8);
         line(194,174,215,241);
          line(143,174,123,241);
       
     
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(253,275,43,85);
// head
    fill(161, 102, 8);
      ellipse(253, 220, 40, 40);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(245,214,10,10);
      ellipse(261,214,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(253,228,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(253,198,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(239,310,239,345);
       line(266,310,267,345);
        stroke(161, 102, 8);
         line(231,250,211,290);
          line(274,250,296,290);


//text explaining
textSize(15);
    fill(255, 255, 255);
    
text("You see the people heading to the claw machine you're in.", 10,65,139,183);

};

var drawScene91 = function () {
    currentScene = 91;
//scene 9.1 claws pov 1-4
background(255, 145, 0);


//silver box
noStroke();
    fill(105, 105, 105);
rect(300,300,100,100,1);
 fill(5, 4, 5);
    rect(310,310,90,90,1);
    
//birds eye view of plushies 
//red
 fill(219, 20, 20);
ellipse(102, 148, 100, 100);

  fill(74, 32, 32, 75);
ellipse(102, 148, 74, 74);

    fill(74, 32, 32, 32);
   ellipse(102, 148, 46, 46);
   
 
   
//dark red
 fill(148, 55, 55);
ellipse(153, 41, 100, 100);

  fill(74, 32, 32, 75);
ellipse(153, 41, 74, 74);

    fill(74, 32, 32, 32);
   ellipse(153, 41, 46, 46);
   


//blue
 fill(21, 207, 217);
ellipse(102+44, 148+149, 100, 100);

  fill(33, 72, 74, 75);
ellipse(102+44, 148+149, 74, 74);

    fill(33, 74, 59, 32);
   ellipse(102+44, 148+149, 46, 46);
   


//purple
 fill(158, 21, 217);
ellipse(102+190, 148+-80, 100, 100);

  fill(44, 33, 74, 75);
ellipse(102+190, 148+-80, 74, 74);

    fill(46, 33, 74, 32);
   ellipse(102+190, 148+-80, 46, 46);
   

   
//yellow
 fill(217, 214, 21);
ellipse(102+146, 296+-80, 100, 100);

  fill(65, 74, 33, 75);
ellipse(102+146, 148+69, 74, 74);

    fill(72, 74, 33, 32);
   ellipse(102+146, 148+69, 46, 46);



//maniac
 fill(73, 217, 21);
ellipse(102+-49, 296+48, 100, 100);

  fill(34, 74, 33, 75);
ellipse(102+-49, 148+197, 74, 74);

    fill(36, 74, 33, 32);
   ellipse(102+-49, 148+197, 46, 46);
   
//text explaining
textSize(34);
    fill(255, 255, 255);
   text("(claws pov:)", 17,54,190,100);
   
};

var drawScene92 = function () {
    currentScene = 92;

//scene 9.2 claws pov 2-4
background(255, 145, 0);
    noStroke();

// glimpse of blue
 fill(0, 230, 255);
ellipse(102+351, 296+-320, 100*3, 100*3);

//maniac
    
    
 fill(73, 217, 21);
ellipse(102+95, 296+-81, 100*3, 100*3);

  fill(34, 74, 33, 75);
ellipse(102+95, 148+66, 74*3, 74*3);

    fill(36, 74, 33, 32);
   ellipse(102+95, 148+67, 46*3, 46*3);
   
//text explaining
textSize(23);
    fill(255, 255, 255);
   text("The claw moves towards the maniac.", 17,24,333,174);
   
};

var drawScene93 = function () {
    currentScene = 93;

//scene 9.3 claws pov 3-4
background(255, 145, 0);


//silver box
noStroke();
    fill(105, 105, 105);
rect(300,300,100,100,1);
 fill(5, 4, 5);
    rect(310,310,90,90,1);
    
//birds eye view of plushies 
//red
 fill(219, 20, 20);
ellipse(102, 148, 100, 100);

  fill(74, 32, 32, 75);
ellipse(102, 148, 74, 74);

    fill(74, 32, 32, 32);
   ellipse(102, 148, 46, 46);
   
 
   
//dark red
 fill(148, 55, 55);
ellipse(153, 41, 100, 100);

  fill(74, 32, 32, 75);
ellipse(153, 41, 74, 74);

    fill(74, 32, 32, 32);
   ellipse(153, 41, 46, 46);
   


//blue
 fill(21, 207, 217);
ellipse(102+44, 148+149, 100, 100);

  fill(33, 72, 74, 75);
ellipse(102+44, 148+149, 74, 74);

    fill(33, 74, 59, 32);
   ellipse(102+44, 148+149, 46, 46);
   


//purple
 fill(158, 21, 217);
ellipse(102+190, 148+-80, 100, 100);

  fill(44, 33, 74, 75);
ellipse(102+190, 148+-80, 74, 74);

    fill(46, 33, 74, 32);
   ellipse(102+190, 148+-80, 46, 46);
   

   
//yellow
 fill(217, 214, 21);
ellipse(102+146, 296+-80, 100, 100);

  fill(65, 74, 33, 75);
ellipse(102+146, 148+69, 74, 74);

    fill(72, 74, 33, 32);
   ellipse(102+146, 148+69, 46, 46);



//maniac
 fill(38, 38, 38, 200);
ellipse(200, 188, 100*5, 100*5);
  fill(38, 38, 38, 150);
ellipse(200, 188, 74*6, 74*6);
    fill(38, 38, 38, 200);
   ellipse(200, 188, 46*7, 46*7);
   
   
//text explaining
textSize(18);
    fill(255, 255, 255);
   text("pov: The claw picks the green plushie (maniac) up.", 17,23,190,100);
  
};

var drawScene94 = function() {
    currentScene = 94;
//scene 9.4 claws pov 4-4
background(255, 145, 0);


//silver box
noStroke();
    fill(105, 105, 105);
rect(140,118,316,391,1);
 fill(5, 4, 5);
    rect(147,124,284,279,1);

//maniac
 fill(29, 120, 48, 200);
ellipse(262, 242, 100*2, 100*2);
  fill(38, 38, 38, 150);
ellipse(262, 242, 74*2, 74*2);
    fill(38, 38, 38, 200);
   ellipse(262, 242, 46*2, 46*2);

//glimpse of yellow
 fill(255, 255, 0);
   ellipse(0, -85, 100*3, 100*3);
  fill(133, 133, 126, 75);
    ellipse(-17, -108, 100*3, 100*3);
//text explaining
textSize(18);
    fill(255, 255, 255);
   text("The claw drops the green plushie (maniac) down the box.", 158,23,190,100);
   
};


var drawScene10 = function () {
    currentScene = 10;
background(0,83,125);
//scene 10
//Room Borders
    stroke(7, 60, 87);
     strokeWeight(7); 
      line(0,275,400,275);
       line(0,38,400,38);

//Plushies inside the machine
image(getImage("avatars/duskpin-seedling"), 1, 192, 60, 30);
image(getImage("avatars/piceratops-seedling"), -11, 192, 60, 30);
image(getImage("avatars/primosaur-seedling"), -21, 192, 60, 30);

//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(276,233,56,111);

// head
    fill(161, 102, 8);
      ellipse(276, 162, 50, 50);

//eyes
    noStroke();
     fill(0, 0, 0);
      ellipse(277,156,10,10);
       ellipse(262,156,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      line(275,174,261,174);
      
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(264,287,264,338);
       line(289,287,289,338);
        stroke(161, 102, 8);
         line(298,203,315,272);
          line(250,203,239,274);
       
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(121,275,43,85);
// head
    fill(161, 102, 8);
      ellipse(122, 220, 40, 40);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(109,214,10,10);
      ellipse(121,214,10,10);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(114,228,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(123,198,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(112,316,112,345);
       line(130,316,144,345);
        stroke(161, 102, 8);
         line(103,250,50,284);
          line(140,250,51,290);

//Prize (Maniac)
image(getImage("avatars/leafers-seedling"), 5, 214, 111, 86);
          
//Claw Machine 
noStroke();
    fill(255, 145, 0);
rect(0,114,50,50);
    rect(0,77,35,37);
        rect(0,264,50,50);

//Silver Box
fill(105, 105, 105);

rect(0,214,50,50);

    stroke(66, 63, 66);
strokeWeight(12);
    point(6,317+-92);
        point(40,317+-92);
            point(23,317+-92);

//Boxes Door
    noStroke();
rect(3,267,44,44);

   stroke(66, 63, 66);
strokeWeight(6);

    point(9,317+-45);
     point(41,317+-45);

rect(5, 309, 41, 0, 1);

//Claw
    stroke(255, 255, 255);
     strokeWeight(4);
      line(24,165,24,186);
       line(24,180,35,186);
        line(24,180,14,186);

//Prize Tray
    stroke(0, 0, 0);
     strokeWeight(10);
      line(51,301,66,288);
//text explaining
fill(255, 255, 255);
textSize(15);
text("The son was controlling the claw and chose to get you.",95,78, 159, 100);

};

var drawScene11 = function() {
    currentScene = 11;

//scene 11
//sky
background(14, 79, 79);
noStroke();
//Ground
    fill(19, 138, 8);
     rect(0,316,400,94);
     
//House
    fill(87, 54, 0);
     noStroke(); 
      rect(166,115,164,217);
       rect(330,232,90,100);
        triangle(166,115,253,70,331,115);

//Windows
    fill(82, 227, 217);
     rect(190,152,43,43);
      rect(264,152,43,43);
       stroke(255, 245, 217);
        strokeWeight(4);
         line(190,174,232,174);
          line(264,174,306,174);
           line(286,153,286,194);
            line(213,153,213,194);
             
//Door
    fill(77, 28, 22);
    noStroke();
rect(222, 249,54, 82, 1);
 ellipse(249, 249,54,-47);
    stroke(235, 235, 211);
ellipse(234,283,12,12);

       
//Roof
    stroke(255, 245, 217);
     strokeWeight(8);
      line(166,115,253,70);
       line(253,70,331,115);
       
//Garage Roof
    stroke(255, 245, 217);
     strokeWeight(8);
      line(330,232,397,232);

//Garage Door
    fill(255, 245, 217);
     rect(334,268,65,59);
      stroke(0,0,0);
       strokeWeight(3);
        line(333,280,400,280);
         line(333,299,400,299);
          line(333,318,400,318);
          
//Father and Son
//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(164,311,39,71);

// head
    fill(161, 102, 8);
      ellipse(164, 266, 30, 30);

//eyes
    noStroke();
     fill(0, 0, 0);
      ellipse(174,262,5,5);
       ellipse(165,262,5,5);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(170,271,7,4,0,180);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(7);
      line(157,345,157,365);
       line(172,345,172,365);
        stroke(161, 102, 8);
         line(149,292,134,329);
          line(180,292,198,329);
       
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(87,324,28,49);
// head
    fill(161, 102, 8);
      ellipse(88, 291, 25, 25);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(90,288,5,5);
      ellipse(97,288,5,5);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(93,296,5,5,0,180);

//Hair
    fill(0,0,0);
     ellipse(88,276,21,9);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(5);
      line(80,346,80,360);
       line(93,346,93,360);
        stroke(161, 102, 8);
         line(74,312,63,334);
          line(100,312,113,334);

//Maniac
image(getImage("avatars/leafers-seedling"), 21, 292, 73, 59);

//text explaining
fill(255, 247, 247);
text("It's getting dark and the people that took you are arriving home.",18,58, 158, 100);

};


var drawScene121 = function () {
    currentScene = 121;


//scene 12.1 1-3

background(255, 243, 214);

//walls

noStroke();
    fill(217, 202, 167);
        rect(28,-8,443,100,1);
        
fill(87, 54, 0);
    rect(140, 86, 569, 150, 1);
    
 rect(0, -1, 29, 337, 1);
quad(27, 54, 143, 87, 141, 236, 29, 336);    

fill(59, 40, 7);
 quad(25, 55, 301, 60, 131, 87, 39, 61);    
rect(133,59,171,27,1);
    
//rails 

rect(40, 48, 264, 12, 1);
    rect(25, -1, 19, 57, 1); 
        rect(53, -1, 9, 57, 1);
    rect(73, -1, 9, 57, 1);
rect(93, -1, 9, 57, 1);

 rect(112, -1, 9, 57, 1);
        rect(132, -1, 9, 57, 1);
    rect(153, -1, 9, 57, 1);
rect(173, -1, 9, 57, 1);

        rect(191, -1, 9, 57, 1);
            rect(212, -1, 9, 57, 1);
                rect(231, -1, 9, 57, 1);
                    rect(249, -1, 9, 57, 1);
                        rect(271, -1, 9, 57, 1);
                    rect(290, -1, 9, 57, 1);
                rect(231, -1, 9, 57, 1);
    rect(139, 53, 264, 6, 1);


//rug
    fill(87, 54, 0);
quad(152, 255, 209, 255, 164, 353, 72, 351);   
 fill(250, 243, 218);
    quad(157, 261, 197, 262, 156, 345, 90, 344);  
    
    
//stairs
    noStroke();
 //step1
fill(87, 54, 0);
 rect(181+5*17, 303, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*17, 299, 134, 8,26);

    noStroke();
 //step2
fill(87, 54, 0);
 rect(181+5*18, 303-30, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*18, 299-30, 134, 8,26);

    noStroke();
 //step3
fill(87, 54, 0);
 rect(181+5*19, 303-60, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*19, 299-60, 134, 8,26);
  
    noStroke();
 //step4
fill(87, 54, 0);
 rect(181+5*20, 303-90, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*20, 299-90, 134, 8,26);
  
    noStroke();
 //step5
fill(87, 54, 0);
 rect(181+5*21, 303-120, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*21, 299-120, 134, 8,26);

    noStroke();
 //step6
fill(87, 54, 0);
 rect(181+5*21, 303-150, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*21, 299-150, 134, 8,26);

    noStroke();
 //step7
fill(87, 54, 0);
 rect(181+5*22, 303-180, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*22, 299-180, 134, 8,26);    

    noStroke();
 //step8
fill(87, 54, 0);
 rect(181+5*23, 303-210, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*23, 299-210, 134, 8,26);      
 
    noStroke();
 //step9
fill(87, 54, 0);
 rect(181+5*24, 303-240, 134, 28,1);
 stroke(87, 54, 0);
    strokeWeight(3);
fill(255, 245, 217);
  rect(181+5*24, 299-240, 134, 8,26);     
  
//rails
    stroke(59, 39, 3);//guard rail 1
strokeWeight(7);
line(303, 57, 266, 328);

    stroke(59, 39, 3);//guard rail 2
strokeWeight(7);
line(302, 52, 267, 328); 
        noFill();

// plant

strokeWeight(3);
    fill(77, 28, 22);  
 image(getImage("cute/TreeTall"), 225, 143, 39, 169);
        arc(245, 256, 37, 150, 1, 180);
  
//door
    noStroke();
rect(159, 135,54, 100, 1);
 ellipse(186, 135,54,-47);
    stroke(235, 235, 211);
ellipse(200,177,12,12);

//text explaining 

fill(0, 0, 0);
 textSize(15);
text("kids pov: he goes inside the house", 76, 379, 358, 100);

};



var drawScene122 = function () {
    currentScene = 122;
//scene 12.2 2-3

background(255, 243, 214);


//hallway
 stroke(219, 191, 160);
        strokeWeight(4);
    line(152, 289, 0, 401);

 stroke(219, 191, 160);
        strokeWeight(4);
    line(244, 289, 400, 401);

 stroke(219, 191, 160);
        strokeWeight(4);
    line(152, 132, 0, -1);

 stroke(219, 191, 160);
        strokeWeight(4);
    line(243, 133, 400, 16);

//door
 noStroke();
    fill(99, 70, 24);
rect(150, 130, 94, 159, 1);
 ellipse(197, 130, 92, 10);

stroke(250, 242, 225);
ellipse(230, 207, 16, 16);

//text explaining 

fill(0, 0, 0);
 textSize(22);
text("kids pov: inside the house, heading to his room", 23, 290, 200, 100);

};

var drawScene123 = function () {
    currentScene = 123;

//Scene 12.3

//Boy's Bedroom
//House Wall
background(87, 54, 0);

//Floor
noStroke();
fill(255, 243, 214);
    rect(-1,236,401,200);

//Door
    fill(77, 28, 22);
     rect(247,92,124,144);

//Door Knob
    fill(77, 28, 22);
      stroke(255, 243, 214);
       strokeWeight(7);
     ellipse(353,168,20,20);

//Bed
fill(179, 22, 22);
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(58,337,180,38,1);
    noStroke();
ellipse(76,342,98,39);    
        fill(255, 255, 255);
        
//Bed Legs
    stroke(0, 0, 0);
     strokeWeight(10);
      line(234,377,234,394);
       line(5,377,5,394);
       
// pillow
stroke(0, 0, 0);
strokeWeight(1);
            rect(-113,336,180,38,1);
 ellipse(18,342,98,39);
 
//Window
   fill(14, 79, 79);
     rect(111,96,-68,66);
        stroke(255, 245, 217);
        strokeWeight(4);
         line(78,98,78,160);
          line(45,130,109,130);
          
//Shelf
    fill(87, 54, 0);
    stroke(173, 93, 12);
     rect(156,105,63,133);
      line(156,153,218,153);
       line(156,199,218,199);
       
//Clothes on shelf
    noStroke();
    fill(30, 7, 179);
     arc(187,235,42,44,-180,0);
     fill(208, 0, 255);
     arc(187,197,52,44,-180,0);
     
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(278,275,38,73);
// head
    fill(161, 102, 8);
      ellipse(278, 226, 36, 36);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(277,221,6,6);
      ellipse(267,221,6,6);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(272,232,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(278,207,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(269,308,266,333);
       line(286,312,291,333);
        stroke(161, 102, 8);
         line(263,255,238,284);
          line(292,255,244,290);

//Maniac
image(getImage("avatars/leafers-seedling"), 284, 221, -98, 86);
fill(255, 255, 255);
textSize(15);
text("The boy brings you into his room to put you on his shelf",18,42);

};



var drawScene13 = function () {
    currentScene = 13;
//scene 13
background(255, 243, 214);

//wall

 noStroke();
    fill(87, 54, 0);
rect(-26,-5,520,297,1);

//Shelf
    strokeWeight(4);
    fill(87, 54, 0);
    stroke(173, 93, 12);
     rect(334,160,63,133);
      line(334,208,396,208);
       line(333,253,394,253);
       
//Clothes on shelf
    noStroke();
    fill(30, 7, 179);
     arc(367,291,42,44,-180,0);
     fill(208, 0, 255);
     arc(365,251,52,44,-180,0);
     
//Bed
    fill(179, 22, 22);
    stroke(0, 0, 0);
    strokeWeight(1);
     rect(13,307,98,49);
     fill(255, 255, 255);
     noStroke();
     rect(13,280,100,35);
     stroke(0,0,0);
     ellipse(62,299,96,30);

//Bed Legs
    stroke(0, 0, 0);
     strokeWeight(10);
      line(108,359,108,371);
       line(17,359,17,371);
       
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(278,275,38,73);
// head
    fill(161, 102, 8);
      ellipse(278, 226, 36, 36);
//eyes
    noStroke(); 
    fill(0, 0, 0);
     ellipse(289,221,6,6);
      ellipse(280,221,6,6);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(284,232,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(278,207,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(267,308,266,333);
       line(286,312,291,333);
        stroke(161, 102, 8);
         line(261,255,317,226);
          line(292,255,329,227);

//Maniac
image(getImage("avatars/leafers-seedling"), 419, 125, -98, 86);

fill(255, 255, 255);
textSize(15);
textSize(15);
text("The kid put you on the shelf so you wait till midnight to strike",47,104, 216, 100);
   
};

var drawScene14 = function () {
    currentScene = 14;

//scene 14
background(255, 243, 214);

//wall

 noStroke();
    fill(87, 54, 0);
rect(-26,-5,520,297,1);

//Shelf
    strokeWeight(4);
    fill(87, 54, 0);
    stroke(173, 93, 12);
     rect(334,160,63,133);
      line(334,208,396,208);
       line(333,253,394,253);
       
//Clothes on shelf
    noStroke();
    fill(30, 7, 179);
     arc(367,291,42,44,-180,0);
     fill(208, 0, 255);
     arc(365,251,52,44,-180,0);
     
//Bed
    fill(179, 22, 22);
    stroke(0, 0, 0);
    strokeWeight(1);
     rect(13,307,98,49);
     fill(255, 255, 255);
     noStroke();
     rect(13,280,100,35);
     stroke(0,0,0);
     ellipse(62,299,96,30);

//Bed Legs
    stroke(0, 0, 0);
     strokeWeight(10);
      line(108,359,108,371);
       line(17,359,17,371);
       

//Maniac
image(getImage("avatars/leafers-seedling"), 328, 160, -98, 86);

//Wind lines
    stroke(127, 255, 236);
    strokeWeight(1);
    line(300,215,372,174);
    line(300,199,372,165);
    line(315,220,372,186);

fill(255, 255, 255);
textSize(15);
textSize(11);
text("4 hours later, it is midnight and you jump off the shelf so you can do your thing",6,104);
};

var drawScene15 = function () {
    currentScene = 15;

//scene 15
background(255, 243, 214);

//wall

 noStroke();
    fill(87, 58, 32);
rect(-10,-1,520,281,1);

//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(253+-110,275,43,85);
// head
    fill(161, 102, 8);
      ellipse(253+-102, 220, 40, 40);
//eyes
    noStroke(); 
    fill(0, 0, 0);
      ellipse(261+-101,221,10,10);


//Hair
    fill(0,0,0);
     ellipse(253+-102,198,32,14);

//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(232+-78,310,239+-78,347);
       line(266+-139,310,267+-146,345);
        stroke(161, 102, 8);
         line(224+-100,245,211+-104,286);
          line(277+-112,258,299+-104,244);
           line(288+-112,226,299+-104,244);
           
// maniac


image(getImage("avatars/leafers-seedling"), -20+199, 236, 135, 110);

// details
// knife 
    noStroke();
fill(184, 180, 184);
 rect(-20+235,289,-8,41,41);

// hands
fill(106, 150, 98);
 ellipse(-20+231, 328, 15, 15);
 
//text explaining
//text explaining
    textSize(15);
 fill(255, 255, 255);
text("The kid is confused as you show your true form.", 117, 69, 192, 100); 
 
};

var drawScene161 = function () {
    currentScene = 161;
//scene 16.1 1-2

background(87, 58, 32);

// son
 strokeWeight(5);
    fill(92, 35, 35);
ellipse(159, 182, 91, 163);
// head
    fill(161, 102, 8);
      ellipse(259+-102, 85, 70, 70);
//eyes
    noStroke(); 
    fill(0, 0, 0);
      ellipse(261+-117,83,15,15);
       ellipse(261+-94,81,15,15);
//Smile
    fill(43, 2, 2);
     stroke(0);
      arc(128+29,105,23,18,-190,210);
//Hair
    fill(0,0,0);
     ellipse(127+29,50,57,26);

//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(162+29,245,242+-43,306);
       line(266+-139,244,267+-149,306);
        stroke(161, 102, 8);
         line(231+-33,131,165+55,197);
          line(274+-154,133,296+-198,202);
          
//maniac pov
//knife
noStroke();
 fill(201, 197, 197);
rect(276, 260, 25, 117, 1);
    rect(276, 233, 22, 99, 1);
        rect(288, 219, -12, 117, 1);
            rect(293, 225, -12, 117, 1);
                rect(298, 231, -6, 117, 1);
                    rect(301, 235, -6, 117, 1);

//hand
    fill(50, 125, 51);
noStroke();
    ellipse(304, 364, 90, 90);
    
//text explaining
 fill(255, 255, 255);
    text("(pov: you point the knife at the kid)", 7, 9, 269, 100);
};    


var drawScene162 = function () {
    currentScene = 162;
//scene 16.2 2-2

background(87, 58, 32);

// son
 strokeWeight(5);
    fill(92, 35, 35);
ellipse(159, 182, 91, 163);
// head
    fill(161, 102, 8);
      ellipse(259+-102, 85, 70, 70);
//eyes
    fill(0, 0, 0);
 textSize(25);
  text("X", 130, 72, 100, 100);
   text("X", 160, 72, 100, 100);
//Smile
    fill(43, 2, 2);
     stroke(0);
      arc(128+29,105,23,18,-190,210);
//Hair
    fill(0,0,0);
     ellipse(127+29,50,57,26);

//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(162+29,245,242+-43,306);
       line(266+-139,244,267+-149,306);
        stroke(161, 102, 8);
         line(231+-33,131,165+55,197);
          line(274+-154,133,296+-198,202);
//Blood
    noStroke();
fill(255, 0, 0, 75);
    ellipse(187, 239, 100, 100);
        ellipse(187, 274, 78, 85);
            ellipse(203, 304, 78, 85);
                ellipse(200, 221, 78, 85);
//maniac pov

//hand
    fill(50, 125, 51);
noStroke();
    ellipse(205, 234, 90, 90);
    
//blood
    noStroke();
fill(255, 0, 0, 75);
    ellipse(210, 198, 68, 33);
        ellipse(191, 213, 68, 33);
            ellipse(169, 235, 36, 56);
                ellipse(242, 210, 36, 30);
                
//text explaining
 fill(255, 255, 255);
    text("(pov: you killed the kid)", 7, 9, 269, 100);
};

var drawScene17 = function () {
    currentScene = 17;
//scene 17
background(87, 58, 32);

//window
 noStroke();
 fill(23, 38, 46);
rect(56, 136, 100, 100, 1);
    noFill();
 stroke(255, 255, 255);
 strokeWeight(5);
quad(158, 138, 231, 160, 231, 277, 156, 233);
    line(192, 251, 192, 149);
        line(156, 183, 232, 219);
// pov hand
noStroke();
    fill(71, 112, 77);
ellipse(214, 313, 93, 93);

//text explaining
 fill(255, 255, 255);
    textSize(20);
text("(pov: you hear footsteps so you jump out the window)", 245, 100, 161, 100);

text("*thd thd*", 317, 271, 161, 116);
};

var drawScene18 = function () {
    currentScene = 18;

//scene 18
background(87, 58, 32);

fill(255, 243, 214);

noStroke();
rect(-10, 335, 446, 100, 1);

       
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(180,331,73,38);
// head
    fill(161, 102, 8);
      ellipse(126, 326, 36, 36);
//face
    fill(0, 0, 0);
text("x", 113, 315, 110, 100);
text("x", 113, 326, 110, 100);
    
      

//Hair
    fill(0,0,0);
     ellipse(105,327,14,32);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(216,321,266,333);
       line(215,340,260,350);
        stroke(161, 102, 8);
         line(161,310,213,314);
          line(157,346,208,349);

//blood
 fill(255, 0, 0, 89);
 noStroke();
ellipse(143, 348, 100, 20);
    ellipse(191, 358, 100, 20);
        ellipse(216, 344, 100, 20);
            ellipse(195, 333, 58, 20);
            
//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(276,233,56,111);

// head
    fill(161, 102, 8);
      ellipse(276, 162, 50, 50);

//eyes
    noStroke();
     fill(0, 0, 0);
      ellipse(277,156,10,10);
       ellipse(262,156,10,10);
        fill(0, 247, 255, 90);
         ellipse(277,166,6,10);
          ellipse(278,164,6,10);
//Smile
    fill(161, 102, 8);
     stroke(0);
      line(275,174,270,175);
      
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(264,287,264,338);
       line(289,287,289,338);
        stroke(161, 102, 8);
         line(298,223,305,168);
          line(248,229,247,171);

//text explaining
textSize(30);
    fill(255, 255, 255);
text("The father arrives by the time you leave. You left the house without remorse of what you did.", 25, 26, 379, 169);
};



var drawScene20 = function () {
    currentScene = 20;

//scene 20
background(0, 0, 0);

fill(255, 255, 255);
textSize(38);
text("Directed  Illustrated",111, 62, 168, 357);
text("and",159, 152, 168, 357);
text("by:",167, 189, 168, 357);
text("Sami Mobin",144, 234, 168, 357);

 textSize(15);
text(" Yeeters Inc. 2022",-1, 382, 422, 357);

 textSize(25);
text("Arcade Maniacs.",103, 11, 427, 357);

fill(255, 0, 0);
 textSize(25);
text("[Click again to replay]",82, 351, 427, 357);
};

var drawScene19 = function () {
    currentScene = 19;

//scene 19
background(255, 0, 0);

textSize(80);
text("The End", 40,97);

textSize(20);
text("Cast",180,164);

//Father
//body
    stroke(0,0,0);
     fill(125, 245, 125);
      strokeWeight(3);
       ellipse(100,270,56,111);

// head
    fill(161, 102, 8);
      ellipse(100, 198, 50, 50);

//eyes
fill(0,0,0);
textSize(15);
text("X",86,195);
text("X",105,195);
      
//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(100,205,20,20,0,180);
      
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(88,321,88,363);
       line(114,321,114,363);
        stroke(161, 102, 8);
         line(126,237,153,294);
          line(50,294,76,237);
       
     
//Son
//body
    stroke(0,0,0);
     fill(125, 0, 19);
      strokeWeight(3);
       ellipse(314,283,43,85);
// head
    fill(161, 102, 8);
      ellipse(314, 228, 40, 40);
      
//Eyes
fill(0,0,0);
textSize(15);
text("X",302,229);
text("X",317,229);

//Smile
    fill(161, 102, 8);
     stroke(0);
      arc(315,235,10,10,0,180);

//Hair
    fill(0,0,0);
     ellipse(314,206,32,14);
     
//Arms and Legs
    stroke(0,0,0);
     strokeWeight(10);
      line(304,322,304,348);
       line(323,322,324,348);
        stroke(161, 102, 8);
         line(294,258,272,308);
          line(335,258,360,308);
          
//Maniac
//Maniac
image(getImage("avatars/leafers-seedling"), 316, 243, -183, 157);

fill(0, 0, 0);
textSize(20);
text("Son",293,186);
text("Father",72,165);
text("Maniac",185,251);


};


// animation

mouseClicked = function () {
    if (currentScene === 0) {
        drawScene1();
    } else if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    } else if (currentScene === 4) {
        drawScene5();
    } else if (currentScene === 5) {
        drawScene6();
    } else if (currentScene === 6) {
        drawScene7();
    } else if (currentScene === 7) {
        drawScene8();
    } else if (currentScene === 8) {
        drawScene91();
    } else if (currentScene === 91) {
        drawScene92();
    } else if (currentScene === 92) {
        drawScene93();
    } else if (currentScene === 93) {
        drawScene94();
    } else if (currentScene === 94) {
        drawScene10();
    } else if (currentScene === 10) {
        drawScene11();
    } else if (currentScene === 11) {
        drawScene121();
    } else if (currentScene === 121) {
        drawScene122();
    } else if (currentScene === 122) {
        drawScene123();
    } else if (currentScene === 123) {
        drawScene13();
    } else if (currentScene === 13) {
        drawScene14();
    } else if (currentScene === 14) {
        drawScene15();
    } else if (currentScene === 15) {
        drawScene161();
    } else if (currentScene === 161) {
        drawScene162();
    } else if (currentScene === 162) {
        drawScene17();
    } else if (currentScene === 17) {
        drawScene18();
    } else if (currentScene === 18) {
        drawScene19();
    } else if (currentScene === 19) {
        drawScene20();
    } else if (currentScene === 20) {
        drawScene1();
    }
};          
    
// The End; 2240 Lines