const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');
var player = require('play-sound')()
//var Gpio = require('onoff').Gpio;
//var FLWheel = new Gpio(4,"out");
//var FRWheel = new Gpio(5,"out");
//var RLWheel = new Gpio(6,"out");
//var RRWheel = new Gpio(7,"out");
//RRWheel.writeSync(0)
//RLWheel.writeSync(0)
//FRWheel.writeSync(0)
//FLWheel.writeSync(0)
//forwarding = false
//righting = false
//lefting = false
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
  }),
  socket.on("horn", (data) => {
    console.log("horn")
    player.play('./toot.mp3', (err) => {
      if (err) console.log(`Could not play sound: ${err}`);
  });
 }),
  socket.on("left", (data) => {
    console.log("left")
    // if (!lefting) {
    //lefting = true
    //FRWheel.writeSync(1)
    //RRWheel.writeSync(1)
    //} else {lefting = false;FRWheel.writeSync(0);RRWheel.writeSync(0);};
  }),
  socket.on("right", (data) => {
    console.log("right")
    // if (!righting) {
    //righting = true
    //FLWheel.writeSync(1)
    //RLWheel.writeSync(1)
    //} else {righting = false;FLWheel.writeSync(0);RLWheel.writeSync(0);};
  }),
  socket.on("forward", (data) => {
    console.log("forward")
    //if (!forwarding) {
    //RRWheel.writeSync(1)
    //RLWheel.writeSync(1)
    //FRWheel.writeSync(1)
    //FLWheel.writeSync(1)
    //forwarding = true
    //} else {
    //RRWheel.writeSync(0)
    //RLWheel.writeSync(0)
    //FRWheel.writeSync(0)
    //FLWheel.writeSync(0)
    //forwarding = false
    //}
  });
  
  
});