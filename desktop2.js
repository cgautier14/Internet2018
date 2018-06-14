function Desktop2() {
    if(rumRound1 == true){
        image(desktop2_3, 0, 0);
    } else if(grmRound1 == true){
        image(desktop2_2, 0, 0);
    } else {
        image(desktop2_1, 0, 0);
    }
    
    toolbar.hide();
    toolbardirectory.hide();
    toolbargrumbles.hide();
    toolbarForum.hide();
    likeButton1.hide();
        browserButton.show();
    browserButton.mousePressed(dontReopenWindows);
        personalButton.show();
        historyButton.show();
    exitButton.show();
    
}