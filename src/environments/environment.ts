// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   login:'https://localhost:44300/User/Login',
   supply:'https://localhost:44377/PharmacySupply/Get',
   schedule:"https://localhost:44369/api/RepSchedule?startDate=",
//   login:'https://authservice20220916165456.azurewebsites.net/User/Login' ,
//   supply:'https://pharmacymedicinesupplyservice20220916171000.azurewebsites.net/PharmacySupply/Get',
  //  schedule:'https://medicalrepresentativeschedule20220916170048.azurewebsites.net/api/RepSchedule'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
