angular.module('starter.services', [])

.factory('parser', function($http, $q){
	var parsedCSV = null; 
	return{
		getAll: function(){
			var deferred = $q.defer(); 
			$http({method: 'GET', url: './samples/sample.csv'})
			.success(function(data){
				Papa.parse(data, {
    				header: true, 
    				complete: function(results) {
    					parsedCSV = results.data; 
      					deferred.resolve(results.data);   
    				}
  				}); 
			});
			return deferred.promise; 
		},
		getLine: function(index){
			return parsedCSV[index]; 
		},
		editLine: function(index, value){
			parsedCSV[index].policyID = value; 
		}
	}
});  
