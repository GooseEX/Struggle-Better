// function check_if_checked(){
//   if($("#option_stress").is(':checked') == true){
//     return $("#option_stress").val();
//   }
//   else if ($("#option_nutrition").is(':checked') == true) {
//     return $("#option_nutrition").val();
//   }
//   else if ($("#option_time").is(':checked') == true) {
//     return $("#option_time").val();
//   }
//   else if ($("#option_budget").is(':checked') == true) {
//     return $("#option_budget").val();
//   }
//
//   }




function save_feedback(event) {
  event.preventDefault();

  var name = $('#name').val();
  var email = $('#e-mail').val();
  console.log('radio button');
  var tab = $("input[name='tab']:checked").val()
  console.log(tab);
  var comment = $('#comment').val();

  function on_success(){
    $('#form').hide();
    $('#thank_you').show();
    // $('#thank_you').text('Thank You')
  }
  var url = '/feedback.html';
  var data = {
    'name' : name,
    'e-mail' : email,
    'tab' : tab,
    'comment' : comment,
  };

  var settings = {
    'type': 'POST',
    'data': data,
    'success': on_success,
  };
  $.ajax(url, settings);
}

function setup(){
  $('#submit').click(save_feedback);
  $('#thank_you').hide();
};

$(document).ready(setup);
