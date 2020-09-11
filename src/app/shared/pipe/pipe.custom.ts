import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'formatVNMoney' })
// export class VnMoney implements PipeTransform {
//     transform(value: any): string {
//         return new Intl.NumberFormat().format(value);
//     }
// }

@Pipe({ name: 'noStraightBrick ' })
export class NoStraightBrick implements PipeTransform {
    transform(value: any): any {
        if (value.includes('|')) {
            return value.split('|').join('<br>');
        }
    }
}