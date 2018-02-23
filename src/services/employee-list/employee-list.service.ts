import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Employee } from "../../models/employee/employee.model";

@Injectable()
export class EmployeeListService {
    
    private employeeListRef = this.db.list<Employee>('employee-list');
    
    constructor(private db: AngularFireDatabase) {

    }

    getEmployeeList() {
        return this.employeeListRef;
    }

    addEmployee(employee: Employee) {
        return this.employeeListRef.push(employee);
    }

    editEmployee(employee: Employee) {
        return this.employeeListRef.update(employee.key, employee);
    }

    removeEmployee(employee: Employee) {
        return this.employeeListRef.remove(employee.key);
    }
}