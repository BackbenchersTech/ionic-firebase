import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { EmployeeListService } from '../../services/employee-list/employee-list.service';
import { Employee } from '../../models/employee/employee.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employeeList$: Observable<Employee[]>;

  constructor(public navCtrl: NavController, private emp: EmployeeListService) {
    this.employeeList$ = this.emp
      .getEmployeeList() // gets the DB list
      .snapshotChanges() // both key and value
      // .valueChanges() // only values
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        }); 
  }

}
