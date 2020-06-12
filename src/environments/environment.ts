// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: "http://157.245.249.16/",
  // url: "http://40.114.94.110",
  port: 3001,
  token: {
    me: 'api/me'

  },
  lookup: {
    lookup: 'api/lookup',
  },
  auth: {
    register: 'api/auth/register',
    subadminlist: 'api/auth/subAdminList',
    login: 'api/auth/login',
    addBalance: 'api/transaction/addBalance',
    getTransaction: 'api/transaction/getTransaction/:userid',
    profile: 'api/auth/profile/:userid',
    getUserProfile: 'api/auth/profile/:id',
    updateProfile: 'api/auth/user/update/:id',
    displayMatch: 'api/bet/match/:type/:sport_id'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
