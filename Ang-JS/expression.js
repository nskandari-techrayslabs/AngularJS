// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//     $scope.firstName= "John";
//     $scope.lastName= "Doe";
    
// });
// $scpoe.bgColor ='lightblue';

// var app = angular.module("myApp",[]);
// app.directive("w3TestDirective",function(){
//     return{
//         template : "I was made in a directive constructor"
//     };
// });

// var app = angular.module('myApp',[]);
// app.directive("TestDirective",function(){
//     return{
//         template : "<h1>Made by a directive</h1>"
//     };
// });

var app = angular.module('myApp',[]);
        app.controller('myCtrl',function($scope){
            $scope.name ="";
            $scope.mail="";
        });