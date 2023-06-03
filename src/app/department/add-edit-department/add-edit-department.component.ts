import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service'; 

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit  {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId: string ='';
  DepartmentName:string ='';
 


   // @Input() dep: Department[]=[];
 
  ngOnInit(): void {
    this.DepartmentId=this.dep.departmentId;
    this.DepartmentName=this.dep.departmentName;
  }

  ngOnChanges() {
    if (this.dep) {
      this.DepartmentId=this.dep.departmentId;
      this.DepartmentName=this.dep.departmentName;
    } else {
      this.DepartmentId = '';
      this.DepartmentName='';
    }
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.CreateDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.UpdateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
