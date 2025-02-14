import * as angular from 'angular';

// Define an interface for API response (optional, but recommended for TypeScript)
interface IProduct {
    name:string;
    price:number;
    specifications:string;
    brand:string;
    image:string;
}


export class ApiService {
  static $inject = ['$http'];

  constructor(private $http: angular.IHttpService) {}

  // Example GET request to fetch users
  getProducts(): angular.IHttpPromise<IProduct[]> {
    return this.$http.get<IProduct[]>('sessionStorage.getItem()');
  }
}
angular.module('myApp').service('ApiService', ApiService);]