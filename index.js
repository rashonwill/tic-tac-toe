let play = true;

(function () {
  $(".player1").addClass("yourTurn");
})();

$(".cell").click(function boardSelection() {
  if (play) {
    let selected = $(this).closest(".cell");
    selected.text("X");
    selected.css("pointer-events", "none");
    selected.addClass("taken");
    $(".player1").removeClass("yourTurn");
    $(".player2").addClass("yourTurn");
    winnerCheck();
    setTimeout(() => {
      getNum();
    }, "1500");
  }else{
  winnerCheck();
  }
});

function computerMove(num) {
  if (num === 1 && !$("#sqr1").hasClass("taken") && play) {
    $("#sqr1").text("O");
    $("#sqr1").css("pointer-events", "none");
    $("#sqr1").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 2 && !$("#sqr2").hasClass("taken") && play) {
    $("#sqr2").text("O");
    $("#sqr2").css("pointer-events", "none");
    $("#sqr2").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 3 && !$("#sqr3").hasClass("taken") && play) {
    $("#sqr3").text("O");
    $("#sqr3").css("pointer-events", "none");
    $("#sqr3").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 4 && !$("#sqr4").hasClass("taken") && play) {
    $("#sqr4").text("O");
    $("#sqr4").css("pointer-events", "none");
    $("#sqr4").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 5 && !$("#sqr5").hasClass("taken") && play) {
    $("#sqr5").text("O");
    $("#sqr5").css("pointer-events", "none");
    $("#sqr5").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 6 && !$("#sqr6").hasClass("taken") && play) {
    $("#sqr6").text("O");
    $("#sqr6").css("pointer-events", "none");
    $("#sqr6").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 7 && !$("#sqr7").hasClass("taken") && play) {
    $("#sqr7").text("O");
    $("#sqr7").css("pointer-events", "none");
    $("#sqr7").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 8 && !$("#sqr8").hasClass("taken") && play) {
    $("#sqr8").text("O");
    $("#sqr8").css("pointer-events", "none");
    $("#sqr8").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if (num === 9 && !$("#sqr9").hasClass("taken") && play) {
    $("#sqr9").text("O");
    $("#sqr9").css("pointer-events", "none");
    $("#sqr9").addClass("taken");
    $(".player2").removeClass("yourTurn");
    $(".player1").addClass("yourTurn");
  } else if ($(".cell").hasClass("taken")) {
    getNum();
  }else{
  winnerCheck();
  }
}

function getNum() {
  let num = Math.floor(Math.random() * 9) + 1;
  computerMove(num);
  winnerCheck();
}

function winnerCheck() {
  if (
    ($("#sqr1").text() === "X" &&
      $("#sqr2").text() === "X" &&
      $("#sqr3").text() === "X") ||
    ($("#sqr4").text() === "X" &&
      $("#sqr5").text() === "X" &&
      $("#sqr6").text() === "X") ||
    ($("#sqr7").text() === "X" &&
      $("#sqr8").text() === "X" &&
      $("#sqr9").text() === "X") ||
    ($("#sqr1").text() === "X" &&
      $("#sqr4").text() === "X" &&
      $("#sqr7").text() === "X") ||
    ($("#sqr2").text() === "X" &&
      $("#sqr5").text() === "X" &&
      $("#sqr8").text() === "X") ||
    ($("#sqr3").text() === "X" &&
      $("#sqr6").text() === "X" &&
      $("#sqr9").text() === "X") ||
    ($("#sqr1").text() === "X" &&
      $("#sqr5").text() === "X" &&
      $("#sqr9").text() === "X") ||
    ($("#sqr3").text() === "X" &&
      $("#sqr5").text() === "X" &&
      $("#sqr7").text() === "X")
  ) {
    play = false;
    winnerX();
  } else if (
    ($("#sqr1").text() === "O" &&
      $("#sqr2").text() === "O" &&
      $("#sqr3").text() === "O") ||
    ($("#sqr4").text() === "O" &&
      $("#sqr5").text() === "O" &&
      $("#sqr6").text() === "O") ||
    ($("#sqr7").text() === "O" &&
      $("#sqr8").text() === "O" &&
      $("#sqr9").text() === "O") ||
    ($("#sqr1").text() === "O" &&
      $("#sqr4").text() === "O" &&
      $("#sqr7").text() === "O") ||
    ($("#sqr2").text() === "O" &&
      $("#sqr5").text() === "O" &&
      $("#sqr8").text() === "O") ||
    ($("#sqr3").text() === "O" &&
      $("#sqr6").text() === "O" &&
      $("#sqr9").text() === "O") ||
    ($("#sqr1").text() === "O" &&
      $("#sqr5").text() === "O" &&
      $("#sqr9").text() === "O") ||
    ($("#sqr3").text() === "O" &&
      $("#sqr5").text() === "O" &&
      $("#sqr7").text() === "O")
  ) {
    play = false;
    winnerO();
  } else if (
    $("#sqr1").hasClass("taken") &&
    $("#sqr2").hasClass("taken") &&
    $("#sqr3").hasClass("taken") &&
    $("#sqr4").hasClass("taken") &&
    $("#sqr5").hasClass("taken") &&
    $("#sqr6").hasClass("taken") &&
    $("#sqr7").hasClass("taken") &&
    $("#sqr8").hasClass("taken") &&
    $("#sqr9").hasClass("taken")
  ) {
    play = false;
    draw();
  }
}

$("#play").click(function () {
  $(".gamerules").addClass("inactive");
  $(".player1").addClass("yourTurn");
});

//Winner & Draw Messages
function winnerX() {
  $(".messages h1").text("");
  let newMessage = "WINNER!!";
  $(".messages h1").text(newMessage);
  $(".messages").toggleClass("active");
}

function winnerO() {
  $(".messages h1").text("");
  let newMessage = "Sorry, you lose.";
  $(".messages h1").text(newMessage);
  $(".messages").toggleClass("active");
}

function draw() {
  $(".messages h1").text("");
  let newMessage = "Oooo, its a draw!";
  $(".messages h1").text(newMessage);
  $(".messages").toggleClass("active");
}

$(".exit").click(function () {
  $(".messages").removeClass("active");
});

$(".new").click(function () {
  play = true;
  $(".messages").removeClass("active");
  $(".cell").removeClass("taken");
  $(".cell").text("");
  $(".cell").css("pointer-events", "auto");
  $(".player1").addClass("yourTurn");
  $(".player2").removeClass("yourTurn");
});
