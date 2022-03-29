import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-item-modal',
  templateUrl: './plant-item-modal.component.html',
  styleUrls: ['./plant-item-modal.component.css']
})
export class PlantItemModalComponent implements OnInit {

  @Input() displayItemModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayItemModal = !this.displayItemModal;
  }
}
