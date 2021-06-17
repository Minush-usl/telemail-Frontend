import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsSectionComponent } from './btns-section.component';

describe('BtnsSectionComponent', () => {
  let component: BtnsSectionComponent;
  let fixture: ComponentFixture<BtnsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
