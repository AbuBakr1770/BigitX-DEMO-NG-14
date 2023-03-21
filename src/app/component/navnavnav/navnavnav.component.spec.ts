import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnavnavComponent } from './navnavnav.component';

describe('NavnavnavComponent', () => {
  let component: NavnavnavComponent;
  let fixture: ComponentFixture<NavnavnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavnavnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavnavnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
