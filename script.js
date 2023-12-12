const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalvalue = () => {
    total = Number(hour.value) * 3600 + Number(minutes.value) * 60 + Number(second.value) * 1;
}


Timer = () => {
    totalvalue();
    total--;
    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var mi = Math.floor((total / 60) - (hr * 60));
        var sc = total - ((hr * 3600) + (mi * 60));

        hour.value = hr;
        minutes.value = mi;
        second.value = sc;
    }
    else {
        disp.innerText = "Time Over !!";
    }
}

start.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(Timer, 1000);
    disp.innerText = "Timer Started";
});

pause.addEventListener('click', () => {
    clearInterval(interval);
    disp.innerText = "Paused";
});



reset.addEventListener('click', () => {
    clearInterval(interval);
    hour.value = 'HOUR';
    minutes.value = 'MINUTES';
    second.value = 'SECOND';
    disp.innerText = "Countdown Timer";
})