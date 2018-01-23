import { Injectable } from '@angular/core';
const uuidv1 = require('uuid/v1');

@Injectable()
export class UuidService {

  constructor() {  }

  getUuid(): string {
    return uuidv1();
  }
}