import { Component } from '@angular/core';
import {
  thisError, thatError, anotherError, impossibleError,
} from './demo.Exceptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The Rollbar Demo Application';

  raiseBasicException() {
    throw Error('This is a basic exception');
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  raiseDifferingException() {
    switch (this.getRandomInt(3)) {
      case 0: {
        throw new thisError(`This is a thisError: ${this.getRandomInt(20)}`);
      }
      case 1: {
        throw new thatError(`This is a thatError: ${this.getRandomInt(20)}`);
      }
      case 2: {
        throw new anotherError(`This is an anotherError: ${this.getRandomInt(20)}`);
      }
      default: {
        // eslint-disable-next-line new-cap
        throw new impossibleError(`This is an impossibleError: ${this.getRandomInt(20)}`);
      }
    }
  }
}
