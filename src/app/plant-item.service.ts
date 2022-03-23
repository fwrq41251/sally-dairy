import { Injectable } from '@angular/core';
import { PlantItem } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PlantItemService {

  constructor() { }

  getItems(): PlantItem[] {
    return [
      { name: "tomato", type: "t", createDate: "2022-03-20", finished: false },
      { name: "pepper", type: "p", createDate: "2021-07-05", finished: true },
    ];
  }

}
