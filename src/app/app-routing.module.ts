import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';

const routes: Routes = [

  { path: 'employee', component: EmployeeComponent  },
  { path: 'department', component: DepartmentComponent  },
  { path: 'showdepartment', component: ShowDepartmentComponent  },
  { path: 'addeditdepartment', component: AddEditDepartmentComponent  },
  { path: 'showemployee', component: ShowEmployeeComponent  },
  { path: 'addeditemployee', component: AddEditEmployeeComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
