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

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

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

        minutesEl.textContent = FormatTimer(minutes);
        secondsEl.textContent = FormatTimer(seconds);

        }

        startBtn.style.display = "none";
        pauseBtn.style.display = "block";

    },10)
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block"

}

function resumeTimer(){

}

function resetTimer(){

}

function FormatTimer(time){
    return time < 10 ? `0${time}` : time;
}