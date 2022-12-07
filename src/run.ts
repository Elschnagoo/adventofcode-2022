import Day01Part01 from './puzzle/01/Part01';
import Day01Part02 from './puzzle/01/Part02';
import Day02Part01 from './puzzle/02/Part01';
import Day02Part02 from './puzzle/02/Part02';
import Day03Part01 from './puzzle/03/Part01';
import Day03Part02 from './puzzle/03/Part02';
import Day04Part01 from './puzzle/04/Part01';
import Day04Part02 from './puzzle/04/Part02';
import Day05Part01 from './puzzle/05/Part01';
import Day05Part02 from './puzzle/05/Part02';
import Day06Part01 from './puzzle/06/Part01';
import Day06Part02 from './puzzle/06/Part02';
import Day07Part01 from './puzzle/07/Part01';
import Day07Part02 from './puzzle/07/Part02';

const puzzles = [
  new Day01Part01(), // 71506
  new Day01Part02(), // 209603

  new Day02Part01(), // 12679
  new Day02Part02(), // 14470

  new Day03Part01(), // 8109
  new Day03Part02(), // 2738

  new Day04Part01(), // 500
  new Day04Part02(), // 815

  new Day05Part01(), // VQZNJMWTR
  new Day05Part02(), // NLCDCLVMQ

  new Day06Part01(), // 1578
  new Day06Part02(), // 2178

  new Day07Part01(), // 1447046
  new Day07Part02(), // 578710
];

(async () => {
  for (const puzzle of puzzles) {
    const result = await puzzle.run();
    console.log(`Result for puzzle ${puzzle.name}: ${result}`);
  }
})();
