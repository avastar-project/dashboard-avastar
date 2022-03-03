# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Architecture

- `public`
- `src`
  - `assets`
  - `components`
  - `layouts`
  - `pages`
  - index.tsc

`public` => Contains index.html file connected to React.js core, favicons, robtos.txt, DON'T ERASE IT !
`src` => contains App react.js core...

`assets` => contains media contents like icons, images, ...
`components` => contains single components
`layouts` => contains reusable components as navbar, left side bar,...
`pages` => contains pages components, 1 file per page (Homepage, Overview, Facebook,...)

## Documentation

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Uses and good practices for typing React.js app
- [Create-React-App](https://create-react-app.dev/docs/getting-started/) - Used for create this app
- [React-Router-Dom v.6](https://reactrouter.com/) - Used for routing internal links of the app
- [Styled-components](https://styled-components.com/) - Used for creating style directly on components

## Extensions

### VS Code

- [Styled-Components extension](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) - Syntax highlighting for styled-components
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier
- [React ES7 Extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.

### Browser

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related) - Useful extension for Chrome browser to see components tree structure on dev's console

## Project color codes

- ![#2567FF](https://via.placeholder.com/15/2567FF/000000?text=+) `#2567FF`
- ![#F3C7A9](https://via.placeholder.com/15/F3C7A9/000000?text=+) `#F3C7A9`
- ![#CFC5FB](https://via.placeholder.com/15/CFC5FB/000000?text=+) `#CFC5FB`
- ![#C4E8FA](https://via.placeholder.com/15/C4E8FA/000000?text=+) `#C4E8FA`
- ![#C5E6D2](https://via.placeholder.com/15/C5E6D2/000000?text=+) `#C5E6D2`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Issues

### How to fix JS heap out of memory error ?

Based on issue from : [react-plotly.js git repo](https://github.com/plotly/react-plotly.js/issues/135)
Documentation : [Customizing the `plotly.js` bundle](https://github.com/plotly/react-plotly.js#customizing-the-plotlyjs-bundle)

The [React-plotly example](https://plotly.com/javascript/react/#quick-start) on official documentation seems to have a problem when team wants to try react-plotly component on app. The terminal returns an error when we use `npm start` to launch development server because of a saturated memory error.

To fix this, we have to :

- add '@types/plotly.js-basic-dist' TS dependency from npm (`npm i --save-dev @types/plotly.js-basic-dist`)
- change how to create a react-plotly component by this method :

```ts
// former documentation example (❌ doesn't work)
import Plot from 'react-plotly.js';

// Updated method (✅ works fine)
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
```

For explanate above example, we will calling Plotly from `plotly.js basic-dist` then we call a method from `react-plotly` to create a component. On separate these opeartions, we avoid memory errors.
