let scale = 1;

const messages = [
  "Ines 💖 Joud loves you every day",
  "You are always in Joud's heart",
  "No matter what, you are special",
  "From Joud 💌 you mean everything"
];

const startBtn = document.getElementById("startBtn");
const screen = document.getElementById("screen");
const quiz = document.getElementById("quiz");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("msg");

function vibrate(x){ if(navigator.vibrate) navigator.vibrate(x); }

startBtn.onclick = () => {
  screen.style.display = "none";
  quiz.style.display = "block";
  vibrate(200);
};

yesBtn.onclick = () => {
  msg.innerHTML = "💖 YAY! Joud is extremely happy 💖";
  vibrate([100,50,100]);
};

function moveNo(){
  noBtn.style.left = Math.random()*window.innerWidth + "px";
  noBtn.style.top = Math.random()*window.innerHeight + "px";

  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  msg.innerHTML = messages[Math.floor(Math.random()*messages.length)];
  vibrate(80);
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

document.getElementById("waShare").onclick = () => {
  window.open("https://wa.me/?text=" + encodeURIComponent("💖 Try this Love Test! Do you love Joud? 😏"));
};

document.getElementById("share").onclick = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied!");
};
