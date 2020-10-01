import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fraudbusters-ui';
  menuItems: { name: string; route: string }[] = [
    {name: 'Templates', route: '/templates'},
    {name: 'References', route: '/references'},
    {name: 'Groups', route: '/groups'}
  ];

}
