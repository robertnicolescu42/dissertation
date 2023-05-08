'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">dissertation documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' : 'data-target="#xs-components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' : 'id="xs-components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AlertGroupCardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AlertGroupCardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AlertListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AlertListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AnomalyObserveSpectogramModalComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AnomalyObserveSpectogramModalComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BreadcrumbsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BreadcrumbsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfigComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfigComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ExportConfirmationModalComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ExportConfirmationModalComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FeedbacksComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FeedbacksComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/GaugeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GaugeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/GenericCardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GenericCardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/OeeCalculationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OeeCalculationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/OeeChartComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OeeChartComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PlantConfigComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PlantConfigComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PlantSelectionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PlantSelectionComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PredictiveMaintenanceAnomalyOverviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PredictiveMaintenanceAnomalyOverviewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PredictiveMaintenanceChartComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PredictiveMaintenanceChartComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PredictiveMaintenanceComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PredictiveMaintenanceComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PredictiveMaintenanceMachineOverviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PredictiveMaintenanceMachineOverviewComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SignInComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SignInComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SignUpComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SignUpComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/StationDetailsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StationDetailsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/StationSelectionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StationSelectionComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/StatusWidgetComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StatusWidgetComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/WorkstationConfigComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >WorkstationConfigComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Alert.html\" data-type=\"entity-link\" >Alert</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AlertGroup.html\" data-type=\"entity-link\" >AlertGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AlertGroupWithDuration.html\" data-type=\"entity-link\" >AlertGroupWithDuration</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RulInfoDataEntry.html\" data-type=\"entity-link\" >RulInfoDataEntry</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AlertService.html\" data-type=\"entity-link\" >AlertService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CognitoService.html\" data-type=\"entity-link\" >CognitoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/FeedbacksService.html\" data-type=\"entity-link\" >FeedbacksService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PlantsService.html\" data-type=\"entity-link\" >PlantsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PredictiveMaintenanceService.html\" data-type=\"entity-link\" >PredictiveMaintenanceService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/WidgetsService.html\" data-type=\"entity-link\" >WidgetsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/WorkstationGeneratorService.html\" data-type=\"entity-link\" >WorkstationGeneratorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/WorkstationsService.html\" data-type=\"entity-link\" >WorkstationsService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/AuthInterceptor.html\" data-type=\"entity-link\" >AuthInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AlertGroup.html\" data-type=\"entity-link\" >AlertGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AlertGroupUpdate.html\" data-type=\"entity-link\" >AlertGroupUpdate</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AlertMappingEntry.html\" data-type=\"entity-link\" >AlertMappingEntry</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AnomalyEntry.html\" data-type=\"entity-link\" >AnomalyEntry</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Field.html\" data-type=\"entity-link\" >Field</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IUser.html\" data-type=\"entity-link\" >IUser</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OEE.html\" data-type=\"entity-link\" >OEE</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Plant.html\" data-type=\"entity-link\" >Plant</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RulInfoGraphEntry.html\" data-type=\"entity-link\" >RulInfoGraphEntry</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RulInfoRawDataEntry.html\" data-type=\"entity-link\" >RulInfoRawDataEntry</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StationsArray.html\" data-type=\"entity-link\" >StationsArray</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Tool.html\" data-type=\"entity-link\" >Tool</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Workstation.html\" data-type=\"entity-link\" >Workstation</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));