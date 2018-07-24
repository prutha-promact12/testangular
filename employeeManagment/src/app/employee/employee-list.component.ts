import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle:string="Employee List";
 employees: IEmployee[]=[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() : void {
    this.employeeService.getEmployees().subscribe(employees => this.employees=employees);
  }

}
