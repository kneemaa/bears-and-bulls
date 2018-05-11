# Bears-and-Bulls

## Environment Requirements
* Mongo v3.6.3+
* Node v9.11.1+

## Dev Setup
* Clone the repository

`git clone https://github.com/smalldoorman/bears-and-bulls.git && cd bears-and-bulls`

* Install Dependencies

    `yarn install`

* Seed your Database

    `yarn seed`

* Run Applicaiton

    `yarn start`

## Technologies
### React
    A front end templating library that allows for interactive UI with more efficient data updates and page renders (https://reactjs.org/ "React Homepage)
### React-Redux
    A predictable state container that incorporates an application global state to help manage data and page rendering in response to user actions and/or events
    (https://redux.js.org/ "Redux Homepage")
### Express.js
    Application framework library to control backend routing
    (http://expressjs.com/ "Express.js Homepage")
### Websockets via socket.io
    Using webscokets allows for a realtime update of stock values from 
    (https://iextrading.com/developer/docs/#iex-listed-symbol-directory "IEX Trading");
    socket.io is a websocket management library that increases ease of use for native websockets; our websocket is instantiated client side and sends/receives with a third party (IEX); the websocket functionality with Redux also required custom middleware (see next item)
### Custom Middleware
    _sockets.js_, added to _store.js_ acts as middleware that solves timing issues with socket initiation and acts as a gatekeeper for user actions executing the websocket functions only when specific user actions are detected 
### eCharts
    All interactive charts are created using the eCharts npm package; this package is not built to work well with Redux organically, so components that utilize charts also utilize a _componentDidUpdate_ function
    (https://www.npmjs.com/package/echarts "eCharts npm page")
## Testing
### Framework
Testing is built on **Enzyme** and **Jest**. The test files are stored in the same directories as the files they are validating, the naming structure mirrors file that they are validating except that "spec" is prepended to the file extension. ("test" can also be prepended in place of "spec")

### Running Tests
* Switch to the branch that you want to test against
* Run `yarn test` 