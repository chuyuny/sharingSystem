import {Provider} from '@angular/core';
export class LocalStorage {

  public localStorage: any;
  public sessionStorage: any;

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
    this.sessionStorage = sessionStorage;
  }

  public set(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  public get(key: string): string {
    return this.localStorage[key] || false;
  }

  public saveDate(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public saveDateSes(key: string, value: any): void {
    this.sessionStorage[key] = JSON.stringify(value);
  }
  public getDate(key: string): any {
    return JSON.parse(this.localStorage[key] || '{}');
  }
  public getDateSes(key: string): any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }

  public removeDate(key: string): any {
    this.localStorage.removeItem(key);
  }
  public removeDateSes(key: string): any {
    this.sessionStorage.removeItem(key);
  }
}
