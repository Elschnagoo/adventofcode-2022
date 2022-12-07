import Tree from './Tree';

export default class Navigator {
  root: Tree;

  current: Tree;

  constructor() {
    this.root = new Tree('/');
    this.current = this.root;
  }

  changePath(path: string): void {
    const changePath = path.replace('$ cd ', '');
    switch (changePath) {
      case '..':
        this.current = this.current.getParent();
        break;
      case '/':
        this.current = this.root;
        break;
      default:
        this.current = this.current.getChildByName(changePath);
    }
  }

  addDir(name: string): void {
    if (this.current.children.find((c) => c.name === name) === undefined) {
      this.current.addChild(new Tree(name));
    }
  }

  addFile(name: string, size: number): void {
    if (this.current.children.find((c) => c.name === name) === undefined) {
      this.current.addChild(new Tree(name, size));
    }
  }

  applyStrategy(strategy: (t: Tree) => void): void {
    this.root.applyStrategy(strategy);
  }
}
