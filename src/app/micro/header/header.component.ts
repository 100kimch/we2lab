import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  window = window;

  constructor() { }

  ngOnInit() {
  }

  selectLanguage(event) {
    console.log(event.target.value);
    switch (event.target.value) {
      case 'English':
        window['lang'] = 'en';
      break;
      case '한국어':
        window['lang'] = 'ko';
      break;
    }
  }

}
