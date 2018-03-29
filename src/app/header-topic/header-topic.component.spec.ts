import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopicComponent } from './header-topic.component';

describe('HeaderTopicComponent', () => {
  let component: HeaderTopicComponent;
  let fixture: ComponentFixture<HeaderTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
