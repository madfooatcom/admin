import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionCapLimit, TransactionCapLimitObj } from 'src/app/shared/utilities/interfaces/transactionCapLimit';

@Component({
  selector: 'app-add-edit-capsLimit',
  templateUrl: './add-edit-capsLimit.component.html',
  styleUrls: ['./add-edit-capsLimit.component.scss']
})
export class AddEditCapsLimitComponent implements OnInit {

  pageMood: string;
  capsLimitForm: FormGroup;
  submitted = false;
  citizen = false;
  nonCitizen = false;
  capsLimitsObj: TransactionCapLimitObj;
  transactionTypes = [
    'Agent Cash In',
    'eFAWATEERcom Cash In',
    'ATM Cash In',
    'Agent Cash Out',
    'ATM Cash Out'
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.formInit();
    this.activatedroute.data.subscribe(data => {
      this.pageMood = data.pageMood;
    })
    if (this.pageMood == "edit") {
      this.capsLimitsObj = {
        code: 1,
        transactionType: 'ATM Cash In',
        appliedOnCitizen: false,
        appliedOnNonCitizen: true,
        minAmount: 100,
        maxAmount: 4000,
        dailyLimit: 8000,
        weeklyLimit: 20000,
        monthlyLimit: 90000,
      }
      this.citizen = this.capsLimitsObj.appliedOnCitizen
      this.nonCitizen = this.capsLimitsObj.appliedOnNonCitizen
    }
  }

  formInit() {
    this.capsLimitForm = this.formBuilder.group({
      transactionType: [, Validators.required],
      minAmount: [, [Validators.pattern(/^\d{1,4}$/)]],
      maxAmount: [, [Validators.pattern(/^\d{1,4}$/)]],
      dailyLimit: [, [Validators.pattern(/^\d{1,4}$/)]],
      weeklyLimit: [, [Validators.pattern(/^\d{1,4}$/)]],
      monthlyLimit: [, [Validators.pattern(/^\d{1,4}$/)]],
    });
  }

  get f() { return this.capsLimitForm.controls; }

  onSubmit() {
    this.submitted = true;
    debugger;
    if (this.capsLimitForm.invalid || (!this.citizen && !this.nonCitizen)) {
      return;
    }
    this.router.navigateByUrl('capslimit');
    console.log(this.capsLimitForm.controls);
  }

}
