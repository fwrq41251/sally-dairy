import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';
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
  image = "";
  @Input() itemId = 0;
  @Output() newLogEvent = new EventEmitter();
  files: File[] = [];

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
      };
      reader.readAsDataURL(blob);
    }
  }

  onSubmmit(): void {
    let newLog = {
      log: this.log,
      plantItemId: this.itemId,
      image: this.image,
    };
    this.itemDetailService.saveLog(newLog).subscribe(_ => {
      this.newLogEvent.emit();
    });
    this.toggleModal();
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
    this.itemDetailService.uploadImage(event.addedFiles[0]).subscribe(result => {
      console.log(result);
      this.image = result.message;
    });
  }

  onRemove(file: File) {
    console.log(file);
    this.files.splice(this.files.indexOf(file), 1);
  }

}
