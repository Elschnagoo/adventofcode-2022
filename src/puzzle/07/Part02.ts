import APuzzle from '../../class/APuzzle';
import Navigator from './Navigator';
import Tree from './Tree';

export default class Part02 extends APuzzle<number> {
  constructor() {
    super({
      root: __dirname,
      name: 'day_07_part_02',
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
    const total = 70000000;
    const needed = 30000000;
    const current = nav.root.getSize();
    const free = total - current;

    const missing = (free - needed) * -1;

    const selection: Tree[] = [];
    nav.applyStrategy((element) => {
      if (element.isFolder() && element.getSize() >= missing) {
        selection.push(element);
      }
    });

    selection.sort((a, b) => a.getSize() - b.getSize());
    return selection[0].getSize();
  }
}
