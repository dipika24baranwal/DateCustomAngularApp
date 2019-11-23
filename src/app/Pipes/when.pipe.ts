import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'when'
})
export class WhenPipe implements PipeTransform {

  // input: string in YYYY-MM-DDTHH:MM:SEC format ex. '2019-07-26T12:33:36.888'
  // output: string, one of 'Just Now','1 Hour Ago','Today' or more friendly string, ex.
  // 'Fri Jul 26 2019 12:33:36 GMT-0700 (Pacific Daylight Time)'
  transform(value: any, ...args: any[]): any {
    const dateTimeVal = new Date(value);
    const DteTime = new Date();
    const dateForm = dateTimeVal.getDate();
    const dateDateNow = DteTime.getDate();
    const timeDiff = Math.abs(DteTime.getTime() - dateTimeVal.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const diffSecs = Math.ceil(timeDiff / 1000);
    const diffMins = Math.ceil(timeDiff / (1000 * 60));
    const diffHrs = Math.floor(timeDiff / (1000 * 60 * 60));
    if (DteTime < dateTimeVal) {
      return 'Future date entered.' ;
    } else if (diffDays > 6) {
      return dateTimeVal ;
    } else if (diffSecs < 60) {
        return 'Just Now';
      } else if (diffMins < 60) {
        return diffMins + ' minutes ago!';
      } else if (diffHrs < 9) {
        return diffHrs + ' hours ago!';
      } else if (diffHrs >= 9 && dateDateNow === dateForm) {
        return 'Today!';
      } else if (diffHrs >= 9 && dateDateNow !== dateForm && dateDateNow - dateForm < 2) {
        return 'Yesterday!';
      } else if (diffDays < 6) {
        return dateDateNow - dateForm + ' days ago!';
      }
    }

}
