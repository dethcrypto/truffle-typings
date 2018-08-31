// truffle suite adds chai expect and assert to global...
/// <reference types="chai" />
/// <reference types="mocha" />
declare const assert: Chai.AssertStatic;
declare const expect: Chai.ExpectStatic;

// and 'contract' function like describe
declare function contract(name: string, test: (accounts: Truffle.Accounts) => void): void;

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
}
