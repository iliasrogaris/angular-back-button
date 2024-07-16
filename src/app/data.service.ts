import { Injectable } from '@angular/core';
import { range } from 'rxjs';

export interface Data {
    list: number[];
    isMore: boolean;
  };

@Injectable()
export class DataService {
  data: Data;
  list: number[] = [];

  constructor() { }

  initList(): void {
    range(1, 300).subscribe(n => this.list.push(n));
  }

  getData(page, pageSize): Data {
    return {
      list: this.list.slice(page * pageSize, (page + 1) * pageSize),
      isMore: (page + 1) * pageSize <= this.list.length
    };
  }

}