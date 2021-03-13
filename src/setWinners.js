/**
 * The set Winners function will be used to set the key !votes on
 *   the vote object to the highest vote value
 *
 * @param voteObj
 */
function getWinner(voteObj) {
  // get highest value
  return Object.keys(voteObj).reduce((a, b) =>
    voteObj[a] > voteObj[b] ? a : b
  );
}

module.exports = getWinner;
