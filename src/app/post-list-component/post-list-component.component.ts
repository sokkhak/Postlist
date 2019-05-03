import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adjipiscing elit, sed do elusmod tempor',
      loveIts: '5'
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adjipiscing elit, sed do elusmod tempor',
      loveIts: '-5'
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, tempor',
      loveIts: '0'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
