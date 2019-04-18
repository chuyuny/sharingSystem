import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionType1Component } from './question-type1.component';

describe('QuestionType1Component', () => {
  let component: QuestionType1Component;
  let fixture: ComponentFixture<QuestionType1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionType1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
