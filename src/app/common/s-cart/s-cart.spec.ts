import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCart } from './s-cart';

describe('SCart', () => {
  let component: SCart;
  let fixture: ComponentFixture<SCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
