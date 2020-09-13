import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private detail = new BehaviorSubject<any>({
    isDetail: false,
    selectedIndex: 0
  });
  sharedDetail = this.detail.asObservable();

  private _params = new BehaviorSubject<any>({
    params: {
      regions: '',
      province: ''
    },
    keys: []
  });
  params = this._params.asObservable();

  private fruitDetail = new BehaviorSubject<any>({

  });
  shareFruitDetail  = this.fruitDetail.asObservable();
  private showMap = new BehaviorSubject<any>({

  });
  shareshowMap  = this.showMap.asObservable();

  constructor() { }

  nextMessage(a: any) {
    this.detail.next(a);
  }

  setDataParams(data: any) {
    this._params.next(data);
  }
  setDetail(val:any){
    this.fruitDetail.next(val);
  }
  setShowMap(val:any){
    this.showMap.next(val);
  }
}
