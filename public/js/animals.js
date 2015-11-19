var tweb = angular.module('animals', ["chart.js"]);

tweb.controller("pieChart", function($scope)
{
    $scope.labels = ["Cats", "Dogs", "Horses", "Others"];
    $scope.data	= [867, 257, 145, 187];
});

var socket= io();

socket.on("welcome", function(data)
{
    alert(data.message);
});
