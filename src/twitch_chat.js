require('dotenv').config({ path: './.env' });
const handleMessage = require('./handleMessage');

try {
  console.log(require.resolve('twitch-js'));
} catch (e) {
  console.error('twitch-js not found');
  process.exit(e.code);
}

const TwitchJS = require('twitch-js').default;

/////////////////////////////////////////////////////////

var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World\n');
  })
  .listen(process.env.PORT);

/////////////////////////////////////////////////////////////////////

const token = process.env.OATH_TOKEN;
const username = process.env.BOT_USERNAME;

const channel = process.env.CHANNEL_NAME;

console.log('Channel: ' + channel);

const { api, chat } = new TwitchJS({ token, username });

function checkJS() {
  alert('This is JS');
}

var num_voting_options = 4;

var most_vote;

chat.on(TwitchJS.Chat.Events.ALL, handleMessage);

chat.connect().then(() => {
  chat.join(channel);
});
