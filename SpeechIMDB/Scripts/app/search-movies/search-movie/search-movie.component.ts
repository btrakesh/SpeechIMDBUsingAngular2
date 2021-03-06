﻿import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchMovieModel } from '../shared/model/search-movie.model';
import { MovieListModel } from '../shared/model/movie.model';
import { PageTitleService } from '../../shared/service/page-title.service';
import { ToasterService } from '../../shared/service/alert.service';
import { BreadcrumbService } from '../../shared/service/breadcrumb.service';
import { SearchMovieParameterDataService } from '../shared/service/search-movie-parameter-store.service';
import { UrlHistoryService } from '../shared/service/url-history-store.service';
import * as _ from "lodash";

@Component({
    selector: 'search-movie',
    templateUrl: '../../Scripts/app/search-movies/search-movie/search-movie.component.html'
})

export class SearchMovieComponent implements OnInit, DoCheck {
    model: SearchMovieModel;
    oldModel: SearchMovieModel;
    changeDetected: boolean;

    constructor(
        private searchMovieParameterService: SearchMovieParameterDataService,
        private pageTitleService: PageTitleService,
        private router: Router,
        private route: ActivatedRoute,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService,
        private urlHistoryService: UrlHistoryService) {
        this.model = new SearchMovieModel("", "", "", 1);
        this.oldModel = new SearchMovieModel("", "", "", 1);
        this.changeDetected = false;
    }

    ngOnInit() {
        //populate fields in case of back button click from search movie list
        //use Object.assign() for deep copy, its similar to angular.copy()
        this.model = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());
        this.oldModel = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());

        //service to set title of page
        this.pageTitleService.setTitle("Search Movies");
        this.toasterService.showToaster("info", "Search Movie", "ready to explore movie search engine");
        this.breadcrumbService.setBreadcrumbs("searchMovie");
        this.urlHistoryService.setUrlHistoryObj("/movie/searchMovie");
    }

    ngDoCheck() {
        if (_.isEqual(this.model, this.oldModel) == false)
            this.changeDetected = true;
    }

    searchMovie(): void {
        if (this.changeDetected) {
            //set movies search parameter store
            this.searchMovieParameterService.setSearchParamObj(this.model);
        }
        this.router.navigate(['/movie/searchMovieList']);
    }

    get diagnostic(): string {
        return JSON.stringify(this.model);
    }
}