import APuzzle from '../../class/APuzzle';

const upperCaseMin = 65;
const upperCaseMax = 90;
const lowerCaseMin = 97;
const lowerCaseMax = 122;
export default class Part02 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_03_part_02',
    });
  }

  private convertCharCodes(old: number): number {
    if (old >= upperCaseMin && old <= upperCaseMax) {
      return old - upperCaseMin + 27;
    }
    if (old >= lowerCaseMin && old <= lowerCaseMax) {
      return old - lowerCaseMin + 1;
    }
    return -1;
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');
    let score = 0;
    for (let i = 0; i < data.length; i += 3) {
      const f1 = data[i]?.trim();
      const f2 = data[i + 1]?.trim();
      const f3 = data[i + 2]?.trim();
      if (f1.length !== 0 && f2.length !== 0 && f3.length !== 0) {
        const base = Array.from(f1);
        const prioChar = base.find((c) => f2.includes(c) && f3.includes(c));
        const prio = prioChar?.charCodeAt(0) ?? -1;
        score += this.convertCharCodes(prio);
      }
    }

    return score;
  }
}
