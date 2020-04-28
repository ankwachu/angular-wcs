import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function isRequiredValidator(Identifiant: string, Titre: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
  
      if (control.get(Identifiant).value !== '' || control.get(Titre).value !== '') {
        return null;
      } else {
        return { isRequired: `L'un des 2 champs 'Identifiant' ou 'Titre' doit être renseigné` };
      }
    };
  }
