import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { Fruit } from '../models/fruit.model';

@Injectable({providedIn:"root"})
export class FruitService extends BaseApiService<Fruit>{
  constructor(public http:HttpClient){
    super(http, "api/product")
  }
  getDetaiFruit():Observable<any>{
      return this.http.get("5");
  }
}
