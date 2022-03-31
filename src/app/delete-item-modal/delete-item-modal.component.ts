import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.css']
})
export class DeleteItemModalComponent implements OnInit {

  itemId: number = 0;
  displayDeleteModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayDeleteModal = !this.displayDeleteModal;
    console.log("itemId:" + this.itemId);
  }

  delteItem(itemId: number): void {
    this.toggleModal();
    this.itemId = itemId;
  }
}
