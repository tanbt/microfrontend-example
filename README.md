# Micro-frontend example

Tech: Webpack 5 Module Federation, Angular as the parent app, React as child app.

This example demos a basic host/remote application with TypeScript.

## Install npm dependencies and run Demo

In the project root, run `yarn`. This will install npm packages, build and serve both `host` and `container` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) <- the main app
- [localhost:3002](http://localhost:3002/)
  <img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/TypeScript">

## References
- https://webpack.js.org/concepts/module-federation/
- https://github.com/module-federation/module-federation-examples/

## Troubleshooting
- ['React' refers to a UMD global, but the current file is a module](https://stackoverflow.com/questions/64656055/react-refers-to-a-umd-global-but-the-current-file-is-a-module). Add `"jsx": "react-jsx"` to tsconfig.json.
