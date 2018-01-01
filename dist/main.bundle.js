webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gf-phone, #gf-address {\r\n    font-weight: 600;\r\n}\r\n\r\nh1 {\r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex hero\">\n  <div class=\"col-md-8 col-lg-12 offset-md-2 offset-lg-0 align-items-center\">\n    <div class=\"jumbotron\">\n      <h1>Contact Us</h1>\n      <p id=\"gf-address\">GForce Products, LLC.\n        <br> 5603-B West Friendly Ave #145\n        <br> Greensboro, NC 27410\n      </p>\n      <p id=\"gf-phone\">\n        PH: 336-289-5012\n      </p>\n\n      <ul>\n        <li>If you would like to purchase the Rollepro, click\n          <a [routerLink]=\"['distributors']\">here</a> for a list of authorized distributors.</li>\n        <li>If your primary supplier is not listed or if you have additional product questions, please email us and include\n          your name, contact information, and company affiliation. (Click\n          <a href=\"mailto:gforceproducts@triad.rr.com\">here</a> to send email)</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about.component',
            template: __webpack_require__("../../../../../src/app/about/about.component/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component_about_component__ = __webpack_require__("../../../../../src/app/about/about.component/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_component_about_component__["a" /* AboutComponent */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dealers_dealers_module__ = __webpack_require__("../../../../../src/app/dealers/dealers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__learn_learn_module__ = __webpack_require__("../../../../../src/app/learn/learn.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_products_module__ = __webpack_require__("../../../../../src/app/products/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dealers_dealer_component_dealer_component__ = __webpack_require__("../../../../../src/app/dealers/dealer.component/dealer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_product_component_product_component__ = __webpack_require__("../../../../../src/app/products/product.component/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component_home_component__ = __webpack_require__("../../../../../src/app/home/home.component/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__learn_learn_component_learn_component__ = __webpack_require__("../../../../../src/app/learn/learn.component/learn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component_about_component__ = __webpack_require__("../../../../../src/app/about/about.component/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component_home_component__["a" /* HomeComponent */] },
    { path: 'product/:productId', component: __WEBPACK_IMPORTED_MODULE_13__products_product_component_product_component__["a" /* ProductComponent */] },
    { path: 'learn', component: __WEBPACK_IMPORTED_MODULE_15__learn_learn_component_learn_component__["a" /* LearnComponent */] },
    { path: 'distributors', component: __WEBPACK_IMPORTED_MODULE_12__dealers_dealer_component_dealer_component__["a" /* DealerComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__about_about_component_about_component__["a" /* AboutComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component_home_component__["a" /* HomeComponent */] }
];
var rootRouting = __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: false });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_8__learn_learn_module__["a" /* LearnModule */],
                __WEBPACK_IMPORTED_MODULE_6__dealers_dealers_module__["a" /* DealersModule */],
                __WEBPACK_IMPORTED_MODULE_9__products_products_module__["a" /* ProductsModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_common_module__["a" /* CommonAppModule */],
                rootRouting,
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gfcarousel_gfcarousel_component__ = __webpack_require__("../../../../../src/app/common/gfcarousel/gfcarousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CommonAppModule = (function () {
    function CommonAppModule() {
    }
    CommonAppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gfcarousel_gfcarousel_component__["a" /* GfCarouselComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gfcarousel_gfcarousel_component__["a" /* GfCarouselComponent */]
            ]
        })
    ], CommonAppModule);
    return CommonAppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.65);\r\n    border-radius: 5px;\r\n    background-color: #ddd;\r\n    margin-top: 40px;\r\n    font-size: smaller;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex hero\">\n\t<div class=\"col-md-8 offset-md-2 align-items-center\">\n\t\t<footer>\n\t\t\t<div class=\"container\">\n\t\t\t\t<p class=\"text-center copyright\">GForce Products &copy; {{ today | date: 'yyyy' }}. Contact Us: 336-123-4567</p>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/gfcarousel/gfcarousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-item {\r\n    border: 50px solid #000000;\r\n}\r\n\r\n.gf-carousel-container {\r\n    border: 10px solid #000;\r\n    border-radius: 20px;\r\n    box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.65);\r\n}\r\n\r\nngb-carousel img {\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/gfcarousel/gfcarousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"slideData !== undefined && slideData.length > 0\" class=\"gf-carousel-container\">\n<ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let slide of slideData\" [id]=\"slide.id\">\n        <img class=\"d-block w-100\" [src]=\"slide.imgUrl\" [alt]=\"slide.label\">\n        <div class=\"carousel-caption\">\n          <h3>{{slide.label}}</h3>\n          <p>{{slide.description}}</p>\n        </div>\n\t</ng-template>\n</ngb-carousel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/gfcarousel/gfcarousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GfCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GfCarouselComponent = (function () {
    function GfCarouselComponent() {
    }
    GfCarouselComponent.prototype.ngOnInit = function () {
        if (this.slideData === undefined) {
            console.log('error');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], GfCarouselComponent.prototype, "slideData", void 0);
    GfCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gf-carousel',
            template: __webpack_require__("../../../../../src/app/common/gfcarousel/gfcarousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/gfcarousel/gfcarousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GfCarouselComponent);
    return GfCarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#productDropdown {\r\n    background-color: transparent;\r\n    outline: none;\r\n    box-shadow: none;\r\n    color: rgba(255,255,255,0.5);\r\n    font-weight: 600;\r\n}\r\n\r\n#productDropdown:hover {\r\n    background-color: rgb(236, 28, 36);\r\n    color: #f9f9f9;\r\n}\r\n\r\n.nav-item {\r\n    font-weight: 600;\r\n}\r\n\r\n.nav-item a:hover {\r\n    background-color: rgb(236, 28, 36);\r\n    color: #f9f9f9;   \r\n    border-radius: 5px; \r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #a1a1a1\r\n}\r\n\r\n.dropdown-item a:active, .dropdown-item a:focus {\r\n    background-color: red !important;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"align-items: center\">\n\t<nav class=\"navbar navbar-dark navbar-expand-md bg-faded\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['home']\">\n\t\t\t<img src=\"assets/img/GFLogoTrans.png\" class=\"logo\" style=\"height:90px\">\n\t\t</a>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNav\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\t\t<div class=\"collapse navbar-collapse\" id=\"mainNav\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t\t\t\t<button class=\"btn\" id=\"productDropdown\" ngbDropdownToggle>Products</button>\n\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"productDropdown\" class=\"dropdown-menu\">\n\t\t\t\t\t\t<a *ngFor=\"let p of productList\" class=\"dropdown-item\" [routerLink]=\"getRouterLink(p.id)\">{{p.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['learn']\">Learn</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['distributors']\">Where To Buy</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['about']\">About Us</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
        this.productList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllProducts().subscribe(function (p) { return _this.productList = p; });
    };
    HeaderComponent.prototype.getRouterLink = function (productId) {
        return 'product/' + productId;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__ = __webpack_require__("../../../../rxJs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getHomePageSlides = function () {
        var _this = this;
        return this.http.get('./data/homepage.json')
            .map(function (res) { return _this.extractData(res); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__["Observable"].throw(_this.errorHandler(e)); });
    };
    DataService.prototype.getAllProducts = function () {
        var _this = this;
        return this.http.get('./data/products.json')
            .map(function (res) { return _this.extractData(res); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__["Observable"].throw(_this.errorHandler(e)); });
    };
    DataService.prototype.getProductTutorials = function (id) {
        var _this = this;
        return this.http.get('./data/products.json')
            .map(function (res) { return res.json(); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__["Observable"].throw(_this.errorHandler(e)); });
    };
    DataService.prototype.getAllDistributors = function () {
        var _this = this;
        return this.http.get('./data/dealers.json')
            .map(function (res) { return _this.extractData(res); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__["Observable"].throw(_this.errorHandler(e)); });
    };
    DataService.prototype.getDistributorsInCountry = function (countryId) {
        var _this = this;
        return this.http.get('./data/dealers.json')
            .map(function (res) { return _this.extractData(res); })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_2_rxJs_Rx__["Observable"].throw(_this.errorHandler(e)); });
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    DataService.prototype.errorHandler = function (error) {
        console.log(error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/dealers/dealer.component/dealer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin: 10px;\r\n    width: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dealers/dealer.component/dealer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dealers && dealers.length > 0;else no_product\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"jumbotron\">\n            <div *ngFor=\"let dealer of dealers\" class=\"row\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{dealer.dealerInfo.name}}</h4>\n                  <h6 class=\"text-muted card-subtitle mb-2\">{{dealer.description}}</h6>\n                  <p *ngIf=\"dealer.dealerInfo.address.city && dealer.dealerInfo.address.state\" class=\"card-text\">{{dealer.dealerInfo.address.city}}, {{dealer.dealerInfo.address.state}}</p>\n                  <a href=\"{{dealer.website}}\" target=\"_blank\" class=\"card-link\">Visit Website</a>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #no_dealers>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>No Dealers Found!</h1>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/dealers/dealer.component/dealer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealerComponent = (function () {
    function DealerComponent(dataService) {
        this.dataService = dataService;
        this.dealers = [];
    }
    DealerComponent.prototype.ngOnInit = function () {
        this.getAllDealers();
    };
    DealerComponent.prototype.getDealersInCountry = function (countryId) {
        var _this = this;
        this.dataService.getDistributorsInCountry(countryId).subscribe(function (d) { return _this.dealers = d; });
    };
    DealerComponent.prototype.getAllDealers = function () {
        var _this = this;
        this.dataService.getAllDistributors().subscribe(function (d) {
            console.log(d);
            _this.dealers = d;
            console.log('dealers:');
            console.log(_this.dealers);
        });
    };
    DealerComponent.prototype.searchForDealers = function (zip) {
        this.dealers = null;
    };
    DealerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dealer',
            template: __webpack_require__("../../../../../src/app/dealers/dealer.component/dealer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dealers/dealer.component/dealer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_service__["a" /* DataService */]])
    ], DealerComponent);
    return DealerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dealers/dealers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dealer_component_dealer_component__ = __webpack_require__("../../../../../src/app/dealers/dealer.component/dealer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DealersModule = (function () {
    function DealersModule() {
    }
    DealersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dealer_component_dealer_component__["a" /* DealerComponent */]
            ]
        })
    ], DealersModule);
    return DealersModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex hero\">\r\n\t<div class=\"col-md-8 col-lg-12 offset-md-2 offset-lg-0 align-items-center\">\r\n\t\t<app-gf-carousel [slideData]=\"homeSlides\"></app-gf-carousel>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getHomePageSlides().subscribe(function (result) { return _this.homeSlides = result; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_module__ = __webpack_require__("../../../../../src/app/common/common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component_home_component__ = __webpack_require__("../../../../../src/app/home/home.component/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__common_common_module__["a" /* CommonAppModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_component_home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/learn/learn.component/learn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron h1 {\r\n    color: red;\r\n}\r\n\r\n.card-body img {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/learn/learn.component/learn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"gf-page-title\">Learn - Videos and Demos</h1>\n    </div>\n  </div>\n</div>\n\n<div *ngFor=\"let product of products\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"jumbotron\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>{{product.name}} Tutorials and Demonstrations</h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let slide of product.slides\" class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{slide.label}}</h4>\n              <h6 class=\"text-muted card-subtitle mb-2\">Video</h6>\n              <img src=\"{{slide.imgUrl}}\" />\n              <p class=\"card-text\">{{slide.description}}</p>\n              <a href=\"{{slide.linkUrl}}\" target=\"_blank\" class=\"card-link\">Watch Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/learn/learn.component/learn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LearnComponent = (function () {
    function LearnComponent(dataService) {
        this.dataService = dataService;
    }
    LearnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllProducts().subscribe(function (ps) { return _this.products = ps; });
    };
    LearnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-learn',
            template: __webpack_require__("../../../../../src/app/learn/learn.component/learn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/learn/learn.component/learn.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_service__["a" /* DataService */]])
    ], LearnComponent);
    return LearnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/learn/learn.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__learn_component_learn_component__ = __webpack_require__("../../../../../src/app/learn/learn.component/learn.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LearnModule = (function () {
    function LearnModule() {
    }
    LearnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__learn_component_learn_component__["a" /* LearnComponent */]
            ]
        })
    ], LearnModule);
    return LearnModule;
}());



/***/ }),

/***/ "../../../../../src/app/products/product.component/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-body img {\r\n    width: 100%;\r\n}\r\n\r\n.jumbotron img {\r\n    border: solid 5px #000;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product.component/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product;else no_product\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"gf-page-title\">{{product.name}}</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"jumbotron\">\n          <div class=\"row\">\n            <div class=\"col\">\n                <p><span [innerHTML]=\"product.mainCopy\"></span></p>\n            </div>\n            <div class=\"col\">\n              <img src=\"{{product.imgUrl}}\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let slide of product.slides\" class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{slide.label}}</h4>\n            <h6 class=\"text-muted card-subtitle mb-2\">Video</h6>\n            <img src=\"{{slide.imgUrl}}\" />\n            <p class=\"card-text\">{{slide.description}}</p>\n            <a href=\"{{slide.linkUrl}}\" target=\"_blank\" class=\"card-link\">Watch Now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #no_product>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 style=\"color:rgb(255,255,255);\">Product Not Found!</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"jumbotron\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <p>Oops! We couldn't find the product you are looking for. Use the menues at the top of the page to find the product\n                of interest.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/products/product.component/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.prods = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) { return _this.updateProduct(p['productId']); });
    };
    ProductComponent.prototype.updateProduct = function (newId) {
        var _this = this;
        if (newId === '' || newId === undefined) {
            this.product = null;
        }
        else {
            this.dataService.getAllProducts().subscribe(function (ps) {
                console.log(ps);
                if (ps !== undefined && ps !== null && ps.length > 0) {
                    _this.product = ps.find(function (p) { return p.id === newId; });
                }
            });
        }
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product.component',
            template: __webpack_require__("../../../../../src/app/products/product.component/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product.component/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_data_service__["a" /* DataService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_component_product_component__ = __webpack_require__("../../../../../src/app/products/product.component/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_component_product_component__["a" /* ProductComponent */]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map