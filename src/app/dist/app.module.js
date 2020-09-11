"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
//shared
var shared_module_1 = require("../app/shared/shared.module");
//interceptor
var loader_service_1 = require("./shared/services/loader.service");
var loader_interceptor_1 = require("./shared/interceptors/loader.interceptor");
var api_interceptor_1 = require("./shared/interceptors/api.interceptor");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var tabs_1 = require("@angular/material/tabs");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                tabs_1.MatTabsModule,
            ],
            providers: [
                loader_service_1.LoaderService,
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: "/"
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: api_interceptor_1.APIInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: loader_interceptor_1.LoaderInterceptor,
                    multi: true
                },
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
