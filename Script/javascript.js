
let timeDisplay = document.querySelector(".myClockDisplay");

function showTime(){
    let date = new Date();
    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    function pad(unit){
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }

    hr = pad(hr);
    mins = pad(mins);
    secs = pad(secs);



    let time = `${hr} : ${mins} : ${secs}`;

    timeDisplay.textContent = time;
}

setInterval(showTime, 1000);

