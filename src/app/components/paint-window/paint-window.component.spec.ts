import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintWindowComponent } from './paint-window.component';

describe('PaintWindowComponent', () => {
  let component: PaintWindowComponent;
  let fixture: ComponentFixture<PaintWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
