// toglogchiiin eeljiig hadgalah huwisagch 1r toglogch 0 2r toglogch 1
var activePlayer = 0;
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

//shoo shideh eventListner
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 sanamsargu too
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //shoonii zurag gargaj irne
  diceDom.style.display = "block";

  //buusan shoonii toond hargalzah zurag gargana
  diceDom.src = "dice-" + diceNumber + ".png";

  //buusan too 1s ylgaatai bol idewhtei toglogchin onoog nemegduulne.
  if (diceNumber !== 1) {
    //1s ylgaatai too buula. toglogchiin toog nemne.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    document.getElementById("current-" + activePlayer).textContent = 0;

    //1 buusan tul toglogchiin eeljiig solino
    //herew idewhtei toglogch 0 bwal 1bolgo esreg tohioldold 0 bolgo
    //toglogchiin eelj shiljuulne
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //ulaan tseg haij olno
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //shoog tur alga bolgono
    diceDom.style.display = "none";
    // if(activePlayer===0){
    //     activePlayer=1;
    // } else{
    //     activePlayer=0;
    // }
  }
});
