import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginActive : true;

setloginActive (dsdf) {
  this.loginActive = dsdf;
}
}
