//shoonii zurgiig uzuuleh element Domos olood hadgallaa
var activePlayer, scores, roundScore;
//togloom duussan eseh
var isGameOver;
var diceDom = document.querySelector(".dice");
//togloom shineer ehellee
function initGame() {
  //togloom ehellee tuluwt;
  isGameOver = false;
  // toglogchiiin eeljiig hadgalah huwisagch 1r toglogch 0 2r toglogch 1
  activePlayer = 0;
  // toglogchiin tsugluulsan onoog hadgalah
  scores = [0, 0];
  //eeljiin onoo
  roundScore = 0;
  //shoo ali talaara buusniig hadgalah 1-6 gsn utgiig sanamsarguigeer uusgej ugnu

  //<div class="player-score" id="score-0">43</div>

  //document.querySelector("#score-1").innerHTML = dice;

  //program ehellee
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  diceDom.style.display = "none";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
initGame();
//shoo shideh eventListner
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver === false) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  } else {
    alert("togloom duussan bna New Game towchiiig darna uu");
  }
});
//Hold-n eventListner
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    //ug toglogchiin tsugluulsan onoog global onoon dr nemne.

    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //hojson eseh
    if (scores[activePlayer] >= 100) {
      //togloom duussan tuluwt oruulna
      isGameOver = true;
      //ylsan toglogchiin nerni orond winner garna
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //eeljiig solino.
      nextPlayer();
    }
  } else {
    alert("togloom duussan bna New Game towchiiig darna uu");
  }
});

//toglogch solih
function nextPlayer() {
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
}
//new game eventHandler
document.querySelector(".btn-new").addEventListener("click", initGame);
