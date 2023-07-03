const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)

function startTimer(){
    interval = setInterval(() =>{

        if(!isPaused){
            milliseconds += 10;

        if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
        }

        if(seconds === 60){
            minutes++;
            seconds = 0;
        }    

        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        }

    },10)
}
