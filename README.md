# Avastar
At Avastar, we aim to build the next generation of Internet users. One that has the power to control their digital identity and has the means to decide how their data is used.
## Project Infos
You can find all infos concerning the project [here](https://avastardataforgood.notion.site/avastardataforgood/Avastar-Data-for-Good-750cfd4ecb76438cbea667badd1fe228).
If you're new to the project and want to participate, you can find more infos [there](https://avastardataforgood.notion.site/How-to-join-the-Team-444145500b124305aa76ea8864f3f452).

## Development
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

- [Typescript tooling](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) - Add TS tools to your environment
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Uses and good practices for typing React.js app
- [Create-React-App](https://create-react-app.dev/docs/getting-started/) - Used for create this app
- [React-Router-Dom v.6](https://reactrouter.com/) - Used for routing internal links of the app
- [Styled-components](https://styled-components.com/) - Used for creating style directly on components

## Extensions

### VS Code

- [Styled-Components extension](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) - Syntax highlighting for styled-components
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier
- [React ES7 Extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.

## Project color codes

- ![#2567FF](https://via.placeholder.com/15/2567FF/000000?text=+) `#2567FF`
- ![#F3C7A9](https://via.placeholder.com/15/F3C7A9/000000?text=+) `#F3C7A9`
- ![#CFC5FB](https://via.placeholder.com/15/CFC5FB/000000?text=+) `#CFC5FB`
- ![#C4E8FA](https://via.placeholder.com/15/C4E8FA/000000?text=+) `#C4E8FA`
- ![#C5E6D2](https://via.placeholder.com/15/C5E6D2/000000?text=+) `#C5E6D2`

## Common Issues

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
