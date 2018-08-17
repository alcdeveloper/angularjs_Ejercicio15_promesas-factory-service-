var app = angular.module('promesaApp.controladores',[]);

app.controller('personasCtrl',['$scope', 'personas' ,function($scope, personas){
	$scope.personas = personas;
}]);