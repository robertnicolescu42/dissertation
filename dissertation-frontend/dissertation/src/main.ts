/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import { environment } from './../src/environments/environment';
import Amplify from 'aws-amplify';

Amplify.configure(environment.awsmobile);

// const client = new AWSAppSyncClient({
//   url: environment.awsmobile.aws_appsync_graphqlEndpoint,
//   region: environment.awsmobile.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: environment.awsmobile.aws_appsync_authenticationType,
//   },
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
