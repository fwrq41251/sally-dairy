import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bulmaCalendar from 'bulma-calendar';
import { emptyItem, PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  plantId = 0;
  calendar!: bulmaCalendar;
  plantItem: PlantItem = emptyItem();

  constructor(
    private route: ActivatedRoute,
    private plantItemService: PlantItemService
  ) { }

  ngOnInit(): void {
    this.plantId = Number(this.route.snapshot.paramMap.get('itemId'));
    this.plantItemService.getItemById(this.plantId).subscribe(item => {
      this.plantItem = item;
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



}

