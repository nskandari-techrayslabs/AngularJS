// var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope,$location){
//     $scope.myUrl = $location.absUrl();
// });
// var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope,$timeout){
//     $scope.myHeader = "Hello World!";
//     $timeout(function(){
//         $scope.myHeader = "How are you ?";
//     },2000)
// });
// var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope,$interval){
//     $scope.theTime = new Date().toLocaleTimeString();
//     $interval(function(){
//         $scope.theTime = new Date().toLocaleTimeString();
//     },1000);
// })
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    // $scope.cars = [
    //     {model : "Ford Mustang", color : "red"},
    //     {model : "Fiat 500", color : "white"},
    //     {model : "Volvo XC90", color : "black"}
    // ];
    $scope.cars = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    }
});