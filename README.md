# Bears-and-Bulls

##Environment Requirements
* Mongo v3.6.3+
* Node v9.11.1+

##Dev Setup
* Clone the repository

`git clone https://github.com/smalldoorman/bears-and-bulls.git && cd bears-and-bulls`

* Install Dependencies

    `yarn install`

* Seed your Database

    `yarn seed`

* Run Applicaiton

    `yarn start`

## Testing
### Framework
Testing is built on **Enzyme** and **Jest**. The test files are stored in the same directories as the files they are validating, the naming structure mirrors file that they are validating except that "spec" is prepended to the file extension. ("test" can also be prepended in place of "spec")

### Running Tests
* Switch to the branch that you want to test against
* Run `yarn test` 