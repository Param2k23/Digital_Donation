import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [{path:"",component:SignupComponent},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"home_admin",component:HomeAdminComponent},
{path:"addCategory",component:AddCategoryComponent},
{path:"editCategory",component:EditCategoryComponent},
{path:"categories",component:CategoriesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
