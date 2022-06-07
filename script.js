const playerImg = document.querySelectorAll(".card img");
const comImg = document.querySelector(".bot-card img");
const hasilGame = document.getElementById("hasil");
const scoreGame = document.getElementById("score");

let playerScore = 0;
let comScore = 0;

playerImg.forEach(function (pilPlayer) {
  pilPlayer.addEventListener("click", function () {
    var pilihanPlayer = this.className;
    let player1 = pilihanPlayer;
    let com = getComTurn();
    putar(com);
    setTimeout(() => {
      let hasil = kondisi(player1, com);

      // tampilkan
      //  console.log (`player = ${player1}`);
      //  console.log(`com = ${com}`);

      let score = getScore(hasil);
      hasilGame.textContent = hasil;
      scoreGame.textContent = score;
      // console.log(hasil);

      let ha = penentuan();

      if (ha == "udahan") {
        hasilGame.textContent = "hasil";
      }
    }, 1000);
  });
});

function putar(com) {
  const imgComputer = document.querySelector(".bot-card img");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
  setTimeout(() => {
    imgComputer.setAttribute("src", "img/" + com + ".png");
  }, 1100);
}

function penentuan() {
  if (playerScore == 3 && comScore == 0) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang brutal!";
    alert("Player menang Brutal!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (playerScore == 3 && comScore == 1) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang Jago!";
    alert("Player menang Jago!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (playerScore == 3 && comScore == 2) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Player menang hoki!";
    alert("Player menang hoki!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore == 3 && playerScore == 0) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Com menang Brutal!";
    alert("Com menang Brutal!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore == 3 && playerScore == 1) {
    playerScore = 0;
    comScore = 0;
    hasilGame.textContent = "Com menang jago!";
    alert("Com menang Jago!");
    scoreGame.textContent = `player = ${playerScore}, com = ${comScore}`;
    // console.log("membersihkan permainan..");
    return "udahan";
  } else if (comScore == 3 && playerScore == 2) {
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

function kondisi(player1, com) {
  let gajah = "gajah";
  let orang = "orang";
  let semut = "semut";

  if (player1 == com) {
    return "seri";
  } else if (player1 == gajah) {
    return com == orang ? "menang" : "kalah";
  } else if (player1 == orang) {
    return com == semut ? "menang" : "kalah";
  } else if (player1 == semut) {
    return com == gajah ? "menang" : "kalah";
  } else {
    return "salah input!";
  }
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
