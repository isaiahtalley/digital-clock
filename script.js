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
        case 17:
            hours = 5;
            break;
        case 18:
            hours = 6;
            break;
        case 19: 
            hours = 7;
            break;
        case 20:
            hours = 8;
            break;
        case 21:
            hours = 9;
            break;
        case 22:
            hours = 10;
            break;
        case 23: 
            hours = 11;
            break;
        case 24:
            hours = 12;
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
