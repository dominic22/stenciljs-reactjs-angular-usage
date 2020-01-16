import { Component, ElementRef, ViewChild } from '@angular/core';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
  })
export class AppComponent {
  @ViewChild('popUp', { static: false })
  popUpRef: ElementRef<HTMLStPopUpElement>;

  primaryButtonClick($event) {
    this.popUpRef.nativeElement.show();
  }

  onPopUpClose($event) {
    if ($event.detail) {
      console.log('article bought', $event);
    } else {
      console.log('dialog cancelled', $event);
    }
  }
}
