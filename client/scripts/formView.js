var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // event.handleObj.data = "hello",


    var messages = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#select').val()
    };

    MessagesView.render(messages);
    console.log(messages);

    $.ajax({
      type: 'POST',
      url: Parse.server,
      data: messages,
      contentType: 'application/json',
      success: function() {
        alert('success');
      },
      error: function(error) {
        // alert('chatterbox: Failed to send messages');
      }
    });
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};