import { EProperties } from '@grandlinex/core';
import * as fs from 'fs';
import * as Path from 'path';

export default abstract class APuzzle<A> {
  root: string;

  name: string;

  constructor(porps: EProperties<APuzzle<A>>) {
    this.root = porps.root;
    this.name = porps.name;
  }

  abstract run(): Promise<A>;

  protected loadResource(): string {
    return fs.readFileSync(Path.join(this.root, 'res.txt'), 'utf8');
  }
}
