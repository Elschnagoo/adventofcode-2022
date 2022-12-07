import APuzzle from '../../class/APuzzle';

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_06_part_01',
    });
  }

  async run(): Promise<number> {
    const [data] = this.loadResource().split('\n');
    const chars = data.split('');
    for (let i = 0; i < chars.length - 4; i++) {
      const f1 = chars[i];
      const f2 = chars[i + 1];
      const f3 = chars[i + 2];
      const f4 = chars[i + 3];
      if (
        f1 !== f2 &&
        f2 !== f3 &&
        f3 !== f4 &&
        f1 !== f3 &&
        f1 !== f4 &&
        f2 !== f4
      ) {
        return i + 4;
      }
    }
    return -1;
  }
}
