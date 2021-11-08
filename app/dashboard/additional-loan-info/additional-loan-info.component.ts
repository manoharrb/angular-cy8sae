import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-loan-info',
  templateUrl: './additional-loan-info.component.html',
  styleUrls: ['./additional-loan-info.component.scss']
})
export class AdditionalLoanInfoComponent implements OnInit {

  loanInfo: any[] = [];
  constructor() { }

  ngOnInit() {
    this.loanInfo = new Array(10).fill({
      loanNo: '#01234567890',
      name: 'SmithCaleb',
      date: '10/10/2021'
    })
  }

}
