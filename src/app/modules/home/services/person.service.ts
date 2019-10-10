import { Injectable } from '@angular/core';

import { IPerson } from '../models/person';

@Injectable()
export class PersonService {

    private static readonly LOCAL_STORAGE_PERSON = 'persons';
    persons: Array<IPerson>;

    /**
     * Gets the list of persons
     */
    getPersons(): IPerson[] {
         this.persons = JSON.parse(localStorage.getItem(PersonService.LOCAL_STORAGE_PERSON));
         return this.persons;
    }

    /**
     * Save  person details in local storage
     * @param person person details
     */
    savePerson(person: IPerson): void  {
        this.persons =  this.getPersonsStorageData();
        this.persons.push(person);
        this.savePersonsData();
    }

    /**
     * Deletes person details in local storage
     * @param personToDeleteId person id
     */
    deletePersonById(personToDeleteId: string): void  {
        this.persons =  this.getPersonsStorageData();
        if (this.persons.length > 0) {
            this.persons = this.persons.filter(item => item.id !== personToDeleteId);
            this.savePersonsData();
        }
    }

    /**
     * To save person data
     */
    private savePersonsData(): void {
        localStorage.setItem(PersonService.LOCAL_STORAGE_PERSON, JSON.stringify(this.persons));
    }

    /**
     * To get person data
     */
    private getPersonsStorageData(): IPerson[] {
        return JSON.parse(localStorage.getItem(PersonService.LOCAL_STORAGE_PERSON)) !== null ?
        JSON.parse(localStorage.getItem(PersonService.LOCAL_STORAGE_PERSON)) : [];
    }
}
