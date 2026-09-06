import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {
  income: number = 0;
  taxRate: number = 0;
  taxAmount: number = 0;
  netIncome: number = 0;

  calculateTax(): void {
    this.taxAmount = (this.income * this.taxRate) / 100;
    this.netIncome = this.income - this.taxAmount;
  }

  reset(): void {
    this.income = 0;
    this.taxRate = 0;
    this.taxAmount = 0;
    this.netIncome = 0;
  }
}
