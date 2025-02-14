import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing

// Import the controllers
import { HomeController } from './controllers/home.controller';
import { AboutController } from './controllers/about.controller';
import { LoginController } from './controllers/login.controller';
import { productcontroller } from './controllers/product.controller';

// Define the AngularJS module
const appModule = angular.module('myApp', ['ngRoute']);

// Configure routing with the $routeProvider
appModule.config(['$routeProvider', ($routeProvider:any) => {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',  // Template for the home route
      controller: 'HomeController',  // Controller for the home route
      controllerAs: 'homeCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
    .when('/about', {
      templateUrl: 'views/about.html',  // Template for the about route
      controller: 'AboutController',  // Controller for the about route
      controllerAs: 'aboutCtrl'  // Use 'aboutCtrl' as alias for the controller instance
    })

    .when('/login', {
      templateUrl: 'views/login.html',  // Template for the contact route
      controller: 'LoginController',  // Controller for the Contact route
      controllerAs: 'loginCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })

    .when('/product', {
      templateUrl: 'views/list.html',  // Template for the contact route
      controller: 'productcontroller',  // Controller for the Contact route
      controllerAs: 'productCtrl'  // Use 'contactCtrl' as alias for the controller instance
    })



    .otherwise({
      redirectTo: 'home'  // Default route is home
    });
}]);

// Register controllers with the module

appModule.controller('HomeController', HomeController);
appModule.controller('AboutController', AboutController);
appModule.controller('LoginController', LoginController);
appModule.controller('productcontroller', productcontroller);
export default appModule;
