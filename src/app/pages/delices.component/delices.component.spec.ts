import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelicesComponent } from './delices.component';

describe('DelicesComponent', () => {
  let component: DelicesComponent;
  let fixture: ComponentFixture<DelicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
