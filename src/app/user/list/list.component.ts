import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from 'src/app/shared/utilities/interfaces/IUser';
declare let $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {
  };
  collection = [1, 2, 3]
  users: IUser[] = [
    {
      id: 1,
      fullName: 'Nareman',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 1234,
      registrationDate: new Date(),
      status: 'pending activation'
    },
    {
      id: 2,
      fullName: 'Nour',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 12634,
      registrationDate: new Date(),
      status: 'inactive'
    },
    {
      id: 3,
      fullName: 'Doaa',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 41234,
      registrationDate: new Date(),
      status: 'inactive'
    },
    {
      id: 4,
      fullName: 'Ahmed',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 10234,
      registrationDate: new Date(),
      status: 'active'
    },
    {
      id: 5,
      fullName: 'Motaz',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 17234,
      registrationDate: new Date(),
      status: 'active'
    },
    {
      id: 5,
      fullName: 'Motaz',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 17234,
      registrationDate: new Date(),
      status: 'active'
    },
    {
      id: 5,
      fullName: 'Motaz',
      mobileNumber: '0123456789',
      nationality: 'Egyptian',
      documentId: 17234,
      registrationDate: new Date(),
      status: 'active'
    },
  ]
  displayedColumns$ = new BehaviorSubject<string[]>([
    'id',
    'fullName',
    'mobileNumber',
    'nationality',
    'documentId',
    'registrationDate',
    'status',
    'action'
  ]);
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  userSearch= '';
  constructor() { }

  ngOnInit() {
    this.tableDataSource$.next(Object.values(this.users))
  }

  prevPage(): void {
    console.log('prev clicked')
  }
  nextPage(): void {
    console.log('next clicked')
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

  filter(ev) {
    let filteredHeroes: any[];
    const filteredResults = this.users.filter(hero => {
      return Object.values(hero)
        .reduce((prev, curr) => {
          return prev || curr.toString().toLowerCase().includes(this.userSearch.toLowerCase());
        }, false);
    });

    filteredHeroes = filteredResults;

    const sortedHeroes = filteredHeroes.sort((a, b) => {
      // if(true) return sortDirection === 'asc' ? 1 : -1;
      // if(true) return sortDirection === 'asc' ? -1 : 1;
      return 0;
    });

    this.tableDataSource$.next(sortedHeroes);
  }

  pageChange(ev) {
    console.log(ev);
  }

}
