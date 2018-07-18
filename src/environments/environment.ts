// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC6-bu19lE-yNhGNftJYrT3yIOKZeIwjIA',
    authDomain: 'gdg-poa.firebaseapp.com',
    databaseURL: 'https://gdg-poa.firebaseio.com',
    projectId: 'gdg-poa',
    storageBucket: 'gdg-poa.appspot.com',
    messagingSenderId: '281944707009'
  }
};
