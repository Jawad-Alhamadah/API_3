function open_url(size){
    let screen_size = document.getElementById("website-input")
    
    if(size===1){
        window.open(screen_size.value, "", `width=375, height=812`);
    }

    if(size===2){
        window.open(screen_size.value, "", `width=412, height=869`);
    }

    if(size===3){
        window.open(screen_size.value, "", `width=1024, height=1366`);
    }

    if(size===4){
        window.open(screen_size.value, "", `width=1920, height=1080`);
    }


}