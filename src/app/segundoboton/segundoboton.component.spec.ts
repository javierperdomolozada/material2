import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundobotonComponent } from './segundoboton.component';

describe('SegundobotonComponent', () => {
  let component: SegundobotonComponent;
  let fixture: ComponentFixture<SegundobotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundobotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundobotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
