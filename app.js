// toglogchiiin eeljiig hadgalah huwisagch 1r toglogch 0 2r toglogch 1
var activePlayer = 1;
// toglogchiin tsugluulsan onoog hadgalah
var scores = [0, 0];
//eeljiin onoo
var roundScore = 0;
//shoo ali talaara buusniig hadgalah 1-6 gsn utgiig sanamsarguigeer uusgej ugnu

//<div class="player-score" id="score-0">43</div>

//document.querySelector("#score-1").innerHTML = dice;

//program ehellee
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
