var productController = /** @class */ (function () {
    function productController($scope, productservice) {
        this.$scope = $scope;
        this.productservice = productservice;
        this.products = [];
        console.log('userService:', this.productservice);
        this.loadUsers();
        $scope['vm'] = this;
    }
    productController.prototype.loadUsers = function () {
        this.products = this.productservice.getProducts();
    };
    productController.$inject = ['$scope', 'productservice'];
    return productController;
}());

