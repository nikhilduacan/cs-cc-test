import { Component, OnInit } from '@angular/core';

import { PersonService } from '../services/person.service';
import { IPerson } from '../models/person';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  private static readonly MAX_RECORDS = 10;

  persons: IPerson[];
  pieChartData: Array<string>;
  isMaxRecordsAdded = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersonData();
    this.pieChartData = this.getChartData();
  }

  /**
   * Update the list data
   */
  refreshList(): void  {
   this.getPersonData();
   this.isMaxRecordsAdded = this.persons.length === HomeContainerComponent.MAX_RECORDS;
  }

  /**
   * Get the person list data
   */
  getPersonData(): void  {
    this.persons = this.personService.getPersons();
    this.pieChartData = this.getChartData();
  }

  /**
   * Get the data for pie chart to display
   */
  getChartData(): Array<string> {
    const arr: Array<number> = [0, 0, 0, 0];
    for (const person of this.persons) {
      if (person.age < 14 ) {
        arr[0]++;
      } else if (person.age < 25) {
        arr[1]++;
      } else if (person.age < 64) {
        arr[2]++;
      } else {
        arr[3]++;
      }
    }
    return arr.map(String);
  }
}
