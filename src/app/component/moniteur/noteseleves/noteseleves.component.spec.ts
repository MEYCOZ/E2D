import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteselevesComponent } from './noteseleves.component';

describe('NoteselevesComponent', () => {
  let component: NoteselevesComponent;
  let fixture: ComponentFixture<NoteselevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteselevesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteselevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
