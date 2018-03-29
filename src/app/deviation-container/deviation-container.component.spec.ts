import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationContainerComponent } from './deviation-container.component';

describe('DeviationContainerComponent', () => {
  let component: DeviationContainerComponent;
  let fixture: ComponentFixture<DeviationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
