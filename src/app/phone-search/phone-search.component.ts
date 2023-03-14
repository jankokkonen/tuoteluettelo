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
  products$!: Observable<Phone[]>;
  private searchTerms = new Subject<string>();

  constructor (private phoneService: PhoneService) {}

  @Output()
  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
  }
  //tallennetaan hakukentän string
  enterSearchValue: string = '';

  // määritetään output ja EventEmitter
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // emit enterSearchValue
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enterSearchValue);
  }
}



  

 