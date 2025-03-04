var app = angular.module('myApp',[]);
// app.controller('myCtrl',function($scope){
    // $scope.count=0;
    // $scope.click = 0;
    // $scope.clickfunction=0;
    // $scope.myFunction = function(){
    //     $scope.clickfunction++;
    // }
    
    // $scope.showMe = false;
    // $scope.myFun = function() {
    //     $scope.showMe = !$scope.showMe;
    // }
    // $scope.myfun=function(myE){
    //     $scope.x = myE.clientX;
    //     $scope.y = myE.clientY;
    // }
    // $scope.master = {firstname: "lia",lastname: "sia"};
    // $scope.reset=function(){
    //     $scope.user - angular.copy($scope.master);
    // };
    // $scope.reset();
app.directive('myDirective',function(){
    return{
        require:'ngModel',
        link:function(scope,element,attr,mCtrl){
            function myValidate(value){
                if(value.indexOf('e')>-1){
                    mCtrl.$setValidity('charE',true);
                }else{
                    mCtrl.$setValidity('charE',false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    }
});