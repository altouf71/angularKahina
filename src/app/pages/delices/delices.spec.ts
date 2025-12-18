import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delices } from './delices';

describe('Delices', () => {
  let component: Delices;
  let fixture: ComponentFixture<Delices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Delices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
