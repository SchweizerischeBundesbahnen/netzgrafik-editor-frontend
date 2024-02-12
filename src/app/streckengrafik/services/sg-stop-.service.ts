import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SgStopService {
  private count = 0;

  constructor() {}

  public countPlus(): number {
    this.count = this.count + 1;
    return this.count;
  }

  public isGO(count: number) {
    return this.count === count;
  }
}
