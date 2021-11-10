import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TreePuzzle';
  public screenWidth: any;

  public screenHeight: any;
    ngOnInit() {

      this.screenWidth = window.innerWidth;

      this.screenHeight = window.innerHeight;

  }
}
