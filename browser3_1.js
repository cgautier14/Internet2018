function BrowserRum2()

{

image(rum2,0,pos3);
    upButton1.show();
    upButton2.show();
    upButton3.show();
    upButton4.show();
    
    upButton1.position(850,pos3+530);
    upButton2.position(850,pos3+1655);
    upButton3.position(870,pos3+2695);
    upButton4.position(870,pos3+4330);
    
    upButton1.mousePressed(up5);
    upButton2.mousePressed(up6);
    upButton3.mousePressed(up7);
    upButton4.mousePressed(up8);
    
    toolbar.show();
    toolbardirectory.show();
    toolbardirectory.id("browsertooldirectory");
    toolbargrumbles.show();
    toolbargrumbles.id("browsertoolgrumbles");
    toolbarForum.show();
    toolbarForum.id("browsertool4rumclicked");
    if (frameCount % 60 == 0 && timerfrm2 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerfrm2 ++;
  }

}

function up5(){
    archive.unshift(name+" upped a 4rum post.");
    upButton1.id("upbuttonclicked");
    likesfrm1+=5;
}
function up6(){
    archive.unshift(name+" upped a 4rum post.");
    upButton2.id("upbuttonclicked");
    likesfrm1+=5;
}
function up7(){
    archive.unshift(name+" upped a 4rum post.");
    upButton3.id("upbuttonclicked");
    likesfrm1+=5;
}
function up8(){
    archive.unshift(name+" upped a 4rum post.");
    upButton3.id("upbuttonclicked");
    likesfrm1+=5;
}