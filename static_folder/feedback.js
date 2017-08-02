function save_feedback(event) {
  event.preventDefault();

  var name = $('#name').val();
  var email = $('#e-mail').val();
  var tab_rating = $('tab').val();
  var comment = $('#comment').val();

  function on_success(){
    print('Thank you')
  }
  var url = '/FeedbackHandler';
  var data = {
    'name' = name,
    'e-mail' = email,
    'tab' = tab_rating,
    'comment' = comment,
  };
  console.log('setting var');
  var settings = {
    'type': 'POST',
    'data': data,
    'success': on_success,
  };
  console.log('hello');
  print('made into save feedback');
  $.ajax(url, settings);
  print('made into save feedback2');
  console.log('hello2');
}

function setup(){
  $('#submit').click(save_feedback);
  $('feedback_form').hide();
};

$(document).ready(setup);
