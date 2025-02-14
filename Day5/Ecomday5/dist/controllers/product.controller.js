var productcontroller = /** @class */ (function () {
    function productcontroller($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Ecom!';
        this.product = [
            {
                name: "SONY Bravia 15",
                price: "76,990",
                specifications: "163.9 cm (65 inch) Ultra HD (4K)",
                brand: "SONY",
                image: "images/sonybravia.jpg"
            },
            {
                name: "MOTOROLA EnvisionX",
                price: "32,999",
                specifications: "140 cm (55 inch) QLED Ultra HD (4K)",
                brand: "MOTOROLA",
                image: "images/sonybravia.jpg"
            },
            {
                name: "TCL C69B ",
                price: "36,990",
                specifications: "(55 inch) QLED Ultra HD (4K)",
                brand: "TCL",
                image: "images/sonybravia.jpg"
            },
            {
                name: "Mi by Xiaomi X Series",
                price: "33,999",
                specifications: "138 cm (55 inch) Ultra HD (4K)",
                brand: "Xiaomi",
                image: "images/sonybravia.jpg"
            },
            {
                name: "Acer Super Series",
                price: "37,999",
                specifications: "(55 inch) QLED Ultra HD (4K)",
                brand: "Acer",
                image: "images/sonybravia.jpg"
            }
        ];
        $scope['vm'] = this;
    }
    productcontroller.$inject = ['$scope'];
    return productcontroller;
}());
export { productcontroller };
