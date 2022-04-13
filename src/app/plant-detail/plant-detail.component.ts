import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bulmaCalendar from 'bulma-calendar';
import { emptyItem, ItemLog, PlantItem } from '../interface';
import { PlantDetailService } from '../plant-detail.service';
import { PlantItemService } from '../plant-item.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  plantId = 0;
  calendar!: bulmaCalendar;
  plantItem: PlantItem = emptyItem();
  logs: ItemLog[] = [];
  masonryOptions: NgxMasonryOptions = {
    gutter: 50,
    horizontalOrder: true
  };

  constructor(
    private route: ActivatedRoute,
    private plantItemService: PlantItemService,
    private plantDetailService: PlantDetailService,
  ) { }

  ngOnInit(): void {
    this.plantId = Number(this.route.snapshot.paramMap.get('itemId'));
    this.plantItemService.getItemById(this.plantId).subscribe(item => {
      this.plantItem = item;
    });
    this.plantDetailService.getLogs(this.plantId).subscribe(logs => {
      this.logs = logs;
    });
    this.calendar = bulmaCalendar.attach('.date-picker', {
      type: "date",
      color: "primary",
      displayMode: "inline",
      isRange: true,
      showHeader: false,
      showTodayButton: false,
    })[0];
    this.calendar.on('select', event => {
      this.showSelected();
    });
  }

  showSelected(): void {
    console.log(this.calendar.startDate);
    console.log(this.calendar.endDate);
  }

  saveNote(item: PlantItem) {
    console.log(item);
    this.plantItemService.editItem(item).subscribe(result => {
      console.log(result);
    });
  }

  reloadPage() {
    window.location.reload();
  }

}

