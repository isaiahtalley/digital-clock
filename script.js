function currentTime() {
    let fullTime = new Date();
    let hours = fullTime.getHours();
    let mins = fullTime.getMinutes();
    let secs = fullTime.getSeconds();

    switch(hours) {
        case 13:
            hours = 1;
            break;
        case 14:
            hours = 2;
            break;
        case 15:
            hours = 3;
            break;
        case 16:
            hours = 4;
            break;
        default:
            hours = 0;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
 
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = mins;
    document.getElementById('second').innerHTML = secs;
}

setInterval(currentTime, 1000);
