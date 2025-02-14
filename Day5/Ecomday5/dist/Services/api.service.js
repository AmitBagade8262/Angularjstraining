import * as angular from 'angular';
var ApiService = /** @class */ (function () {
    function ApiService($http) {
        this.$http = $http;
    }
    // Example GET request to fetch users
    ApiService.prototype.getProducts = function () {
        return this.$http.get('sessionStorage.getItem()');
    };
    ApiService.$inject = ['$http'];
    return ApiService;
}());
export { ApiService };
angular.module('myApp').service('ApiService', ApiService);
