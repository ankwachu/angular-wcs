import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function rangeDateValidator(minYear: Date, maxYear: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputDate = control.value;
      if ((inputDate >= minYear.getFullYear()) && (inputDate <= maxYear.getFullYear())) {
        return null;
      } else {
        return { min: `L'année doit être comprise entre ${minYear.getFullYear()} et ${maxYear.getFullYear()}` };
      }
    };
  }