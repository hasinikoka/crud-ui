app.service("crudService", function ($http,$q) {
	var serviceUrl = "http://localhost:8080/students/";
	//get All Users
    this.getUsers= function() {
     deferred = $q.defer();
     $http({
         method: 'GET',
         url: serviceUrl
     }).success(function(data){
         // With the data succesfully returned, we can resolve promise and we can access it in controller
         deferred.resolve();
     }).error(function(){
          alert("error");
          //let the function caller know the error
          deferred.reject(error);
     });
     return deferred.promise;
  }


	this.getUser = function(userId) {
		var response = $http({
			method	: "POST",
			url		: serviceUrl,
			params 	: {
					id : userId
			}
		});
		return response;
	};

	this.updateUser = function (user) {
		var response = $http({
			method : "POST",
			url : serviceUrl,
			params : user
		});

		return response;
	};

	this.addUser = function (user) {
		var response = $http({
			method  : "POST",
			url		: serviceUrl,
			params : user
		});
		return response;
	};

	this.deleteUser = function (id) {
		var response = $http({
			method  : "POST",
			url		: serviceUrl,
			params : {userId : id}
		});
		return response;
	};

});