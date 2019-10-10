import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAddFormComponent } from './person-add-form.component';

describe('PersonAddFormComponent', () => {
  let component: PersonAddFormComponent;
  let fixture: ComponentFixture<PersonAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
