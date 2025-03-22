import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmoniteurComponent } from './navmoniteur.component';

describe('NavmoniteurComponent', () => {
  let component: NavmoniteurComponent;
  let fixture: ComponentFixture<NavmoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavmoniteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavmoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
