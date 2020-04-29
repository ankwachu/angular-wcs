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
  myForm: FormGroup
  minDate: Date = new Date(1900, 0, 1);
  maxDate: Date = new Date();
  types = [];
  fiches = [];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: this.fb.group({
        identifiant: [''],
        titre: ['']
      }, { validator: isRequiredValidator('identifiant', 'titre') }),
      types: [''],
      date: ['', rangeDateValidator(this.minDate, this.maxDate)],
      fiches: [''],
    });
    // synchronous types
    this.types = this.getTypes();
    this.myForm.controls.types.patchValue(this.types[1].id);

    this.fiches = this.getFiches();
    this.myForm.controls.fiches.patchValue(this.fiches[1].id);
  }
  
  ngOnInit() {
    this.myForm.valueChanges
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }

  getTypes() {
    return [
      { id: '1', type: 'film'},
      { id: '2', type: 'série'},
      { id: '3', type: 'épisode'}
    ];
  }

  getFiches() {
    return [
      { id: '1', fiche: 'complète'},
      { id: '2', fiche: 'courte'}
    ]
  }

  onSubmit(response: FormGroup) {
    response.valid ? console.log('Valid') : console.log('Invalid')
  }
}