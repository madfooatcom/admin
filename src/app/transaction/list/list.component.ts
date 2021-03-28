import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/shared/utilities/interfaces/ITransaction';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  transactions: ITransaction[]=[
    {
      id: 459115,
      type: 'Cash in',
      date: new Date(),
      status: 'Approved'
    },
    {
      id: 459000,
      type: 'Cash out',
      date: new Date(),
      status: 'Refund'
    },
    {
      id: 459238,
      type: 'Sent',
      date: new Date(),
      status: 'Sattled'
    },
    {
      id: 459554,
      type: 'Recieved',
      date: new Date(),
      status: 'Pending'
    },
    {
      id: 245789,
      type: 'Cash in',
      date: new Date(),
      status: 'Declined'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
