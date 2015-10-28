var app = angular.module("MyApp",['ngRoute']);

app.controller("AccueilCtrl", function ($scope) {

    $scope.title = "Hello World";

    $scope.articles = [
        {
            titre : "Bonjour",
            body : "qosindoqisndoiqsdoi"
        },
        {
            titre : "qdsdqsd",
            body : "qsd qsd qsd qsd"
        }
    ]
})

