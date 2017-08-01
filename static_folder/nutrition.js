function toggleWhenClicked() {
    $("#nutrition_tip1P").toggle();
}

function toggleWhenClicked2() {
    $("#nutrition_tip2P").toggle();
}

function toggleWhenClicked3() {
    $("#nutrition_tip3P").toggle();
}

function toggleWhenClicked4() {
    $("#nutrition_tip4P").toggle();
}

function toggleWhenClicked5() {
    $("#nutrition_tip5P").toggle();
}

function toggleWhenClicked6() {
    $("#nutrition_tip6P").toggle();
}

function toggleWhenClicked7() {
    $("#nutrition_tip7P").toggle();
}

function toggleWhenClicked8() {
    $("#nutrition_tip8P").toggle();
}

function toggleWhenClicked9() {
    $("#nutrition_tip9P").toggle();
}

function toggleWhenClicked10() {
    $("#nutrition_tip10P").toggle();
}


function setup() {
  $("#nutrition_tip1P").hide();
  $("#nutrition_tip2P").hide();
  $("#nutrition_tip3P").hide();
  $("#nutrition_tip4P").hide();
  $("#nutrition_tip5P").hide();
  $("#nutrition_tip6P").hide();
  $("#nutrition_tip7P").hide();
  $("#nutrition_tip8P").hide();
  $("#nutrition_tip9P").hide();
  $("#nutrition_tip10P").hide();

  $("#nutrition_tip1").click(toggleWhenClicked);
  $("#nutrition_tip2").click(toggleWhenClicked2);
  $("#nutrition_tip3").click(toggleWhenClicked3);
  $("#nutrition_tip4").click(toggleWhenClicked4);
  $("#nutrition_tip5").click(toggleWhenClicked5);
  $("#nutrition_tip6").click(toggleWhenClicked6);
  $("#nutrition_tip7").click(toggleWhenClicked7);
  $("#nutrition_tip8").click(toggleWhenClicked8);
  $("#nutrition_tip9").click(toggleWhenClicked9);
  $("#nutrition_tip10").click(toggleWhenClicked10);

}

$(document).ready(setup);
