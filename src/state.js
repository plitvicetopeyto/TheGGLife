/**
 * the votes object
 * keyed by vote
 *
 * the key !votes will be set to the current highest vote
 *
 * example object structure
 *
 * {
 * '!A': 1,
 * '!B': 2,
 * '!votes': '!B'
 * }
 *
 */
const votesObject = {
  highestVote: undefined,
};

/**
 * Application state object
 *   Default Values set here
 */
const state = {
  votes: votesObject,
  results: {
    winner: undefined,
    numberOfVotes: 0,
  },
};

module.exports = state;
