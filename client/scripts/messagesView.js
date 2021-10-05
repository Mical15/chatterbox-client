var MessagesView = {

  $chats: $('#chats'),

  // data2 : [],

  initialize: function() {
    // App.fetch();
    // $.ajax({
    //   type: 'GET',
    //   url: Parse.server,
    //   data: { order: '-createdAt' }, //Parse.readAll(),
    //   contentType: 'application/json',
    //   success: function(data) {
    //     // var data2 = [];
    //     // console.log('message', data.results[3].text);
    //     // // data2 = JSON.stringify(data.results[3].text);
    //     // for (var i = 0; i < data.results.length; i++) {
    //     //   data2.push(data.results[i].text);
    //     //   // debugger;
    //     // document.getElementById('chats').innerHTML =
    //     // `<div>
    //     // ${data2.map(function(data) {
    //     //   return `<div>${data}</div>`;
    //     // }).join('')}
    //     // </div>`
    //     // }
    //     // console.log(data2);
    //   },
    //   error: function(error) {
    //     alert('chatterbox: Failed to send messages');
    //   }
    // });
    // console.log('MessagesView --------> ', info.responseJSON.results);
  },

  // var messages = {
  //   username: App.username,
  //   text: $('#message').val(),
  //   roomname: ''
  // };

  render: function(messages) {
    $('#chats').prepend('<div class="chatbubble"><button class="link"><strong>' + messages.username + ':</strong></button>' + messages.text + '</div>');
  }

};
