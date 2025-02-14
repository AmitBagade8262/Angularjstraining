import * as angular from 'angular';
import { ApiService } from '../Services/api.services';

interface ICustomScope extends angular.IScope {
  products: any[];
  product: any;
}

export class apiproductcontroller {
  static $inject = ['$scope', 'ApiService'];

  constructor(private $scope: ICustomScope, private apiService: ApiService) {
    this.$scope.products = [];
    this.$scope.product = {}; // Initialize user object (for form)
    this.loadProducts(); // Call loadUsers to fetch data on init
  }

  // Method to load users using ApiService
  loadProducts(): void {
    this.apiService.getProducts()
      .then((response) => {
        this.$scope.products = response.data;
      })
      .catch((error) => {
        console.error('Error loading users:', error);
      });
  }
}
angular.module('myApp').controller('apiproductcontroller', apiproductcontroller);