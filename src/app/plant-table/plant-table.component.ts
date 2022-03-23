import { Component, OnInit } from '@angular/core';
import { PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: ['./plant-table.component.css']
})
export class PlantTableComponent implements OnInit {

  items: PlantItem[] = [];

  constructor(private plantItmeService: PlantItemService) { }

  ngOnInit(): void {
    this.items = this.plantItmeService.getItems();
  }

}
