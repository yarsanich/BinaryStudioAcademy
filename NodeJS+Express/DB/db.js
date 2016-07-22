var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/socketChar");

var ChatSchema = mongoose.Schema({
  created: Date,
  content: String,
  username: String,
});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = {
	Chat:Chat
}