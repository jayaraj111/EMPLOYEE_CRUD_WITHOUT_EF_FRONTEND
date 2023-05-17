import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'; 
import { Department } from 'src/app/Models/department'; 

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.scss']
})
export class ShowDepartmentComponent implements OnInit {
  departmentList: Department[] = [];
  display = "none";

  constructor(private _sharedservice: SharedService) {
   
  }

  ngOnInit(): void {
    this. GetDepartments();
  }

  GetDepartments() {
    this._sharedservice.GetDepartment().subscribe((response: any) => {
      this.departmentList = response;
    });
  }

  DeleteDepartment(id:string)
  {
    this._sharedservice.DeleteDepartment(id).subscribe((response: any) => {
      this.GetDepartments();
    });

  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
