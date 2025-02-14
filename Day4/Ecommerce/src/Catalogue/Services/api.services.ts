import * as angular from 'angular';

// Define an interface for API response (optional, but recommended for TypeScript)
interface IProduct {
    name: string;
    price: string; 
    specifications: string; 
    brand: string;  
  }

export class ApiService {
  static $inject = ['$http'];

  constructor(private $http: angular.IHttpService) {}

  // Example GET request to fetch products
  getProducts(): angular.IHttpPromise<IProduct[]> {
    return this.$http.get<IProduct[]>('https://jsonplaceholder.typicode.com/products');
  }
}
angular.module('myApp').service('ApiService', ApiService);