import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bijoux } from './bijoux';

describe('Bijoux', () => {
  let component: Bijoux;
  let fixture: ComponentFixture<Bijoux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bijoux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bijoux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
