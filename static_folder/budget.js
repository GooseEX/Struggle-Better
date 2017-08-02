function toggleWhenClicked() {
    $("#budget_tip1P").toggle();
}

function toggleWhenClicked2() {
    $("#budget_tip2P").toggle();
}

function toggleWhenClicked3() {
    $("#budget_tip3P").toggle();
}

function toggleWhenClicked4() {
    $("#budget_tip4P").toggle();
}

function toggleWhenClicked5() {
    $("#budget_tip5P").toggle();
}

function toggleWhenClicked6() {
    $("#budget_tip6P").toggle();
}

function toggleWhenClicked7() {
    $("#budget_tip7P").toggle();
}

function toggleWhenClicked8() {
    $("#budget_tip8P").toggle();
}

function toggleWhenClicked9() {
    $("#budget_tip9P").toggle();
}

function toggleWhenClicked10() {
    $("#budget_tip10P").toggle();
}

function setup() {
  $("#budget_tip1P").hide();
  $("#budget_tip2P").hide();
  $("#budget_tip3P").hide();
  $("#budget_tip4P").hide();
  $("#budget_tip5P").hide();
  $("#budget_tip6P").hide();
  $("#budget_tip7P").hide();
  $("#budget_tip8P").hide();
  $("#budget_tip9P").hide();
  $("#budget_tip10P").hide();

  $("#budget_tip1").click(toggleWhenClicked);
  $("#budget_tip2").click(toggleWhenClicked2);
  $("#budget_tip3").click(toggleWhenClicked3);
  $("#budget_tip4").click(toggleWhenClicked4);
  $("#budget_tip5").click(toggleWhenClicked5);
  $("#budget_tip6").click(toggleWhenClicked6);
  $("#budget_tip7").click(toggleWhenClicked7);
  $("#budget_tip8").click(toggleWhenClicked8);
  $("#budget_tip9").click(toggleWhenClicked9);
  $("#budget_tip10").click(toggleWhenClicked10);

}

$(document).ready(setup);
