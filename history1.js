function History1()

{
    hist1.autoplay(true);
    hist1.muted = true;
    hist1.show();

}

function hist1Finished(elt){
    historyButton.id("btnhistorynotyet");
    hist1.remove();
    historyButton.mousePressed(doNothing);
    screen = 2;
}

function History1_1(){
    
    if(max(dircount1,grmcount1,rumcount1) == rumcount1){
        rumRound1 = true;
        hist1_3.autoplay(true);
    hist1_3.show();
    } else if(max(dircount1,grmcount1,rumcount1) == grmcount1){
        grmRound1 = true;
        hist1_2.autoplay(true);
    hist1_2.show();
    } else{
        dirRound1 = true;
        hist1_1.autoplay(true);
    hist1_1.show();
    }
    
}

function hist1_1finished(elt){
    historyButton.id("btnhistorynotyet");
    hist1_1.hide();
    hist1_2.hide();
    hist1_3.hide();
    likeButton1.id("likebutton");  
    likeButton2.id("likebutton");
    likeButton3.id("likebutton");
    likeButton4.id("likebutton");
    
    heartButton1.id("heartbutton");  
    heartButton2.id("heartbutton");
    heartButton3.id("heartbutton");
    heartButton4.id("heartbutton");
    
    upButton1.id("upbutton");  
    upButton2.id("upbutton");
    upButton3.id("upbutton");
    upButton4.id("upbutton");
    
    pos1 = 35;
    pos2 = 35;
    pos3 = 35;
    
    historyButton.mousePressed(doNothing);
    screen = 12;
}

function History2(){
    
    if(max(dircount2,grmcount2,rumcount2) == rumcount2){
        rumRound2 = true;
        hist2_3.autoplay(true);
    hist2_3.show();
    } else if(max(dircount2,grmcount2,rumcount2) == grmcount2){
        grmRound2 = true;
        hist2_2.autoplay(true);
    hist2_2.show();
    } else{
        dirRound2 = true;
        hist2_1.autoplay(true);
    hist2_1.show();
    }
    
}

function Ending(){
        ending.autoplay(true);
    ending.show();
}

function hist2finished(elt){
    historyButton.id("btnhistorynotyet");
    hist2_1.hide();
    hist2_2.hide();
    hist2_3.hide();
    likeButton1.id("likebutton");  
    likeButton2.id("likebutton");
    likeButton3.id("likebutton");
    likeButton4.id("likebutton");
    
    heartButton1.id("heartbutton");  
    heartButton2.id("heartbutton");
    heartButton3.id("heartbutton");
    heartButton4.id("heartbutton");
    
    upButton1.id("upbutton");  
    upButton2.id("upbutton");
    upButton3.id("upbutton");
    upButton4.id("upbutton");
    
    pos1 = 35;
    pos2 = 35;
    pos3 = 35;
    
    historyButton.mousePressed(doNothing);
    screen = 19;
}

function endingfinished(elt){
    ending.hide();
    HideAllTheLikes();
    erase();
    setTimeout(goToIntro,2000);
    
}

function doNothing(){}