
        var app = angular.module('ngchangeApp', []);
        app.controller('ngchangeCtrl', function($scope) {
            $scope.arrlist = [
                {
                    "userid": 1,
                    "name": "sanket",
                    "age": "24",
                    "location": "pune"
                },
                {
                    "userid": 2,
                    "name": "kedar",
                    "age": "24",
                    "location": "kolhapur"
                },
                {
                    "userid": 3,
                    "name": "Tushar",
                    "age": "24",
                    "location": "sangli"
                }
            ];
            $scope.getdetails = function() {
                $scope.result = $scope.userselected;
            };
        });