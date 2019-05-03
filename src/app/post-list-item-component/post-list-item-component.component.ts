import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() content: string;
  @Input() loveIts: number;
  createdDate = new Date();

  constructor() { }

  ngOnInit() { }

  onIncrementLove() {
    this.loveIts++;
  }
  onDecrementLove() {
    this.loveIts--;
  }

  getColor(){ return ((this.loveIts > 0) ? 'limegreen' : 'firebrick') }

}

