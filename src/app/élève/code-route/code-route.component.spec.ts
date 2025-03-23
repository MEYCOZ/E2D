import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRouteComponent } from './code-route.component';

describe('CodeRouteComponent', () => {
  let component: CodeRouteComponent;
  let fixture: ComponentFixture<CodeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
