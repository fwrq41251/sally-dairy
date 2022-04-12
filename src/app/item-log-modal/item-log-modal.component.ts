import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-log-modal',
  templateUrl: './item-log-modal.component.html',
  styleUrls: ['./item-log-modal.component.css']
})
export class ItemLogModalComponent implements OnInit {

  displayModal = false;
  rederImage = false;
  @ViewChild('imgRenderer') imgRenderer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.displayModal = !this.displayModal;
  }

  /**
   * Paste from clipboard
   */
   onPaste(event: any) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    let blob = null;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
        console.log(blob);
      }
    }

    // load image if there is a pasted image
    if (blob !== null) {
      const reader = new FileReader();
      reader.onload = (evt: any) => {
        console.log(evt.target.result); // data url!
        this.rederImage = true;
        this.imgRenderer.nativeElement.src = evt.target.result;
      };
      reader.readAsDataURL(blob);
    }
  }
}