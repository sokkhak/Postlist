import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postlist';

  post = [ {
    title: 'Mon premier post',
    content: 'Lorem ipsum dolor sit amet',
    loveIts: 5,
    created_at: '10/24/2017, 11:00 AM'
  }
  ];

}
