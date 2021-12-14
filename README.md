# Micro-frontend example
Tech: Webpack 5 Module Federation, Angular as the host app (http://localhost:4200), which contains two containers:
* Angular app: http://localhost:4201
* React app: http://localhost:4202

## Run in localhost
* `yarn`
* `yarn bootstrap`
* `yarn start`
Access http://localhost:4200/

## Issues
Upgrading to Angular 13 with latest Webpack version (5.56.0) causing `Access to script at 'http://localhost:4202/remoteEntry.js' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.` when testing on localhost.

Also, the newer webpack version creates could not get `remoteEntry.js` in React app because of CORS, which triggers infinite refreshing.

## References
- [Series about Webpack Module Federation with Angular](https://www.angulararchitects.io/en/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-the-good-the-bad-the-ugly/)
  - A complete working example Angular + React: https://github.com/manfredsteyer/multi-framework-micro-frontend
- Error when loading remote script: https://github.com/module-federation/module-federation-examples/issues/307
