(function() {
		var nameButton = $('#nameButton'),
			nameInput = $('#nameInput'),
			messages = $('#messages'),
			text = $('#text'),
			textSubmit = $('#textSubmit');
			refreshMessages = $('#refreshMessages');

		var userName = 'User1';
		nameButton.click(function() {
			userName = nameInput.val() || 'User1';
		});
		Date.prototype.yyyymmdd = function() {
  			var mm = this.getMonth() + 1; // getMonth() is zero-based
  			var dd = this.getDate();

  			return [dd,mm,this.getFullYear(), ].join(' '); // padding
		};
		var dateAndTime = new Date();
		textSubmit.click(function() {
			var data = {
				name: userName,
				text: text.val(),
				date: dateAndTime.yyyymmdd()
			};

			text.val('');
			$.post('/messages', data);
		});

		var getData = function() {
			messages.html('');
			$.getJSON('/messages', function(msg) {
				for(var i in msg) {
					if(msg.hasOwnProperty(i)) {
						messages.append($('<li class="list-group-item">').text(msg[i].name + ': ' + msg[i].text + ' posted at:' + msg[i].date));				
					}
				}
			});
		};
		getData(); // for reload
		refreshMessages.click(function(){
			getData();
		});//for click reload
	})();
