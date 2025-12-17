import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMenu } from './h-menu';

describe('HMenu', () => {
  let component: HMenu;
  let fixture: ComponentFixture<HMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
