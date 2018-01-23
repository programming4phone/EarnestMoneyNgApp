# Earnest Money Angular App 

This project provides the UI for the [Ethereum Smart Contract for Earnest Money](https://github.com/programming4phone/EarnestMoney "Ethereum Smart Contract for Earnest Money") project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Before starting the dev server, the smart contract needs to be migrated to the appropriate test environment. Once the address of the deployed contract is known, the 
contract address in the file `environment.ts` needs to be changed.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The app needs to be run in either Firefox or Chrome with the [MetaMask] (https://metamask.io/ "MetaMask") add-on installed.

The smart contract was developed/tested using Truffle and Ganache so [further configuration of MetaMask] (http://truffleframework.com/docs/advanced/truffle-with-metamask "Truffle with MetaMask") is needed.
Once complete, use MetaMask to create 4 new accounts, one for each of the following: owner, realtor, buyer, and closing agent. The owner should be the account used to migrate the contract to the test environment.
As you test, you will need to switch accounts in MetaMask as needed.

## Development stack

This project was developed using primeng, font-awesome, truffle-contract, web3-js, and uuid.
 
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Most of the truffle-contract examples make use of the `require` command, so changes to the type definitions for node are needed. To install , run `npm install --save @types/node` and make the appropriate changes to `tsconfig.app.json`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
