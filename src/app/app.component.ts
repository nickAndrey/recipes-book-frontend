import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  data: any;

  constructor(private appService: AppService) {
    this.appService.getHomePage().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
