"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
        this.myControl = new forms_1.FormControl();
        this.options = ['One'];
        this.isClickSearch = false;
        this.searchText = '';
        this.vegetables = [
            { name: 'Vải Thiều Thanh Hà' },
            { name: 'Táo Mèo' },
            { name: 'Mận Hậu' },
        ];
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
        this.clickedSearch = new core_2.EventEmitter();
        this.user = {};
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('access_user'));
    };
    UserComponent.prototype.logout = function () {
        confirm('Bạn có thực sự muốn đăng xuất không?') === true && this.router.navigateByUrl('/login');
    };
    UserComponent.prototype.clearVal = function () {
        this.searchText = '';
    };
    UserComponent.prototype.expanSearchBar = function (ev) {
        this.isClickSearch = ev;
        this.clickedSearch.emit(this.isClickSearch);
    };
    UserComponent.prototype.drop = function (event) {
        drag_drop_1.moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    };
    __decorate([
        core_1.Output()
    ], UserComponent.prototype, "clickedSearch");
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
