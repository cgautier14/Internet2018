function BrowserGrm1()

{
 
image(grm1,0,pos2);
    toolbar.show();
    toolbardirectory.show();
    toolbardirectory.id("browsertooldirectory");
    toolbargrumbles.show();
    toolbargrumbles.id("browsertoolgrumblesclicked");
    toolbarForum.show();
    toolbarForum.id("browsertool4rum");
    heartButton1.show();
    heartButton2.show();
    heartButton3.show();
    heartButton4.show();
    heartButton1.position(755,pos2+130);
    heartButton2.position(755,pos2+1423);
    heartButton3.position(755,pos2+2501);
    heartButton4.position(755,pos2+3752);
    heartButton1.mousePressed(heart1);
    heartButton2.mousePressed(heart2);
    heartButton3.mousePressed(heart3);
    heartButton4.mousePressed(heart4);
    
    if (frameCount % 60 == 0 && timergrm1 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timergrm1 ++;
  }
}

function heart1(){
    archive.unshift(name+" hearted a Grumbles post.");
    heartButton1.id("heartbuttonclicked");
    likesgrm1+=5;
}
function heart2(){
    archive.unshift(name+" hearted a Grumbles post.");
    
    heartButton2.id("heartbuttonclicked");
    likesgrm1+=5;
}
function heart3(){
    archive.unshift(name+" hearted a Grumbles post.");
    
    heartButton3.id("heartbuttonclicked");
    likesgrm1+=5;
}
function heart4(){
    archive.unshift(name+" hearted a Grumbles post.");
    
    heartButton4.id("heartbuttonclicked");
    likesgrm1+=5;
}