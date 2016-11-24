# ${1:Mangonada}
A git visualizer app that lets users review their Github repositories as clean, intuitive, metro-style diagrams. We hope to give our users a greater understanding of their Git workflow and ultimately empower them to be confident in future decision-making.

## Table of Contents
TechStack
Setting Up the Dev Environment
Starting the App
System Architecture
Credits
License

## TechStack
[React](https://facebook.github.io/react/) / [Redux](https://github.com/reactjs/redux)
[Material-UI](http://www.material-ui.com/#/)
[Node.js](https://nodejs.org/en/) / [Express](http://expressjs.com/)
[Webpack](https://webpack.github.io/) / [Babel](babeljs.io)

## File Structure

/ (root)
|
|—src/ (React/Redux)
  |
  |--server/
      |
      |—api.js
      |
      |—index.html
      |
      |—models.js
      |
      |—server.js
      |
      |—service-worker.js
    |
    |--actions/
        |
        |—index.js
    |
    |--components/
        |
        |—app.js
        |
        |—tabs.js
    |
    |--containers/
        |
        |—bubble_chart.js
        |
        |—chart.js
        |
        |—coordinate_generator.js
        |
        |—display_helpers.js
        |
        |—searchbar.js
        |
        |—word_cloud.js
    |
    |--reducers/
        |
        |—chartD3
        |
        |—gitD3
        |
        |—gitGraphDemo/ (deprecate)

      |—index.js
      |
      |—reducer_currentRepo.js

    |
    |—index.js
    |
    |—routes.js
    |
|--style/
|
    |
    |—style.css
|
|--test/
|
|—_CONTRIBUTING.md
|
|—README.md
|
|—webpack.config.js


## Setting Up the Dev Environment
	**Install Dependencies*
[ ] Navigate to the root directory and run ‘npm install’

## Starting the App
	*Please follow the ‘Setting Up the Dev Environment’ instructions before starting the app*

[ ] Open a terminal window and navigate to the root file of the project
[ ] Run ‘node server/server.js’ to start your server
[ ] You can now open http://localhost:8080/

## System Architecture

![System Architecture](/img/architecture.png)

## Contributing
	Please see [_CONTRIBUTING.md](https://github.com/mangonada/mangonada/blob/master/_CONTRIBUTING.md).

## Credits
Special thanks to Allen Price, Zak Golding, and Nathaniel Schwab.

## License
MIT
