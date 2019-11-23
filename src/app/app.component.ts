import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DateCustomAngularApp';
  txtDteTime: '';
  DteTime: any;

  public constructor() {
    this.DteTime = this.txtDteTime;
  }
}
