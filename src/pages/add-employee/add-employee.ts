import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Employee } from '../../models/employee/employee.model';
import { EmployeeListService } from '../../services/employee-list/employee-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
  employee: Employee = {
    name: '',
    title: '',
    salary: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private emp: EmployeeListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  addEmployee(employee: Employee) {
    this.emp.addEmployee(employee).then( ref => {
      console.log(ref)
      this.toast.show(`${employee.name} added!`);
      this.navCtrl.setRoot('HomePage', { key: ref.id })
    });
  }

}

// Firebase DB rules original
// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
