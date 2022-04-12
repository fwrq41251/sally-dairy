import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonResult, ItemLog, NewItemLog } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PlantDetailService {

  domain = environment.apiUrl;

  constructor(private http: HttpClient) { }

  saveLog(log: NewItemLog): Observable<CommonResult> {
    return this.http.post<CommonResult>(this.domain + "save-item-log", log);
  }
  
  getLogs(itemId: number): Observable<ItemLog[]> {
    return this.http.get<ItemLog[]>(this.domain + "get-logs/" + itemId);
  }
}
