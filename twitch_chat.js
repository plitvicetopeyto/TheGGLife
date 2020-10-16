require('dotenv').config({path: './vars.env'})

try {
	console.log(require.resolve('twitch-js'));
} catch(e) {
	console.error('twitch-js not found');
	process.exit(e.code);
}

const TwitchJS = require('twitch-js').default;




const token = process.env.OATH_TOKEN;
const username = process.env.BOT_USERNAME;

const channel = process.env.CHANNEL_NAME;

console.log('Channel: ' + channel);

const { api, chat } = new TwitchJS({ token, username });


voteA = 0;


const handleMessage = message => {
	if( message.message === '!a') {
		console.log('Vote for A')
		voteA = voteA + 1;
	} else if (message.message === '!votes') {
		console.log('Number of votes: ' + voteA);	
	}
	// Do other stuff
};

chat.on(TwitchJS.Chat.Events.ALL, handleMessage);

chat.connect().then(() => {
	chat.join(channel);
});