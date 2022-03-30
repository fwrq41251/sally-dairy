import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plant-item-modal',
  templateUrl: './plant-item-modal.component.html',
  styleUrls: ['./plant-item-modal.component.css']
})
export class PlantItemModalComponent implements OnInit {

  @Input() displayItemModal = false;

  newPlantForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayItemModal = !this.displayItemModal;
  }

  onSubmit(): void {
    console.warn(this.newPlantForm.value);
  }
}
