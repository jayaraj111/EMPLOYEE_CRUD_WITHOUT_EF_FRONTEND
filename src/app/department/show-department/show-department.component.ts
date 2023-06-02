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
   department: Department[]=[];
  dep: any;

  

  ActivateAddEditDepComp:boolean=false;


  constructor(private _sharedservice: SharedService) {
   
  }

  ngOnInit(): void {
    this.GetDepartments();
    // dep: this.department = [
    //   {
    //     departmentId: "0",
    //     departmentName: ""
    //   }
    // ];

    // console.log(this.dep);
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
    this.ActivateAddEditDepComp=true;
    this.dep={
      DepartmentId:0,
      DepartmentName:""
      
    }

   
  
  
  }

  editClick(item: any){
    console.log(item);
    this.dep=item; 
     this.display = "block";
    this.ActivateAddEditDepComp=true;
  }

  onCloseHandled() {
    this.display = "none";
    this. GetDepartments();
  }

  // deleteClick(item){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshDepList();
  //     })
  //   }
  // }

 

}
