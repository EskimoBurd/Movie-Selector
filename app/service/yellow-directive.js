"use strict";

function yellow () {
   return{
       restrict: "A",
       link: function($scope, $element, $attr){
            $element.on("click", () =>{
                $element.css("color", "yellow");
           });
        }
    };
       

};


angular 
    .module("App")
    .directive("yellow", yellow);