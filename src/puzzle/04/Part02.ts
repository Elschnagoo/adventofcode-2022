import APuzzle from '../../class/APuzzle';

export default class Part02 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_04_part_02',
    });
  }

  convertInput(input: string): [number, number, number, number] {
    const [first, second] = input.split(',');
    const [a, b] = first.split('-');
    const [x, y] = second.split('-');
    return [parseInt(a, 10), parseInt(b, 10), parseInt(x, 10), parseInt(y, 10)];
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');
    let counter = 0;
    for (const line of data) {
      const cleanLine = line.trim();
      const cl = cleanLine.length;
      if (cl !== 0) {
        const [a, b, x, y] = this.convertInput(cleanLine);
        if (!(b < x || y < a)) {
          counter += 1;
        }
      }
    }

    return counter;
  }
}
