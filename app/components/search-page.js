"use strict";

const searchPage = {
    templateUrl: "app/components/search-page.html",
    
    bindings: {
        search: "&"
    }
};


angular 
    .module("App")
    .component("searchPage", searchPage);