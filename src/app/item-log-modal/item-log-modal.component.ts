import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlantDetailService } from '../plant-detail.service';

@Component({
  selector: 'app-item-log-modal',
  templateUrl: './item-log-modal.component.html',
  styleUrls: ['./item-log-modal.component.css']
})
export class ItemLogModalComponent implements OnInit {

  displayModal = false;
  rederImage = false;
  log = "";
  @Input() itemId = 0;
  @ViewChild('imgRenderer') imgRenderer!: ElementRef;
  @Output() newLogEvent = new EventEmitter();

  constructor(private itemDetailService: PlantDetailService) { }

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

  onSubmmit(): void {
    let newLog = {
      log: this.log,
      plantItemId: this.itemId,
    };
    this.itemDetailService.saveLog(newLog).subscribe(_ => {
      this.newLogEvent.emit();
    });
    this.toggleModal();
  }

}
