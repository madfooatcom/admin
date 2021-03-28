import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en-US', 'ar-AR']);
    translate.setDefaultLang('en-US');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/ar|ar-AR/) ? 'ar-AR' : 'en-US');
  }

  ngOnInit() {
  }

}
