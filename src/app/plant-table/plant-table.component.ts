import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ItemOrder, PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as bulmaCalendar from 'bulma-calendar';
import * as moment from 'moment';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: [
    './plant-table.component.scss',
  ],
})

export class PlantTableComponent implements OnInit, AfterViewChecked {

  items: PlantItemRow[] = [];
  fullItems: PlantItemRow[] = [];
  sowCalendars: bulmaCalendar[] = [];
  bloomCalendars: bulmaCalendar[] = [];
  harvestCalendars: bulmaCalendar[] = [];
  calendarOption: bulmaCalendar.Options = {
    type: "date",
    displayMode: 'default',
    color: "primary",
    showHeader: false,
    dateFormat: 'MMM d, y',
    lang: 'en',
    showButtons: false,
  };
  isMobile = true;

  constructor(
    private plantItmeService: PlantItemService, private datepipe: DatePipe, breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngAfterViewChecked(): void {
    if (this.sowCalendars.length == 0) {
      this.sowCalendars = bulmaCalendar.attach('.date-s', this.calendarOption);

      for (let i = 0; i < this.sowCalendars.length; i++) {
        let item = this.items[i];
        let calendar = this.sowCalendars[i];
        calendar.value(item.sowDate);
        calendar.on('select', _ => {
          item.sowDate = getFormattedDate(calendar);
          this.editItem(item);
        });
      }
    }

    if (this.bloomCalendars.length == 0) {
      this.bloomCalendars = bulmaCalendar.attach('.date-b', this.calendarOption);

      for (let i = 0; i < this.bloomCalendars.length; i++) {
        let item = this.items[i];
        let calendar = this.bloomCalendars[i];
        calendar.value(item.bloomDate);
        calendar.on('select', _ => {
          item.bloomDate = getFormattedDate(calendar);
          this.editItem(item);
        });
      }
    }

    if (this.harvestCalendars.length == 0) {
      this.harvestCalendars = bulmaCalendar.attach('.date-h', this.calendarOption);

      for (let i = 0; i < this.harvestCalendars.length; i++) {
        let item = this.items[i];
        let calendar = this.harvestCalendars[i];
        calendar.value(item.harvestDate);
        calendar.on('select', _ => {
          item.harvestDate = getFormattedDate(calendar);
          this.editItem(item);
        });
      }
    }

    function getFormattedDate(calendar: bulmaCalendar) {
      let date = calendar.startDate;
      return (moment(date).format('yyyy-MM-DD'));
    }
  }


  ngOnInit(): void {
    this.plantItmeService.getItems().subscribe(plants => {
      plants.forEach(p => {
        p.sowDate = this.datepipe.transform(p.sowDate, 'yyyy-MM-dd')!;
        p.bloomDate = this.datepipe.transform(p.bloomDate, 'yyyy-MM-dd')!;
        p.harvestDate = this.datepipe.transform(p.harvestDate, 'yyyy-MM-dd')!;
      });
      this.items = plants.map(p => {
        return {
          id: p.id,
          name: p.name,
          category: p.category,
          sowDate: p.sowDate,
          bloomDate: p.bloomDate,
          harvestDate: p.harvestDate,
          rating: p.rating,
          saveSeed: p.saveSeed,
          note: "",
          order: p.order,
        }
      });
      this.fullItems = this.items;
    });
  }

  filterItems(name: string): void {
    if (name) {
      this.items = this.fullItems.filter(i => {
        return i.name.toLowerCase().includes(name.toLowerCase());
      });
    } else {
      this.items = this.fullItems;
    }
  }

  editItem(item: PlantItem): void {
    this.plantItmeService.editItem(item).subscribe(result => {
      console.log(result);
    });
  }

  setRating(rating: number, item: PlantItemRow, event: Event): void {
    item.rating = rating;
    this.editItem(item);
  }

  reloadPage() {
    window.location.reload();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    let order = 1;
    let itemOrders: ItemOrder[] = [];
    for (let i of this.items) {
      if (i.order != order) {
        itemOrders.push({ id: i.id, order: order });
      }
      order++;
    }
    this.plantItmeService.saveItemOrders(itemOrders).subscribe(result => {
      console.log(result);
    });
  }

  formatDate(date: string) {
    console.log(date);
  }

}

interface PlantItemRow extends PlantItem {
  showDetailButton?: boolean;
}