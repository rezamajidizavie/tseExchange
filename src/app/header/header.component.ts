import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  textDir
  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'fa') {
        this.textDir = 'right';
      }
      else {
        this.textDir = 'left';
      }
    });

    if (this.translate.currentLang == 'fa') {
      this.textDir = 'right';
    }
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
