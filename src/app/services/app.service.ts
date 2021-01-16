import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getHomePage(): any {
    return this.http.get(environment.API);
  }

  addProduct(data): any {
    return this.http.post(environment.API + '/products', data);
  }

  getProducts(): any {
    return this.http.get(environment.API + '/products');
  }
}
