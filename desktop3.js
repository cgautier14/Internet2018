function Desktop3() {
    
    dircounttotal = dircount1+dircount2;
    grmcounttotal = grmcount1+grmcount2;
    rumcounttotal = rumcount1+rumcount2;
    
    if(max(dircounttotal,grmcounttotal,rumcounttotal) == rumcounttotal){
        image(desktop3_3, 0, 0);
    } else if(max(dircounttotal,grmcounttotal,rumcounttotal) == grmcounttotal){
        image(desktop3_2, 0, 0);
    } else {
        image(desktop3_1, 0, 0);
    }
    
    toolbar.hide();
    toolbardirectory.hide();
    toolbargrumbles.hide();
    toolbarForum.hide();
    likeButton1.hide();
        browserButton.show();
        personalButton.show();
        historyButton.show();
    browserButton.mousePressed(dontReopenWindows);
    exitButton.show();
    
}