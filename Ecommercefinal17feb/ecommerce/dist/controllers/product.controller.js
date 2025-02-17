var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, $routeParams) {
        this.$scope = $scope;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.message = 'Welcome to TypeScript!';
        this.catalogs = [
            {
                id: 1,
                name: "SONY Bravia 15",
                category: "Television",
                price: "76,990",
                specifications: "163.9 cm (65 inch) Ultra HD (4K)",
                brand: "SONY",
                image: "images/bravia.jpg"
            },
            {
                id: 2,
                name: "Noise Twist Round dial Smart Watch",
                category: "Smart Watch",
                price: "1,399",
                specifications: "1.38 TFT Display up-to 7 Days Battery, ",
                brand: "Noise",
                image: "images/Smartwatch.jpg"
            },
            {
                id: 3,
                name: "HP Pavilion ",
                category: "Laptop",
                price: "63,299",
                specifications: "12th Gen Intel Core i5-1235U, 16GB DDR4, 512GB SSD",
                brand: "HP",
                image: "images/hp.jpg"
            },
            {
                id: 4,
                name: "boAt Rockerz 450s",
                category: "Headphone",
                price: "1,399",
                specifications: "15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls",
                brand: "boAt",
                image: "images/boAt.jpg"
            },
            {
                id: 5,
                name: "Canon EOS R6 Mark",
                category: "Camera",
                price: "2,67,999 ",
                specifications: "24. 2 MP Mirrorless Camera with RF24-105mm f4 L is USM Lens Kit (Black)",
                brand: "Canon",
                image: "images/Canon.jpg"
            },
        ];
        var productId = $routeParams['productId'];
        if (productId) {
            this.selectedProduct = this.getProductById(Number(productId));
        }
        else {
            this.selectedProduct = null;
        }
        $scope['data'] = this;
    }
    ProductController.prototype.addToCart = function (product) {
        console.log('Product added to cart:', product);
        // You can add logic to add this product to the cart here
        var temp = [];
        temp = JSON.parse(sessionStorage.getItem('cart') || '[]');
        if (temp != null) {
            temp.push(product);
        }
        else {
            temp = [];
            temp.push(product);
        }
        // temp.push(product);
        sessionStorage.setItem('cart', JSON.stringify(temp));
        this.$location.path('/cart'); // Redirect to catalog page
    };
    // Function to navigate to the details page for a product
    ProductController.prototype.viewProductDetails = function (productId) {
        this.$location.path("/product/".concat(productId));
    };
    // Function to get a product by ID
    ProductController.prototype.getProductById = function (productId) {
        for (var i = 0; i < this.catalogs.length; i++) {
            if (this.catalogs[i].id === productId) {
                return this.catalogs[i]; // Return the product if ID matches
            }
        }
        console.error("Product not found");
        return null; // Return null if product is not found
    };
    ProductController.$inject = ['$scope', '$location', '$routeParams'];
    return ProductController;
}());

//angular.module('myApp').controller('MyController', MyController);
