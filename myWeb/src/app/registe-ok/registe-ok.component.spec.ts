import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteOkComponent } from './registe-ok.component';

describe('RegisteOkComponent', () => {
  let component: RegisteOkComponent;
  let fixture: ComponentFixture<RegisteOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
