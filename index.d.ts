/**
 * Globals
 */
/// <reference types="chai" />
/// <reference types="mocha" />
declare const assert: Chai.AssertStatic;
declare const expect: Chai.ExpectStatic;

declare function contract(name: string, test: (accounts: Truffle.Accounts) => void): void;

declare const artifacts: Truffle.Artifacts;

declare const web3: any;

/**
 * Namespace
 */
declare namespace Truffle {
  type Accounts = string[];

  interface TransactionDetails {
    from: string;
  }

  interface Contract<T> {
    deployed(): Promise<T>;
    at(address: string): T;
  }

  interface ContractNew<ARGs extends any[]> {
    "new"(...args: ARGs): any;
  }

  interface Deployer {
    deploy<T extends any[]>(c: ContractNew<T>, ...args: T): Deployer;
  }

  type Migration = (deploy: Deployer, network: string, accounts: Accounts) => void;

  // Wanna exact typings for your smartcontracts? Use typechain
  interface Artifacts {
    require<T = any>(name: string): T;
  }
}
