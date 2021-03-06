"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var page_title_service_1 = require('../../shared/service/page-title.service');
var alert_service_1 = require('../../shared/service/alert.service');
var breadcrumb_service_1 = require('../../shared/service/breadcrumb.service');
var loader_service_1 = require('../../shared/service/loader.service');
var web_api_observable_service_1 = require('../../shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('../../shared/service/web-api-promise.service');
var SearchMovieDetailComponent = (function () {
    function SearchMovieDetailComponent(route, pageTitleService, movieService, moviePromiseService, alertService, breadcrumbService, loaderService) {
        this.route = route;
        this.pageTitleService = pageTitleService;
        this.movieService = movieService;
        this.moviePromiseService = moviePromiseService;
        this.alertService = alertService;
        this.breadcrumbService = breadcrumbService;
        this.loaderService = loaderService;
    }
    SearchMovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get data from resolve feature of routing
        this.route.data.forEach(function (data) {
            _this.movieDetailModel = data.resolvedMovieDetail;
            _this.loaderService.displayLoader(false);
            if (_this.movieDetailModel.title)
                _this.alertService.showAlert(true, "Details of " + _this.movieDetailModel.title + " has been laoded.");
        });
        //recieving parametes from url for testing
        this.route.params.forEach(function (params) {
            //console.log(params['imdbId'])
        });
        this.pageTitleService.setTitle("Movie Detail");
        this.breadcrumbService.setBreadcrumbs("movieDetail");
    };
    Object.defineProperty(SearchMovieDetailComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.movieDetailModel);
        },
        enumerable: true,
        configurable: true
    });
    SearchMovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'search-movie-detail',
            templateUrl: '../../Scripts/app/search-movies/search-movie-detail/search-movie-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, page_title_service_1.PageTitleService, web_api_observable_service_1.WebApiObservableService, web_api_promise_service_1.WebApiPromiseService, alert_service_1.AlertService, breadcrumb_service_1.BreadcrumbService, loader_service_1.LoaderService])
    ], SearchMovieDetailComponent);
    return SearchMovieDetailComponent;
}());
exports.SearchMovieDetailComponent = SearchMovieDetailComponent;
//# sourceMappingURL=search-movie-detail.component.js.map