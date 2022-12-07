import APuzzle from '../../class/APuzzle';

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_01_part_02',
    });
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');
    const candidates: number[] = [];
    let current = 0;
    for (const line of data) {
      const cleanLine = line.trim();
      if (cleanLine === '') {
        if (current > 0) candidates.push(current);
        current = 0;
      } else {
        current += parseInt(cleanLine, 10);
      }
    }
    const sorted = candidates.sort((a, b) => b - a);

    return sorted[0] + sorted[1] + sorted[2];
  }
}
