import { Component, OnInit, ViewChild } from '@angular/core';
import { PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: ['./plant-table.component.css'],
})
export class PlantTableComponent implements OnInit {

  items: PlantItem[] = [];
  fullItems: PlantItem[] = [];
  focousItemId = 0;

  constructor(private plantItmeService: PlantItemService) { }

  ngOnInit(): void {
    this.plantItmeService.getItems().subscribe(plants => {
      this.items = plants;
      this.fullItems = plants;
    });
  }

  filterItems(name: string): void {
    if (name && name.length > 0) {
      this.items = this.items.filter(i => i.name.startsWith(name))
    } else {
      this.items = this.fullItems;
    }
  }

}
