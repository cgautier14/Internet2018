function BrowserDir2_2(){
    if(repliedtoUncle == true){
        image(dir2_22,0,pos1);
        textSize(15);
        text(name+ ": Is this what you think of people who stand up for social justice? If you actually learned something about social justice you would know that many of the people fighting for it have BEEN homeless, especially in LGBT and disabled communities. Educate yourself." ,500,pos1+685,500,200)
        replytoUncle_1.hide();
    } else {
        image(dir2_21,0,pos1);
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
    likeButton1.mousePressed(like10);  
    likeButton2.mousePressed(like11); 
    likeButton3.mousePressed(like12); 
    likeButton4.mousePressed(like13);
    
    
    if(chat2_8 == true){
        image(message2_8,950,507);
    }
    else if(chat2_7 == true){
        image(message2_7,950,507);
    }
    else if(chat2_6 == true){
        image(message2_6,950,507);
    }
    else if(chat2_5 == true){
        image(message2_5,950,507);
    }else if(chat2_4 == true){
        image(message2_4,950,507);
    }else if(chat2_3 == true){
        image(message1_3,950,507); 
    }else if(chat2_2 == true){
        image(message1_2,950,507); 
    }else if(chat2_1 == true){
        replyChoiceButton2_1.show();
        replyChoiceButton2_2.show();
        image(message1_1,950,507); 
    }
    

    if (frameCount % 60 == 0 && timerdir2 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerdir2 ++;
  }
    
}

function like10(){
    likesdir2+=5;
    archive.unshift(name+ " liked a somewhat tone-deaf Directory post.");
        likeButton1.id("likebuttonclicked");
}
function like11(){
    likesdir2+=5;
    archive.unshift(name+" liked a heartwarming Directory post.");
        likeButton2.id("likebuttonclicked");
    setTimeout(chatimage2_1, 5000);
}
function like12(){
    likesdir2+=5;
    archive.unshift(name+" liked a dystopian Directory post.");
        likeButton3.id("likebuttonclicked");
}
function like13(){
    likesdir2+=5;
    archive.unshift(name+" liked a sad Directory post.");
        likeButton4.id("likebuttonclicked");
}



function chatimage2_1(){
    chat2_1 = true;
        replyChoiceButton2_1.position(995,870);
    replyChoiceButton2_2.position(1185,870);
    
}

function chatimage2_3(){
    chat2_3 = true;
}
function chatimage2_5(){
    chat2_5 = true;
    setTimeout(chatimage2_6,2000);
}

function chatimage2_6(){
    chat2_6 = true;
    setTimeout(chatimage2_7,4000);
}

function chatimage2_7(){
    if(noWork == true){
        chat2_8 = true;
    } else{
        chat2_7 = true;
    }
}

function replychoice2_1(){
    archive.unshift(name+" had a nice conversation with their friend.");
    replyChoiceButton2_1.hide();
        replyChoiceButton2_2.hide();
    chat2_2 = true;
    setTimeout(chatimage2_3,2000);
}

function replychoice2_2(){
    archive.unshift(name+" schooled their friend on inequality.");
    replyChoiceButton2_1.hide();
        replyChoiceButton2_2.hide();
    chat2_4 = true;
    setTimeout(chatimage2_5,5000);
}

