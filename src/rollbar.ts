import * as Rollbar from 'rollbar'; // When using Typescript < 3.6.0.
// `import Rollbar from 'rollbar';` is the required syntax for Typescript 3.6.x. 
// However, it will only work when setting either `allowSyntheticDefaultImports` 
// or `esModuleInterop` in your Typescript options.

import {
  Injectable,
  Inject,
  InjectionToken,
  ErrorHandler
} from '@angular/core';

const rollbarConfig = {
  accessToken: 'ceb434281f564be58dd4bcfe022842da',
  autoInstrument: true,
  captureUncaught: true,
  captureUnhandledRejections: true,
  //uncaughtErrorLevel: 'error',
 // checkIgnore: ['filterBrowserExtensions'],
  payload: {
    environment: 'production',
    server: {
      root: 'http://localhost:4200/'
    },
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: '74292dd3283534467b3b2052823cf3f7aeb0eda8',
        guess_uncaught_frames: true
      }
    }
}
};

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(err:any) : void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}