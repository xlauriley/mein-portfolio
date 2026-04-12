import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperWindowComponent } from './minesweeper-window.component';

describe('MinesweeperWindowComponent', () => {
  let component: MinesweeperWindowComponent;
  let fixture: ComponentFixture<MinesweeperWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinesweeperWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinesweeperWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
