import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenues } from './tenues';

describe('Tenues', () => {
  let component: Tenues;
  let fixture: ComponentFixture<Tenues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tenues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
