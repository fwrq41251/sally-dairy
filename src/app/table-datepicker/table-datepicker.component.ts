import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bulmaCalendar from 'bulma-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-table-datepicker',
  templateUrl: './table-datepicker.component.html',
  styleUrls: ['./table-datepicker.component.scss']
})
export class TableDatepickerComponent implements OnInit {

  @Input() value!: DatepickerValue;
  @Output() setDateEvent = new EventEmitter<DatepickerValue>();
  calendar!: bulmaCalendar;
  domElement!: HTMLElement;
  calendarOption: bulmaCalendar.Options = {
    type: "date",
    displayMode: 'default',
    color: "primary",
    showHeader: false,
    dateFormat: 'MMM d, y',
    lang: 'en',
    showButtons: false,
  };

  constructor(private ref: ElementRef) { 
    this.domElement = ref.nativeElement as HTMLElement;
  }

  ngOnInit(): void {
    this.calendar = bulmaCalendar.attach(this.domElement, this.calendarOption)[0];
    this.calendar.value(this.value.date);
    this.calendar.on('select', _ => {
      this.value.date = getFormattedDate(this.calendar);
      this.setDateEvent.emit(this.value);
    });

    function getFormattedDate(calendar: bulmaCalendar) {
      let date = calendar.startDate;
      return (moment(date).format('yyyy-MM-DD'));
    }
  }

}

export interface DatepickerValue {
  date: string,
  type: number
}

