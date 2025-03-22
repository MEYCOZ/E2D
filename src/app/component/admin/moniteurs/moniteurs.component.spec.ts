import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteursComponent } from './moniteurs.component';

describe('MoniteursComponent', () => {
  let component: MoniteursComponent;
  let fixture: ComponentFixture<MoniteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoniteursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoniteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
