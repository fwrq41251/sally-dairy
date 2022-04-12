import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-plant-table',
  templateUrl: './plant-table.component.html',
  styleUrls: ['./plant-table.component.css'],
})

export class PlantTableComponent implements OnInit {

  items: PlantItemRow[] = [];
  fullItems: PlantItemRow[] = [];

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
          showDetailButton: false,
          showRatingPanel: false,
        }
      });
      this.fullItems = this.items;
    });
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

  setRating(rating: number, item: PlantItemRow, event: Event): void {
    item.rating = rating;
    this.editItem(item);
    item.showRatingPanel=false
    event.stopPropagation();
  }

  reloadPage() {
    window.location.reload();
  }

}

interface PlantItemRow extends PlantItem {
  showDetailButton: boolean;
  showRatingPanel: boolean;
}