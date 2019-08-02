import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
export function ValidateDate(control: AbstractControl) {
    const controlValue = control.value;
    if (!moment(controlValue).isValid()) {
        return { invalidDate: true };
    }
    return null;
}
