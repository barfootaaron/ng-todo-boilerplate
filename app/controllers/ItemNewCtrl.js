"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
	$scope.newTask = {
      assignedTo: "",
      dependencies: "",
      dueDate: "",
      isCompleted: false,
      location: "",
      task: "",
      urgency: ""
   };

	$scope.addNewItem = function() {
      console.log("add new item");
      ItemStorage.postNewItem($scope.newTask)
      .then( function (response) {
         $location.url("items/list");
      });
      //Set task isCompleted value to false
      // $scope.newTask.isCompleted = false;
      //Assign id for each new todo item added
      // $scope.newTask.id = $scope.items.length; 
      console.log("you added a new item:", $scope.newTask);
      // $scope.items.push($scope.newTask);
      $scope.newTask = {};
   };

});
