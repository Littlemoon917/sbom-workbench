import fs from 'fs';
import path from 'path';
import { setInterval } from 'timers';
import { IndexerAdapter } from '../indexer/IndexerAdapter';
import { ISearcher } from './ISearcher';

const { Index } = require('flexsearch');

class Searcher {
  private index: any;

  constructor() {
    this.index = null;
  }

  public search(params: ISearcher): number[] {
    const result = []
    if (this.index) {
      return this.index.search(params.query,params.params? params.params : null);
    }
    return [];
  }

  public loadIndex(pathToDictionary: string) {
    if (!this.index) {
      const index = new Index({ depth: 1, bidirectional: 0, resolution: 9, minlength: 2 });
      const indexerAdapter = new IndexerAdapter();
      if (fs.existsSync(pathToDictionary)) {
        fs.readdirSync(pathToDictionary).forEach((filename) => {
          const file = path.join(pathToDictionary, filename);
          const indexFile = indexerAdapter.getFileIndex(filename);
          const data: any = fs.readFileSync(file, 'utf8');
          index.import(indexFile, data ?? null);
        });
        this.index = index;
        setInterval(this.closeIndex, 60000); // Close index after 1 minute
      }
    }
  }

  public closeIndex() {
    this.index = null;
  }
}

export const searcher = new Searcher();
