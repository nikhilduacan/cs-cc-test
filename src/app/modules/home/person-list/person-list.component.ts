import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PersonService } from '../services/person.service';
import { IPerson } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {

  @Input() persons: IPerson[];
  @Output() valueChange = new EventEmitter();

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'action'];

  constructor(private personService: PersonService) { }

  /**
   * Deletes person details on the basis of id
   * @param personId id of the person to delete
   */
  deletePerson(personId: string): void {
    this.personService.deletePersonById(personId);
    this.valueChange.emit();
  }
}
