const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
const studyMsg = document.querySelector("#studyMsg");
var hasStudied = false;
var isCounting = false;

const audio = document.querySelector('audio');


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
            alertEstudou();
            audio.play();
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
                alertDescansou();
                audio.play();
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
    isCounting = true;
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
    window.addEventListener("beforeunload", function(event) {
        if(isCounting){
            event.returnValue = "Mensagem de aviso";
        }
    });

function alertEstudou(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Parabéns!Você completou os 30 minutos de estudo!',
        showConfirmButton: true
      })
}

function alertDescansou(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Você completou os 5 minutos de descanso, agora pode voltar a estudar!',
        showConfirmButton: true
      })
}