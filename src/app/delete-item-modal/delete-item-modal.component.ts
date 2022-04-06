import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlantItemService } from '../plant-item.service';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.css']
})
export class DeleteItemModalComponent implements OnInit {

  itemId: number = 0;
  displayDeleteModal: boolean = false;
  @Output() deleteItemEvent = new EventEmitter();

  constructor(private plantItemService: PlantItemService) { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayDeleteModal = !this.displayDeleteModal;
  }

  delteItem(itemId: number): void {
    this.toggleModal();
    this.itemId = itemId;
  }

  deleteSubmit(itemId: number): void {
    this.plantItemService.deleteItem(itemId).subscribe(result => {
      this.deleteItemEvent.emit();
    });
    this.toggleModal();
  }
}
