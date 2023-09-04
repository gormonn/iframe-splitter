(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n</app-navbar>\n<div *ngIf=\"storageService.isInEditMode\" class=\"full-screen\">\n  <app-setup-splitter [config]=\"storageService.getConfig() | async\"></app-setup-splitter>\n</div>\n<div *ngIf=\"!storageService.isInEditMode\" class=\"full-screen\">\n  <app-display-splitter top=0 left=0 [width]=\"width\" [height]=\"height\" id=\"main-display\" [config]=\"storageService.getConfig() | async\"></app-display-splitter>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-service/storage.service */ "./src/app/storage-service/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(storageService) {
        this.storageService = storageService;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    AppComponent.prototype.onResize = function () {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/esm5/angular-split.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _setup_splitter_setup_splitter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-splitter/setup-splitter.component */ "./src/app/setup-splitter/setup-splitter.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _display_splitter_display_splitter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display-splitter/display-splitter.component */ "./src/app/display-splitter/display-splitter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _setup_splitter_setup_splitter_component__WEBPACK_IMPORTED_MODULE_4__["SetupSplitterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _display_splitter_display_splitter_component__WEBPACK_IMPORTED_MODULE_10__["DisplaySplitterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_2__["AngularSplitModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-splitter/display-splitter.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/display-splitter/display-splitter.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.display-container {\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n}\n\n.display-container .container {\n    padding: 0px !important;\n}\n\n.centered-content {\n    margin: 0 auto;\n    overflow: hidden;\n    align-items: center;\n    justify-content: space-around;\n    display: flex;\n    float: none;\n}\n\n.abs-area {\n    position: absolute;\n    -webkit-transform-origin: left top;\n            transform-origin: left top\n}\n"

/***/ }),

/***/ "./src/app/display-splitter/display-splitter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/display-splitter/display-splitter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- External Site -->\n<iframe #contentIframe [ngStyle]=\"getElStyle()\" class=\"abs-area\" *ngIf=\"config.isContent && targetUrl && isValidUrl(config.iframeTarget)\"\n  [src]=\"targetUrl\" frameborder=\"0\" allowfullscreen></iframe>\n\n<!-- Static Text -->\n<div [ngStyle]=\"getElStyle()\" class=\"abs-area centered-content\" *ngIf=\"config.isContent && !isValidUrl(config.iframeTarget)\">{{config.iframeTarget}}</div>\n\n<!-- Split -->\n<div *ngIf=\"!config.isContent\">\n  <app-display-splitter [top]=\"splits()[0].top\" [left]=splits()[0].left [width]=\"splits()[0].width\" [height]=\"splits()[0].height\"\n    [config]=\"config.nodes[0]\"></app-display-splitter>\n  <app-display-splitter [top]=\"splits()[1].top\" [left]=splits()[1].left [width]=\"splits()[1].width\" [height]=\"splits()[1].height\"\n    [config]=\"config.nodes[1]\"></app-display-splitter>\n</div>\n"

/***/ }),

/***/ "./src/app/display-splitter/display-splitter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/display-splitter/display-splitter.component.ts ***!
  \****************************************************************/
/*! exports provided: DisplaySplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaySplitterComponent", function() { return DisplaySplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-service/storage.service */ "./src/app/storage-service/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplaySplitterComponent = /** @class */ (function () {
    function DisplaySplitterComponent(storageService, sanitizer) {
        this.storageService = storageService;
        this.sanitizer = sanitizer;
    }
    DisplaySplitterComponent.prototype.ngOnInit = function () {
        if (this.config && this.isValidUrl(this.config.iframeTarget)) {
            this.targetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.iframeTarget);
        }
        if (this.config.autoRefresh) {
            this.doAutoRefresh();
        }
    };
    DisplaySplitterComponent.prototype.isValidUrl = function (str) {
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        return regex.test(str);
    };
    DisplaySplitterComponent.prototype.getElStyle = function () {
        var scalePercent = this.config.scale || 100;
        var scale = scalePercent / 100;
        return {
            transform: "scale(" + scale + ")",
            top: this.top + 'px',
            left: this.left + 'px',
            width: (this.width / scale) + 'px',
            height: (this.height / scale) + 'px'
        };
    };
    DisplaySplitterComponent.prototype.splits = function () {
        var result;
        var top = Number(this.top);
        var left = Number(this.left);
        var width = Number(this.width);
        var height = Number(this.height);
        if (this.config.direction === 'vertical') {
            var firstSize = Math.round(this.config.size / 100 * height);
            result = [{
                    top: top,
                    left: left,
                    width: width,
                    height: firstSize
                }, {
                    top: top + firstSize,
                    left: left,
                    width: width,
                    height: height - firstSize
                }];
        }
        else {
            var firstSize = Math.round(this.config.size / 100 * this.width);
            result = [{
                    top: top,
                    left: left,
                    width: firstSize,
                    height: height
                }, {
                    top: top,
                    left: left + firstSize,
                    width: width - firstSize,
                    height: height
                }];
        }
        return result;
    };
    DisplaySplitterComponent.prototype.doAutoRefresh = function () {
        var _this = this;
        window.setInterval(function () {
            if (_this.contentIframeRef) {
                var src = _this.contentIframeRef.nativeElement.src;
                _this.contentIframeRef.nativeElement.src = '';
                _this.contentIframeRef.nativeElement.src = src;
            }
        }, this.config.autoRefresh * 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplaySplitterComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DisplaySplitterComponent.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DisplaySplitterComponent.prototype, "left", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DisplaySplitterComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DisplaySplitterComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentIframe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DisplaySplitterComponent.prototype, "contentIframeRef", void 0);
    DisplaySplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-splitter',
            template: __webpack_require__(/*! ./display-splitter.component.html */ "./src/app/display-splitter/display-splitter.component.html"),
            styles: [__webpack_require__(/*! ./display-splitter.component.css */ "./src/app/display-splitter/display-splitter.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], DisplaySplitterComponent);
    return DisplaySplitterComponent;
}());



/***/ }),

/***/ "./src/app/fullscreen/fullscreen.service.ts":
/*!**************************************************!*\
  !*** ./src/app/fullscreen/fullscreen.service.ts ***!
  \**************************************************/
/*! exports provided: FullscreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenService", function() { return FullscreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullscreenService = /** @class */ (function () {
    function FullscreenService() {
    }
    FullscreenService.prototype.isInFullscreenMode = function () {
        var fullScreenElement = document.fullscreenElement || document.webkitFullscreenElement || null;
        return !!fullScreenElement;
    };
    FullscreenService.prototype.goFullScreen = function () {
        var element = document.querySelector('#main-display');
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    };
    FullscreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenService);
    return FullscreenService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Iframe Splitter</a>\n\n  <form class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"storageService.save()\">\n    <button *ngIf=\"storageService.isInEditMode\" class=\"btn btn-outline-success my-2 my-sm-0 mx-2\" type=\"submit\">Save</button>\n    <button *ngIf=\"!storageService.isInEditMode\" class=\"btn btn-outline-primary my-2 my-sm-0 mx-2\" (click)=\"storageService.openEditMode()\" type=\"button\">Edit</button>\n    <button *ngIf=\"!storageService.isInEditMode\" class=\"btn btn-outline-primary my-2 my-sm-0 mx-2\" (click)=\"fullscreenService.goFullScreen()\" type=\"button\">Fullscreen</button>\n  </form>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullscreen_fullscreen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fullscreen/fullscreen.service */ "./src/app/fullscreen/fullscreen.service.ts");
/* harmony import */ var _storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-service/storage.service */ "./src/app/storage-service/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(fullscreenService, storageService) {
        this.fullscreenService = fullscreenService;
        this.storageService = storageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_fullscreen_fullscreen_service__WEBPACK_IMPORTED_MODULE_1__["FullscreenService"], _storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/setup-splitter/setup-splitter.component.css":
/*!*************************************************************!*\
  !*** ./src/app/setup-splitter/setup-splitter.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.setup-container {\n    background-color: #eeeeee;\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n}\n\n.centered-content {\n    margin: 0 auto;\n    overflow: hidden;\n    align-items: center;\n    justify-content: space-around;\n    display: flex;\n    float: none;\n}\n\n.split-container {\n    width: 100%;\n}\n\n.btn {\n    margin: 6px;\n}\n"

/***/ }),

/***/ "./src/app/setup-splitter/setup-splitter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/setup-splitter/setup-splitter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"setup-container\">\n  <!-- Content Setup -->\n  <div class=\"centered-content container\" *ngIf=\"config.isContent\">\n    <form>\n      <div class=\"form-group row justify-content-center\">\n        <button class=\"btn btn btn-outline-dark\" (click)=\"split('horizontal')\">\n          <fa name=\"arrows-h\"></fa> split horizontal</button>\n        <button class=\"btn btn btn-outline-dark\" (click)=\"split('vertical')\">\n          <fa name=\"arrows-v\"></fa> split vertical</button>\n        <button *ngIf=\"parent\" class=\"btn btn btn-outline-danger\" (click)=\"remove()\">\n          <fa name=\"times-circle\"></fa> remove</button>\n      </div>\n      <div class=\"form-group row\">\n        <input name=\"iframeTarget\" class=\"form-control form-control-lg\" type=\"text\" [(ngModel)]=\"config.iframeTarget\" placeholder=\"target url\"\n        />\n      </div>\n      <div class=\"form-group row justify-content-center text-center\">\n        <div class=\"col-md-5 mb-3\">\n          <label for=\"scale-input\">Scale (%)</label>\n          <input name=\"scale\" type=\"number\" [(ngModel)]=\"config.scale\" class=\"form-control m-0\" id=\"scale-input\" autocomplete=\"off\"\n            min=\"20\" max=\"400\" />\n        </div>\n        <div class=\"col-md-5 mb-3\">\n          <label for=\"scale-input\">Refresh (sec)</label>\n          <input name=\"autoRefresh\" type=\"number\" [(ngModel)]=\"config.autoRefresh\" class=\"form-control m-0\" id=\"scale-input\" autocomplete=\"off\"\n            min=\"0\" />\n        </div>\n\n      </div>\n    </form>\n  </div>\n  <!-- Splitter -->\n  <div *ngIf=\"!config.isContent\" class=\"split-container\">\n    <split [direction]=\"config.direction\" gutterSize=\"10\" gutterColor=\"#ffffff\" (dragEnd)=\"onDragEnd($event)\">\n      <ng-template ngFor let-area [ngForOf]=\"config.nodes\" let-index=\"index\">\n        <split-area [size]=\"area.size\">\n          <app-setup-splitter [config]=\"area\" [parent]=\"this\"></app-setup-splitter>\n        </split-area>\n      </ng-template>\n    </split>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/setup-splitter/setup-splitter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/setup-splitter/setup-splitter.component.ts ***!
  \************************************************************/
/*! exports provided: SetupSplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupSplitterComponent", function() { return SetupSplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-service/storage.service */ "./src/app/storage-service/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupSplitterComponent = /** @class */ (function () {
    function SetupSplitterComponent(storageService) {
        this.storageService = storageService;
    }
    SetupSplitterComponent.prototype.ngOnInit = function () {
    };
    SetupSplitterComponent.prototype.ngAfterViewInit = function () {
        if (!this.parent) {
            this.storageService.activeConfig = this.config;
        }
    };
    SetupSplitterComponent.prototype.split = function (direction) {
        this.config.isContent = false;
        this.config.direction = direction;
        this.config.nodes = [
            lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].defaultConfig),
            lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].defaultConfig)
        ];
        this.config.nodes[0].index = 0;
        this.config.nodes[1].index = 1;
        this.config.nodes[0].iframeTarget = this.config.iframeTarget;
        this.config.nodes[0].scale = this.config.scale;
        this.config.nodes[0].autoRefresh = this.config.autoRefresh;
    };
    SetupSplitterComponent.prototype.remove = function () {
        if (this.parent) {
            var parent_1 = this.parent;
            var nodeToKeep = this.config.index === 0 ? parent_1.config.nodes[1] : parent_1.config.nodes[0];
            parent_1.config.nodes = nodeToKeep.nodes;
            parent_1.config.isContent = nodeToKeep.isContent;
            parent_1.config.size = nodeToKeep.size;
            parent_1.config.iframeTarget = nodeToKeep.iframeTarget;
        }
    };
    SetupSplitterComponent.prototype.onDragEnd = function (event) {
        this.config.size = Math.round(event.sizes[0]);
        this.config.nodes[0].size = this.config.size;
        this.config.nodes[1].size = 100 - this.config.size;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SetupSplitterComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", SetupSplitterComponent)
    ], SetupSplitterComponent.prototype, "parent", void 0);
    SetupSplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-splitter',
            template: __webpack_require__(/*! ./setup-splitter.component.html */ "./src/app/setup-splitter/setup-splitter.component.html"),
            styles: [__webpack_require__(/*! ./setup-splitter.component.css */ "./src/app/setup-splitter/setup-splitter.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], SetupSplitterComponent);
    return SetupSplitterComponent;
}());



/***/ }),

/***/ "./src/app/storage-service/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/storage-service/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.isInEditMode = false;
        var storedConfig = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](StorageService_1.defaultConfig);
        try {
            storedConfig = JSON.parse(window.localStorage.getItem('iframe-splitter-config'));
        }
        catch (error) {
            // silent error
        }
        if (!storedConfig) {
            this.isInEditMode = true;
            storedConfig = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](StorageService_1.defaultConfig);
        }
        this.rootConfig = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](storedConfig);
    }
    StorageService_1 = StorageService;
    StorageService.prototype.save = function () {
        this.isInEditMode = false;
        this.rootConfig.next(this.activeConfig);
        window.localStorage.setItem('iframe-splitter-config', JSON.stringify(this.activeConfig));
    };
    StorageService.prototype.openEditMode = function () {
        this.isInEditMode = true;
    };
    StorageService.prototype.getConfig = function () {
        return this.rootConfig.asObservable();
    };
    StorageService.defaultConfig = {
        isContent: true,
        direction: '',
        size: 50,
        index: 0,
        scale: 100,
        autoRefresh: 0,
        iframeTarget: '',
        nodes: []
    };
    StorageService = StorageService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
    var StorageService_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmitriychernukho/Documents/chill/_my/iframe-splitter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map