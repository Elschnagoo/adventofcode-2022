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

enum GameResult {
  'LOSE' = 'X',
  'DRAW' = 'Y',
  'WIN' = 'Z',
}

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_02_part_02',
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

  playRoundWithResult(enemy: Enemy, result: GameResult): number {
    let player: Player = Player.ROCK;

    switch (result) {
      case GameResult.DRAW:
        switch (enemy) {
          case Enemy.SCISSORS:
            player = Player.SCISSORS;
            break;
          case Enemy.PAPER:
            player = Player.PAPER;
            break;
          default:
        }
        break;
      case GameResult.WIN:
        switch (enemy) {
          case Enemy.ROCK:
            player = Player.PAPER;
            break;
          case Enemy.PAPER:
            player = Player.SCISSORS;
            break;
          default:
        }
        break;
      case GameResult.LOSE:
        switch (enemy) {
          case Enemy.ROCK:
            player = Player.SCISSORS;
            break;
          case Enemy.SCISSORS:
            player = Player.PAPER;
            break;
          default:
        }
        break;
      default:
    }

    return this.playRound(enemy, player);
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');
    let score = 0;
    for (const line of data) {
      const cleanLine = line.trim();
      if (cleanLine.length !== 0) {
        const [enemy, player] = cleanLine.split(' ') as [Enemy, GameResult];
        score += this.playRoundWithResult(enemy, player);
      }
    }
    return score;
  }
}
