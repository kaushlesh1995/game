import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedeshboardComponent } from './gamedeshboard.component';

describe('GamedeshboardComponent', () => {
  let component: GamedeshboardComponent;
  let fixture: ComponentFixture<GamedeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedeshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
