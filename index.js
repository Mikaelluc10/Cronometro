let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
    if (running === false) {
        running = true;
        document.getElementById('startStop').innerText = 'Parar';
        timer = setInterval(run, 1000);
    } else {
        running = false;
        document.getElementById('startStop').innerText = 'Iniciar';
        clearInterval(timer);
    }
}

function run() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    display();
}

function display() {
    const format = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').innerText = format;
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('startStop').innerText = 'Iniciar';
    display();
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);