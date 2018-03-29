import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationListComponent } from './deviation-list.component';

describe('DeviationListComponent', () => {
  let component: DeviationListComponent;
  let fixture: ComponentFixture<DeviationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
