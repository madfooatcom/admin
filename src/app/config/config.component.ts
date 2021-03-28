import { Component, OnInit } from '@angular/core';
// import { Select2OptionData } from 'ngSelect2';
import { Options } from 'select2';
import { ParamterTypes } from '../shared/utilities/enums/paramter-types.enum';
import { Paramters } from '../shared/utilities/interfaces/paramters';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  paramters: Paramters[]=[
    {
      code: 123,
      name: 'Document types',
      type: ParamterTypes.list
    },
    {
      code: 1234,
      name: 'Name',
      type: ParamterTypes.text
    },
    {
      code: 1234,
      name: 'Gender',
      type: ParamterTypes.boolean
    },
    {
      code: 1234,
      name: 'OTP',
      type: ParamterTypes.number
    },
    {
      code: 1234,
      name: 'HTML',
      type: ParamterTypes.html
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
