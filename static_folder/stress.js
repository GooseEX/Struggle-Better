function toggleWhenClicked() {
    $("#stress_tip1P").toggle();
}

function toggleWhenClicked2() {
    $("#stress_tip2P").toggle();
}

function toggleWhenClicked3() {
    $("#stress_tip3P").toggle();
}

function toggleWhenClicked4() {
    $("#stress_tip4P").toggle();
}

function toggleWhenClicked5() {
    $("#stress_tip5P").toggle();
}

function toggleWhenClicked6() {
    $("#stress_tip6P").toggle();
}

function toggleWhenClicked7() {
    $("#stress_tip7P").toggle();
}

function toggleWhenClicked8() {
    $("#stress_tip8P").toggle();
}

function toggleWhenClicked9() {
    $("#stress_tip9P").toggle();
}

function toggleWhenClicked10() {
    $("#stress_tip10P").toggle();
}


function setup() {
  $("#stress_tip1P").hide();
  $("#stress_tip2P").hide();
  $("#stress_tip3P").hide();
  $("#stress_tip4P").hide();
  $("#stress_tip5P").hide();
  $("#stress_tip6P").hide();
  $("#stress_tip7P").hide();
  $("#stress_tip8P").hide();
  $("#stress_tip9P").hide();
  $("#stress_tip10P").hide();

  $("#stress_tip1").click(toggleWhenClicked);
  $("#stress_tip2").click(toggleWhenClicked2);
  $("#stress_tip3").click(toggleWhenClicked3);
  $("#stress_tip4").click(toggleWhenClicked4);
  $("#stress_tip5").click(toggleWhenClicked5);
  $("#stress_tip6").click(toggleWhenClicked6);
  $("#stress_tip7").click(toggleWhenClicked7);
  $("#stress_tip8").click(toggleWhenClicked8);
  $("#stress_tip9").click(toggleWhenClicked9);
  $("#stress_tip10").click(toggleWhenClicked10);

}

$(document).ready(setup);
