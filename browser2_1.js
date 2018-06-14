function BrowserGrm2()

{
 
image(grm2,0,pos2);
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
    heartButton1.position(755,pos2+130);
    heartButton2.position(755,pos2+1245);
    heartButton3.position(755,pos2+2001);
    heartButton1.mousePressed(heart5);
    heartButton2.mousePressed(heart6);
    heartButton3.mousePressed(heart7);
    
    if (frameCount % 60 == 0 && timergrm2 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timergrm2 ++;
  }
}

function heart5(){
    archive.unshift(name+" hearted a snarky takedown Grumbles post.");
    heartButton1.id("heartbuttonclicked");
    likesgrm2+=5;
}
function heart6(){
    archive.unshift(name+" hearted a weird dystopian Grumbles post.");
    
    heartButton2.id("heartbuttonclicked");
    likesgrm2+=5;
}
function heart7(){
    archive.unshift(name+" hearted a fight on Grumbles.");
    
    heartButton3.id("heartbuttonclicked");
    likesgrm2+=5;
}