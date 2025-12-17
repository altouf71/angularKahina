import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMenu } from './v-menu';

describe('VMenu', () => {
  let component: VMenu;
  let fixture: ComponentFixture<VMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
