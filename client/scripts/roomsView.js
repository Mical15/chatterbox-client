var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    var rooms = [];
    $.ajax({
      type: 'GET',
      url: Parse.server,
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function(data) {
        // alert('success');
        for (var i = 0; i < data.results.length; i++) {
          if (rooms.indexOf(data.results[i].roomname) === -1 && typeof(data.results[i].roomname) !== 'undefined') {
            if (data.results[i].roomname !== '') {
              rooms.push(data.results[i].roomname);
            }
          }
          // typeof(data.results[i].roomname) !== null &&
          document.getElementById('select').innerHTML =
          `<select>
          <option>Choose a Room!</option>
          ${rooms.map(function(data) {
    return `<option>${data}</option>`;
  }).join('')}
          </select>`;
        }
        // console.log(rooms);
      },
      error: function(error) {
        alert('chatterbox: Failed to load rooms');
      }
    });
  },

  render: function() {

  }

  swtichRooms: function() {
    var x = $('#select').val()
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }

};




// var RoomsView = {

//   $button: $('#rooms button'),
//   $select: $('#rooms select'),


//   initialize: function() {
//     RoomsView.$form.on('select', RoomsView.render);
//     var rooms = [];
//     $.ajax({
//       type: 'GET',
//       url: Parse.server,
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: function(data) {
//         // alert('success');
//         for (var i = 0; i < data.results.length; i++) {
//           if (rooms.indexOf(data.results[i].roomname) === -1 && typeof(data.results[i].roomname) !== 'undefined') {
//             if (data.results[i].roomname !== '') {
//               rooms.push(data.results[i].roomname);
//             }
//           }
//           // typeof(data.results[i].roomname) !== null &&
//           document.getElementById('select').innerHTML =
//           `<select>
//           <option>Choose a Room!</option>
//           ${rooms.map(function(data) {
//     return `<option>${data}</option>`;
//   }).join('')}
//           </select>`;
//         }
//         // console.log(rooms);
//       },
//       error: function(error) {
//         alert('chatterbox: Failed to load rooms');
//       }
//     });
//   },

//   render: function() {
//     $("#select").change(function() {
//       $.ajax({
//         type: 'GET',
//         url: Parse.server,
//         data: { order: '-createdAt' }, //Parse.readAll(),
//         contentType: 'application/json',
//         success: function(data) {
//           var data2 = [];
//           console.log('message', data.results[3].text);
//           // data2 = JSON.stringify(data.results[3].text);
//           for (var i = 0; i < data.results.length; i++) {
//             if (typeof data.results[i].username !== 'undefined' && typeof data.results[i].text !== 'undefined') {
//               if (data.results[i].roomname === $('#select').val()) {
//                 MessagesView.render(data.results[i]);
//               }
//             }
//           }
//         },
//         error: function(error) {
//           alert('chatterbox: Failed to send messages');
//         }
//       });
//     }),
//   };

// };
