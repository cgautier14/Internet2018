function BrowserDir2_3(){
    if(repliedtoUncle == true){
        image(dir2_32,0,pos1);
        textSize(15);
        text(name+ ": Actually, if you were to read about it you would know that this the fight is about the ethics of gaming journalism... It's difficult for normies to understand the severity of the matter, but you should look upon the people defending your freedom of speech with more respect." ,500,pos1+685,500,200)
        replytoUncle_1.hide();
    } else {
        image(dir2_31,0,pos1);
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
    likeButton1.mousePressed(like14);  
    likeButton2.mousePressed(like15); 
    likeButton3.mousePressed(like16); 
    likeButton4.mousePressed(like17);
    
    
    if(chat3_7 == true){
        image(message3_7,950,507);
    }
    else if(chat3_6 == true){
        image(message3_6,950,507);
    }
    else if(chat3_5 == true){
        image(message3_5,950,507);
    }else if(chat3_4 == true){
        image(message3_4,950,507);
    }else if(chat3_3 == true){
        image(message1_3,950,507); 
    }else if(chat3_2 == true){
        image(message1_2,950,507); 
    }else if(chat3_1 == true){
        replyChoiceButton3_1.show();
        replyChoiceButton3_2.show();
        image(message1_1,950,507); 
    }
    

    if (frameCount % 60 == 0 && timerdir2 < 90) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerdir2 ++;
  }
    
}

function like14(){
    likesdir2+=5;
    archive.unshift(name+ " liked a somewhat tone-deaf Directory post.");
        likeButton1.id("likebuttonclicked");
}
function like15(){
    likesdir2+=5;
    archive.unshift(name+" liked a heartwarming Directory post.");
        likeButton2.id("likebuttonclicked");
    setTimeout(chatimage3_1, 5000);
}
function like16(){
    likesdir2+=5;
    archive.unshift(name+" liked a dystopian Directory post.");
        likeButton3.id("likebuttonclicked");
}
function like17(){
    likesdir2+=5;
    archive.unshift(name+" liked a sad Directory post.");
        likeButton4.id("likebuttonclicked");
}



function chatimage3_1(){
    chat3_1 = true;
        replyChoiceButton3_1.position(995,870);
    replyChoiceButton3_2.position(1185,870);
    
}

function chatimage3_3(){
    chat3_3 = true;
}

function chatimage3_5(){
    chat3_5 = true;
    setTimeout(chatimage3_6,2000);
}

function chatimage3_6(){
    chat3_6 = true;
    setTimeout(chatimage3_7,4000);
}

function chatimage3_7(){

        chat3_7 = true;
}

    function replychoice3_1(){
    archive.unshift(name+" had a nice conversation with their friend.");
    replyChoiceButton3_1.hide();
        replyChoiceButton3_2.hide();
    chat3_2 = true;
    setTimeout(chatimage3_3,2000);
}


function replychoice3_2(){
    archive.unshift(name+" unleashed their fascist powerlevels.");
    replyChoiceButton3_1.hide();
        replyChoiceButton3_2.hide();
    chat3_4 = true;
    setTimeout(chatimage3_5,5000);
}
    