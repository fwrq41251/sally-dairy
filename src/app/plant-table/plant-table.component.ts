import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { ItemOrder, PlantItem } from '../interface';
import { PlantItemService } from '../plant-item.service';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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