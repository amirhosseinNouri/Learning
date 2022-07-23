const assert = require('assert');
const utils = require('../utils');
const thumbWar = require('../thumb-war');

const originalGetWinner = utils.getWinner

utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('A', 'B');

assert.strictEqual(winner, 'A');

utils.getWinner = originalGetWinner
