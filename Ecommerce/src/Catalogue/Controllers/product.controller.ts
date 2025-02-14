import * as angular from 'angular';
import { productservice } from '../Services/product.service';

interface ICustomScope extends angular.IScope {
  vm: productController;
}

export class productController {
  static $inject = ['$scope', 'productservice'];
  private products:any[]=[];

  constructor(private $scope: ICustomScope, private productservice: productservice) {
    console.log('userService:', this.productservice);  
    this.loadUsers();
    $scope['vm'] = this;
}
loadUsers(): void {
  this.products = this.productservice.getProducts();
}

}