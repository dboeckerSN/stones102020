import { FormControl } from '@angular/forms';

export class CustomValidators {
   static alphaNum(ctrl: FormControl): {[key: string]: boolean} {
      const pattern: RegExp = /[a-zA-Z0-9]/;
      return pattern.test(ctrl.value) ? null : { alphaNum: true };
   }

   static positiv(ctrl: FormControl): {[key: string]: boolean} {
    return ctrl.value >= 0 ? null : { positiv: true };
 }

}
