

 //1.Define Angular js Module

 var app=angular.module("transflower",[]);
 app.controller("LoginController",function($scope){
    //define model
    $scope.user={
        email:"amitbagade@gmail.com",
        password:"amit8262"
    };
    $scope.onValidate=function(){
        if(){
            console.log("Welcome");

        }
        else{
            console.log("Invalid user");

        }
    }
 });