import { Injectable } from '@angular/core';

import { LogConsole, LogPublisher } from './log.publishers';

@Injectable({
  providedIn: 'root',
})
export class LogPublishersService {
  // Public properties
  publishers: LogPublisher[] = [];

  constructor() {
    // Build publishers arrays
    this.buildPublishers();
  }

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new LogConsole());
  }
}
