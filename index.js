function clock() {

    var hours = document.getElementById('hour')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')
    var ampm = document.getElementById('ampm')

    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    // format hours ,date and time

    hr = hr > 12 ? hr - 12 : hr;
    hr = hr < 12 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // display date and time
    var period = hours < 12 ? "AM" : "PM";

    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec
    ampm.innerHTML = period


}

setInterval(clock, 1000)