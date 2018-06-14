function BrowserRum1()

{

image(rum1,0,pos3);
    upButton1.show();
    upButton2.show();
    upButton3.show();
    upButton4.show();
    
    upButton1.position(850,pos3+530);
    upButton2.position(850,pos3+1613);
    upButton3.position(850,pos3+2485);
    upButton4.position(850,pos3+3375);
    
    upButton1.mousePressed(up1);
    upButton2.mousePressed(up2);
    upButton3.mousePressed(up3);
    upButton4.mousePressed(up4);
    
    toolbar.show();
    toolbardirectory.show();
    toolbardirectory.id("browsertooldirectory");
    toolbargrumbles.show();
    toolbargrumbles.id("browsertoolgrumbles");
    toolbarForum.show();
    toolbarForum.id("browsertool4rumclicked");
    if (frameCount % 60 == 0 && timerfrm1 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerfrm1 ++;
  }

}

function up1(){
    archive.unshift(name+" upped a mildly misogynist 4rum post.");
    upButton1.id("upbuttonclicked");
    likesfrm1+=5;
}
function up2(){
    archive.unshift(name+" upped a 4rum post.");
    upButton2.id("upbuttonclicked");
    likesfrm1+=5;
}
function up3(){
    archive.unshift(name+" upped a 4rum post.");
    upButton3.id("upbuttonclicked");
    likesfrm1+=5;
}
function up4(){
    archive.unshift(name+" is just here for the meme cats.");
    upButton4.id("upbuttonclicked");
    likesfrm1+=5;
}