(function(){    
    var nameButton = $('#nameButton');
    var username = $('#nameInput');
    var userName = 'User1';
    nameButton.click(function() {
      userName = username.val();
    });
    var socket = io();
    $('form').submit(function(){
      var data = {
       name : userName,
       content : $('#m').val(),
      }
      socket.emit('chat message', data);
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg.username + ": " + msg.content + ' posted at: ' + msg.created));
      });
  })();