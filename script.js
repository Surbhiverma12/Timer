const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

const disp = document.querySelector("#disp");

var interval = null;

totalValue =  () => {
    Total = Number(hour.value)*3600+ Number(minute.value)*60 + Number(second.value);
}

Timer = () => {
    totalValue();
    Total--;

    if(Total >= 0) {
        let hr = Math.floor(Total/3600);
        let min = Math.floor((Total/60) - (hr*60));
        let sec = Total - ((hr*3600) + (min*60));

        hour.value = hr;
        minute.value = min;
        second.value = sec;

    }
     else {
        disp.innerText = "Timer Out  !!";
    }
}

start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    disp.innerText = "Timer Started";
});

reset.addEventListener("click", () => {
    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;

    disp.innerText = "Timer";
});