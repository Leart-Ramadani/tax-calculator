import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaxCalculatorComponent } from './tax-calculator.component';

describe('TaxCalculatorComponent', () => {
  let component: TaxCalculatorComponent;
  let fixture: ComponentFixture<TaxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxCalculatorComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate tax correctly', () => {
    component.income = 50000;
    component.taxRate = 20;
    component.calculateTax();
    expect(component.taxAmount).toBe(10000);
    expect(component.netIncome).toBe(40000);
  });

  it('should reset all fields', () => {
    component.income = 1000;
    component.taxRate = 10;
    component.calculateTax();
    component.reset();
    expect(component.income).toBe(0);
    expect(component.taxRate).toBe(0);
    expect(component.taxAmount).toBe(0);
    expect(component.netIncome).toBe(0);
  });
});
