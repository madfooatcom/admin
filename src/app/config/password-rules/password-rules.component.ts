import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-rules',
  templateUrl: './password-rules.component.html',
  styleUrls: ['./password-rules.component.scss']
})
export class PasswordRulesComponent implements OnInit {

  password_rules=[
    'Minmum Length',
    'Capital Letter',
    'Small Letter',
    'Special Character',
    'Number Character',
  ]
  constructor() { }

  ngOnInit() {
  }

}
