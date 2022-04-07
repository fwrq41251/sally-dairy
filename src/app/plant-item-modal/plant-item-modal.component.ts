import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() newItemEvent = new EventEmitter();
  categories: string[] = [];

  newPlantForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
  })

  constructor(private plantItemService: PlantItemService) { }

  ngOnInit(): void {
    this.plantItemService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  toggleModal(): void {
    this.displayItemModal = !this.displayItemModal;
    this.showTypePanel = false;
  }

  onSubmmit(): void {
    let newItem = this.newPlantForm.value
    console.log(newItem)
    this.plantItemService.newItem(newItem).subscribe(result => {
      this.newItemEvent.emit();
    });
    this.toggleModal();
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

  categoryEmpty(): boolean {
    return this.categories.length == 0;
  }

}
