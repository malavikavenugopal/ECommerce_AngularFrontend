import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allProducts: any = []

  constructor(private http: HttpClient) { }

  server_URL = "http://localhost:3000"

  getAllProductsApi() {
    return this.http.get(`${this.server_URL}/allproducts`)
  }
  registerApi(user:any) {
    return this.http.post(`${this.server_URL}/register`,user)
  }
  loginApi(user:any) {
    return this.http.post(`${this.server_URL}/login`,user)
  }
  getProductApi(id:any) {
    return this.http.get(`${this.server_URL}/get-product/${id}`)
  }
  


}
