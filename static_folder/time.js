function toggleWhenClicked() {
    $("#time_tip1P").toggle();
}

function toggleWhenClicked2() {
    $("#time_tip2P").toggle();
}

function toggleWhenClicked3() {
    $("#time_tip3P").toggle();
}

function toggleWhenClicked4() {
    $("#time_tip4P").toggle();
}

function toggleWhenClicked5() {
    $("#time_tip5P").toggle();
}

function toggleWhenClicked6() {
    $("#time_tip6P").toggle();
}

function toggleWhenClicked7() {
    $("#time_tip7P").toggle();
}

function toggleWhenClicked8() {
    $("#time_tip8P").toggle();
}

function toggleWhenClicked9() {
    $("#time_tip9P").toggle();
}

function toggleWhenClicked10() {
    $("#time_tip10P").toggle();
}


function setup() {
  $("#time_tip1P").hide();
  $("#time_tip2P").hide();
  $("#time_tip3P").hide();
  $("#time_tip4P").hide();
  $("#time_tip5P").hide();
  $("#time_tip6P").hide();
  $("#time_tip7P").hide();
  $("#time_tip8P").hide();
  $("#time_tip9P").hide();
  $("#time_tip10P").hide();

  $("#time_tip1").click(toggleWhenClicked);
  $("#time_tip2").click(toggleWhenClicked2);
  $("#time_tip3").click(toggleWhenClicked3);
  $("#time_tip4").click(toggleWhenClicked4);
  $("#time_tip5").click(toggleWhenClicked5);
  $("#time_tip6").click(toggleWhenClicked6);
  $("#time_tip7").click(toggleWhenClicked7);
  $("#time_tip8").click(toggleWhenClicked8);
  $("#time_tip9").click(toggleWhenClicked9);
  $("#time_tip10").click(toggleWhenClicked10);

}

$(document).ready(setup);
