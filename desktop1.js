function Desktop1(){
   
        image(desktop1, 0, 0);
    
    button.hide();
        input.hide();
    toolbar.hide();
    toolbardirectory.hide();
    toolbargrumbles.hide();
    toolbarForum.hide();
    likeButton1.hide();
        browserButton.show();
        personalButton.show();
        historyButton.show();
    exitButton.show();
    
    
}

function openPersonal() {
    HideAllTheLikes();
    if(accessed == false){
     buttonPersonal.show();
    inputPersonal.show();   
    }
    buttonPersonalClose.show();
    screen = 3;
}

function openBrowser() {
    HideAllTheLikes();
    browserYes.show();
    browserNo.show();
    screen = 7;
}

function openHistory() {
    fill(0);
    stroke(0);
    rect(0,0, width, height);
    HideAllTheLikes();
    if (Round2Finished == true){
        screen = 18;
    }
    else if(Round1Finished == true){
        screen = 10;
    }else{
        screen  = 9;
    }
}

function openExit() {
    HideAllTheLikes();
    exityes.show();
    exitno.show();
    screen = 11;
}

function closePersonal(){
    HideAllTheLikes();
    if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        screen = 12;
    } else {
       screen = 2; 
    }
}

function turnOffBrowser(){
    archive.unshift(name+" closed the browser.");
    HideAllTheLikes();
    if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        Round2Finished = true;
    }
    Round1Finished = true;
    dircount1 = likesdir1+timerdir1;
    grmcount1 = likesgrm1+timergrm1;
    rumcount1 = likesfrm1+timerfrm1;
    
    dircount2 = likesdir2+timerdir2;
    grmcount2 = likesgrm2+timergrm2;
    rumcount2 = likesfrm2+timerfrm2;
    
    historyButton.mousePressed(openHistory);
    historyButton.id("btnhistory");
    if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        screen = 12;
    } else {
       screen = 2; 
    }
}

function exitclose(){
    archive.unshift(name+" decided not to clear their history. Hmm.");
    HideAllTheLikes();
    if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        screen = 12;
    } else {
       screen = 2; 
    }
}