import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaListComponent } from './onomatopia-list.component';

describe('OnomatopiaListComponent', () => {
  let component: OnomatopiaListComponent;
  let fixture: ComponentFixture<OnomatopiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnomatopiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnomatopiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
