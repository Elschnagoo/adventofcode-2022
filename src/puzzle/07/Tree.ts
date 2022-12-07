import * as path from 'path';

export default class Tree {
  size: number | undefined;

  name: string;

  parent: Tree | null;

  children: Tree[];

  constructor(name: string, size?: number) {
    this.name = name;
    this.children = [];
    this.size = size;
    this.parent = null;
  }

  getChildByName(name: string): Tree {
    const child = this.children.find((c) => c.name === name) || null;
    if (child === null) {
      throw new Error(`Child ${name} not found`);
    }
    return child;
  }

  addChild(child: Tree): void {
    const nc = child;
    nc.parent = this;
    this.children.push(nc);
  }

  applyStrategy(strategy: (t: Tree) => void): void {
    this.children.forEach((c) => {
      c.applyStrategy(strategy);
    });
    strategy(this);
  }

  isFolder(): boolean {
    return this.size === undefined;
  }

  getSize(): number {
    if (this.size === undefined) {
      let sum = 0;
      this.children.forEach((c) => {
        sum += c.getSize();
      });
      return sum;
    }
    return this.size;
  }

  getParent(): Tree {
    if (this.parent === null) {
      return this;
    }
    return this.parent;
  }

  getFullPath(): string {
    if (this.parent === null) {
      return this.name;
    }
    return path.join(this.parent.getFullPath(), this.name);
  }
}
