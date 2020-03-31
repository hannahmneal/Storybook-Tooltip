This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `Description`
This is a custom tooltip component built using React's `createPortal` hook. This hook allows us to create a "sister" DOM node at the level of the "root" node but in the React DOM hierarchy, the two nodes are not entirely independent - the "sister" node made with `createPortal` (called "portal-root" in this project) continues to listen for actions on the "root" node. This makes components such as portals or tooltips like this one much easier to establish and manage.

[Tooltip Demo](src/images/TooltipDemo.png)

You can also download a movie version here: [Tooltip Movie](https://github.com/hannahmneal/Storybook-Tooltip/blob/docs/My%20Movie%20-%20Small.mov)

## Available Scripts

In the project directory, you can run:

## `Packages`

This component uses Sass for styling. Use `npm install` before running or add node-sass after cloning: `npm i node-sass`.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run storybook`

Runs the app in storybook mode. <br />
Open [http://localhost:9009/](http//localhost:9009) to view in your browser. 


