var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    // $.post(Parse.server, JSON.stringify(message), successCB, 'application/json');
    // console.log('result ---->', JSON.stringify(message));
    $.ajax({
      type: 'POST',
      url: Parse.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function() {
        alert('success');
      },
      error: errorCB || function(error) {
        alert('chatterbox: Failed to send messages');
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};