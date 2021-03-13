const getWinner = require('../setWinners');
const { handleMessage } = require('../handleMessage');
const state = require('../state');
test('should return the highest vote key', () => {
  var voteObj = {
    '!A': 1,
    '!B': 3,
    '!C': 2,
    '!D': 1,
  };

  expect(getWinner(voteObj)).toBe('!B');
});

test('should save state for votesObject', () => {
  handleMessage('!A');
  handleMessage('!A');
  handleMessage('!B');
  handleMessage('!B');
  handleMessage('!B');
  handleMessage('!C');
  handleMessage('!C');
  handleMessage('!votes');

  const expectedVoteObject = {
    '!A': 2,
    '!B': 3,
    '!C': 2,
    highestVote: '!B',
  };

  const expectedResultsObject = { winner: '!B', numberOfVotes: 3 };

  console.log(state);
  expect(state.votes).toStrictEqual(expectedVoteObject);
  expect(state.results).toStrictEqual(expectedResultsObject);
});
