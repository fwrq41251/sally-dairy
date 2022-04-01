import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as bulmaCalendar from 'bulma-calendar';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  plantId = 0;
  calendar!: bulmaCalendar;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.plantId = params['id'];
    })
    this.calendar = bulmaCalendar.attach('.datePicker', {
      type: "date",
      color: "primary",
      displayMode: "inline",
      isRange: true,
      showHeader: false,
      showTodayButton: false,
    })[0];
    this.calendar.on('select', event => {
      this.showSelected();
    })
  }

  showSelected(): void {
    console.log(this.calendar.startDate);
    console.log(this.calendar.endDate);
  }



}
