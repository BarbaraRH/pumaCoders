import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryComponent } from './voluntary.component';

describe('VoluntaryComponent', () => {
  let component: VoluntaryComponent;
  let fixture: ComponentFixture<VoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
