"use strict";

const homePage = {
    templateUrl: "app/components/home-page.html",
    controller: ["FilmFinderFactory", function(FilmFinderFactory) {
        const vm= this;
        vm.isOn =false;
        vm.search = (searchCriteria) => {
            FilmFinderFactory.searchMovie(searchCriteria).then((data) => {
                vm.movies = data;
                if (vm.isOn === false) {
                    vm.isOn = true;
                } else {
                    vm.isOn = false;
                }
            });
        };

        vm.displayList = () => {
            FilmFinderFactory.loadWatch();
        };

    }]
};


angular 
    .module("App")
    .component("homePage", homePage);