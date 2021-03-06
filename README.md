# The Shoppies

https://theshoppies.tigerc.space

OMDB Movie database nomination UI, responsive designed, try on the mobile!

Created using create-react-app

This React project is mixed with functional components and class components since I am still learning React as I code, getting a grasp of everything. In my opinion, writing and reading class components are more straight forward and easy to understand with clear view of a component's lifecycle. Functional components save a lot of hassle (e.g. function bindings), you code what you need.

## Project Setup Instructions

This project is an user interface utilizing the public api [http://www.omdbapi.com](http://www.omdbapi.com) with a personal api token.

Since I have the free tier token with 1000 daily request limit, to avoid accidental overusage, you have to sign up at [http://www.omdbapi.com](http://www.omdbapi.com) for a your own personal api token to setup and run this project.

Create your own `properties.js` file under `src/resources/` following the `properties-TEMPLATE.js` file with your personal api token.

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
