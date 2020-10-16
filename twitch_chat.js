try {
	console.log(require.resolve('twitch-js'));
} catch(e) {
	console.error('twitch-js not found');
	process.exit(e.code);
}

const TwitchJS = require('twitch-js').default;

const dotenv = require('dotenv');
dotenv.config()


const token = process.env.OATH_TOKEN;
const username = process.env.BOT_USERNAME;

const channel = process.env.CHANNEL_NAME;


const { api, chat } = new TwitchJS({ token, username });

const handleMessage = message => {
	if( message.message === '!command') {
		console.log('!command found')
	}
	// Do other stuff
};

chat.on(TwitchJS.Chat.Events.ALL, handleMessage);

chat.connect().then(() => {
	chat.join(channel);
});