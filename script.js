const imgSelect = document.getElementById("img-select");
const imgCom = document.getElementById("img-com");
const buttonSelect = document.getElementById("button-select");
const buttonRetry = document.getElementById("button-retry");
const getPlayer = document.getElementById("player");
const getCom = document.getElementById("com");
const hasilGame = document.getElementById("hasil-game");
const scoreGame = document.getElementById("score-game");
const gambar = ["semut", "orang", "gajah"];

let i = 0;
function pilPlayer() {
  if (i == 3) i = 0;

  let pilihanPlayer = gambar[i];
  imgSelect.setAttribute("src", "img/" + gambar[i++] + ".png");
  return pilihanPlayer;
}

imgSelect.onclick = function () {
  imgSelect.style.backgroundColor = "transparent";
  if (imgSelect.classList.contains("active")) {
    let pilihanPlayer = pilPlayer();
    buttonSelect.onclick = () => {
      let pilCom = getComTurn();
      hasilGame.textContent = "hasil";
      putar(pilCom);
      buttonSelect.style.display = "none";
      getCom.textContent = "Random.";
      setTimeout(() => {
        getCom.textContent = "Random..";
      }, 700);
      setTimeout(() => {
        getCom.textContent = pilCom;
      }, 1500);
      // getPlayer.textContent = pilihanPlayer;
      return proses(pilihanPlayer, pilCom);
    };
    getPlayer.textContent = pilihanPlayer;
  }
};

function putar(pilCom) {
  const imgComputer = imgCom;
  let j = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[j++] + ".png");
    if (j == gambar.length) j = 0;
  }, 100);
  setTimeout(() => {
    imgComputer.setAttribute("src", "img/" + pilCom + ".png");
  }, 1300);
}

function getComTurn() {
  let com = Math.round(Math.random() * 2 + 1);

  if (com == 3) {
    return "gajah";
  } else if (com == 2) {
    return "orang";
  } else {
    return "semut";
  }
}
buttonRetry.onclick = () => {
  setTimeout(() => {
    buttonRetry.style.display = "none";
    buttonSelect.style.display = "block";
    imgSelect.classList.add("active");
    hasilGame.textContent = "hasil";
    return;
  }, 1000);
};

let playerScore = 0;
let comScore = 0;

function proses(pilihanPlayer, pilihanCom) {
  imgSelect.classList.remove("active");
  buttonRetry.style.display = "block";
  let hasil = kondisi(pilihanPlayer, pilihanCom);
  let score = getScore(hasil);
  setTimeout(() => {
    hasilGame.textContent = hasil;
    scoreGame.textContent = score;
    penentuan();
  }, 1500);
  //   console.log(hasilAkhir);
}

function kondisi(player1, com) {
  let gajah = "gajah";
  let orang = "orang";
  let semut = "semut";

  if (player1 == com) {
    return "seri";
  }
  if (player1 == gajah) {
    return com == orang ? "menang" : "kalah";
  }
  if (player1 == orang) {
    return com == semut ? "menang" : "kalah";
  }
  if (player1 == semut) {
    return com == gajah ? "menang" : "kalah";
  }
}

function getScore(hasil) {
  let menang = "menang";
  let kalah = "kalah";
  let seri = "seri";

  if (hasil == menang) {
    playerScore += 1;
    return `player = ${playerScore}, com = ${comScore}`;
  } else if (hasil == kalah) {
    comScore += 1;
    return `player = ${playerScore}, com = ${comScore}`;
  } else if (hasil == seri) {
    return `player = ${playerScore}, com = ${comScore}`;
  } else {
    return `player = ${playerScore}, com = ${comScore}`;
  }
}

function penentuan() {
  if (playerScore >= 3 && comScore == 0) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang brutal!";
    alert("Player menang Brutal!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (playerScore >= 3 && comScore == 1) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang Jago!";
    alert("Player menang Jago!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (playerScore >= 3 && comScore == 2) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang hoki!";
    alert("Player menang hoki!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore >= 3 && playerScore == 0) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Com menang Brutal!";
    alert("Com menang Brutal!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore >= 3 && playerScore == 1) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Com menang jago!";
    alert("Com menang Jago!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore >= 3 && playerScore == 2) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Com menang hoki!";
    alert("Com menang hoki!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else {
    return;
  }
}
