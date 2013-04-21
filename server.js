var uuid = require('node-uuid');
var connect = require('connect');
 
var app = connect()
    .use(connect.static(__dirname + "/public"))
    .listen(3000);

var io = require('socket.io').listen(app);

var questions = [];

io.sockets.on('connection', function(socket) {
  console.log('client connected');

  socket.on('readQuestions', function(err, callback) {
    callback(null, JSON.stringify(questions));
    console.log('readQuestions server side');
  });

  socket.on('addQuestion', function(questionJsonData,callback) {
      var questionData = JSON.parse(questionJsonData);
      questionData.id = uuid.v1();
      questions.push(questionData);
 
      var updatedQuestionJsonData = JSON.stringify(questionData);
      callback(updatedQuestionJsonData);
  }); 
});

