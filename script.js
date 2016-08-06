var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Attach the model (a simple object) to the scope
        $scope.message = "Hello Angular!";
        // Create a model (a complex object)
        var employee = {
            firstName: "John",
            lastName: "Doe",
            gender: "Male"
        };
        // Attach the model (a complex object) to the scope
        $scope.employee = employee;
    });
