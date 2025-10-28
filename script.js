const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function displayTime (){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotaion = 30 * hh + mm/2;
    let mRotatin = 6 * mm;
    let sRotaion = 6 * ss;

    hr.style.transform = `rotate(${hRotaion}deg)`;
    min.style.transform = `rotate(${mRotatin}deg)`;
    sec.style.transform = `rotate(${sRotaion}deg)`;
}
setInterval(displayTime,1000);