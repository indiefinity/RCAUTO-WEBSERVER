const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');
//var Gpio = require('onoff').Gpio;
//var FLWheel = new Gpio(4,"out");
//var FRWheel = new Gpio(5,"out");
//var RLWheel = new Gpio(6,"out");
//var RRWheel = new Gpio(7,"out");
app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', (socket) => {
  console.log("New controller connected!");
  socket.on("disconnect", (data) => {
    console.log("A controller disconnected!")
  }
  
  )
});