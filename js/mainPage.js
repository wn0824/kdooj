const CLOCK = document.querySelector(".mainClock"),
      WRITE_CLOCK = CLOCK.querySelector("span");

function mainClock(){
    const date = new Date;
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    WRITE_CLOCK.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init(){
    mainClock();
    setInterval(mainClock, 1000);
}

init();