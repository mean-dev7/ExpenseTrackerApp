import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { SalaryComponent } from './salary/salary.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotpasswordComponent,canActivate:[AuthGuard]
  },
  {
    path:'sidebar',
    component:SidebarComponent,canActivate:[AuthGuard]
  },
  {
    path:'addexpense',
    component:AddExpenseComponent,canActivate:[AuthGuard]
  },
  {
    path:'salary',
    component:SalaryComponent,canActivate:[AuthGuard]
  },
  {
    path:'category',
    component:CategoryComponent,canActivate:[AuthGuard]
  },
  {
    path:'addcat',
    component:AddCategoryComponent,canActivate:[AuthGuard]
  },
  {
    path:'Home',
    component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'logout',
    component:LoginComponent,canActivate:[AuthGuard]
  },
  {
    path:'upload',
    component:UploadComponent,canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
  },
  {
    path:'adminLogin',
    component:AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
