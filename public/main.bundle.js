webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/api/clients')
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.saveClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/clients', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.updateClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/clients/' + client._id, client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete('http://localhost:3000/api/clients/' + id).map(function (res) { return res.json; });
    };
    ClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ClientService);
    return ClientService;
    var _a;
}());
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/client.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(454);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(613),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_clients_clients_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_client_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_client_service__["a" /* ClientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
        });
        this.isEdit = false;
    };
    ClientsComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var newClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            emailID: this.emailID,
            phone: this.phone
        };
        this.clientService.saveClient(newClient).subscribe(function (client) {
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.emailID = '';
            _this.phone = '';
        });
    };
    ClientsComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var updClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            emailID: this.emailID,
            phone: this.phone,
            _id: this._id
        };
        this.clientService.updateClient(updClient).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (client._id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.emailID = '';
            _this.phone = '';
        });
    };
    ClientsComponent.prototype.onEditClick = function (client) {
        this.isEdit = true;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.emailID = client.emailID;
        this.phone = client.phone;
        this._id = client._id;
    };
    ClientsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.clientService.deleteClient(id).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
        });
    };
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'clients',
            template: __webpack_require__(614)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === 'function' && _a) || Object])
    ], ClientsComponent);
    return ClientsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/clients.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(615)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/navbar.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Projects/ckFrontEnd/src/environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<navbar>\n\n</navbar>  \n<div class=\"container\">\n        <clients>\n        </clients>\n</div>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<div class=\"client-form\">\r\n    <div *ngIf=\"isEdit\">\r\n            <form (submit)=\"onEditSubmit()\" action=\"\" class=\"well\">\r\n                    <br>\r\n                    <h3>Edit  Client</h3>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)] =\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)] =\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" [(ngModel)] =\"emailID\" name=\"emailID\" placeholder=\"Email ID\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Phone</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)] =\"phone\" name=\"phone\" placeholder=\"Contact No\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n                    <br>\r\n            \r\n                </form>\r\n    </div>\r\n    <div *ngIf=\"!isEdit\">\r\n    <form (submit)=\"onAddSubmit()\" action=\"\" class=\"well\">\r\n        <br>\r\n        <h3>Add Client</h3>\r\n        <div class=\"form-group\">\r\n            <label for=\"\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)] =\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)] =\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" [(ngModel)] =\"emailID\" name=\"emailID\" placeholder=\"Email ID\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"\">Phone</label>\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)] =\"phone\" name=\"phone\" placeholder=\"Contact No\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n        <br>\r\n\r\n    </form>\r\n</div>\r\n</div>\r\n\r\n<div class=\"client-list\">\r\n    <br>\r\n    <table class=\"table table-striped\">\r\n        <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th></th>\r\n        </tr>\r\n        <tr *ngFor=\"let client of clients\">\r\n            <td>{{client.first_name}}</td>\r\n            <td>{{client.last_name}}</td>\r\n            <td>{{client.emailID}}</td>\r\n            <td>{{client.phone}}</td>\r\n            <td><a (click)=\"onEditClick(client)\" href=\"#\" class=\"btn btn-primary\">Edit</a></td>\r\n            <td><a (click)=\"onDeleteClick(client._id)\" href=\"\" class=\"btn btn-danger\">Delete</a></td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"\" class=\"navbar-brand\" href=\"/\">Client Management</a>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[633]);
//# sourceMappingURL=main.bundle.map