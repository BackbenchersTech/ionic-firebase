import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Employee } from '../../models/employee/employee.model';
import { EmployeeListService } from '../../services/employee-list/employee-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

  employee: Employee;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emp: EmployeeListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad EditEmployeePage');
    this.employee = this.navParams.get('employee');
  }

  saveEmployee(employee: Employee) {
    this.emp.editEmployee(employee)
      .then(() => {
        this.toast.show(`${employee.name} saved!`);
        this.navCtrl.setRoot('HomePage');
      });
  }

  removeEmployee(employee: Employee) {
    this.emp.removeEmployee(employee)
      .then(() => {
        this.toast.show(`${employee.name} deleted!`);
        this.navCtrl.setRoot('HomePage');
      });
  }

}
