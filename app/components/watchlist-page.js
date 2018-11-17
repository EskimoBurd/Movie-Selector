"use strict";


const watchListPage = {
    templateUrl: "app/components/watchlist-page.html"
    
    ,
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.wlArray = FilmFinderFactory.getMovieList();
        vm.displayHome = () => {
            FilmFinderFactory.loadHome();
        };
        vm.removeItem = (index) => {
            FilmFinderFactory.removeFav(index);
        }   
    }]
};


angular 
    .module("App")
    .component("watchListPage", watchListPage);


// form is hidden but need to rework it to get it to reappear