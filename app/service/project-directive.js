"use strict";

function expandOnFocus () {
    return {
        restrict: "A",
        link: function($scope, $element, $attr) {

        
            $element.on("toggle", () => {
                console.log("Toggle worked!")
                $(".single-result").css("height", "40px");
                $element.css("width", "500px");
                $element.css("font-size", "30px");

            });
        }
    };
};


angular 
    .module("App")
    .directive("expandOnFocus", expandOnFocus);