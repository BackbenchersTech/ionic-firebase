import { Injectable } from "@angular/core";
// import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore } from "angularfire2/firestore"

import { Employee } from "../../models/employee/employee.model";

@Injectable()
export class EmployeeListService {
    
    private employeeListRef = this.db.collection<Employee>('employee-list');
    
    // constructor(private db: AngularFireDatabase) {
    constructor(private db: AngularFirestore) {
    }

    getEmployeeList() {
        return this.employeeListRef;
    }

    addEmployee(employee: Employee) {
        return this.employeeListRef.add(employee);
    }

    editEmployee(employee: Employee) {
        return this.employeeListRef.doc(employee.key).update(employee);
    }

    removeEmployee(employee: Employee) {
        return this.employeeListRef.doc(employee.key).delete();
    }
}