// function to update Clock

function UpdateClock(){
    const clockElement = document.getElementById('clock')
    const now = new Date()

    let hours = now.getHours()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()

    if(hours < 10 ){
        hours = "0" + hours
    } 
    
    else{
        hours = hours
    }

    if(seconds < 10 ){
        seconds = "0" + seconds
    }

    else{
        seconds = seconds
    }

    if(minutes< 10 ){
        minutes = "0" + minutes 
    }

    else{
        minutes = minutes
    }
     
    clockElement.textContent = `${hours}:${minutes}:${seconds} `;
}

setInterval(UpdateClock, 1000);
UpdateClock();

