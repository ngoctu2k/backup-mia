import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from 'src/app/shared/services/base.service';
import { Region } from '../models/region.model';

@Injectable({ providedIn: "root" })
export class RegionService extends BaseApiService<Region>{
    constructor(public http: HttpClient) {
        super(http, "api/GeographicRegion")
    }
    getDetaiFruit(): Observable<any> {
        return this.http.get("");
    }
}
