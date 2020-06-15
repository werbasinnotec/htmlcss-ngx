import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: [ './themecontrol.sass', './app.component.sass' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'htmlcss-angular';
}
