import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaComponent } from './onomatopia.component';

describe('OnomatopiaComponent', () => {
  let component: OnomatopiaComponent;
  let fixture: ComponentFixture<OnomatopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnomatopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
