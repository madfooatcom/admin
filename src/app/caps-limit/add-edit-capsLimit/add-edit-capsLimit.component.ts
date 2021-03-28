import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-capsLimit',
  templateUrl: './add-edit-capsLimit.component.html',
  styleUrls: ['./add-edit-capsLimit.component.scss']
})
export class AddEditCapsLimitComponent implements OnInit {

  capsLimitForm: FormGroup;
  submitted = false;
  transactionTypes = [
    'Agent Cash In',
    'eFAWATEERcom Cash In',
    'ATM Cash In',
    'Agent Cash Out',
    'ATM Cash Out'

  ]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.capsLimitForm = this.formBuilder.group({
      appliedOn: ['', Validators.required],
      transactionType: [, Validators.required],
      minAmount: [, Validators.required],
      maxAmount: [, Validators.required],
      dailyLimit: [, Validators.required],
      weeklyLimit: [, Validators.required],
      monthlyLimit: [, Validators.required],
    });
  }

  get f() { return this.capsLimitForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.capsLimitForm.controls['appliedOn'].value);

    if (this.capsLimitForm.invalid) {
      return;
    }
  }

}
