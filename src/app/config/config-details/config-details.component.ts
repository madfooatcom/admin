import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParamterTypes } from 'src/app/shared/utilities/enums/paramter-types.enum';

@Component({
  selector: 'app-config-details',
  templateUrl: './config-details.component.html',
  styleUrls: ['./config-details.component.scss']
})
export class ConfigDetailsComponent implements OnInit {

  paramter_type: string = 'password';
  paramterForm: FormGroup;
  submitted = false;
  listItems = [];
  listItemsNeeded = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.changeParamterType(this.paramter_type);
  }

  initForm() {
    this.paramterForm = this.formBuilder.group({
      paramter_name: [],
      paramter_type: [],
      minLength: [],
      maxLength: [],
      capitalLetter: [],
      smallLetter: [],
      numbers: [],
      specialCharacter: []
    });
  }

  get f() { return this.paramterForm.controls; }

  changeParamterType(ev) {
    let formParamtersToAdd = [];
    console.log(this.paramter_type);

    switch (this.paramter_type) {
      case ParamterTypes.text: case ParamterTypes.number:
        formParamtersToAdd.push('minLength', 'maxLength');
        break;

      case ParamterTypes.password:
        formParamtersToAdd.push('minLength', 'maxLength', 'capitalLetter',
          'smallLetter', 'numbers', 'specialCharacter');
        break;

      default:
        break;
    }
    this.validating(formParamtersToAdd);
  }


  validating(paramters: string[]) {
    this.paramterForm.reset();
    // remove all validators
    Object.keys(this.paramterForm.controls).forEach(key => {
      this.paramterForm.controls[key].clearValidators();
      this.paramterForm.controls[key].updateValueAndValidity();
    });

    // add validators
    this.paramterForm.controls['paramter_name'].setValidators(Validators.required);
    this.paramterForm.controls['paramter_name'].updateValueAndValidity();
    paramters.forEach(param => {
      this.paramterForm.controls[param].setValidators([Validators.required, Validators.pattern(/^[0-9]*$/)]);
      this.paramterForm.controls[param].updateValueAndValidity();
    });
  }

  updateListItems(listItems: any[]) {
    this.listItems = listItems;
  }

  onSubmit() {
    let validationValues = [];
    this.submitted = true;

    if (this.paramterForm.valid) {
      if (this.paramter_type === 'list') {
        if (this.listItems.length > 1) {
          console.log(this.listItems);
        } else {
          this.listItemsNeeded = true;
          return
        }

      } else {
        Object.keys(this.paramterForm.controls).forEach(key => {
          if (this.paramterForm.controls[key].value != null) {
            validationValues.push(
              {
                key: key,
                value: this.paramterForm.controls[key].value
              })
          }
        });
      }
      this.router.navigateByUrl('/config');
    }

  }

}
