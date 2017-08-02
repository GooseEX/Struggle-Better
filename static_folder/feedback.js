function save_feedback(event) {
  event.preventDefault();

  var name = $('#name').val();
  var email = $('#e-mail').val();
  var tab_rating = $('tab').val();
  var comment = $('#comment').val();

  var url = '/FeedbackHandler';
  var data = {
    'name' = name,
    'e-mail' = email,
    'tab' = tab_rating,
    'comment' = comment
  };

  var settings = {
    'type': 'type',
    'data': data,
    'success': renderUserInfo,
  };
  $.ajax(url, settings);
}

function setup(){
  $('#submit').click(save_feedback);
  $('feedback_form').hide();
};

$(document).ready(setup);
