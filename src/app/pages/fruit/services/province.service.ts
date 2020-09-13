import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { Province } from '../models/province.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends BaseApiService<Province>{

  constructor(public http:HttpClient) {
    super(http, "api/province")
  }

  getProvince(){
    return this.http.get("api/province/Geographicregion/2").pipe(map((data:any) => data.Payload));
  }
}