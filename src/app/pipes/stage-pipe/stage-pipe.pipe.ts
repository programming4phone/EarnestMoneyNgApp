import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stagePipe'
})
export class StagePipePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    console.log('stagePipe value: ' + value);
    let _stage: string = 'Empty';
    if (value == 0) {
        _stage = 'Empty';
    }
    if (value == 1) {
        _stage = 'Registered';
    }
    if (value == 2) {
        _stage = 'Funded';
    }
    if (value == 3) {
        _stage = 'Released';
    }
    if (value == 4) {
        _stage = 'Refunded';
    }
    if (value == 5) {
        _stage = 'Cancelled';
    }
    console.log('stagePipe _stage: ' + _stage);
    return _stage;
  }
}
