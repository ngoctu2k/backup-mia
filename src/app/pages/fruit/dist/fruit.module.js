"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FruitModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../../shared/shared.module");
var fruit_routing_module_1 = require("./fruit-routing.module");
var ngx_pagination_1 = require("ngx-pagination");
var fruit_component_1 = require("./fruit.component");
var angular_responsive_carousel_1 = require("angular-responsive-carousel");
var flex_layout_1 = require("@angular/flex-layout");
var fruit_region_component_1 = require("./components/fruit-region/fruit-region.component");
var region_map_component_1 = require("./components/fruit-region/region-map/region-map.component");
var region_overview_component_1 = require("./components/fruit-region/region-overview/region-overview.component");
var fruit_province_component_1 = require("./components/fruit-province/fruit-province.component");
var province_map_component_1 = require("./components/fruit-province/province-map/province-map.component");
var province_overview_component_1 = require("./components/fruit-province/province-overview/province-overview.component");
var fruit_nation_component_1 = require("./components/fruit-nation/fruit-nation.component");
var nation_map_component_1 = require("./components/fruit-nation/nation-map/nation-map.component");
var nation_overview_component_1 = require("./components/fruit-nation/nation-overview/nation-overview.component");
var fruit_detail_component_1 = require("./components/fruit-detail/fruit-detail.component");
var fruit_information_component_1 = require("./components/fruit-detail/fruit-information/fruit-information.component");
var fruit_relation_component_1 = require("./components/fruit-detail/fruit-relation/fruit-relation.component");
var FruitModule = /** @class */ (function () {
    function FruitModule() {
    }
    FruitModule = __decorate([
        core_1.NgModule({
            declarations: [
                fruit_component_1.FruitComponent,
                fruit_region_component_1.FruitRegionComponent,
                fruit_province_component_1.FruitProvinceComponent,
                region_map_component_1.RegionMapComponent,
                region_overview_component_1.RegionOverviewComponent,
                province_map_component_1.ProvinceMapComponent,
                province_overview_component_1.ProvinceOverviewComponent,
                fruit_nation_component_1.FruitNationComponent,
                nation_map_component_1.NationMapComponent,
                nation_overview_component_1.NationOverviewComponent,
                fruit_detail_component_1.FruitDetailComponent,
                fruit_information_component_1.FruitInformationComponent,
                fruit_relation_component_1.FruitRelationComponent
            ],
            imports: [
                common_1.CommonModule,
                fruit_routing_module_1.FruitRoutingModule,
                ngx_pagination_1.NgxPaginationModule,
                flex_layout_1.FlexLayoutModule,
                angular_responsive_carousel_1.IvyCarouselModule,
                shared_module_1.SharedModule
            ]
        })
    ], FruitModule);
    return FruitModule;
}());
exports.FruitModule = FruitModule;
