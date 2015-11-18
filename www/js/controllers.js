angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {



})

.controller('SelectFileCtrl', function($scope) {
    $scope.filepathChooser = function() {
        window.plugins.mfilechooser.open([], function (uri) {
            //Here uri provides the selected file path.
            console.log('file path', uri);
            alert(uri);
        }, function (error) {
            console.log('Error', error);
            alert(error);
        });
    }; 
})

.controller('TableCtrl', function($scope, $state, parser){
    $scope.limit = 20; 

    parser.getAll().then(function(data){
        $scope.data = data; 
        $scope.keyObj = Object.keys($scope.data[0]); 
    });

    $scope.addItems = function(){
        $scope.limit = $scope.limit + 20; 
    }

    $scope.selectItem = function(index){
        $state.go('app.item', {line: index});
    };
})

.controller('ItemCtrl', function($scope, $stateParams, parser){
    $scope.line = parseInt($stateParams.line); 
    $scope.lineItem = parser.getLine($scope.line); 

    $scope.increment = function(){
        $scope.line = $scope.line + 1; 
        console.log($scope.line); 
        $scope.lineItem = parser.getLine($scope.line); 
    };

    $scope.edit = function(){
        parser.editLine(1, "TEST"); 
    }; 
})
;