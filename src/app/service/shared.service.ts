import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Department } from '../Models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpclient:HttpClient) { }

  baseurl="https://localhost:7262/" //url of apicontroller


  //Department
  GetDepartment():Observable<Department[]>{
   return this.httpclient.get<Department[]>(this.baseurl+"Department/"+"GetDepartment");
  }

  
  CreateDepartment(dep: any):Observable<Department>{
    console.log(dep);
    dep.departmentId ="0";
    return this.httpclient.post<Department>(this.baseurl+"Department/", dep);
   }

   UpdateDepartment(dep: any):Observable<Department>{
    console.log(dep);
    return this.httpclient.put<Department>(this.baseurl+"Department/"+dep.DepartmentId, dep);
   }

   DeleteDepartment(departmentId: string):Observable<Department>{
    return this.httpclient.delete<Department>(this.baseurl+"Department/"+departmentId);
   }

   //Employee
   GetEmployee():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(this.baseurl+"Employee/"+"GetEmployee");
   }
 
   CreateEmployee(emp: Employee):Observable<Employee>{
    emp.employeeId ="0";
     return this.httpclient.post<Employee>(this.baseurl+"Employee/", emp);
    }
 
    UpdateEmployee(emp: Employee):Observable<Employee>{
     return this.httpclient.put<Employee>(this.baseurl+"Employee/"+emp.employeeId, emp);
    }
 
    DeleteEmployee(employeeId: string):Observable<Employee>{
     return this.httpclient.delete<Employee>(this.baseurl+"Employee/"+employeeId);
    }

}
