import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.less']
           })
export class AppComponent {
  @ViewChild('popUp', { static: false })
  popUpRef: ElementRef<HTMLStPopUpElement>;

  proButtonClick($event) {
    this.popUpRef.nativeElement.show();
  }
  onPopUpClose($event) {
    console.log('POP UP CLOSES', $event.detail);
  }
}
