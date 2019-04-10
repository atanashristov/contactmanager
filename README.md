# React Front to Back

Contains code and notes from studying [React Front to Back](https://www.packtpub.com/application-development/react-front-back-video).

## Initial setup

Setup using _create-react-app_:

```bash
yarn global add create-react-app
cd code
create-react-app contactmanager --scripts-version=react-scripts-ts

...
  Success! Created contactmanager at D:\Projects\Atanas\react-front-back\code\contactmanager
  Inside that directory, you can run several commands:

  yarn start
  Starts the development server.

  yarn build
  Bundles the app into static files for production.

  yarn test
  Starts the test runner.

  yarn eject
  Removes this tool and copies build dependencies, configuration files
  and scripts into the app directory. If you do this, you can’t go back!

  We suggest that you begin by typing:

  cd contactmanager
  yarn start
...

cd contactmanager
yarn start
```

## Deploy to GitHub

The single page app can be deployed to [GitHub Pages](https://pages.github.com/).

Several changes need to be done to the app.

Need to change _path routes_ to _hash routes_, because navigating to different pages may be a problem.

One option is to add to `<Router` attribute `basename` like that:

```js
<Router basename={process.env.PUBLIC_URL}>
```

Another option is to change the `BrowserRouter` to `HashRouter`.

Replace this:

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
```

with that:

```js
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
```

Build the single page app prior deployment.

Next install `gh-pages`:

```bash
yarn add gh-pages
```

, then add to `package.config` the url to the github pages:

```js
"homepage": "https://atanashristov.github.io/contactmanager",
"dependencies": {
...
```

Note: Homepage address on [GitHub Pages](https://pages.github.com/) is:

```bash
  https://{username}.github.io/{repositoryname}
```

So, we need repository "contactmanager" on GitHub.

Edit `package.json`, create script _deploy_:

```js
  "scripts": {
    "deploy": "npm run build&&gh-pages -d build",
    "start": "react-scripts-ts start",
...
```

Run `yarn run deploy`.

It will guild it and publish it to github.
