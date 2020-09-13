import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { Fruit } from '../models/fruit.model';



@Injectable({providedIn:"root"})
export class FruitService extends BaseApiService<Fruit>{
  constructor(public http:HttpClient){
    super(http, "api/product")
  }
  getDetailFruit(id):Observable<any>{
      return this.http.get(`api/products/province/${id}`).pipe(map((data:any) => data.Payload));
  }
}
