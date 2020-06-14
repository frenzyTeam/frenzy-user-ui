import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBetComponent } from './my-bet.component';

describe('MyBetComponent', () => {
  let component: MyBetComponent;
  let fixture: ComponentFixture<MyBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
