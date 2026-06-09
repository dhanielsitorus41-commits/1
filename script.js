// =========================
// OPEN GIFT
// =========================

function openGift(){

window.location.href =
"pages/dashboard.html";

}

// =========================
// COUNTDOWN
// =========================

const startDate =
new Date("2025-06-17");

function updateCountdown(){

const now =
new Date();

const diff =
now - startDate;

const days =
Math.floor(
diff /
(1000*60*60*24)
);

const hours =
Math.floor(
(diff/(1000*60*60)) % 24
);

const minutes =
Math.floor(
(diff/(1000*60)) % 60
);

const seconds =
Math.floor(
(diff/1000) % 60
);

const countdown =
document.getElementById(
"countdown"
);

if(countdown){

countdown.innerHTML =

`
❤️ ${days} Hari

🕒 ${hours} Jam

⏰ ${minutes} Menit

💖 ${seconds} Detik
`;

}

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

// =========================
// HEART EFFECT
// =========================

function createHeart(){

const container =
document.querySelector(
".hearts-container"
);

if(!container) return;

const heart =
document.createElement("div");

heart.classList.add(
"heart-fall"
);

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
Math.random()*20+15+"px";

container.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(
createHeart,
1000
);

const bgMusic =
document.getElementById("bgMusic");

if(bgMusic){

const savedTime =
localStorage.getItem("musicTime");

if(savedTime){

bgMusic.currentTime =
savedTime;

}

bgMusic.addEventListener(
"timeupdate",
()=>{

localStorage.setItem(
"musicTime",
bgMusic.currentTime
);

});

}


function openEnvelope(){

const envelope =
document.querySelector(
".envelope"
);

envelope.classList.add(
"open"
);

setTimeout(()=>{

window.location.href =
"pages/dashboard.html";

},2000);

}

function openEnvelope() {

const music =
document.getElementById(
"bgMusic"
);

music.play();

window.location.href =
"pages/dashboard.html";

}