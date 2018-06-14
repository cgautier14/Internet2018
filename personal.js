function Personal()

{
    if(accessed == true){
        
        image(personalopened, 0, 0);
        fill(120);
        for(i=0;i<36;i++){
  text(archive[i], 300,100+(i*20));
  }
        
    }
    else{
        image(personal, 0, 0);
    }
}

function accessArchive(){
    if(inputPersonal.value() == "company"||inputPersonal.value() == "COMPANY" ||inputPersonal.value() == "Company"){
        archive.unshift(name+ " accessed the archive.");
        buttonPersonal.hide();
    inputPersonal.hide();
        accessed = true;
    } else {
        inputPersonal.value('');
    }
    
}