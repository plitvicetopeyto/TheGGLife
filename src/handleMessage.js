let state = require('./state.js');
const getWinner = require('./setWinners');

const handleMessage = (message) => {

  if (message === '!votes') {
    winnerKey = state.votes.highestVote;
    state.results.numberOfVotes = state.votes[winnerKey];
    state.results.winner = winnerKey;
  }
  if (state.results.winner) {
    console.log(
      `Winner: ${state.results.winner} Number of Votes: ${state.results.numberOfVotes}`
    );
    return;
  }

  let vote = state.votes[message];
  state.votes[message] = vote ? vote + 1 : 1;
  state.votes.highestVote = getWinner(state.votes);
};

module.exports = { handleMessage };
