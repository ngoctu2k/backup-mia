import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { Fruit } from '../models/fruit.model';
import { map } from 'rxjs/operators';


@Injectable({providedIn:"root"})
export class FruitService extends BaseApiService<Fruit>{
  constructor(public http:HttpClient){
    super(http, "api/product")
  }
  getDetailFruit():Observable<any>{
      return this.http.get("api/products/province/1").pipe(map((data:any) => data.Payload));
  }
}
