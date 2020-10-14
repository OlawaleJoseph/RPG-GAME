import '@babel/polyfill';

import { saveNameTolocalstorage, getName } from '../src/utils/storage';

describe('LocalStorage', () => {
  it('Should set given name to local storage', () => {
    saveNameTolocalstorage('Tester');
    const name = localStorage.getItem('playerName');
    expect(name).toEqual('Tester');
  });

  it('Should set name to Anonymous when no name is given', () => {
    saveNameTolocalstorage();
    const name = localStorage.getItem('playerName');
    expect(name).toEqual('Anonymous');
  });
});
