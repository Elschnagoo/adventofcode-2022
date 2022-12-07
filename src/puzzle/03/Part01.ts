import APuzzle from '../../class/APuzzle';

const upperCaseMin = 65;
const upperCaseMax = 90;
const lowerCaseMin = 97;
const lowerCaseMax = 122;

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_03_part_01',
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
    for (const line of data) {
      const cleanLine = line.trim();
      const cl = cleanLine.length;
      if (cl !== 0) {
        const left = Array.from(cleanLine.substring(0, cl / 2));
        const right = cleanLine.substring(cl / 2);
        const prioChar = left.find((c) => right.includes(c));
        const prio = prioChar?.charCodeAt(0) ?? -1;
        // console.log(cleanLine, prioChar, this.convertCharCodes(prio));
        score += this.convertCharCodes(prio);
      }
    }

    return score;
  }
}
