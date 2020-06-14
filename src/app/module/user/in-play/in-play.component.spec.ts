import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPlayComponent } from './in-play.component';

describe('InPlayComponent', () => {
  let component: InPlayComponent;
  let fixture: ComponentFixture<InPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
