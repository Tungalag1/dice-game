// toglogchiiin eeljiig hadgalah huwisagch 1r toglogch 0 2r toglogch 1
var activePlayer = 1;
// toglogchiin tsugluulsan onoog hadgalah
var scores = [0, 0];
//eeljiin onoo
var roundScore = 0;
//shoo ali talaara buusniig hadgalah 1-6 gsn utgiig sanamsarguigeer uusgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>

//document.querySelector("#score-1").innerHTML = dice;

//program ehellee
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("shoo: " + dice);
