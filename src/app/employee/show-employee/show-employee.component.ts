import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'; 
import { Employee } from 'src/app/Models/employee'; 

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  employeeList: Employee[] = [];
  display = "none";

  constructor(private _sharedservice: SharedService) {
   
  }
 
  ngOnInit(): void {
    this. GetEmployees();
  }

  GetEmployees() {
    this._sharedservice.GetEmployee().subscribe((response: any) => {
      this.employeeList = response;
    });
  }

  DeleteEmployee(id:string)
  {
    this._sharedservice.DeleteEmployee(id).subscribe((response: any) => {
      this.GetEmployees();
    });

  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
