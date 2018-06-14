function Exit(){
    if(resetting == true){
       image(exiting, 0, 0); 
        exityes.hide();
    exitno.hide();
        
    } else {
       image(exitprompt, 0, 0); 
    }
}

function reset(){
    resetting = true;
    archive.unshift(name+" decided to 'clear their history.' Lol.");
    HideAllTheLikes();
    erase();
    setTimeout(goToIntro,2000);
}

function goToIntro(){
    resetting = false;
    input.show();
    button.show();
    screen = 1;
}

function erase(){
    pos1 = 35;
    pos2 = 35;
    pos3 = 35;
    
    chat1 = false;
    chat2 = false;
    chat3 = false;
    chat4 = false;
    chat5 = false;
    chat6 = false;
    chat7 = false;
    chat8 = false;
    chat9 = false;
    noWork = false;

chat1_1 = false;
chat1_2 = false;
chat1_3 = false;
chat1_4 = false;
chat1_5 = false;
    
    chat2_1 = false;
chat2_2 = false;
chat2_3 = false;
chat2_4 = false;
chat2_5 = false;
chat2_6 = false;
chat2_7 = false;
chat2_8 = false;
    
 chat3_1 =false;
chat3_2 =false;
chat3_3 =false;
chat3_4 =false;
chat3_5 =false;
chat3_6 =false;
chat3_7 =false;
    
Round1Finished = false;
Round2Finished = false;

timerdir1 = 0;
timergrm1 = 0;
timerfrm1 = 0;

timerdir2 = 0;
timergrm2 = 0;
timerfrm2 = 0;

likesdir1 = 0;
likesgrm1 = 0;
likesfrm1 = 0;

likesdir2 = 0;
likesgrm2 = 0;
likesfrm2 = 0;

dircount1 = 0;
grmcount1 = 0;
rumcount1 = 0;

dircount2 = 0;
grmcount2 = 0;
rumcount2 = 0;


dircounttotal = 0;
grmcounttotal = 0;
rumcounttotal = 0;

accessed = false;
    resetting = false;
    
    Round1Finished = false;
    Round2Finished = false;
    dirRound1 = false;
    grmRound1 = false;
    rumRound1 = false;
    dirRound2 = false;
    grmRound2 = false;
    rumRound2 = false;
repliedtoUncle = false;
historyButton.id("btnhistory");
    historyButton.mousePressed(openHistory);
    
    

    likeButton1.id("likebutton");

    likeButton2.id("likebutton");

    likeButton3.id("likebutton");

    likeButton4.id("likebutton");

    likeButton5.id("likebutton");
    
    heartButton1.id("heartbutton");
    
    heartButton2.id("heartbutton");
    
    heartButton3.id("heartbutton");
    
    heartButton4.id("heartbutton");
    
    upButton1.id("upbutton");
    
    upButton2.id("upbutton");

    upButton3.id("upbutton");
    
    upButton4.id("upbutton");

    accessed = false;
    
    browserButton.mousePressed(openBrowser);
    
    hist1 = createVideo("Assets/HISTORYOFINTERNET1.mp4"); 
    hist1.id("History");
    hist1.onended(hist1Finished);
    hist1.hide();
    
    
    hist1_1 = createVideo("Assets/Directory1.mp4"); 
    hist1_1.id("History");
    hist1_1.onended(hist1_1finished);
    hist1_1.hide();
    
    hist1_2 = createVideo("Assets/Grumble1.mp4"); 
    hist1_2.id("History");
    hist1_2.onended(hist1_1finished);
    hist1_2.hide();
    
    hist1_3 = createVideo("Assets/Forum1.mp4"); 
    hist1_3.id("History");
    hist1_3.onended(hist1_1finished);
    hist1_3.hide();
    
    
    hist2_1 = createVideo("Assets/Directory2.mp4"); 
    hist2_1.id("History");
    hist2_1.onended(hist2finished);
    hist2_1.hide();
    
    hist2_2 = createVideo("Assets/Grumble2.mp4"); 
    hist2_2.id("History");
    hist2_2.onended(hist2finished);
    hist2_2.hide();
    
    hist2_3 = createVideo("Assets/Forum2.mp4"); 
    hist2_3.id("History");
    hist2_3.onended(hist2finished);
    hist2_3.hide();
    
    ending = createVideo("Assets/FinalVideo.mp4"); 
    ending.id("History");
    ending.onended(endingfinished);
    ending.hide();
}