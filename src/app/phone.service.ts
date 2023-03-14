import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phonesUrl = '../assets/puhelinten-tuotetiedot/phones/phones.json';

  constructor(private http: HttpClient) { }

  // data tuoteluetteloon
  getAllProducts(): Observable<Phone[]>  {
    return this.http.get<Phone[]>(this.phonesUrl);
  }

  // data yksittäisen puhelimen näkymään
  getProduct(id: string): any {
    const product = this.http.get('../assets/puhelinten-tuotetiedot/phones/' + id + '.json')
    return product;
  }
}
