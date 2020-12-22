import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { CurdComponent } from './curd/curd.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormcurdComponent } from './formcurd/formcurd.component';


const routes: Routes = [  { path: 'contacts', component: ContactComponent }
,
{ path:  'home', component:  HomeComponent},
{path:'forms',component: FormComponent},
{path:'curd',component: CurdComponent},
{path:'add',component:CreateEmployeeComponent},
{path:'update/:id',component:UpdateEmployeeComponent},
{path:'details/:id',component:EmployeeDetailsComponent},
{path:'empoylees',component:EmployeeListComponent},
{path:'loginform',component:LoginformComponent},
{path:'FormCurd',component:FormcurdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
