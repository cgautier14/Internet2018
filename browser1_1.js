function BrowserDir2_1(){
    if(repliedtoUncle == true){
        image(dir2_12,0,pos1);
        textSize(15);
        text(name+ ": I'm frankly surprised that you see things this way. Social media has provideded an amazing platform to communicate with people, and if you think communication with others is comparable to heroin, then I don't know what to say to you.Also, people still do real drugs. ",500,pos1+685,500,200)
        replytoUncle_1.hide();
    } else {
        image(dir2_11,0,pos1);
        replytoUncle_1.show();
    }
    fill(100);
    textFont('Helvetica',17);
    text("Welcome, "+name,170,pos1+155);
    
     likeButton1.show();  
    likeButton2.show(); 
    likeButton3.show();
    likeButton4.show();
    likeButton1.position(436,pos1+132);
    likeButton2.position(436,pos1+810);
    likeButton3.position(437,pos1+1397);
    likeButton4.position(436,pos1+1982);
    replytoUncle_1.position(680,pos1+710);
    toolbar.show();
    toolbardirectory.show();
    toolbardirectory.id("browsertooldirectoryclicked");
    toolbargrumbles.show();
    toolbargrumbles.id("browsertoolgrumbles");
    toolbarForum.show();
    toolbarForum.id("browsertool4rum");
    likeButton1.mousePressed(like6);  
    likeButton2.mousePressed(like7); 
    likeButton3.mousePressed(like8); 
    likeButton4.mousePressed(like9);
    
    
    if(chat1_8 == true){
        image(message1_8,950,507);
    }
    else if(chat1_7 == true){
        image(message1_7,950,507);
    }
    else if(chat1_6 == true){
        image(message1_6,950,507);
    }
    else if(chat1_5 == true){
        image(message1_5,950,507);
    }else if(chat1_4 == true){
        image(message1_4,950,507);
    }else if(chat1_3 == true){
        image(message1_3,950,507); 
    }else if(chat1_2 == true){
        image(message1_2,950,507); 
    }else if(chat1_1 == true){
        replyChoiceButton1_1.show();
        replyChoiceButton1_2.show();
        image(message1_1,950,507); 
    }
    

    if (frameCount % 60 == 0 && timerdir2 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerdir2 ++;
  }
    
}

function like6(){
    likesdir2+=5;
    archive.unshift(name+ " liked a somewhat tone-deaf Directory post.");
        likeButton1.id("likebuttonclicked");
}

function like7(){
    
    likesdir2+=5;
    archive.unshift(name+" liked a heartwarming Directory post.");
        likeButton2.id("likebuttonclicked");
    print("it ran");
    setTimeout(chatimage1_1, 5000);
}
function like8(){
    likesdir2+=5;
    archive.unshift(name+" liked a dystopian Directory post.");
        likeButton3.id("likebuttonclicked");
}
function like9(){
    likesdir2+=5;
    archive.unshift(name+" liked a sad Directory post.");
        likeButton4.id("likebuttonclicked");
}



function chatimage1_1(){
    chat1_1 = true;
        replyChoiceButton1_1.position(995,870);
    replyChoiceButton1_2.position(1185,870);
    
}

function chatimage1_3(){
    chat1_3 = true;
}
function chatimage1_5(){
    chat1_5 = true;
    setTimeout(chatimage1_6,2000);
}

function chatimage1_6(){
    chat1_6 = true;
    setTimeout(chatimage1_7,4000);
}

function chatimage1_7(){
    if(noWork == true){
        chat1_8 = true;
    } else{
        chat1_7 = true;
    }
}

function replychoice1_1(){
    archive.unshift(name+" had a nice conversation with their friend.");
    replyChoiceButton1_1.hide();
        replyChoiceButton1_2.hide();
    chat1_2 = true;
    setTimeout(chatimage1_3,2000);
}


function replychoice1_2(){
    archive.unshift(name+" made their friend feel uncomfortable.");
    replyChoiceButton1_1.hide();
        replyChoiceButton1_2.hide();
    chat1_4 = true;
    setTimeout(chatimage1_5,5000);
}

function replyUncle1(){
    archive.unshift(name+ " decided to argue with a distant relative over the internet.");
    repliedtoUncle = true;
}
