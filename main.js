const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
const studyMsg = document.querySelector("#studyMsg");
var hasStudied = false;


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

        if(minutes <= 29 && seconds <=59 && !hasStudied){
            studyMsg.textContent = "Estude até o minuto 30!"
          
        }
        else{
            studyMsg.textContent = "Agora você pode descansar por 5 minutos!"
        }

        if(minutes == 30 && !hasStudied){
            clearInterval(interval);
            minutes = 0;
            seconds = 0;
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            startBtn.style.display = "block";
            pauseBtn.style.display = "none";
            resumeBtn.style.display = "none";
            hasStudied = true;
        }

        if(hasStudied == true){
            if(minutes == 5){
                clearInterval(interval);
                minutes = 0;
                seconds = 0;
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                startBtn.style.display = "block";
                pauseBtn.style.display = "none";
                resumeBtn.style.display = "none";
                hasStudied = false;
            }
        }

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

    },10)
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function FormatTimer(time){
    return time < 10 ? `0${time}` : time;
}
