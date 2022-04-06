import { Component, OnInit, ViewChild } from '@angular/core';
import { PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';
import * as bulmaCalendar from 'bulma-calendar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: ['./plant-table.component.css'],
})
export class PlantTableComponent implements OnInit {

  items: PlantItem[] = [];
  fullItems: PlantItem[] = [];
  focousItemId = 0;

  constructor(
    private plantItmeService: PlantItemService, private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.plantItmeService.getItems().subscribe(plants => {
      plants.forEach(p => {
        p.sowDate = this.datepipe.transform(p.sowDate, 'yyyy-MM-dd')!;
        p.bloomDate = this.datepipe.transform(p.bloomDate, 'yyyy-MM-dd')!;
        p.harvestDate = this.datepipe.transform(p.harvestDate, 'yyyy-MM-dd')!;
      });
      this.items = plants;
      this.fullItems = plants;
    });
    // bulmaCalendar.attach('.date-picker', {
    //   type: "date",
    //   color: "primary",
    //   showHeader: false,
    // });
  }

  filterItems(name: string): void {
    if (name && name.length > 0) {
      this.items = this.items.filter(i => i.name.startsWith(name))
    } else {
      this.items = this.fullItems;
    }
  }

  editItem(item: PlantItem): void {
    this.plantItmeService.editItem(item).subscribe(result => {
      console.log(result);
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
