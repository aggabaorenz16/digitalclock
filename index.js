function timeShow(){
    var i = 0;
    var newDate = new Date();
    var hours = newDate.getHours(); 
    var minutes = newDate.getMinutes(); 
    var seconds = newDate.getSeconds(); 
    var id = "AM";
    if(hours == i){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        id = "PM";
    }
    hours = hours < 10 ? + i + hours : hours;
    minutes = minutes < 10 ? + i + minutes : minutes;
    seconds = seconds < 10? + i + seconds : seconds;
    var newTime = hours + `:` + minutes + `:` + seconds + ` ` + id;
    var date = date
    document.querySelector("#digitalClock").innerText = newTime;
    document.querySelector("#digitalClock").innerText = newTime;
    setTimeout(timeShow, 1000);
}
timeShow();