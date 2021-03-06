$(document).ready(function(){
  var game = new Game();
  var roll1_1 = document.getElementById("roll-1.1");
  var roll1_2 = document.getElementById("roll-1.2");
  var roll2_1 = document.getElementById("roll-2.1");
  var roll2_2 = document.getElementById("roll-2.2");
  var roll3_1 = document.getElementById("roll-3.1");
  var roll3_2 = document.getElementById("roll-3.2");
  var roll4_1 = document.getElementById("roll-4.1");
  var roll4_2 = document.getElementById("roll-4.2");
  var roll5_1 = document.getElementById("roll-5.1");
  var roll5_2 = document.getElementById("roll-5.2");
  var roll6_1 = document.getElementById("roll-6.1");
  var roll6_2 = document.getElementById("roll-6.2");
  var roll7_1 = document.getElementById("roll-7.1");
  var roll7_2 = document.getElementById("roll-7.2");
  var roll8_1 = document.getElementById("roll-8.1");
  var roll8_2 = document.getElementById("roll-8.2");
  var roll9_1 = document.getElementById("roll-9.1");
  var roll9_2 = document.getElementById("roll-9.2");
  var roll10_1 = document.getElementById("roll-10.1");
  var roll10_2 = document.getElementById("roll-10.2");
  var roll10_3 = document.getElementById("roll10E");
  $("#roll10E").hide();


  $("#total-score").text(game.totalScore());

  $('table').on('change','select', function() {
    if ($(this).attr('id') === 'roll-1.1') {
      Hide(this)
      $("#round-1").text(roll1_1.value);
      $("#total-score").text(roll1_1.value);
    }

    if ($(this).attr('id') === 'roll-1.2') {
      game.roll(parseInt(roll1_1.value),parseInt(roll1_2.value));
      Hide(this)
      $("#round-1").text(game.frameScore(1));
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-2.1') {
      Hide(this)
      $("#round-2").text(roll2_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll2_1.value));
    }

    if ($(this).attr('id') === 'roll-2.2') {
      game.roll(parseInt(roll2_1.value),parseInt(roll2_2.value));
      Hide(this)
      Score($("#round-2"),$("#round-1"),2)
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-3.1') {
      Hide(this)
      $("#round-3").text(roll3_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll3_1.value));
    }

    if ($(this).attr('id') === 'roll-3.2') {
      game.roll(parseInt(roll3_1.value),parseInt(roll3_2.value));
      Hide(this)
      Score($("#round-3"),$("#round-2"),3)
      $("#round-1").text(game.frameScore(1));
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-4.1') {
      Hide(this)
      $("#round-4").text(roll4_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll4_1.value));
    }

    if ($(this).attr('id') === 'roll-4.2') {
      game.roll(parseInt(roll4_1.value),parseInt(roll4_2.value));
      Hide(this)
      $("#round-2").text(game.frameScore(2));
      Score($("#round-4"),$("#round-3"),4)
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-5.1') {
      Hide(this)
      $("#round-5").text(roll5_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll5_1.value));
    }

    if ($(this).attr('id') === 'roll-5.2') {
      game.roll(parseInt(roll5_1.value),parseInt(roll5_2.value));
      Hide(this)
      Score($("#round-5"),$("#round-4"),5)
      $("#round-3").text(game.frameScore(3));
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-6.1') {
      Hide(this)
      $("#round-6").text(roll6_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll6_1.value));
    }

    if ($(this).attr('id') === 'roll-6.2') {
      game.roll(parseInt(roll6_1.value),parseInt(roll6_2.value));
      Hide(this)
      Score($("#round-6"),$("#round-5"),6)
      $("#round-4").text(game.frameScore(4));
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-7.1') {
      Hide(this)
      $("#round-7").text(roll7_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll7_1.value));
    }

    if ($(this).attr('id') === 'roll-7.2') {
      game.roll(parseInt(roll7_1.value),parseInt(roll7_2.value));
      Hide(this)
      $("#round-5").text(game.frameScore(5));
      Score($("#round-7"),$("#round-6"),7)
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-8.1') {
      Hide(this)
      $("#round-8").text(roll8_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll8_1.value));
    }

    if ($(this).attr('id') === 'roll-8.2') {
      game.roll(parseInt(roll8_1.value),parseInt(roll8_2.value));
      Hide(this)
      $("#round-6").text(game.frameScore(6));
      Score($("#round-8"),$("#round-7"),8)
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-9.1') {
      Hide(this)
      $("#round-9").text(roll9_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll9_1.value));
    }

    if ($(this).attr('id') === 'roll-9.2') {
      game.roll(parseInt(roll9_1.value),parseInt(roll9_2.value));
      Hide(this)
      Score($("#round-9"),$("#round-8"),9)
      $("#round-7").text(game.frameScore(7));
      $("#total-score").text(game.totalScore());
    }

    if ($(this).attr('id') === 'roll-10.1') {
      Hide(this)
      $("#round-10").text(roll10_1.value);
      $("#total-score").text(game.totalScore()+parseInt(roll10_1.value));
      if(parseInt(roll10_1.value) === 10) {
        $("#roll10E").show();
      }
    }

    if ($(this).attr('id') === 'roll-10.2') {
      Hide(this)
      if(parseInt(roll10_2.value) === 10 || (parseInt(roll10_1.value) + parseInt(roll10_2.value))===10) {
        $("#roll10E").show();
        $("#round-10").text(parseInt(roll10_1.value)+parseInt(roll10_2.value));
        $("#total-score").text(game.totalScore()+parseInt(roll10_1.value)+parseInt(roll10_2.value));
      }
      else {
        game.roll(parseInt(roll10_1.value),parseInt(roll10_2.value));
        Score($("#round-10"),$("#round-9"),10)
        $("#round-8").text(game.frameScore(8));
        $("#total-score").text(game.totalScore());
      }
    }

    if ($(this).attr('id') === 'roll10E') {
      game.roll(parseInt(roll10_1.value),parseInt(roll10_2.value),parseInt(roll10_3.value),true);
      Hide(this)
      $("#round-10").text(game.frameScore(10));
      $("#round-8").text(game.frameScore(8));
      $("#total-score").text(game.totalScore());
    }
  });

  function Hide(id) {
    $(id).hide();
    $(id).parent().html(id.value);
  }

  function Score(id, id2, frame) {
    id.text(game.frameScore(frame));
    id2.empty();
    id2.text(game.frameScore(frame-1));
  }

  function Strike(roll1, id1, id2, frame) {
      console.log(roll1)
    if (roll1 === 10) {
      game.roll(parseInt(roll1_1.value));
      Hide(id1)
      id1.hide();
      Score(id1,id2,frame)
      $("#total-score").text(game.totalScore());
    }
  }

});
