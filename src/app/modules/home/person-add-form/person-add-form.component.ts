import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { v4 as uuid } from 'uuid';

import { PersonService } from '../services/person.service';
import { IPerson } from '../models/person';
import { Constants} from '../../../shared/constants';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.scss']
})

export class PersonAddFormComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  addForm: FormGroup;

  firstNameFormControl = new FormControl(Constants.BLANK_STRING, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern(Constants.NAME_PATTERN)
  ]);

  lastNameFormControl = new FormControl(Constants.BLANK_STRING, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern(Constants.NAME_PATTERN)
  ]);

  ageFormControl = new FormControl(Constants.BLANK_STRING, [
    Validators.required,
    Validators.min(1),
    Validators.max(150),
    Validators.maxLength(20),
    Validators.pattern(Constants.AGE_PATTERN)
  ]);

  constructor( private personService: PersonService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: this.firstNameFormControl,
      lastName: this.lastNameFormControl,
      age: this.ageFormControl
    });
  }

  /**
   *  Save person details
   *  @param person  person details
   */
  save(person: IPerson): void  {
    const personData: IPerson = {
      id: uuid(),  // Saving unique id
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      age: this.addForm.value.age
    };
    this.personService.savePerson(personData);
    this.valueChange.emit();
  }
}
