import APuzzle from '../../class/APuzzle';

enum Enemy {
  'ROCK' = 'A',
  'PAPER' = 'B',
  'SCISSORS' = 'C',
}
enum Player {
  'ROCK' = 'X',
  'PAPER' = 'Y',
  'SCISSORS' = 'Z',
}

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_02_part_01',
    });
  }

  playRound(enemy: Enemy, player: Player): number {
    let picked = 0;
    let out = 0;
    switch (player) {
      case Player.ROCK:
        picked = 1;
        if (enemy === Enemy.ROCK) {
          out = 3;
        }
        if (enemy === Enemy.SCISSORS) {
          out = 6;
        }
        break;
      case Player.PAPER:
        picked = 2;
        if (enemy === Enemy.PAPER) {
          out = 3;
        }
        if (enemy === Enemy.ROCK) {
          out = 6;
        }
        break;
      case Player.SCISSORS:
        picked = 3;
        if (enemy === Enemy.SCISSORS) {
          out = 3;
        }
        if (enemy === Enemy.PAPER) {
          out = 6;
        }
        break;
      default:
    }

    return out + picked;
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');
    let score = 0;
    for (const line of data) {
      const cleanLine = line.trim();
      const [enemy, player] = cleanLine.split(' ') as [Enemy, Player];
      score += this.playRound(enemy, player);
    }
    return score;
  }
}
