
var apiproductcontroller = /** @class */ (function () {
    function apiproductcontroller($scope, apiService) {
        this.$scope = $scope;
        this.apiService = apiService;
        this.$scope.products = [];
        this.$scope.product = {}; // Initialize user object (for form)
        this.loadProducts(); // Call loadUsers to fetch data on init
    }
    // Method to load users using ApiService
    apiproductcontroller.prototype.loadProducts = function () {
        var _this = this;
        this.apiService.getProducts()
            .then(function (response) {
            _this.$scope.products = response.data;
        })
            .catch(function (error) {
            console.error('Error loading users:', error);
        });
    };
    apiproductcontroller.$inject = ['$scope', 'ApiService'];
    return apiproductcontroller;
}());

angular.module('myApp').controller('apiproductcontroller', apiproductcontroller);
