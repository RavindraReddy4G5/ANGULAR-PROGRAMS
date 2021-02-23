import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  user = {
    id:2,
  };
}




