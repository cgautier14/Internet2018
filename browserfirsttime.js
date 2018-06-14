function BrowserFirstTime(){
    image(browserfirst,0,0);
}

function BrowserIcons() {
    image(browserplain,0,0);
}

function reopenWindows(){
    HideAllTheLikes();
    screen = 4;
}

function dontReopenWindows(){
        if(dirRound2 == true || grmRound2 == true || rumRound2 == true) {
            print("dontreopenwindows")
            HideAllTheLikes();
            fill(0);
    stroke(0);
    rect(0,0, width, height);
            screen = 20;
        } else{
            HideAllTheLikes();
    dirIcon.show();
    grmIcon.show();
    rumIcon.show();
    screen = 8;
            
        }

}

function toolBarDirectory(){
    HideAllTheLikes();
archive.unshift(name+" visited The Directory.\n");
    if(rumRound1 == true){
        screen = 15;
    } else if (grmRound1 == true){
        screen = 14;
    }else if (dirRound1 == true){
        screen = 13;
    } else{
     screen = 4;   
    }
}

function toolBarGrumbles(){
    HideAllTheLikes();
archive.unshift(name+" visited Grumbles.\n");
    
    
    if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        print("something");
        screen = 16;
    } else{
     screen = 5;  
    }
}

function toolBarForum(){
    HideAllTheLikes();
archive.unshift(name+" visited The Forum.\n");
        if(rumRound1 == true || dirRound1 == true|| grmRound1 == true){
        print("something");
        screen = 17;
    } else{
     screen = 6;  
    }
}