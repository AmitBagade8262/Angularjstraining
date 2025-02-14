import * as angular from 'angular';
import { productservice } from '../src/Catalogue/Services/product.service'
import { ApiService } from '../src/Catalogue/Services/api.services';
import { productController } from '../src/Catalogue/Controllers/product.controller';
import { apiproductcontroller } from '../src/Catalogue/Controllers/apiproduct.controller';

angular.module('myApp', []);
angular.module('myApp').service('productservice', productservice);
angular.module('myApp').service('ApiService', ApiService);
angular.module('myApp').controller('productController',  productController);
angular.module('myApp').controller('apiproductcontroller', apiproductcontroller);

