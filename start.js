
var startscreen;
var desktop1;

var personal;
var personalopened;
var accessed;

var toolbardir;
var toolbargrm;
var toolbarrum;

 
var rum1;
var grm1;
var dir1;

var dir2_11;
var dir2_12;
var dir2_21;
var dir2_22;
var dir2_31;
var dir2_32;

var rum2;
var grm2;

var hist1;
var hist1clicked;

var archive = []; // array 
var index = 0;

var screen;
var pos1;
var pos2;
var pos3;
var input, button;
var name = "Anonymous";
var loggedin;

var browserfirst;
var browserplain;
var dirIcon;
var grmIcon;

var likeButton1;
var likeButton2;
var likeButton3;
var likeButton4;
var likeButton5;



var chat1;
var chat2;
var chat3;
var chat4;
var chat5;
var chat6;
var chat7;
var message1start;
var message2;
var message3;
var message4;
var message5;
var message6;
var message7;
var message8;
var message9;
var noWork;

var chat1_1;
var chat1_2;
var chat1_3;
var chat1_4;
var chat1_5;

var message1_1;
var message1_2;
var message1_3;
var message1_4;
var message1_5;
var message1_6;
var message1_7;
var message1_8;


var chat2_1;
var chat2_2;
var chat2_3;
var chat2_4;
var chat2_5;
var chat2_6;
var chat2_7;
var chat2_8;
var message2_4
var message2_5;
var message2_6;
var message2_7;
var message2_8;

var chat3_1;
var chat3_2;
var chat3_3;
var chat3_4;
var chat3_5;
var chat3_6;
var chat3_7;
var message3_4;
var message3_5;
var message3_6;
var message3_7;


var heartButton1;
var heartButton2;
var heartButton3;
var heartButton4;

var upButton1;
var upButton2;
var upButton3;
var upButton4;

var exitprompt;
var exitbutton;
var exityes;
var exitno;
var exiting;

var resetting;

var Round1Finished;
var Round2Finished;

let timerdir1 = 0;
let timergrm1 = 0;
let timerfrm1 = 0;

let timerdir2 = 0;
let timergrm2 = 0;
let timerfrm2 = 0;

var likesdir1 = 0;
var likesgrm1 = 0;
var likesfrm1 = 0;

var likesdir2 = 0;
var likesgrm2 = 0;
var likesfrm2 = 0;

var dircount1 = 0;
var grmcount1 = 0;
var rumcount1 = 0;

var dircount2 = 0;
var grmcount2 = 0;
var rumcount2 = 0;


var dircounttotal = 0;
var grmcounttotal = 0;
var rumcounttotal = 0;

var dirRound1;
var grmRound1;
var rumRound1;

var dirRound2;
var grmRound2;
var rumRound2;

var desktop2_1;
var desktop2_2;
var desktop2_3;

var replytoUncle_1;
var repliedtoUncle;

function preload()
{

  startscreen = loadImage("Assets/INTERNETLoginScreen.png");
    desktop1 = loadImage("Assets/InterwebsDesktop.png");
    desktop2_1 = loadImage("Assets/InterwebsDesktop1_Dir.png");
    desktop2_2 = loadImage("Assets/InterwebsDesktop1_Grm.png");
    desktop2_3 = loadImage("Assets/InterwebsDesktop1_Rum.png");
    desktop3_1 = loadImage("Assets/InterwebsDesktop2_Dir.png");
    desktop3_2 = loadImage("Assets/InterwebsDesktop2_Grm.png");
    desktop3_3 = loadImage("Assets/InterwebsDesktop2_Rum.png");
    personal = loadImage("Assets/INTERNET2018Personal.png");
    personalopened = loadImage("Assets/INTERNET2018PersonalOpened.png");
    browserfirst = loadImage("Assets/browser1sttime.png");
    browserplain = loadImage("Assets/browserplain.png");
    rum1 = loadImage("Assets/4CHANPAGE1.png");
grm1 = loadImage("Assets/TUMBLRPAGE1.png");
    rum2 = loadImage("Assets/4CHANPAGE2.png");
grm2 = loadImage("Assets/TUMBLRPAGE2.png");
dir1 = loadImage("Assets/FACEBOOKPAGE1.png");    
dir2_11 = loadImage("Assets/FACEBOOKPAGE2_1.png");
    dir2_12 = loadImage("Assets/FACEBOOKPAGE2_12.png");
    dir2_21 = loadImage("Assets/FACEBOOKPAGE2_21.png");
    dir2_22 = loadImage("Assets/FACEBOOKPAGE2_22.png");
    dir2_31 = loadImage("Assets/FACEBOOKPAGE2_31.png");
    dir2_32 = loadImage("Assets/FACEBOOKPAGE2_32.png");
message1start = loadImage("Assets/FriendChat1.png");
message2 = loadImage("Assets/friendchat2.png");
    message3 = loadImage("Assets/friendchat3.png");
    message4 = loadImage("Assets/friendchat4.png");
    message5 = loadImage("Assets/friendchat5.png");
message6 = loadImage("Assets/friendchatchoice1.png");
    message7 = loadImage("Assets/friendchatchoice1_1.png");
    message8= loadImage("Assets/friendchatchoice2.png");
    message9 = loadImage("Assets/friendchatchoice2_1.png");
    
    message1_1 = loadImage("Assets/FriendChat2_1_1.png");
message1_2 =  loadImage("Assets/FriendChat2_1_2.png");
message1_3=  loadImage("Assets/FriendChat2_1_3.png");
message1_4 =  loadImage("Assets/FriendChat2_1_4.png");
message1_5 =  loadImage("Assets/FriendChat2_1_5.png");
message1_6 =  loadImage("Assets/FriendChat2_1_6.png");
message1_7 =  loadImage("Assets/FriendChat2_1_7.png");
message1_8 =  loadImage("Assets/FriendChat2_1_8.png");
    
        message2_4 = loadImage("Assets/FriendChat2_2_2.png");
message2_5 =  loadImage("Assets/FriendChat2_2_3.png");
message2_6=  loadImage("Assets/FriendChat2_2_4.png");
message2_7 =  loadImage("Assets/FriendChat2_2_5.png");
message2_8 =  loadImage("Assets/FriendChat2_3_6.png");
    
    message3_4 = loadImage("Assets/FriendChat2_3_2.png");
message3_5 =  loadImage("Assets/FriendChat2_3_3.png");
message3_6=  loadImage("Assets/FriendChat2_3_4.png");
message3_7 =  loadImage("Assets/FriendChat2_3_5.png");

    
    
    exitprompt = loadImage("Assets/INTERNET2018Exit.png");
    exiting = loadImage("Assets/INTERNET2018HAHAExit.png");
}

function setup()
{
    
    
    
    createCanvas(windowWidth, windowHeight);
    screen = 1;
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
    chat1_6 = false;
    chat1_7 = false;
    chat1_8 = false;
    
    chat2_4 = false;
    chat2_5 = false;
    chat2_6 = false;
    chat2_7 = false;
    chat2_8 = false;
    
    chat3_4 = false;
    chat3_5 = false;
    chat3_6 = false;
    chat3_7 = false;
    chat3_8 = false;
    
    
    repliedtoUncle = false;
    
        input = createInput();
input.class("inputname");     
  input.position(465,432);
button = createButton('Log In');
loggedin = false;
button.class("btn1");
  button.position(675,550);
    button.mousePressed(login);
    
    
            inputPersonal = createInput();
inputPersonal.class("inputname");     
  inputPersonal.position(465,385);
buttonPersonal = createButton('Enter');


buttonPersonal.class("btn1");
  buttonPersonal.position(675,550);
    buttonPersonal.mousePressed(accessArchive);
    
        buttonPersonalClose = createButton("");
        buttonPersonalClose.id("btnpersonalclose");
    buttonPersonalClose.mousePressed(closePersonal);
    
    
    browserYes = createButton("Yes");
    browserYes.position(555,520);
        browserYes.class("btn1");
    browserYes.mousePressed(reopenWindows);
    
    browserNo = createButton("No");
    browserNo.position(850,520);
        browserNo.class("btn1");
    browserNo.mousePressed(dontReopenWindows);
    
    dirIcon = createButton("");
        dirIcon.id("icondir");
    dirIcon.mousePressed(toolBarDirectory);
    
    grmIcon = createButton("");
        grmIcon.id("icongrm");
    grmIcon.mousePressed(toolBarGrumbles);
    
    rumIcon = createButton("");
        rumIcon.id("iconrum");
    rumIcon.mousePressed(toolBarForum);
    
    browserButton = createButton("");
        browserButton.id("btnbrowse");
        personalButton = createButton("");
        personalButton.id("btnpersonal");
        
        historyButton = createButton("");
        historyButton.id("btnhistory");
    historyButton.mousePressed(openHistory);
  personalButton.mousePressed(openPersonal);
  browserButton.mousePressed(openBrowser);
    
    exitButton = createButton("");
        exitButton.id("btnexit");
    exitButton.mousePressed(openExit);
    
    exityes = createButton("Yes");
    exityes.position(475,520);
        exityes.class("btn1");
    exityes.mousePressed(reset);
    
    exitno = createButton("No");
    exitno.position(850,520);
        exitno.class("btn1");
    exitno.mousePressed(exitclose);
    
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
    
    
    
    likeButton1 = createButton("");
    likeButton1.id("likebutton");
    
    likeButton2 = createButton("");
    likeButton2.id("likebutton");
    
    likeButton3 = createButton("");
    likeButton3.id("likebutton");
    
    likeButton4 = createButton("");
    likeButton4.id("likebutton");
    
    likeButton5 = createButton("");
    likeButton5.id("likebutton");
    
    
    replyButton1 = createButton("Reply");
    replyButton1.id("chatreply");
    replyButton1.mousePressed(reply1);

    replyChoiceButton1 = createButton("Of course!");
    replyChoiceButton1.id("chatchoicenormal");
    replyChoiceButton1.mousePressed(replychoice1);
    
    replyChoiceButton2 = createButton("I'm fucked.");
    replyChoiceButton2.id("chatchoicenormal");
    replyChoiceButton2.mousePressed(replychoice2);
    
    replyChoiceButton1_1 = createButton("IKR! So cool!");
    replyChoiceButton1_1.id("chatchoicenormal");
    replyChoiceButton1_1.mousePressed(replychoice1_1);
    
    replyChoiceButton1_2 = createButton("What's up w/ ur CEO");
    replyChoiceButton1_2.id("chatchoiceblack");
    replyChoiceButton1_2.mousePressed(replychoice1_2);
    
    replyChoiceButton2_1 = createButton("IKR! So cool!");
    replyChoiceButton2_1.id("chatchoicenormal");
    replyChoiceButton2_1.mousePressed(replychoice2_1);
    
    replyChoiceButton2_2 = createButton("Uhh it's definitely not...");
    replyChoiceButton2_2.id("chatchoiceblue");
    replyChoiceButton2_2.mousePressed(replychoice2_2);
    
    replyChoiceButton3_1 = createButton("IKR! So cool!");
    replyChoiceButton3_1.id("chatchoicenormal");
    replyChoiceButton3_1.mousePressed(replychoice3_1);
    
    replyChoiceButton3_2 = createButton("No it's not! I'm racist now!");
    replyChoiceButton3_2.id("chatchoicered");
    replyChoiceButton3_2.mousePressed(replychoice3_2);
    
    replytoUncle_1 = createButton("Reply indignantly");
    replytoUncle_1.id("chatchoiceblack");
    replytoUncle_1.mousePressed(replyUncle1);
    
    
     heartButton1 = createButton("");
    heartButton1.id("heartbutton");
    
    heartButton2 = createButton("");
    heartButton2.id("heartbutton");
    
    heartButton3 = createButton("");
    heartButton3.id("heartbutton");
    
    heartButton4 = createButton("");
    heartButton4.id("heartbutton");
    
    upButton1 = createButton("");
    upButton1.id("upbutton");
    
    upButton2 = createButton("");
    upButton2.id("upbutton");
    
    upButton3 = createButton("");
    upButton3.id("upbutton");
    
    upButton4 = createButton("");
    upButton4.id("upbutton");
    
    
                toolbar = createButton("");
        toolbar.id("browsertoolbaroff");
      toolbar.mousePressed(turnOffBrowser);
    
    
        toolbardirectory = createButton("");
        toolbardirectory.id("browsertooldirectory");
      toolbardirectory.mousePressed(toolBarDirectory);
    
    toolbargrumbles = createButton("");
        toolbargrumbles.id("browsertoolgrumbles");
      toolbargrumbles.mousePressed(toolBarGrumbles);
    
    toolbarForum = createButton("");
        toolbarForum.id("browsertool4rum");
      toolbarForum.mousePressed(toolBarForum);

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
}

function draw(){
    
    if(screen == 1) {
        Intro();
    } else if (screen == 2) {
        Desktop1();
    } else if (screen == 3) {
        Personal();
    } else if (screen == 4){
        BrowserDir1();
    } else if (screen == 5) {
        BrowserGrm1();
    } else if (screen == 6) {
        BrowserRum1();
    } else if (screen == 7) {
        BrowserFirstTime();
    } else if (screen == 8){
        BrowserIcons();
    } else if (screen == 9){
        History1();
    } else if (screen == 10){
        History1_1();
    } else if (screen == 11){
        Exit();
    } else if (screen == 12){
        Desktop2();
    } else if (screen == 13){
        BrowserDir2_1();
    } else if (screen == 14){
        BrowserDir2_2();
    } else if (screen == 15){
        BrowserDir2_3();
    } else if (screen == 16){
        BrowserGrm2();
    } else if (screen == 17){
        BrowserRum2();
    } else if (screen == 18){
        History2();
    } else if (screen == 19){
        Desktop3();
    } else if (screen == 20){
        Ending();
    }
}


function HideAllTheLikes(){
    browserButton.hide();
        personalButton.hide();
        historyButton.hide();
    browserNo.hide();
    browserYes.hide();
    dirIcon.hide();
    grmIcon.hide();
    rumIcon.hide();
    toolbar.hide();
    toolbardirectory.hide();
    toolbargrumbles.hide();
    toolbarForum.hide();
        likeButton1.hide();
    likeButton2.hide();
    likeButton3.hide();
    likeButton4.hide();
    likeButton5.hide();
    heartButton1.hide();
    heartButton2.hide();
    heartButton3.hide();
    heartButton4.hide();
    upButton1.hide();
upButton2.hide();
    upButton3.hide();
    upButton4.hide();
    replyButton1.hide();
    replyChoiceButton1.hide();
    replyChoiceButton2.hide();
    inputPersonal.hide();
    buttonPersonal.hide();
    buttonPersonalClose.hide();
    exitButton.hide();
    exityes.hide();
    exitno.hide();
    
    replyChoiceButton1_1.hide();
    replyChoiceButton1_2.hide();
    replyChoiceButton2_1.hide();
    replyChoiceButton2_2.hide();
    replyChoiceButton3_1.hide();
    replyChoiceButton3_2.hide();
    replytoUncle_1.hide();
    ending.hide();
}


function mouseWheel(event) {

  //move the square according to the vertical scroll amount
if(screen == 4){
    if(pos1 <=35 && pos1 >= -2180){
    pos1 += event.delta;
} else if (pos1 < -100) {
    pos1 = -2180;
} else {pos1 = 35;}
} else if(screen == 13 || screen == 14 || screen == 15){
    if(pos1 <=35 && pos1 >= -1319){
    pos1 += event.delta;
} else if (pos1 < -100) {
    pos1 = -1319;
} else {pos1 = 35;}
    
} else if(screen == 5){
    if(pos2 <=35 && pos2 >= -4070){
    pos2 += event.delta;
} else if (pos2 < -100) {
    pos2 = -4070;
} else {pos2 = 35;}
} else if (screen == 16) {
    print(pos2);
    if(pos2 <=35 && pos2 >= -2224){
    pos2 += event.delta;
} else if (pos2 < -100) {
    pos2 = -2224;
} else {pos2 = 35;}
    
}else if(screen == 6){
    if(pos3 <=35 && pos3 >= -3070){
    pos3 += event.delta;
} else if (pos3 < -100) {
    pos3 = -3070;
} else {pos3 = 35;}
} else if (screen == 17){
    print(pos3);
    if(pos3 <=35 && pos3 >= -3802){
    pos3 += event.delta;
} else if (pos3 < -100) {
    pos3 = -3802;
} else {pos3 = 35;}
    
}
    
  //uncomment to block page scrolling
  return false;
}