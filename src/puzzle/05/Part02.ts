import APuzzle from '../../class/APuzzle';

/**
 * Init Stack configuration
 *             [L] [M]         [M]
 *         [D] [R] [Z]         [C] [L]
 *         [C] [S] [T] [G]     [V] [M]
 * [R]     [L] [Q] [B] [B]     [D] [F]
 * [H] [B] [G] [D] [Q] [Z]     [T] [J]
 * [M] [J] [H] [M] [P] [S] [V] [L] [N]
 * [P] [C] [N] [T] [S] [F] [R] [G] [Q]
 * [Z] [P] [S] [F] [F] [T] [N] [P] [W]
 *  1   2   3   4   5   6   7   8   9
 */

export default class Part01 extends APuzzle<string> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_05_part_02',
    });
  }

  getInitConf(): string[][] {
    return [
      'ZPMHR',
      'PCJB',
      'SNHGLCD',
      'FTMDQSRL',
      'FSPQBTZM',
      'TFSZBG',
      'NRV',
      'PGLTDVCM',
      'WQNJFML',
    ].map((line) => line.split(''));
  }

  async run(): Promise<string> {
    const data = this.loadResource().split('\n');
    const map = this.getInitConf();
    for (const line of data) {
      const cleanLine = line.trim();
      const cl = cleanLine.length;
      if (cl !== 0) {
        const [left, right] = cleanLine.split(' from ');
        const ammount = parseInt(left.replace('move ', ''), 10);
        const desc = right.split(' to ');
        const from = parseInt(desc[0], 10);
        const to = parseInt(desc[1], 10);
        // console.log(ammount, from, to);

        let orderd: string[] = [];
        for (let i = 0; i < ammount; i += 1) {
          const el = map[from - 1].pop();
          if (el) {
            orderd.push(el);
          }
        }
        orderd = orderd.reverse();
        map[to - 1].push(...orderd);
      }
    }

    return map.map((arr) => arr.pop()).join('');
  }
}
