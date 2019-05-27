import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { HomeComponent } from './home/home.component';
import { SalaryComponent } from './salary/salary.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { from, fromEvent } from 'rxjs';
import { UserService } from './shared/user.service';
import { MustMatchDirective } from './must-match.directive';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ServiceComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AddExpenseComponent,
    HomeComponent,
    SalaryComponent,
    CategoryComponent,
    AddCategoryComponent,
    MustMatchDirective,
    LogoutComponent,
    UploadComponent,
    FileSelectDirective,
    AdminComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    
    
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
