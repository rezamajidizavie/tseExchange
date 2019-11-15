import { Component,OnInit } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  textDir;
  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'fa') {
        this.textDir = 'right';
      }
      else {
        this.textDir = 'left';
      }
    });
  }

  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Usa'
    },
    {
      id: 2,
      name: 'England'
    }
  ];

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  changeType() {

  }


  selectEvent(item) {
    console.log(item);

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

}
