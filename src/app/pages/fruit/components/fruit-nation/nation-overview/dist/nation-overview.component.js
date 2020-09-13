"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NationOverviewComponent = void 0;
var core_1 = require("@angular/core");
var NationOverviewComponent = /** @class */ (function () {
    function NationOverviewComponent(regionService) {
        this.regionService = regionService;
        this.showFruitDetail = new core_1.EventEmitter();
        this.regionConf = {
            id: 'region',
            itemsPerPage: 5,
            currentPage: 1
        };
        this.fruitConf = {
            id: 'fruit',
            itemsPerPage: 5,
            currentPage: 1
        };
        this.list = [
            {
                name: "Xoài Tứ Qúy",
                image: "assets/images/slider1.png"
            },
            {
                name: "Đào Tiên Tửu",
                image: "assets/images/slider2.png"
            },
            {
                name: "Thanh Long",
                image: "assets/images/slider3.png"
            },
            {
                name: "Bưởi Phú Diễn",
                image: "assets/images/slider4.png"
            },
            {
                name: "Mít Mê Linh",
                image: "assets/images/slider1.png"
            },
        ];
        this.numberArr = [
            1, 2, 3, 4, 5, 6,
        ];
    }
    NationOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regionService.list().subscribe(function (res) {
            _this.list_region = res;
            console.log(res);
        });
    };
    NationOverviewComponent.prototype.handleDetailFruit = function () {
        this.isDetail = true;
        this.selectedIndex = 2;
        this.showFruitDetail.emit(this.isDetail);
    };
    __decorate([
        core_1.Input()
    ], NationOverviewComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], NationOverviewComponent.prototype, "maxSize");
    __decorate([
        core_1.Output()
    ], NationOverviewComponent.prototype, "pageChange");
    __decorate([
        core_1.Output()
    ], NationOverviewComponent.prototype, "pageBoundsCorrection");
    __decorate([
        core_1.Input()
    ], NationOverviewComponent.prototype, "isDetail");
    __decorate([
        core_1.Output()
    ], NationOverviewComponent.prototype, "showFruitDetail");
    __decorate([
        core_1.Input()
    ], NationOverviewComponent.prototype, "selectedIndex");
    NationOverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-nation-overview',
            templateUrl: './nation-overview.component.html',
            styleUrls: ['./nation-overview.component.scss']
        })
    ], NationOverviewComponent);
    return NationOverviewComponent;
}());
exports.NationOverviewComponent = NationOverviewComponent;
