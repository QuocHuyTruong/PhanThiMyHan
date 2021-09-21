function timbay() {
    let body = document.querySelector(".body");
    // let body = document.querySelector(".contai");
    let heart = document.createElement("span");
    let x = getRndInteger(1,375)
    let y = getRndInteger(1,667)
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    let size = Math.random() * 100;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },2000)
}
function timbay1() {
    // let body = document.querySelector(".body");
    let body = document.querySelector(".contai");
    let heart = document.createElement("span");
    let x = getRndInteger(1,375)
    let y = getRndInteger(1,667)
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    let size = Math.random() * 100;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },2000)
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(function(){
    timbay();
}, 500);
setInterval(function(){
    timbay1();
}, 500);
function bienmat() {
    let NO=document.getElementById("mat");
    let size = Math.random() * 100;
    let x = getRndInteger(1,100)
    let y = getRndInteger(1,600)
    NO.style.marginTop = y + "px";
    NO.style.marginLeft = x + "px";
}
function nutYES() {
    var x = document.getElementById("hien");
    x.classList.add("nutYES");
}
// tại sao sự ra điơ của tưt tưởng HCM là tất yếu khách quan