import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/shared/utilities/interfaces/IUser';
import { TransactionCapLimit } from 'src/app/shared/utilities/interfaces/transactionCapLimit';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  transactions: TransactionCapLimit[] = [
    {
      code: 4322,
      transactionType: 'Agent Cash in',
      appliedOn: 'Both'
    },
    {
      code: 2455,
      transactionType: 'efAWATEERcom Cash in',
      appliedOn: 'Citizen'
    },
    {
      code: 4333,
      transactionType: 'ATM Cash in',
      appliedOn: 'Non-citizen'
    },
    {
      code: 3223,
      transactionType: 'Agent Cash out',
      appliedOn: 'Both'
    },
    {
      code: 3203,
      transactionType: 'ATM cash out',
      appliedOn: 'Both'
    },
  ]
  displayedColumns$ = new BehaviorSubject<string[]>([
    'code',
    'transactionType',
    'appliedOn',
    'actions'
  ]);
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  userSearch= '';
  constructor() { }

  ngOnInit() {
    this.tableDataSource$.next(Object.values(this.transactions))
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
    console.log(' this.sortKey$', this.sortKey$);
    console.log('this.sortDirection$', this.sortDirection$);

  }

  deleteItem(){
    console.log('deleting');
  }
}
