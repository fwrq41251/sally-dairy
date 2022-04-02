import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';

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

  constructor(private plantItemService: PlantItemService) { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayItemModal = !this.displayItemModal;
    this.showTypePanel = false;
  }

  onSubmmit(): void {
    let newItem =this.newPlantForm.value
    console.log(newItem)
    this.plantItemService.newItem(newItem);
    this.toggleModal();
    //todo emit to parent
  }

  newItem(): void {
    this.toggleModal();
    this.newPlantForm.patchValue({
      name: '',
      type: '',
    });
  }

  setType(type: string): void {
    this.newPlantForm.patchValue({
      type: type,
    })
  }

}
