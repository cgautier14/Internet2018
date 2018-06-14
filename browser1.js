function BrowserDir1()

{
    image(dir1,0,pos1);
    fill(100);
    textFont('Helvetica',17);
    text("Welcome, " + name,170,pos1+145, 200, 200);
    if(chat9 == true){
        image(message9,950,507);
    }
    else if(chat8 == true){
        image(message8,950,507);
    }
    else if(chat7 == true){
        image(message7,950,507);
    }else if (chat6 == true){
        image(message6,950,507);
    }else if(chat5 == true){
        replyChoiceButton1.show();
        replyChoiceButton2.show();
        image(message5,950,507);
    }else if(chat4 == true){
        image(message4,950,507);
    }else if(chat3 == true){
        image(message3,950,507); 
    }else if(chat2 == true){
        image(message2,950,507); 
    }else if(chat1 == true){
        replyButton1.show();
        image(message1start,950,507); 
    }
    

      likeButton1.show();  
    likeButton2.show(); 
    likeButton3.show();
    likeButton4.show();
    likeButton5.show();
    likeButton1.position(436,pos1+132);
    likeButton2.position(436,pos1+712);
    likeButton3.position(437,pos1+1297);
    likeButton4.position(436,pos1+1877);
    likeButton5.position(436,pos1+2458);
    toolbar.show();
    toolbardirectory.show();
    toolbardirectory.id("browsertooldirectoryclicked");
    toolbargrumbles.show();
    toolbargrumbles.id("browsertoolgrumbles");
    toolbarForum.show();
    toolbarForum.id("browsertool4rum");
    likeButton1.mousePressed(like1);  
    likeButton2.mousePressed(like2); 
    likeButton3.mousePressed(like3); 
    likeButton4.mousePressed(like4);
    likeButton5.mousePressed(like5);
    

    if (frameCount % 60 == 0 && timerdir1 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerdir1 ++;
  }
    
}


function like1(){
    chatstart1 = true;
    likesdir1+=5;
    archive.unshift(name+ " liked a Directory post.");
        likeButton1.id("likebuttonclicked");
    setTimeout(chatimage1, 2000);
}
function like2(){
    likesdir1+=5;
    archive.unshift(name+" was appalled by a Directory post.");
        likeButton2.id("likebuttonclicked");
}
function like3(){
    likesdir1+=5;
    archive.unshift(name+" cooed at a Directory post.");
        likeButton3.id("likebuttonclicked");
}
function like4(){
    likesdir1+=5;
    archive.unshift(name+" was mildly aroused by a Directory post.");
        likeButton4.id("likebuttonclicked");
}
function like5(){
    likesdir1+=5;
    archive.unshift(name+" felt called out personally by a Directory post.");
        likeButton5.id("likebuttonclicked");
}


function chatimage1(){
    chat1 = true;
        replyButton1.position(985,870);
    
}

function reply1(){
    archive.unshift(name+" replied to their friend from high school.");
    chat2 = true;
        replyButton1.hide();
    setTimeout(chatimage2,2000);
}

function chatimage2(){
    chat3 = true;
    setTimeout(chatimage3,2000);
}
function chatimage3(){
    chat4 = true;
    setTimeout(chatimage4,1500);
}
function chatimage4(){
    chat5 = true;
    replyChoiceButton1.position(995,870);
    replyChoiceButton2.position(1185,870);
}


function replychoice1(){
    archive.unshift(name+" told their friend they have a job lined up.");
    replyChoiceButton1.hide();
        replyChoiceButton2.hide();
    chat6 = true;
    setTimeout(chatimage7,2000);
    
}

function chatimage7(){
    chat7 = true;
}

function replychoice2(){
    noWork = true;
    archive.unshift(name+" told their friend they don't have a job lined up.");
    replyChoiceButton1.hide();
        replyChoiceButton2.hide();
    chat8 = true;
    setTimeout(chatimage9,2000);
}

function chatimage9(){
    chat9 = true;
}

