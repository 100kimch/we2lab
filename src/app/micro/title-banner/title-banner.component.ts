import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-title-banner',
  templateUrl: './title-banner.component.html',
  styleUrls: ['./title-banner.component.css']
})
export class TitleBannerComponent implements OnInit {
  isSubPage = false;
  currentPage = '';

  constructor(
    router: Router,
    location: Location,
    private _elementRef: ElementRef
  ) {
    router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        const routePath = event.urlAfterRedirects;
        console.log('routePath: ', routePath);
        switch (routePath) {
          case '/home':
            this.isSubPage = false;
            this.currentPage = 'home';
            break;
          case '/business':
            this.isSubPage = true;
            this.currentPage = 'business';
            break;
          case '/products':
            this.isSubPage = true;
            this.currentPage = 'products';
            break;
          case '/contact':
            this.isSubPage = true;
            this.currentPage = 'contact';
            break;
        }
        // this.updateData(routePath);
        // if (this.dataset['title']) {
        //   this._elementRef.nativeElement.className = this.route[this.dataset['title']];
        // }
        // console.log(this.route[this.dataset['title']]);
      }
    });
  }

  ngOnInit() {
  }

}
