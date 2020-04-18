function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container", "text-center"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Arena Runner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Arena Runner is a game, where your target is to collect all stars before you get killed by canons. You control your ship using numbers 4,5,6 and 8. You've got 10 lives to complete each map. However, losing lives also decreases score. Score is also decreased by time.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
      styles: ["p[_ngcontent-%COMP%]{\r\n  font-size: 2rem;\r\n  line-height: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-size: 3rem;\r\n  line-height: 4rem;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: 'leaderboard',
      component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_2__["LeaderboardComponent"]
    }, {
      path: 'game',
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }, {
      path: '',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    }, {
      path: 'home',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    }, {
      path: 'login',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }, {
      path: 'register',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbNavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbNavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbNavModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(userInfo) {
          localStorage.setItem('ACCESS_TOKEN', "access_token");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem('ACCESS_TOKEN') !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('ACCESS_TOKEN');
        }
      }, {
        key: "register",
        value: function register(userInfo) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('name', userInfo.nick).set('password', userInfo.password);
          this.http.get('/api/register', {
            params: params
          }).subscribe(function (result) {
            console.log(result);
          } // {this.leaderboard = result.score;}
          );
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/SceneName.ts":
  /*!************************************!*\
    !*** ./src/app/enums/SceneName.ts ***!
    \************************************/

  /*! exports provided: SceneName */

  /***/
  function srcAppEnumsSceneNameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SceneName", function () {
      return SceneName;
    });

    var SceneName;

    (function (SceneName) {
      SceneName["INIT"] = "init";
      SceneName["MAIN"] = "main";
      SceneName["PAUSE"] = "pause";
      SceneName["RESULTS"] = "results";
    })(SceneName || (SceneName = {}));
    /***/

  },

  /***/
  "./src/app/enums/TextureName.ts":
  /*!**************************************!*\
    !*** ./src/app/enums/TextureName.ts ***!
    \**************************************/

  /*! exports provided: TextureName */

  /***/
  function srcAppEnumsTextureNameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextureName", function () {
      return TextureName;
    });

    var TextureName;

    (function (TextureName) {
      TextureName["EMPTY"] = "empty";
      TextureName["WALL"] = "wall";
      TextureName["BORDER"] = "border";
      TextureName["SHIP"] = "ship";
      TextureName["STAR"] = "star";
      TextureName["CANON"] = "canon";
      TextureName["BULLET"] = "bullet";
    })(TextureName || (TextureName = {}));
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gameLogic_data_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gameLogic/data/Constants */
    "./src/app/gameLogic/data/Constants.ts");
    /* harmony import */


    var _gameLogic_MainScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../gameLogic/MainScene */
    "./src/app/gameLogic/MainScene.ts");
    /* harmony import */


    var _gameLogic_InitScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../gameLogic/InitScene */
    "./src/app/gameLogic/InitScene.ts");
    /* harmony import */


    var _gameLogic_PauseScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../gameLogic/PauseScene */
    "./src/app/gameLogic/PauseScene.ts");
    /* harmony import */


    var _gameLogic_ResultsScene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../gameLogic/ResultsScene */
    "./src/app/gameLogic/ResultsScene.ts"); // @ts-ignore


    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(_ngZone, mainScene, initScene, pauseScene, resultsScene) {
        var _this = this;

        _classCallCheck(this, GameComponent);

        this._ngZone = _ngZone;
        this.mainScene = mainScene;
        this.initScene = initScene;
        this.pauseScene = pauseScene;
        this.resultsScene = resultsScene;

        this._ngZone.runOutsideAngular(function () {
          _this.config = {
            type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,
            height: _gameLogic_data_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HEIGHT,
            width: _gameLogic_data_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].WIDTH + 200,
            scene: [initScene, mainScene, pauseScene, resultsScene],
            parent: 'gameContainer',
            physics: {
              "default": 'arcade',
              arcade: {
                debug: true,
                gravity: {
                  y: 0
                }
              }
            }
          };
        });
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._ngZone.runOutsideAngular(function () {
            _this2.phaserGame = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game(_this2.config);
          });
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gameLogic_MainScene__WEBPACK_IMPORTED_MODULE_3__["MainScene"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gameLogic_InitScene__WEBPACK_IMPORTED_MODULE_4__["InitScene"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gameLogic_PauseScene__WEBPACK_IMPORTED_MODULE_5__["PauseScene"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gameLogic_ResultsScene__WEBPACK_IMPORTED_MODULE_6__["ResultsScene"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 2,
      vars: 0,
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "game works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _gameLogic_MainScene__WEBPACK_IMPORTED_MODULE_3__["MainScene"]
        }, {
          type: _gameLogic_InitScene__WEBPACK_IMPORTED_MODULE_4__["InitScene"]
        }, {
          type: _gameLogic_PauseScene__WEBPACK_IMPORTED_MODULE_5__["PauseScene"]
        }, {
          type: _gameLogic_ResultsScene__WEBPACK_IMPORTED_MODULE_6__["ResultsScene"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gameLogic/InitScene.ts":
  /*!****************************************!*\
    !*** ./src/app/gameLogic/InitScene.ts ***!
    \****************************************/

  /*! exports provided: InitScene */

  /***/
  function srcAppGameLogicInitSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitScene", function () {
      return InitScene;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/SceneName */
    "./src/app/enums/SceneName.ts");
    /* harmony import */


    var _enums_TextureName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../enums/TextureName */
    "./src/app/enums/TextureName.ts");
    /* harmony import */


    var _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mapFields/MapField */
    "./src/app/mapFields/MapField.ts");
    /* harmony import */


    var _mapFields_Canons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mapFields/Canons */
    "./src/app/mapFields/Canons.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Scene = Phaser.Scene;

    var InitScene =
    /*#__PURE__*/
    function (_Scene) {
      _inherits(InitScene, _Scene);

      function InitScene(http) {
        var _this3;

        _classCallCheck(this, InitScene);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(InitScene).call(this, {
          key: _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].INIT
        }));
        _this3.http = http;
        _this3.map = []; // private defaultMap =
        //   [
        //     [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.LEFT_CANON_ANGLE)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.WALL)]],
        //     [[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.UP_CANON_ANGLE)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER)]],
        //     [[new MapField(TextureName.BORDER)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.EMPTY)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.DOWN_CANON_ANGLE)]],
        //     [[new MapField(TextureName.WALL)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER)],[new MapField(TextureName.BORDER), new MapField(TextureName.CANON, Canons.RIGHT_CANON_ANGLE)],[new MapField(TextureName.WALL)]]
        //   ]

        _this3.defaultMap = [[[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].WALL)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER), new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].CANON, _mapFields_Canons__WEBPACK_IMPORTED_MODULE_4__["Canons"].LEFT_CANON_ANGLE)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].WALL)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER), new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].CANON, _mapFields_Canons__WEBPACK_IMPORTED_MODULE_4__["Canons"].UP_CANON_ANGLE)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].STAR)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER), new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].CANON, _mapFields_Canons__WEBPACK_IMPORTED_MODULE_4__["Canons"].DOWN_CANON_ANGLE)]], [[new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].WALL)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BORDER), new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].CANON, _mapFields_Canons__WEBPACK_IMPORTED_MODULE_4__["Canons"].RIGHT_CANON_ANGLE)], [new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].WALL)]]];
        return _this3;
      }

      _createClass(InitScene, [{
        key: "preload",
        value: function preload() {}
      }, {
        key: "create",
        value: function create() {
          //this.http.get();
          for (var i = 0; i < 10; i++) {
            this.map.push([]);

            for (var j = 0; j < 10; j++) {
              this.map[i].push([]);
              this.map[i][j].push(new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].EMPTY));
            }
          }

          this.map[0][0][0] = new _mapFields_MapField__WEBPACK_IMPORTED_MODULE_3__["MapField"](_enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].WALL); // this.defaultMap[0][0][0] = new MapField(TextureName.WALL);

          console.log(this.defaultMap);
          this.scene.start(_enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].MAIN, this.defaultMap);
        }
      }]);

      return InitScene;
    }(Scene);

    InitScene.ɵfac = function InitScene_Factory(t) {
      return new (t || InitScene)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    InitScene.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InitScene,
      factory: InitScene.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitScene, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gameLogic/Input.ts":
  /*!************************************!*\
    !*** ./src/app/gameLogic/Input.ts ***!
    \************************************/

  /*! exports provided: Input */

  /***/
  function srcAppGameLogicInputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Input", function () {
      return Input;
    });
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

    var Input =
    /*#__PURE__*/
    function () {
      function Input(ship, scene) {
        var _this4 = this;

        _classCallCheck(this, Input);

        this.speed = 5 * 60;
        this.ship = ship;
        this.scene = scene;
        this.leftDir = new Direction('x', -1, function (pos) {
          return pos > _this4.scene.gridSize;
        }, -90);
        this.rightDir = new Direction('x', 1, function (pos) {
          return pos < _this4.scene.width - _this4.scene.gridSize;
        }, 90);
        this.upDir = new Direction('y', -1, function (pos) {
          return pos > _this4.scene.gridSize;
        }, 0);
        this.downDir = new Direction('y', 1, function (pos) {
          return pos < _this4.scene.height - _this4.scene.gridSize;
        }, 180);
        this.noDir = new Direction('z', 1, function () {
          return true;
        }, 0);
        this.currDir = this.noDir;
      }

      _createClass(Input, [{
        key: "defineKeys",
        value: function defineKeys() {
          this.left = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.NUMPAD_FOUR);
          this.right = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.NUMPAD_SIX);
          this.up = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.NUMPAD_EIGHT);
          this.down = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.NUMPAD_FIVE);
        }
      }, {
        key: "move",
        value: function move() {
          if (this.left.isDown) {
            this.turn(this.leftDir);
          } else if (this.right.isDown) {
            this.turn(this.rightDir);
          } else if (this.up.isDown) {
            this.turn(this.upDir);
          } else if (this.down.isDown) {
            this.turn(this.downDir);
          } //   let newPos = this.ship[this.currDir.axis]+this.currDir.sign*this.speed;
          //   const oldGrid = Math.floor(this.ship[this.currDir.axis]/this.scene.gridSize);
          //   const newGrid = Math.floor(newPos/this.scene.gridSize);
          //   if(this.turn!=null&&((this.ship[this.currDir.axis]%this.scene.gridSize==0)||(oldGrid!==newGrid))){
          //     this.ship[this.currDir.axis] = Math.max(oldGrid, newGrid)*this.scene.gridSize;
          //     this.ship.angle = this.turn.angle;
          //     this.currDir = this.turn;
          //     this.turn = null;
          //     newPos = this.ship[this.currDir.axis]+this.currDir.sign*this.speed;
          //     this.setPos(this.ship[this.currDir.axis], newPos, oldGrid, newGrid);
          //   }
          //   else{
          //     this.setPos(this.ship[this.currDir.axis], newPos, oldGrid, newGrid);
          //   }

        }
      }, {
        key: "turn",
        value: function turn(newDir) {
          this.ship.angle = newDir.angle;
          this.currDir = newDir;
          this.setVelocity();
        } // private tryTurn(newDir: Direction){
        //   if(this.currDir.axis===newDir.axis){
        //     this.ship.angle = newDir.angle;
        //     this.currDir = newDir;
        //     this.setVelocity();
        //     this.turn = null;
        //   }
        //   else{
        //     this.turn = newDir;
        //   }
        // }
        // private setPos(currPos:number, newPos:number, oldGrid:number, newGrid:number){
        //   if(this.currDir.canGo(newPos)){
        //     this.ship[this.currDir.axis] = newPos;
        //   }
        //   else if(this.currDir.canGo(currPos)){
        //     this.ship[this.currDir.axis] = Math.max(oldGrid, newGrid)*this.scene.gridSize;
        //   }
        // }

      }, {
        key: "setVelocity",
        value: function setVelocity() {
          if (this.currDir.axis === 'x') {
            this.setVelocityY(this.ship, 0);
            this.setVelocityX(this.ship, this.speed * this.currDir.sign);
          } else {
            this.setVelocityX(this.ship, 0);
            this.setVelocityY(this.ship, this.speed * this.currDir.sign);
          }
        }
      }, {
        key: "setVelocityX",
        value: function setVelocityX(obj, velocity) {
          obj.body.setVelocityX(velocity);
        }
      }, {
        key: "setVelocityY",
        value: function setVelocityY(obj, velocity) {
          obj.body.setVelocityY(velocity);
        }
      }]);

      return Input;
    }();

    var Direction = function Direction(axis, sign, canGo, angle) {
      _classCallCheck(this, Direction);

      this.axis = axis;
      this.sign = sign;
      this.canGo = canGo;
      this.angle = angle;
    }; // class Coordinates {
    //   x: number;
    //   y: number;
    //
    //   constructor(x:number=0, y:number=0){
    //     this.x = x;
    //     this.y = y;
    //   }
    //
    //   equals(other: Coordinates):boolean {
    //     if (this === other) return true;
    //     if (other == null) return false;
    //     if (other.y == this.y && other.x == this.x) return true;
    //     return false;
    //   }
    // }

    /***/

  },

  /***/
  "./src/app/gameLogic/MainScene.ts":
  /*!****************************************!*\
    !*** ./src/app/gameLogic/MainScene.ts ***!
    \****************************************/

  /*! exports provided: MainScene */

  /***/
  function srcAppGameLogicMainSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainScene", function () {
      return MainScene;
    });
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Input */
    "./src/app/gameLogic/Input.ts");
    /* harmony import */


    var _Score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Score */
    "./src/app/gameLogic/Score.ts");
    /* harmony import */


    var _MapGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./MapGenerator */
    "./src/app/gameLogic/MapGenerator.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_TextureName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../enums/TextureName */
    "./src/app/enums/TextureName.ts");
    /* harmony import */


    var _mapFields_Stars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../mapFields/Stars */
    "./src/app/mapFields/Stars.ts");
    /* harmony import */


    var _mapFields_Borders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../mapFields/Borders */
    "./src/app/mapFields/Borders.ts");
    /* harmony import */


    var _mapFields_Canons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../mapFields/Canons */
    "./src/app/mapFields/Canons.ts");
    /* harmony import */


    var _mapFields_Walls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../mapFields/Walls */
    "./src/app/mapFields/Walls.ts");
    /* harmony import */


    var _mapFields_Bullets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../mapFields/Bullets */
    "./src/app/mapFields/Bullets.ts");
    /* harmony import */


    var _enums_SceneName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../enums/SceneName */
    "./src/app/enums/SceneName.ts");
    /* harmony import */


    var _data_Result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./data/Result */
    "./src/app/gameLogic/data/Result.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Scene = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene;

    var MainScene =
    /*#__PURE__*/
    function (_Scene2) {
      _inherits(MainScene, _Scene2);

      function MainScene(http) {
        var _this5;

        _classCallCheck(this, MainScene);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MainScene).call(this, {
          key: _enums_SceneName__WEBPACK_IMPORTED_MODULE_11__["SceneName"].MAIN
        }));
        _this5.http = http;
        _this5.gridSize = 50;
        _this5.width = 800;
        _this5.height = 600;
        _this5.gridsX = _this5.width / _this5.gridSize;
        _this5.gridsY = _this5.height / _this5.gridSize;
        _this5.timerTime = 0;
        _this5.score = new _Score__WEBPACK_IMPORTED_MODULE_2__["Score"]();

        _this5.onResize();

        _this5.http.get("www.random.sk");

        return _this5;
      }

      _createClass(MainScene, [{
        key: "init",
        value: function init(map) {
          this.map = map;
          this.gridsX = this.map.length;
          this.gridsY = this.map[0].length;
          this.gridSize = this.height / this.gridsY;
        }
      }, {
        key: "create",
        value: function create() {
          console.log('create method'); //background

          this.ts = this.add.tileSprite(this.gridSize, this.gridSize, (this.gridsX - 1) * this.gridSize, (this.gridsY - 1) * this.gridSize, 'back').setOrigin(0.001); //ship (player)

          this.ship = this.physics.add.sprite(this.width / 3, this.height / 3, _enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].SHIP);
          this.ship.setScale(this.gridSize / this.ship.width); //texts
          //score

          this.scoreText = this.add.text(this.width + this.gridSize, this.height / 2 - this.gridSize, 'Stars: '); //time

          this.timerText = this.add.text(this.width + this.gridSize, this.height / 2, 'Time: ' + this.timerTime);
          this.timer = this.time.addEvent({
            delay: 1000,
            callback: this.incrementTimer,
            callbackScope: this,
            repeat: Infinity
          }); //lives

          this.livesText = this.add.text(this.width + this.gridSize, this.height / 2 + this.gridSize, 'Lives: ' + this.score.lives); //game objects

          this.stars = new _mapFields_Stars__WEBPACK_IMPORTED_MODULE_6__["Stars"](this);
          this.borders = new _mapFields_Borders__WEBPACK_IMPORTED_MODULE_7__["Borders"](this);
          this.canons = new _mapFields_Canons__WEBPACK_IMPORTED_MODULE_8__["Canons"](this);
          this.walls = new _mapFields_Walls__WEBPACK_IMPORTED_MODULE_9__["Walls"](this);
          this.bullets = new _mapFields_Bullets__WEBPACK_IMPORTED_MODULE_10__["Bullets"](this); //generate map

          _MapGenerator__WEBPACK_IMPORTED_MODULE_3__["MapGenerator"].generate(this); // this.borders = this.physics.add.staticGroup({
          //   key: 'border',
          //   frameQuantity: 30
          // });
          //
          // Phaser.Actions.PlaceOnRectangle(this.borders.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
          // this.borders = this.physics.add.group(borders);
          // let stars = [];
          // for(let i = 1; i<this.gridsX; i++){
          //   for(let j = 1; j<this.gridsY; j++){
          //     let star = this.physics.add.sprite(i*this.gridSize, j*this.gridSize, 'star');
          //     star.setScale(this.gridSize/star.width);
          //     stars.push(star);
          //   }
          // }
          // this.stars = this.physics.add.group(stars);
          // this.score.starSum = (this.gridsX-1)*(this.gridsY-1);


          this.myInput = new _Input__WEBPACK_IMPORTED_MODULE_1__["Input"](this.ship, this); // console.log(this.myInput.test());

          this.myInput.defineKeys();
          this.scene.pause();
          this.scene.launch(_enums_SceneName__WEBPACK_IMPORTED_MODULE_11__["SceneName"].PAUSE);
          this.scene.bringToTop(_enums_SceneName__WEBPACK_IMPORTED_MODULE_11__["SceneName"].PAUSE); // this.scene.pause();
        }
      }, {
        key: "preload",
        value: function preload() {
          console.log('preload method');
          this.load.spritesheet('back', 'assets/BackgroundTile.png', {
            frameWidth: this.gridSize,
            frameHeight: this.gridSize
          });
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].SHIP, 'assets/Ship.png');
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].STAR, 'assets/Star.png');
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].CANON, 'assets/Canon.png');
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].BORDER, 'assets/Border.png');
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].WALL, 'assets/Wall.png');
          this.load.image(_enums_TextureName__WEBPACK_IMPORTED_MODULE_5__["TextureName"].BULLET, 'assets/Bullet.png');
        }
      }, {
        key: "update",
        value: function update() {
          this.myInput.move();
        }
      }, {
        key: "endGame",
        value: function endGame(success) {
          this.score.success = success;
          this.score.time = this.timerTime;
          this.scene.start(_enums_SceneName__WEBPACK_IMPORTED_MODULE_11__["SceneName"].RESULTS, new _data_Result__WEBPACK_IMPORTED_MODULE_12__["Result"](this.map, this.score));
        }
      }, {
        key: "loseLife",
        value: function loseLife() {
          this.score.lives--;
          this.livesText.setText('Lives: ' + this.score.lives);
        }
      }, {
        key: "incrementTimer",
        value: function incrementTimer() {
          this.timerTime++;
          this.timerText.setText('Time: ' + this.timerTime);
        }
      }, {
        key: "onResize",
        value: function onResize(event) {// console.log(window.innerWidth);
          // console.log(window.innerHeight);
          // this.windowHeight = window.innerHeight;
          // this.windowWidth = window.innerWidth;
          // this.width = (Math.floor(this.windowWidth/this.gridSize))*this.gridSize;
          // this.height = (Math.floor(this.windowHeight/this.gridSize))*this.gridSize;
          // this.gridsX = this.width/this.gridSize;
          // this.gridsY = this.height/this.gridSize;
        }
      }]);

      return MainScene;
    }(Scene);

    MainScene.ɵfac = function MainScene_Factory(t) {
      return new (t || MainScene)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]));
    };

    MainScene.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: MainScene,
      factory: MainScene.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MainScene, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/gameLogic/MapGenerator.ts":
  /*!*******************************************!*\
    !*** ./src/app/gameLogic/MapGenerator.ts ***!
    \*******************************************/

  /*! exports provided: MapGenerator */

  /***/
  function srcAppGameLogicMapGeneratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapGenerator", function () {
      return MapGenerator;
    });
    /* harmony import */


    var _enums_TextureName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../enums/TextureName */
    "./src/app/enums/TextureName.ts");
    /* harmony import */


    var _mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mapFields/Canons */
    "./src/app/mapFields/Canons.ts");

    var MapGenerator =
    /*#__PURE__*/
    function () {
      function MapGenerator() {
        _classCallCheck(this, MapGenerator);
      }

      _createClass(MapGenerator, null, [{
        key: "generate",
        value: function generate(scene) {
          console.log('generate');
          MapGenerator.scene = scene;
          scene.map.forEach(function (row, rowIndex) {
            row.forEach(function (column, columnIndex) {
              column.forEach(function (mapField, index) {
                MapGenerator.typemap.get(mapField.type)(mapField, rowIndex, columnIndex);
              });
            });
          }); //add colliders

          scene.stars.setCollider(); // this.borders.refresh();

          scene.borders.setCollider();
          scene.canons.setCollider();
          scene.walls.setCollider(); // this.physics.collide(this.ship, this.borders);
          // MapGenerator.walls(scene);
        } // private static walls(scene: MainScene):void {
        //   let borders = [];
        //   borders.push(scene.physics.add.staticImage(scene.gridSize / 2, scene.gridSize / 2, 'wall'));
        //   borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize / 2, scene.gridSize / 2, 'wall'));
        //   borders.push(scene.physics.add.staticSprite(scene.gridSize / 2, scene.height - scene.gridSize / 2, 'wall'));
        //   borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize / 2, scene.height - scene.gridSize / 2, 'wall'));
        //   for (let i = 1; i < scene.gridsX - 1; i++) {
        //     borders.push(scene.physics.add.staticSprite((i * scene.gridSize) + (scene.gridSize / 2), scene.gridSize * 0.5, 'border'));
        //   }
        //   for (let i = 1; i < scene.gridsX - 1; i++) {
        //     borders.push(scene.physics.add.staticSprite((i * scene.gridSize) + (scene.gridSize / 2), scene.height - scene.gridSize * 0.5, 'border'));
        //   }
        //   for (let i = 1; i < scene.gridsY - 1; i++) {
        //     borders.push(scene.physics.add.staticSprite(scene.gridSize * 0.5, (i * scene.gridSize) + (scene.gridSize / 2), 'border').setAngle(90));
        //   }
        //   for (let i = 1; i < scene.gridsY - 1; i++) {
        //     borders.push(scene.physics.add.staticSprite(scene.width - scene.gridSize * 0.5, (i * scene.gridSize) + (scene.gridSize / 2), 'border').setAngle(90));
        //   }
        //
        //   for (let border of borders) {
        //     border.setSize(scene.gridSize, scene.gridSize);
        //     border.setScale(scene.gridSize / border.width);
        //   }
        //
        //   scene.borders = scene.physics.add.staticGroup(borders);
        // }

      }, {
        key: "addBorder",
        value: function addBorder(mapField, row, column) {
          var border = MapGenerator.addStaticSprite(row, column, mapField.type);
          border.setSize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
          border.setScale(MapGenerator.scene.gridSize / border.width);
          MapGenerator.scene.borders.add(border); // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
        }
      }, {
        key: "addWall",
        value: function addWall(mapField, row, column) {
          var wall = MapGenerator.addStaticSprite(row, column, mapField.type);
          wall.setSize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
          wall.setScale(MapGenerator.scene.gridSize / wall.width);
          MapGenerator.scene.walls.add(wall); // borders.push(this.scene.physics.add.staticSprite(this.scene.width - this.scene.gridSize / 2, this.scene.gridSize / 2, 'wall'));
        }
      }, {
        key: "addStar",
        value: function addStar(mapField, row, column) {
          var star = MapGenerator.addSprite(row, column, mapField.type);
          star.setScale(MapGenerator.scene.gridSize / star.width);
          MapGenerator.scene.stars.add(star);
          MapGenerator.scene.score.starSum++;
        }
      }, {
        key: "addCanon",
        value: function addCanon(mapField, row, column) {
          var canon = MapGenerator.addSprite(row, column, mapField.type);
          var canonSizeMod = MapGenerator.scene.gridSize / canon.width;
          var sizeX = MapGenerator.scene.gridsX * MapGenerator.scene.gridSize * (1 / canonSizeMod);
          var sizeY = MapGenerator.scene.gridsY * MapGenerator.scene.gridSize * (1 / canonSizeMod);
          canon.setSize(sizeX * Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).X) + 1 * Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).Y), sizeY * Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).Y) + 1 * Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).X));
          canon.body.setOffset(canon.body.offset.x + sizeX / 2 * _mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).X, canon.body.offset.y + sizeY / 2 * _mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).Y); // canon.setSize((MapGenerator.scene.gridSize * canon.width / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).X)*MapGenerator.scene.width * canon.width / MapGenerator.scene.gridSize)
          //   , (MapGenerator.scene.gridSize * canon.height / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).Y)*MapGenerator.scene.height * canon.height / MapGenerator.scene.gridSize));
          // canon.setSize((MapGenerator.scene.gridSize * canon.width / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).X)*MapGenerator.scene.width * canon.width / MapGenerator.scene.gridSize)
          //   , (MapGenerator.scene.gridSize * canon.height / MapGenerator.scene.gridSize)+Math.abs((Canons.colliders.get(mapField.angle).Y)*MapGenerator.scene.height * canon.height / MapGenerator.scene.gridSize));
          // canon.setDisplaySize(MapGenerator.scene.gridSize, MapGenerator.scene.gridSize);
          // canon.body.setSize(Canons.colliders.get(mapField.angle).X*MapGenerator.scene.gridsX*MapGenerator.scene.gridSize,
          //   Canons.colliders.get(mapField.angle).Y*MapGenerator.scene.gridsY*MapGenerator.scene.gridSize);
          // canon.body.setOffset(0,0);

          canon.setScale(canonSizeMod);
          canon.setAngle(mapField.angle);
          MapGenerator.scene.canons.add(canon);
          canon.setBounce(1);
          canon.setVelocityX(Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).Y) * _mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].speed);
          canon.setVelocityY(Math.abs(_mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].colliders.get(mapField.angle).X) * _mapFields_Canons__WEBPACK_IMPORTED_MODULE_1__["Canons"].speed);
          canon.setDepth(10);
        }
      }, {
        key: "addSprite",
        value: function addSprite(row, column, type) {
          return MapGenerator.scene.physics.add.sprite(row * MapGenerator.scene.gridSize + MapGenerator.scene.gridSize / 2, column * MapGenerator.scene.gridSize + MapGenerator.scene.gridSize / 2, type);
        }
      }, {
        key: "addStaticSprite",
        value: function addStaticSprite(row, column, type) {
          return MapGenerator.scene.physics.add.staticSprite(row * MapGenerator.scene.gridSize + MapGenerator.scene.gridSize / 2, column * MapGenerator.scene.gridSize + MapGenerator.scene.gridSize / 2, type);
        }
      }]);

      return MapGenerator;
    }();

    MapGenerator.typemap = new Map([[_enums_TextureName__WEBPACK_IMPORTED_MODULE_0__["TextureName"].BORDER, MapGenerator.addBorder], [_enums_TextureName__WEBPACK_IMPORTED_MODULE_0__["TextureName"].WALL, MapGenerator.addWall], [_enums_TextureName__WEBPACK_IMPORTED_MODULE_0__["TextureName"].EMPTY, function () {}], [_enums_TextureName__WEBPACK_IMPORTED_MODULE_0__["TextureName"].STAR, MapGenerator.addStar], [_enums_TextureName__WEBPACK_IMPORTED_MODULE_0__["TextureName"].CANON, MapGenerator.addCanon]]);
    /***/
  },

  /***/
  "./src/app/gameLogic/PauseScene.ts":
  /*!*****************************************!*\
    !*** ./src/app/gameLogic/PauseScene.ts ***!
    \*****************************************/

  /*! exports provided: PauseScene */

  /***/
  function srcAppGameLogicPauseSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PauseScene", function () {
      return PauseScene;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/SceneName */
    "./src/app/enums/SceneName.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Scene = Phaser.Scene;

    var PauseScene =
    /*#__PURE__*/
    function (_Scene3) {
      _inherits(PauseScene, _Scene3);

      function PauseScene(http) {
        var _this6;

        _classCallCheck(this, PauseScene);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PauseScene).call(this, {
          key: _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].PAUSE
        }));
        _this6.http = http;
        return _this6;
      } // private pausedScene:Scene;
      // init(){
      // Phaser.Scene.call(this, { key: SceneName.PAUSE });
      // console.log('scene' + pausedScene);
      // this.pausedScene = pausedScene;
      // this.pausedScene.scene.pause();
      // }


      _createClass(PauseScene, [{
        key: "create",
        value: function create() {
          this.input.once('pointerdown', function () {
            console.log('resume');
            this.scene.pause();
            this.scene.resume(_enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].MAIN);
          }, this);
        }
      }, {
        key: "preload",
        value: function preload() {
          console.log('pause preload');
        }
      }, {
        key: "update",
        value: function update() {
          console.log('pause update'); // this.myInput.move();
          // this.input.keyboard.once('keydown_ESC', ()=>{
          //   this.pausedScene.scene.resume();
          // });
        }
      }]);

      return PauseScene;
    }(Scene);

    PauseScene.ɵfac = function PauseScene_Factory(t) {
      return new (t || PauseScene)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PauseScene.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PauseScene,
      factory: PauseScene.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PauseScene, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gameLogic/ResultsScene.ts":
  /*!*******************************************!*\
    !*** ./src/app/gameLogic/ResultsScene.ts ***!
    \*******************************************/

  /*! exports provided: ResultsScene */

  /***/
  function srcAppGameLogicResultsSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsScene", function () {
      return ResultsScene;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/SceneName */
    "./src/app/enums/SceneName.ts");
    /* harmony import */


    var _Score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Score */
    "./src/app/gameLogic/Score.ts");
    /* harmony import */


    var _data_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data/Constants */
    "./src/app/gameLogic/data/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Scene = Phaser.Scene;

    var ResultsScene =
    /*#__PURE__*/
    function (_Scene4) {
      _inherits(ResultsScene, _Scene4);

      function ResultsScene(http) {
        var _this7;

        _classCallCheck(this, ResultsScene);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ResultsScene).call(this, {
          key: _enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].RESULTS
        }));
        _this7.http = http;
        return _this7;
      }

      _createClass(ResultsScene, [{
        key: "init",
        value: function init(result) {
          this.result = result;
        }
      }, {
        key: "create",
        value: function create() {
          this.resultText = this.add.text(_data_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].WIDTH / 2, _data_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].HEIGHT / 2, this.result.score.success ? _Score__WEBPACK_IMPORTED_MODULE_2__["Score"].SUCCESS_TEXT : _Score__WEBPACK_IMPORTED_MODULE_2__["Score"].FAIL_TEXT);
          this.scoreText = this.add.text(_data_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].WIDTH / 2, _data_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].HEIGHT / 2 + _data_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].HEIGHT / 7, 'Score: ' + this.result.score.getScore()).setFontSize(30);
          this.input.once('pointerdown', function () {
            console.log('back to start');
            this.scene.start(_enums_SceneName__WEBPACK_IMPORTED_MODULE_1__["SceneName"].INIT);
          }, this);
        }
      }, {
        key: "update",
        value: function update() {
          console.log('end update');
        }
      }]);

      return ResultsScene;
    }(Scene);

    ResultsScene.ɵfac = function ResultsScene_Factory(t) {
      return new (t || ResultsScene)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ResultsScene.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResultsScene,
      factory: ResultsScene.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsScene, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gameLogic/Score.ts":
  /*!************************************!*\
    !*** ./src/app/gameLogic/Score.ts ***!
    \************************************/

  /*! exports provided: Score */

  /***/
  function srcAppGameLogicScoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Score", function () {
      return Score;
    });

    var Score =
    /*#__PURE__*/
    function () {
      function Score() {
        _classCallCheck(this, Score);

        this.success = false;
        this.collectedStars = 0;
        this.starSum = 0;
        this.lives = Score.MAX_LIVES;
      }

      _createClass(Score, [{
        key: "getScore",
        value: function getScore() {
          return this.collectedStars * Score.STAR_VALUE + this.lives * Score.LIFE_VALUE + (this.lives > 0 ? (30 - this.time) * Score.SECOND_VALUE : 0);
        }
      }]);

      return Score;
    }();

    Score.MAX_LIVES = 10;
    Score.SUCCESS_TEXT = 'You Win';
    Score.FAIL_TEXT = 'You Lose';
    Score.STAR_VALUE = 100;
    Score.SECOND_VALUE = 100;
    Score.LIFE_VALUE = 1000;
    /***/
  },

  /***/
  "./src/app/gameLogic/data/Constants.ts":
  /*!*********************************************!*\
    !*** ./src/app/gameLogic/data/Constants.ts ***!
    \*********************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppGameLogicDataConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.WIDTH = 800;
    Constants.HEIGHT = 600;
    /***/
  },

  /***/
  "./src/app/gameLogic/data/Result.ts":
  /*!******************************************!*\
    !*** ./src/app/gameLogic/data/Result.ts ***!
    \******************************************/

  /*! exports provided: Result */

  /***/
  function srcAppGameLogicDataResultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Result", function () {
      return Result;
    });

    var Result = function Result(map, score) {
      _classCallCheck(this, Result);

      this.map = map;
      this.score = score;
    };
    /***/

  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 4,
      vars: 0,
      consts: [[1, "text-center"], ["mat-button", "", "color", "primary", "routerLink", "/game"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Play Arena Runner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/leaderboard/leaderboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/leaderboard/leaderboard.component.ts ***!
    \******************************************************/

  /*! exports provided: LeaderboardComponent */

  /***/
  function srcAppLeaderboardLeaderboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function () {
      return LeaderboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function LeaderboardComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeaderboardComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.position, " ");
      }
    }

    function LeaderboardComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeaderboardComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.name, " ");
      }
    }

    function LeaderboardComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeaderboardComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.weight, " ");
      }
    }

    function LeaderboardComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeaderboardComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.symbol, " ");
      }
    }

    function LeaderboardComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
      }
    }

    function LeaderboardComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }
    }

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }];

    var LeaderboardComponent =
    /*#__PURE__*/
    function () {
      function LeaderboardComponent(http) {
        _classCallCheck(this, LeaderboardComponent);

        this.http = http;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.getLeaderboard();
      }

      _createClass(LeaderboardComponent, [{
        key: "getLeaderboard",
        value: function getLeaderboard() {
          var _this8 = this;

          // this.http.get('http://localhost:8080/api/leaderboard')
          this.http.get('/api/leaderboard').subscribe(function (result) {
            _this8.leaderboard = result.score;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
      return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeaderboardComponent,
      selectors: [["app-leaderboard"]],
      decls: 18,
      vars: 4,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function LeaderboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeaderboardComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeaderboardComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LeaderboardComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeaderboardComponent_td_9_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeaderboardComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LeaderboardComponent_td_12_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LeaderboardComponent_th_14_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LeaderboardComponent_td_15_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LeaderboardComponent_tr_16_Template, 1, 0, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LeaderboardComponent_tr_17_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.leaderboard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leaderboard',
          templateUrl: './leaderboard.component.html',
          styleUrls: ['./leaderboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mapFields/Borders.ts":
  /*!**************************************!*\
    !*** ./src/app/mapFields/Borders.ts ***!
    \**************************************/

  /*! exports provided: Borders */

  /***/
  function srcAppMapFieldsBordersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Borders", function () {
      return Borders;
    });

    var Borders =
    /*#__PURE__*/
    function () {
      function Borders(scene) {
        _classCallCheck(this, Borders);

        this.borders = scene.physics.add.staticGroup();
        this.scene = scene;
      }

      _createClass(Borders, [{
        key: "add",
        value: function add(border) {
          this.borders.add(border);
        }
      }, {
        key: "setCollider",
        value: function setCollider() {
          this.scene.physics.add.collider(this.scene.ship, this.borders);
        }
      }]);

      return Borders;
    }();
    /***/

  },

  /***/
  "./src/app/mapFields/Bullets.ts":
  /*!**************************************!*\
    !*** ./src/app/mapFields/Bullets.ts ***!
    \**************************************/

  /*! exports provided: Bullets */

  /***/
  function srcAppMapFieldsBulletsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bullets", function () {
      return Bullets;
    });

    var Bullets =
    /*#__PURE__*/
    function () {
      function Bullets(scene) {
        _classCallCheck(this, Bullets);

        this.dead = false;
        this.scene = scene;
      }

      _createClass(Bullets, [{
        key: "setCollider",
        value: function setCollider(bullet) {
          this.scene.physics.add.overlap(this.scene.borders.borders, bullet, this.destroy, null, this);
          this.scene.physics.add.overlap(this.scene.ship, bullet, this.destroyShip, null, this);
        }
      }, {
        key: "destroy",
        value: function destroy(bullet, border) {
          bullet.destroy();
        }
      }, {
        key: "destroyShip",
        value: function destroyShip(ship, bullet) {
          // if(!this.dead){
          this.dead = true;
          this.scene.loseLife();

          if (this.scene.score.lives > 0) {
            bullet.destroy();
          } else {
            this.scene.endGame(false);
          } // }

        }
      }]);

      return Bullets;
    }();

    Bullets.BULLET_SIZE_RATIO = 6;
    /***/
  },

  /***/
  "./src/app/mapFields/Canons.ts":
  /*!*************************************!*\
    !*** ./src/app/mapFields/Canons.ts ***!
    \*************************************/

  /*! exports provided: Canons */

  /***/
  function srcAppMapFieldsCanonsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Canons", function () {
      return Canons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_CanonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data/CanonData */
    "./src/app/mapFields/data/CanonData.ts");
    /* harmony import */


    var _enums_TextureName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../enums/TextureName */
    "./src/app/enums/TextureName.ts");
    /* harmony import */


    var _Bullets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Bullets */
    "./src/app/mapFields/Bullets.ts");

    var Canons =
    /*#__PURE__*/
    function () {
      function Canons(scene) {
        _classCallCheck(this, Canons);

        this.scene = scene;
        this.canons = scene.physics.add.group();
      }

      _createClass(Canons, [{
        key: "add",
        value: function add(canon) {
          this.canons.add(canon);
        }
      }, {
        key: "setCollider",
        value: function setCollider() {
          this.scene.physics.add.overlap(this.scene.ship, this.canons, this.shoot, null, this); // this.scene.physics.collide(this.scene.ship, this.canons,);
        }
      }, {
        key: "shoot",
        value: function shoot(ship, canon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var bullet, velocityX, velocityY;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    bullet = this.scene.physics.add.sprite(canon.x + Canons.colliders.get(canon.angle).X * this.scene.gridSize / 2 + Canons.colliders.get(canon.angle).X * this.scene.gridSize / _Bullets__WEBPACK_IMPORTED_MODULE_3__["Bullets"].BULLET_SIZE_RATIO, canon.y + Canons.colliders.get(canon.angle).Y * this.scene.gridSize / 2 + Canons.colliders.get(canon.angle).Y * this.scene.gridSize / _Bullets__WEBPACK_IMPORTED_MODULE_3__["Bullets"].BULLET_SIZE_RATIO, _enums_TextureName__WEBPACK_IMPORTED_MODULE_2__["TextureName"].BULLET).disableBody(true, true); // await this.delay(100);

                    bullet.setDisplaySize(this.scene.gridSize / _Bullets__WEBPACK_IMPORTED_MODULE_3__["Bullets"].BULLET_SIZE_RATIO, this.scene.gridSize / _Bullets__WEBPACK_IMPORTED_MODULE_3__["Bullets"].BULLET_SIZE_RATIO);
                    bullet.enableBody(false, 0, 0, true, true);
                    bullet.setVelocity(Canons.colliders.get(canon.angle).X * Canons.speed, Canons.colliders.get(canon.angle).Y * Canons.speed);
                    this.scene.bullets.setCollider(bullet);
                    velocityX = canon.body.velocity.x;
                    velocityY = canon.body.velocity.y;
                    canon.disableBody(true, false);
                    _context.next = 10;
                    return this.delay(1000);

                  case 10:
                    canon.enableBody(false, canon.x, canon.y, true, true);
                    canon.setVelocity(velocityX, velocityY);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return Canons;
    }();

    Canons.speed = 100;
    Canons.LEFT_CANON_ANGLE = 0;
    Canons.RIGHT_CANON_ANGLE = 180;
    Canons.UP_CANON_ANGLE = 90;
    Canons.DOWN_CANON_ANGLE = -90;
    Canons.colliders = new Map([[Canons.LEFT_CANON_ANGLE, new _data_CanonData__WEBPACK_IMPORTED_MODULE_1__["CanonData"](1, 0)], [Canons.RIGHT_CANON_ANGLE, new _data_CanonData__WEBPACK_IMPORTED_MODULE_1__["CanonData"](-1, 0)], [-Canons.RIGHT_CANON_ANGLE, new _data_CanonData__WEBPACK_IMPORTED_MODULE_1__["CanonData"](-1, 0)], [Canons.UP_CANON_ANGLE, new _data_CanonData__WEBPACK_IMPORTED_MODULE_1__["CanonData"](0, 1)], [Canons.DOWN_CANON_ANGLE, new _data_CanonData__WEBPACK_IMPORTED_MODULE_1__["CanonData"](0, -1)]]);
    /***/
  },

  /***/
  "./src/app/mapFields/MapField.ts":
  /*!***************************************!*\
    !*** ./src/app/mapFields/MapField.ts ***!
    \***************************************/

  /*! exports provided: MapField */

  /***/
  function srcAppMapFieldsMapFieldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapField", function () {
      return MapField;
    });

    var MapField = function MapField(type) {
      var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, MapField);

      this.type = type;
      this.angle = angle;
    };
    /***/

  },

  /***/
  "./src/app/mapFields/Stars.ts":
  /*!************************************!*\
    !*** ./src/app/mapFields/Stars.ts ***!
    \************************************/

  /*! exports provided: Stars */

  /***/
  function srcAppMapFieldsStarsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stars", function () {
      return Stars;
    });

    var Stars =
    /*#__PURE__*/
    function () {
      function Stars(scene) {
        _classCallCheck(this, Stars);

        this.score = scene.score;
        this.scoreText = scene.scoreText;
        this.stars = scene.physics.add.group();
        this.scene = scene;
      }

      _createClass(Stars, [{
        key: "add",
        value: function add(star) {
          this.stars.add(star);
        }
      }, {
        key: "setCollider",
        value: function setCollider() {
          this.scene.physics.add.overlap(this.scene.ship, this.stars, this.collectStar, null, this);
        }
      }, {
        key: "collectStar",
        value: function collectStar(ship, star) {
          this.score.collectedStars++;
          this.scoreText.setText('Stars: ' + this.score.collectedStars);
          star.destroy();

          if (this.score.collectedStars === this.score.starSum) {
            this.scene.endGame(true);
          }
        }
      }]);

      return Stars;
    }();
    /***/

  },

  /***/
  "./src/app/mapFields/Walls.ts":
  /*!************************************!*\
    !*** ./src/app/mapFields/Walls.ts ***!
    \************************************/

  /*! exports provided: Walls */

  /***/
  function srcAppMapFieldsWallsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Walls", function () {
      return Walls;
    });

    var Walls =
    /*#__PURE__*/
    function () {
      function Walls(scene) {
        _classCallCheck(this, Walls);

        this.walls = scene.physics.add.staticGroup();
        this.scene = scene;
      }

      _createClass(Walls, [{
        key: "add",
        value: function add(wall) {
          this.walls.add(wall);
        }
      }, {
        key: "setCollider",
        value: function setCollider() {
          this.scene.physics.add.collider(this.scene.ship, this.walls);
          this.scene.physics.add.collider(this.scene.canons.canons, this.walls);
        }
      }]);

      return Walls;
    }();
    /***/

  },

  /***/
  "./src/app/mapFields/data/CanonData.ts":
  /*!*********************************************!*\
    !*** ./src/app/mapFields/data/CanonData.ts ***!
    \*********************************************/

  /*! exports provided: CanonData */

  /***/
  function srcAppMapFieldsDataCanonDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanonData", function () {
      return CanonData;
    });

    var CanonData = function CanonData(X, Y) {
      _classCallCheck(this, CanonData);

      this.X = X;
      this.Y = Y;
    };
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 13,
      vars: 0,
      consts: [[1, "topnav"], ["routerLink", "/home"], ["routerLink", "/leaderboard"], ["routerLink", "/about"], [1, "right"], ["routerLink", "/login"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register/Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {margin: 0;}\r\n\r\nul.topnav[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\nul.topnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {float: left;}\r\n\r\nul.topnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nul.topnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {background-color: #111;}\r\n\r\nul.topnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {background-color: #4CAF50;}\r\n\r\nul.topnav[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%] {float: right;}\r\n\r\n@media screen and (max-width: 600px) {\r\n  ul.topnav[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%], ul.topnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {float: none;}\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #bbb;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:last-child {\r\n  border-right: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxTQUFTLENBQUM7O0FBRWhCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjLFdBQVcsQ0FBQzs7QUFFMUI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLG1DQUFtQyxzQkFBc0IsQ0FBQzs7QUFFMUQsdUJBQXVCLHlCQUF5QixDQUFDOztBQUVqRCxvQkFBb0IsWUFBWSxDQUFDOztBQUVqQztFQUNFO2dCQUNjLFdBQVcsQ0FBQztBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7bWFyZ2luOiAwO31cclxuXHJcbnVsLnRvcG5hdiB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxudWwudG9wbmF2IGxpIHtmbG9hdDogbGVmdDt9XHJcblxyXG51bC50b3BuYXYgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG51bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICMxMTE7fVxyXG5cclxudWwudG9wbmF2IGxpIGEuYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO31cclxuXHJcbnVsLnRvcG5hdiBsaS5yaWdodCB7ZmxvYXQ6IHJpZ2h0O31cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdWwudG9wbmF2IGxpLnJpZ2h0LFxyXG4gIHVsLnRvcG5hdiBsaSB7ZmxvYXQ6IG5vbmU7fVxyXG59XHJcblxyXG5saSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JiYjtcclxufVxyXG5cclxubGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_9_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.formControls.email.errors.required);
      }
    }

    function RegistrationComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_12_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.formControls.password.errors.required);
      }
    }

    function RegistrationComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nick is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_22_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.formControls.nick.errors.required);
      }
    }

    function RegistrationComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_25_div_1_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.formControls.password.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "has-error": a0
      };
    };

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(authService, router, formBuilder) {
        _classCallCheck(this, RegistrationComponent);

        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        this.isSubmittedReg = false;
      }

      _createClass(RegistrationComponent, [{
        key: "login",
        value: function login() {
          console.log(this.loginForm.value);
          this.isSubmitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.authService.login(this.loginForm.value);
          this.router.navigateByUrl('/admin');
        }
      }, {
        key: "register",
        value: function register() {
          this.isSubmittedReg = true;
          this.authService.register(this.registerForm.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.registerForm = this.formBuilder.group({
            nick: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 28,
      vars: 18,
      consts: [[1, "row"], [1, "col"], [1, "login"], [1, "login-header"], [1, "login-container", 3, "formGroup", "ngSubmit"], [3, "ngClass"], ["type", "email", "placeholder", "Email", "formControlName", "email"], ["class", "help-block", 4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password"], ["type", "submit", "value", "Log in"], ["type", "nick", "placeholder", "Nick", "formControlName", "nick"], ["type", "submit", "value", "Register"], [1, "help-block"], [4, "ngIf"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_6_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistrationComponent_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_div_12_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_19_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegistrationComponent_div_22_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_div_25_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isSubmitted && ctx.formControls.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isSubmitted && ctx.formControls.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isSubmittedReg && ctx.formControls.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmittedReg && ctx.formControls.nick.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.isSubmittedReg && ctx.formControls.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmittedReg && ctx.formControls.password.errors);
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n\n.login[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin: 16px auto;\r\n  font-size: 16px;\r\n}\n.login-header[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.login-triangle[_ngcontent-%COMP%] {\r\n  width: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 12px solid transparent;\r\n  border-bottom-color: rgb(15, 66, 107);\r\n}\n.login-header[_ngcontent-%COMP%] {\r\n  background: rgb(12, 77, 129);\r\n  padding: 20px;\r\n  font-size: 1.4em;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n}\n.login-container[_ngcontent-%COMP%] {\r\n  background: #ebebeb;\r\n  padding: 12px;\r\n}\n.login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n}\n.login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  width: 100%;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 16px;\r\n  outline: 0;\r\n  font-family: inherit;\r\n  font-size: 0.95em;\r\n}\n.login[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-color: #bbb;\r\n  color: #555;\r\n}\n.login[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus {\r\n  border-color: #888;\r\n}\n.login[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  background: rgb(1, 29, 51);\r\n  border-color: transparent;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n.login[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background: #17c;\r\n}\n.login[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:focus {\r\n  border-color: #05a;\r\n}\n.has-error[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .has-error[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  border-color: rgb(216, 12, 12);\r\n  color: rgb(230, 14, 14);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzRUFBc0U7QUFEdEUsdUNBQXVDO0FBSXZDO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICdPcGVuIFNhbnMnIGZvbnQgZnJvbSBHb29nbGUgRm9udHMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcclxuXHJcblxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIsXHJcbi5sb2dpbiBwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sb2dpbi10cmlhbmdsZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMTUsIDY2LCAxMDcpO1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTIsIDc3LCAxMjkpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dpbiBwIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMSwgMjksIDUxKTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxN2M7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwNWE7XHJcbn1cclxuXHJcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE2LCAxMiwgMTIpO1xyXG4gIGNvbG9yOiByZ2IoMjMwLCAxNCwgMTQpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Notebook\Downloads\UK\TIA\Project\Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map