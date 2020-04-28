import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { isRequiredValidator } from 'src/app/validators/isRequiredvalidator';
import { rangeDateValidator } from 'src/app/validators/rangeDateValidator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  myForm: FormGroup;
  minDate: Date = new Date(1940, 0, 1);
  maxDate: Date = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: this.fb.group({
        identifiant: [''],
        titre: ['']
      }, { validator: isRequiredValidator('identifiant', 'titre') }),
      type: ['serie'],
      annee: ['', rangeDateValidator(this.minDate, this.maxDate)],
      fiche: [''],
    });

    this.myForm.patchValue({
      fiche: 'courte'
    });

  }

  onSubmit(response: FormGroup) {
    response.valid ? console.log(this.myForm.value) : console.log('Invalid')
  }

}