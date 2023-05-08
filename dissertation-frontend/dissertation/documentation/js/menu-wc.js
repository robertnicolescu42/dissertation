'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dissertation documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' : 'data-target="#xs-components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' :
                                            'id="xs-components-links-module-AppModule-64b02368455551dbecf2fb0aa7721b2f8a59c785723f4c5423f579585a1e1a4086dfe4adb0ff23247c1ba6263580aa69122221994c165a6b55dbc42ece6cdd2b"' }>
                                            <li class="link">
                                                <a href="components/AlertGroupCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertGroupCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnomalyObserveSpectogramModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnomalyObserveSpectogramModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExportConfirmationModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExportConfirmationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbacksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbacksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaugeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaugeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenericCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OeeCalculationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OeeCalculationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OeeChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OeeChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlantConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlantSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredictiveMaintenanceAnomalyOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredictiveMaintenanceAnomalyOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredictiveMaintenanceChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredictiveMaintenanceChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredictiveMaintenanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredictiveMaintenanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredictiveMaintenanceMachineOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredictiveMaintenanceMachineOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StationDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StationDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StationSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StationSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkstationConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkstationConfigComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link" >Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlertGroup.html" data-type="entity-link" >AlertGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/AlertGroupWithDuration.html" data-type="entity-link" >AlertGroupWithDuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/RulInfoDataEntry.html" data-type="entity-link" >RulInfoDataEntry</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CognitoService.html" data-type="entity-link" >CognitoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeedbacksService.html" data-type="entity-link" >FeedbacksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlantsService.html" data-type="entity-link" >PlantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PredictiveMaintenanceService.html" data-type="entity-link" >PredictiveMaintenanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsService.html" data-type="entity-link" >WidgetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkstationGeneratorService.html" data-type="entity-link" >WorkstationGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkstationsService.html" data-type="entity-link" >WorkstationsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AlertGroup.html" data-type="entity-link" >AlertGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertGroupUpdate.html" data-type="entity-link" >AlertGroupUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertMappingEntry.html" data-type="entity-link" >AlertMappingEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnomalyEntry.html" data-type="entity-link" >AnomalyEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Field.html" data-type="entity-link" >Field</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OEE.html" data-type="entity-link" >OEE</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plant.html" data-type="entity-link" >Plant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RulInfoGraphEntry.html" data-type="entity-link" >RulInfoGraphEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RulInfoRawDataEntry.html" data-type="entity-link" >RulInfoRawDataEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StationsArray.html" data-type="entity-link" >StationsArray</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tool.html" data-type="entity-link" >Tool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Workstation.html" data-type="entity-link" >Workstation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});