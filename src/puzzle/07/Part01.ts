import APuzzle from '../../class/APuzzle';
import Navigator from './Navigator';

export default class Part01 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_07_part_01',
    });
  }

  async run(): Promise<number> {
    const data = this.loadResource().split('\n');

    const nav = new Navigator();

    for (const line of data) {
      const cleanLine = line.trim();
      const cl = cleanLine.length;
      if (cl !== 0) {
        const isLs = cleanLine.startsWith('$ ls');
        const isCD = cleanLine.startsWith('$ cd');
        const isDir = cleanLine.startsWith('dir');
        if (isCD) {
          nav.changePath(cleanLine);
        } else if (!isLs) {
          if (isDir) {
            const dirName = cleanLine.replace('dir ', '');
            nav.addDir(dirName);
          } else {
            const [size, name] = cleanLine.split(' ');
            nav.addFile(name, parseInt(size, 10));
          }
        }
      }
    }
    let sum = 0;
    nav.applyStrategy((element) => {
      if (element.isFolder() && element.getSize() <= 100000) {
        sum += element.getSize();
      }
    });

    return sum;
  }
}
