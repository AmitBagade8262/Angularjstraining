
var ApiService = /** @class */ (function () {
    function ApiService($http) {
        this.$http = $http;
    }
    // Example GET request to fetch products
    ApiService.prototype.getProducts = function () {
        return this.$http.get('https://jsonplaceholder.typicode.com/products');
    };
    ApiService.$inject = ['$http'];
    return ApiService;
}());

angular.module('myApp').service('ApiService', ApiService);
