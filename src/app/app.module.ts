import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//shared
import { SharedModule } from "../app/shared/shared.module";

// interceptor
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { APIInterceptor } from './shared/interceptors/api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTabsModule,
  ],
  providers: [
    LoaderService,
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
