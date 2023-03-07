import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }
  // data tuoteluetteloon
  getAllProducts(): any {
    const products = this.http.get('../assets/puhelinten-tuotetiedot/phones/phones.json');
    return products;
  }

  // data yksittäisen puhelimen näkymään
  getProduct(id: string): any {
    const product = this.http.get('../assets/puhelinten-tuotetiedot/phones/' + id + '.json')
    return product;
  }
}
