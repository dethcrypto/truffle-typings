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
    gas?: number | string;
    gasPrice?: number | string;
    value?: number | string;
  }

  export interface TransactionLog {
    address: string;
    args: any;
    blockHash: string;
    blockNumber: number;
    event: string;
    logIndex: number;
    transactionHash: string;
    transactionIndex: number;
    type: string;
  }

  export interface TransactionResponse {
    tx: string;
    receipt: any;
    logs: TransactionLog[];
  }

  interface Contract<T> extends ContractNew<any[]> {
    deployed(): Promise<T>;
    at(address: string): T;
    address: string;
    contractName: string;
  }

  interface ContractInstance {
    address: string;
  }

  interface ContractNew<ARGs extends any[]> {
    "new"(...args: ARGs): any;
  }

  interface Deployer {
    link(library: Truffle.Contract<any>, destination: Truffle.Contract<any>): Deployer;
    link(library: Truffle.Contract<any>, destinations: Array<Truffle.Contract<any>>): Deployer;
    deploy<T extends any[]>(c: ContractNew<T>, ...args: T): Deployer;
  }

  type Migration = (deploy: Deployer, network: string, accounts: Accounts) => void;

  // Wanna exact typings for your smartcontracts? Use typechain
  interface Artifacts {
    require<T = any>(name: string): T;
  }
}
