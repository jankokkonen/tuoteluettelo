import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../phone';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhonelistComponent {
  productList: Phone[] = [];
  
  constructor (private http: HttpClient, 
    private phoneService: PhoneService) {}
  // Data haetaan heti kun komponentti ladataan
  ngOnInit(): void {
    this.getProducts();
  }

  // Tallennetaan phoneServicen funktiolla getAllProducts() 
  // haettu data muuttujaan productList
  getProducts(): any {
    this.phoneService.getAllProducts().subscribe(
      (data: Phone[]) => {
      this.productList = data;
      // this.productList.sort((a, b) => (a.age < b.age)) ? 1
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }
}
