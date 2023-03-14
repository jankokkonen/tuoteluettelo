import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone';
@Component({
  selector: 'app-phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: ['./phone-search.component.scss']
})
export class PhoneSearchComponent implements OnInit {
  sortOrder = 'asc'
  enterSearchValue: string = '';

  constructor () {}

  ngOnInit(): void {
  }

  // määritetään output ja EventEmitter
  @Output() 
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // emit enterSearchValue
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enterSearchValue);
    console.log(this.enterSearchValue);
  }

  @Output() 
  sortingChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onSortingChanged() {
    this.sortingChanged.emit(this.sortOrder);
  }
}



  

 