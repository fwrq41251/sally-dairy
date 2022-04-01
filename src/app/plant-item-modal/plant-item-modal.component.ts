import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlantItem } from '../interface';

@Component({
  selector: 'app-plant-item-modal',
  templateUrl: './plant-item-modal.component.html',
  styleUrls: ['./plant-item-modal.component.css']
})
export class PlantItemModalComponent implements OnInit {

  @Input() displayItemModal = false;
  showTypePanel = false;

  newPlantForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayItemModal = !this.displayItemModal;
    this.showTypePanel = false;
  }

  onSubmit(): void {
    console.warn(this.newPlantForm.value);
  }

  newItem(): void {
    this.toggleModal();
    this.newPlantForm.patchValue({
      name: '',
      type: '',
    });
  }

  editItem(item: PlantItem): void {
    this.toggleModal();
    this.newPlantForm.patchValue({
      name: item.name,
      type: item.type,
    });
  }

  setType(type: string): void {
    this.newPlantForm.patchValue({
      type: type,
    })
  }

}
