import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelicesProduits } from './delices-produits';

describe('DelicesProduits', () => {
  let component: DelicesProduits;
  let fixture: ComponentFixture<DelicesProduits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelicesProduits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelicesProduits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
