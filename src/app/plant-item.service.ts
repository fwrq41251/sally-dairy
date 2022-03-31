import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantItem } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PlantItemService {

  constructor(private http: HttpClient) { }

  getItems(): PlantItem[] {
    return [
      { id: 1, name: "tomato", type: "t", createDate: "2022-03-20", finished: false },
      { id: 2, name: "pepper", type: "p", createDate: "2021-07-05", finished: true },
    ];
  }

}
