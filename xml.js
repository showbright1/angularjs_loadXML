
var app = angular.module("xmlApp", []);

app.factory("xmlFactory", function ($http) {
    'use strict';
    var factory = [];
    
    factory.getXML = function () {
        return $http.get("data.xml");
    };
    
    return factory;
});

app.controller("myXMLCtrl", function ($scope, xmlFactory) {
    'use strict';
    $scope.menus = [];
    var x2js = new X2JS();
    
    xmlFactory.getXML().success(function (data) {
        console.log(data);
        var menus = x2js.xml_str2json(data);
        console.log(menus.root.menu);
        $scope.menus = menus.root.menu;
    }).error(function (err) {
        console.log(err);
    });
    
});