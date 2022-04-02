import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonResult, NewPlantItem, PlantItem } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PlantItemService {

  constructor(private http: HttpClient) { }

  domain = "https://sally-dairy.herokuapp.com/";

  getItems(): Observable<PlantItem[]> {
    const plants = this.http.get<PlantItem[]>(this.domain + "plants");
    return plants;
  }

  getItemById(id: number): Observable<PlantItem> {
    const plant = this.http.get<PlantItem>(this.domain + "plant/" + id);
    return plant;
  }

  newItem(item: NewPlantItem): Observable<CommonResult>{
    return this.http.post<CommonResult>(this.domain + "new-plant-item", item);
  }
}
