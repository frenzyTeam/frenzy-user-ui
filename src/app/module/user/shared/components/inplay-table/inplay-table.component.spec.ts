import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayTableComponent } from './inplay-table.component';

describe('InplayTableComponent', () => {
  let component: InplayTableComponent;
  let fixture: ComponentFixture<InplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InplayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
