import { Component,OnInit } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tseExchange';
  textDir;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'fa') {
        this.textDir = 'rtl';
      }
      else {
        this.textDir = 'ltr';
      }
    });
  }
}
