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

// var app = angular.module('myApp',[]);
//         app.controller('myCtrl',function($scope){
//             $scope.name ="";
//             $scope.mail="";
//         });

// var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope){
//     $scope.firstName = 'nidhi';
//     $scope.lastName = 'singh';
//     $scope.changeName = function(){
//         $scope.firstName = 'varun';
//     }
// });

// var app = angular.module('myApp', []);
// app.run(function($rootScope) {
//     $rootScope.color = 'blue';
// });
// app.controller('myCtrl', function($scope) {
//     $scope.color = "red";
// });

// angular.module('myApp', []).controller('namesCtrl', function($scope) {
//     $scope.names = [
//         'Jani',
//         'Carl',
//         'Margareth',
//         'Hege',
//         'Joe',
//         'Gustav',
//         'Birgit',
//         'Mary',
//         'Kai'
//     ];
// });

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
    ];
    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }
  });