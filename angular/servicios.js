var app = angular.module('promesaApp.servicios',[]);


app.factory('personas',['$http','$q', '$rootscope',function($http, $q, $rootscope){
	var self ={
		"cargando":false,
		"data":[{
			"nombre":"Manuel",
			"edad":30
		}]
	};


	self.cargarData = function(){
			self.cargando = true;
			var q = $q.defer(); 

			$http.jsonp("http://json-generator.com/api/json/get/clpjEehFMy?callback=JSON_CALLBACK")
			.then(function success(data){
				q.resolve(data.data);
			},function error(response){
				console.log("Errror");
				q.reject("Error al cargar");
			});
			return q.promise;
	};

	$rootscope.promise = self.cargarData();
	$rootscope.promise.then(function(data){
		self.cargado = false;
		self.mensaje ="Informacion cargada correctamente";
		self.data = data;
	},function(error){
		self.cargado = false;
		self.mensaje = "Error al cargar la data;";
		console.log("error");
	});

	return self;
}]);
