import { Component, OnInit, Input } from '@angular/core';
import { PhoneService } from '../phone.service';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../phone';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhonelistComponent implements OnInit{
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
      this.sortProducts();
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }

  sortProducts() {
    if (this.sorting === 'asc') {
      this.productList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sorting === 'newest') {
      this.productList.sort((a, b) => a.age - b.age);
    }
  }



  // tähän tuodaan hakusana phone-search komponentista
  searchText: string = '';


  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

  sorting: string = '';

  
  onSortingChanged(sortOrder: string) {
    this.sorting = sortOrder;
    this.sortProducts();
    console.log(this.sorting)
}
}
