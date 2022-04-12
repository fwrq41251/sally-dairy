import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-tag',
  templateUrl: './star-tag.component.html',
  styleUrls: ['./star-tag.component.css']
})
export class StarTagComponent implements OnInit {

  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
