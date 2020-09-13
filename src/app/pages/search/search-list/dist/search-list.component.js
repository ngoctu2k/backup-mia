"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchListComponent = void 0;
var core_1 = require("@angular/core");
var SearchListComponent = /** @class */ (function () {
    function SearchListComponent() {
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
        this.region = [
            {
                name: "Hà Giang"
            },
            {
                name: "Bắc Giang"
            },
            {
                name: "Hà Nội"
            },
            {
                name: "Lào Cai"
            },
        ];
    }
    SearchListComponent.prototype.ngOnInit = function () {
    };
    SearchListComponent = __decorate([
        core_1.Component({
            selector: 'app-search-list',
            templateUrl: './search-list.component.html',
            styleUrls: ['./search-list.component.scss']
        })
    ], SearchListComponent);
    return SearchListComponent;
}());
exports.SearchListComponent = SearchListComponent;
