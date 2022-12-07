import APuzzle from '../../class/APuzzle';

export default class Part02 extends APuzzle<number> {
  offset: number;

  constructor() {
    super({
      root: __dirname,
      name: 'day_06_part_02',
    });
    this.offset = 14;
  }

  async run(): Promise<number> {
    const [data] = this.loadResource().split('\n');
    const chars = data.split('');
    for (let i = 0; i < chars.length - this.offset; i++) {
      const quickSet = new Set<string>(chars.slice(i, i + this.offset));
      if (quickSet.size === this.offset) {
        return i + this.offset;
      }
    }
    return -1;
  }
}
