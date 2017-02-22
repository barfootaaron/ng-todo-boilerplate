"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant('FirebaseURL', "https://angularstarter-f52e6.firebaseio.com");
// Above = original definition of database url

app.config(function($routeProvider) {
   $routeProvider.
   when('/items/list', {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl"
   }).
   when('/items/new', {
      templateUrl: "partials/item-form.html",
      controller: "ItemNewCtrl"
   }).
   when('/items/:itemId', {
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl"
   }).
   otherwise('/items/list');
});


