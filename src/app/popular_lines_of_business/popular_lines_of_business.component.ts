import { Component, OnInit } from '@angular/core';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { SummedQuotes } from '../summed_quotes';


@Component({
  selector: 'app-popular_lines_of_business',
  templateUrl: './popular_lines_of_business.component.html',
  styleUrls: ['./popular_lines_of_business.component.css']
})
export class TopLinesOfBusinessComponent implements OnInit {

 
  quotes: SummedQuotes[] = [];

  constructor(
    private lineOfBusinessService: LineOfBusinessService) {
  }

  ngOnInit() {
    this.getRecentQuotes();
  }

  getRecentQuotes(): void {
    this.lineOfBusinessService.getRecentQuotes()
      .subscribe(linesOfBusiness => {
        
        let sortArr = linesOfBusiness.sort(function(a, b){
        return b.count - a.count;
      });
        this.quotes = sortArr;
    });
  }
}